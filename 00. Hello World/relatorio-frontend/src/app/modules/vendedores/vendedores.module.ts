import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { VendedoresRoutingModule } from './vendedores-routing.module';
import { FiltroVendedoresPageComponent } from './pages/filtro-vendedores-page/filtro-vendedores-page.component';

import { TableModule } from 'primeng/table';
import { JsonPlaceholderService } from '../../shared/services/jsonplaceholder.service';

@NgModule({
  declarations: [
    FiltroVendedoresPageComponent,
  ],
  imports: [
    VendedoresRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,
  ],
  exports: [],
  providers: [
    JsonPlaceholderService
  ]
})
export class VendedoresModule { }
