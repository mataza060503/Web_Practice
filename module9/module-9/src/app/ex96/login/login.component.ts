import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/sign-in';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  account: Account = { Email: '', Password: '' };
  public email: string = ""
  public password: string = ""
  result!: string
  emailActive: string = ""
  passwordActive: string = ""
  expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
  
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.email = localStorage.getItem("email") || ""
    this.password = localStorage.getItem("password") || ""
  }

  login() {
    this.account.Email = this.email
    this.account.Password = this.password
    this.result = JSON.stringify(this.account)
    
    if (!this.emailValidate(this.email)) {
      this.emailActive = "active"
    } else {
      this.emailActive = ""
    }
    
    if (this.password == undefined || this.password.length < 6) {
      this.passwordActive = "active"
    } else {
      this.passwordActive = ""
    }

    if (this.email.toLowerCase() == "vohoanglam060503@gmail.com" && this.password == "123456") {
      this.router.navigate(["homepage"])
      localStorage.setItem("email", this.email)
      localStorage.setItem("password", this.password)
    }
  }

  emailValidate(email: string) {
    var validation: Boolean = this.expression.test(email)
    return validation
  }
}
