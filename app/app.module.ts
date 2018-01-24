import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,  NgIf  } from '@angular/core';


import { AppComponent } from './app.component';
import { NowaFakturaComponent } from './nowa-faktura.component';
import { MenuComponent } from './menu/menu.component';
import { ListaComponent } from './lista.component';
import { UstawieniaComponent } from './ustawienia.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
