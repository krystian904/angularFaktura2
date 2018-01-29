import { Faktura } from './Faktura.model.ts';
import {MessageService} from './message.service.service.ts';
import { Component  , NgIf} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Program Faktury';



  menuDodajBool:boolean;
  menuDodajBool =false;

  menuUstawieniaBool:boolean;
  menuUstawieniaBool =false;

  menuListaBool:boolean;
  menuListaBool =true;

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
