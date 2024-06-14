import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-root/services/profile.service';
import { ListingService } from 'src/app/pages/listing/listing/services/listing.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.scss']
})
export class MyListingsComponent implements OnInit {

  constructor(    private profileService: ProfileService, private listingService: ListingService
  ) { }
 itens:any 
  ngOnInit() {
    this.obterItens() 
   }

  async obterItens(){
    this.itens = await this.profileService.LoadByUsuario().then();
    console.log(this.itens)
  }

  async desativar(id){
    console.log(id)
    await this.listingService.Desativar(id).then();
    this.obterItens()
  }
}
