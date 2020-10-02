import { ClienteModel } from './model/cliente-model';
import { ClienteRepository } from './repository/cliente-repository';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  estados: any []= [];
  cidades: any []=[];

  public formulario: FormGroup;
  operacao: boolean = true;

  constructor(
    private repository: ClienteRepository,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.iniciarFormulario();

    this.repository.getAllEstados().subscribe(resposta =>{
      this.estados.push({label: resposta.nome, value: resposta.id});
    });
  }

  public iniciarFormulario(){
    this.formulario= this.fb.group({
      id: [null],
      nome: ['',Validators.required, Validators.minLength(3)],
      sobrenome:['', Validators.required ] ,
      telefones:[''],
      dataNasc:[''],
      cpf: [''],
      rg:[''],
      email:[''],
      cep:[''],
      logradouro:[''],
      numero: [''],
      complemento: [''],
      bairro:[''],
      cidade:[''],
      estado:[''],
    });
    //this.formulario.controls.id.setValue('');
    //this.formulario.controls.nome.setValue('Aline');
    //this.formulario.controls.sobrenome.setValue('Ferreira');
  }
    cadastrar(){
      if (this.formulario.invalid){
        return;
      }
      this.salvar();
    };
  salvar(){
    //const listaTelefones = [];
    //this.formulario.value.telefones.forEach(element =>{
      //listaTelefones.push({
        //id: null, numero:element, tipo: 'casa'
   // })
   // });

    const dados = {
      id: this.formulario.value.id,
      nome: this.formulario.value.nome,
      sobrenome: this.formulario.value.sobrenome,
      telefones:[{
        id: null,
        telefone: this.formulario.value.telefones,
        tipo: 'Casa'
      }],
      dataNasc: this.formulario.value.dataNasc,
      cpf: this.formulario.value.cpf,
      rg: this.formulario.value.rg,
      email: this.formulario.value.email,
      endereco:{
        cep: this.formulario.value.cep,
        logradouro: this.formulario.value.logradouro,
        numero: this.formulario.value.numero,
        complemento: this.formulario.value.complemento,
        bairro: this.formulario.value.bairro,
        cidade: {
          id: this.formulario.value.cidade
        }
      }
    }as ClienteModel;
    
    if (dados.id){
      this.repository.putCliente(dados).subscribe(resposta=> {
        this.limparFormulario();
      });
    }
    else{
      this.repository.postCliente(dados).subscribe(resposta =>{
        this.limparFormulario();
      })
    }
  }

  limparFormulario(){
    this.formulario.reset();
  }
  listarCidades(){
    this.cidades = [];
    let id: number = this.formulario.value.estado;
    this.repository.getAllCidadesByEstado(id).subscribe(resposta =>{
      this.cidades.push({label: resposta.nome, value: resposta.id});
    });
  }
}

