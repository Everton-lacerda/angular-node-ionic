import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin';
  isLogged: boolean = false;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.isLogged.subscribe(logged => {
        this.isLogged = logged
    })
  }

}
