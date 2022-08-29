import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/pages/interfaces/cliente.interface';
import { ClienteService } from 'src/app/pages/services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente.form.component.html',
  styleUrls: ['./cliente.form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) {
  }

 ngOnInit(): void {
 }

 public cliente:Cliente = { } as Cliente;
 

 public salvar(){
   ClienteService.salvar(this.cliente);
   //this.router.navigateByUrl("/tabela");
 }

}
