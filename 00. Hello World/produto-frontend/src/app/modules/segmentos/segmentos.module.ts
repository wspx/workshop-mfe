import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FiltroSegmentosPageComponent } from './pages/filtro-segmentos-page/filtro-segmentos-page.component';
import { SegmentosRoutingModule } from './segmentos-routing.module';

import { JsonPlaceholderService } from '../../shared/services/jsonplaceholder.service';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    FiltroSegmentosPageComponent,
  ],
  imports: [
    SegmentosRoutingModule,
    CommonModule,
    HttpClientModule,
    TableModule
  ],
  exports: [],
  providers: [
    JsonPlaceholderService
  ],
})
export class SegmentosModule {}
