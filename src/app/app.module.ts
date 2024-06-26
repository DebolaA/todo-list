import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BckgndColorDirective } from './directives/bckgnd-color.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { ElDisabledDirective } from './directives/el-disabled.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BckgndColorDirective,
    TooltipDirective,
    ElDisabledDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
