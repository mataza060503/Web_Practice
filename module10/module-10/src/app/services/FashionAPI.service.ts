import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FashionAPIService {

  constructor() {}

}
