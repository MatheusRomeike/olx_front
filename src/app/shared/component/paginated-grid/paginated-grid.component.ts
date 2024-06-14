import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginated-grid',
  templateUrl: './paginated-grid.component.html',
  styleUrls: ['./paginated-grid.component.scss'],
})
export class PaginatedGridComponent implements OnChanges {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() captions: string[] = [];
  @Input() options: any = {};
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  paginatedData: any[] = [];
  totalPages: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['itemsPerPage']) {
      this.updatePagination();
    }
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
}
