import { Injectable } from '@angular/core';
import { API } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookServicesService {
  private searchBook: string = API.SEARCH;
  constructor(private http: HttpClient) {
    this.searchBook = API.SEARCH;
  }

  getBook(keyword: string) {
    return this.http.get<any>(this.searchBook + `?q=${keyword}`);
  }
}
