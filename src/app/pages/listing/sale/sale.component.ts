import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing/services/listing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

 objeto: any
 id
 imagens = ['assets/images/imagem1.jpeg', 'assets/images/imagem2.jpeg'];
 constructor(   
     private listingService: ListingService,
     private route: ActivatedRoute
  ) { }


  ngOnInit() {
  
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id)
    this.loadById(this.id)
  }
  
  

  public async loadById(id){
    this.objeto = await this.listingService.LoadById(this.id)
  }

  enviarMensagem(){

  }

}
