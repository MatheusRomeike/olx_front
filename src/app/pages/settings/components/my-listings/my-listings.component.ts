import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-root/services/profile.service';
import { ListingService } from 'src/app/pages/listing/services/listing.service';
import { Loading } from 'src/app/shared/decorators/loading.decorator';
import { ToastrMessages } from 'src/app/shared/models/toastr-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.scss']
})
export class MyListingsComponent implements OnInit {

  public estadoDesativado = 2
  public estadoVendido = 3


  constructor(    private profileService: ProfileService, private listingService: ListingService, private toastrService: ToastrService, private router: Router
  ) { }
 itens:any 
  ngOnInit() {
    this.obterItens() 
   }

  async obterItens(){
    this.itens = await this.profileService.LoadByUsuario().then();
    console.log(this.itens)
  }

  @Loading(
    null,
    true
  )
  public async alterarStatus(item, estado){
    if(item.estadoAnuncio == "Vendido"){
      this.toastrService.error('Anúncio já foi vendido.')
      return
    }
    await this.listingService.AlterarStatus(item.anuncioId, estado).then();
    this.toastrService.success('Anúncio vendido com sucesso.')
    this.obterItens()
  }

  redirect(item){
    console.log(item)
    if(item.estadoAnuncio != "Vendido"){
      this.router.navigate([`/anuncio/${item.anuncioId}`])
  }
  }
}
