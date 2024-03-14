import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
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
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../ngrx/auth/auth.state';
import * as ReportActions from '../../../../ngrx/report/report.actions';
import * as CategoryActions from '../../../../ngrx/category/category.actions';
import { PostModel } from '../../../../models/post.model';
import { PostState } from '../../../../ngrx/post/post.state';
import { AsyncPipe } from '@angular/common';
import * as PostActions from '../../../../ngrx/post/post.actions';
import { IdToPicturePipe } from '../../../../shared/pipes/posts/IdToPicture/id-to-picture.pipe';
import { IdToNamePipe } from '../../../../shared/pipes/posts/IdToName/id-to-name.pipe';
import { CategoryState } from '../../../../ngrx/category/category.state';

@Component({
  selector: 'app-post-management',
  standalone: true,
  imports: [
    SharedModule,
    PlaceholderModule,
    AsyncPipe,
    IdToPicturePipe,
    IdToNamePipe,
  ],
  templateUrl: './post-management.component.html',
  styleUrl: './post-management.component.scss',
})
export class PostManagementComponent implements OnInit {
  postList$ = this.store.select((state) => state.post.postList);
  page$ = this.store.select((state) => state.post.postList.endPage);
  getAllCategories$ = this.store.select((state) => state.category.categoryList);
  catePage$ = this.store.select((state) => state.category.categoryList.endPage);
  updatePost$ = this.store.select((state) => state.post.updatePost);

  constructor(
    protected iconService: IconService,
    private store: Store<{
      auth: AuthState;
      post: PostState;
      category: CategoryState;
    }>
  ) {
    this.iconService.registerAll([Add16, Filter16]);
  }

  currentCatePage = 1;
  itemsCount = 0;

  ngOnInit() {
    this.store.select('auth').subscribe((data) => {
      this.store.dispatch(
        ReportActions.getAllReports({
          token: data.idToken,
          page: 1,
          types: 'post',
        })
      );
      this.store.dispatch(
        CategoryActions.getAllCategories({
          token: data.idToken,
          page: 1,
        })
      );
    });
    this.modelPagination.currentPage = 1;
    this.page$.subscribe((data) => {
      this.modelPagination.totalDataLength = data;
    });
    this.modelPagination.currentPage = 1;

    this.getAllCategories$.subscribe((data) => {
      data.data.forEach((element) => {
        this.caterories = [...this.caterories, element.name];
        this.itemsCount = data.endPage;
      });
    });

    this.postList$.subscribe((data) => {
      data.data.forEach((element) => {
        const date = new Date(
          element.createdAt._seconds * 1000 +
            element.createdAt._nanoseconds / 1000000
        );
        const formattedDate = date.toLocaleString('en', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour12: false,
        });
        this.dataset = [
          ...this.dataset,
          [
            new TableItem({ data: element.id }),
            new TableItem({ data: element.content }),
            new TableItem({ data: formattedDate }),
            new TableItem({ data: element.cateId.length }),
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
        data: 'Category',
      }),
      new TableHeaderItem({
        data: 'State',
      }),
    ];

    this.model.isRowFiltered = (index: number) => {
      const userName = this.model.row(index)[1].data;
      return !userName.toLowerCase().includes(this.searchValue.toLowerCase());
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
  searchValue = '';

  disabled = false;

  dataset = [];
  dataLengthPerPage = 8;

  filterUserNames(searchString: string) {
    this.searchValue = searchString;
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
    this.postList$.subscribe((data) => {
      this.postDetail = data.data[index];
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

  errorImg(src: any) {
    src.target.src =
      'https://t4.ftcdn.net/jpg/01/17/00/39/360_F_117003938_TrPAYiOgFFLnIwKsjUjtqoe4W2RDzytI.jpg';
  }

  errorImgBackground(src: any) {
    src.target.src =
      'https://t4.ftcdn.net/jpg/01/17/00/39/360_F_117003938_TrPAYiOgFFLnIwKsjUjtqoe4W2RDzytI.jpg';
  }

  errorName(src: any) {
    src.target.innerText = 'No name';
  }

  caterories = [];

  categoriesChosen = [];
  checkCategory = false;

  onChange(category) {
    if (this.categoriesChosen.includes(category)) {
      this.categoriesChosen = this.categoriesChosen.filter(
        (item) => item !== category
      );
    } else {
      this.categoriesChosen = [...this.categoriesChosen, category];
    }
  }

  save() {
    // console.log(this.categoriesChosen);
    let temp = [];
    this.categoriesChosen.forEach((element) => {
      temp = [...temp, element];
    });

    console.log(temp);

    this.store.select('auth').subscribe((data) => {
      this.store.dispatch(
        PostActions.updatePost({
          token: data.idToken,
          id: this.postDetail.id,
          post: {
            ...this.postDetail,
            cateId: temp,
          },
        })
      );
    });
  }

  onScroll(ev: any) {
    this.currentCatePage++;

    if (this.currentCatePage <= this.itemsCount) {
      this.store.select('auth').subscribe((data) => {
        this.store.dispatch(
          CategoryActions.getAllCategories({
            token: data.idToken,
            page: this.currentCatePage,
          })
        );
      });
    }
  }

  protected open = false;
}
