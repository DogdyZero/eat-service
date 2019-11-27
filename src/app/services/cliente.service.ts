import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url:string = 'api/clientes'

  constructor(private http:HttpClient) { }

  salvarCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url,cliente)
  }
}
