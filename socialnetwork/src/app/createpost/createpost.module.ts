import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatepostRoutingModule } from './createpost-routing.module';
import { CreatepostComponent } from './createpost.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreatepostComponent
  ],
  imports: [
    CommonModule,
    CreatepostRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class CreatepostModule { }
