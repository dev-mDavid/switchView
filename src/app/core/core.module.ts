import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from "@ngrx/store";
import { taskReducer }  from "./task.reducer";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('task', taskReducer)
  ]
})
export class CoreModule { }
