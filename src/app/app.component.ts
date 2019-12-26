import { CommonServicesService } from './common-services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-angular-ws';

  constructor(sv: CommonServicesService){
    sv.checkService();
  }
}
