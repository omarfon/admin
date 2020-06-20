import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { CrearComponent } from './pages/+pacientes/crear/crear.component';
import { ListarComponent } from './pages/+pacientes/listar/listar.component';
import { DetailUserComponent } from './pages/+pacientes/detail-user/detail-user.component';
import { CitasComponent } from './pages/+pacientes/citas/citas.component';
import { DoctoresallComponent } from './doctores/doctoresall/doctoresall.component';
import { CrearcitaComponent } from './pages/+pacientes/crearcita/crearcita.component';
import { PacientesdoctorComponent } from './doctores/pacientesdoctor/pacientesdoctor.component';



const routes: Routes = [
    { path: '', 
      component: PagesComponent,
      children:[
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: 'crear', component: CrearComponent },
      { path: 'listar', component: ListarComponent },
      { path: 'detailuser', component: DetailUserComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'doctoresall', component: DoctoresallComponent },
      { path: 'crear-cita', component: CrearcitaComponent },
      { path: 'pacientesdoctor', component: PacientesdoctorComponent },
      ]},
    { path: 'login', 
      component: LoginComponent },
    { path: 'register', 
      component: RegisterComponent },
    /* { path: '**', 
      component: NopagefoundComponent }, */
      { path: 'dashboard', component: DashboardComponent },
      { path: 'pages', component: PagesComponent },
      
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
