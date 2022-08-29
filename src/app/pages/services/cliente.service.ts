import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient){}
    private static clientes:Cliente[] = []

    public static salvar(cliente:Cliente){
        ClienteService.clientes.push(cliente);
    }

    public static all(){
        return ClienteService.clientes;
    }
}
