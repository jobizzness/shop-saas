import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopDashboardComponent} from './shop-dashboard/shop-dashboard.component';

const routes: Routes = [
  { path: '', component: ShopDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
