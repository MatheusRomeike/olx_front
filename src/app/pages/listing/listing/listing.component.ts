import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListingService } from '../services/listing.service';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Loading } from 'src/app/shared/decorators/loading.decorator';
import { ToastrMessages } from 'src/app/shared/models/toastr-messages';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  form;
  fotos: Array<any> = new Array<any>(); // Adicionei essa variável para armazenar as fotos que o usuário selecionar, e depois enviar junto com o formulário
  id
  categorias
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
      categoriaId: new FormControl(''),
      anuncioId: new FormControl(0),
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    
    if(this.id)
     this.loadById(this.id)

    this.listingService.LoadCategorias().then((res) => {
      this.categorias = res;
    });
  }
  
  @Loading(
    {
      Sucesso: new ToastrMessages({
        Titulo: 'Anúncio salvo com sucesso!',
      }),
    },
    true
  )
  public async salvar(){
    if(this.id > 0){
      this.form.value.anuncioId = this.id
      this.listingService.Update(this.form.value)
    }
    else{
      let formData = new FormData();
      let dados = {
        ...this.form.value
      };
    
      for (let key in dados) {
        formData.append(key, dados[key]);
      }
      
      var object = await this.listingService.Add(formData)
      var fotosSalvar = [
        this.fotos.length == 1 ? this.fotos[0] : null,
        this.fotos.length == 2 ? this.fotos[1] : null,
        this.fotos.length == 3 ? this.fotos[2] : null,
        this.fotos.length == 4 ? this.fotos[3] : null,
        ]
      this.form.patchValue({anuncioId: object.result})
      var sequenciaFoto = 0
      fotosSalvar.forEach( foto => {  
        if(foto != null){
          foto.forEach(async p => {
            sequenciaFoto++ 
            await this.salvarFotos(p, sequenciaFoto)
        })
        }
      
      });
    }
  }
  

  @Loading(
    null,
    true
  )
  public async loadById(id){
    var objeto = await this.listingService.LoadById(id, 0)
    this.fotos = []
    if(this.fotos.length)
      for (let i = 0; i < Math.min(objeto.fotos.length, 4); i++) {
        this.fotos.push(this.helperService.base64ToFile(objeto.fotos[i], `Foto ${i + 1}`));
      }
    this.form.patchValue(objeto);
  }


  public async salvarFotos(foto, sequenciaFoto){
    console.log(foto)
    let formData = new FormData();
      let dados = {
        ...this.form.value,
        foto: foto,
        sequenciaFoto: sequenciaFoto
      };
    
      for (let key in dados) {
        formData.append(key, dados[key]);
      }
      
      await this.listingService.AddFotos(formData)
  }
  
  filesChange(evento){
    this.fotos.push(evento)
  }
}
