import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'mfe-produto-menubar',
  templateUrl: './menubar.component.html'
})
export class MenubarComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/']
    },
    {
      label: 'Produtos',
      icon: 'pi pi-star',
      routerLink: ['produtos']
    },
    {
      label: 'Segmento',
      icon: 'pi pi-envelope',
      routerLink: ['segmentos']
    }
  ];

  constructor() { }
  ngOnInit(): void { }
}
