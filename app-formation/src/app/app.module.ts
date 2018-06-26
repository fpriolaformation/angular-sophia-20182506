import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ItemsModule } from './items/items.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    HomeModule,
    PageNotFoundModule,
    NgbModule.forRoot(),
    ItemsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
