import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Bank} from '../modules/bank.module';
import 'rxjs/add/operator/map';
/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';*/

@Injectable()
export class RestBankService {

  constructor(private http:Http) { }

  private url='http://localhost:9001/bank';

  getAllBanks(): Observable<Bank[]>{
    return this.http
      .get(this.url, {headers: this.getHeaders()})
      .map(mapBank=> mapBank.json());

  }

    private getHeaders(){
   // I included these headers because otherwise FireFox
   // will request text/html
   let headers = new Headers();
   headers.append('Accept', 'application/json');
   return headers;
 }

 //get(id: number): Observable<Bank> {
 get(id: number) {
   return  this.http
     .get(this.url+'/'+{id}, {headers: this.getHeaders()})
     .map(mapBank=>{ mapBank.json();});

 }

sendPost(bank:Bank):Observable<Response>{
    return this.http.post(this.url, bank);
}

sendDelete(codeBank:string):Observable<Response>{
  return this.http.delete(this.url+"/"+codeBank);
}

sendUpdate(bank:Bank):Observable<Response>{
  return this.http.put(this.url,bank);
}


/*    public mapBank(response:Response):Bank{
   // toBank looks just like in the previous example
   return response;
 }*/

 /*private toPerson(r:any): Bank{
   let bank = <Bank>({
      codeSucursal:r.codeSucursal,
      nameSucursal:r.nameSucursal
     /*
     id: extractId(r),
     url: r.url,
     name: r.name,
     weight: Number.parseInt(r.mass),
     height: Number.parseInt(r.height),*/
   /*});
 console.log('Parsed person:', bank);
 return bank;
}*/

}
