import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)
  ]
})
export class CoreModule { }
