import { ClienteModel } from './model/cliente-model';
import { ClienteRepository } from './repository/cliente-repository';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [MessageService]
})
export class ClienteComponent implements OnInit {

  @ViewChild('upload') upload: ElementRef;
  public formulario: FormGroup;
  estados: any[] = [];
  cidades: any[] = [];
  imagem: number;
    
  public submitted: boolean = false;

  uploadedFiles: any[] = [];

  mensagem: Message[] = [];

  operacao: boolean = true;

  constructor(
    private repository: ClienteRepository,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
    this.listarEstados();
  }

  public iniciarFormulario() {
    this.formulario = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      sobrenome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      telefones: [''],
      dataNasc: [''],
      cpf: [''],
      rg: [''],
      email: ['', Validators.email],
      cep: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
    });
    // this.formulario.controls.id.setValue('');
    // this.formulario.controls.nome.setValue('Rafael');
    // this.formulario.controls.sobrenome.setValue('Lopes');    
  }

  cadastrar() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    this.salvar();
  };

  salvar() {
    
    // const listaTelefones = [];
    // this.formulario.value.telefones.forEach(element => {
    //   listaTelefones.push({
    //     id:null,numero:element,tipo:'casa'
    //   })
    // });

    const formData: any = new FormData();
    formData.append('imagem', this.uploadedFiles[0]);
     
    this.repository.postImagem(formData).subscribe(resposta => {      
      this.imagem = resposta.id;

      const dados = {

        id: this.formulario.value.id,
        nome: this.formulario.value.nome,
        sobrenome: this.formulario.value.sobrenome,
        telefones: [{
          id: null,
          telefone: this.formulario.value.telefones,
          tipo: 'Casa'
        }],
        dataNasc: this.formulario.value.dataNasc,
        cpf: this.formulario.value.cpf,
        rg: this.formulario.value.rg,
        email: this.formulario.value.email,
        endereco: {
          cep: this.formulario.value.cep,
          logradouro: this.formulario.value.logradouro,
          numero: this.formulario.value.numero,
          complemento: this.formulario.value.complemento,
          bairro: this.formulario.value.bairro,
          cidade: {
            id: this.formulario.value.cidade
          }
        },
        foto: {
          id: this.imagem
        }
  
      } as ClienteModel;
  
      if (dados.id) {
        this.repository.putCliente(dados).subscribe(resposta => {
          this.limparFormulario();
        });
      } else {
        this.repository.postCliente(dados).subscribe(resposta => {
          this.mensagem = [
            {
              severity: 'success',
              summary: 'CLIENTE',
              detail: 'cadastrado com sucesso!'
            }];
          this.limparFormulario();
        },
        (e) => {
            var msg: any[] = [];
            //Erro Principal
            msg.push({
              severity: 'error',
              summary: 'ERRO',
              detail: e.error.userMessage
            });
            //Erro de cada atributo
            var erros = e.error.objects;
            erros.forEach(function (elemento) {
              msg.push(
                {
                  severity: 'error',
                  summary: 'ERRO',
                  detail: elemento.userMessage
                });
            });
            this.mensagem = msg;
          }
        );
      }
       
    });     
  }

  listarEstados() {
    this.repository.getAllEstados().subscribe(resposta => {
      this.estados.push({ label: resposta.nome, value: resposta.id });
    });
  }
  listarCidades() {
    this.cidades = [];
    let id: number = this.formulario.value.estado;
    this.repository.getAllCidadesByEstado(id).subscribe(resposta => {
      this.cidades.push({ label: resposta.nome, value: resposta.id });
    });
  }

  limparFormulario() {
    this.submitted = false;
    this.formulario.reset();
    this.cidades = [];
    this.estados = [];
    this.listarEstados();
    (this.upload as any).clear();
  }

  enviarImagem(evento){
    this.uploadedFiles = [];
    
    for(let file of evento.files) {
      this.uploadedFiles.push(file);
    }    
    
  }
  
}
