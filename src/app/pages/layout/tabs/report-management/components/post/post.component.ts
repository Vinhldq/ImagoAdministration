import { Component, Input, OnInit } from '@angular/core';
import {
  IconService,
  PaginationModel,
  TableHeaderItem,
  TableItem,
  TableModel,
} from 'carbon-components-angular';

import Add16 from '@carbon/icons/es/add/16';
import Filter16 from '@carbon/icons/es/filter/16';
import { SharedModule } from '../../../../../../shared/shared.module';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  @Input() modelPagination = new PaginationModel();
  @Input() disabledPagination = false;
  @Input() pageInputDisabled = false;

  @Input() size = 'md';
  @Input() showSelectionColumn = false;
  @Input() enableSingleSelect = true;
  @Input() striped = false;
  @Input() isDataGrid = false;
  @Input() noData = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;

  model = new TableModel();
  displayedTitle = [
    'Fake Account',
    'Pretending',
    'Suspicious Activity',
    'Inappropriate Content',
    'Harassment',
    'Spamming',
    'Hate Speech',
    'Inappropriate Behavior',
    '',
  ];
  searchValue = '';

  disabled = false;

  dataset = [
    [
      new TableItem({ data: '1' }),
      new TableItem({ data: 'Minh Trí' }),
      new TableItem({ data: '16/01/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '2' }),
      new TableItem({ data: 'Minh Tan' }),
      new TableItem({ data: '18/01/2024' }),
      new TableItem({ data: 'Pretending' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '3' }),
      new TableItem({ data: 'Minh Anh' }),
      new TableItem({ data: '20/01/2024' }),
      new TableItem({ data: 'Suspicious Activity' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '4' }),
      new TableItem({ data: 'Huong Giang' }),
      new TableItem({ data: '22/01/2024' }),
      new TableItem({ data: 'Inappropriate Content' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '5' }),
      new TableItem({ data: 'Bao Quoc' }),
      new TableItem({ data: '25/01/2024' }),
      new TableItem({ data: 'Harassment' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '6' }),
      new TableItem({ data: 'Linh Nga' }),
      new TableItem({ data: '28/01/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '7' }),
      new TableItem({ data: 'Khanh Huyen' }),
      new TableItem({ data: '30/01/2024' }),
      new TableItem({ data: 'Pretending' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '8' }),
      new TableItem({ data: 'Tuan Anh' }),
      new TableItem({ data: '02/02/2024' }),
      new TableItem({ data: 'Spamming' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '9' }),
      new TableItem({ data: 'Phuong Thao' }),
      new TableItem({ data: '05/02/2024' }),
      new TableItem({ data: 'Inappropriate Behavior' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '10' }),
      new TableItem({ data: 'Duc Anh' }),
      new TableItem({ data: '08/02/2024' }),
      new TableItem({ data: 'Hate Speech' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '11' }),
      new TableItem({ data: 'Hai Yen' }),
      new TableItem({ data: '12/02/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '12' }),
      new TableItem({ data: 'Quang Vinh' }),
      new TableItem({ data: '15/02/2024' }),
      new TableItem({ data: 'Pretending' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '13' }),
      new TableItem({ data: 'Thi Kim' }),
      new TableItem({ data: '18/02/2024' }),
      new TableItem({ data: 'Pretending' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '14' }),
      new TableItem({ data: 'Dinh Hoang' }),
      new TableItem({ data: '21/02/2024' }),
      new TableItem({ data: 'Inappropriate Behavior' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '15' }),
      new TableItem({ data: 'Ngoc Linh' }),
      new TableItem({ data: '24/02/2024' }),
      new TableItem({ data: 'Suspicious Activity' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '16' }),
      new TableItem({ data: 'Hoang Nam' }),
      new TableItem({ data: '27/02/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '17' }),
      new TableItem({ data: 'My Linh' }),
      new TableItem({ data: '01/03/2024' }),
      new TableItem({ data: 'Suspicious Activity' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '18' }),
      new TableItem({ data: 'Quoc Anh' }),
      new TableItem({ data: '04/03/2024' }),
      new TableItem({ data: 'Inappropriate Behavior' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '19' }),
      new TableItem({ data: 'Thuy Trang' }),
      new TableItem({ data: '07/03/2024' }),
      new TableItem({ data: 'Hate Speech' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '20' }),
      new TableItem({ data: 'Minh Tuan' }),
      new TableItem({ data: '10/03/2024' }),
      new TableItem({ data: 'Hate Speech' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '21' }),
      new TableItem({ data: 'Hai Phong' }),
      new TableItem({ data: '13/03/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '22' }),
      new TableItem({ data: 'Thu Ha' }),
      new TableItem({ data: '16/03/2024' }),
      new TableItem({ data: 'Harassment' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '23' }),
      new TableItem({ data: 'Duc Minh' }),
      new TableItem({ data: '19/03/2024' }),
      new TableItem({ data: 'Inappropriate Behavior' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '24' }),
      new TableItem({ data: 'Thi Lan' }),
      new TableItem({ data: '22/03/2024' }),
      new TableItem({ data: 'Spamming' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '25' }),
      new TableItem({ data: 'Duy Khanh' }),
      new TableItem({ data: '25/03/2024' }),
      new TableItem({ data: 'Spamming' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '26' }),
      new TableItem({ data: 'Thi Mai' }),
      new TableItem({ data: '28/03/2024' }),
      new TableItem({ data: 'Suspicious Activity' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '27' }),
      new TableItem({ data: 'Viet Long' }),
      new TableItem({ data: '31/03/2024' }),
      new TableItem({ data: 'Harassment' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '28' }),
      new TableItem({ data: 'Kim Anh' }),
      new TableItem({ data: '03/04/2024' }),
      new TableItem({ data: 'Inappropriate Behavior' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '29' }),
      new TableItem({ data: 'Tien Dat' }),
      new TableItem({ data: '06/04/2024' }),
      new TableItem({ data: 'Spamming' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '30' }),
      new TableItem({ data: 'Ngoc Thuy' }),
      new TableItem({ data: '09/04/2024' }),
      new TableItem({ data: 'Harassment' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '31' }),
      new TableItem({ data: 'Hai Dang' }),
      new TableItem({ data: '12/04/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '32' }),
      new TableItem({ data: 'Quynh Trang' }),
      new TableItem({ data: '15/04/2024' }),
      new TableItem({ data: 'Harassment' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '33' }),
      new TableItem({ data: 'Minh Duc' }),
      new TableItem({ data: '18/04/2024' }),
      new TableItem({ data: 'Inappropriate Behavior' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '34' }),
      new TableItem({ data: 'Nga Nguyen' }),
      new TableItem({ data: '21/04/2024' }),
      new TableItem({ data: 'Spamming' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '35' }),
      new TableItem({ data: 'Huy Hoang' }),
      new TableItem({ data: '24/04/2024' }),
      new TableItem({ data: 'Pretending' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '36' }),
      new TableItem({ data: 'Thi Thao' }),
      new TableItem({ data: '27/04/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '37' }),
      new TableItem({ data: 'Duc Huy' }),
      new TableItem({ data: '30/04/2024' }),
      new TableItem({ data: 'Pretending' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '38' }),
      new TableItem({ data: 'Mai Phuong' }),
      new TableItem({ data: '03/05/2024' }),
      new TableItem({ data: 'Inappropriate Behavior' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '39' }),
      new TableItem({ data: 'Van Thanh' }),
      new TableItem({ data: '06/05/2024' }),
      new TableItem({ data: 'Spamming' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '40' }),
      new TableItem({ data: 'Thi Thu' }),
      new TableItem({ data: '09/05/2024' }),
      new TableItem({ data: 'Hate Speech' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '41' }),
      new TableItem({ data: 'Trung Kien' }),
      new TableItem({ data: '12/05/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '42' }),
      new TableItem({ data: 'Thi Huong' }),
      new TableItem({ data: '15/05/2024' }),
      new TableItem({ data: 'Pretending' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '43' }),
      new TableItem({ data: 'Duc Thinh' }),
      new TableItem({ data: '18/05/2024' }),
      new TableItem({ data: 'Spamming' }),
      new TableItem({ data: 'approved' }),
    ],
    [
      new TableItem({ data: '44' }),
      new TableItem({ data: 'Huyen Trang' }),
      new TableItem({ data: '21/05/2024' }),
      new TableItem({ data: 'Harassment' }),
      new TableItem({ data: 'approved' }),
    ],
    [
      new TableItem({ data: '45' }),
      new TableItem({ data: 'Van Khanh' }),
      new TableItem({ data: '24/05/2024' }),
      new TableItem({ data: 'Harassment' }),
      new TableItem({ data: 'approved' }),
    ],

    [
      new TableItem({ data: '46' }),
      new TableItem({ data: 'Thi Lan' }),
      new TableItem({ data: '27/05/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '47' }),
      new TableItem({ data: 'Thi Lan' }),
      new TableItem({ data: '27/05/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '48' }),
      new TableItem({ data: 'Thi Lan' }),
      new TableItem({ data: '27/05/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
    [
      new TableItem({ data: '48' }),
      new TableItem({ data: 'Thi Lan' }),
      new TableItem({ data: '27/05/2024' }),
      new TableItem({ data: 'Fake Account' }),
      new TableItem({ data: 'pending' }),
    ],
  ];
  dataChoose: TableItem[][] = [];
  dataLength = this.dataset.length;
  dataLengthPerPage = 9;
  dataResidual = this.dataLength % this.dataLengthPerPage;

  constructor(protected iconService: IconService) {
    this.iconService.registerAll([Add16, Filter16]);
  }

  filterUserNames(searchString: string) {
    this.searchValue = searchString;
  }

  filterTitle(titleName: string, checked: boolean) {
    if (checked) {
      this.displayedTitle.push(titleName);
    } else {
      this.displayedTitle.splice(this.displayedTitle.indexOf(titleName), 1);
    }
  }

  overflowOnClick = (event: any) => {
    event.stopPropagation();
  };

  ngOnInit() {
    console.log('Data length:', this.dataLength);
    this.modelPagination.currentPage = 1;
    if (this.dataResidual === 0) {
      this.modelPagination.totalDataLength = Math.floor(
        this.dataLength / this.dataLengthPerPage,
      );
    }
    if (this.dataResidual !== 0) {
      this.modelPagination.totalDataLength =
        Math.floor(this.dataLength / this.dataLengthPerPage) + 1;
      for (let i = 0; i <= this.dataResidual; i++) {
        this.dataset = [
          ...this.dataset,
          [
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
          ],
        ];
      }
    }

    this.model.header = [
      new TableHeaderItem({
        data: 'ID',
      }),
      new TableHeaderItem({
        data: 'User Name',
      }),
      new TableHeaderItem({
        data: 'Date',
      }),
      new TableHeaderItem({
        data: 'Title',
      }),
      new TableHeaderItem({
        data: 'State',
      }),
    ];
    for (let i = 0; i < this.dataLengthPerPage; i++) {
      this.dataChoose = [...this.dataChoose, this.dataset[i]];
    }

    this.model.data = this.dataChoose;

    this.model.isRowFiltered = (index: number) => {
      const userName = this.model.row(index)[1].data;
      const title = this.model.row(index)[3].data;
      return (
        !userName.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        !this.displayedTitle.includes(title)
      );
    };
  }

  onRowClick(index: number) {
    console.log('Row item selected:', index);
  }

  selectPage(page) {
    console.log('Loading page', page, 'from pagination model');
    let beginGet = (page - 1) * this.dataLengthPerPage;
    let endGet = page * this.dataLengthPerPage - 1;
    this.modelPagination.currentPage = page;
    this.dataChoose = [];
    for (let i = beginGet; i <= endGet; i++) {
      this.dataChoose = [...this.dataChoose, this.dataset[i]];
    }
    this.model.data = this.dataChoose;
  }

  selected(e) {
    console.log(e);
  }

  protected open = false;
  items = [
    {
      content: 'item one',
      selected: false,
    },
    {
      content: 'item two',
      selected: false,
    },
    {
      content: 'item three',
      selected: false,
    },
    {
      content: 'item four',
      selected: false,
    },
  ];
}
