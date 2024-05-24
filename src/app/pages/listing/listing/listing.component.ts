import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListingService } from './services/listing.service';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  form;
  fotos: Array<any> = new Array<any>(); // Adicionei essa variável para armazenar as fotos que o usuário selecionar, e depois enviar junto com o formulário
  foto
  id
  constructor(   
     private listingService: ListingService,
     private route: ActivatedRoute,
     private helperService: HelperService
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
      anuncioId: new FormControl(0),
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    
    if(this.id)
     this.loadById(this.id)
  }
  
  public salvar(){
    if(this.id > 0){
      this.form.value.anuncioId = this.id
      this.listingService.Update(this.form.value)
    }
    else{
      let formData = new FormData();
      let dados = {
        ...this.form.value,
        foto1: this.fotos.length > 0 ? this.fotos[0][0] : null,
        foto2: this.fotos.length > 1 ? this.fotos[1][0] : null,
        foto3: this.fotos.length > 2 ? this.fotos[2][0] : null,
        foto4: this.fotos.length > 3 ? this.fotos[3][0] : null,
      };
    
      for (let key in dados) {
        formData.append(key, dados[key]);
      }
      
      this.listingService.Add(formData)
    }
  }

  public async loadById(id){
    var objeto = await this.listingService.LoadById(id)
    objeto.fotos.length > 0 ? this.fotos.push([this.helperService.base64ToFile(objeto.fotos[0], 'Foto 1')]) : null
    objeto.fotos.length > 1 ? this.fotos.push([this.helperService.base64ToFile(objeto.fotos[1], 'Foto 2')]) : null
    objeto.fotos.length > 2 ? this.fotos.push([this.helperService.base64ToFile(objeto.fotos[2], 'Foto 3')]) : null
    objeto.fotos.length > 3 ? this.fotos.push([this.helperService.base64ToFile(objeto.fotos[3], 'Foto 4')]) : null
    this.form.patchValue(objeto);
  }
}
