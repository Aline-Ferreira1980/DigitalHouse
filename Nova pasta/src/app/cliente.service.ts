import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { 
  
  }

  listar(){
    return this.httpClient.get(this.apiUrl);
  }

  listarEstados(){
    return this.httpClient.get(this.apiUrl+ '/estado');
  }

  listarCidades(idEstado: number){
    return this.httpClient.get(this.apiUrl+ '/estado/' + idEstado + '/cidades');
  }

  adicionar(cliente: any) {
    return this.httpClient.post(this.apiUrl, cliente);
  }

  excluir(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }

  atualizar(cliente: any) {
    return this.httpClient.put(this.apiUrl+ '/' + cliente.id, cliente);
  }
}
