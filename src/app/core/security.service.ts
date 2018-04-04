import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from './model/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Errors } from './errors';
import { HttpHelper } from './http-helper';

/**
 * This service provides functionality related to user authentication and permissions checking
 */
@Injectable()
export class SecurityService {
  public static readonly SECURITY_KEY = 'security.context';

  protected _currentUser: User = null;


  public static getSecurityToken(): string {
    return sessionStorage.getItem(SecurityService.SECURITY_KEY);
  }
  public static setSecurityToken(token: string): void {
    sessionStorage.setItem(SecurityService.SECURITY_KEY, token);
  }
  public static removeSecurityToken(): void {
    sessionStorage.removeItem(SecurityService.SECURITY_KEY);
  }

  /**
   * Creates a new user that wraps a reference user and adds a security context.
   * @param refUser - the user to wrap
   * @param securityContext - the user's security context (typically a JWT string)
   */

  constructor(private httpService: HttpClient) {
    console.log('SecurityService::ctor');
  }


  /**
   * Authenticates a user
   * @param  - the user template to authenticate that specifies (username or email) and password of the user to authenticate
   */
  public authenticate(user: User): Observable<any> {
    const errors = new Errors();
    const url: string = HttpHelper.BASE_URL + '/login';
    const credentials: string = JSON.stringify({ username: user.username, password: user.password });
    const observable = this.httpService.post(url, credentials)
      .map((res: any) => {
        SecurityService.setSecurityToken(res.jwtToken);
      }).catch(
        HttpHelper.handleError
      );
    return observable;
  }

 public get currentUser(): User {
  return this._currentUser || User.anonymousUser;
}

/**
   * Sets the current user
   * @param user - the new current user
   */
  protected setCurrentUser(user: User) {
    this._currentUser = user;
  }
  /**
   * Logs out the current user
   */
  public logout(): Observable<User> {
    return null;
  }


}


/**
 * Private class that creates a user with a security context
 */
class SecureUser  extends User {
  constructor(refUser: User, securityContext: string) {
    super(refUser.id, refUser.fullName, refUser.email, refUser.username);
    this._securityContext = securityContext;
  }
}
