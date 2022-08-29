import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteFormComponent } from './forms/cliente.form/cliente.form.component';
import { EmpresaFormComponent } from './forms/empresa.form/empresa.form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'cadastro/empresa',
    component: EmpresaFormComponent
  },
  {
    path:'cadastro/cliente',
    component: ClienteFormComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
