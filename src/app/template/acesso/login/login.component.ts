import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;
  erro:string;
  limparForm(){
      this.formulario.valueChanges.subscribe(data=>{
        this.erro=null;
    })
  }
  constructor(
    private formBuilder:FormBuilder,
    private route:Router,
    private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      login:null,
      senha:null
    })
    this.limparForm()
  }
  acessar(){
    let usuario:Usuario = new Usuario();
    usuario.login = this.formulario.get('login').value;
    usuario.senha = this.formulario.get('senha').value;
    if(usuario.login.length>2&& usuario.senha.length>2){
      this.usuarioService.efetuarLogin(usuario).subscribe(data =>{
        if(data.length==1){
          data.filter(obj => usuario.id = obj.id)
          this.route.navigate(['/menu',usuario.id])
        } else{
          this.erro ='Usuário não localizado!';
        }
      })
    } else{
      this.erro='Quantidade inválida de caracteres! '
    }
  }

  // acessar(login:string,senha:string){
  //   if(login=='douglas' && senha=='douglas'){
  //     this.route.navigate(['/menu']);
  //   }
  // }

}
