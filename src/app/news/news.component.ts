import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from './newsservice.service';
import { NewsItem } from './news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: NewsItem[] = [];

  constructor(private newsService: NewsserviceService) { }

  ngOnInit() {
    this.latestNew();
  }


  latestNew() {
    this.newsService.latestNewsFromService().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.news = data['articles'];

      console.log(this.news);
      

    },
      error => {
        console.log('Faild to make call ', error);
      }

    );
  }

}
