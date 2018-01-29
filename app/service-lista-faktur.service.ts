import { Faktura } from './Faktura.model.ts';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceListaFakturService {

listaFaktur : Faktura[];
listaFaktur = [];
  constructor( ) {

  }

  add(text : string){
    console.log("dzila ServiceListaFakturService text " + text);
    this.listaFaktur.push(new Faktura);

  }

addFakture(f : Faktura){
  this.listaFaktur.push(f);
    console.log("this.listaFaktur.push(f);");

}

dlug(){
  console.log(this.listaFaktur.length);
  console.log("this.listaFaktur.lenght");
}


}
