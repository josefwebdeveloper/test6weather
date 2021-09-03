import {Component, OnInit} from '@angular/core';
import {citiesData} from "../../models/city.list";
import {City, Coord} from "../../models/cities";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  cities = citiesData;
  selectedCity: City | null = null;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  onChangeCity(value: any) {
    this.selectedCity = value
    this.dataService.setCity(value)
  }
  update(){
    if(this.selectedCity){
      this.dataService.setCity(this.selectedCity)
    }
  }
}
