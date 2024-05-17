import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-root/services/profile.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.scss']
})
export class MyListingsComponent implements OnInit {

  constructor(    private profileService: ProfileService
  ) { }
 itens:any 
  ngOnInit() {
    this.obterItens() 
   }

  async obterItens(){
    this.itens = await this.profileService.LoadByUsuario().then();
    console.log(this.itens)
  }
}
