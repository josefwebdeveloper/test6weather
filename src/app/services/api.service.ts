import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {City} from "../models/cities";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getWeather(id:any) {
    const url=`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${environment.API}&units=metric`;
    return this.http.get<any>(url);
  }
}
