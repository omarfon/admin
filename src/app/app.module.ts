import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas


// Modulos
import { SharedModule } from './shared/shared.module';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Firebase imports

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//paginas
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { CrearComponent } from './pages/+pacientes/crear/crear.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ListarComponent } from './pages/+pacientes/listar/listar.component';
import { DetailUserComponent } from './pages/+pacientes/detail-user/detail-user.component';
import { AppRoutingModule } from './app.routing.module';
import { CitasComponent } from './pages/+pacientes/citas/citas.component';
import { DoctoresallComponent } from './doctores/doctoresall/doctoresall.component';
import { CrearcitaComponent } from './pages/+pacientes/crearcita/crearcita.component';
import { AlergiasComponent } from './shared/paciente/alergias/alergias.component';
import { ContactosComponent } from './shared/paciente/contactos/contactos.component';
import { FinanciadorComponent } from './shared/paciente/financiador/financiador.component';
import { PacientesdoctorComponent } from './doctores/pacientesdoctor/pacientesdoctor.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    CrearComponent,
    Graficas1Component,
    ListarComponent,
    DetailUserComponent,
    CitasComponent,
    DoctoresallComponent,
    CrearcitaComponent,
    AlergiasComponent,
    ContactosComponent,
    FinanciadorComponent,
    PacientesdoctorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
