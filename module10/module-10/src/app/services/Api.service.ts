import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, retry, catchError, throwError } from 'rxjs';
import { BPIData } from '../models/BitcoinPriceIndex';
import { APIResponse } from '../models/Api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private BPI_API = "/entries";

constructor(private _http: HttpClient) { }

getAPIdata(): Observable<any> {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
  const requestOptions:Object={
  headers:headers,
  responseType:"text"
}
return this._http.get<any>(this.BPI_API,requestOptions).pipe(
  map(res=>JSON.parse(res) as APIResponse),
  retry(3),
  catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
}
