import { Component, Directive, Input, OnInit } from '@angular/core';
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
import * as ProfileActions from '../../../../../../ngrx/profile/profile.action';
import { PostState } from '../../../../../../ngrx/post/post.state';
import { Pipe, PipeTransform } from '@angular/core';
import { AuthModel } from '../../../../../../models/auth.model';
import { ProfileModel } from '../../../../../../models/profile.model';
import { PostModel } from '../../../../../../models/post.model';
import { Subscription } from 'rxjs';
import { ProfileState } from '../../../../../../ngrx/profile/profile.state';

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
  creatorPost$ = this.store.select((state) => state.post.postCreatorName);
  page$ = this.store.select((state) => state.post.postList.endPage);
  subscription: Subscription[] = [];
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
  // displayedTitle = ['US', 'France', 'Argentina', 'Japan'];
  searchValue = '';
  disabled = false;
  dataset = [];

  constructor(
    protected iconService: IconService,
    private store: Store<{
      auth: AuthState;
      post: PostState;
      profile: ProfileState;
    }>
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
      row[1].data.toLowerCase().includes(searchString.toLowerCase())
    );
  }

  // filterTitle(titleName: string, checked: boolean) {
  //   if (checked) {
  //     this.displayedTitle.push(titleName);
  //   } else {
  //     this.displayedTitle.splice(this.displayedTitle.indexOf(titleName), 1);
  //   }
  // }

  // overflowOnClick = (event: any) => {
  //   event.stopPropagation();
  // };

  onRowClick(index: number) {
    // console.log('Row item selected:', index);
  }

  dataLengthPerPage = 10;

  ngOnInit() {
    this.subscription.push(
      this.store.select('auth').subscribe((auth) => {
        if (auth.idToken != '') {
          this.store.dispatch(
            PostActions.getAllPosts({ token: auth.idToken, page: 1, size: 10 })
          );
          this.store.dispatch(
            PostActions.getCreatorName({
              token: auth.idToken,
              page: 1,
              size: 10,
            })
          );
        }
      })
    );
    // this.modelPagination.currentPage = 1;
    // this.page$.subscribe((page) => {
    //   this.modelPagination.totalDataLength = page;
    // });

    this.creatorPost$.subscribe((creatorPost) => {
      this.dataset = creatorPost.data.map((post) => {
        return [
          new TableItem({ data: post.id }),
          new TableItem({ data: post.profile.userName }),
          new TableItem({ data: post.content }),
          new TableItem({ data: post.photoUrl.length }),
          new TableItem({ data: post.reaction.length }),
          new TableItem({ data: post.comments.length }),
          new TableItem({ data: post.share.length }),
          new TableItem({
            data: new Date(post.createdAt._seconds * 1000).toLocaleString(),
          }),
        ];
      });
      this.model.data = this.dataset;
    });

    this.model.header = [
      new TableHeaderItem({
        data: 'Id Post',
      }),
      new TableHeaderItem({
        data: 'Creator Name',
      }),

      new TableHeaderItem({
        data: 'Content',
      }),
      new TableHeaderItem({
        data: 'Photo Url',
      }),
      new TableHeaderItem({
        data: 'reaction',
      }),
      new TableHeaderItem({
        data: 'comments',
      }),
      new TableHeaderItem({
        data: 'share',
      }),
      new TableHeaderItem({
        data: 'Date Time',
      }),
    ];
  }

  selectPage(page) {
    // console.log('Loading page', page, 'from pagination model');
    // let beginGet = (page - 1) * this.dataLengthPerPage;
    // let endGet = page * this.dataLengthPerPage - 1;
    // this.modelPagination.currentPage = page;
    // this.dataChoose = [];
    // for (let i = beginGet; i <= endGet; i++) {
    //   this.dataChoose = [...this.dataChoose, this.dataset[i]];
    // }
    // this.model.data = this.dataChoose;
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
