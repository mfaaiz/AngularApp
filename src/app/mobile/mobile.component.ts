import { Component, OnInit, EventEmitter, Input,Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm} from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import {BackendService} from '../service/backend.service';
import {  AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../auth/user.model';
import {Subject} from "rxjs/Subject";
import { map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  @Output() sendmessage=new EventEmitter<number>();
  counter =0;
  
  isAuth = false;
  dataLoading: boolean = false;
  savedChanges = false;
  authSubscription: Subscription;
 

   MobileDetailsS8:any= {features:"ANDROID 8.0" ,camera:"24px 18px", memory:"64GB"};
  
  
   S9:any={name:"Galaxy S9",features:"front 12MP rear 8MP front, 4Gb/64GB", price:"91,000"};
   S8:any={name:"Galaxy S8",features:"front 12MP rear 8MP, 4GB/64GB",price:"80,000"};
   Note9:any={name:"Galaxy Note 9",features:"front 12MP rear 8MP,6GB/128GB",price:"140,000"};
   J6:any={name:"Galaxy J6",features:"front 12MP rear 8MP,3GB/32GB",price:"30,000"};
  
   i7:any={name:"Iphone 7",features:"front 12MP rear 7MP, 2/32 GB",price:"75,000"}
   i8:any={name:"Iphone 8",features:"front 12MP rear 7MP, 2/64 GB",price:"92,500"}
   ix:any={name:"Iphone X",features:"front 12MP rear 7MP, 3/64 GB",price:"122,000"}
   i6:any={name:"Iphone 6",features:"front 8MP rear 1.2MP, 1/32 GB",price:"40,000"}
   private user:User;
   authChange=new Subject<boolean>();
   private isAuthenticated = false;
   constructor(private afauth:AngularFireAuth,private authService: AuthService,private backendService: BackendService) { }

   ngOnInit() {
    
    // { this.afauth.authState.subscribe(user => {
    //     if (user) {
    //       this.isAuthenticated = true;
    //        this.authChange.next(true);
    //      //  this.router.navigate(['/']);
    //      } else {
           
    //        this.authChange.next(false);
    //        //this.router.navigate(['/']);//'/login'
    //        this.isAuthenticated = false;
    //      }
    //   });
    //  }
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
       }
     
      
    );
  }
    
   
   
     countProd(filter) {
       if (filter == "add") {
           this.counter = this.counter + 1;
       } else {
           if (this.counter > 0) {
               this.counter = this.counter - 1;
           }
       }
   }
   addToCart(item, counter){
     this.dataLoading = true;
     let data = item;
     data.qty = counter;
     return this.backendService.updateShoppingCart('cart',data).then((success)=> {
         this.dataLoading = false;
         this.counter=0;
         this.savedChanges=true;
     });
   }
  //  send(form:NgForm){
  //    console.log(form.value.sl1.name);
  //    console.log(form.value.sl1.features);
  //  }
   ngOnDestroy() {
     this.authSubscription.unsubscribe();
   }
   
     
   }
   


 

