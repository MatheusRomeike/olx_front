import { Component } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  constructor(
    public config: NgbProgressbarConfig,
    public loadingService: LoadingService
  ) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'dark';
  }
}
