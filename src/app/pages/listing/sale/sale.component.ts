import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing/services/listing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Loading } from 'src/app/shared/decorators/loading.decorator';
import { ToastrService } from 'ngx-toastr';

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
 usuarioId

 constructor(   
     private listingService: ListingService,
     private route: ActivatedRoute,
     private router: Router,
     private helperService: HelperService,
     private toastrService: ToastrService,

  ) { }


  ngOnInit() {
  
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.usuarioId = params['usuarioId'];
    });
    this.loadById()
  }
  

  @Loading(
    null,
    true
  )
  public async loadById(){
      try{
        this.objeto = await this.listingService.LoadById(this.id, this.usuarioId)
        this.fotos = []
        for (let i = 0; i < Math.min( this.objeto.fotos.length, 4); i++) {
          var foto = this.helperService.base64ToFile( this.objeto.fotos[i], `Foto ${i + 1}`)
          var url = URL.createObjectURL(foto)
          console.log(url)
          this.fotos.push(url);
        }
      }
      catch(e){
        // this.router.navigate(['/'])
        this.toastrService.error('Anúncio não encontrado.')
        console.error(e)
      }
    }
    
    enviarMensagem(){
    }

  getPreviewUrl(file): string {
    console.log(file)
    return URL.createObjectURL(file);
  }


}
