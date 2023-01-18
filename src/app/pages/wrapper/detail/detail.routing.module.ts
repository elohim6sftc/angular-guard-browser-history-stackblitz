import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailWrapperComponent } from './detail-wrapper.component';
import { DetailComponent } from './detail.component';
import { CanDeactivateGuard } from '../../../guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: DetailWrapperComponent,
    children: [
      {
        path: '',
        component: DetailComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRoutingModule {}
