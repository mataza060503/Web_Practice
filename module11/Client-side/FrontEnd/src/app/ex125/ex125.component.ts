import { Ex125Book } from './../models/ex125';
import { Ex125Service } from '../services/ex125.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ex125',
  templateUrl: './ex125.component.html',
  styleUrl: './ex125.component.css'
})
export class Ex125Component implements OnInit{
  data!: Ex125Book[]
  errMessage: string = ""
  crName: string = ""
  crPrice: string = ""
  crDescription: string = ""
  crDate: string = ""
  crQuantity: string = ""
  crMaCD: string = ""
  crMaNXB: string = ""
  book!:Ex125Book
  imageFile!: File
  saveFile!: File 
  formData: Ex125Book = {name: "",price: 0,description: "",image: "",date: "",quantity: 0,maCD: "",maNXB: ""} 
  

  constructor(private ex125Service: Ex125Service, private router: Router) {
   
  }
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.ex125Service.getAllBooks().subscribe({
      next: (data) => this.data = data,
      error: (err) => this.errMessage = err
    })
  }

  onFileChange(event:any) {
    this.imageFile = event.target.files[0];
    this.formData.image = this.imageFile.name
  }
  onSubmit() {
    console.log(this.formData)
    this.formData.date = (new Date()).toString()
    this.ex125Service.postBook(this.formData,this.imageFile).subscribe({
      next: (data) => {
        console.log(data)
        this.loadData()
      }, error: (err)=> this.errMessage=err
    })
    
  }

  onUpdate() {
    this.formData.date = (new Date()).toString()
    console.log(this.imageFile)
    console.log(this.formData)
    this.ex125Service.putBook(this.formData,this.imageFile).subscribe({
      next: (data)=> {
        console.log(data)
        this.loadData()
      },error: (err) => this.errMessage=err  
    })
  }

  create() {
    this.formData.name=""
    this.formData.price=0
    this.formData.description=""
    this.formData.image=""
    this.formData.quantity=0
    this.formData.maCD=""
    this.formData.maNXB=""
    var popup = document.getElementById("createPopup") as HTMLElement
    popup.style.display = "block"
    console.log(popup)
  }
  edit(book: Ex125Book) {
    var popup = document.getElementById("updatePopup") as HTMLElement
    popup.style.display = "block"
    console.log(popup)
    this.formData.name=book.name
    this.formData.price=book.price
    this.formData.description=book.description
    this.formData.image=book.image
    this.formData.quantity=book.quantity
    this.formData.maCD=book.maCD
    this.formData.maNXB=book.maNXB
    this.ex125Service.putBook(this.formData,this.imageFile).subscribe({
      next: (data) => {
        console.log(data)
        this.loadData()
      },
      error: (err) => this.errMessage=err
    })
  }
  details(book:Ex125Book) {
    this.router.navigate(["detail",book.maCD])
  }
  _delete(book:Ex125Book) {
    this.ex125Service.deleteBook(book.maCD).subscribe({
      next: (data)=> {
        this.loadData()
        console.log(data) 
      },
      error: (err)=> this.errMessage=err
    })
    
  }
  onchange() {
    console.log(this.crName)
  }
  popupSubmit() {
    var popup = document.getElementById("createPopup") as HTMLElement
    popup.style.display = "none"
  }
  popupUpdate() {
    var popup = document.getElementById("updatePopup") as HTMLElement
    popup.style.display = "none"
  }
  closePopup () {
    var popup = document.getElementById("createPopup") as HTMLElement
    popup.style.display = "none"
  }
}
