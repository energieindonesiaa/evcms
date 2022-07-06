import { StationInfo } from "./stationinfo.types";

export interface ChargingStation {
    code: string;
    vendor: string;
    site: string;
    city: string;
    address: string;
    image?: string;
    station_amount?: number;
    station_detail: StationInfo[];
}