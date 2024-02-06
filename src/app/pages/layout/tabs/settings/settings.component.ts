import {Component, OnInit} from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {AccordionModule, ButtonModule, ListItem, ModalModule, PaginationModel,} from "carbon-components-angular";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [SharedModule, ButtonModule, AccordionModule, ModalModule,],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit{
  items = [
    <ListItem>{content: "Vienamese", selected: false},
    <ListItem>{content: "English", selected: false},
    <ListItem>{content: "France", selected: false},

  ];
  themes = [
    <ListItem>{content: "Dark", selected: false},
    <ListItem>{content: "Light", selected: false},
  ];
  selected: ListItem;
  onSelect(ev) {
    this.selected = ev.item;
  }
  model = new PaginationModel();
  disabled = false;
  selectPage(page) {
    this.model.currentPage = page;
  }
  ngOnInit() {
    this.model.currentPage = 1;
    this.model.totalDataLength = 20;
  }
  protected open = false;



}
