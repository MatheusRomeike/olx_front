import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Loading } from 'src/app/shared/decorators/loading.decorator';

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

 constructor(   
     private listingService: ListingService,
     private route: ActivatedRoute,
     private helperService: HelperService
  ) { }


  ngOnInit() {
  
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id)
    this.loadById(this.id)
  }
  
  @Loading(
    null,
    true
  )
  public async loadById(id){
    this.objeto = await this.listingService.LoadById(this.id)
    this.fotos = []
    for (let i = 0; i < Math.min( this.objeto.fotos.length, 4); i++) {
      this.fotos.push(this.helperService.base64ToFile( this.objeto.fotos[i], `Foto ${i + 1}`));
    }
    
  }

  enviarMensagem(){

  }

  getPreviewUrl(file: File): string {

    return URL.createObjectURL(file);
  }


}
