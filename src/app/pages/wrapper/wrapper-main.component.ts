import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper-main',
  template: `
  <p>Wrapper main</p>
  <br>
  <app-list></app-list>
  <button routerLink='./1'>Detail</button>
  `,
})
export class WrapperMainComponent {}
