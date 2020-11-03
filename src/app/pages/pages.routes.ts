import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {NewsComponent} from '../components/news/news.component';
import {UsersComponent} from '../components/users/users.component';
import {HelloComponent} from '../hello/hello/hello.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'hello', component: HelloComponent},
      {path: 'news', component: NewsComponent},
      {path: 'users', component: UsersComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutesModule {
}
