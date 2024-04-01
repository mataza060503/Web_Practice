import { Time } from './../../../../../../module10/module-10/src/app/models/BitcoinPriceIndex';
import { Component, OnInit } from '@angular/core';
import { Ex133Service } from '../../services/ex133.service';
import { FashionItem } from '../../models/MyFashion';

@Component({
  selector: 'app-ex133-manage',
  templateUrl: './ex133-manage.component.html',
  styleUrl: './ex133-manage.component.css'
})
export class Ex133ManageComponent implements OnInit{

  fashions!: FashionItem[]
  errMessage: string = ""
  selectedFashion: FashionItem = {"_id":"","creation_date":"","fashion_details":"","fashion_style":"","fashion_title":"","thumbnail":""}
  fashionStyles!: any[] | undefined;
  constructor(private service:Ex133Service) {

  }

  ngOnInit(): void {
    
    this.loadData()
    
  }

  loadData() {
    this.service.getAllFashions().subscribe({
      next: (data:FashionItem[]) => {
        this.fashions = data
        
        const uniqueFashionStyles = new Set<string>(); // Use a Set to store unique values
          for (let i = 0; i < data.length; i++) {
            const element = this.fashions[i];
            console.log(element.fashion_style)
            uniqueFashionStyles.add(element.fashion_style);
          }
          this.fashionStyles = Array.from(uniqueFashionStyles); // Convert Set back to array
          console.log(this.fashionStyles);
      }, error: (err) => {
        this.errMessage = err
      } 
    })
  }

  onFileSelected(event:any, fashion:FashionItem){
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.thumbnail=reader.result!.toString()
    };
    reader.onerror = function (error) {
    console.log('Error: ', error);
    };
    console.log(this.selectedFashion.thumbnail)
  }

  add() {
    this.selectedFashion.creation_date = this.getFormattedDate()
    console.log (this.selectedFashion.thumbnail)
    this.service.postFashion(this.selectedFashion).subscribe({
      next: (data) => {this.fashions=data, console.log(data)},
      error: (err) => {this.errMessage = err}
    })
    this.closePopup()
  }
  update() {
    this.selectedFashion.creation_date = this.getFormattedDate()
    this.service.putFashion(this.selectedFashion).subscribe({
      next: (data) => {
        this.loadData()
      }, error: (err) => {
        this.errMessage = err
      }
    })
    this.closePopup()
  }

  getFormattedDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = currentDate.getFullYear();

    return `${year}-${month}-${day}`;
  }

  edit(selectedFashion: FashionItem) {
    this.openPopup()
    var pickup = {"_id":"","creation_date":"","fashion_details":"","fashion_style":"","fashion_title":"","thumbnail":""}
    pickup = selectedFashion
    this.selectedFashion = pickup
  }
  closePopup() {
    const popup = document.getElementById("popup") as HTMLElement
    popup.style.display = "none"
    this.loadData()
  }
  openPopup() {
    const popup = document.getElementById("popup") as HTMLElement
    popup.style.display = "block"
  }
  openPopup2(fashion:FashionItem) {
    this.selectedFashion = fashion
    const popup = document.getElementById("popup2") as HTMLElement
    popup.style.display = "block"
  }
  closePopup2() {
    const popup = document.getElementById("popup2") as HTMLElement
    popup.style.display = "none"
    this.loadData()
  }
  New() {
    this.openPopup()
    this.selectedFashion._id=null
    this.selectedFashion.fashion_details=""
    this.selectedFashion.fashion_title = ""
    this.selectedFashion.thumbnail = ""
  }
  Delete() {
    this.service.deleteFashion(this.selectedFashion._id).subscribe({
      next: (data) => {
        this.fashions = data
      }, error: (err) => {
        this.errMessage = err
      }
    })
    this.closePopup2()
  }
}
