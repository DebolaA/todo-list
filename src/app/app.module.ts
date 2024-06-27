import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonDirective } from './directives/button.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
