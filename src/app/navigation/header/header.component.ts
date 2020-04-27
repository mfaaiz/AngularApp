
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;
isbold=false;
  constructor(private authService: AuthService,public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    }
  );
    
  }

  onToggleSidenav() {
    
    this.sidenavToggle.emit();
  }
onLogout()
{
  this.authService.logout();
}
// onCart()
// {
//   this.authService.addCart();
// }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
