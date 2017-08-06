import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  PlaceListComponent,
  PlaceService,
  PlaceComponent,
  PlaceListResolver
} from './place/index';

import {
  CompanyListComponent,
  CompanyService,
  CompanyListResolver
} from './company';

import {CompanyRegistryAppComponent} from './app.component';
import {SideNavComponent} from './nav/side-nav.component';
import {
  TOASTR_TOKEN,
  JQ_TOKEN,
  SimpleModalComponent
} from './common/index';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {
  CreateCompanyComponent
} from './company/index';
import {ModalTriggerDirective} from './common/modalTrigger.directive';
import {DataTableComponent} from './data-table/data-table.component';
import {MongoLabService} from './common/mongo-lab.service';
import {PlaceResolver} from './place/place-resolver.service';
import {HomeComponent} from './core/home.component';

// tell TypeScript compiler that we now about toastr
export declare let toastr: any;
export declare let jQuery: any;

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    CompanyRegistryAppComponent,
    HomeComponent,
    PlaceListComponent,
    SideNavComponent,
    PlaceComponent,
    Error404Component,
    CreateCompanyComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DataTableComponent,
    CompanyListComponent,
  ],
  providers: [
    MongoLabService,
    PlaceService,
    PlaceListResolver,
    PlaceResolver,
    CompanyService,
    CompanyListResolver,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
  ],
  bootstrap: [CompanyRegistryAppComponent]
})
export class AppModule {
}

