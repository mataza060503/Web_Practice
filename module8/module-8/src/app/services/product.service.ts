import { Injectable } from '@angular/core';
import { Customer, CustomerCategory, IProduct } from '../models/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

const PRODUCT_API = "http://localhost:3000/products"
const CUSTOMER_API = "http://localhost:3000/customerCategory"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  customer = {
    "Id":"Cus123",
    "Name":"Obama",
    "Email":"obama@gmail.com",
    "Age":67,
    "Image":"./assets/obama.jpg"
  }
    
  products = [{
    ProductId: "p1",
    ProductName: "Coca",
    Price: 100,
    Image: "./assets/coke_diet_icon.png"
  },{
    ProductId: 'p2',
    ProductName: 'Pepsi',
    Price: 300,
    Image: './assets/pepsi_classic_256_icon.png'
  },{
    ProductId: 'p3',
    ProductName: '7up',
    Price: 200,
    Image: './assets/7up_icon.png'
  }];

  datas = [
    {"Cateid":"cate1",
    "CateName":"nuoc ngot",
    "Products":[
      {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"./assets/coke_diet_icon.png"},
      {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"./assets/pepsi_classic_256_icon.png"},
      {"ProductId":"p3","ProductName":"7up","Price":200,"Image":"./assets/7up_icon.png"},
    ]
    },
    {"Cateid":"cate2",
    "CateName":"Bia",
    "Products":[
      {"ProductId":"p4","ProductName":"Heleiken","Price":500,"Image":"./assets/coke_diet_icon.png"},
      {"ProductId":"p5","ProductName":"333","Price":400,"Image":"./assets/coke_diet_icon.png"},
      {"ProductId":"p6","ProductName":"Sai Gon","Price":600,"Image":"./assets/coke_diet_icon.png"},
    ]
    },]
    

  constructor(private http: HttpClient) { }
  
  getCategories() {
    return this.datas
  }

  getProducts() {
    return this.products
  }

  getCustomer() {
    return this.customer
  }

  getProductDetail(id:any){
    return this.products.find(x=>x.ProductId==id)
  }

  getHttpProduct() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(PRODUCT_API)
  }

  getHttpCustomerCategory() : Observable<CustomerCategory[]> {
    return this.http.get<CustomerCategory[]>(CUSTOMER_API)
  }

  getProductsHandleError() {
    return this.http.get<IProduct[]>(PRODUCT_API).pipe(retry(3),catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
}
