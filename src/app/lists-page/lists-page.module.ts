import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsPageRoutingModule } from './lists-page-routing.module';

import { ListsPageComponent } from "./lists-page.component";
import { TreeComponent } from './lists-page-components/tree/tree.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ ListsPageComponent, TreeComponent ],
  imports: [
    CommonModule,
    ListsPageRoutingModule,
    MatInputModule,    
  ]
})
export class ListsPageModule { }
