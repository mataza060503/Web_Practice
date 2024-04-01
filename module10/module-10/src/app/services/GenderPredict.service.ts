import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, retry, catchError, throwError } from 'rxjs';
import { APIResponse } from '../models/Api';
import { GenderData } from '../models/GenderPredict';

@Injectable({
  providedIn: 'root'
})
export class GenderPredictService {


  constructor(private httpClient: HttpClient) { }

  getGenderData(name: string) {
    const url = `https://api.genderize.io/?name=${name}`;
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this.httpClient.get<any>(url,requestOptions).pipe(
    map(res=>JSON.parse(res) as GenderData),
    retry(3),
    catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
}
