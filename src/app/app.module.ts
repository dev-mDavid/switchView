import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwitchViewPageComponent } from './switch-view-page/switch-view-page.component';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { BoardsPageComponent } from './boards-page/boards-page.component';
import { TimeBlocksPageComponent } from './time-blocks-page/time-blocks-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavShellComponent,
    SwitchViewPageComponent,
    ListsPageComponent,
    BoardsPageComponent,
    TimeBlocksPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
