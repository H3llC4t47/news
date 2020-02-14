import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-request';

  private articles = [];
  public search = '';
  // tslint:disable-next-line:max-line-length
  public adress = 'https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-13&sortBy=publishedAt&apiKey=d1952ab5f063483bb6120efaa908cb80\n';

  click() {
    // tslint:disable-next-line:max-line-length
    this.adress = 'https://newsapi.org/v2/everything?q= ' + this.search + ' &from=2020-02-13&sortBy=publishedAt&apiKey=d1952ab5f063483bb6120efaa908cb80';
    this.httpClient
      .get(this.adress)
      .subscribe(
        (data) => {
          this.articles = data['articles'];
          console.log(this.articles);
        }, (error) => {

        }
      );
  }

  constructor(private httpClient: HttpClient) {
    this.httpClient
    .get(this.adress)
      .subscribe(
        (data) => {
          this.articles = data['articles'];
          console.log(this.articles);
        }, (error) => {

        }
      );
    }

}