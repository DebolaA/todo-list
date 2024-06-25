import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BckgndColorDirective } from './bckgnd-color.directive';
import { DisabledDirective } from './disabled.directive';

@NgModule({
  declarations: [BckgndColorDirective, DisabledDirective],
  imports: [CommonModule],
  exports: [BckgndColorDirective],
})
export class DirectiveModule {}
