import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../models/account';
import { Ex133Service } from '../../services/ex133.service';

@Component({
  selector: 'app-ex136',
  templateUrl: './ex136.component.html',
  styleUrl: './ex136.component.css'
})
export class Ex136Component {
  account: Account = { Email: '', Password: '' };
  public email: string = ""
  public password: string = ""
  result!: string
  emailActive: string = ""
  passwordActive: string = ""
  expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
  errMessage:string = ""
  
  constructor(private router: Router, private service:Ex133Service) {

  }
  ngOnInit(): void {
    this.email = localStorage.getItem("username") || ""
    this.password = localStorage.getItem("password") || ""
    this.service.getLogin().subscribe({
      next: (data)=> {
        console.log(data)
        this.email = data.username,
        this.password = data.password
      }
    })
    
  }

  login() {
    this.account.Email = this.email
    this.account.Password = this.password
    this.result = JSON.stringify(this.account)
    
    if (!this.emailValidate(this.email)) {
      this.emailActive = "active"
    } else {
      if (this.password == undefined || this.password.length < 6) {
        this.passwordActive = "active"
      } else {
        this.passwordActive = ""
        localStorage.setItem("username",this.email)
        localStorage.setItem("password",this.password)
        
        // const account = {"username":this.email,"password":this.password}
        // console.log(JSON.stringify(account))
        // this.service.postLogin(account).subscribe({
        //   next: (data) => {alert(data)},
        // })
      }
    }
    
    this.service.getLogin().subscribe({
      next: (data)=> {
        alert(data)
        
      }, error: (err) => {
        console.log(err)
      }
    })

    
  }

  setCookies() {
    const account = {"username":this.email,"password":this.password}
    this.service.postLogin(account).subscribe({
      next: (data)=> {
        alert(data)
        
      }, error: (err) => {
        console.log(err)
      }
    })
    
  }

  emailValidate(email: string) {
    var validation: Boolean = this.expression.test(email)
    return validation
  }
}
