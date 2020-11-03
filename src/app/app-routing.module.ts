import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
