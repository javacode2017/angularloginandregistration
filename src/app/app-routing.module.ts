import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';

const routes: Routes = [
  {path:'',component: LogincomponentComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
