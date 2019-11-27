import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-meu-pedido',
  templateUrl: './meu-pedido.component.html',
  styleUrls: ['./meu-pedido.component.css']
})

export class MeuPedidoComponent implements OnInit {
  @Input() id:number;

  displayedColumns: string[] = ['id','data', 'nome', 'valor','pago', 'entregue'];
  pedidos:Pedido[]=[] ;
  
  constructor(private usuariosService:UsuarioService) {
  }

  ngOnInit() {
    this.usuariosService.getUsuario(this.id).subscribe(data=>{
      this.pedidos = data.pedidos;
    })

  }

}
