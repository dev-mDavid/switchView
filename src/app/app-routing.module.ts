import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwitchViewPageComponent } from './switch-view-page/switch-view-page.component';


const routes: Routes = [
  { path: '', component: SwitchViewPageComponent },
  { path: 'lists', loadChildren: () => import('./lists-page/lists-page.module').then(m => m.ListsPageModule) }, 
  { path: 'boards', loadChildren: () => import('./boards-page/boards-page.module').then(m => m.BoardsPageModule) },
  { path: 'time-blocks', loadChildren: () => import('./time-blocks-page/time-blocks-page.module').then(m => m.TimeBlocksPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
