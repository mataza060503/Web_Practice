import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Fashion } from '../models/Fashion';
import { FashionItem } from '../models/MyFashion';
import { loginAccount } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class Ex133Service {

  MY_FASHION_API:string = "http://localhost:3002/myFashion"

constructor(private http: HttpClient) { }

getAllFashions():Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text"
  } 
  return this.http.get<any>(this.MY_FASHION_API,requestOptions).pipe(
    map(res=>JSON.parse(res) as FashionItem[]),
    retry(3),
    catchError(this.handleError)
  )
}
getFashionByStyle(style:string):Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text"
  } 
  return this.http.get<any>(this.MY_FASHION_API+"/"+style,requestOptions).pipe(
    map(res=>JSON.parse(res) as FashionItem[]),
    retry(3),
    catchError(this.handleError)
  )
}
getFashionById(id:string):Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text"
  } 
  return this.http.get<any>(this.MY_FASHION_API+"/detail/"+id,requestOptions).pipe(
    map(res=>JSON.parse(res) as FashionItem),
    retry(3),
    catchError(this.handleError)
  )
}
postFashion(fashion:FashionItem):Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text"
  } 
  return this.http.post<any>(this.MY_FASHION_API,JSON.stringify(fashion),requestOptions).pipe(
    map(res=>JSON.parse(res) as FashionItem[]),
    retry(3),
    catchError(this.handleError)
  )
}
putFashion(fashion:FashionItem):Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text"
  } 
  return this.http.put<any>(this.MY_FASHION_API,JSON.stringify(fashion),requestOptions).pipe(
    map(res=>JSON.parse(res) as FashionItem[]),
    retry(3),
    catchError(this.handleError)
  )
}
deleteFashion(id:string):Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text"
  } 
  return this.http.delete<any>(this.MY_FASHION_API+"/delete/"+id,requestOptions).pipe(
    map(res=>JSON.parse(res) as FashionItem[]),
    retry(3),
    catchError(this.handleError)
  )
}

//ex136
getLogin():Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text",
    withCredentials: true
  } 
  return this.http.get<any>("http://localhost:3002/login",requestOptions).pipe(
    map(res=> JSON.parse(res) as loginAccount),
    retry(3),
    catchError(this.handleError)
  )
}
postLogin(account:loginAccount):Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text",
    withCredentials: true
  } 
  return this.http.post<any>("http://localhost:3002/login",JSON.stringify(account),requestOptions).pipe(
    map(res=> res as string),
    retry(3),
    catchError(this.handleError)
  )
}
getAccount(): Observable<any> {
  return this.http.get<any>('http://localhost:3002/login');
}
postCredentials() {
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3002');
  headers.append('Access-Control-Allow-Credentials', 'true');

  return fetch('http://localhost:3002/login', {
    method: 'POST',
    mode: 'same-origin',
    redirect: 'follow',
    credentials: 'include', // Don't forget to specify this if you need cookies
    headers: headers,
    body: JSON.stringify({
        first_name: 'John',
        last_name: 'Doe'
    })
})

}
getSession():Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text",
    withCredentials: true
  } 
  return this.http.get<any>("http://localhost:3002/contact",requestOptions).pipe(
    map(res=> res as string),
    retry(3),
    catchError(this.handleError)
  )
}

//ex138 
getCart():Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text",
    withCredentials: true
  } 
  return this.http.get<any>("http://localhost:3002/cart",requestOptions).pipe(
    map(res=> JSON.parse(res) as FashionItem[]),
    retry(3),
    catchError(this.handleError)
  )
}
postCart(fashion:FashionItem):Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text",
    withCredentials: true
  } 
  return this.http.post<any>("http://localhost:3002/cart",JSON.stringify(fashion),requestOptions).pipe(
    map(res=> res as any),
    retry(3),
    catchError(this.handleError)
  )
}
updateCart(cartContent:string[]):Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text",
    withCredentials: true
  } 
  return this.http.post<any>("http://localhost:3002/cart/update",cartContent,requestOptions).pipe(
    map(res=> res as any),
    retry(3),
    catchError(this.handleError)
  )
}

getDongA():Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text"
  }
  return this.http.get<any>("https://www.dongabank.com.vn/exchange/export",requestOptions).pipe(
    map(res=> res as any),
    retry(3),
    catchError(this.handleError)
  ) 
}

handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
} 

}
