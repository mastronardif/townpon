import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TowndetailComponent }  from '../towndetail/towndetail.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/detail', pathMatch: 'full' },
  { path: 'detail', component: TowndetailComponent },
  { path: 'detail/:id', component: TowndetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes) ],
  exports: [RouterModule]
})
export class TownroutesRoutingModule { }
