import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MenubarComponent } from './components/menubar.component';

import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
  ],
  exports: [
    MenubarComponent
  ],
})
export class SharedModule {}
