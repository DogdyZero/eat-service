import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  posicao:number=0;
  idUsuario:number;
  cliente:Cliente;
  constructor(
    private usuarioService:UsuarioService,
    private activatedRoute :ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.idUsuario = params['idUsuario'];
        this.usuarioService.getUsuario(this.idUsuario).subscribe(data =>{
          this.cliente = data.cliente
        })
      }
    )
  }
  verificar(e){
    this.posicao=e;
  }

}
