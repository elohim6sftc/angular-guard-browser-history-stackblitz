import { NgModule } from '@angular/core';
import { WrapperComponent } from './wrapper.component';
import { WrapperMainComponent } from './wrapper-main.component';
import { ListComponent } from './list/list.component';
import { WrapperRoutingModule } from './wrapper.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WrapperMainComponent, WrapperComponent, ListComponent],
  imports: [WrapperRoutingModule, CommonModule],
})
export class WrapperModule {}
