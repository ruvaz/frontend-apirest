import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {PagesRoutesModule} from './pages.routes';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
  ],

  imports: [
    SharedModule,
    PagesRoutesModule,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,

  ],
})

export class PagesModule {
}
