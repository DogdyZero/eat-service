import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  url:string = 'api/pedidos'
  constructor(private http:HttpClient) { }
  
  getPedidoById(id:number):Observable<Pedido>{
    return this.http.get<Pedido>(`${this.url}/${id}`)
  }
  salvar(pedido:Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.url,pedido)
  }
}
