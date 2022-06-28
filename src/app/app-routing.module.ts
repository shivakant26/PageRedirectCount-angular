import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { RegistrationComponent } from './Component/registration/registration.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"registration",
    pathMatch: 'full',
    component:RegistrationComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
