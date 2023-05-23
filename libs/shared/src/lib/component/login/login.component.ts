import { Component } from '@angular/core';

@Component({
  selector: 'org-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  input1='02:45';
  input2:Date=new Date();//'13:45:00';
  last:Date=new Date();
}
