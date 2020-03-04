import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
export declare class AuthInterceptor implements HttpInterceptor {
    private http;
    private environment;
    private refreshEndpoint;
    private token;
    private refreshToken;
    constructor(http: HttpClient, environment: any);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    /**
     * refreshToken
     * Refresh the token after expiration
     * @param token
     * @param request
     * @param next
     */
    refreshTokenAndRetry(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
