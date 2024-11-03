import { Component } from '@angular/core';
import { Article } from '../model/article';
import { AddArticleComponent } from '../add-article/add-article.component';

@Component({
  selector: 'app-liste-articles',
  standalone: true,
  imports: [AddArticleComponent],
  templateUrl: './liste-articles.component.html',
  styleUrl: './liste-articles.component.css'
})
export class ListeArticlesComponent {
  d=new Date();
  m= this.d.getMonth() +1;
  a= this.d.getFullYear();
  j= this.d.getDate();
  date= this.j +"/"+ this.m +"/"+ this.a;

  articles=[
    new Article(1,"https://www.bocage.fr/media/catalog/product/W/W/WWWBOC_20384650037_10.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
      "BABIES ISAURE COGNAC",this.date,
      "Un escarpin babies cognac en cuir lisse fabriqué avec soin au Portugal. Une chaussure aux accents rétro avec son bout carré et ses deux brides sur le dessus fermées par de fines boucles papillons. Cet escarpin élégant possède un large talon enrobé aux courbes arrondies apportant une touche de style supplémentaire. Une chaussure entièrement doublée cuir avec semelle intérieure cuir dotée d’une fine mousse. Elastiques d’aisance dissimulés sous les boucles. Son cuir vintage est un cuir d'aspect vieilli qui se patine avec le temps, un cuir brillant qui affiche un aspect plus ou moins froissé, dont la tonalité peut varier, et qui peut avoir un aspect \"déjà porté\"."
      ,0),
    new Article(2,"https://www.bocage.fr/media/catalog/product/W/W/WWWBOC_20386330049_10.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1820&width=1560&canvas=1560:1820",
      "BOTTE OSVALDO NOIR",this.date,
      "Une botte en cuir noir fabriquée avec soin au Portugal. Cette botte cavalière à bout amande affiche un look sobre, chic et intemporel, twisté par une imposante semelle crantée. Une botte doublée cuir sur la partie pied avec semelle intérieure cuir et tige non doublée pour plus de souplesse. Elle se ferme par un demi-zip au niveau de la cheville et possède un élastique d’aisance en haut de la tige. A noter, sa tirette à l'arrière du pied qui facilite le chaussant. Semelle 3 cm. Tour de mollet 37 cm. Une botte à porter avec un jean slim comme avec une robe."
      ,0),
    new Article(3,"https://www.bocage.fr/media/catalog/product/W/W/WWWBOC_20386150522_10.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1820&width=1560&canvas=1560:1820",
      "CHELSEA BOOTS MIMI",this.date,
      "Chelsea boots en cuir velours cognac avec élastiques recouverts. Une version audacieuse du Chelsea inspirée des bottes de cow-boys avec son bout amande très effilé, sa surpiqûre sur le dessus et son talon en biseau. Ce boots en cuir velours cognac se distingue par ses élastiques latéraux recouverts de fines lanières de cuir ton sur ton. Cette chaussure possède la technologie brevetée Bocage Innovation, ainsi votre chaussure s'adaptera aux largeurs de votre pied et vous garantira un bien-être inédit. A noter, sa tirette à l'arrière du pied qui facilite le chaussant. Un boots entièrement doublé cuir avec semelle intérieure cuir. Boots femme fabriqué en France. Talon 5 cm. Tige 15 cm. Ce boots apportera une touche folk à tous vos looks de la saison."
      ,0),
    new Article(4,"https://www.bocage.fr/media/catalog/product/W/W/WWWBOC_20385350079_10.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1820&width=1560&canvas=1560:1820",
      "ESCARPIN DUNE ACAJOU",this.date,
      "Un escarpin en cuir acajou fabriqué avec soin au Portugal. Un modèle résolument rétro avec son bout carré posé sur une trépointe débordante, ses fines brides sur le dessus fermées par des boucles dorées et son large talon. Un escarpin femme ouvert sur les côtés et entièrement doublé cuir avec semelle intérieure cuir dotée d’une fine mousse. Son cuir vintage est un cuir d'aspect vieilli qui se patine avec le temps, un cuir brillant qui affiche un aspect plus ou moins froissé, dont la tonalité peut varier, et qui peut avoir un aspect \"déjà porté\"."
      ,0),
    new Article(5,"https://www.bocage.fr/media/catalog/product/W/W/WWWBOC_20385300119_10.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1820&width=1560&canvas=1560:1820",
      "BABIES DEMI COGNAC",this.date,
      "Une babies Sling-back en cuir lisse cognac fabriquée avec soin au Portugal. Hit mode de la saison, elle joue l’accumulation de fines brides fermées par des boucles dorées pour sublimer le pied. Dotée d’un bout carré aux lignes arrondies et d’un large talon enrobé, cette babies multibrides offre beaucoup de confort. Une chaussure entièrement doublée cuir avec semelle intérieure cuir dotée d’une fine mousse. Son cuir vintage est un cuir d'aspect vieilli qui se patine avec le temps, un cuir brillant qui affiche un aspect plus ou moins froissé, dont la tonalité peut varier, et qui peut avoir un aspect \"déjà porté\"."
      ,0),
    new Article(6,"https://www.bocage.fr/media/catalog/product/W/W/WWWBOC_20385350072_10.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1820&width=1560&canvas=1560:1820",
      "ESCARPIN DENITSA NOIR",this.date,
      "Un escarpin sling-back en cuir noir fabriqué avec soin au Portugal. Une chaussure de cérémonie en cuir lisse rehaussée de cuir verni sur le bout et le talon. Le décolleté carré et les fines brides au talon assurent à cet escarpin une allure particulièrement élégante. Une chaussure entièrement doublée cuir avec semelle intérieure cuir dotée d’une fine mousse. Fermeture par fine boucle dorée."
      ,0)
  ];

  action="";
  
  changeAction(action:string){
    this.action=action;
  }

  orderArticle(){
    this.articles.sort((a, b) => b.score - a.score);
  }

  constructor() {
    this.orderArticle(); // pour trier les articles initialisés au début
  }

  addArticle(article:Article){
    this.articles=[...this.articles,article];
    this.orderArticle();
    this.changeAction("");
  }

  upScore(article:Article){
    article.score++;
    this.orderArticle();
  }

  downScore(article:Article){
    if(article.score>0){
      article.score--;
      this.orderArticle();
    }
  }

}
