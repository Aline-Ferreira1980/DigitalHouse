import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';;
import {SelectItemGroup} from 'primeng/api';

interface City{
  name: String;
  code: String;
}
@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

 
  cities1: City[];
  selectedCity1: City;
  

  cliente= {id: '', nome: '',sobrenome: '', dataNasc: '', cpf: '', rg: '', email:'', telefone: '' };
	
 
  constructor(private clienteService: ClienteService,private router: Router) {
     
  this.cities1 = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
    
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