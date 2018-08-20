import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './public-pages/public-pages.module#PublicPagesModule'},
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
