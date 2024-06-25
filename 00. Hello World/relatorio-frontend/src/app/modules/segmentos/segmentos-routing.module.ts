import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FiltroSegmentosPageComponent } from './pages/filtro-segmentos-page/filtro-segmentos-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Filtro Segmentos',
    component: FiltroSegmentosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegmentosRoutingModule {}
