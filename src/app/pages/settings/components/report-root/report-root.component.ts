import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ChartComponent,
} from 'ng-apexcharts';
import { ToastrService } from 'ngx-toastr';
import { Loading } from 'src/app/shared/decorators/loading.decorator';
import { ReportService } from './services/report.service';

export type ChartOptions = {
  title: any;
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-report-root',
  templateUrl: './report-root.component.html',
  styleUrl: './report-root.component.scss',
})
export class ReportRootComponent {
  @ViewChild('chart') chart: ChartComponent;
  chartOptions: Partial<ChartOptions> = {
    chart: {
      type: 'pie',
      height: 300,
      events: {
        dataPointSelection: (event, chartContext, config) => {
          this.filterData(config.dataPointIndex);
        },
      },
    },
    labels: ['Anúncios ativos', 'Anúncios inativos', 'Anúncios vendidos'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
  form;
  tableData = [];
  filteredTableData = [];
  totalizadores = [0, 0, 0];
  tableColumns = ['titulo', 'estadoAnuncio'];
  tableCaptions = ['Título', 'Status'];
  tableOptions = {
    estadoAnuncio: {
      Ativo: 'Ativo',
      Inativo: 'Inativo',
      Vendido: 'Vendido',
    },
  };
  filtro: number = null;
  currentPage = 1;

  constructor(
    private fb: FormBuilder,
    private service: ReportService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    const today = moment();
    const dataInicial = moment(today).startOf('month');

    this.form = this.fb.group({
      dataInicial: [dataInicial, Validators.required],
      dataFinal: [today, Validators.required],
    });

    this.form.valueChanges.subscribe((value) => {
      if (this.form.valid) {
        this.buscarRelatorio();
      }
    });

    setTimeout(() => {
      this.buscarRelatorio();
    }, 500);
  }

  @Loading()
  async buscarRelatorio() {
    const { dataInicial, dataFinal } = this.form.value;

    if (dataInicial > dataFinal) {
      this.toastr.error('Data inicial não pode ser maior que a data final');
      this.form.get('dataInicial').setValue(null);
      this.form.get('dataFinal').setValue(null);
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      return;
    }

    this.tableData = await this.service.RelatorioVendasAnuncio(
      dataInicial,
      dataFinal
    );
    this.filteredTableData = this.tableData;
    this.totalizadores = this.tableData.reduce(
      (acc, item) => {
        acc[0] += item.estadoAnuncio === 'Ativo' ? 1 : 0;
        acc[1] += item.estadoAnuncio === 'Inativo' ? 1 : 0;
        acc[2] += item.estadoAnuncio === 'Vendido' ? 1 : 0;
        return acc;
      },
      [0, 0, 0]
    );
  }

  filterData(dataPointIndex: number) {
    if (this.filtro !== dataPointIndex) {
      this.filtro = dataPointIndex;
      this.filteredTableData = this.tableData.filter(
        (item) => item.estadoAnuncio === dataPointIndex + 1
      );
    } else {
      this.filtro = null;
      this.filteredTableData = this.tableData;
    }
    this.currentPage = 1;
    this.cdr.detectChanges();
  }
}
