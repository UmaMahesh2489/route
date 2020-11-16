import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [{path: 'home', component: HomeComponent},
{path: 'patientdetails' , component: PatientDetailsComponent },
{path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
