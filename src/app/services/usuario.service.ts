import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url:string = 'api/usuarios'
  constructor(private http:HttpClient) { }
  
  efetuarLogin(usuario:Usuario):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}?login=${usuario.login}&senha=${usuario.senha}`);
  }
  getUsuario(id:number){
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  updateUsuario(usuario:Usuario, id:number):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.url}/${id}`,usuario)
  }
  salvarUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url,usuario)
  }
}
