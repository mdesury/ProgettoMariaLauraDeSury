import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',

})

export class Service {
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';
  apiKey: string = '60b8351b';

  constructor(private http: HttpClient) {}

  public get(): Observable<string> {
    return this.http.get<string>(this.URL + "get?key=" + this.apiKey);
  }

  public set(newData: string): Observable<string> {
    return this.http.post<string>(this.URL + "set?key=" + this.apiKey, newData);
  }
}
