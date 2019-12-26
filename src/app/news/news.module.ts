import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsserviceService } from './newsservice.service';
@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpClientModule
  ],
  providers: [
    NewsserviceService
  ]
})
export class NewsModule { }
