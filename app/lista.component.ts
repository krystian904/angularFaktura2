import { Faktura } from './Faktura.model.ts';
import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() listaFaktur : Faktura[];

  constructor() {
    this.listaFaktur= [new Faktura()];
    console.log(this.listaFaktur.length);
}

  ngOnInit() {
  }

  send(f : Faktura){
    this.listaFaktur.push(f);

  }

  pokazIlosc(){
    console.log(this.listaFaktur.length);
  }

}
