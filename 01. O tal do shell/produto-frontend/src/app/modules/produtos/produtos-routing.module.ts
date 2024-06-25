import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltroProdutosPageComponent } from './pages/filtro-produtos-page/filtro-produtos-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Filtro Produtos',
    component: FiltroProdutosPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule {}
