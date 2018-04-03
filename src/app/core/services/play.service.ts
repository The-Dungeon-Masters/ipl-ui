import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHelper } from '../http-helper';
import { Errors } from '../errors';

@Injectable()
export class PlayService {

  constructor(private httpService: HttpService) { }


  public getAllMatches(): Observable<any> {
    const _url = HttpService.BASE_URL + `/user/getall`;
    console.log(_url);
    const observable = this.httpService.get(_url)
      .map((resp1: Response) => {
        return resp1.json();
      })
      .catch((error: Error) => {
        const errors = HttpHelper.createErrorsFromHttpError(error);
        return Observable.throw(new Errors().add(error));
      });
    return observable;
  }
}
