import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/pages/interfaces/empresa.interface';
import { EmpresaService } from 'src/app/pages/services/empresa.service';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa.form.component.html',
  styleUrls: ['./empresa.form.component.scss']
})
export class EmpresaFormComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) {
  }

 ngOnInit(): void {
 }

 public empresa:Empresa= { } as Empresa;
 

 public salvar(){
   EmpresaService.salvar(this.empresa);
   //this.router.navigateByUrl("/tabela");
 }

}
