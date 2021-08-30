import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { FormGroup, FormControl } from '@angular/forms';
import {AppointmentModel} from "../models/appointment.model";
import {AppointmentService} from "../services/appointments.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-component-add',
    template: `
        <div>
            <h2>Book an appointment</h2>
            <button class="btn btn-success" (click)=redirectMeTo()>goto appointments</button>
            <p>form to ask user to enter his name, email address, data of birth, mobile number, appointment date and time then submit button</p>
            <p>navigate to, appointment schedualed successfully, a code has been send to your emaill address, please save the code.</p>
            <p>To cancel the appointment, click here and enter the code</p>

            <div class="container-fluid">

                <form [formGroup]="appointmentForm">
                    <div class="row">
                        <div class="col">
                            <div class="form-group row">
                                <label>First Name</label>
                                <input type="text" name="first_name" id="first-name" formControlName="firstName"/>
                            </div>
                        </div>

                        <div class="col">
                            <div class="form-group row">
                                <label>Last Name</label>
                                <input type="text" name="last_name" id="last-name"  formControlName="lastName"/>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col">
                            <div class="form-group row">
                                <label>Email</label>
                                <input type="email" name="email" id="email"  formControlName="email"/>
                            </div>
                        </div>

                        <div class="col">
                            <div class="form-group row">
                                <label>Date of Birth</label>
                                <input type="text" name="date_of_birth" id="dob"  formControlName="dateOfBirth"/>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label>Mobile Number</label>
                                <input type="text" name="mobile_number" id="mobile"  formControlName="mobile"/>
                            </div>
                        </div>

                        <!--<div class="col-md-6">
                            <div class="form-group row">
                                <label>Appointent Date</label>
                                <input type="text" name="date"/>
                            </div>
                        </div>-->
                        
                    </div>

                    
                    <!--<div class="row">
                        <div class="col">
                            <div class="form-group row">
                                <label>Appointent Time</label>
                                <input type="text" name="time"/>
                            </div>
                        </div>
                    </div>-->
                    <button class="btn btn-primary" (click)=onSubmit() >Submit</button>
                </form>
            </div>
        </div>
        
    `
})
export class AppointmentAddComponent {

   appointmentForm = new FormGroup({
       firstName: new FormControl(''),
       lastName: new FormControl(''),
       email: new FormControl(''),
       dateOfBirth: new FormControl(''),
       mobile: new FormControl('')
   })


    newAppoint: AppointmentModel = {
        createdAt: "123",
        dateOfBirth: "1998017",
        department: {departmentCode: "IA123", departmentName: "Intelligent"},
        email: "mname@m.com",
        firstName: "Myname879",
        //  id: "12342356z54t321qwdas",
        lastName: "LastName",
        mobile: "6892873423q",
        updatedAt: ""

    }

    constructor(private appointmentService: AppointmentService, private httpClient: HttpClient, private router: Router) {
    }

    addNewAppointment(newAppointment: AppointmentModel) {
        return this.appointmentService.addAppointment(newAppointment)
          .subscribe((res) => console.log(res), (err) => console.log(err));
    }

    onSubmit() {
        console.log(this.appointmentForm.value);
        this.addNewAppointment(this.appointmentForm.value);
            this.router.navigate(['/appointments']);

        /* this.httpClient.post<AppointmentModel>("http://localhost:8083/appointment", this.appointmentForm.value)
             .subscribe(
                 (res) => console.log(res),
                 (err) => console.log(err)
             )*/
    }


    redirectMeTo() {
        this.router.navigate(['/appointments']).then(r => console.log(r));
   }



}