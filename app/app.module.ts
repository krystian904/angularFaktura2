import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,  NgIf  } from '@angular/core';


import { AppComponent } from './app.component';
import { NowaFakturaComponent } from './nowa-faktura.component';
import { MenuComponent } from './menu/menu.component';
import { ListaComponent } from './lista.component';
import { UstawieniaComponent } from './ustawienia.component';
import {ServiceListaFakturService} from './service-lista-faktur.service';
import { LocalStorage } from 'angular-web-storage';
import { MessageService } from './message.service.ts';


@NgModule({
  declarations: [
    AppComponent,
    NowaFakturaComponent,
    MenuComponent,
    ListaComponent,
    UstawieniaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService , ServiceListaFakturService],
  bootstrap: [AppComponent],

})
export class AppModule { }
