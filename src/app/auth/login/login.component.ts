import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { NgForm} from '@angular/forms';
import { AuthService} from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform:FormGroup;
  constructor(private authService:AuthService) { }

  ngOnInit() {

  //  this.loginform = new FormGroup({
    //  email: new FormControl('', {
      //  validators: [Validators.required, Validators.email]
      //}),
      //password: new FormControl('', { validators: [Validators.required] })
    //});
  }

  
  
 
  onSubmit(form:NgForm)
  {
    this.authService.login({
     email:form.value.email,
     password:form.value.password,
  });
}
  
}
