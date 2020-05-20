import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { CrearComponent } from './+pacientes/crear/crear.component';
import { ListarComponent } from './+pacientes/listar/listar.component';
import { DetailUserComponent } from './+pacientes/detail-user/detail-user.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'crear', component: CrearComponent },
            { path: 'listar', component: ListarComponent },
            { path: 'detailuser', component: DetailUserComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
