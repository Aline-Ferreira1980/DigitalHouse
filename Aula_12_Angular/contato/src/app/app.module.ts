import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { PainelAgendaComponent } from './painel-agenda/painel-agenda.component';
import { from } from 'rxjs';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


const routes: Routes = [
  {path: 'agenda', component: PainelAgendaComponent},
  {path: 'cadastro', component: CadastroClienteComponent}
]
  @NgModule({
  declarations: [
    AppComponent,
    PainelAgendaComponent,
    CadastroClienteComponent,
    ListarClienteComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule, 
    DropdownModule,
    HttpClient,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
