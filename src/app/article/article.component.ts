import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item: any;

  @Output() delete = new EventEmitter<any>();  //傳出delete事件, 目的:給app.component可以取得這事件

  constructor() { }

  ngOnInit() {
  }

  doDelete(item){
    this.delete.emit(item);  //傳出按下刪除那筆的item給delete事件
  }
}
