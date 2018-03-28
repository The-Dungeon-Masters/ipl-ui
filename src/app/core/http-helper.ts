import { Observable } from 'rxjs/Rx';
import {RequestOptionsArgs, RequestOptions, Request, Response, Http, Headers} from '@angular/http';

import { User } from './model/user';
import { Errors } from './errors';

/**
 * Helper class for dealing with HTTP calls
 */

export class HttpHelper {

public static readonly SecurityContextKey = 'security.context';
public static readonly BASE_URL = '/scc/v1';


  public static getCurrentUserId(): number {
    const user = HttpHelper.getCurrentUser();
    if (user) {
      return user.id;
    }
  }

  public static getCurrentUser(): User {
    const payload = this.getJwtPayload();
    if (payload) {
      console.log('payload : ' + payload.userId + ':' + payload.fullName + ':' + payload.email + ':' + payload.sub);
      return new User(payload.userId, payload.fullName, payload.email, payload.sub);
    }
  }

  public static  getJwtPayload(): any {
    const jwt = this.getSecurityContext();
    if (jwt) {
      const parts = jwt.split('.');
      const encodedPayload = parts[1];
      const payload = JSON.parse(atob(encodedPayload));
      return payload;
    }
  }

  public static getSecurityContext(): any {
    return sessionStorage.getItem(this.SecurityContextKey);
  }

  public static getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Cache-Control', 'no-cache, no-store, must-revalidate');
        options.headers.append('Pragma', 'no-cache');
        options.headers.append('Expires', '0');
        if(HttpHelper.getSecurityContext()) {
            options.headers.append('Authorization', 'Bearer ' + HttpHelper.getSecurityContext());
        }
        return options;
    }

  public static createErrorFromHttpError(httpError: any): Error  {
    const errorName = httpError.statusText.replace(/ /g, '_').toLowerCase();
    const errorMessage = `${httpError.status} ${httpError.statusText} - ${httpError.url}`;
    return Errors.createError(errorName, errorMessage);
  }

  /**
   * Converts a Http error into an Errors object
   * @param httpError - error returned from AJAX call
   */
  public static createErrorsFromHttpError(httpError: any): Errors {
    const errors = new Errors();
    if (httpError.statusText) {
      errors.add(HttpHelper.createErrorFromHttpError(httpError));
    } else if (httpError.errors) {
      httpError.errors.forEach(error => {
        errors.add(Errors.createError(error.name || null, error.message || null, error.stack || null));
      });
    } else if (httpError.name) {
      errors.add(httpError);
    } else {
      errors.add(Errors.createError('unknown_error', JSON.stringify(httpError)));
    }

    return errors;
  }


 public static handleErrorBlob(err: Response): Observable<Errors> {
    const reader: FileReader = new FileReader();
    const errors = new Errors();

    const obs = Observable.create((observer: any) => {
      reader.onloadend = (e) => {
        const error = JSON.parse(reader.result);
        if (error.ewnErrors)  {
            for (let i = 0; i < error.ewnErrors.length; i++) {
                  const name = error.ewnErrors[i].field;
                  const msg = error.ewnErrors[i].errorMessage;
                  errors.addNew(name, msg);
            }
        }
        observer.error(errors);
        observer.complete();
      }
    });
    const jsonError =  err.json() || '';
    reader.readAsText(jsonError);
    return obs;
}

public static  handleError(res: Response | any) {
        const contentType = res.headers.get('Content-Type');
        const errors = new Errors();

        if (contentType.toLowerCase() === 'application/json') {
            const error = res.json() || '';
             if (error.ewnErrors)  {
                for (let i = 0; i < error.ewnErrors.length; i++) {
                  const name = error.ewnErrors[i].field;
                  const msg = error.ewnErrors[i].errorMessage;
                  errors.addNew(name, msg);
                }
            } else {
                errors.addNew('http_error', res.statusText);
            }
        } else {
            errors.addNew('http_error', res.statusText);
        }
        return Observable.throw(errors);
    }

}
