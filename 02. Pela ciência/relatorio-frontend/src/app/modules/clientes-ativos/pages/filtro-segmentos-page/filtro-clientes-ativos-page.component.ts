import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs';

import { JsonPlaceholderService } from '../../../../shared/services/jsonplaceholder.service';
import { User } from '../../../../shared/services/models/user.type';

@Component({
  selector: 'mfe-relatorio-filtro-clientes-ativos-page',
  templateUrl: './filtro-clientes-ativos-page.component.html',
  styleUrls: ['./filtro-clientes-ativos-page.component.scss']
})
export class FiltroClientesAtivosPageComponent implements OnInit {

  users: User[] = [];

  constructor(
    private readonly jsonPlaceholderService: JsonPlaceholderService
  ) {}
  ngOnInit(): void {
    this.jsonPlaceholderService.getAllUsers()
      .pipe(take(1))
      .subscribe(res => this.users = res);
  }
}
