import { Component, OnInit } from '@angular/core';

import { JsonPlaceholderService } from '../../../../shared/services/jsonplaceholder.service';
import { Post } from '../../../../shared/services/models/post.type';
import { take } from 'rxjs';

@Component({
  selector: 'mfe-relatorio-filtro-vendedores-page',
  templateUrl: './filtro-vendedores-page.component.html',
})
export class FiltroVendedoresPageComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private readonly jsonPlaceholderService: JsonPlaceholderService
  ) { }

  ngOnInit(): void {
    this.jsonPlaceholderService.getAllPosts()
      .pipe(take(1))
      .subscribe(res => this.posts = res);
  }
}
