import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class DataService {

  private url = 'https://blogtai.herokuapp.com/api/posts';
  private url = 'https://blogtai.herokuapp.com';

  constructor(private http: HttpClient) {
  }
  constructor(private http: HttpClient) {
  }


  getAll() {
    return this.http.get(this.url);
  }
  getAll() {
  	return this.http.get(this.url + '/api/posts/');
  }

  getById(id) {
            return this.http.get(this.url + '/api/posts/' + id);
  }


}
