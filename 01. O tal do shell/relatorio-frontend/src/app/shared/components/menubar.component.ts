import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'mfe-relatorio-menubar',
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
      label: 'Vendedores',
      icon: 'pi pi-star',
      routerLink: ['vendedores']
    },
    {
      label: 'Clientes Ativos',
      icon: 'pi pi-envelope',
      routerLink: ['clientes-ativos']
    }
  ];

  constructor() { }
  ngOnInit(): void { }
}
