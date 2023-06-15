import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Libro } from './Objects/Libro';

@Injectable({
  providedIn: 'root',

})

export class Service {
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';
  apiKey: string = '60b8351b';

  constructor() {}

  public getData(Biblioteca: string): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.URL+Biblioteca,
      crossDomain: true,
    });
}
}