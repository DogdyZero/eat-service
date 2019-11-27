import { Cardapio } from './cardapio'

export class Pedido {
    id:number
    data:Date
    cardapio:Cardapio
    pago:boolean
    entregue:boolean;
}
