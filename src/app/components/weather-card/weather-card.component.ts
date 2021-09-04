import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Observable, Subscription} from "rxjs";
import {City} from "../../models/cities";
import {ApiService} from "../../services/api.service";
import {WeatherResponse} from "../../models/weatherResponceInterface";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  city: City | null= null
  citySub:Subscription;
  weather: WeatherResponse | undefined
  url:string='';
  constructor(private dataService: DataService,
              private apiService:ApiService) {
    this.citySub = this.dataService.city$.subscribe(city => {
      if (city) {
        this.getWeather(city.id)
      }
    })
  }

  ngOnInit(): void {
  }
  getWeather(city:City){
    this.apiService.getWeather(city).subscribe(data=>{
      if(data){
        this.weather=data;
        this.weather.main.temp=Math.floor((this.weather.main.temp*1))
        this.url=`assets/icons/${data.weather[0].icon}.png`;
      }
    })
  }
  ngOnDestroy() {
    if( this.citySub){
      this.citySub.unsubscribe()
    }
  }

}
