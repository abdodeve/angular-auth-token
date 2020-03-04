import { Injectable, Inject, NgModule } from '@angular/core';
import { switchMap, catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * Generated from: auth-token/auth-interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { environment } from "./../../environments/environment";
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.refreshEndpoint = this.environment["refreshtoken-endpoint"];
        this.token = localStorage.getItem("access-token");
        this.refreshToken = localStorage.getItem("refresh-token");
    }
    //function which will be called for all http calls
    //function which will be called for all http calls
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    AuthInterceptor.prototype.intercept = 
    //function which will be called for all http calls
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        return next.handle(request).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (error instanceof HttpErrorResponse && error.status === 401) {
                if (_this.token) {
                    // Add token to header
                    request = request.clone({
                        headers: request.headers.set("Authorization", "Bearer " + _this.token)
                    });
                    // Refresh Token AND Retry
                    return _this.refreshTokenAndRetry(request, next);
                }
                else {
                    console.warn("Token doesn't exist !", "Bearer " + _this.token);
                    return next.handle(request);
                }
            }
        })));
    };
    /**
     * refreshToken
     * Refresh the token after expiration
     * @param token
     * @param request
     * @param next
     */
    /**
     * refreshToken
     * Refresh the token after expiration
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    AuthInterceptor.prototype.refreshTokenAndRetry = /**
     * refreshToken
     * Refresh the token after expiration
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        return this.http.post(this.refreshEndpoint, {}).pipe(switchMap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            console.log("response", response);
            localStorage.setItem("access-token", response["access-token"]);
            localStorage.setItem("refresh-token", response["refresh-token"]);
            request = request.clone({
                headers: request.headers.set("Authorization", "Bearer " + response["refresh-token"])
            });
            return next.handle(request);
        })));
    };
    AuthInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthInterceptor.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: ["environment",] }] }
    ]; };
    return AuthInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: auth-token/auth-token.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthTokenModule = /** @class */ (function () {
    function AuthTokenModule() {
    }
    AuthTokenModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                    providers: [
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: AuthInterceptor,
                            multi: true
                        }
                    ]
                },] }
    ];
    return AuthTokenModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: auth-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthTokenModule, AuthInterceptor as ɵa };

//# sourceMappingURL=auth-token.js.map