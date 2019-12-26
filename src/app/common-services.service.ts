import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  // constructor() { }

  contact = '9483685398';
  email = 'info@cs.com';
  name = 'contact app';
  checkService() {
    console.log('im good bro');
  }

}
