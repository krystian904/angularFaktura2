import { Injectable } from '@angular/core';


@Injectable()
export class MessageService {

  messages: string[] = [];

  constructor() { }

  log(){
    console.log("dzila message service");

  }

}
