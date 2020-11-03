import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) {
  }

  getHello() {
    const url = `${base_url}/hello`;
    return this.http.get(url);
    // .pipe(
    //   map(resp => console.log(resp)
    //   )
    // );
  }
}
