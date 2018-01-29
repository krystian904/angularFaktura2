import {MessageService} from './message.service.ts';
import { Faktura } from './Faktura.model.ts';
import {ListaComponent } from './lista.component.ts';
import { ServiceListaFakturService } from './service-lista-faktur.service.ts';
import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'angular-web-storage';


@Component({
  selector: 'app-nowa-faktura',
  templateUrl: './nowa-faktura.component.html',
  styleUrls: ['./nowa-faktura.component.css'],



})
export class NowaFakturaComponent implements OnInit {
  sprzedawcaName : string;
  sprzedawcaName = "nazwa firmy";

  sprzedawcaAdres : string;
  sprzedawcaAdres="adres firmy";

  sprzedawcaNIP : string;
  sprzedawcaNIP = "adres sprzedawcaNIP";




  constructor(private service : ServiceListaFakturService) {


 }

  ngOnInit() {


  }

  wyslji(){
    this.service.addFakture(new Faktura());
  }

  ilosc(){
    this.service.dlug();

  }
}
