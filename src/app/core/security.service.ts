import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from './model/user';

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

  public static createUserFromJWT(jwt: string): User {
    const payload = SecurityService.getJwtPayload(jwt);
    const user = new User(payload.userId, payload.fullName, payload.email, payload.sub);
    return SecurityService.createSecureUser(user, jwt);
  }

  public static getJwtPayload(jwt: string): any {
    const parts = jwt.split('.');
    const encodedPayload = atob(parts[1]);
    const payload = JSON.parse(encodedPayload);
    return payload;
  }

  /**
   * Creates a new user that wraps a reference user and adds a security context.
   * @param refUser - the user to wrap
   * @param securityContext - the user's security context (typically a JWT string)
   */
  protected static createSecureUser(refUser: User, securityContext: string): User {
    return new SecureUser(refUser, securityContext);
  }

  constructor() {
    console.log('SecurityService::ctor');
  }

  /**
   * Gets the user currently logged in, or Anonymous if no user is logged in
   */
  public get currentUser(): User {
    return this._currentUser || User.anonymousUser;
  }

  public isCurrentUserAuthenticated(): Boolean {
     return this.currentUser.isAuthenticated;
  }


  /**
   * Authenticates a user
   * @param  - the user template to authenticate that specifies (username or email) and password of the user to authenticate
   */
  public authenticate(user: User): Observable<User> {
    return null;
  }

  /**
   * Logs out the current user
   */
  public logout(): Observable<User> {
    return null;
  }

  /**
   * Checks whether or not the specified user is the user currently logged into the application
   * @param user - the user to check
   */
  public isCurrentUser(user: User): boolean {
    if (!user || !this.currentUser) { return false; }
    return this.currentUser.id === user.id;
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
