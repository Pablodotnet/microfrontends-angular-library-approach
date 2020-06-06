import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PabloLiboneModule } from 'pablo-libone';
import { PabloRoutingModule } from './pablo-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PabloRoutingModule,
    PabloLiboneModule,
  ]
})
export class PabloModule { }
