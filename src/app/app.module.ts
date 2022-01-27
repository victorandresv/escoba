import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './pages/table/table.component';
import { FrontcardComponent } from './partials/frontcard/frontcard.component';
import { Copa1Component } from './partials/cards/copa1/copa1.component';
import { Copa2Component } from './partials/cards/copa2/copa2.component';
import { Copa3Component } from './partials/cards/copa3/copa3.component';
import { Copa4Component } from './partials/cards/copa4/copa4.component';
import { Copa5Component } from './partials/cards/copa5/copa5.component';
import { Copa6Component } from './partials/cards/copa6/copa6.component';
import { Copa7Component } from './partials/cards/copa7/copa7.component';
import { Copa10Component } from './partials/cards/copa10/copa10.component';
import { Copa11Component } from './partials/cards/copa11/copa11.component';
import { Copa12Component } from './partials/cards/copa12/copa12.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FrontcardComponent,
    Copa1Component,
    Copa2Component,
    Copa3Component,
    Copa4Component,
    Copa5Component,
    Copa6Component,
    Copa7Component,
    Copa10Component,
    Copa11Component,
    Copa12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
