import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
  formulario:FormGroup;
  constructor(private formBuilder:FormBuilder) { }
  @Input()cliente
  @Output() salvar = new EventEmitter()
  validarFormulario(){
    this.formulario.valueChanges.subscribe(data =>{
      if(this.formulario.valid){
        this.salvar.emit(data);
      }
    })
  }
  ngOnInit() {
    console.log(this.cliente)
    if(!this.cliente){
      this.formulario = this.formBuilder.group({
        nome:[null, Validators.required],
        cpf:null,
        rg:null,
        dataNascimento:null
      })
    } else{
      this.formulario = this.formBuilder.group({
        nome:[this.cliente.nome, Validators.required],
        cpf:this.cliente.cpf,
        rg:this.cliente.cpf,
        dataNascimento:this.cliente.dataNascimento
      })
    }
    this.validarFormulario()
  }

}
