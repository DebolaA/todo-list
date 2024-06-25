import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BckgndColorDirective } from './bckgnd-color.directive';
import { HoverDirective } from './hover.directive';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [BckgndColorDirective, HoverDirective, TooltipDirective],
  imports: [CommonModule],
  exports: [BckgndColorDirective, TooltipDirective],
})
export class DirectiveModule {}
