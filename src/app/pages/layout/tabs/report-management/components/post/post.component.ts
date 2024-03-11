import { Component, Input, OnInit } from '@angular/core';
import {
  IconService,
  PaginationModel,
  PlaceholderModule,
  TableHeaderItem,
  TableItem,
  TableModel,
} from 'carbon-components-angular';

import Add16 from '@carbon/icons/es/add/16';
import Filter16 from '@carbon/icons/es/filter/16';

import { SharedModule } from '../../../../../../shared/shared.module';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../../../ngrx/auth/auth.state';
import { ReportState } from '../../../../../../ngrx/report/report.state';
import * as ReportActions from '../../../../../../ngrx/report/report.actions';
import { PostModel } from '../../../../../../models/post.model';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [SharedModule, PlaceholderModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  reportList$ = this.store.select((state) => state.report.reportList);
  page$ = this.store.select((state) => state.report.reportList.endPage);

  constructor(
    protected iconService: IconService,
    private store: Store<{
      auth: AuthState;
      report: ReportState;
    }>,
  ) {
    this.iconService.registerAll([Add16, Filter16]);
  }

  ngOnInit() {
    this.store.select('auth').subscribe((data) => {
      this.store.dispatch(
        ReportActions.getAllReports({
          token: data.idToken,
          page: 1,
          types: 'post',
        }),
      );
    });
    this.modelPagination.currentPage = 1;
    this.page$.subscribe((data) => {
      this.modelPagination.totalDataLength = data;
    });
    this.modelPagination.currentPage = 1;

    this.reportList$.subscribe((data) => {
      data.data.forEach((element) => {
        const post = element.typeInfo as PostModel;
        const date = new Date(
          element.createdAt._seconds * 1000 +
            element.createdAt._nanoseconds / 1000000,
        );
        const formattedDate = date.toLocaleString('vi-VN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour12: false,
        });
        this.dataset = [
          ...this.dataset,
          [
            new TableItem({ data: post.id }),
            new TableItem({ data: post.content }),
            new TableItem({ data: formattedDate }),
            new TableItem({ data: element.reason[0] }),
            new TableItem({ data: 'pending' }),
          ],
        ];
      });
    });
    this.model.data = this.dataset;

    this.model.header = [
      new TableHeaderItem({
        data: 'ID',
      }),
      new TableHeaderItem({
        data: 'Content',
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

    this.model.isRowFiltered = (index: number) => {
      const userName = this.model.row(index)[1].data;
      const title = this.model.row(index)[3].data;
      return (
        !userName.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        !this.displayedTitle.includes(title)
      );
    };
  }

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
    'Hate speech',
    'Harassment',
    'Spam',
    'Fake news',
    'False information',
    'Violence',
    'Terrorism',
    'Nude',
  ];
  searchValue = '';

  disabled = false;

  dataset = [];
  dataLengthPerPage = 8;

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

  postDetail: PostModel = {
    id: '',
    creatorId: '',
    share: [],
    photoUrl: [],
    content: '',
    hashtag: [],
    cateId: [],
    reaction: [],
    comments: [],
    mention: [],
    createdAt: null,
    updatedAt: null,
    deletedAt: null,
  };
  reportDetail = {
    reason: [],
    content: '',
  };

  onRowClick(index: number) {
    console.log('Row item selected:', index);
    this.reportList$.subscribe((data) => {
      this.postDetail = data.data[index].typeInfo as PostModel;
      this.reportDetail.reason = data.data[index].reason;
      this.reportDetail.content = data.data[index].content;
    });
  }

  selectPage(page) {
    console.log('Loading page', page, 'from pagination model');
    // let beginGet = (page - 1) * this.dataLengthPerPage;
    // let endGet = page * this.dataLengthPerPage - 1;
    // this.modelPagination.currentPage = page;
    // this.dataChoose = [];
    // for (let i = beginGet; i <= endGet; i++) {
    //   this.dataChoose = [...this.dataChoose, this.dataset[i]];
    // }
    // this.model.data = this.dataChoose;
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
