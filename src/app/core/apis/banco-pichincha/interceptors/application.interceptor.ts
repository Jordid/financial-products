import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ApplicationInterceptor implements HttpInterceptor {
  private authorId = uuidv4();

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headers = request.headers.set(
      'authorId',
      'bb2fb896-14d0-47e1-bc88-9d64421d63c1' /*this.authorId*/
    );
    const modifiedInterceptor = request.clone({ headers });

    console.log('Intercepted request');
    console.log(modifiedInterceptor);

    return next.handle(modifiedInterceptor);
  }
}
