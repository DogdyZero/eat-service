import { Cliente } from './cliente'
import { Pedido } from './pedido';

export class Usuario {
    id:number
    login:string
    senha:string
    cliente:Cliente;
    pedidos:Pedido[]
}
