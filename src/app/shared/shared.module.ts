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
  ToggleModule,
  InputModule,
  TabsModule,
  ThemeModule,
  DropdownModule,
  PaginationModule,
} from 'carbon-components-angular';

export const CarbonModules = [
  UIShellModule,
  IconModule,
  GridModule,
  BreadcrumbModule,
  InputModule,
  TabsModule,
  ThemeModule,
  ToggleModule,
  ButtonModule,
  DropdownModule,
  PaginationModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...CarbonModules,
  ],
  exports: [FormsModule, ReactiveFormsModule, RouterModule, ...CarbonModules],
})
export class SharedModule {}
