import { Faktura } from './Faktura.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceListaFakturService {

listaFaktur: Faktura[];

  constructor( ) {
    this.listaFaktur = [];
  }

  add(text : string){
      console.log("dzila ServiceListaFakturService text " + text);
      //this.listaFaktur.push(new Faktura());

  }

addFakture(f : Faktura){
    this.listaFaktur.push(f);
    console.log("this.listaFaktur.push(f);");

}

dlug(){
    console.log(this.listaFaktur.length);

}


}
