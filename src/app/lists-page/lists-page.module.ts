import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsPageRoutingModule } from './lists-page-routing.module';

import { ListsPageComponent } from "./lists-page.component";
import { TreeComponent } from './lists-page-components/tree/tree.component';


@NgModule({
  declarations: [ ListsPageComponent, TreeComponent ],
  imports: [
    CommonModule,
    ListsPageRoutingModule
  ]
})
export class ListsPageModule { }
