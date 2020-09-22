import { AppModule } from './app.module';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelAgendaComponent } from './painel-agenda/painel-agenda.component';
import { from } from 'rxjs';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    PainelAgendaComponent,
    CadastroClienteComponent,
    ListarClienteComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
