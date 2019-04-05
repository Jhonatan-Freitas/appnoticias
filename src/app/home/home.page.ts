import { Component, OnInit } from '@angular/core';
import { SearchNewsService } from '../services/search-news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
  public noticia:any = [];
  public noticiaRecente:any [];
  constructor(private serviceProvider: SearchNewsService){

  }

  ngOnInit(): void {
    this.getNews();
    this.getNewsRecent();
  }

  getNews(){
    this.serviceProvider.getNewsBrazil().subscribe(
      (data:any) => {
        this.noticia = data.articles;
        
      }, error => {
        console.log(error);
      }
    )
  }

  getNewsRecent(){
    this.serviceProvider.getNewsRecent().subscribe(
      (data:any) => {
        this.noticiaRecente = data.articles;
        console.log(this.noticiaRecente);
      }, error => {
        console.log(error);
      }
    )
  }
}
