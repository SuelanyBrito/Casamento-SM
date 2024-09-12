import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ThanksComponent } from './pages/about/thanks.component';
import { GeneralListComponent } from './pages/general-list/general-list.component';
import { ListaCasamentoComponent } from './pages/lista-casamento/lista-casamento.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'thanks', component:ThanksComponent},
  {path:'general-list', component:GeneralListComponent},
  {path:'lists', component:ListaCasamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
