import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonthComponent } from './components/month/month.component';
import { MdcInitDirective } from './core/directives/mdc-init.directive';

@NgModule({
  declarations: [AppComponent, MonthComponent, MdcInitDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
