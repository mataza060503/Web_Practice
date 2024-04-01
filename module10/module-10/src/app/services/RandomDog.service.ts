import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry, catchError, throwError } from 'rxjs';
import { RandomDog } from '../models/RandomDog';

@Injectable({
  providedIn: 'root'
})
export class RandomDogService {

  URL_API: string = "/api/breeds/image/random"

constructor(private httpClient: HttpClient) { }

getRandomDogImage() {
  const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
  const requestOptions:Object={
  headers:headers,
  responseType:"text"
} 
return this.httpClient.get<any>(this.URL_API,requestOptions).pipe(
  map(res=> JSON.parse(res) as RandomDog),
  retry(3),
  catchError(this.handleError)) 
}
handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
}

}
