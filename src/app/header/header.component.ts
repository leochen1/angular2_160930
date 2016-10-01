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

  constructor() { }

  ngOnInit() {
  }

}
