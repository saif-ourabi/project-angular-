import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormationListComponent } from './formation/formation-list/formation-list.component';
import { DetailsComponent } from './formation/Details/details/details.component';
import { RegisterComponent } from './user/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { CandidatComponent } from './user/candidat/candidat.component';






@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    FormationListComponent,
    DetailsComponent,
    RegisterComponent,
    LoginComponent,
    CandidatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
