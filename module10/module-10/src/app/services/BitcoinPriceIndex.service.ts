import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { BPIData } from '../models/BitcoinPriceIndex';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinPriceIndexService {

  private BPI_API = "/v1/bpi/currentprice.json";

  constructor(private _http: HttpClient) { }

  getBPIdata(): Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
  }
  return this._http.get<any>(this.BPI_API,requestOptions).pipe(
    map(res=>JSON.parse(res) as Array<BPIData>),
    retry(3),
    catchError(this.handleError))
    }
    handleError(error:HttpErrorResponse){
      return throwError(()=>new Error(error.message))
    }
} 

