import { Component, OnInit } from '@angular/core';

import { Empresa } from '../interfaces/empresa.interface';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-empresa-table',
  templateUrl: './empresa-table.component.html',
  styleUrls: ['./empresa-table.component.scss']
})
export class EmpresaTableComponent implements OnInit {

  constructor(private empresaService: EmpresaService) { }
  
  empresas:Empresa[] = EmpresaService.all();

  ngOnInit(): void {
    this.listarTodasEmpresas();
  }
  
  listarTodasEmpresas(){
    this.empresas = EmpresaService.all();
  }

}
