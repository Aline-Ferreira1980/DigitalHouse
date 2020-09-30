import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  cl = {id: '', nome: '', sobrenome: '', dataNas: '', cpf: '', rg: '',
  email: '' , telefone: ''};
  cliente = [];
  operacao = true;

  constructor(private ClienteService: ClienteService, private router: Router) { }
  ngOnInit() {
    this.consultar();
  }
  consultar() {
    this.ClienteService.listar().subscribe(resposta =>
      this.cliente = resposta as any);
  }
}
