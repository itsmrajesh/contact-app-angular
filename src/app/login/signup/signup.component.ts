import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string;
  password: string;
  visible = false;
  status = 'show';
  constructor() { }

  ngOnInit() {
  }
  showPwd() {
    if (this.visible) {
      this.status = 'hide';
    } else {
      this.status = 'show';
    }
    this.visible = !this.visible;
    return this.visible;
  }
}
