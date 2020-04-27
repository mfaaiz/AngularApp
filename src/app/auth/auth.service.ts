import { User } from './user.model';
import { AuthData } from './auth-data.model';
import {SignupComponent} from './signup/signup.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit ,EventEmitter,Input,Output} from '@angular/core';
import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import {  AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()export class AuthService{
  private _eStoreColl: string = "estore";
    private itemCollection:AngularFirestoreCollection<any>;
    private itemDoc:AngularFirestoreDocument<any>;
    item :Observable<any>;  
  private user:User;
    authChange=new Subject<boolean>();
    private isAuthenticated = false;
    


    constructor(private afauth:AngularFireAuth,private db:AngularFirestore,private router: Router) { }
    ngOnItit(){}
    initAuthListener() 
       { this.afauth.authState.subscribe(user => {
           if (user) {
             this.isAuthenticated = true;
              this.authChange.next(true);
              this.router.navigate(['/']);
            } else {
              
              this.authChange.next(false);
              this.router.navigate(['/']);//'/login'
              this.isAuthenticated = false;
            }
         });
        }

       


// getUserdata(authData:User)
// {this.addDataToDatabase({
//   //  user:authData.user,
//    email:authData.email,
//     password:authData.password,
// // confpassword:authData.confpassword,
// phoneno:authData.phoneno,
// address:authData.address,
// // date:authData.date
// })};



 registerUser(authData:User):any{
  
  this.afauth.auth.createUserWithEmailAndPassword(
    authData.email,
    authData.password,
   

    )
    .then(result=>{console.log(result);
      const id = this.db.createId();
      const item = { id, name };
      var docRef = this.db.collection(('userData'));
      return docRef.add({
        email:authData.email,
        pass:authData.password,
        phoneno:authData.phoneno,
         //address:authData.address,
        date:authData.date,
         user:authData.user
          });
      
       
       
  }).
    catch(error=>{
      alert("plz try new email");
      
      ;}
    
);
  }
login(authData:AuthData)
{this.afauth.auth.signInWithEmailAndPassword(
   authData.email,
authData.password
).then(result=>{console.log(result);}).
catch(error=>{console.log(error);
alert("invalid id or password");
;}
)
}
logout() {
  this.afauth.auth.signOut();
}

isAuth() {
  return this.isAuthenticated;
}

private addDataToDatabase(signup:User)
{this.db.collection('userData').add(signup).then(
    result=>{console.log(result)}).
    catch(error=>{
        console.log(error)
    });}


}
 