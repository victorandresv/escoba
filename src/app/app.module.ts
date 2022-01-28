import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './pages/table/table.component';
import { FrontcardComponent } from './partials/frontcard/frontcard.component';

import { Card1Component } from './partials/cards/card1/card1.component';
import { Card2Component } from './partials/cards/card2/card2.component';
import { Card3Component } from './partials/cards/card3/card3.component';
import { Card4Component } from './partials/cards/card4/card4.component';
import { Card5Component } from './partials/cards/card5/card5.component';
import { Card6Component } from './partials/cards/card6/card6.component';
import { Card7Component } from './partials/cards/card7/card7.component';
import { Card10Component } from './partials/cards/card10/card10.component';
import { Card11Component } from './partials/cards/card11/card11.component';
import { Card12Component } from './partials/cards/card12/card12.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FrontcardComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component,
    Card7Component,
    Card10Component,
    Card11Component,
    Card12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
