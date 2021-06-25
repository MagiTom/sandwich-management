import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AppMaterialModule { }
