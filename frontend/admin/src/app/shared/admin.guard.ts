import { Injectable } from '@angular/core';
import { UserService } from './../services/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate{

    constructor( 
        private userService: UserService,
        private router: Router
        ) {

    }
    canActivate(
        next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot 
        ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.userService.isStaticLogged) {
            return true
        } else {
            this.router.navigateByUrl('/login')
        }
    }
}