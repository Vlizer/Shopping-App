import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: '../template/sign.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  buttonLabel = 'Sign In';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }
}
