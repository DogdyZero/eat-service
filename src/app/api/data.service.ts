import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Usuario } from '../model/usuario';
import { Cardapio } from '../model/cardapio';
import { Cliente } from '../model/cliente';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class Dataservice implements InMemoryDbService {
  createDb() {
    let clientes:Cliente[] =[
      {id:1,nome:'Douglas',cpf:null,dataNascimento:null,logradouro:'Rua A',bairro:'Cesar de Souza',cidade:'Mogi das Cruzes',estado:'SP'},
      {id:2,nome:'Bombasto',cpf:null,dataNascimento:null,logradouro:'Rua B',bairro:'Cesar de Souza',cidade:'Mogi das Cruzes',estado:'SP'},
      {id:3,nome:'Magneta',cpf:null,dataNascimento:null,logradouro:'Rua C',bairro:'Cesar de Souza',cidade:'Mogi das Cruzes',estado:'SP'},
      {id:4,nome:'Tornado',cpf:null,dataNascimento:null,logradouro:'Rua D',bairro:'Cesar de Souza',cidade:'Mogi das Cruzes',estado:'SP'}

    ]
    let cardapios:Cardapio[]=[
      {id:1,nome:'Feijoada', valor:17.00, imagem:'assets/feijoada.jpeg', descricao:'Deliciosa Feijoada composta por arroz, farofa, couve refogada, torresmo, além dos tradicionais ingredientes da feijoada que dão ao prato o perfeito sabor'},
      {id:2,nome:'Calabreza', valor:9.00,imagem:'assets/calabreza.jpeg', descricao:'Prato tipico da cozinha mineria, nesse prato é servido o tradicional arroz branco, feijão carioca, salada e fritas'},
      {id:3,nome:'Bife Acebolado', valor:9.00,imagem:'assets/bife.jpeg', descricao:'Prato tipico da cozinha mineria, nesse prato é servido o tradicional arroz branco, feijão carioca, salada e fritas'},
      {id:4,nome:'File Merluza', valor:17.00,imagem:'assets/merluza.jpeg', descricao:'Prato tipico da cozinha , nesse prato é servido o tradicional arroz branco, feijão carioca, salada e fritas'},

    ];
    let pedidos:Pedido[]=[
      {id:1, data:new Date(),cardapio: cardapios[1],entregue:true,pago:true},
      {id:2, data:new Date(),cardapio: cardapios[0],entregue:true,pago:true}
    ];

    let usuarios:Usuario[] = [
      { id: 1, login: 'douglas',senha:'douglas', cliente:clientes[0],pedidos:[pedidos[0], pedidos[1]] },
      { id: 2, login: 'Bombasto',senha: 'bombasto', cliente:clientes[1],pedidos:null},
      { id: 3, login: 'Magneta',senha: 'magneto', cliente:clientes[2], pedidos:null },
      { id: 4, login: 'Tornado' ,senha: 'tornado', cliente:clientes[3], pedidos:null }
    ];

    return {usuarios,cardapios,clientes, pedidos};
  }}
