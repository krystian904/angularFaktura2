import { KlientModule } from './klient/klient.module';
/*import { SprzedawcaModule } from '../sprzedawca/sprzedawca.module';*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Faktura{
//może puźniej
/*klient: KlientModule;
sprzedawca: SprzedawcaModule;
daneFaktury: DaneFakturyModule;*/

KlientNazwa: string;
KlientAdres: string;
KlientNIP: string;

SprzedawcaNazwa: string;
SprzedawcaAdres: string;
SprzedawcaNIP: string;

nazwaTowaru: string;
ilosc: string ;
JM: string;
rabat: string;
cenaNeto: string;
wartoscNeto: string;
vat: string;
warVat: string;
wartBruto: string;



constructor(
  KlientNazwa: string,
  KlientAdres: string,
  KlientNIP: string,

  SprzedawcaNazwa: string,
  SprzedawcaAdres: string,
  SprzedawcaNIP: string,

  nazwaTowaru: string,
  ilosc: string,
  JM: string,
  rabat: string,
  cenaNeto: string,
  wartoscNeto: string,
  vat: string,
  warVat: string,
  wartBruto: string

){
this.KlientNazwa = KlientNazwa;
this.KlientAdres = KlientAdres;
this.KlientNIP = KlientNIP;

this.SprzedawcaNazwa = SprzedawcaNazwa;
this.SprzedawcaAdres = SprzedawcaAdres;
this.SprzedawcaNIP = SprzedawcaNIP;

this.nazwaTowaru = nazwaTowaru;
this.ilosc = ilosc;
this.JM = JM;
this.rabat = rabat;
this.cenaNeto = cenaNeto;
this.wartoscNeto = wartoscNeto;
this.vat = vat;
this.warVat = warVat;
this.wartBruto = wartBruto;
  console.log("stworzono fakture");
  }

 ngOnInit() {

   }



}
