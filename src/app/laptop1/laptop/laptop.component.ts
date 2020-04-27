import { Component, OnInit, EventEmitter, Input,Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import {BackendService} from '../../service/backend.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})


export class LaptopComponent implements OnInit, OnDestroy {
@Output() sendmessage=new EventEmitter<number>();
  counter =0;
  x;
  isauth = false;
  dataLoading: boolean = false;
  savedChanges = false;
  //authSubscription: Subscription;
  sl1:any={name:"Netbook 9 Pro",features:"8th Gen Intel® Core™ i7 Processor",price:"95,000"};
  sl2:any={name:"Netbook 7 Spin",features:"8th Gen Intel® Core™ i5 Mobile Processor",price:"95,000"};
  sl3:any={name:"Netbook Odyssey 15.6",features:"7th Gen Intel® Core™ i7 Processor (Quad-core)",price:"140,000"};
  
al1:any={name:"Acer Swift 5",features:" 8th Gen Intel® Core™ i7 processor Intel",price:"80000"};
al2:any={name:"Acer Nitro",features:"Intel Core i5-8300H Nvidia GeForce GTX 1050 ( 4GB VRAM)",price:"130000"};
al3:any={name:"Acer Spin 5 ",features:"Intel Skylake Core i5-6200U CPU Intel HD 520",price:"150000"};


ll1:any={name:"Lenovo A485",features:"Up to 32 GB DDR4 2400 MHz AMD Ryzen™ 7 Pro 2700U", price:"100000"};
ll2:any={name:"Lenovo T580",features:"Up to 8th generation Intel® Core™ i7 with vPro™", price:"90000"};
ll3:any={name:"Lenovo L580",features:" 8th generation Intel i7 Integrated Intel® HD 620 Graphics",price:"120000"}


  LaptopTitle:any="LAPTOP NAME"
LaptopPrice:any=100000;
LaptopDetails:any="FREE";


LaptopTitletwo:any="LAPTOP NAME 2"
LaptopPricetwo:any=200000;
LaptopDetailstwo:any="FREE 2";

LaptopTitlethree:any="LAPTOP NAME 3"
LaptopPricethree:any=300000;
LaptopDetailsthree:any="FREE 3";

isAuth = false;
  authSubscription: Subscription;
constructor(private authService: AuthService,private backendService: BackendService) { }

ngOnInit() {
    
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
send(form:NgForm){
  console.log(form.value.sl1.name);
  console.log(form.value.sl1.features);
}
ngOnDestroy() {
  this.authSubscription.unsubscribe();
}

  
}
