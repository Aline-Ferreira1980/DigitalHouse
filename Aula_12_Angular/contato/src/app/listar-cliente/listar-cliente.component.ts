import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  cliente= {id: '', nome: '',sobrenome: '', dataNasc: '', cpf: '', rg: '', email:'', telefone: '' };
  clienteService: any;
  ClienteService: any;

  constructor(clienteService: ClienteService) { }
  ngOnInit() {
    this.consultar();
  }
  consultar() {
    this.clienteService.listar().subscribe(resposta =>
      this.cliente = resposta as any);
  }
  
  listar() {
    this.ClienteService.atualizar(this.cliente).subscribe(() => {
    this.cliente = {id: '', nome: '',sobrenome: '', dataNasc: '', cpf: '', rg: '', email:'', telefone: '' };
    this.consultar();
    });
  }
}
