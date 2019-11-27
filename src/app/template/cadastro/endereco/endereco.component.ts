import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  formulario:FormGroup;
  @Output()salvar = new EventEmitter();
  @Input() cliente:Cliente;
  constructor(private formBuilder:FormBuilder) { }
  validarFormulario(){
    this.formulario.valueChanges.subscribe(data =>{
      if(this.formulario.valid){
        this.salvar.emit(data);
      }
    })
  }
  ngOnInit() {
    if(!this.cliente){
      this.formulario = this.formBuilder.group({
        logradouro:[null , Validators.required],
        bairro:[null, Validators.required],
        cidade:[null , Validators.required],
        estado:[null, Validators.required]
      })
    } else {
      this.formulario = this.formBuilder.group({
        logradouro:[this.cliente.logradouro , Validators.required],
        bairro:[this.cliente.bairro, Validators.required],
        cidade:[this.cliente.cidade , Validators.required],
        estado:[this.cliente.estado, Validators.required]
      })
    }

    this.validarFormulario()
  }

}
