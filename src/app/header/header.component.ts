import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "leochen!!!";
  titleurl = "http://google.com.tw";
  subtitle = "記載著 leochen 在網路世界的學習心得與技術分享";

  num: number = 10;

  changeTitle($event: MouseEvent) {
    console.log($event);
    if ($event.shiftKey) {
      this.title = this.title + " shift";
    } else {
      this.title = this.title + " yoyo";
    }

    this.num++;
  }

  getClass() {
    return {
      'red': this.num % 2 == 0,
      'blue': this.num % 2 == 1
    };
  }
  constructor() { }

  ngOnInit() {
  }

}
