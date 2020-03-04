/**
 * @fileoverview added by tsickle
 * Generated from: auth-token/auth-interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { switchMap, catchError } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
// import { environment } from "./../../environments/environment";
export class AuthInterceptor {
    /**
     * @param {?} http
     * @param {?} environment
     */
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.refreshEndpoint = this.environment["refreshtoken-endpoint"];
        this.token = localStorage.getItem("access-token");
        this.refreshToken = localStorage.getItem("refresh-token");
    }
    //function which will be called for all http calls
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return next.handle(request).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
                if (this.token) {
                    // Add token to header
                    request = request.clone({
                        headers: request.headers.set("Authorization", "Bearer " + this.token)
                    });
                    // Refresh Token AND Retry
                    return this.refreshTokenAndRetry(request, next);
                }
                else {
                    console.warn("Token doesn't exist !", "Bearer " + this.token);
                    return next.handle(request);
                }
            }
        })));
    }
    /**
     * refreshToken
     * Refresh the token after expiration
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    refreshTokenAndRetry(request, next) {
        return this.http.post(this.refreshEndpoint, {}).pipe(switchMap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            console.log("response", response);
            localStorage.setItem("access-token", response["access-token"]);
            localStorage.setItem("refresh-token", response["refresh-token"]);
            request = request.clone({
                headers: request.headers.set("Authorization", "Bearer " + response["refresh-token"])
            });
            return next.handle(request);
        })));
    }
}
AuthInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthInterceptor.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: ["environment",] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthInterceptor.prototype.environment;
    /**
     * @type {?}
     * @private
     */
    AuthInterceptor.prototype.refreshEndpoint;
    /**
     * @type {?}
     * @private
     */
    AuthInterceptor.prototype.token;
    /**
     * @type {?}
     * @private
     */
    AuthInterceptor.prototype.refreshToken;
    /**
     * @type {?}
     * @private
     */
    AuthInterceptor.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2F1dGgtdG9rZW4vIiwic291cmNlcyI6WyJhdXRoLXRva2VuL2F1dGgtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBS0wsU0FBUyxFQUNULFVBQVUsRUFDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFNTCxpQkFBaUIsRUFDbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7O0FBSy9ELE1BQU0sT0FBTyxlQUFlOzs7OztJQU0xQixZQUNVLElBQWdCLEVBRXhCLFdBQVc7UUFGSCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBSXhCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7OztJQUVELFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxLQUFLLFlBQVksaUJBQWlCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQzlELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDZCxzQkFBc0I7b0JBQ3RCLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUN0QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQzFCLGVBQWUsRUFDZixTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDdkI7cUJBQ0YsQ0FBQyxDQUFDO29CQUNILDBCQUEwQjtvQkFDMUIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNqRDtxQkFBTTtvQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDN0I7YUFDRjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQVNELG9CQUFvQixDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDL0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDbEQsU0FBUzs7OztRQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDakUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FDMUIsZUFBZSxFQUNmLFNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQ3RDO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFsRUYsVUFBVTs7OztZQUpGLFVBQVU7NENBYWQsTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7SUFQdkIsc0NBQW9COzs7OztJQUNwQiwwQ0FBZ0M7Ozs7O0lBQ2hDLGdDQUFjOzs7OztJQUNkLHVDQUFxQjs7Ozs7SUFHbkIsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICB0YXAsXHJcbiAgbWVyZ2VNYXAsXHJcbiAgZmxhdE1hcCxcclxuICBtYXAsXHJcbiAgc3dpdGNoTWFwLFxyXG4gIGNhdGNoRXJyb3JcclxufSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHtcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwSGFuZGxlcixcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cEludGVyY2VwdG9yLFxyXG4gIEh0dHBSZXNwb25zZSxcclxuICBIdHRwRXJyb3JSZXNwb25zZVxyXG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tLCB0aHJvd0Vycm9yLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcclxuICBwcml2YXRlIHJlZnJlc2hFbmRwb2ludDogc3RyaW5nO1xyXG4gIHByaXZhdGUgdG9rZW47XHJcbiAgcHJpdmF0ZSByZWZyZXNoVG9rZW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgQEluamVjdChcImVudmlyb25tZW50XCIpXHJcbiAgICBlbnZpcm9ubWVudFxyXG4gICkge1xyXG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgdGhpcy5yZWZyZXNoRW5kcG9pbnQgPSB0aGlzLmVudmlyb25tZW50W1wicmVmcmVzaHRva2VuLWVuZHBvaW50XCJdO1xyXG4gICAgdGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzLXRva2VuXCIpO1xyXG4gICAgdGhpcy5yZWZyZXNoVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2gtdG9rZW5cIik7XHJcbiAgfVxyXG4gIC8vZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgZm9yIGFsbCBodHRwIGNhbGxzXHJcbiAgaW50ZXJjZXB0KFxyXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcclxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXHJcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlICYmIGVycm9yLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy50b2tlbikge1xyXG4gICAgICAgICAgICAvLyBBZGQgdG9rZW4gdG8gaGVhZGVyXHJcbiAgICAgICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcclxuICAgICAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMuc2V0KFxyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkJlYXJlciBcIiArIHRoaXMudG9rZW5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBSZWZyZXNoIFRva2VuIEFORCBSZXRyeVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoVG9rZW5BbmRSZXRyeShyZXF1ZXN0LCBuZXh0KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRva2VuIGRvZXNuJ3QgZXhpc3QgIVwiLCBcIkJlYXJlciBcIiArIHRoaXMudG9rZW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlZnJlc2hUb2tlblxyXG4gICAqIFJlZnJlc2ggdGhlIHRva2VuIGFmdGVyIGV4cGlyYXRpb25cclxuICAgKiBAcGFyYW0gdG9rZW5cclxuICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAqIEBwYXJhbSBuZXh0XHJcbiAgICovXHJcbiAgcmVmcmVzaFRva2VuQW5kUmV0cnkocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnJlZnJlc2hFbmRwb2ludCwge30pLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzLXRva2VuXCIsIHJlc3BvbnNlW1wiYWNjZXNzLXRva2VuXCJdKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZnJlc2gtdG9rZW5cIiwgcmVzcG9uc2VbXCJyZWZyZXNoLXRva2VuXCJdKTtcclxuICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMuc2V0KFxyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIixcclxuICAgICAgICAgICAgXCJCZWFyZXIgXCIgKyByZXNwb25zZVtcInJlZnJlc2gtdG9rZW5cIl1cclxuICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=