import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler,HttpEvent,HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService:AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token=this.authService.getToken();
        console.log('Intercept!',req);
       // const copiedReq=req.clone({headers:req.headers.set('','')});
        const copiedReq=req.clone({params:req.params.set('auth',token)});
        return next.handle(copiedReq);
    }
}