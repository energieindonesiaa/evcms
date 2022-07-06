import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "lodash";
import { Observable } from "rxjs";
import { ChargingStation } from "./chargingstation.types";

@Injectable()
export class ChargingStationService {

    private _chargingStationURL = "";
    constructor(private _httpClient: HttpClient) {

    }

    getChargingStationList(): Observable<any> {
        return this._httpClient.get<ChargingStation[]>(this._chargingStationURL);
    }
}