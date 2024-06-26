import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/module-federation';

import { HomePageComponent } from './shared/components/home/home-page.component';
import { environment } from 'src/environment/environment';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: 'produtos',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: environment.ambientes.qwaProdutos,
      exposedModule: './MFE-QWA-PRODUTOS-PRODUTOS'
    }).then(m => m.ProdutosModule)
  },
  {
    path: 'produtos/dashboard',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: environment.ambientes.qwaProdutos,
      exposedModule: './MFE-QWA-PRODUTOS-DASHBOARD'
    }).then(m => m.DashboardModule)
  },
  {
    path: 'produtos/segmentos',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: environment.ambientes.qwaProdutos,
      exposedModule: './MFE-QWA-PRODUTOS-SEGMENTOS'
    }).then(m => m.SegmentosModule)
  },
  {
    path: 'relatorio/dashboard',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: environment.ambientes.qwaRelatorio,
      exposedModule: './MFE-QWA-RELATORIOS-DASHBOARD'
    }).then(m => m.DashboardModule)
  },
  {
    path: 'relatorio/vendedores',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: environment.ambientes.qwaRelatorio,
      exposedModule: './MFE-QWA-RELATORIOS-VENDEDORES'
    }).then(m => m.VendedoresModule)
  },
  {
    path: 'relatorio/clientes-ativos',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: environment.ambientes.qwaRelatorio,
      exposedModule: './MFE-QWA-RELATORIOS-CLIENTES-ATIVOS'
    }).then(m => m.ClientesAtivosModule)
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
