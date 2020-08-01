import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {}

  constructor(
    private userService: UserService,
    private matSnack: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    if(this.userService.isStaticLogged) {
      return this.router.navigateByUrl('/home')
    }
  }

  async login(): Promise<void> {
    const {email, password} = this.form
    const result = await this.userService.login(email, password)
    console.log(result)

    if(result.success) {
      this.userService.configLogin(result)
      this.router.navigateByUrl('/home')
    } else {
      this.matSnack.open('E-mail ou senha invalidos', undefined, {duration: 2000})
    }
  }

}
