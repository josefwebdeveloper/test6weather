import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {WeatherResponse} from "../models/weatherResponceInterface";
import {catchError, retry} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getWeather(id:any) {
    const url=`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${environment.API}&units=metric`;
    return this.http.get<WeatherResponse>(url)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
