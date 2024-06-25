import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    ButtonModule
  ],
})
export class DashboardModule {}
