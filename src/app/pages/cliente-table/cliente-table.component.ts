import { Component, OnInit } from '@angular/core';

import { Cliente } from '../interfaces/cliente.interface';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-table',
  templateUrl: './cliente-table.component.html',
  styleUrls: ['./cliente-table.component.scss']
})
export class ClienteTableComponent implements OnInit {

  constructor() { 

  }

  public clientes:Cliente[] = ClienteService.all();

  
  ngOnInit(): void {
    this.listarTodosClientes();
  }

  listarTodosClientes(){
    this.clientes = ClienteService.all();
  }

}
