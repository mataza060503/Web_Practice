
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { BookData } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

BOOK_API:string = "http://localhost:3000/books"

constructor(private http: HttpClient) { }

getAllBooks():Observable<any> {
  const header = new HttpHeaders().set("Context-Type","text/plain;chartset=utf-8")
  const requestOptions:Object = {
    header:header,
    responseType: "text"
  }
  return this.http.get<any>(this.BOOK_API,requestOptions).pipe(
    map(res => JSON.parse(res) as BookData),
    retry(3),
    catchError(this.handleError)
  )
}

getBook(bookId:string):Observable<any>{
  const header = new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
  const requestOptions:Object={
    header: header,
    responseType:"text"
  }
  return this.http.get<any>("http://localhost:3000/books/"+bookId,requestOptions).pipe(
    map(res=>JSON.parse(res) as BookData),
    retry(3),
    catchError(this.handleError))
}

postBook(book:any):Observable<any> {
  const header = new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
  const requestOptions:Object = {
    header: header,
    responseType: "text"
  } 
  return this.http.post<any>("http://localhost:3000/books",book,requestOptions).pipe(
    map(res=> JSON.parse(res) as BookData),
    retry(3),
    catchError(this.handleError))
}

putBook(book:any):Observable<any> {
  const header = new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
  const requestOptions:Object = {
    header: header,
    responseType: "text"
  } 
  return this.http.put<any>("http://localhost:3000/books",book,requestOptions).pipe(
    map(res=> JSON.parse(res) as BookData),
    retry(3),
    catchError(this.handleError))
}

deleteBook(bookId:string):Observable<any>{
  const header = new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
  const requestOptions:Object={
    header: header,
    responseType:"text"
  }
  return this.http.get<any>("http://localhost:3000/books/delete/"+bookId,requestOptions).pipe(
    map(res=>JSON.parse(res) as BookData),
    retry(3),
    catchError(this.handleError))
}

  handleError(err:HttpErrorResponse) {
    return throwError(() => new Error(err.message))
  }
}
