import { Component, Input, OnInit } from '@angular/core';
import {
  CheckboxModule,
  DialogModule,
  IconService,
  ModalModule,
  PaginationModel,
  PlaceholderModule,
  TableHeaderItem,
  TableItem,
  TableModel,
  TableModule,
} from 'carbon-components-angular';
import Add16 from '@carbon/icons/es/add/16';
import Filter16 from '@carbon/icons/es/filter/16';
import Favoritefilled20 from '@carbon/icons/es/favorite--filled/20';
import Chat20 from '@carbon/icons/es/chat/20';
import Sendalt20 from '@carbon/icons/es/send--alt/20';
import { SharedModule } from '../../../../../../shared/shared.module';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../../../ngrx/auth/auth.state';
import * as PostActions from '../../../../../../ngrx/post/post.actions';
import { PostState } from '../../../../../../ngrx/post/post.state';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    SharedModule,
    TableModule,
    DialogModule,
    CheckboxModule,
    ModalModule,
    PlaceholderModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  postList$ = this.store.select((state) => state.post.postList);

  @Input() size = 'md';
  @Input() showSelectionColumn = true;
  @Input() enableSingleSelect = true;
  @Input() striped = true;
  @Input() isDataGrid = false;
  @Input() noData = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;
  @Input() modelPagination = new PaginationModel();
  @Input() disablePagination = false;
  @Input() pageInputDisabled = false;
  @Input() nowrap = false;
  model = new TableModel();
  displayedTitle = ['US', 'France', 'Argentina', 'Japan'];
  searchValue = '';
  disabled = false;
  dataset = [
    [
      new TableItem({
        data: '1',
      }),
      new TableItem({
        data: "I'm rich because took a lot of money from the team",
      }),
      new TableItem({ data: 'Store' }),
      new TableItem({ data: 'thief' }),
      new TableItem({ data: 'Quy The Accountant' }),
    ],
  ];
  dataChoose: TableItem[][] = [];
  dataLength = this.dataset.length;
  dataLengthPerPage = 1;
  dataResidual = this.dataLength % this.dataLengthPerPage;

  constructor(
    protected iconService: IconService,
    private store: Store<{
      auth: AuthState;
      post: PostState;
    }>,
  ) {
    this.iconService.registerAll([
      Sendalt20,
      Chat20,
      Add16,
      Filter16,
      Favoritefilled20,
    ]);
  }

  filterUserNames(searchString: string) {
    // this.searchValue = searchString;
    this.model.data = this.dataset.filter((row: TableItem[]) =>
      row[1].data.toLowerCase().includes(searchString.toLowerCase()),
    );
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

  onRowClick(index: number) {
    console.log('Row item selected:', index);
  }

  openDialog: boolean;
  showCloseButton = true;
  openDialogShare: boolean;

  ngOnInit() {
    this.store.select('auth').subscribe((auth) => {
      this.store.dispatch(
        PostActions.getAllPosts({ page: 1, token: auth.idToken }),
      );
    });
    this.postList$.subscribe((postList) => {
      postList.data.map((post) => {
        console.log(post.createdAt);
      });
    });
    console.log('Data length:', this.dataLength);
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
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
            new TableItem({ data: '' }),
          ],
        ];
        console.log(this.dataLength);
      }
    }
    this.model.header = [
      new TableHeaderItem({
        data: 'ID',
      }),
      new TableHeaderItem({
        data: 'Content',
      }),
      new TableHeaderItem({
        data: 'DateTime',
      }),
      new TableHeaderItem({
        data: 'Category',
      }),
      new TableHeaderItem({
        data: 'Poster',
      }),
    ];
    for (let i: number = 0; i < this.dataLengthPerPage; i++) {
      this.dataChoose = [...this.dataChoose, this.dataset[i]];
    }
    this.model.data = this.dataChoose;

    // this.model.isRowFiltered = (index: number) => {
    //   const userName = this.model.row(index)[1].data;
    //   const title = this.model.row(index)[3].data;
    //   return (
    //     !userName.toLowerCase().includes(this.searchValue.toLowerCase()) ||
    //     !this.displayedTitle.includes(title)
    //   );
    // };
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
