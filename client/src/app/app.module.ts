import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';
import { ChartModule } from 'angular-highcharts';
import { RefundViewComponent } from './refund-view/refund-view.component';
import { LostTRComponent } from './lost-t-r/lost-t-r.component';
import { OverallHealthComponent } from './overall-health/overall-health.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    TransactionViewComponent,
    RefundViewComponent,
    LostTRComponent,
    OverallHealthComponent,
  ],
  imports: [BrowserModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
