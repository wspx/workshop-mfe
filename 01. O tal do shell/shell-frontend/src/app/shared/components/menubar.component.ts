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
      label: 'MFE Produtos',
      icon: 'pi pi-star',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-envelope',
          routerLink: ['produtos', 'dashboard']
        },
        {
          label: 'Produtos',
          icon: 'pi pi-envelope',
          routerLink: ['produtos']
        },
        {
          label: 'Segmentos',
          icon: 'pi pi-envelope',
          routerLink: ['produtos', 'segmentos']
        }
      ]
    },
    {
      label: 'Relatorio',
      icon: 'pi pi-envelope',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-envelope',
          routerLink: ['relatorio', 'dashboard']
        },
        {
          label: 'Vendedores',
          icon: 'pi pi-envelope',
          routerLink: ['relatorio']
        },
        {
          label: 'Clientes Ativos',
          icon: 'pi pi-envelope',
          routerLink: ['relatorio', 'clientes-ativos']
        }
      ]
    }
  ];

  constructor() { }
  ngOnInit(): void { }
}
