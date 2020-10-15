import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeBlocksPageComponent } from './time-blocks-page.component';

const routes: Routes = [
  { path: '', component: TimeBlocksPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeBlocksPageRoutingModule { }
