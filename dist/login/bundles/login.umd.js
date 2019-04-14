(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('login', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory(global.login = {}, global.ng.core, global.ng.router));
}(this, function (exports, core, router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginModule = /** @class */ (function () {
        function LoginModule() {
        }
        LoginModule.decorators = [
            { type: core.NgModule, args: [{
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
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        LoginService.ctorParameters = function () { return []; };
        /** @nocollapse */ LoginService.ngInjectableDef = core.defineInjectable({ factory: function LoginService_Factory() { return new LoginService(); }, token: LoginService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forRoot(routes)],
                        declarations: [LoginComponent],
                        exports: [router.RouterModule]
                    },] }
        ];
        return LoginRoutingModule;
    }());

    exports.LoginModule = LoginModule;
    exports.LoginRoutingModule = LoginRoutingModule;
    exports.LoginService = LoginService;
    exports.ɵa = LoginComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=login.umd.js.map
