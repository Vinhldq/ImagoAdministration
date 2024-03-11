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
  TabsModule,
  ThemeModule,
  TableModule,
  DialogModule,
  CheckboxModule,
  PaginationModule,
  ModalModule,
  InputModule,
  DropdownModule,
  NotificationModule,
  NotificationService,
} from 'carbon-components-angular';
import { NgChartsModule } from 'ng2-charts';
import { CreatorNamePipe } from '../pages/layout/tabs/post-management/components/post/creator-name.pipe';

export const CarbonModules = [
  UIShellModule,
  IconModule,
  GridModule,
  BreadcrumbModule,
  InputModule,
  TabsModule,
  TableModule,
  ThemeModule,
  ToggleModule,
  ButtonModule,
  DropdownModule,
  PaginationModule,
  DialogModule,
  CheckboxModule,
  ButtonModule,
  ModalModule,
  InputModule,
  DropdownModule,
  NgChartsModule,
  NotificationModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CreatorNamePipe,
    ...CarbonModules,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...CarbonModules,
    CreatorNamePipe,
  ],
})
export class SharedModule {}
