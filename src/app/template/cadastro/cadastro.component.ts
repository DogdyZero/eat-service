import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Cliente } from 'src/app/model/cliente';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario: Usuario;
  @Input()cliente: Cliente;
  // @Input()id:number
  salvarDados(e) {
    if (!this.cliente) {
      this.cliente = new Cliente();
    }
    this.cliente.nome = e.nome;
    this.cliente.cpf = e.cpf
    // this.cliente.rg = e.rg
    this.cliente.dataNascimento = e.dataNascimento
  }
  salvarEndereco(e) {
    if (!this.cliente) {
      this.cliente = new Cliente();
    }
    this.cliente.logradouro = e.logradouro
    this.cliente.bairro = e.bairro
    this.cliente.cidade = e.cidade
    this.cliente.estado = e.estado
  }
  salvarUsuario(e) {
    if (!this.usuario) {
      this.usuario = new Usuario();
    }
    this.usuario.login = e.login
    this.usuario.senha = e.senha
  }
  constructor(
    private usuarioService: UsuarioService,
    private clienteService: ClienteService,
    private route:Router) { }

  validarCamposObrigatorios() {
    if (!this.cliente) {
      return false;
    } else if (!this.usuario) {
      return false;
    } else if (!this.usuario.login) {
      return false;
    } else if (!this.usuario.senha) {
      return false
    } else if (!this.cliente.nome) {
      return false
    } else if (!this.cliente.logradouro) {
      return false
    } else if (!this.cliente.bairro) {
      return false
    } else if (!this.cliente.cidade) {
      return false
    } else if (!this.cliente.estado) {
      return false
    } else {
      return true
    }

  }
  salvarCliente() {
    let res = this.validarCamposObrigatorios()
    if (res) {
      this.clienteService.salvarCliente(this.cliente).subscribe(data=>{
        this.usuario.cliente = data;
        this.usuarioService.salvarUsuario(this.usuario).subscribe(res=>{
          this.route.navigate(['/'])
        });
      })
    }
  }
  voltar(){
    
  }
  ngOnInit() {
    // if(this.cliente){
      // this.usuarioService.getUsuario(this.id).subscribe(data=>{
      //   this.cliente = data.cliente;
      //   console.log(this.cliente)
      // })

    // }
  }

}
