import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import {BackendService} from '../service/backend.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
@Injectable()
export class AuthGuardAdmin implements CanActivate {
    constructor(private backendService: BackendService,private router: Router) { }
    canActivate(): Observable<boolean> {
        return this.backendService.isUserAdmin()
        .take(1)
        .map(res =>{
        if(res){
            return res.isAdmin;

        }
          else
          {
              return false;
          }})
          .do(isAdmin =>
        {console.log(isAdmin);
            return true;
        })
  }
    }