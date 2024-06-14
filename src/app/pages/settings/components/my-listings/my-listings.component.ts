import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/pages/listing/services/listing.service';
import { ProfileService } from '../profile-root/services/profile.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.scss'],
})
export class MyListingsComponent implements OnInit {
  constructor(
    private profileService: ProfileService,
    private listingService: ListingService
  ) {}
  itens: any;
  ngOnInit() {
    this.obterItens();
  }

  async obterItens() {
    this.itens = await this.profileService.LoadByUsuario().then();
    console.log(this.itens);
  }

  async desativar(id) {
    await this.listingService.AlterarStatus(id, 2).then();
    this.obterItens();
  }

  async vender(id) {
    await this.listingService.AlterarStatus(id, 3).then();
    this.obterItens();
  }
}
