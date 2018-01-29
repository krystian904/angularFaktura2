import { Faktura } from './Faktura.model.ts';
import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {



  constructor() {

}

  ngOnInit() {
  }

  send(f : Faktura){

    
  }

  pokazIlosc() :void{

  }

}
