import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Empresa } from '../interfaces/empresa.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient){}
    private static empresas:Empresa[] = []

    public static salvar(empresa:Empresa){
        EmpresaService.empresas.push(empresa);
    }

    public static all(){
        return EmpresaService.empresas;
    }
}
