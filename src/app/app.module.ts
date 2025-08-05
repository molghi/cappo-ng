import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { ReasonComponent } from './components/reason/reason.component';
import { EarnComponent } from './components/earn/earn.component';
import { OptionsComponent } from './components/options/options.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { PopupComponent } from './components/popup/popup.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    StatsComponent,
    ReasonComponent,
    EarnComponent,
    OptionsComponent,
    SubscribeComponent,
    FooterComponent,
    DetailsComponent,
    PopupComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
