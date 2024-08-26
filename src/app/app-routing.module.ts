import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { GeneralListComponent } from './pages/general-list/general-list.component';
import { ListaCasamentoComponent } from './pages/lista-casamento/lista-casamento.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'about', component:AboutComponent},
  {path:'general-list', component:GeneralListComponent},
  {path:'lista-casamento', component:ListaCasamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
