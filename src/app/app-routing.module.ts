import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationListComponent } from './formation/formation-list/formation-list.component';
import { AccueilComponent } from './Accueil/accueil/accueil.component';


const routes: Routes = [
  {path:'formations', component: FormationListComponent },
  {path:'Accueil', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
