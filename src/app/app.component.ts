import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword: string = 'test';

  constructor(private datasvc: DataService){
    this.data = datasvc.data;
  }

  doDeleteArticle(item){
    this.datasvc.doDeleteArticle(item);
  }

  data = [];

  doSearch(keyword: string) {
    this.keyword = keyword;
  }
}
