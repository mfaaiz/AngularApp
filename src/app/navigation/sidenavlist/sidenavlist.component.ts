import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-sidenavlist',
  templateUrl: './sidenavlist.component.html',
  styleUrls: ['./sidenavlist.component.css']
})
export class SidenavlistComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    }
  );
    
  }
  onClose()
  {
    this.closeSidenav.emit();
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

