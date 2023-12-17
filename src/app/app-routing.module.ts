import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
 {path: 'home', 
component:HomeComponent
 },

 {
  path: 'wcs/:studentName',
  component: StudentComponent
 },
 {
  path: '',
  component: ErrorComponent
 }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
