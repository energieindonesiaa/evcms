import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Auth,  API } from 'aws-amplify';

@Component({
  selector: 'app-chargingstationlist',
  templateUrl: './chargingstationlist.component.html',
  styleUrls: ['./chargingstationlist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChargingstationlistComponent implements OnInit {

  arr_charging: Array<any> = new Array();
  
  constructor() { }

  ngOnInit(): void {
    this.getStationList();
    this.arr_charging = [
      {
        evcs_code: "H00001",
        evcs_vendor: "Hyundai",
        evcs_site: "Botani Square",
        city: "Bogor",
        address: "Jl Pajajaran",
        image: "",
        
        gps_loc_x: "",
        gps_loc_y: "",
        station_amount: 5,
        station_available: 3,
        station_detail: [
          { location: "Lobby Utara", chargingno: "1", connector: "CCS/SAE", capacity: "50", available: true },
          { location: "Lobby Utara", chargingno: "2", connector: "CHAdeMO", capacity: "50", available: true },
          { location: "Lobby Utara", chargingno: "3", connector: "J-1172", capacity: "22", available: false },
          { location: "Lobby Utara", chargingno: "4", connector: "J-1172", capacity: "7.2", available: true },
          { location: "Lobby Utama", chargingno: "1", connector: "CCS/SAE", capacity: "62.5", available: false }
        ]
      },
      {
        
        evcs_code: "H00002",
        evcs_vendor: "Hyundai",
        evcs_site: "Lotte Yasmin",
        city: "Bogor",
        address: "Jl Yasmin",
        image: "",
        
        type: "2",
        gps_loc_x: "",
        gps_loc_y: "",
        station_amount: 2,
        station_available: 2,
        station_detail: [
          { location: "Gate 1", chargingno: "1", connector: "CHAdeMO", capacity: "50", available: true },
          { location: "Gate 1", chargingno: "2", connector: "J-1172", capacity: "7.2", available: true }
        ]
      }
    ]
  }

  async getStationList(): Promise<void>
  {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    let myInit = { // OPTIONAL
      // body: {}, // replace this with attributes you need
      headers: {
        Authorization: `Bearer ${token}`,
      }, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      queryStringParameters: {},
    }
    API.get("charginglistapi", "/charginglist", myInit)
    .then(response => {
      debugger;
      console.log(response);
    })
    .catch(error => {
      debugger;
      console.log(error.response);
   });
  
  }

}
