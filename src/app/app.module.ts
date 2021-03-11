import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing,appRoutingProviders} from "./app.routing";
//para que funcionen los formularios en angular.
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
//esto es para que todas las peticiones ajax funcionen.
import{HttpClientModule} from "@angular/common/http";



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SerieComponent } from './components/serie/serie.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,  
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    PeliculaComponent,
    SerieComponent,
    ErrorComponent,
    CreateUserComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
