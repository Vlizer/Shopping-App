import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: '../template/sign.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  buttonLabel = 'Sign Up';
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
    form.reset();
  }
}
