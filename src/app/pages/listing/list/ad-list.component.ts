import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../services/listing.service';

interface FilterParams {
  minPrice?: number;
  maxPrice?: number;
  category?: string;
}

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.scss']
})
export class AdListComponent implements OnInit {
  ads = [
    // { anuncioId: 1, title: 'Anúncio 1', photo: 'assets/images/imagem1.jpeg', description: 'Descrição 1', price: 100, category: 'Categoria 1' },
    // { id: 2, title: 'Anúncio 2', photo: 'assets/images/imagem2.jpeg', description: 'Descrição 2', price: 200, category: 'Categoria 2' },
    // { id: 3, title: 'Anúncio 3', photo: 'assets/images/imagem1.jpeg', description: 'Descrição 3', price: 150, category: 'Categoria 3' },
    // { id: 4, title: 'Anúncio 4', photo: 'assets/images/imagem2.jpeg', description: 'Descrição 4', price: 300, category: 'Categoria 1' },
    // { id: 5, title: 'Anúncio 5', photo: 'assets/images/imagem1.jpeg', description: 'Descrição 5', price: 120, category: 'Categoria 2' },
    // { id: 6, title: 'Anúncio 6', photo: 'assets/images/imagem2.jpeg', description: 'Descrição 6', price: 250, category: 'Categoria 3' },
    // { id: 7, title: 'Anúncio 7', photo: 'assets/images/imagem1.jpeg', description: 'Descrição 7', price: 180, category: 'Categoria 1' },
    // { id: 8, title: 'Anúncio 8', photo: 'assets/images/imagem2.jpeg', description: 'Descrição 8', price: 350, category: 'Categoria 2' },
    // { id: 9, title: 'Anúncio 9', photo: 'assets/images/imagem1.jpeg', description: 'Descrição 9', price: 400, category: 'Categoria 1' },
    // { id: 10, title: 'Anúncio 10', photo: 'assets/images/imagem2.jpeg', description: 'Descrição 10', price: 220, category: 'Categoria 2' },
    // { id: 11, title: 'Anúncio 11', photo: 'assets/images/imagem1.jpeg', description: 'Descrição 11', price: 130, category: 'Categoria 3' },
    // { id: 12, title: 'Anúncio 12', photo: 'assets/images/imagem2.jpeg', description: 'Descrição 12', price: 160, category: 'Categoria 1' },
    // { id: 13, title: 'Anúncio 13', photo: 'assets/images/imagem1.jpeg', description: 'Descrição 13', price: 90, category: 'Categoria 2' },
    // { id: 14, title: 'Anúncio 14', photo: 'assets/images/imagem2.jpeg', description: 'Descrição 14', price: 170, category: 'Categoria 3' },
    // { id: 15, title: 'Anúncio 15', photo: 'assets/images/imagem1.jpeg', description: 'Descrição 15', price: 200, category: 'Categoria 1' },
    // { id: 16, title: 'Anúncio 16', photo: 'assets/images/imagem2.jpeg', description: 'Descrição 16', price: 270, category: 'Categoria 2' },
    // { id: 17, title: 'Anúncio 17', photo: 'assets/images/imagem1.jpeg', description: 'Descrição 17', price: 240, category: 'Categoria 3' },
    // { id: 18, title: 'Anúncio 18', photo: 'assets/images/imagem2.jpeg', description: 'Descrição 18', price: 310, category: 'Categoria 1' },
    // { id: 19, title: 'Anúncio 19', photo: 'assets/images/imagem1.jpeg', description: 'Descrição 19', price: 350, category: 'Categoria 2' },
    // { id: 20, title: 'Anúncio 20', photo: 'assets/images/imagem2.jpeg', description: 'Descrição 20', price: 400, category: 'Categoria 3' }
  ];



  filteredAds = this.ads;
  categories: string[];
  sortDirection: 'asc' | 'desc' = 'asc';
  currentSortBy: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService
  ) { }


  async ngOnInit(): Promise<void> {
    this.ads = await this.listingService.List()

    this.categories = this.getUniqueCategories();

    // Verifica se há parâmetros de filtro na query string da URL ao carregar a página
    this.route.queryParams.subscribe(params => {
      const filterParams: FilterParams = {
        minPrice: params['minPrice'] ? +params['minPrice'] : undefined,
        maxPrice: params['maxPrice'] ? +params['maxPrice'] : undefined,
        category: params['category']
      };

      // Aplica os filtros
      this.applyFilters(filterParams);
    });
  }

  

  applyFilters(filterParams: FilterParams): void {
    const { minPrice, maxPrice, category } = filterParams;
    this.filteredAds = this.ads;

    if (minPrice !== undefined && maxPrice !== undefined && minPrice <= maxPrice) {
      this.filteredAds = this.filteredAds.filter(ad => ad.price >= minPrice && ad.price <= maxPrice);
    }

    if (category && category !== 'Todos') {
      this.filteredAds = this.filteredAds.filter(ad => ad.category === category);
    }

    // Atualiza a URL com os parâmetros de filtro na query string
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { minPrice, maxPrice, category },
      queryParamsHandling: 'merge' // Mantém os parâmetros de query existentes
    });
  }

  getUniqueCategories(): string[] {
    const uniqueCategories = new Set<string>();
    this.ads.forEach(ad => uniqueCategories.add(ad.category));
    return Array.from(uniqueCategories);
  }

  filterByCategory(event: Event): void {
    const category = (event.target as HTMLSelectElement).value;
    const currentParams = this.route.snapshot.queryParams;
    this.applyFilters({ ...currentParams, category });
  }

  filterByPriceRange(minPrice: string, maxPrice: string): void {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    const currentParams = this.route.snapshot.queryParams;

    if (!isNaN(min) && !isNaN(max)) {
      this.applyFilters({ ...currentParams, minPrice: min, maxPrice: max });
    } else {
      this.applyFilters({ ...currentParams, minPrice: undefined, maxPrice: undefined });
    }
  }

  // sortByTitle(): void {
  //   this.filteredAds.sort((a, b) => a.title.localeCompare(b.title));
  // }

  // sortByPrice(): void {
  //   this.filteredAds.sort((a, b) => a.price - b.price);
  // }

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
    this.filteredAds.sort((a, b) => {
      if (sortBy === 'title') {
        return this.sortDirection === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      } else if (sortBy === 'price') {
        return this.sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  }
}
