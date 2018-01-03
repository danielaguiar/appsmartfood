import { Observable } from "rxjs/Rx";
import { HttpEvent } from "@angular/common/http";
import { HttpRequest, HttpHandler, HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";

export class ErrorInterceptor implements HttpInterceptor {

    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .catch((error, caught) => {
                let errorObj = error;
                if (errorObj.error){
                    errorObj = errorObj.error;
                }
                if (!errorObj.status){
                    errorObj = JSON.parse(errorObj);
                }
                console.log('error o controlador interceptor');
                console.log(errorObj)
                return Observable.throw(errorObj);
            }) as any;
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
