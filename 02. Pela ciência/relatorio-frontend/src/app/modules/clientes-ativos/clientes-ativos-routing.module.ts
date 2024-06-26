import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FiltroClientesAtivosPageComponent } from './pages/filtro-segmentos-page/filtro-clientes-ativos-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Clientes Ativos - Relatório',
    component: FiltroClientesAtivosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesAtivosRoutingModule {}
