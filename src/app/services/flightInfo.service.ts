import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight, allFlightDetails } from './flightInfo';

@Injectable({
    providedIn: 'root'
})
export class FlightInfoServices {

    constructor(private httpClient: HttpClient) { }
    public findFlightDetails(): Observable<Flight> {
        const endpoint = "assets/flightInfo.json";

        return this.httpClient
            .get<Flight>(`${endpoint}`)
            .pipe(map(data => this.toDeliTypveryeObject(data)));
    }

    private toDeliTypveryeObject(data: any): Flight {
        const flightType = new Flight();
        flightType.FlightRow = [];
        for (var i = 0; i < data.allFlightDetails.length; i++) {
            const flight = new allFlightDetails();
            flight.Duration = data.allFlightDetails[i].Duration;
            flight.ProductImg = data.allFlightDetails[i].ProductImg;
            flight.RefundableInfo = data.allFlightDetails[i].RefundableInfo;
            flight.arrival = data.allFlightDetails[i].arrival;
            flight.arrivalCountry = data.allFlightDetails[i].arrivalCountry;
            flight.arrivalShort = data.allFlightDetails[i].arrivalShort;
            flight.arrivalTime = data.allFlightDetails[i].arrivalTime;
            flight.departure = data.allFlightDetails[i].departure;
            flight.departureCountry = data.allFlightDetails[i].departureCountry;
            flight.departureShort = data.allFlightDetails[i].departureShort;
            flight.departureTime = data.allFlightDetails[i].departureTime;
            flight.id = data.allFlightDetails[i].id;
            flight.noCostDesc = data.allFlightDetails[i].noCostDesc;
            flight.noCostPrice = data.allFlightDetails[i].noCostPrice;
            flight.price = data.allFlightDetails[i].price;
            flight.productName = data.allFlightDetails[i].productName;
            flightType.FlightRow.push(flight);

        }
        return flightType;
    }
}

