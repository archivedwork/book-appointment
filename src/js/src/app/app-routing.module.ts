import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from "./components/appointment.component";
import { AppointmentAddComponent } from "./components/appointment-add.component";

const routes: Routes = [
  {path: 'appointments', component: AppointmentComponent},
  {path: '', component: AppointmentAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
