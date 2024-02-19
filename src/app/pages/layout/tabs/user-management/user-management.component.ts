import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {IconService, TableHeaderItem, TableItem, TableModel} from "carbon-components-angular";
import Filter20 from '@carbon/icons/es/filter/20';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent {
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

  selectPage(page: number) {
    this.model.currentPage = page;
  }

  @ViewChild("overflowMenuItemTemplateImg", {static: false})
  protected overflowMenuItemTemplateImg: TemplateRef<any> | undefined;

  @ViewChild("overflowMenuItemTemplate", {static: false})
  protected overflowMenuItemTemplate: TemplateRef<any> | undefined;

  @ViewChild("overflowMenuItemTemplateEdit", {static: false})
  protected overflowMenuItemTemplateEdit: TemplateRef<any> | undefined;
  @ViewChild("overflowMenuItemTemplateRemove", {static: false})
  protected overflowMenuItemTemplateRemove: TemplateRef<any> | undefined;


  constructor(protected iconService: IconService) {
    this.iconService.registerAll([Filter20]);
  }

  ngOnInit(): void {
    // this.iconService.registerAll([UserAvatar20]);
  }

  ngOnChanges(): void {

  }


  ngAfterViewInit() {
    this.model.data = [
      [
        new TableItem({
          data: {id: "1"},
          template: this.overflowMenuItemTemplateImg,
        }),
        new TableItem({data: "Hoang Gia Khuong"}),
        new TableItem({data: "Khuong Gia Gia"}),
        new TableItem({data: "1"}),
        new TableItem({data: "476k"}),
        new TableItem({data: "1"}),

        new TableItem({
          data: {id: "1"},
          template: this.overflowMenuItemTemplate,
        }),
        new TableItem({
          data: {id: "1"},
          template: this.overflowMenuItemTemplateEdit,
        }),

      ],
      [
        new TableItem({
          data: {id: "2"},
          template: this.overflowMenuItemTemplateImg,
        }),
        new TableItem({data: "Dau Minh Tan "}),
        new TableItem({data: "Tan Minh Dau"}),
        new TableItem({data: "2"}),
        new TableItem({data: "667k"}),
        new TableItem({data: "2"}),

        new TableItem({
          data: {id: "2"},
          template: this.overflowMenuItemTemplate,
        }),
        new TableItem({
          data: {id: "2"},
          template: this.overflowMenuItemTemplateEdit,
        }),

      ],
      [
        new TableItem({
          data: {id: "3"},
          template: this.overflowMenuItemTemplateImg,
        }),
        new TableItem({data: "Luu Dinh Quang Vinh"}),
        new TableItem({data: "Vinh Quang Dinh Luu"}),
        new TableItem({data: "3"}),
        new TableItem({data: "118k"}),
        new TableItem({data: "3"}),

        new TableItem({
          data: {id: "3"},
          template: this.overflowMenuItemTemplate,
        }),
        new TableItem({
          data: {id: "3"},
          template: this.overflowMenuItemTemplateEdit,
        }),

      ],
      [
        new TableItem({
          data: {id: "4"},
          template: this.overflowMenuItemTemplateImg,
        }),
        new TableItem({data: "Bui Thanh Huy"}),
        new TableItem({data: "Huy Thanh Bui"}),
        new TableItem({data: "4"}),
        new TableItem({data: "208k"}),
        new TableItem({data: "4"}),

        new TableItem({
          data: {id: "4"},
          template: this.overflowMenuItemTemplate,
        }),
        new TableItem({
          data: {id: "4"},
          template: this.overflowMenuItemTemplateEdit,
        }),

      ],
      [
        new TableItem({
          data: {id: "5"},
          template: this.overflowMenuItemTemplateImg,
        }),
        new TableItem({data: "Nguyen Tuan Anh"}),
        new TableItem({data: "Tuan Anh Nguyen"}),
        new TableItem({data: "5"}),
        new TableItem({data: "200k"}),
        new TableItem({data: "5"}),

        new TableItem({
          data: {id: "5"},
          template: this.overflowMenuItemTemplate,
        }),
        new TableItem({
          data: {id: "5"},
          template: this.overflowMenuItemTemplateEdit,
        }),


      ],
      [
        new TableItem({
          data: {id: "6"},
          template: this.overflowMenuItemTemplateImg,
        }),
        new TableItem({data: "Bui Quang Truong"}),
        new TableItem({data: "Truong Bui Quang "}),
        new TableItem({data: "6"}),
        new TableItem({data: "300k"}),
        new TableItem({data: "6"}),
        new TableItem({
          data: {id: "6"},
          template: this.overflowMenuItemTemplate,
        }),
        new TableItem({
          data: {id: "6"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ],
      [
        new TableItem({
          data: {id: "6"},
          template: this.overflowMenuItemTemplateImg,
        }),
        new TableItem({data: "Bui Quang Truong"}),
        new TableItem({data: "Truong Bui Quang "}),
        new TableItem({data: "6"}),
        new TableItem({data: "300k"}),
        new TableItem({data: "6"}),
        new TableItem({
          data: {id: "6"},
          template: this.overflowMenuItemTemplate,
        }),
        new TableItem({
          data: {id: "6"},
          template: this.overflowMenuItemTemplateEdit,
        }),
      ],
    ];
    this.model.header = [
      new TableHeaderItem({data: "Image"}),
      new TableHeaderItem({data: "UserName"}),
      new TableHeaderItem({data: "NickName"}),
      new TableHeaderItem({data: "NumberPost"}),
      new TableHeaderItem({data: "Followers"}),
      new TableHeaderItem({data: "Following"}),
      new TableHeaderItem({data: "Block"}),
      new TableHeaderItem({data: "Unblock"}),
    ];
  }

}
