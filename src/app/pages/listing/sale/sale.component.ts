import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing/services/listing.service';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

 objeto: any
 id
 fotos = [];
 slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
 file
 slides  = []

 constructor(   
     private listingService: ListingService,
     private route: ActivatedRoute,
     private helperService: HelperService
  ) { }


  ngOnInit() {
  
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.loadById(this.id)
  }
  

  public async loadById(id){
    this.objeto = await this.listingService.LoadById(this.id)
    this.fotos = []
    for (let i = 0; i < Math.min( this.objeto.fotos.length, 4); i++) {
      var foto = this.helperService.base64ToFile( this.objeto.fotos[i], `Foto ${i + 1}`)
      var url = URL.createObjectURL(foto)
      console.log(url)
      this.fotos.push(url);
    }
    
    }
    
    enviarMensagem(){
    }

  getPreviewUrl(file): string {
    console.log(file)
    return URL.createObjectURL(file);
  }


}
