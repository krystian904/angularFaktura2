import { Faktura } from './Faktura.model.ts';
import {ListaComponent } from './lista.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nowa-faktura',
  templateUrl: './nowa-faktura.component.html',
  styleUrls: ['./nowa-faktura.component.css']
})
export class NowaFakturaComponent implements OnInit {
  sprzedawcaName:string;
  sprzedawcaName="nazwa firmy";

  sprzedawcaAdres:string;
  sprzedawcaAdres="adres firmy";

  sprzedawcaNIP:string;
  sprzedawcaNIP="adres sprzedawcaNIP";


  ListaCom : ListaComponent;
  constructor() { }

  ngOnInit() {


  }

  wyslji(){
    this.ListaCom.send(new Faktura);

  }

}
