import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHelper } from '../http-helper';
import { Errors } from '../errors';

@Injectable()
export class UsersService {

  constructor(private httpService: HttpService) { }


  public addUser(userData, cont): Observable<any> {
    const url: string = HttpHelper.BASE_URL + '/user/adduser';
    const credentials: string = JSON.stringify({ user: userData, contests: cont });
    const observable = this.httpService.post(url, credentials)
      .map((res: any) => {
        console.log(res);
      }).catch(
        HttpHelper.handleError
      );
    return observable;
  }


  public changePassword(data): Observable<any> {
    const url: string = HttpHelper.BASE_URL + '/user/changepassword';
    const credentials: string = JSON.stringify({ currentPassword: data.currentPassword, newPassword: data.newPassword });
    const observable = this.httpService.put(url, credentials)
      .map((res: any) => {
        console.log(res);
      }).catch(
        HttpHelper.handleError
      );
    return observable;
  }
  
  public loggedInUser(): Observable<any> {
    const _url = HttpHelper.BASE_URL + '/user/getloggedinuser';
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
