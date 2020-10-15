import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { NavShellComponent } from './nav-shell/nav-shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { reducers } from "./reducers";


@NgModule({
  declarations: [
    AppComponent,
    NavShellComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
