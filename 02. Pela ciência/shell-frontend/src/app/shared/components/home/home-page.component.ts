import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfe-shell-home-page',
  template: `
    <h1>Hello World from Home Page</h1>
  `
})
export class HomePageComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}
