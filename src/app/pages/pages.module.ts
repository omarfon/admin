import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';




import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { CitasComponent } from './+pacientes/citas/citas.component';
import { CrearComponent } from './+pacientes/crear/crear.component';
import { ListarComponent } from './+pacientes/listar/listar.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailUserComponent } from './+pacientes/detail-user/detail-user.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        CitasComponent,
        CrearComponent,
        ListarComponent,
        DetailUserComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        CrearComponent,
        ListarComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        RouterModule,
        CommonModule
    ]
})
export class PagesModule { }
