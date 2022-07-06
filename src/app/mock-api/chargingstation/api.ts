import { Injectable } from "@angular/core";
import { FuseMockApiService } from "@fuse/lib/mock-api";
import { chargingstation as chargingstationData } from "app/mock-api/chargingstation/data";
import { cloneDeep } from "lodash";

@Injectable({
    providedIn: 'root'
})

export class ChargingStationMockApi {

    private _chargingstation: any = chargingstationData;

    constructor(private _fuseMockApiService: FuseMockApiService) {

    }

    registerHandlers(): void {
        this._fuseMockApiService
            .onGet('api/common/chargingstation')
            .reply(() => [200, cloneDeep(this._chargingstation)]);
    }
};