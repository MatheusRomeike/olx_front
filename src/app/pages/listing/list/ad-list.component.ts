import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../services/listing.service';

interface FilterParams {
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  sortBy?: string;
  sortDirection?: string;
}

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.scss']
})
export class AdListComponent implements OnInit {
  ads = [];

  filteredAds = this.ads;
  categories = [{ id: "Todos", descricao: "Todos" }];
  selectedCategory = "Todos"; 
  sortDirection: 'asc' | 'desc' = 'asc';
  currentSortBy: string = '';

  @ViewChild('minPrice') minPriceInput: ElementRef;
  @ViewChild('maxPrice') maxPriceInput: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(async params => {
      if (params?.['sortBy']) this.currentSortBy = params['sortBy']
      if (params?.['sortDirection']) this.sortDirection = params['sortDirection']

      await this.loadAds(params);
      const apiCategories = await this.listingService.LoadCategorias()
      this.categories.push(...apiCategories);
    });
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params?.['minPrice']) this.minPriceInput.nativeElement.value = params['minPrice'];
      if (params?.['maxPrice']) this.maxPriceInput.nativeElement.value = params['maxPrice'];
      if (params?.['category']) this.selectedCategory = params?.['category']
    });
  }

  async loadAds(filterParams?: FilterParams): Promise<void> {
    this.ads = await this.listingService.List(filterParams);
    this.filteredAds = this.ads;
  }

  applyFilters(filterParams: FilterParams): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: filterParams,
      queryParamsHandling: 'merge' // Mantém os parâmetros de query existentes
    });
    this.loadAds(filterParams);
  }


  filterByCategory(event: Event): void {
    const category = (event.target as HTMLSelectElement).value;
    this.selectedCategory = category;
    const currentParams = this.route.snapshot.queryParams;
    this.applyFilters({ ...currentParams, category: this.selectedCategory });
  }

  filterByPriceRange(minPrice: string, maxPrice: string): void {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    const currentParams = this.route.snapshot.queryParams;

    this.applyFilters({
      ...currentParams,
      minPrice: !isNaN(min) ? min : undefined,
      maxPrice: !isNaN(max) ? max : undefined
    });
  }

  sortByTitle(): void {
    this.sortDirection = this.currentSortBy === 'title' ? (this.sortDirection === 'asc' ? 'desc' : 'asc') : 'asc';
    this.currentSortBy = 'title';
    this.sortAds('title');
  }
    
  sortByPrice(): void {
    this.sortDirection = this.currentSortBy === 'price' ? (this.sortDirection === 'asc' ? 'desc' : 'asc') : 'asc';
    this.currentSortBy = 'price';
    this.sortAds('price');
  }
      
  sortAds(sortBy: string): void {
    const currentParams = this.route.snapshot.queryParams;
    const sortParams = { ...currentParams, sortBy, sortDirection: this.sortDirection };
    this.applyFilters(sortParams);
  }

  toggleFavorite(ad): void {
    ad.interesse = !ad.interesse; // Alterna o estado de favorito do anúncio
    this.listingService.toggleInteresse(ad.id)
    // Aqui você pode adicionar lógica adicional, por exemplo, salvar o estado de favorito no backend
  }
}
