import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

const components = [
];

const modules = [
  MatButtonModule,
  CommonModule,
  RouterModule,
];
@NgModule({
  declarations: [...components],
  imports: [ ...modules],
  exports: [...components, ...modules]
})
export class SharedModule { }
