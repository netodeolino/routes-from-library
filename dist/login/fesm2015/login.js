import { NgModule, Injectable, defineInjectable, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginModule {
}
LoginModule.decorators = [
    { type: NgModule, args: [{
                imports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginService {
    constructor() { }
}
LoginService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LoginService.ctorParameters = () => [];
/** @nocollapse */ LoginService.ngInjectableDef = defineInjectable({ factory: function LoginService_Factory() { return new LoginService(); }, token: LoginService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-login',
                template: `
    <p>
      Login in Routes From Library works!
    </p>
  `
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    { path: 'login', component: LoginComponent }
];
class LoginRoutingModule {
}
LoginRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forRoot(routes)],
                declarations: [LoginComponent],
                exports: [RouterModule]
            },] }
];

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
