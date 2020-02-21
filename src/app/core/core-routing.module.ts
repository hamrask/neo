import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';


const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( x => x.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
