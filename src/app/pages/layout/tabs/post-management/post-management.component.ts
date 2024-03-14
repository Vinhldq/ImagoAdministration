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
        PostActions.getAllPosts({
          token: data.idToken,
          page: 1,
          size: 10,
        })
      );
    });
    this.modelPagination.currentPage = 1;
    this.page$.subscribe((data) => {
      this.modelPagination.totalDataLength = data;
    });
    this.modelPagination.currentPage = 1;

    this.getAllCategories$.subscribe((data) => {
      console.log('caterories: ', data.data);

      data.data.forEach((element) => {
        this.caterories = [...this.caterories, element.name];
      });
    });

    this.postList$.subscribe((data) => {
      data.data.forEach((element) => {
        const date = new Date(
          element.createdAt._seconds * 1000 +
            element.createdAt._nanoseconds / 1000000
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
            new TableItem({ data: element.id }),
            new TableItem({ data: element.content }),
            new TableItem({ data: formattedDate }),
            new TableItem({ data: element.cateId }),
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

  // caterories = [
  //   'adventure',
  //   'anime',
  //   'architecture',
  //   'art',
  //   'artistic',
  //   'astronomy',
  //   'automobile',
  //   'beauty',
  //   'book',
  //   'business',
  //   'celebration',
  //   'comic',
  //   'cooking',
  //   'craft',
  //   'dance',
  //   'design',
  //   'diy',
  //   'education',
  //   'entertainment',
  //   'environment',
  //   'esports',
  //   'exploration',
  //   'fashion',
  //   'film',
  //   'finance',
  //   'fitness',
  //   'flower',
  //   'food',
  //   'fruit',
  //   'gaming',
  //   'gardening',
  //   'health',
  //   'hiking',
  //   'history',
  //   'hobby',
  //   'inspiration',
  //   'journalism',
  //   'language',
  //   'lifestyle',
  //   'medicine',
  //   'meme',
  //   'music',
  //   'mystery',
  //   'nature',
  //   'networking',
  //   'pet',
  //   'photography',
  //   'plant',
  //   'psychology',
  //   'science',
  //   'shopping',
  //   'self-improvement',
  //   'shopping',
  //   'sports',
  //   'street food',
  //   'technology',
  //   'travel',
  //   'trending',
  //   'volunteering',
  //   'weather',
  //   'wildlife',
  // ];

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

    this.postDetail.cateId = temp;

    // this.store.select('auth').subscribe((data) => {
    //   this.store.dispatch(
    //     PostActions.updatePost({
    //       token: data.idToken,
    //       post: post,
    //     }),
    //   );
    // });
    this.categoriesChosen = [];
    this.checkCategory = false;
  }

  protected open = false;
}
