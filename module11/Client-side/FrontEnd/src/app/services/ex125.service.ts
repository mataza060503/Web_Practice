import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookData } from '../models/Book';
import { Ex125Book } from '../models/ex125';

@Injectable({
  providedIn: 'root'
})
export class Ex125Service {

public BOOK_API:string = "http://localhost:3000/books"

constructor(private http: HttpClient) { }

getAllBooks():Observable<any> {
  const header = new HttpHeaders().set("Context-Type","text/plain;chartset=utf-8")
  const requestOptions:Object = {
    header:header,
    responseType: "text"
  }
  return this.http.get<any>(this.BOOK_API+"/all",requestOptions).pipe(
    map(res => JSON.parse(res) as Ex125Book[]),
    retry(3),
    catchError(this.handleError)
  )
}
getBook(id:string):Observable<any> {
  const header = new HttpHeaders().set("Context-Type","text/plain;chartset=utf-8")
  const requestOptions:Object = {
    header:header,
    responseType: "text"
  }
  return this.http.get<any>(this.BOOK_API+"/all/"+id,requestOptions).pipe(
    map(res => JSON.parse(res) as Ex125Book),
    retry(3),
    catchError(this.handleError)
  )
}

postBook(formData:Ex125Book, file:File):Observable<any> {
  const header = new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
  const requestOptions:Object = {
    header: header,
    responseType: "text"
  }
  const postData = new FormData()
  postData.append("name", formData.name)
  postData.append("price", formData.price.toString())
  postData.append("description", formData.description)
  postData.append("image", formData.image)
  postData.append("date",formData.date)
  postData.append("quantity", formData.quantity.toString())
  postData.append("maCD", formData.maCD)
  postData.append("maNXB", formData.maNXB)
  postData.append("file", file)
  
  return this.http.post<any>(this.BOOK_API+"/new",postData,requestOptions).pipe(
    map(res=> JSON.parse(res) as Ex125Book[]),
    retry(3),
    catchError(this.handleError))
}

putBook(formData:Ex125Book, file:File):Observable<any> {
  const header = new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
  const requestOptions:Object = {
    header: header,
    responseType: "text"
  }
  const postData = new FormData()
  postData.append("name", formData.name)
  postData.append("price", formData.price.toString())
  postData.append("description", formData.description)
  postData.append("image", formData.image)
  postData.append("date",formData.date)
  postData.append("quantity", formData.quantity.toString())
  postData.append("maCD", formData.maCD)
  postData.append("maNXB", formData.maNXB)
  postData.append("file", file)
  
  return this.http.put<any>(this.BOOK_API+"/update",postData,requestOptions).pipe(
    map(res=> JSON.parse(res) as Ex125Book[]),
    retry(3),
    catchError(this.handleError))
}

deleteBook(id:string):Observable<any> {
  const header = new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
  const requestOptions:Object = {
    header: header,
    responseType: "text"
  }
  return this.http.get<any>(this.BOOK_API+"/all/delete/"+id,requestOptions).pipe(
    map(res=> JSON.parse(res) as Ex125Book[]),
    retry(3),
    catchError(this.handleError))
}

handleError(err:HttpErrorResponse) {
  return throwError(() => new Error(err.message))
}


}
