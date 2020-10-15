import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsPageRoutingModule } from './lists-page-routing.module';

import { ListsPageComponent } from "./lists-page.component";


@NgModule({
  declarations: [ ListsPageComponent ],
  imports: [
    CommonModule,
    ListsPageRoutingModule
  ]
})
export class ListsPageModule { }
