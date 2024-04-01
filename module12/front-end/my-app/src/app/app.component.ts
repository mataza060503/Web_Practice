import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Ex133Service } from '../services/ex133.service';
import { CartItem, FashionItem } from '../models/MyFashion';
import { NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject, OperatorFunction, Observable, debounceTime, distinctUntilChanged, filter, merge, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  constructor(private router:Router,private service: Ex133Service) {
    this.router.navigate([{ outlets: { ex133:["homepage"] } }])
  }

  fashions!: FashionItem[]
  fashionStyle: any[] = []
	badge:number = 0
	cartList!: FashionItem[]
	cartItem!: CartItem
	ListFashionSelected: CartItem[] = []
  quantityResult: Array<string> = []

    ngOnInit() {
      this.loadData()
      this.service.getDongA().subscribe(data => {
        console.log(data)
      })
    }

    loadData() {
      this.service.getAllFashions().subscribe({
        next: (data: FashionItem[]) => {
          this.fashions = data;
          const uniqueFashionStyles = new Set<string>(); // Use a Set to store unique values
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            uniqueFashionStyles.add(element.fashion_title);
          }
          this.fashionStyle = Array.from(uniqueFashionStyles); // Convert Set back to array
          console.log(this.fashionStyle);
        }
      });
    }
    

    model: any;

    search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map((term) =>
          term.length < 2 ? [] : this.fashionStyle.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
        ),
      );
	
  navigation(page:string) {
    this.router.navigate([{outlets: { ex133: [page] }}])
  }
	viewCart() {
    this.openCart()
		var index = {}
    this.service.getCart().subscribe(data => {
			this.cartList = data
      console.log(this.cartList)
			this.calculateCounts(this.cartList)
			// for (let i = 0; i < this.cartList.length; i++) {
			// 	const cartItem1 = this.cartList[i];
			// 	if (cartItem1._id in index) {
					
			// 	}
			// 	for (let j = 0; j < this.cartList.length; j++) {
			// 		const element = this.cartList[j];
			// 		if (cartItem1._id == element._id) {
						
			// 		}
			// 	}
			// }
    })

		console.log(this.cartList[0])
  }
	
	calculateCounts(arr: FashionItem[]): void {
    this.ListFashionSelected = []
    const index: { [key: number]: CartItem } = {};

    arr.forEach(item => {
      if (item._id in index) {
        index[item._id].Count += 1;
      } else {
        const newItem: CartItem = { Item:item, Count: 1,Quantity:0 };
        index[item._id] = newItem;
        this.ListFashionSelected.push(newItem);
      }
    });

    console.log(this.ListFashionSelected);
  }
	updateCounts() {
    // Iterate over ListFashionSelected and set the Count property of each CartItem
    this.ListFashionSelected.forEach(item => {
      console.log(item.Count)
    });
		
    this.quantityResult = []
    this.ListFashionSelected.forEach(element => {
      for (let i = 0; i < element.Count; i++) {
        this.quantityResult.push(element.Item._id)
      }
    });
    // console.log(this.quantityResult)  
    this.service.updateCart(this.quantityResult).subscribe(
      data => console.log(data)
    )
    this.closeCart()
  }

  Delete(item:CartItem) {
    item.Count = 0
    const index = this.ListFashionSelected.findIndex(cartItem => cartItem.Item._id === item.Item._id);

  	if (item.Count === 0) {
    	if (index !== -1) {
      	this.ListFashionSelected.splice(index, 1);
    	}
  	}

    this.quantityResult = []
    this.ListFashionSelected.forEach(element => {
      for (let i = 0; i < element.Count; i++) {
        this.quantityResult.push(element.Item._id)
      }
    });
    // console.log(this.quantityResult)  
    this.service.updateCart(this.quantityResult).subscribe(
      data => console.log(data)
    )
  }

  openCart() {
    const cartPopup = document.getElementById("cartPopup") as HTMLElement
    cartPopup.style.display = "block"
  }
  closeCart() {
    const cartPopup = document.getElementById("cartPopup") as HTMLElement
    cartPopup.style.display = "none"
  }
}
