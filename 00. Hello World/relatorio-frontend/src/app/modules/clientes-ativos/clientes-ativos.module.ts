import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FiltroClientesAtivosPageComponent } from './pages/filtro-segmentos-page/filtro-clientes-ativos-page.component';
import { ClientesAtivosRoutingModule } from './clientes-ativos-routing.module';

import { JsonPlaceholderService } from '../../shared/services/jsonplaceholder.service';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    FiltroClientesAtivosPageComponent,
  ],
  imports: [
    ClientesAtivosRoutingModule,
    CommonModule,
    HttpClientModule,
    TableModule
  ],
  exports: [],
  providers: [
    JsonPlaceholderService
  ],
})
export class ClientesAtivosModule {}
