import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cardapio } from 'src/app/model/cardapio';
import { Pedido } from 'src/app/model/pedido';
import { CardapioService } from 'src/app/services/cardapio.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent implements OnInit {
  constructor(
    private cardapioService:CardapioService,
    private usuarioService:UsuarioService, 
    private pedidoService:PedidosService) { }
  @Input()id:number;
  @Output() salvo = new EventEmitter();

  cards=[];
  salvar(id:number){
    let pedido:Pedido = new Pedido();
    let cardapio: Cardapio =  new Cardapio();
    this.cards.forEach(card => {
      card.id == id?cardapio=card:null
    })
    pedido.cardapio = cardapio;
    pedido.data = new Date();

    this.usuarioService.getUsuario(this.id).subscribe(usuario =>{
      this.pedidoService.salvar(pedido).subscribe(ped =>{
        if(!usuario.pedidos){
          usuario.pedidos = new Array();
        }
        usuario.pedidos.push(ped);
        this.usuarioService.updateUsuario(usuario,this.id).subscribe(res=>{
          this.salvo.emit(100);
        })
      })
    }) 
  }
  ngOnInit() {
    this.cardapioService.getCardapios().subscribe(data=>{
      this.cards = data;
    })
  }

}
