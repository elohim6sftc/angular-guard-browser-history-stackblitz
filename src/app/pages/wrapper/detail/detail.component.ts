import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../../../guards/can-deactivate.guard';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  template: `
  <p>Detail</p>
  <br>
  <button routerLink='../'>Back</button>
  `,
})
export class DetailComponent implements CanComponentDeactivate {
  public canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.deactivateModalMock().pipe(
      switchMap((result) => {
        return this._applyDeactivatedResult(result);
      })
    );
  }

  public deactivateModalMock(): Observable<string> {
    // user clicked
    return of('no').pipe(delay(3000));
  }

  private _applyDeactivatedResult(result: string): Observable<boolean> {
    return of(result === 'yes');
  }
}
