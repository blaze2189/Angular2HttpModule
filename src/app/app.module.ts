import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BankComponent } from './components/bankcomponent/bankcomponent.component';
import {RestBankService} from './services/restbank.service';

@NgModule({
  declarations: [
    AppComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RestBankService],
  //providers: [RestBankService,ActivatedRoute],
  bootstrap: [AppComponent]
})
export class AppModule { }
