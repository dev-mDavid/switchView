import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeBlocksPageRoutingModule } from './time-blocks-page-routing.module';
import { TimeBlocksPageComponent } from './time-blocks-page.component';


@NgModule({
  declarations: [ TimeBlocksPageComponent ],
  imports: [
    CommonModule,
    TimeBlocksPageRoutingModule
  ]
})
export class TimeBlocksPageModule { }
