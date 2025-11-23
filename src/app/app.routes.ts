import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './features/home/home';
import { NetFramework } from './features/net-framework/net-framework';

export const routes: Routes = [
    { path: 'features/home', component: Home},
    { path: 'features/net-framework', component: NetFramework},
    { path: '', redirectTo: '/features/home', pathMatch: 'full' } // default route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
