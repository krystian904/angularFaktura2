export class Faktura{
 sprzedawcaNazwa: string;
 sprzedawcaAdres: string;
 sprzedawcaNIP: string;

 klientNazwa: string;
 klientAdres: string;
 klientNIP: string;

 nazwaTowaru: string;
 ilosc: string ;
 JM: string;
 rabat: string;
 cenaNeto: string;
 vat: string;
 warVat: string;
 wartBruto: string;

constructor() {}
  constructor(sprzedawcaNazwa :string , przedawcaAdres : string
    , sprzedawcaNIP :string , klientNazwa :string , klientAdres : string , klientNIP :string ,
    nazwaTowaru : string , ilosc : string , JM : string , rabat : string ,
    cenaNeto : string , vat : string , warVat : string , wartBruto : string){
      this.


  }

 ngOnInit() {

   }

   log(){
     console.log("stworzono fakture");

   }

}
