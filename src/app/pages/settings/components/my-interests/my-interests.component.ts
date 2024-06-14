import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListingService } from 'src/app/pages/listing/services/listing.service';

@Component({
  selector: 'app-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrl: './my-interests.component.scss'
})
export class MyInterestsComponent {

  itens: []
  
  constructor(
    private listingService: ListingService,
    private toastrService: ToastrService,
    private router: Router
  ) { }


  redirect(item) {
    console.log(item)
    if (item.estadoAnuncio != "Vendido") {
      this.router.navigate([`/anuncio/${item.anuncioId}`])
    }
  }

}
