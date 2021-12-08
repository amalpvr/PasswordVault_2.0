import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl ="https://localhost:44300/api";

  constructor(private http: HttpClient) { }

  getLoginList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/login');
  }

  addLogin(val:any){
    return this.http.post(this.APIUrl+'/login',val);
  }

  updateLogin(val:any){
    return this.http.put(this.APIUrl+'/login',val);
  }

  deleteLogin(val:any){
    return this.http.delete(this.APIUrl+'/login/'+val);
  }

//card details

  getCardList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/CardData');
  }

  addCard(val:any){
    return this.http.post(this.APIUrl+'/CardData',val);
  }

  updateCard(val:any){
    return this.http.put(this.APIUrl+'/CardData',val);
  }

  deleteCard(val:any){
    return this.http.delete(this.APIUrl+'/CardData/'+val);
  }
}
