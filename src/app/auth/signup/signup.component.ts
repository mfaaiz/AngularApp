import { Component, OnInit ,EventEmitter,Input,Output} from '@angular/core';
import { NgForm} from '@angular/forms';
import { AuthService} from '../auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
onSubmit(form:NgForm)
{this.authService.registerUser({
  email:form.value.email,
  password:form.value.password,
 user:form.value.user,
  phoneno:form.value.phoneno, 
  address:form.value.adresss,
  date:form.value.date
});
  
//   this.authService.getUserdata({
//     email:form.value.email,
//   password:form.value.password,
 
//   phoneno:form.value.phoneno, 
//   address:form.value.adresss
//   })
// ;
}
}