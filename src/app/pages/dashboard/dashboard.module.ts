import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CustomInputComponent } from 'src/app/components/custom-input/custom-input.component';

@NgModule({
  declarations: [DashboardComponent, CustomInputComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
