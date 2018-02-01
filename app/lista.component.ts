import { Faktura } from './Faktura.model';
import { ServiceListaFakturService } from './service-lista-faktur.service';
import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

faktury: Faktura[];

  constructor(private service : ServiceListaFakturService) {

}

  ngOnInit() {
    this.faktury = this.service.listaFaktur;
  }



  pokazIlosc(){
    this.service.dlug();
    console.log(this.faktury);
  }

}
