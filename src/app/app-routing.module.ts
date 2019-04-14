import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRoutingModule } from '../../dist/login';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginRoutingModule], // Use routes from login library
  declarations: [HomeComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
