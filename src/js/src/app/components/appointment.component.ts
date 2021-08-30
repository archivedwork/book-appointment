import { Component, OnInit } from "@angular/core";
import { AppointmentModel } from "../models/appointment.model";
import { AppointmentService } from "../services/appointments.service";

@Component({
    selector: 'appointment-component',
    template: `
    <p>Clients Appointments</p>

    <table class="table">
        <thead>
        <tr>
<!--
            <th scope="col">DocumentId</th>
-->
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Date Of Birth</th>
<!--
            <th scope="col">Department Name</th>
-->
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let apppoin of appointments">
<!--
            <th scope="row">{{apppoin.id}}</th>
-->
            <td>{{apppoin.firstName}}</td>
            <td>{{apppoin.lastName}}</td>
            <td>{{apppoin.email}}</td>
            <td>{{apppoin.mobile}}</td>
            <td>{{apppoin.dateOfBirth}}</td>
<!--
            <td>{{apppoin.department.departmentName}}</td>
-->
        </tr>
        </tbody>
    </table>
    `
})
export class AppointmentComponent implements OnInit{
    public appointments: AppointmentModel[] = [];


    constructor(private appointmentService: AppointmentService) { }

    ngOnInit(): void {

        this.getAppointments();
    }

    getAppointments(): void {
        this.appointmentService.getAppointments()
            .subscribe(apps => this.appointments = apps)

    }





}