import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) {
    this.http.get('/assets/articles.json')
      .subscribe(
      (value) => {
        this.data = value.json();
      },
      (error) => {

      }
      )
  }

  doDeleteArticle(item) {
    let idx = this.data.indexOf(item)
    this.data.splice(idx, 1);   //刪除data下的那筆item資料(data非真正被delete)
  }

  data;
}
