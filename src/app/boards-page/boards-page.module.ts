import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsPageRoutingModule } from './boards-page-routing.module';
import { BoardsPageComponent } from './boards-page.component';


@NgModule({
  declarations: [ BoardsPageComponent ],
  imports: [
    CommonModule,
    BoardsPageRoutingModule
  ]
})
export class BoardsPageModule { }
