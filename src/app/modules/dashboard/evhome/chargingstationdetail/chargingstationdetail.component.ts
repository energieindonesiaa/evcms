import { Component, Input, OnInit } from '@angular/core';

export interface ChargingStation {

  location: string;
  chargingno: number; 
  connector: string; 
  capacity: string; 
  available: boolean;
}

@Component({
  selector: 'app-chargingstationdetail',
  templateUrl: './chargingstationdetail.component.html',
  styleUrls: ['./chargingstationdetail.component.scss']
})
export class ChargingstationdetailComponent implements OnInit {

  @Input() public chargingstation: ChargingStation;

  constructor() { }

  ngOnInit(): void {
  }

}
