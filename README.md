# route
link one page to another page
app-routing.moudle.ts
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

patient-details.component.html
<p>mypr0contact works!</p>
<div class="container-fluid">
    
    <div class="row">
        <div style="text-align:center">Adding new details</div>
        <div [ngClass]="'effects'">Add New Patient</div>
        </div>
        
        <ul>
            <li><a routerlink="home.component.html"><button class="btn ">Patient Details</button></a></li>
            <li><a routerlink="patient-details.component.html"><button class="btn ">Contact Details</button></a></li>
            <li><a href="#"><button class="btn ">Identification Details</button></a></li>
            <li><a href="#"><button class="btn ">Social Medical Details</button></a></li>
            <li><a href="#"><button class="btn ">Emergency Contact Details</button></a></li>

               </ul>
               <div class="row">
        <div class="col-3">
           
            <!-- <img [ngClass]="'changed'" [src]="pic"> -->
            
  <p style="text-align: center;margin: 55px;">Register Patient please enter all required details into the form.</p>

</div>
        
            <div class="col-4">
                <form>
                        <div class="form-group">
                            <label><b>Email</b></label><br>
                      <input type="email"  placeholder="Email">
                           </div>
                           <div class="form-group">
                            <label><b>Phone</b></label><br>
                      <input type="text"  placeholder="Phone">
                           </div>
                           <div class="form-group">
                            <label><b>Address1</b></label><br>
                      <input type="text"  placeholder="Address1">
                           </div>
                           <div class="form-group">
                            <label><b>City</b></label><br>
                      <input type="text"  value="Visakhapatnam">
                           </div>
                           <div class="form-group">
                            <label><b>State</b></label><br>
                      
                      <select>
                          <option>AndharaPradesh</option>
                          <option>Telangana</option>
                          <option>Kerala</option>
                           <option>Karnataka</option>

                      </select>
                           </div>
                          
                              </form>
                </div>
                <div class="col-4">


                    <form>
                        <div class="form-group">
                            <label><b>Alternative Email </b></label><br>
                      <input type="text" required placeholder="Email">
                           </div>
                           <div class="form-group">
                            <label><b>Alternative Phone</b></label><br>
                      <input type="text" required placeholder="Phone">
                           </div>
                           <div class="form-group">
                            <label><b>Address2</b></label><br>
                      <input type="text" placeholder="Address2" >
                           </div>
                           <br>
                           <br>
                           <br>
                           <div class="form-group">
                           <label><b>Pincode</b></label><br>
                           <input type="text" placeholder="Pincode">
                           </div> 
                              </form>
                    
                
                             
                </div>            
            
            
        
       
        </div>
        <!-- <div [ngClass]="'vertical-cent'"> -->
            <div class="wrapper">
                <button class="button btn btn-primary"><a routerlink="home.component.html">Previous</a></button>
                <button class="button btn btn-primary"><a routerlink="patient-details.component.html">Next</a></button>
              <!-- </div>
        <button  class="btn btn-primary" >Previous</button> 
        <button class="btn btn-primary" >Next</button> -->
        <!-- </div> -->
        ______________________
        home.component.html
        
        
<div class="container-fluid">
    
    <div class="row">
        <div style="text-align:center">Adding new details</div>
        <div [ngClass]="'effects'">Add New Patient</div>
        </div>
        
        <ul>
            <li><a routerLink="patientdetails.component.html"><button class="btn ">Patient Details</button></a></li>
            <li><a routerLink="home.component.html"><button class="btn ">Contact Details</button></a></li>
            <li><a href="#"><button class="btn ">Identification Details</button></a></li>
            <li><a href="#"><button class="btn ">Social Medical Details</button></a></li>
            <li><a href="#"><button class="btn ">Emergency Contact Details</button></a></li>

               </ul>
               <div class="row">
        <div class="col-3">
           
            <!-- <img [ngClass]="'changed'" [src]="pic"> -->
            
  <p style="text-align: center;margin: 55px;">Register Patient please enter all required details into the form.</p>

</div>
        
            <div class="col-4">
                <form>
                        <div class="form-group">
                            <label><b>FirstName</b></label><br>
                      <input type="text" required placeholder="FirstName">
                           </div>
                           <div class="form-group">
                            <label><b>LastName</b></label><br>
                      <input type="text" required placeholder="LastName">
                           </div>
                           <div class="form-group">
                            <label><b>Spouse's Name</b></label><br>
                      <input type="text"  placeholder="Spouse's Name">
                           </div>
                           <div class="form-group">
                            <label><b>Gender</b></label><br>
                            <input type="radio" id="male" name="gender" value="male">
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="female">
                            <label for="female">Female</label>
                           </div>
                              </form>
                </div>
                <div class="col-4">


                    <form>
                        <div class="form-group">
                            <label><b>Middle Name</b></label><br>
                      <input type="text" required placeholder="middle Name">
                           </div>
                           <div class="form-group">
                            <label><b>Father's Name</b></label><br>
                      <input type="text" required placeholder="Father's Name">
                           </div>
                           <div class="form-group">
                            <label><b>BirthDay</b></label><br>
                      <input type="date"  >
                           </div>
                           <div class="form-group">
                            <label><b>Martial Status</b></label><br>
                            <input type="radio" id="Single" name="gender" value="Single">
                            <label for="Single">Single</label>
                            <input type="radio" id="Married" name="gender" value="Married">
                            <label for="Married">Married</label>
                                                        <input type="radio" id="Divorced" name="gender" value="Divorced">
                            <label for="Divorced">Divorced</label>
                            <input type="radio" id="Widow" name="gender" value="Widow">
                            <label for="Widow">Widow</label>
                           </div>
                              </form>
                    
                
                             
                </div>            
            
            
        
       
        </div>
        <!-- <div [ngClass]="'vertical-cent'"> -->
        <button  [ngClass]="'vertical-center'" class="btn btn-primary" ><a routerLink="patientdetails.component.html">Next</a></button>
        <!-- </div> -->
_______________
app.component.html
<body>

  <div class="container-fluid">

    <div class="row">
      <div style="text-align:center">Adding new details</div>
      <div [ngClass]="'effects'">Add New Patient</div>
    </div>

    <ul>
      <li><a routeLink="patientdetails.component.html"><button class="btn ">Patient Details</button></a></li>
      <li><a routerLink="home.component.html"><button class="btn ">Contact Details</button></a></li>
      <li><a href="#"><button class="btn ">Identification Details</button></a></li>
      <li><a href="#"><button class="btn ">Social Medical Details</button></a></li>
      <li><a href="#"><button class="btn ">Emergency Contact Details</button></a></li>

    </ul>
    <div class="row">
      <div class="col-3">

        <!-- <img [ngClass]="'changed'" [src]="pic"> -->

        <p style="text-align: center;margin: 55px;">Register Patient please enter all required details into the form.
        </p>

      </div>

      <div class="col-4">
        <form>
          <div class="form-group">
            <label><b>FirstName</b></label><br>
            <input type="text" required placeholder="FirstName">
          </div>
          <div class="form-group">
            <label><b>LastName</b></label><br>
            <input type="text" required placeholder="LastName">
          </div>
          <div class="form-group">
            <label><b>Spouse's Name</b></label><br>
            <input type="text" placeholder="Spouse's Name">
          </div>
          <div class="form-group">
            <label><b>Gender</b></label><br>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>
          </div>
        </form>
      </div>
      <div class="col-4">


        <form>
          <div class="form-group">
            <label><b>Middle Name</b></label><br>
            <input type="text" required placeholder="middle Name">
          </div>
          <div class="form-group">
            <label><b>Father's Name</b></label><br>
            <input type="text" required placeholder="Father's Name">
          </div>
          <div class="form-group">
            <label><b>BirthDay</b></label><br>
            <input type="date">
          </div>
          <div class="form-group">
            <label><b>Martial Status</b></label><br>
            <input type="radio" id="Single" name="gender" value="Single">
            <label for="Single">Single</label>
            <input type="radio" id="Married" name="gender" value="Married">
            <label for="Married">Married</label>
            <input type="radio" id="Divorced" name="gender" value="Divorced">
            <label for="Divorced">Divorced</label>
            <input type="radio" id="Widow" name="gender" value="Widow">
            <label for="Widow">Widow</label>
          </div>
        </form>



      </div>




    </div>
    <!-- <div [ngClass]="'vertical-cent'"> -->
    <button [ngClass]="'vertical-center'" class="btn btn-primary"><a routerlink="home.component.html">Next<router-outlet></router-outlet></a></button>
    <!-- </div> -->

    
    </div>
    </body>
