import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  UIShellModule,
  IconModule,
  GridModule,
  BreadcrumbModule,
  ButtonModule,
  TabsModule,
  ThemeModule,
  TableModule,
  DialogModule,
  CheckboxModule,
  PaginationModule,
  ModalModule,
  InputModule,
  DropdownModule,
} from 'carbon-components-angular';

export const CarbonModules = [
  UIShellModule,
  IconModule,
  GridModule,
  BreadcrumbModule,
  ButtonModule,
  TabsModule,
  ThemeModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...CarbonModules,
    TableModule,
    DialogModule,
    CheckboxModule,
    ButtonModule,
    PaginationModule,
    ModalModule,
    InputModule,
    DropdownModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...CarbonModules,
    TableModule,
    DialogModule,
    CheckboxModule,
    ButtonModule,
    PaginationModule,
    ModalModule,
    InputModule,
    DropdownModule,
  ],
})
export class SharedModule {}
