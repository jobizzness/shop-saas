import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShopDashboardComponent } from './shop-dashboard/shop-dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [ShopDashboardComponent]
})
export class DashboardModule { }
