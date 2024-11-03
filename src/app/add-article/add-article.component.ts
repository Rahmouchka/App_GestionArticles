import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  @Input() lastID?:number;
  @Output() articleCreated=new EventEmitter<Article>();

  d=new Date();
  m= this.d.getMonth() +1;
  a= this.d.getFullYear();
  j= this.d.getDate();
  date= this.j +"/"+ this.m +"/"+ this.a;

  addArticle(titre:string,img:string,desc:string){
    const newArticle = new Article(
      this.lastID! +1,
      img,
      titre,
      this.date,
      desc,
      0
    );
    this.articleCreated.emit(newArticle);
  }

}
