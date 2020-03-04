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
export { AuthInterceptor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2F1dGgtdG9rZW4vIiwic291cmNlcyI6WyJhdXRoLXRva2VuL2F1dGgtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBS0wsU0FBUyxFQUNULFVBQVUsRUFDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFNTCxpQkFBaUIsRUFDbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7O0FBSS9EO0lBT0UseUJBQ1UsSUFBZ0IsRUFFeEIsV0FBVztRQUZILFNBQUksR0FBSixJQUFJLENBQVk7UUFJeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0Qsa0RBQWtEOzs7Ozs7O0lBQ2xELG1DQUFTOzs7Ozs7O0lBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUZuQixpQkF3QkM7UUFwQkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsVUFBVTs7OztRQUFDLFVBQUEsS0FBSztZQUNkLElBQUksS0FBSyxZQUFZLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUM5RCxJQUFJLEtBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2Qsc0JBQXNCO29CQUN0QixPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDdEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUMxQixlQUFlLEVBQ2YsU0FBUyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQ3ZCO3FCQUNGLENBQUMsQ0FBQztvQkFDSCwwQkFBMEI7b0JBQzFCLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDakQ7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxTQUFTLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7SUFDSCw4Q0FBb0I7Ozs7Ozs7SUFBcEIsVUFBcUIsT0FBeUIsRUFBRSxJQUFpQjtRQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNsRCxTQUFTOzs7O1FBQUMsVUFBQyxRQUFhO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQy9ELFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQzFCLGVBQWUsRUFDZixTQUFTLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUN0QzthQUNGLENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBbEVGLFVBQVU7Ozs7Z0JBSkYsVUFBVTtnREFhZCxNQUFNLFNBQUMsYUFBYTs7SUEwRHpCLHNCQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0FsRVksZUFBZTs7Ozs7O0lBQzFCLHNDQUFvQjs7Ozs7SUFDcEIsMENBQWdDOzs7OztJQUNoQyxnQ0FBYzs7Ozs7SUFDZCx1Q0FBcUI7Ozs7O0lBR25CLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgdGFwLFxyXG4gIG1lcmdlTWFwLFxyXG4gIGZsYXRNYXAsXHJcbiAgbWFwLFxyXG4gIHN3aXRjaE1hcCxcclxuICBjYXRjaEVycm9yXHJcbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7XHJcbiAgSHR0cFJlcXVlc3QsXHJcbiAgSHR0cEhhbmRsZXIsXHJcbiAgSHR0cEV2ZW50LFxyXG4gIEh0dHBJbnRlcmNlcHRvcixcclxuICBIdHRwUmVzcG9uc2UsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2VcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbSwgdGhyb3dFcnJvciwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIHByaXZhdGUgZW52aXJvbm1lbnQ7XHJcbiAgcHJpdmF0ZSByZWZyZXNoRW5kcG9pbnQ6IHN0cmluZztcclxuICBwcml2YXRlIHRva2VuO1xyXG4gIHByaXZhdGUgcmVmcmVzaFRva2VuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIEBJbmplY3QoXCJlbnZpcm9ubWVudFwiKVxyXG4gICAgZW52aXJvbm1lbnRcclxuICApIHtcclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgIHRoaXMucmVmcmVzaEVuZHBvaW50ID0gdGhpcy5lbnZpcm9ubWVudFtcInJlZnJlc2h0b2tlbi1lbmRwb2ludFwiXTtcclxuICAgIHRoaXMudG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzcy10b2tlblwiKTtcclxuICAgIHRoaXMucmVmcmVzaFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWZyZXNoLXRva2VuXCIpO1xyXG4gIH1cclxuICAvL2Z1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBhbGwgaHR0cCBjYWxsc1xyXG4gIGludGVyY2VwdChcclxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXHJcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxyXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSAmJiBlcnJvci5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMudG9rZW4pIHtcclxuICAgICAgICAgICAgLy8gQWRkIHRva2VuIHRvIGhlYWRlclxyXG4gICAgICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XHJcbiAgICAgICAgICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLnNldChcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJCZWFyZXIgXCIgKyB0aGlzLnRva2VuXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gUmVmcmVzaCBUb2tlbiBBTkQgUmV0cnlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaFRva2VuQW5kUmV0cnkocmVxdWVzdCwgbmV4dCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUb2tlbiBkb2Vzbid0IGV4aXN0ICFcIiwgXCJCZWFyZXIgXCIgKyB0aGlzLnRva2VuKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZWZyZXNoVG9rZW5cclxuICAgKiBSZWZyZXNoIHRoZSB0b2tlbiBhZnRlciBleHBpcmF0aW9uXHJcbiAgICogQHBhcmFtIHRva2VuXHJcbiAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgKiBAcGFyYW0gbmV4dFxyXG4gICAqL1xyXG4gIHJlZnJlc2hUb2tlbkFuZFJldHJ5KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5yZWZyZXNoRW5kcG9pbnQsIHt9KS5waXBlKFxyXG4gICAgICBzd2l0Y2hNYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY2Vzcy10b2tlblwiLCByZXNwb25zZVtcImFjY2Vzcy10b2tlblwiXSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWZyZXNoLXRva2VuXCIsIHJlc3BvbnNlW1wicmVmcmVzaC10b2tlblwiXSk7XHJcbiAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLnNldChcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiQmVhcmVyIFwiICsgcmVzcG9uc2VbXCJyZWZyZXNoLXRva2VuXCJdXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19