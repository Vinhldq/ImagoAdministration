import {Component, Input, OnInit} from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {AccordionModule, ButtonModule, ListItem, ModalModule, PaginationModel,} from "carbon-components-angular";
import {set} from "@angular/fire/database";
import {SlicePipe} from "@angular/common";
import {Store} from "@ngrx/store";
import {AuthState} from "../../../../ngrx/auth/auth.state";
import * as AuthActions from "../../../../ngrx/auth/auth.action";
import {logout} from "../../../../ngrx/auth/auth.action";
import { Router } from '@angular/router';
export interface History {
  id: number;
  src: string;
  cap: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [SharedModule, ButtonModule, AccordionModule, ModalModule, SlicePipe,],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit{
  @Input() modelPagination = new PaginationModel();
  @Input() disabledPagination = false;
  @Input() pageInputDisabled = false;
  translations: any;
  items = [
    <ListItem>{content: "Vienamese", selected: false},
    <ListItem>{content: "English", selected: false},
    <ListItem>{content: "France", selected: false},
  ];
  themes = [
    <ListItem>{content: "Dark", selected: false},
    <ListItem>{content: "Light", selected: false},
  ];
constructor(private store: Store<{auth: AuthState}>,  private router: Router,) {
}

signOut(){
  this.store.dispatch(AuthActions.logout());
  this.store.select('auth', 'isLogoutSuccess').subscribe((res) => {
    if (res) {
      this.router.navigate(['/login']);
      console.log('Logout success!!!');
    }
  });

}
  selected: ListItem;
  onSelect(ev) {
    this.selected = ev.item;
  }

  disabled = false;
  protected open = false;
  dataset:History[] = [
    {
      id: 1,
     src:'https://wallpapers.com/images/high/adidas-endorser-jisoo-9c9oyrhsykf4ctam.webp',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 2,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 3,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 4,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 5,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 6,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 7,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 8,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 9,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 10,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 11,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    //bingding data
    {
      id: 12,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 13,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 14,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 15,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 16,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 17,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 17,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },{
      id: 18,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 19,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },
    {
      id: 20,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },{
      id: 21,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },{
      id: 22,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },{
      id: 23,
      src:'https://wallpapers.com/images/hd/jisoo-vogue-photoshoot-is4jqxt4jp9h6335.jpg',
      cap:'Bạn đã phê duyệt bài post của X vào 13:00 ngày 08/1/2024.',
    },




  ]
  @Input() modelPagigation = new PaginationModel();
  @Input() disabledPagigation = false;

    // @ts-ignore
  @Input() pageInputDisabled = false;
  dataChoose:History[];
  dataLength = this.dataset.length;
  dataLengthPerPage = 7;
  dataResidual = this.dataLength / this.dataLengthPerPage;


  ngOnInit() {
   console.log('Data length', this.dataLength);
   this.modelPagigation.currentPage = 1;
   this.modelPagigation.totalDataLength =Math.ceil(this.dataLength / this.dataLengthPerPage);
   this.dataChoose = this.dataset.slice(0, this.dataLengthPerPage);
  }

  selectPage(page) {
    console.log('Loading page', page, 'from pagination model');
    let beginGet = (page - 1) * this.dataLengthPerPage;
    let endGet = page * this.dataLengthPerPage ;
    this.modelPagigation.currentPage = page; // Corrected here
    this.dataChoose = this.dataset.slice(beginGet, endGet);
    console.log(beginGet,'+' ,endGet);
  }
protected openModal = false;


  protected readonly logout = logout;
}

