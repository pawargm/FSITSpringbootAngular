import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private lservice: LoginService, private router: Router) { }

  loginForm = new FormGroup(
    {
      mail: new FormControl('', [Validators.required]),

      password: new FormControl('', [Validators.required])
    },

  )

  ngOnInit(): void {
    if (this.lservice.isUserLoggedIn()) {
      this.router.navigate(["/products"])
      console.log(this.lservice.isUserLoggedIn())
    }
  }

  onSubmit() {
    console.log("Log")
    //let formData = JSON.stringify(this.loginForm.value)
    this.lservice.loginUser(this.loginForm.value)
      .subscribe(() => this.router.navigate(["/products"]))

  }
}
