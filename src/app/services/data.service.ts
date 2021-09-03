import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {City} from "../models/cities";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly citySub = new BehaviorSubject<any>(null);

  readonly city$ = this.citySub.asObservable();
  constructor() { }

  setCity(val:City) {
    this.citySub.next(val);
  }

}
