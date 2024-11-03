import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeArticlesComponent } from "./liste-articles/liste-articles.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeArticlesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppGestionArticles';
}
