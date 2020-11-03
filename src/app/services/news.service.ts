import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getNews(page: number = 0, country: string = 'us') {

    const url = `${base_url}/news/?page=${page}&country=${country}`;
    return this.http.get(url)
      .pipe(
        map((resp: { articles: any[], totalPages: number, pageSize: number }) => resp)
      );
  }
}
