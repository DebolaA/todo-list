import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { BckgndColorDirective } from './directives/bckgnd-color.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipDirective,
    BckgndColorDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
