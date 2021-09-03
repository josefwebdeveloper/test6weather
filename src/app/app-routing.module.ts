import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeModule} from "./home/home.module";
const routes: Routes = [
  {
    path: 'weather',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
