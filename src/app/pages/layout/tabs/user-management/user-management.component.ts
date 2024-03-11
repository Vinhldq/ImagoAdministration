import {AfterViewInit, Component, Input, OnChanges, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import {IconService, PaginationModel, TableHeaderItem, TableItem, TableModel} from "carbon-components-angular";
import Filter20 from '@carbon/icons/es/filter/20';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent implements OnInit, OnChanges, AfterViewInit {
  ngOnInit(): void {
    Promise.resolve().then(() => {
      this.dataset = [
        [
          new TableItem({
            data: {id: "1"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "1"}),
          new TableItem({data: "Hoang Gia Khuong"}),
          new TableItem({data: "Khuong Gia Gia"}),
          new TableItem({data: "1"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "1"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
        [
          new TableItem({
            data: {id: "2"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "2"}),
          new TableItem({data: "Tran Van Hao"}),
          new TableItem({data: "Hao Dac Vu"}),
          new TableItem({data: "2"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "2"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
        [
          new TableItem({
            data: {id: "3"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "3"}),
          new TableItem({data: "Bui Tien Thinh"}),
          new TableItem({data: "Thinh Suy"}),
          new TableItem({data: "3"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "3"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
        [
          new TableItem({
            data: {id: "4"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "4"}),
          new TableItem({data: "Vo Minh Tri"}),
          new TableItem({data: "Tri Chuot"}),
          new TableItem({data: "4"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "4"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
        [
          new TableItem({
            data: {id: "5"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "5"}),
          new TableItem({data: "Huynh Duc Dat"}),
          new TableItem({data: "Duc Do"}),
          new TableItem({data: "1"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "5"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
        [
          new TableItem({
            data: {id: "6"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "6"}),
          new TableItem({data: "Mai Le Thanh Thine"}),
          new TableItem({data: "Thien Thieu Thieu"}),
          new TableItem({data: "1"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "6"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
        [
          new TableItem({
            data: {id: "1"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "7"}),
          new TableItem({data: "Hoang Gia Khuong"}),
          new TableItem({data: "Khuong Gia Gia"}),
          new TableItem({data: "1"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "1"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
        [
          new TableItem({
            data: {id: "2"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "8"}),
          new TableItem({data: "Tran Van Hao"}),
          new TableItem({data: "Hao Dac Vu"}),
          new TableItem({data: "1"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "2"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
        [
          new TableItem({
            data: {id: "3"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "9"}),
          new TableItem({data: "Bui Tien Thinh"}),
          new TableItem({data: "Thinh Suy"}),
          new TableItem({data: "1"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "3"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
        [
          new TableItem({
            data: {id: "4"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "10"}),
          new TableItem({data: "Vo Minh Tri"}),
          new TableItem({data: "Tri Chuot"}),
          new TableItem({data: "1"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "4"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
        [
          new TableItem({
            data: {id: "5"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "11"}),
          new TableItem({data: "Huynh Duc Dat"}),
          new TableItem({data: "Duc Do"}),
          new TableItem({data: "1"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "5"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
        [
          new TableItem({
            data: {id: "6"},
            template: this.overflowMenuItemTemplateImg,
          }),
          new TableItem({data: "12"}),
          new TableItem({data: "Mai Le Thanh Thine"}),
          new TableItem({data: "Thien Thieu Thieu"}),
          new TableItem({data: "1"}),
          new TableItem({data: "User"}),
          new TableItem({data: "476k"}),
          new TableItem({data: "5"}),
          new TableItem({
            data: {id: "6"},
            template: this.overflowMenuItemTemplateChoose,
          }),
        ],
      ];
      this.model.data = this.dataset;

      this.model.header = [
        new TableHeaderItem({data: "Avatar"}),
        new TableHeaderItem({data: "ID"}),
        new TableHeaderItem({data: "UserName"}),
        new TableHeaderItem({data: "Bio"}),
        new TableHeaderItem({data: "NumberPost"}),
        new TableHeaderItem({data: "Role"}),
        new TableHeaderItem({data: "Followers"}),
        new TableHeaderItem({data: "Following"}),
        new TableHeaderItem({data: "Choose"}),
      ];

      this.dataLength = this.dataset.length;
      this.dataResidual = this.dataLength % this.dataLengthPerPage;

      this.modelPagination.currentPage = 1;
      if (this.dataResidual === 0) {
        this.modelPagination.totalDataLength = Math.floor(
          this.dataLength / this.dataLengthPerPage,
        );
      }
      if (this.dataResidual !== 0) {
        console.log('Residual:', this.dataResidual);
        this.modelPagination.totalDataLength =
          Math.floor(this.dataLength / this.dataLengthPerPage) + 1;
        for (let i = 0; i <= this.dataResidual; i++) {
          this.dataset = [
            ...this.dataset,
            [
              new TableItem({
                data: {id: ''},
                template: this.overflowMenuItemTemplateImg,
              }),
              new TableItem({data: ''}),
              new TableItem({data: ''}),
              new TableItem({data: ''}),
              new TableItem({data: ''}),
              new TableItem({data: ''}),
              new TableItem({data: ''}),
              new TableItem({
                data: {id: ''},
                template: this.overflowMenuItemTemplateBlock,
              }),
              new TableItem({
                data: {id: ''},
                template: this.overflowMenuItemTemplateUnBlock,
              }),
              new TableItem({
                data: {id: ''},
                template: this.overflowMenuItemTemplateChoose,
              }),
            ],
          ];
          console.log(this.dataLength);
        }
      }

      for (let i = 0; i < this.dataLengthPerPage; i++) {
        this.dataChoose = [...this.dataChoose, this.dataset[i]];
      }

      this.model.data = this.dataChoose;
    });
  }

  ngOnChanges(): void {
  }

  ngAfterViewInit() {
  }

  @Input() model = new TableModel();
  @Input() modelPagination = new PaginationModel();
  @Input() disabledPagination = false;
  @Input() pageInputDisabled = false;
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

  @ViewChild("overflowMenuItemTemplateImg", {static: false})
  protected overflowMenuItemTemplateImg: TemplateRef<any> | undefined;
  @ViewChild("overflowMenuItemTemplateBlock", {static: false})
  protected overflowMenuItemTemplateBlock: TemplateRef<any> | undefined;
  @ViewChild("overflowMenuItemTemplateUnBlock", {static: false})
  protected overflowMenuItemTemplateUnBlock: TemplateRef<any> | undefined;
  @ViewChild("overflowMenuItemTemplateChoose", {static: false})
  protected overflowMenuItemTemplateChoose: TemplateRef<any> | undefined;

  constructor(protected iconService: IconService) {
    this.iconService.registerAll([Filter20]);
  }

  dataImg = [
    {
      id: 1,
      img: "https://thanhnien.mediacdn.vn/Uploaded/haoph/2022_07_20/dat-g-4537.jpg",
    },
    {
      id: 2,
      img: "https://static2.gensler.com/uploads/image/86763/hao-ko-2023-1024x576_1689377772.jpg",
    },
    {
      id: 3,
      img: "https://static2.gensler.com/uploads/image/86763/hao-ko-2023-1024x576_1689377772.jpg",
    },
    {
      id: 4,
      img: "https://cand.com.vn/Files/Image/bichthuy/2018/09/21/92cd1cbc-a5e1-4901-a6b7-61935fcd7a0f.jpg",
    },
    {
      id: 5,
      img: "https://www.thivien.net/attachment/sIEx35ohgPMvdcOmOBmYDQ.1118757785.jpg",
    },
    {
      id: 6,
      img: "https://ongvove.files.wordpress.com/2009/07/phamthienthu.jpg",
    }
  ];
  dataset = [];
  dataChoose: TableItem[][] = [];
  dataLength = this.dataset.length;
  dataLengthPerPage = 6;
  dataResidual = this.dataLength % this.dataLengthPerPage;

  filterNodeNames(searchString: string) {
    this.model.data = this.dataset
      .filter((row: TableItem[]) => row[1].data.toLowerCase().includes(searchString.toLowerCase()));
  }

  selectPage(page: number) {
    let beginGet = (page - 1) * this.dataLengthPerPage;
    let endGet = page * this.dataLengthPerPage - 1;
    this.modelPagination.currentPage = page;
    this.dataChoose = [];
    if (endGet > this.dataLength) {
      endGet = this.dataLength - 1;
    }
    for (let i = beginGet; i <= endGet; i++) {
      this.dataChoose = [...this.dataChoose, this.dataset[i]];
    }
    this.model.data = this.dataChoose;
  }

  overflowOnClick = (event: any) => {
    event.stopPropagation();
  }
  displayedCountries = ["US", "France", "Argentina", "Japan"];

  filterCountries(countryName: string, checked: boolean) {
    if (checked) {
      this.displayedCountries.push(countryName);
    } else {
      this.displayedCountries.splice(this.displayedCountries.indexOf(countryName), 1);
    }
  }
}

