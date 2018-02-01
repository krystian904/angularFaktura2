import { Faktura } from './Faktura.model';
import {MessageService} from './message.service';
import { Component } from '@angular/core';


import { NowaFakturaComponent } from './nowa-faktura.component';
import { MenuComponent } from './menu/menu.component';
import { ListaComponent } from './lista.component';
import { UstawieniaComponent } from './ustawienia.component';
import {ServiceListaFakturService} from './service-lista-faktur.service';
import { LocalStorage } from 'angular-web-storage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService , ServiceListaFakturService],
})
export class AppComponent {
  title = 'Program Faktury';



//  menuDodajBool:boolean;
  menuDodajBool= false;

//  menuUstawieniaBool:boolean;
  menuUstawieniaBool= false;

//  menuListaBool:boolean;
  menuListaBool= true;

  menuLista(){
    console.log("  menuLista()");
    this.menuDodajBool =false;
    this.menuUstawieniaBool =false;
    this.menuListaBool =true;
  }
  menuDodaj(){
    console.log("menuDodaj()");
    this.menuDodajBool =true;
    this.menuUstawieniaBool =false;
    this.menuListaBool =false;
  }

  menuUstawienia(){
    console.log("menuUstawienia()");
    this.menuDodajBool =false;
    this.menuUstawieniaBool =true;
    this.menuListaBool =false;

  }

  menuPrzelacz(numer : number){
    //console.log(numer);
    if(numer == 1){
      this.menuLista();
    }
    if(numer == 2){
      this.menuDodaj();

    }
    if(numer == 3){
      this.menuUstawienia()
    }
  }

}
