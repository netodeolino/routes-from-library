import { NgModule, defineInjectable, Injectable, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule.decorators = [
        { type: NgModule, args: [{
                    imports: []
                },] }
    ];
    return LoginModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LoginService.ctorParameters = function () { return []; };
    /** @nocollapse */ LoginService.ngInjectableDef = defineInjectable({ factory: function LoginService_Factory() { return new LoginService(); }, token: LoginService, providedIn: "root" });
    return LoginService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-login',
                    template: "\n    <p>\n      Login in Routes From Library works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return []; };
    return LoginComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
    { path: 'login', component: LoginComponent }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forRoot(routes)],
                    declarations: [LoginComponent],
                    exports: [RouterModule]
                },] }
    ];
    return LoginRoutingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LoginModule, LoginRoutingModule, LoginService, LoginComponent as ɵa };
//# sourceMappingURL=login.js.map
