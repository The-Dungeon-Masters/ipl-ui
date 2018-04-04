import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHelper } from '../http-helper';
import { Errors } from '../errors';

@Injectable()
export class PlayService {

  constructor(private httpService: HttpService) { }


  public getAllUsers(): Observable<any> {
    const _url = HttpService.BASE_URL + `/user/getall`;
    const observable = this.httpService.get(_url)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: Error) => {
        const errors = HttpHelper.createErrorsFromHttpError(error);
        return Observable.throw(new Errors().add(error));
      });
    return observable;
  }


  public getAllMatches(): Observable<any> {
    const _url = HttpService.BASE_URL + `/matches`;
    const observable = this.httpService.get(_url)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: Error) => {
        const errors = HttpHelper.createErrorsFromHttpError(error);
        return Observable.throw(new Errors().add(error));
      });
    return observable;
  }

  public todaysMatches(): Observable<any> {
    const _url = HttpService.BASE_URL + `/matches/todaysMatches`;
    const observable = this.httpService.get(_url)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: Error) => {
        const errors = HttpHelper.createErrorsFromHttpError(error);
        return Observable.throw(new Errors().add(error));
      });
    return observable;
  }

  public getMatchById(id): Observable<any> {
    const _url = HttpService.BASE_URL + `/matches/${id}`;
    const observable = this.httpService.get(_url)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: Error) => {
        const errors = HttpHelper.createErrorsFromHttpError(error);
        return Observable.throw(new Errors().add(error));
      });
    return observable;
  }

  public getMatchOverview(id): Observable<any> {
    const _url = HttpService.BASE_URL + `/matches/matchSummary/${id}`;
    const observable = this.httpService.get(_url)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: Error) => {
        const errors = HttpHelper.createErrorsFromHttpError(error);
        return Observable.throw(new Errors().add(error));
      });
    return observable;
  }
}
