import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { FiltroProdutosPageComponent } from './pages/filtro-produtos-page/filtro-produtos-page.component';

import { TableModule } from 'primeng/table';
import { JsonPlaceholderService } from '../../shared/services/jsonplaceholder.service';

@NgModule({
  declarations: [
    FiltroProdutosPageComponent,
  ],
  imports: [
    ProdutosRoutingModule,
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
export class ProdutosModule { }
