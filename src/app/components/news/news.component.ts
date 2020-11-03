import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {

  articles: any[] = [];
  totalPages: number;
  pageSize: number;
  page = 1;

  constructor(
    private newsServices: NewsService
  ) {
  }

  ngOnInit(): void {
    this.getHeadlines();
  }

  private getHeadlines() {
    this.newsServices.getNews(this.page).subscribe(
      resp => {
        if (resp) {
          this.articles = resp.articles;
          this.totalPages = resp.totalPages;
          this.pageSize = resp.pageSize;
        }
      }
    );
  }


  changePage(val: number) {
    this.page += val;
    if (this.page < 0) {
      this.page = 0;
    } else if (this.page >= this.totalPages) {
      this.page -= val;
    }
    //refresh news
    this.getHeadlines();
  }
}
