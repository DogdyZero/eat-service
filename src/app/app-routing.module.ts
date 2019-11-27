import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './template/acesso/container/container.component';
import { CadastroComponent } from './template/cadastro/cadastro.component';
import { MenuComponent } from './template/menu/menu.component';

const routes: Routes = [
  {path:'',  component:ContainerComponent},
  {path:'menu/:idUsuario',component:MenuComponent}, 
  {path:'cadastro',component:CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
