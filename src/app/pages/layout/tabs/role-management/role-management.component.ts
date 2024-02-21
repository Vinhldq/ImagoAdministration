import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import {IconService, ListItem, TableHeaderItem, TableItem, TableModel} from 'carbon-components-angular';
import Filter20 from '@carbon/icons/es/filter/20';
import TrashCan20 from '@carbon/icons/es/trash-can/20';
import Close20 from '@carbon/icons/es/close/20';
import Edit20 from '@carbon/icons/es/edit/20';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-role-management',
  standalone: true,
  imports: [SharedModule, NgClass],
  templateUrl: './role-management.component.html',
  styleUrl: './role-management.component.scss',
})
export class RoleManagementComponent implements OnInit {
  @Input() model = new TableModel();
  disabled = false;
  @Input() size = "md";
  @Input() showSelectionColumn = false;
  @Input() enableSingleSelect = false;
  @Input() striped = false;
  @Input() sortable = true;
  @Input() isDataGrid = false;
  @Input() noData = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;
  @Input() ariaLabelledby = "table";
  @Input() ariaDescribedby = "desc";
  @Input() invalid = false;
  @Input() placeholder = "Content";
  @Input() invalidText = "";
  @Input() dropUp = false;
  @Input() warn = false;
  @Input() theme = "dark";
  @Input() warnText = "This is a warning";
  listItems = [
    <ListItem>{content: "User", selected: false},
    <ListItem>{content: "Admin", selected: false},
  ];

  @ViewChild("overflowMenuItemTemplate", {static: false})
  protected overflowMenuItemTemplate: TemplateRef<any> | undefined;
  @ViewChild("overflowMenuItemTemplateRemove", {static: false})
  protected overflowMenuItemTemplateRemove: TemplateRef<any> | undefined;
  @ViewChild("overflowMenuItemTemplateEdit", {static: false})
  protected overflowMenuItemTemplateEdit: TemplateRef<any> | undefined;

  dataSet = [];

  filterNodeNames(searchString: string) {
    this.model.data = this.dataSet
      .filter((row: TableItem[]) => row[1].data.toLowerCase().includes(searchString.toLowerCase()));
  }

  selectPage(page: number) {
    this.model.currentPage = page;
  }

  constructor(protected iconService: IconService) {
    this.iconService.registerAll([Filter20, TrashCan20, Close20, Edit20]);
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

  ngAfterViewInit() {
    let dataset = [
      [
        new TableItem({data: " 1"}),
        new TableItem({data: "User"}),
        new TableItem({data: "Role User"}),
        new TableItem({
          data: {id: "1"},
          template: this.overflowMenuItemTemplate,
        }), new TableItem({
        data: {id: "1"},
        template: this.overflowMenuItemTemplateRemove,
      }),
        new TableItem({
          data: {id: "1"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ], [
        new TableItem({data: " 2"}),
        new TableItem({data: "Admin"}),
        new TableItem({data: "Role Admin"}),
        new TableItem({
          data: {id: "2"},
          template: this.overflowMenuItemTemplate,
        }), new TableItem({
          data: {id: "2"},
          template: this.overflowMenuItemTemplateRemove,
        }),
        new TableItem({
          data: {id: "2"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ], [
        new TableItem({data: " 3"}),
        new TableItem({data: "Admin Post"}),
        new TableItem({data: "Role Admin Post"}),
        new TableItem({
          data: {id: "3"},
          template: this.overflowMenuItemTemplate,
        }), new TableItem({
          data: {id: "3"},
          template: this.overflowMenuItemTemplateRemove,
        }),
        new TableItem({
          data: {id: "3"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ],
      [
        new TableItem({data: "4"}),
        new TableItem({data: "Admin Setting"}),
        new TableItem({data: "Role Admin Setting"}),
        new TableItem({
          data: {id: "4"},
          template: this.overflowMenuItemTemplate,
        }), new TableItem({
        data: {id: "4"},
        template: this.overflowMenuItemTemplateRemove,
      }),
        new TableItem({
          data: {id: "4"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ],
      [
        new TableItem({data: "5"}),
        new TableItem({data: "Viewer"}),
        new TableItem({data: "Role Viewer"}),
        new TableItem({
          data: {id: "5"},
          template: this.overflowMenuItemTemplate,
        }), new TableItem({
        data: {id: "5"},
        template: this.overflowMenuItemTemplateRemove,
      }),
        new TableItem({
          data: {id: "5"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ],
      [
        new TableItem({data: "6"}),
        new TableItem({data: "Super Admin"}),
        new TableItem({data: "Super Admin"}),
        new TableItem({
          data: {id: "6"},
          template: this.overflowMenuItemTemplate,
        }), new TableItem({
        data: {id: "6"},
        template: this.overflowMenuItemTemplateRemove,
      }),
        new TableItem({
          data: {id: "6"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ],
      [
        new TableItem({data: "7"}),
        new TableItem({data: "Admin Dashboard"}),
        new TableItem({data: "Role Admin Dashboard"}),
        new TableItem({
          data: {id: "7"},
          template: this.overflowMenuItemTemplate,
        }), new TableItem({
        data: {id: "7"},
        template: this.overflowMenuItemTemplateRemove,
      }),
        new TableItem({
          data: {id: "7"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ],
      [
        new TableItem({data: "8"}),
        new TableItem({data: "Admin User"}),
        new TableItem({data: "Role Admin User"}),
        new TableItem({
          data: {id: "8"},
          template: this.overflowMenuItemTemplate,
        }), new TableItem({
        data: {id: "8"},
        template: this.overflowMenuItemTemplateRemove,
      }),
        new TableItem({
          data: {id: "8"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ],
      [
        new TableItem({data: "9"}),
        new TableItem({data: "Admin Role"}),
        new TableItem({data: "Role Admin Role"}),
        new TableItem({
          data: {id: "9"},
          template: this.overflowMenuItemTemplate,
        }), new TableItem({
        data: {id: "9"},
        template: this.overflowMenuItemTemplateRemove,
      }),
        new TableItem({
          data: {id: "9"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ],
      [
        new TableItem({data: "10"}),
        new TableItem({data: "Admin Report"}),
        new TableItem({data: "Role Admin Report"}),
        new TableItem({
          data: {id: "10"},
          template: this.overflowMenuItemTemplate,
        }), new TableItem({
        data: {id: "10"},
        template: this.overflowMenuItemTemplateRemove,
      }),
        new TableItem({
          data: {id: "10"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ],
    ];
    this.dataSet = dataset;
    this.model.data = dataset;

    this.model.header = [
      new TableHeaderItem({data: "Id"}),
      new TableHeaderItem({data: "Name"}),
      new TableHeaderItem({data: "Describe"}),
      new TableHeaderItem({data: "Add"}),
      new TableHeaderItem({data: "Delete"}),
      new TableHeaderItem({data: "Edit"}),
    ];
  }

  deleteData() {
    this.dataSet.splice(0, 1);
  }

  isActiveOpenCUD: boolean = false;
  currentOpenRole = 1;

  openCUD(role: number) {
    this.currentOpenRole = role;
    this.isActiveOpenCUD = true;
  }

  closeCUD() {
    this.isActiveOpenCUD = false;
  }
}
