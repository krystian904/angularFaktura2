import {MessageService} from './message.service';
import { Faktura } from './Faktura.model';
import {ListaComponent } from './lista.component';
import { ServiceListaFakturService } from './service-lista-faktur.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'angular-web-storage';


@Component({
  selector: 'app-nowa-faktura',
  templateUrl: './nowa-faktura.component.html',
  styleUrls: ['./nowa-faktura.component.css'],



})
export class NowaFakturaComponent implements OnInit {

  sprzedawcaName = "nazwa firmy";

  sprzedawcaAdres="adres firmy";

  sprzedawcaNIP = "adres sprzedawcaNIP";




  constructor(private service : ServiceListaFakturService) {


 }

  ngOnInit() {


  }

  wyslji(nazwaFirmy: string,
    adresFirmy: string,
    NIPFirmy: string,

    nazwaTowaru: string,
    ilosc: string,
    JM: string,
    Rabat: string,
    cenaNetto: string,
    wartoscNeto: string,
    vat: string,
    warVat: string,
    wartBrutto: string

  ){
    this.service.addFakture(new Faktura(
        nazwaFirmy,
        adresFirmy,
        NIPFirmy,

        "SprzedawcaNazwa ",
        "SprzedawcaAdres",
        "SprzedawcaNIP",

        nazwaTowaru,
        ilosc,
        JM,
        Rabat,
        cenaNetto,
        wartoscNeto,
        vat,
        warVat,
        wartBrutto

    ));


  }

 dl(){
   this.service.dlug();
 }
}
