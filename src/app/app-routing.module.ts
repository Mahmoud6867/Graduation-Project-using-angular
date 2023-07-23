import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OffersComponent } from './components/offers/offers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ManageRoomsComponent } from './components/manage-rooms/manage-rooms.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdsComponent } from './components/ads/ads.component';
import { CitiesComponent } from './components/cities/cities.component';

const routes: Routes = [
  {path:"",component:SignInComponent},
  {path:"signIn", component:SignInComponent ,title:"Sign In"},
  {path:"adminPanel", component:AdminPanelComponent,children:[
    {path:"home", component:HomeComponent ,title:"Home"},
    {path:"ads", component:AdsComponent ,title:"Advertisements"},
    {path:"cities", component:CitiesComponent ,title:"Cities"},
    {path:"dashboard", component:DashboardComponent ,title:"Dashboard"},
    {path:"offers", component:OffersComponent ,title:"Offers"},
    {path:"orders", component:OrdersComponent ,title:"Orders"},
    {path:"manageRooms", component:ManageRoomsComponent ,title:"ManageRooms"},
    {path:"signUp", component:SignUpComponent ,title:"Sign Up"},
  ]},

  {path:"**", component:NotFoundComponent ,title:"Not Found"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
