import { Component, OnInit } from '@angular/core';
import { SearchNewsService } from '../services/search-news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
  public noticia:any = [];
  constructor(private serviceProvider: SearchNewsService){

  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.serviceProvider.getNewsBrazil().subscribe(
      (data:any) => {
        this.noticia = data.articles;
        console.log(this.noticia.content);
      }, error => {
        console.log(error);
      }
    )
  }
}
