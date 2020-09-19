import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente= {id: '', nome: '',sobrenome: '', dataNasc: '', cpf: '', rg: '', email:'', telefone: '' };
	
 
  constructor(private clienteService: ClienteService) {
    
  }
  ngOnInit(): void {
  }

  
  adicionar() {
    
    this.clienteService.adicionar(this.cliente).subscribe(() => {
      this.cliente = {id: '', nome: '', sobrenome: '',telefone: '', dataNasc: '', 
      cpf: '', rg: '', email: ''};
      console.log("Dados inseridos com sucesso!");
    });
  }
}