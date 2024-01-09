import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationListComponent } from './formation/formation-list/formation-list.component';
import { AccueilComponent } from './Accueil/accueil/accueil.component';
import { DetailsComponent } from './formation/Details/details/details.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';



const routes: Routes = [
  {path:'Formations', component: FormationListComponent },
  {path:'Accueil', component: AccueilComponent},
  {path: 'Details/:id', component: DetailsComponent},
  { path:'', redirectTo: '/Accueil', pathMatch: 'full' },
  {path: 'Register/:id', component: RegisterComponent},
  {path: 'login/:id', component: LoginComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
