import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatepostRoutingModule } from './createpost-routing.module';
import { CreatepostComponent } from './createpost.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';


@NgModule({
  declarations: [
    CreatepostComponent
  ],
  imports: [
    CommonModule,
    CreatepostRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ]
})
export class CreatepostModule { }
