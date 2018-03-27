import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { SecurityService } from '../security.service';


/**
 * This class represents a system user
 */
export class User {

  /**
   * The general Anonymous user
   */
  public static readonly anonymousUser: User = new User(-1, null, null, 'ANONYMOUS');

  protected _securityContext: string = null;

  public contactPhone: string = null;
  public name?: string = null;

  /**
   * The password should only be set when logging in or when resetting a password
   * Only hashes of passwords should be stored in the back end
   */
  constructor (
    public id?: number,
    public fullName?: string,
    public email?: string,
    public username?: string,
    public password?: string
  ) {
  }

  /**
   * Gets whether or not the user is authenticated
   */
  public get isAuthenticated(): boolean {
    return this._securityContext !== null;
  }

  /**
   * Gets the security context of the user (should be a JWT).
   */
  public get securityContext(): string {
    return this._securityContext || '';
  }


}
