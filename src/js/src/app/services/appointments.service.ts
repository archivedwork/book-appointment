import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { AppointmentModel } from "../models/appointment.model";

@Injectable({providedIn: 'root'})
export class AppointmentService {

    private appointmentsURL = 'http://localhost:8083/';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' })
    };


    constructor(private http: HttpClient) {
    }

    getAppointments(): Observable<AppointmentModel[]> {
        return this.http.get<AppointmentModel[]>(this.appointmentsURL+'appointments');
        
    }


    addAppointment(appointment: AppointmentModel): Observable<AppointmentModel> {
        return this.http.post<AppointmentModel>(this.appointmentsURL + "appointment", appointment, this.httpOptions)
            .pipe(
            //    catchError(this.handleError('addHero', this.app))
            );
    }




}