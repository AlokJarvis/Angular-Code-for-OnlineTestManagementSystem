import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SuccessfulComponent } from './successful/successful.component';
import {AddTestComponent} from './add-test/add-test.component'
import { GetTestComponent } from './get-test/get-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { UpdateTestComponent } from './update-test/update-test.component';


const routes: Routes = [
  { path: 'adminlogin', component: AdminloginComponent },
  {path: 'successful', component:SuccessfulComponent},
  {path: "add-test", component: AddTestComponent},
  {path: "get-test", component: GetTestComponent},
  {path: "delete-test", component: DeleteTestComponent},
  {path: "update-test", component: UpdateTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
