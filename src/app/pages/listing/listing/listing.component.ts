import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListingService } from './services/listing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  form;
  fotos: Array<any> = new Array<any>();
  id
  constructor(   
     private listingService: ListingService,
     private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.form = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      descricao: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      preco: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      anuncioId: new FormControl(null),
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id)
    this.loadById(this.id)
  }
  
  public salvar(){
    if(this.id){
      this.form.value.anuncioId = this.id
      this.listingService.Update(this.form.value)
    }
    else
      this.listingService.Add(this.form.value)
  }

  public async loadById(id){
    var objeto = await this.listingService.LoadById(this.id)
    this.form.patchValue(objeto);
  }
}
