import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../../../shared/services/jsonplaceholder.service';
import { take } from 'rxjs';
import { Comment } from '../../../../shared/services/models/comments.type';

@Component({
  selector: 'mfe-produto-filtro-segmentos-page',
  templateUrl: './filtro-segmentos-page.component.html',
})
export class FiltroSegmentosPageComponent implements OnInit {

  segmentos: Comment[] = [];

  constructor(
    private readonly jsonPlaceholderService: JsonPlaceholderService
  ) {}
  ngOnInit(): void {
    this.jsonPlaceholderService.getAllComments()
      .pipe(take(1))
      .subscribe(res => this.segmentos = res);
  }
}
