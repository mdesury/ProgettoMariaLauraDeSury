import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class Service {
  private URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';
  private key: string = '60b8351b';

  constructor(private http: HttpClient) {}

  new(): Observable<string> {
    return this.http.get<string>(this.URL + 'new?secret=ssw2022');
  }
  
  get(): Observable<string> {
    return this.http.get<string>(this.URL + 'get?key' + this.key)
  }

  set(ciccio: string): Observable<string> {
    return this.http.post<string>(this.URL + 'set?key' + this.key, ciccio);
  }
}