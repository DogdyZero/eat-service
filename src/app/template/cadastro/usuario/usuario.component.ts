import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  formulario:FormGroup;
  constructor(private formBuilder:FormBuilder) { }
  @Output() salvar  = new EventEmitter();
  validarFormulario(){
    this.formulario.valueChanges.subscribe(data =>{
      if(this.formulario.get('repetirSenha').dirty)
      if(this.formulario.valid ){
        this.salvar.emit(data);
      }
    })
  }
  validarSenha(campo:string){
    const validador =(formControl:FormControl) =>{
      if(!formControl){
        return null;
      }
      const control = (<FormControl>formControl).parent
      if(!control){
        return null
      }
      if(control.get(campo).value!=formControl.value){
        return {erro:'senhas diferentes'}
      }
    }
    return validador
  }
  ngOnInit() {
    this.formulario  = this.formBuilder.group({
      login:[null,Validators.required],
      senha:null,
      repetirSenha:[null, this.validarSenha('senha')]
    })
    this.validarFormulario()
  }

}
