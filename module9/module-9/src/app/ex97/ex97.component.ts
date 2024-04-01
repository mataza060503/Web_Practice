import { Component, OnInit } from '@angular/core';
import { CourseForm } from '../models/sign-in';


@Component({
  selector: 'app-ex97',
  templateUrl: './ex97.component.html',
  styleUrl: './ex97.component.css'
})
export class Ex97Component implements OnInit{
  name: string = ""
  nameChecker: string = ""
  email: string = ""
  emailChecker: string = ""
  emailError: string = ""
  phone: string = ""
  phoneChecker: string = ""
  course: string = ""
  courseChecker: string = "notice"
  shift: string = ""
  shiftChecker: string = ""
  policy: boolean = false
  policyChecker: string = ""
  result: string = ""
  inp: string = ""
  icon: string = "notice"
  iconSelect:string = "notice"
  nameInputChecker:string = "input"


  courseForm: CourseForm = {Name:"",Email:"",Phone:"",Course:"",Shift:"" ,agree: false}
  constructor() {

  }
  ngOnInit(): void {
    this.nameChecker = "notice"
  }
  
  nameChange() {
    if (this.name == "") {
      this.nameChecker = "active"
      this.icon = "icon"
      document.getElementById("name")?.classList.add("warning")
    } else {
      this.nameChecker = "notice"
      this.icon = "notice"
      document.getElementById("name")?.classList.remove("warning")
    }
  }

  submit() {
    if (this.name !== "" && this.course !== "" && this.policy == true) {
      this.courseForm.Name = this.name
      this.courseForm.Email = this.email
      this.courseForm.Phone = this.phone
      this.courseForm.Course = this.course
      this.courseForm.Shift = this.shift
      this.courseForm.agree = this.policy

      this.result = JSON.stringify(this.courseForm)
    } else {
      alert("please enter your information")
    }

    if (this.name == "") {
      this.nameChecker = "active"
      this.icon = "icon"
      this.nameInputChecker = "warning"
    }

    var select = document.getElementsByTagName("select")[0]
    if (select.value == "") {
      select.classList.add("warning")
      this.courseChecker = "active"
      this.iconSelect = "icon-select"
      select.addEventListener("change", () => {
        if (select.value == "") {
          select.classList.add("warning")
          this.courseChecker = "active"
          this.iconSelect = "icon-select"
        } else {
          select.classList.remove("warning")
          this.courseChecker = ""
          this.iconSelect = "notice"
        }
      })
    }
    
    if (!this.policy) {
      this.policyChecker = "policy-active"
      document.getElementById("policy")?.addEventListener("change", () => {
        if (!this.policy) {
          this.policyChecker = "policy-active"
        } else {
          this.policyChecker = ""
        }
      })
    }
  }
  expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
  emailValidate(email: string) {
    var validation: Boolean = this.expression.test(email)
    return validation
  }

}
