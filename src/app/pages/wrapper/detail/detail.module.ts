import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailWrapperComponent } from './detail-wrapper.component';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail.routing.module';

@NgModule({
  declarations: [DetailWrapperComponent, DetailComponent],
  imports: [DetailRoutingModule, CommonModule],
})
export class DetailModule {}
