import { USPublicData } from './../models/USPublicData';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class USPublicService {

public readonly USPublicData_API: string = "/api/data?drilldowns=Nation&measures=Population"

constructor(private httpClient: HttpClient) { }

getUSPublicData() {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
  const requestOptions:Object={
  headers:headers,
  responseType:"text"
}
return this.httpClient.get<any>(this.USPublicData_API,requestOptions).pipe(
  map(res=> JSON.parse(res) as USPublicData),
  retry(3),
  catchError(this.handleError)) 
}
handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
}
}
