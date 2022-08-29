import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ClienteTableComponent } from './pages/cliente-table/cliente-table.component';
import { EmpresaTableComponent } from './pages/empresa-table/empresa-table.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClienteFormComponent } from './forms/cliente.form/cliente.form.component';
import { EmpresaFormComponent } from './forms/empresa.form/empresa.form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmpresaTableComponent,
    ClienteTableComponent,
    DashboardComponent,
    ClienteFormComponent,
    EmpresaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
