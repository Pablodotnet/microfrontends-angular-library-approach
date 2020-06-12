import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PabloLiboneComponent } from 'pablo-libone';

const routes: Routes = [
  { path: '', component: PabloLiboneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PabloRoutingModule { }
