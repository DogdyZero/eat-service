import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cardapio } from '../model/cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  url:string = 'api/cardapios'
  constructor(private http:HttpClient) { }

  getCardapios():Observable<Cardapio[]>{
    return this.http.get<Cardapio[]>(this.url);
  }
}
