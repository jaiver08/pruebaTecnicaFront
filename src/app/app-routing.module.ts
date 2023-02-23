import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@core/components/home/home.component';
import { UsersComponent } from '@core/components/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:login', component: UsersComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
