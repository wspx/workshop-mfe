import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltroVendedoresPageComponent } from './pages/filtro-vendedores-page/filtro-vendedores-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Vendedores - Relatório',
    component: FiltroVendedoresPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedoresRoutingModule {}
