import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home.router.module";
import {CardComponent} from "../components/card/card.component";
import {DropDownComponent} from "../components/drop-down/drop-down.component";
import {WeatherCardComponent} from "../components/weather-card/weather-card.component";



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    DropDownComponent,
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
