import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, retry, catchError, throwError } from 'rxjs';
import { Fashion } from '../models/Fashion';

@Injectable({
  providedIn: 'root'
})
export class FashionAPIService {

  FASHION_API:string = "http://localhost:3002"

  constructor(private _http: HttpClient) { }
  getFashions():Observable<any>
  {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf8")
  const requestOptions:Object={
  headers:headers,
  responseType:"text"
  }
  return this._http.get<any>(this.FASHION_API+"/fashions",requestOptions).pipe(
  map(res=>JSON.parse(res) as Array<Fashion>),
  retry(3),
  catchError(this.handleError))
  }
 

  getFashion(id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    } 
    return this._http.get<any>(this.FASHION_API+"/fashions/"+id,requestOptions).pipe(
      map(res=>JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    )
  }
  
  postFashion(aFashion:any):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.post<any>(this.FASHION_API+"/fashions",JSON.stringify(aFashion),requestOptions).pipe(
      map(res=>JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    )
  }

  putFashion(aFashion:any):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.put<any>(this.FASHION_API+"/fashions",JSON.stringify(aFashion),requestOptions).pipe(
      map(res=>JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    )
  }

  deleteFashion(id:string):Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.delete<any>(this.FASHION_API+"/fashions/"+id,requestOptions).pipe(
      map(res=>JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    )
  }

  
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
}
