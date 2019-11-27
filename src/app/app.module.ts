import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatTableModule} from '@angular/material/table'; 

import { LoginComponent } from './template/acesso/login/login.component';
import { ContainerComponent } from './template/acesso/container/container.component';
import { UsuarioComponent } from './template/cadastro/usuario/usuario.component';
import { MeuPedidoComponent } from './template/menu/meu-pedido/meu-pedido.component';
import { NovoPedidoComponent } from './template/menu/novo-pedido/novo-pedido.component';
import { MenuComponent } from './template/menu/menu.component';
import { SideMenuComponent } from './template/menu/side-menu/side-menu.component';
import { CadastroComponent } from './template/cadastro/cadastro.component';
import { EnderecoComponent } from './template/cadastro/endereco/endereco.component';
import { DadosPessoaisComponent } from './template/cadastro/dados-pessoais/dados-pessoais.component';
import { Dataservice } from './api/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContainerComponent,
    UsuarioComponent,
    MeuPedidoComponent,
    NovoPedidoComponent,
    MenuComponent,
    SideMenuComponent,
    CadastroComponent,
    EnderecoComponent,
    DadosPessoaisComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(Dataservice),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
