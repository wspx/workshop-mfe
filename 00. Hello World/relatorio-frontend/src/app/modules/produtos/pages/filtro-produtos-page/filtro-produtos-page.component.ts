import { Component, OnInit } from '@angular/core';

import { JsonPlaceholderService } from '../../../../shared/services/jsonplaceholder.service';
import { Todo } from '../../../../shared/services/models/todo.type';
import { take } from 'rxjs';

@Component({
  selector: 'mfe-produto-filtro-produtos-page',
  templateUrl: './filtro-produtos-page.component.html',
})
export class FiltroProdutosPageComponent implements OnInit {

  product: Todo[] = [];

  constructor(
    private readonly jsonPlaceholderService: JsonPlaceholderService
  ) { }

  ngOnInit(): void {
    this.jsonPlaceholderService.getAllTodos()
      .pipe(take(1))
      .subscribe(res => this.product = res);
  }
}
