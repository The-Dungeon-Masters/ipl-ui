import {SecurityService} from './security.service';
import {HttpHelper} from './http-helper';
import {Router} from '@angular/router';
import {RequestOptionsArgs, RequestOptions, Request, Response, Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class HttpService {

    public static readonly BASE_URL = '/ipl';



   constructor(private http: Http, private router: Router, private securityService: SecurityService) {
    console.log('HttpService::ctor');
   }


   request(url: string , options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(this.http.request(url, HttpHelper.getRequestOptionArgs(options)));
    }

    getHttp(): Http {
        return this.http;
    }


    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(this.http.get(url, HttpHelper.getRequestOptionArgs(options)));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(this.http.post(url, body, HttpHelper.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(this.http.put(url, body, HttpHelper.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(this.http.delete(url, HttpHelper.getRequestOptionArgs(options)));
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((error, source) => {
            console.log('http-service::intercept error ' + error.status);
            if (error.status === 401) {
                  this.securityService.logout().subscribe();
            }
            return Observable.throw(error);
        });

    }


}
