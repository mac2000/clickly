webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_setup_setup_component__ = __webpack_require__("../../../../../src/app/pages/setup/setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profiles_profiles_component__ = __webpack_require__("../../../../../src/app/pages/profiles/profiles.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */],
        pathMatch: 'full'
    },
    {
        path: 'setup',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_setup_setup_component__["a" /* SetupComponent */]
    },
    {
        path: 'profiles',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_profiles_profiles_component__["a" /* ProfilesComponent */]
    },
    {
        path: 'dashboard/:accountId/:propertyId/:profileId',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_not_found_not_found_component__["a" /* NotFoundComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gapi_auth_service__ = __webpack_require__("../../../../../src/gapi/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router, updates, snackBar) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.updates = updates;
        this.snackBar = snackBar;
        // authService.user.subscribe(user => this.router.navigateByUrl(user ? '/profiles' : '/'));
        authService.user.subscribe(function (user) {
            if (!user) {
                return _this.router.navigateByUrl('/');
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updates.available.subscribe(function () {
            _this.notifyAboutAvailableUpdate();
        });
    };
    AppComponent.prototype.notifyAboutAvailableUpdate = function () {
        this.snackBar
            .open('Update available', 'Update', {
            duration: 60000
        })
            .onAction().subscribe(function () {
            document.location.reload();
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__gapi_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_service_worker__["b" /* SwUpdate */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatSnackBar */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_setup_setup_component__ = __webpack_require__("../../../../../src/app/pages/setup/setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gapi_gapi_module__ = __webpack_require__("../../../../../src/gapi/gapi.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_logo_logo_component__ = __webpack_require__("../../../../../src/app/common/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profiles_service__ = __webpack_require__("../../../../../src/app/profiles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_rows_rows_component__ = __webpack_require__("../../../../../src/app/common/rows/rows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__previews_service__ = __webpack_require__("../../../../../src/app/previews.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_select_loading_select_loading_component__ = __webpack_require__("../../../../../src/app/common/select-loading/select-loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profiles_profiles_component__ = __webpack_require__("../../../../../src/app/pages/profiles/profiles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_user_card_user_card_component__ = __webpack_require__("../../../../../src/app/common/user-card/user-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_header_header_component__ = __webpack_require__("../../../../../src/app/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_setup_instructions_setup_instructions_component__ = __webpack_require__("../../../../../src/app/common/setup-instructions/setup-instructions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_dashboard_profile_card_profile_card_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/profile-card/profile-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_dashboard_page_stats_page_stats_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/page-stats/page-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_dashboard_user_stats_user_stats_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/user-stats/user-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_dashboard_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_dashboard_clicks_clicks_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/clicks/clicks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_dashboard_first_first_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/first/first.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_dashboard_clicks_labels_labels_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/clicks/labels/labels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_dashboard_prev_prev_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/prev/prev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_dashboard_next_next_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/next/next.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_dashboard_click_click_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/click/click.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_setup_setup_component__["a" /* SetupComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__common_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__common_rows_rows_component__["a" /* RowsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__common_select_loading_select_loading_component__["a" /* SelectLoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profiles_profiles_component__["a" /* ProfilesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__common_user_card_user_card_component__["a" /* UserCardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__common_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__common_setup_instructions_setup_instructions_component__["a" /* SetupInstructionsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_dashboard_profile_card_profile_card_component__["a" /* ProfileCardComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_dashboard_page_stats_page_stats_component__["a" /* PageStatsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_dashboard_user_stats_user_stats_component__["a" /* UserStatsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_dashboard_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_dashboard_clicks_clicks_component__["a" /* ClicksComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_dashboard_first_first_component__["a" /* FirstComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_dashboard_clicks_labels_labels_component__["a" /* LabelsComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_dashboard_prev_prev_component__["a" /* PrevComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_dashboard_next_next_component__["a" /* NextComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_dashboard_click_click_component__["a" /* ClickComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].production }),
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["n" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["k" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["p" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__gapi_gapi_module__["a" /* GapiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].gapi)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__profiles_service__["a" /* ProfilesService */],
                __WEBPACK_IMPORTED_MODULE_17__previews_service__["a" /* PreviewsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host ::ng-deep app-logo h1 {\n  color: white;\n}\n\napp-user-card {\n  margin-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <app-logo></app-logo>\n  <span style=\"flex: 1 1 auto\"></span>\n  <ng-content></ng-content>\n  <app-user-card></app-user-card>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/common/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/logo/logo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\nh1 {\n  color: #000;\n  color: var(--deeppurple-800, #000);\n  -webkit-transform: translateX(7px);\n          transform: translateX(7px);\n  margin: 0;\n}\n\nspan {\n  color: #000;\n  color: var(--deeppurple-200, #000);\n  display: inline-block;\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Click<span>ly</span></h1>\n"

/***/ }),

/***/ "../../../../../src/app/common/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logo',
            template: __webpack_require__("../../../../../src/app/common/logo/logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/logo/logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/rows/rows.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/rows/rows.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "../../../../../src/app/common/rows/rows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RowsComponent = /** @class */ (function () {
    function RowsComponent() {
    }
    RowsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rows',
            template: __webpack_require__("../../../../../src/app/common/rows/rows.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/rows/rows.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RowsComponent);
    return RowsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/select-loading/select-loading.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Loading&hellip;\" disabled=\"true\"></mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "../../../../../src/app/common/select-loading/select-loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SelectLoadingComponent = /** @class */ (function () {
    function SelectLoadingComponent() {
    }
    SelectLoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-select-loading',
            template: __webpack_require__("../../../../../src/app/common/select-loading/select-loading.component.html")
        })
    ], SelectLoadingComponent);
    return SelectLoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/setup-instructions/setup-instructions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/setup-instructions/setup-instructions.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel expanded=\"true\">\n  <mat-expansion-panel-header>\n    setup instructions\n  </mat-expansion-panel-header>\n  <p>We did not receive any messages from site.</p>\n  <p>Seems that code is not present</p>\n  <h3>Setup instructions</h3>\n  <pre style=\"overflow-x: auto\">{{getCode()}}</pre>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "../../../../../src/app/common/setup-instructions/setup-instructions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupInstructionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var getCode = function (profile) { return "\n<script>\nfunction clicklyGetPageType() {\n  if (window.location.pathname === '/') {\n    return 'home';\n  } else {\n    return 'other';\n  }\n}\nconst s = document.createElement('script');\ns.src = 'https://clickly.marchenko.net.ua/client.js?v=' + Date.now();\ns.setAttribute('data-clickly-tid', '" + profile.propertyId + "');\ns.async = true;\n(document.head || document.documentElement).appendChild(s);\n</script>\n"; };
var SetupInstructionsComponent = /** @class */ (function () {
    function SetupInstructionsComponent() {
    }
    SetupInstructionsComponent.prototype.getCode = function () {
        return getCode(this.profile);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SetupInstructionsComponent.prototype, "profile", void 0);
    SetupInstructionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-setup-instructions',
            template: __webpack_require__("../../../../../src/app/common/setup-instructions/setup-instructions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/setup-instructions/setup-instructions.component.css")]
        })
    ], SetupInstructionsComponent);
    return SetupInstructionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/user-card/user-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nimg {\n  width: auto;\n  height: 36px;\n  margin-right: 5px;\n}\n\nbutton {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/user-card/user-card.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"(authService.user | async).image\"/>\n<button mat-button (click)=\"authService.logout()\">Logout</button>\n<button mat-button (click)=\"authService.revoke()\">Revoke</button>\n"

/***/ }),

/***/ "../../../../../src/app/common/user-card/user-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gapi_auth_service__ = __webpack_require__("../../../../../src/gapi/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserCardComponent = /** @class */ (function () {
    function UserCardComponent(authService) {
        var _this = this;
        this.authService = authService;
        authService.user.subscribe(function (user) {
            if (user) {
                _this.user = user;
            }
        });
    }
    UserCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-card',
            template: __webpack_require__("../../../../../src/app/common/user-card/user-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/user-card/user-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gapi_auth_service__["a" /* AuthService */]])
    ], UserCardComponent);
    return UserCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/click/click.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/click/click.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel expanded=\"true\">\n  <mat-expansion-panel-header>\n    click info\n  </mat-expansion-panel-header>\n\n  <p><b>cd4</b></p>\n  <p>{{click.cd4}}</p>\n\n  <p><b>category</b></p>\n  <p>{{click.ec}}</p>\n\n  <p><b>action</b></p>\n  <p>{{click.ea}}</p>\n\n  <p><b>label</b></p>\n  <p>{{click.el}}</p>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/click/click.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickComponent = /** @class */ (function () {
    function ClickComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ClickComponent.prototype, "click", void 0);
    ClickComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-click',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/click/click.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/click/click.component.css")]
        })
    ], ClickComponent);
    return ClickComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/clicks/clicks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  width: 100%;\n}\n\n.btn {\n  width: 12px;\n}\n\n.mat-icon-button, .mat-icon-button .mat-button-wrapper {\n  width: auto;\n  height: auto;\n  line-height: 1;\n}\n\n.mat-icon {\n  width: 12px;\n  height: 12px;\n  font-size: 12px;\n  line-height: 1;\n}\n\n.rtl {\n  white-space: nowrap;\n  overflow: hidden;\n  /* \"overflow\" value must be different from \"visible\" */\n  text-overflow: ellipsis;\n  max-width: 0;\n  /*width: 70%;*/\n  direction: rtl;\n  text-align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/clicks/clicks.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel expanded=\"true\">\n  <mat-expansion-panel-header>\n    {{data.events.length}} {{title}}\n  </mat-expansion-panel-header>\n  <mat-slide-toggle [(ngModel)]=\"showPercents\">Show percents</mat-slide-toggle>\n  <mat-slide-toggle *ngIf=\"data.events.length > 10\" [(ngModel)]=\"showTop10\">Show top 10</mat-slide-toggle>\n  <table>\n    <thead>\n    <tr>\n      <th></th>\n      <th>Action</th>\n      <th class=\"num\">Count</th>\n      <th class=\"num\">Users</th>\n    </tr>\n    </thead>\n    <tbody>\n    <ng-container *ngFor=\"let item of events\">\n      <tr>\n        <td class=\"btn\">\n          <button mat-icon-button color=\"primary\" (click)=\"doHighlight(item)\">\n            <mat-icon aria-label=\"Highlight\">search</mat-icon>\n          </button>\n        </td>\n        <td class=\"rtl\" [title]=\"item.name\" (click)=\"labels.toggle()\">\n          {{item.name}}\n        </td>\n        <td class=\"num\">\n          <span *ngIf=\"!showPercents\">{{item.count}}</span>\n          <span *ngIf=\"showPercents\">{{(item.count / data.clicks * 100).toFixed(2)}}%</span>\n        </td>\n        <td class=\"num\">\n          <span *ngIf=\"!showPercents\">{{item.users}}</span>\n          <span *ngIf=\"showPercents\">{{(item.users / data.users * 100).toFixed(2)}}%</span>\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"4\">\n          <app-labels [labels]=\"item.labels\" [showPercents]=\"showPercents\" [top10]=\"showTop10\" #labels></app-labels>\n        </td>\n      </tr>\n    </ng-container>\n    </tbody>\n  </table>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/clicks/clicks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClicksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClicksComponent = /** @class */ (function () {
    function ClicksComponent() {
        this.highlight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.showPercents = false;
        this.showTop10 = true;
    }
    Object.defineProperty(ClicksComponent.prototype, "events", {
        get: function () {
            return this.data.events.length < 10 || !this.showTop10
                ? this.data.events
                : this.data.events.slice(0, 10);
        },
        enumerable: true,
        configurable: true
    });
    ClicksComponent.prototype.doHighlight = function (item) {
        this.highlight.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ClicksComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ClicksComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], ClicksComponent.prototype, "highlight", void 0);
    ClicksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clicks',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/clicks/clicks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/clicks/clicks.component.css")]
        })
    ], ClicksComponent);
    return ClicksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/clicks/labels/labels.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  width: 100%;\n}\n\nth {\n  text-align: left;\n  padding-left: 20px;\n  white-space: nowrap;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 0;\n  /*width: 70%;*/\n}\n\ntable.report th {\n  font-weight: 300;\n}\n\nth a {\n  color: blue;\n  color: var(--deeppurple-500, blue);\n}\n\nth i {\n  color: #999;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/clicks/labels/labels.component.html":
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"expanded\" class=\"report\">\n  <tr *ngFor=\"let label of top10 ? labels.slice(0, 10) : labels\">\n    <th [title]=\"label.name\">{{label.name}}</th>\n    <td class=\"num\">\n      <span *ngIf=\"!showPercents\">{{label.count}}</span>\n      <span *ngIf=\"showPercents\">{{(label.count / count * 100).toFixed(2)}}%</span>\n    </td>\n    <td class=\"num\">\n      <span *ngIf=\"!showPercents\">{{label.users}}</span>\n      <span *ngIf=\"showPercents\">{{(label.users / users * 100).toFixed(2)}}%</span>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/clicks/labels/labels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelsComponent = /** @class */ (function () {
    function LabelsComponent() {
        this.showPercents = false;
        this.top10 = true;
        this.expanded = false;
    }
    Object.defineProperty(LabelsComponent.prototype, "count", {
        get: function () {
            return this.labels.map(function (l) { return l.count; }).reduce(function (a, b) { return a + b; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelsComponent.prototype, "users", {
        get: function () {
            return this.labels.map(function (l) { return l.users; }).reduce(function (a, b) { return a + b; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    LabelsComponent.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], LabelsComponent.prototype, "labels", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], LabelsComponent.prototype, "showPercents", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], LabelsComponent.prototype, "top10", void 0);
    LabelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-labels',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/clicks/labels/labels.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/clicks/labels/labels.component.css")]
        })
    ], LabelsComponent);
    return LabelsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\niframe {\n  border: 0;\n  margin: 0;\n  height: 100%;\n  width: 1366px;\n}\n\n.wrapper {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  overflow-y: hidden;\n  overflow-x: auto;\n}\n\naside {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 5px;\n  box-sizing: border-box;\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\naside > * {\n  margin-bottom: 5px;\n}\n\naside > :last-child {\n  margin-bottom: 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header>\n  <mat-slider *ngIf=\"navigated\" [formControl]=\"zoom\" title=\"Zoom\" min=\"0.5\" max=\"1\" step=\"0.1\"\n              style=\"margin-right: 20px\"></mat-slider>\n  <mat-slide-toggle *ngIf=\"navigated\" [formControl]=\"capture\">Inspect</mat-slide-toggle>\n</app-header>\n<main>\n  <div class=\"wrapper\" [ngClass]=\"{'responsive': responsive}\">\n    <iframe #frame [src]=\"url\"></iframe>\n  </div>\n  <aside>\n    <app-setup-instructions *ngIf=\"showSetup\" [profile]=\"profile\"></app-setup-instructions>\n    <mat-card *ngIf=\"loading\">\n      <mat-card-title>Loading&hellip;</mat-card-title>\n      <mat-card-content>\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n      </mat-card-content>\n    </mat-card>\n    <app-page-stats *ngIf=\"data\" [data]=\"data\"></app-page-stats>\n    <app-user-stats *ngIf=\"data\" [data]=\"data\" [click]=\"click\"></app-user-stats>\n    <app-click *ngIf=\"click\" [click]=\"click\"></app-click>\n    <app-prev *ngIf=\"click && data\" [data]=\"data\" [click]=\"click\" (highlight)=\"onHighlight($event)\"></app-prev>\n    <app-next *ngIf=\"click && data\" [data]=\"data\" [click]=\"click\" (highlight)=\"onHighlight($event)\"></app-next>\n    <app-first *ngIf=\"data\" [data]=\"data\" (highlight)=\"onHighlight($event)\"></app-first>\n    <app-navigation *ngIf=\"navigated\" [data]=\"navigated\"></app-navigation>\n    <app-profile-card *ngIf=\"profile\" [profile]=\"profile\"></app-profile-card>\n  </aside>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gapi_management_service__ = __webpack_require__("../../../../../src/gapi/management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gapi_ga_ga_service__ = __webpack_require__("../../../../../src/gapi/ga/ga.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(activatedRoute, managementService, gaService, router, zone, changeDetectorRef, applicationRef, sanitizer) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.managementService = managementService;
        this.gaService = gaService;
        this.router = router;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.applicationRef = applicationRef;
        this.sanitizer = sanitizer;
        this.loading = false;
        this.showSetup = false;
        this.zoom = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](localStorage.getItem('zoom') || '0.8');
        this.capture = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](false);
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('about:blank');
        activatedRoute.paramMap.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["e" /* switchMap */])(function (params) {
            var accountId = params.get('accountId') || '';
            var propertyId = params.get('propertyId') || '';
            var profileId = params.get('profileId') || '';
            return _this.managementService.getWebSites().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* mergeMap */])(function (items) { return items; }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (item) {
                return item.accountId === accountId && item.propertyId === propertyId && item.profileId === profileId;
            }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["f" /* take */])(1));
        })).subscribe(function (profile) {
            if (!profile) {
                return _this.router.navigateByUrl('/profiles');
            }
            _this.profile = profile;
            _this.url = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.profile.websiteUrl);
        });
        this.zoom.valueChanges.subscribe(function (value) {
            localStorage.setItem('zoom', value);
            _this.postMessage('zoom', { value: value });
        });
        this.capture.valueChanges.subscribe(function (value) {
            _this.postMessage(value ? 'capture' : 'release');
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.navigated) {
                _this.showSetup = true;
            }
        }, 5000);
    };
    DashboardComponent.prototype.onHighlight = function (event) {
        this.postMessage('highlight', { selector: event.name });
    };
    DashboardComponent.prototype.onMessage = function (event) {
        if (event.data && event.data['clickly']) {
            switch (event.data['action']) {
                case 'navigated':
                    return this.onNavigated(event.data);
                case 'click':
                    return this.onClick(event.data);
                default:
                    return console.warn('unknown', event.data);
            }
        }
    };
    DashboardComponent.prototype.onNavigated = function (data) {
        var _this = this;
        this.navigated = data;
        this.data = null;
        this.loading = true;
        this.showSetup = false;
        this.postMessage('zoom', { value: this.zoom.value });
        this.getData(data).subscribe(function (rows) {
            _this.data = rows;
            _this.loading = false;
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    DashboardComponent.prototype.getData = function (data) {
        return this.gaService
            .get({
            startDate: '8daysAgo',
            endDate: 'yesterday',
            id: this.profile.profileId,
            metrics: ['totalEvents'],
            dimensions: ['eventCategory', 'eventAction', 'eventLabel', 'dimension1', 'dimension2'],
            filters: Object(__WEBPACK_IMPORTED_MODULE_6__gapi_ga_ga_service__["b" /* and */])(Object(__WEBPACK_IMPORTED_MODULE_6__gapi_ga_ga_service__["c" /* dimension */])('dimension4').exactMatch(data.cd4), Object(__WEBPACK_IMPORTED_MODULE_6__gapi_ga_ga_service__["c" /* dimension */])('deviceCategory').exactMatch('desktop'))
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (rows) { return rows.map(function (row) { return ({
            eventCategory: row[0],
            eventAction: row[1],
            eventLabel: row[2],
            clientId: parseInt(row[3], 10),
            timestamp: parseInt(row[4], 10)
        }); }).filter(function (row) { return !isNaN(row.clientId) && !isNaN(row.timestamp); }); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (rows) { return rows.sort(function (a, b) { return a.timestamp - b.timestamp; }); }));
    };
    DashboardComponent.prototype.onClick = function (click) {
        console.log('CLICK', click);
        this.click = click;
    };
    DashboardComponent.prototype.postMessage = function (action, payload) {
        if (payload === void 0) { payload = {}; }
        this.frame.nativeElement.contentWindow.postMessage(__assign({}, payload, { action: action, clickly: true }), '*');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('frame'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DashboardComponent.prototype, "frame", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:message', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MessageEvent]),
        __metadata("design:returntype", void 0)
    ], DashboardComponent.prototype, "onMessage", null);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__gapi_management_service__["a" /* ManagementService */],
            __WEBPACK_IMPORTED_MODULE_6__gapi_ga_ga_service__["a" /* GaService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/first/first.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/first/first.component.html":
/***/ (function(module, exports) {

module.exports = "<app-clicks *ngIf=\"processed\" title=\"first clicks\" [data]=\"processed\" (highlight)=\"onHighlight($event)\"></app-clicks>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/first/first.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/pages/dashboard/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
        this.highlight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    FirstComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var events = this.data
            .filter(function (i) { return i && i.eventAction === 'view'; })
            .map(function (c) { return _this.data
            .filter(function (i) { return c.clientId === i.clientId && c.timestamp < i.timestamp && i.eventAction !== 'view'; })
            .sort(function (a, b) { return a.timestamp - b.timestamp; })
            .shift(); })
            .filter(function (e) { return !!e; });
        this.processed = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* countEvents */])(events);
    };
    FirstComponent.prototype.onHighlight = function (event) {
        this.highlight.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FirstComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], FirstComponent.prototype, "highlight", void 0);
    FirstComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-first',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/first/first.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/first/first.component.css")]
        })
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  word-wrap: break-word;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    Navigated\n  </mat-expansion-panel-header>\n  <p><a target=\"_blank\" [title]=\"title\" [href]=\"url\">{{url}}</a></p>\n  <p>{{dimension4}}</p>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    Object.defineProperty(NavigationComponent.prototype, "dimension4", {
        get: function () {
            return this.data ? this.data.cd4 || '' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "url", {
        get: function () {
            return this.data ? this.data.ec || '' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "title", {
        get: function () {
            return this.data ? this.data.el || '' : '';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "data", void 0);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/navigation/navigation.component.css")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/next/next.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/next/next.component.html":
/***/ (function(module, exports) {

module.exports = "<app-clicks *ngIf=\"processed\" title=\"next clicks\" [data]=\"processed\" (highlight)=\"onHighlight($event)\"></app-clicks>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/next/next.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/pages/dashboard/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NextComponent = /** @class */ (function () {
    function NextComponent() {
        this.highlight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NextComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var events = this.data
            .filter(function (item) { return _this.click.ea.indexOf(item.eventAction) === 0; })
            .map(function (event) { return _this.findNext(event); });
        this.processed = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* countEvents */])(events);
    };
    NextComponent.prototype.onHighlight = function (event) {
        this.highlight.emit(event);
    };
    NextComponent.prototype.findNext = function (event) {
        return this.data.filter(function (item) { return event.clientId === item.clientId && event.timestamp < item.timestamp; })
            .sort(function (a, b) { return a.timestamp - b.timestamp; })
            .shift() || Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* buildExitEvent */])(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], NextComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NextComponent.prototype, "click", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], NextComponent.prototype, "highlight", void 0);
    NextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-next',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/next/next.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/next/next.component.css")]
        })
    ], NextComponent);
    return NextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/page-stats/page-stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/page-stats/page-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel expanded=\"true\">\n  <mat-expansion-panel-header>\n    {{totalEvents}} events\n  </mat-expansion-panel-header>\n  <table class=\"report\">\n    <tr>\n      <th>Views</th>\n      <td>{{totalPageViews}}</td>\n      <td>{{(totalPageViews / totalEvents * 100).toFixed(2)}}%</td>\n    </tr>\n    <tr>\n      <th>Clicks</th>\n      <td>{{totalClicks}}</td>\n      <td>{{(totalClicks / totalEvents * 100).toFixed(2)}}%</td>\n    </tr>\n    <tr>\n      <th>First</th>\n      <td>{{firstClicksAfterView}}</td>\n      <td>{{(firstClicksAfterView / totalEvents * 100).toFixed(2)}}%</td>\n    </tr>\n    <tr>\n      <th>Exits</th>\n      <td>{{exits}}</td>\n      <td>{{(exits / totalEvents * 100).toFixed(2)}}%</td>\n    </tr>\n  </table>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/page-stats/page-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageStatsComponent = /** @class */ (function () {
    function PageStatsComponent() {
        this.totalEvents = 0;
        this.totalClicks = 0;
        this.totalPageViews = 0;
        this.firstClicksAfterView = 0;
        this.exits = 0;
    }
    PageStatsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.totalEvents = this.data.length;
        this.totalClicks = this.data.filter(function (item) { return item.eventAction !== 'view'; }).length;
        this.totalPageViews = this.data.filter(function (item) { return item.eventAction === 'view'; }).length;
        var first = this.data
            .filter(function (i) { return i.eventAction === 'view'; })
            .map(function (c) { return _this.data
            .filter(function (i) { return c.clientId === i.clientId && c.timestamp < i.timestamp; })
            .sort(function (a, b) { return a.timestamp - b.timestamp; })
            .shift(); });
        this.firstClicksAfterView = first.filter(function (c) { return !!c; }).length;
        this.exits = first.length - this.firstClicksAfterView;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PageStatsComponent.prototype, "data", void 0);
    PageStatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-stats',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/page-stats/page-stats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/page-stats/page-stats.component.css")]
        })
    ], PageStatsComponent);
    return PageStatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/prev/prev.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/prev/prev.component.html":
/***/ (function(module, exports) {

module.exports = "<app-clicks *ngIf=\"processed\" title=\"prev clicks\" [data]=\"processed\" (highlight)=\"onHighlight($event)\"></app-clicks>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/prev/prev.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrevComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../src/app/pages/dashboard/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrevComponent = /** @class */ (function () {
    function PrevComponent() {
        this.highlight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PrevComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var events = this.data
            .filter(function (item) { return _this.click.ea.indexOf(item.eventAction) === 0; })
            .map(function (event) { return _this.findPrev(event); });
        this.processed = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* countEvents */])(events);
    };
    PrevComponent.prototype.onHighlight = function (event) {
        this.highlight.emit(event);
    };
    PrevComponent.prototype.findPrev = function (event) {
        return this.data.filter(function (item) { return event.clientId === item.clientId && event.timestamp > item.timestamp; })
            .sort(function (a, b) { return a.timestamp - b.timestamp; })
            .pop() || Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* buildExitEvent */])(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PrevComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], PrevComponent.prototype, "click", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PrevComponent.prototype, "highlight", void 0);
    PrevComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prev',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/prev/prev.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/prev/prev.component.css")]
        })
    ], PrevComponent);
    return PrevComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/profile-card/profile-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/profile-card/profile-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    Profile\n  </mat-expansion-panel-header>\n  <p><b>Account</b></p>\n  <p>{{profile.accountName}}<br>{{profile.accountId}}</p>\n  <p><b>Property</b></p>\n  <p>{{profile.propertyName}}<br>{{profile.propertyId}}</p>\n  <p><b>Profile</b></p>\n  <p>{{profile.profileName}}<br>{{profile.profileId}}</p>\n  <mat-action-row>\n    <button mat-button routerLink=\"/profiles\">Other profiles</button>\n  </mat-action-row>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/profile-card/profile-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileCardComponent = /** @class */ (function () {
    function ProfileCardComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ProfileCardComponent.prototype, "profile", void 0);
    ProfileCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-card',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/profile-card/profile-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/profile-card/profile-card.component.css")]
        })
    ], ProfileCardComponent);
    return ProfileCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/user-stats/user-stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/user-stats/user-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel expanded=\"true\">\n  <mat-expansion-panel-header>\n    {{uniqueUsersCount}} users\n  </mat-expansion-panel-header>\n  <table class=\"report\">\n    <tr>\n      <th></th>\n      <th>min</th>\n      <th>avg</th>\n      <th>max</th>\n    </tr>\n    <tr>\n      <th>Events</th>\n      <td>{{minEvents}}</td>\n      <td>{{avgEvents | number:'1.0-0'}}</td>\n      <td>{{maxEvents}}</td>\n    </tr>\n    <tr>\n      <th>Views</th>\n      <td>{{minViews}}</td>\n      <td>{{avgViews | number:'1.0-0'}}</td>\n      <td>{{maxViews}}</td>\n    </tr>\n    <tr>\n      <th>Clicks</th>\n      <td>{{minClicks}}</td>\n      <td>{{avgClicks | number:'1.0-0'}}</td>\n      <td>{{maxClicks}}</td>\n    </tr>\n  </table>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/user-stats/user-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserStatsComponent = /** @class */ (function () {
    function UserStatsComponent() {
        this.uniqueUsersCount = 0;
        this.minEvents = 0;
        this.maxEvents = 0;
        this.avgEvents = 0;
        this.minViews = 0;
        this.maxViews = 0;
        this.avgViews = 0;
        this.minClicks = 0;
        this.maxClicks = 0;
        this.avgClicks = 0;
    }
    UserStatsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var events = this.click
            ? this.data
                .filter(function (item) { return _this.click && _this.click.ea.indexOf(item.eventAction) === 0; })
            : this.data;
        var users = Array.from(new Set(events.map(function (item) { return item.clientId; })));
        this.uniqueUsersCount = users.length;
        var stats = users
            .map(function (clientId) { return ({
            clientId: clientId,
            events: _this.data.filter(function (item) { return item.clientId === clientId; })
        }); })
            .map(function (user) { return ({
            total: user.events.length,
            views: user.events.filter(function (event) { return event.eventAction === 'view'; }).length,
            clicks: user.events.filter(function (event) { return event.eventAction !== 'view'; }).length
        }); });
        var totals = stats.map(function (stat) { return stat.total; });
        var views = stats.map(function (stat) { return stat.views; });
        var clicks = stats.map(function (stat) { return stat.clicks; });
        this.minEvents = Math.min.apply(null, totals);
        this.maxEvents = Math.max.apply(null, totals);
        this.avgEvents = (totals.reduce(function (a, b) { return a + b; }, 0) / totals.length);
        this.minViews = Math.min.apply(null, views);
        this.maxViews = Math.max.apply(null, views);
        this.avgViews = (views.reduce(function (a, b) { return a + b; }, 0) / views.length);
        this.minClicks = Math.min.apply(null, clicks);
        this.maxClicks = Math.max.apply(null, clicks);
        this.avgClicks = (clicks.reduce(function (a, b) { return a + b; }, 0) / clicks.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], UserStatsComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], UserStatsComponent.prototype, "click", void 0);
    UserStatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-stats',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/user-stats/user-stats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/user-stats/user-stats.component.css")]
        })
    ], UserStatsComponent);
    return UserStatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return countEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildExitEvent; });
var uniqueActions = function (events) { return events
    ? Array.from(new Set(events.map(function (e) { return e.eventAction; })))
    : []; };
var uniqueUsers = function (events) { return events
    ? Array.from(new Set(events.map(function (e) { return e.clientId; })))
    : []; };
var uniqueLabels = function (events) { return events
    ? Array.from(new Set(events.map(function (e) { return e.eventLabel; })))
    : []; };
var uniqueUsersCount = function (events) { return uniqueUsers(events).length; };
var clicksCount = function (events) { return events.filter(function (e) { return e.eventAction !== 'view'; }).length; };
var countEvents = function (events) {
    var data = uniqueActions(events)
        .map(function (action) { return ({
        action: action,
        events: events.filter(function (e) { return e.eventAction === action; })
    }); })
        .map(function (action) { return ({
        name: action.action,
        count: action.events.length,
        users: uniqueUsersCount(action.events),
        labels: uniqueLabels(action.events)
            .map(function (label) { return ({
            name: label,
            count: action.events.filter(function (e) { return e.eventLabel === label; }).length,
            users: uniqueUsersCount(action.events.filter(function (e) { return e.eventLabel === label; }))
        }); })
            .sort(function (a, b) { return b.count - a.count; })
    }); })
        .sort(function (a, b) { return b.count - a.count; });
    return {
        events: data,
        clicks: clicksCount(events),
        users: uniqueUsersCount(events)
    };
};
var buildExitEvent = function (event) { return ({
    eventCategory: 'exit',
    eventAction: 'exit',
    eventLabel: 'exit',
    clientId: event.clientId,
    timestamp: event.timestamp
}); };


/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\napp-logo {\n  margin-bottom: 36px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-logo></app-logo>\n<button mat-raised-button color=\"primary\" (click)=\"authService.login()\">Sign in</button>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gapi_auth_service__ = __webpack_require__("../../../../../src/gapi/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        authService.user.subscribe(function (user) {
            if (user) {
                return _this.router.navigateByUrl('/profiles');
            }
        });
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gapi_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<app-logo></app-logo>\n<p>Not Found</p>\n<p><a mat-raised-button color=\"primary\" routerLink=\"/\">Back</a></p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/profiles/profiles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z8 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: white;\n  margin: 36px;\n  padding-top: 24px;\n}\n\nmat-form-field {\n  margin-left: 24px;\n  margin-right: 24px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/profiles/profiles.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"mat-elevation-z8\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  <mat-table [dataSource]=\"dataSource\">\n    <ng-container matColumnDef=\"accountName\">\n      <mat-header-cell *matHeaderCellDef>Account</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.accountName}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"propertyName\">\n      <mat-header-cell *matHeaderCellDef>Property</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.propertyName}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"profileName\">\n      <mat-header-cell *matHeaderCellDef>Profile</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.profileName}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"websiteUrl\">\n      <mat-header-cell *matHeaderCellDef>URL</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"><a target=\"_blank\" [href]=\"element.websiteUrl\">{{element.websiteUrl}}</a>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n             routerLink=\"/dashboard/{{row.accountId}}/{{row.propertyId}}/{{row.profileId}}\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/profiles/profiles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gapi_management_service__ = __webpack_require__("../../../../../src/gapi/management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilesComponent = /** @class */ (function () {
    function ProfilesComponent(managementService) {
        var _this = this;
        this.managementService = managementService;
        this.displayedColumns = ['accountName', 'propertyName', 'profileName', 'websiteUrl'];
        managementService.getWebSites().subscribe(function (profiles) { return _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatTableDataSource */](profiles); });
    }
    ProfilesComponent.prototype.applyFilter = function (value) {
        this.dataSource.filter = value.trim().toLowerCase();
    };
    ProfilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profiles',
            template: __webpack_require__("../../../../../src/app/pages/profiles/profiles.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/profiles/profiles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gapi_management_service__["a" /* ManagementService */]])
    ], ProfilesComponent);
    return ProfilesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/setup/setup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/setup/setup.component.html":
/***/ (function(module, exports) {

module.exports = "<app-logo></app-logo>\n\n<div *ngIf=\"!profile.value\">\n  <p>\n    <mat-form-field *ngIf=\"accounts.length\">\n      <mat-select placeholder=\"Account\" [formControl]=\"account\">\n        <mat-option *ngFor=\"let option of accounts\" [value]=\"option\">{{option.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <app-select-loading *ngIf=\"!accounts.length\"></app-select-loading>\n  </p>\n  <p>\n    <mat-form-field *ngIf=\"account.value && properties.length\">\n      <mat-select placeholder=\"Property\" [formControl]=\"property\">\n        <mat-option *ngFor=\"let option of properties\" [value]=\"option\">{{option.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <app-select-loading *ngIf=\"account.value && !properties.length\"></app-select-loading>\n  </p>\n  <p>\n    <mat-form-field *ngIf=\"property.value && profiles.length\">\n      <mat-select placeholder=\"Profile\" [formControl]=\"profile\">\n        <mat-option *ngFor=\"let option of profiles\" [value]=\"option\">{{option.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <app-select-loading *ngIf=\"property.value && !profiles.length\"></app-select-loading>\n  </p>\n</div>\n\n<div *ngIf=\"profile.value && !speed\">\n  <p>\n    <mat-spinner style=\"opacity:.25\"></mat-spinner>\n  </p>\n</div>\n\n<mat-card *ngIf=\"profile.value && speed\">\n  <mat-card-header>\n    <mat-card-title>{{profile.value.name}}</mat-card-title>\n    <mat-card-subtitle>{{profile.value.websiteUrl}}</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image [alt]=\"profile.value.name\" [src]=\"speed.img.src\">\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"add()\">Add</button>\n    <button mat-button routerLink=\"/\">Cancel</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/setup/setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gapi_auth_service__ = __webpack_require__("../../../../../src/gapi/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gapi_management_service__ = __webpack_require__("../../../../../src/gapi/management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profiles_service__ = __webpack_require__("../../../../../src/app/profiles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__previews_service__ = __webpack_require__("../../../../../src/app/previews.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SetupComponent = /** @class */ (function () {
    function SetupComponent(authService, managementService, profilesService, previewsService, router) {
        this.authService = authService;
        this.managementService = managementService;
        this.profilesService = profilesService;
        this.previewsService = previewsService;
        this.router = router;
        this.accounts = [];
        this.properties = [];
        this.account = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.property = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.profile = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    SetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.managementService.getAccounts().subscribe(function (accounts) { return _this.accounts = accounts || []; });
        this.account.valueChanges.subscribe(function (account) {
            _this.property.setValue(null);
            _this.profile.setValue(null);
            _this.managementService.getProperties(account).subscribe(function (properties) { return _this.properties = properties || []; });
        });
        this.property.valueChanges.subscribe(function (property) {
            _this.profile.setValue(null);
            _this.managementService.getProfiles(property).subscribe(function (profiles) { return _this.profiles = profiles || []; });
        });
        this.profile.valueChanges.subscribe(function (profile) {
            if (!profile) {
                return;
            }
            _this.previewsService.get(profile.websiteUrl).subscribe(function (response) {
                _this.speed = response;
            });
        });
    };
    SetupComponent.prototype.add = function () {
        if (!this.profile.value) {
            return;
        }
        // this.profilesService.add(this.profile.value);
        this.router.navigate(['dashboard', this.profile.value.id]).then();
    };
    SetupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-setup',
            template: __webpack_require__("../../../../../src/app/pages/setup/setup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/setup/setup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gapi_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__gapi_management_service__["a" /* ManagementService */],
            __WEBPACK_IMPORTED_MODULE_5__profiles_service__["a" /* ProfilesService */],
            __WEBPACK_IMPORTED_MODULE_6__previews_service__["a" /* PreviewsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/previews.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gapi_page_speed_service__ = __webpack_require__("../../../../../src/gapi/page-speed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewsService = /** @class */ (function () {
    function PreviewsService(pageSpeedService) {
        this.pageSpeedService = pageSpeedService;
    }
    PreviewsService.prototype.get = function (url) {
        var key = "pagespeed:" + url;
        var saved = localStorage.getItem(key);
        return saved
            ? Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(JSON.parse(saved))
            : this.pageSpeedService.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["g" /* tap */])(function (response) { return localStorage.setItem(key, JSON.stringify(response)); }));
    };
    PreviewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gapi_page_speed_service__["a" /* PageSpeedService */]])
    ], PreviewsService);
    return PreviewsService;
}());



/***/ }),

/***/ "../../../../../src/app/profiles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfilesService = /** @class */ (function () {
    function ProfilesService() {
    }
    ProfilesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ProfilesService);
    return ProfilesService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    gapi: {
        clientId: '814796251078-vqbc1nd9790dj8fn93a0gspavqdsalmp.apps.googleusercontent.com',
        apiKey: 'AIzaSyBSvRP4rM2TktEGOgTMn_3R4O03kkvzNLI'
    }
};


/***/ }),

/***/ "../../../../../src/gapi/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var mapCurrentUser = function (currentUser) {
    var basicProfile = currentUser ? currentUser.getBasicProfile() : null;
    return basicProfile ? {
        id: basicProfile.getId(),
        email: basicProfile.getEmail(),
        name: basicProfile.getName(),
        image: basicProfile.getImageUrl()
    } : null;
};
var AuthService = /** @class */ (function () {
    function AuthService(gapi) {
        var _this = this;
        this.gapi = gapi;
        this.isSignedInEventName = 'app.gapi.auth2.isSignedIn';
        this.gapi.auth2.getAuthInstance().isSignedIn.listen(function (isSignedIn) {
            window.dispatchEvent(new CustomEvent(_this.isSignedInEventName, { detail: isSignedIn }));
        });
        this.isSignedIn = Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromEvent__["a" /* fromEvent */])(window, this.isSignedInEventName)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (event) { return event.detail; }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* startWith */])(this.gapi.auth2.getAuthInstance().isSignedIn.get()));
        this.user = this.isSignedIn.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (isSignedIn) { return isSignedIn
            ? mapCurrentUser(_this.gapi.auth2.getAuthInstance().currentUser.get())
            : null; }));
    }
    AuthService.prototype.login = function () {
        this.gapi.auth2.getAuthInstance().signIn();
    };
    AuthService.prototype.logout = function () {
        this.gapi.auth2.getAuthInstance().signOut();
    };
    AuthService.prototype.revoke = function () {
        this.gapi.auth2.getAuthInstance().disconnect();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('gapi')),
        __metadata("design:paramtypes", [Object])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/gapi/enums/dimension-expressions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DimensionExpressions; });
var DimensionExpressions;
(function (DimensionExpressions) {
    DimensionExpressions["ExactMatch"] = "==";
    DimensionExpressions["DoesNotMatch"] = "!=";
    DimensionExpressions["ContainsSubstring"] = "=@";
    DimensionExpressions["DoesNotContainSubstring"] = "!@";
    DimensionExpressions["MatchRegularExpression"] = "=~";
    DimensionExpressions["DoesNotMatchRegularExpression"] = "!~";
})(DimensionExpressions || (DimensionExpressions = {}));


/***/ }),

/***/ "../../../../../src/gapi/enums/metric-expressions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricExpressions; });
var MetricExpressions;
(function (MetricExpressions) {
    MetricExpressions["Equals"] = "==";
    MetricExpressions["DoesNotEqual"] = "!=";
    MetricExpressions["GreaterThan"] = ">";
    MetricExpressions["LessThan"] = "<";
    MetricExpressions["GreaterThanOrEqualTo"] = ">=";
    MetricExpressions["LessThanOrEqualTo"] = "<=";
})(MetricExpressions || (MetricExpressions = {}));


/***/ }),

/***/ "../../../../../src/gapi/ga/ga.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export metric */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return and; });
/* unused harmony export or */
/* unused harmony export asc */
/* unused harmony export desc */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums_metric_expressions__ = __webpack_require__("../../../../../src/gapi/enums/metric-expressions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_dimension_expressions__ = __webpack_require__("../../../../../src/gapi/enums/dimension-expressions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var _metric = function (name, expression, value) { return ({
    metric: name,
    expression: expression,
    value: value
}); };
var _dimension = function (name, expression, value) { return ({
    dimension: name,
    expression: expression,
    value: value
}); };
// noinspection JSUnusedGlobalSymbols
var metric = function (name) { return ({
    equals: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_2__enums_metric_expressions__["a" /* MetricExpressions */].Equals, value); },
    doesNotEqual: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_2__enums_metric_expressions__["a" /* MetricExpressions */].DoesNotEqual, value); },
    greaterThan: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_2__enums_metric_expressions__["a" /* MetricExpressions */].GreaterThan, value); },
    lessThan: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_2__enums_metric_expressions__["a" /* MetricExpressions */].LessThan, value); },
    greaterThanOrEqualTo: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_2__enums_metric_expressions__["a" /* MetricExpressions */].GreaterThanOrEqualTo, value); },
    lessThanOrEqualTo: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_2__enums_metric_expressions__["a" /* MetricExpressions */].LessThanOrEqualTo, value); }
}); };
// noinspection JSUnusedGlobalSymbols
var dimension = function (name) { return ({
    exactMatch: function (value) { return _dimension(name, __WEBPACK_IMPORTED_MODULE_3__enums_dimension_expressions__["a" /* DimensionExpressions */].ExactMatch, value); },
    doesNotMatch: function (value) { return _dimension(name, __WEBPACK_IMPORTED_MODULE_3__enums_dimension_expressions__["a" /* DimensionExpressions */].DoesNotMatch, value); },
    containsSubstring: function (value) { return _dimension(name, __WEBPACK_IMPORTED_MODULE_3__enums_dimension_expressions__["a" /* DimensionExpressions */].ContainsSubstring, value); },
    doesNotContainSubstring: function (value) { return _dimension(name, __WEBPACK_IMPORTED_MODULE_3__enums_dimension_expressions__["a" /* DimensionExpressions */].DoesNotContainSubstring, value); },
    matchRegularExpression: function (value) { return _dimension(name, __WEBPACK_IMPORTED_MODULE_3__enums_dimension_expressions__["a" /* DimensionExpressions */].MatchRegularExpression, value); },
    doesNotMatchRegularExpression: function (value) {
        return _dimension(name, __WEBPACK_IMPORTED_MODULE_3__enums_dimension_expressions__["a" /* DimensionExpressions */].DoesNotMatchRegularExpression, value);
    }
}); };
var and = function () {
    var filters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        filters[_i] = arguments[_i];
    }
    return ({
        operator: 'and',
        filters: filters
    });
};
var or = function () {
    var filters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        filters[_i] = arguments[_i];
    }
    return ({
        operator: 'or',
        filters: filters
    });
};
var asc = function (name) { return ({
    name: name,
    desc: false
}); };
var desc = function (name) { return ({
    name: name,
    desc: true
}); };
var prependGaIfNeeded = function (input) { return input.indexOf('ga:') === 0
    ? input
    : "ga:" + input; };
var dateToString = function (input) { return input.toISOString().split('T').shift() || ''; };
var mapGaRequestDate = function (input) {
    if (input instanceof Date) {
        return dateToString(input);
    }
    return input;
};
var stringifyFilter = function (filter) {
    var name = 'metric' in filter
        ? filter.metric
        : filter.dimension;
    return "" + prependGaIfNeeded(name) + filter.expression + filter.value;
};
var stringifyCollection = function (collection) {
    return collection.filters
        .map(function (item) { return 'operator' in item
        ? stringifyCollection(item)
        : stringifyFilter(item); })
        .join(collection.operator === 'and' ? ';' : ',');
};
var mapGaRequest = function (input) {
    var output = {
        'start-date': mapGaRequestDate(input.startDate),
        'end-date': mapGaRequestDate(input.endDate),
        ids: prependGaIfNeeded(input.id),
        metrics: input.metrics.map(prependGaIfNeeded).join(',')
    };
    if (input.dimensions && input.dimensions.length) {
        output.dimensions = input.dimensions.map(prependGaIfNeeded).join(',');
    }
    if (input.filters) {
        output.filters = 'operator' in input.filters
            ? stringifyCollection(input.filters)
            : stringifyFilter(input.filters);
    }
    if (input.sort && input.sort.length) {
        output.sort = input.sort
            .map(function (sort) { return "" + (sort.desc ? '-' : '') + prependGaIfNeeded(sort.name); })
            .join(',');
    }
    // https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters
    return output;
};
var GaService = /** @class */ (function () {
    function GaService(gapi) {
        this.gapi = gapi;
        this.limit = 10000;
    }
    GaService.prototype.get = function (params) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__["a" /* fromPromise */])(this.retrieveAsync(params));
    };
    GaService.prototype.retrieveAsync = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var start, total, items, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = 1;
                        total = 0;
                        items = [];
                        _a.label = 1;
                    case 1: return [4 /*yield*/, this.gapi.client.analytics.data.ga.get(Object.assign({}, mapGaRequest(params), {
                            'fields': "rows,totalResults",
                            'max-results': this.limit,
                            'start-index': start
                        }))];
                    case 2:
                        response = _a.sent();
                        total = response.result.totalResults;
                        start = start + this.limit;
                        items = items.concat(response.result.rows);
                        _a.label = 3;
                    case 3:
                        if (start < total) return [3 /*break*/, 1];
                        _a.label = 4;
                    case 4: return [2 /*return*/, items];
                }
            });
        });
    };
    GaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('gapi')),
        __metadata("design:paramtypes", [Object])
    ], GaService);
    return GaService;
}());



/***/ }),

/***/ "../../../../../src/gapi/gapi.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getgapi */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GapiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/gapi/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__management_service__ = __webpack_require__("../../../../../src/gapi/management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ga_ga_service__ = __webpack_require__("../../../../../src/gapi/ga/ga.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rt_rt_service__ = __webpack_require__("../../../../../src/gapi/rt/rt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_speed_service__ = __webpack_require__("../../../../../src/gapi/page-speed.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var defaultScopes = [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
];
var mapConfiguration = function (configuration) { return ({
    clientId: configuration.clientId,
    scope: (configuration.scope || defaultScopes).join(' ')
}); };
var onAppInitialize = function (configuration) { return function () { return new Promise(function (resolve) {
    var script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = function () { return gapi
        .load('client:analytics', function () { return gapi.client
        .init(mapConfiguration(configuration))
        .then(resolve); }); };
    document.body.appendChild(script);
}); }; };
function getgapi() {
    return gapi;
}
var GapiModule = /** @class */ (function () {
    function GapiModule() {
    }
    GapiModule_1 = GapiModule;
    GapiModule.forRoot = function (configuration) {
        return {
            ngModule: GapiModule_1,
            providers: [
                {
                    provide: 'configuration',
                    useValue: configuration
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */],
                    useFactory: onAppInitialize,
                    multi: true,
                    deps: ['configuration']
                },
                {
                    provide: 'gapi',
                    useFactory: getgapi
                },
                __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_3__management_service__["a" /* ManagementService */],
                __WEBPACK_IMPORTED_MODULE_4__ga_ga_service__["a" /* GaService */],
                __WEBPACK_IMPORTED_MODULE_5__rt_rt_service__["a" /* RtService */],
                __WEBPACK_IMPORTED_MODULE_7__page_speed_service__["a" /* PageSpeedService */]
            ]
        };
    };
    GapiModule = GapiModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: []
        })
    ], GapiModule);
    return GapiModule;
    var GapiModule_1;
}());



/***/ }),

/***/ "../../../../../src/gapi/management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ManagementService = /** @class */ (function () {
    function ManagementService(gapi) {
        this.gapi = gapi;
        this.limit = 1000;
    }
    ManagementService.prototype.getSummary = function () {
        var cb = this.gapi.client.analytics.management.accountSummaries.list;
        var params = {
            fields: 'items(id,name,webProperties(id,name,level,websiteUrl,profiles(id,name,type)))'
        };
        return this.retrieve(cb, params);
    };
    ManagementService.prototype.getFlatSummary = function () {
        return this.getSummary().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(this.flatifySummary));
    };
    ManagementService.prototype.getWebSites = function () {
        return this.getFlatSummary()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (items) { return items.filter(function (item) { return !!item.websiteUrl; }).filter(function (item) { return item.type === 'WEB'; }); }));
    };
    ManagementService.prototype.flatifySummary = function (accounts) {
        return accounts
            .map(function (account) { return account.webProperties.map(function (property) { return ({
            accountId: account.id,
            accountName: account.name,
            propertyId: property.id,
            propertyName: property.name,
            level: property.level,
            websiteUrl: property.websiteUrl,
            profiles: property.profiles
        }); }); })
            .reduce(function (a, b) { return a.concat(b); }, [])
            .map(function (property) { return property.profiles.map(function (profile) { return ({
            accountId: property.accountId,
            accountName: property.accountName,
            propertyId: property.propertyId,
            propertyName: property.propertyName,
            level: property.level,
            websiteUrl: property.websiteUrl,
            profileId: profile.id,
            profileName: profile.name,
            type: profile.type
        }); }); })
            .reduce(function (a, b) { return a.concat(b); }, []);
    };
    ManagementService.prototype.getAccounts = function () {
        var cb = this.gapi.client.analytics.management.accounts.list;
        var params = { fields: 'items(id,name)' };
        return this.retrieve(cb, params);
    };
    ManagementService.prototype.getProperties = function (account) {
        if (!account) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]);
        }
        var cb = this.gapi.client.analytics.management.webproperties.list;
        var params = {
            fields: 'items(id,name,accountId)',
            accountId: account.id
        };
        return this.retrieve(cb, params);
    };
    ManagementService.prototype.getProfiles = function (property) {
        if (!property) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]);
        }
        var cb = this.gapi.client.analytics.management.profiles.list;
        var params = {
            fields: 'items(id,name,accountId,webPropertyId,websiteUrl)',
            accountId: property.accountId,
            webPropertyId: property.id
        };
        return this.retrieve(cb, params);
    };
    ManagementService.prototype.retrieve = function (cb, params) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__["a" /* fromPromise */])(this.retrieveAsync(cb, params));
    };
    ManagementService.prototype.retrieveAsync = function (cb, params) {
        return __awaiter(this, void 0, void 0, function () {
            var start, total, items, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = 1;
                        total = 0;
                        items = [];
                        _a.label = 1;
                    case 1: return [4 /*yield*/, cb(Object.assign({}, params, {
                            'fields': params['fields'] + ",totalResults",
                            'max-results': this.limit,
                            'start-index': start
                        }))];
                    case 2:
                        response = _a.sent();
                        total = response.result.totalResults;
                        start = start + this.limit;
                        items = items.concat(response.result.items);
                        _a.label = 3;
                    case 3:
                        if (start < total) return [3 /*break*/, 1];
                        _a.label = 4;
                    case 4: return [2 /*return*/, items];
                }
            });
        });
    };
    ManagementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('gapi')),
        __metadata("design:paramtypes", [Object])
    ], ManagementService);
    return ManagementService;
}());



/***/ }),

/***/ "../../../../../src/gapi/page-speed.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSpeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var prepare = function (response) { return ({
    title: response.title,
    score: response.score,
    img: {
        src: 'data:' + response.screenshot.mime_type + ';base64,' + response.screenshot.data.replace(/_/g, '/').replace(/-/g, '+'),
        width: response.screenshot.width,
        height: response.screenshot.height
    }
}); };
var ensureUrl = function (url) { return url.indexOf('http') === 0 ? url : "http://" + url; };
var PageSpeedService = /** @class */ (function () {
    function PageSpeedService(configuration, http) {
        this.configuration = configuration;
        this.http = http;
    }
    PageSpeedService.prototype.get = function (url) {
        var api = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
            .set('url', ensureUrl(url))
            .set('key', this.configuration.apiKey || '')
            .set('screenshot', 'true');
        var options = {
            params: params
        };
        return this.http.get(api, options).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(prepare));
    };
    PageSpeedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('configuration')),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PageSpeedService);
    return PageSpeedService;
}());



/***/ }),

/***/ "../../../../../src/gapi/rt/rt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export metric */
/* unused harmony export dimension */
/* unused harmony export and */
/* unused harmony export or */
/* unused harmony export asc */
/* unused harmony export desc */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums_dimension_expressions__ = __webpack_require__("../../../../../src/gapi/enums/dimension-expressions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_metric_expressions__ = __webpack_require__("../../../../../src/gapi/enums/metric-expressions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var _metric = function (name, expression, value) { return ({
    metric: name,
    expression: expression,
    value: value
}); };
var _dimension = function (name, expression, value) { return ({
    dimension: name,
    expression: expression,
    value: value
}); };
// noinspection JSUnusedGlobalSymbols
var metric = function (name) { return ({
    equals: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_3__enums_metric_expressions__["a" /* MetricExpressions */].Equals, value); },
    doesNotEqual: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_3__enums_metric_expressions__["a" /* MetricExpressions */].DoesNotEqual, value); },
    greaterThan: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_3__enums_metric_expressions__["a" /* MetricExpressions */].GreaterThan, value); },
    lessThan: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_3__enums_metric_expressions__["a" /* MetricExpressions */].LessThan, value); },
    greaterThanOrEqualTo: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_3__enums_metric_expressions__["a" /* MetricExpressions */].GreaterThanOrEqualTo, value); },
    lessThanOrEqualTo: function (value) { return _metric(name, __WEBPACK_IMPORTED_MODULE_3__enums_metric_expressions__["a" /* MetricExpressions */].LessThanOrEqualTo, value); }
}); };
// noinspection JSUnusedGlobalSymbols
var dimension = function (name) { return ({
    exactMatch: function (value) { return _dimension(name, __WEBPACK_IMPORTED_MODULE_2__enums_dimension_expressions__["a" /* DimensionExpressions */].ExactMatch, value); },
    doesNotMatch: function (value) { return _dimension(name, __WEBPACK_IMPORTED_MODULE_2__enums_dimension_expressions__["a" /* DimensionExpressions */].DoesNotMatch, value); },
    containsSubstring: function (value) { return _dimension(name, __WEBPACK_IMPORTED_MODULE_2__enums_dimension_expressions__["a" /* DimensionExpressions */].ContainsSubstring, value); },
    doesNotContainSubstring: function (value) { return _dimension(name, __WEBPACK_IMPORTED_MODULE_2__enums_dimension_expressions__["a" /* DimensionExpressions */].DoesNotContainSubstring, value); },
    matchRegularExpression: function (value) { return _dimension(name, __WEBPACK_IMPORTED_MODULE_2__enums_dimension_expressions__["a" /* DimensionExpressions */].MatchRegularExpression, value); },
    doesNotMatchRegularExpression: function (value) {
        return _dimension(name, __WEBPACK_IMPORTED_MODULE_2__enums_dimension_expressions__["a" /* DimensionExpressions */].DoesNotMatchRegularExpression, value);
    }
}); };
var and = function () {
    var filters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        filters[_i] = arguments[_i];
    }
    return ({
        operator: 'and',
        filters: filters
    });
};
var or = function () {
    var filters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        filters[_i] = arguments[_i];
    }
    return ({
        operator: 'or',
        filters: filters
    });
};
var asc = function (name) { return ({
    name: name,
    desc: false
}); };
var desc = function (name) { return ({
    name: name,
    desc: true
}); };
var prependRtIfNeeded = function (input) { return input.indexOf('ga:') === 0
    ? input
    : "rt:" + input; };
var stringifyFilter = function (filter) {
    var name = 'metric' in filter
        ? filter.metric
        : filter.dimension;
    return "" + prependRtIfNeeded(name) + filter.expression + filter.value;
};
var stringifyCollection = function (collection) {
    return collection.filters
        .map(function (item) { return 'operator' in item
        ? stringifyCollection(item)
        : stringifyFilter(item); })
        .join(collection.operator === 'and' ? ';' : ',');
};
var mapGaRequest = function (input) {
    var output = {
        ids: input.id.indexOf('ga:') === 0 ? input.id : "ga:" + input.id,
        metrics: input.metrics.map(prependRtIfNeeded).join(',')
    };
    if (input.dimensions && input.dimensions.length) {
        output.dimensions = input.dimensions.map(prependRtIfNeeded).join(',');
    }
    if (input.filters) {
        output.filters = 'operator' in input.filters
            ? stringifyCollection(input.filters)
            : stringifyFilter(input.filters);
    }
    if (input.sort && input.sort.length) {
        output.sort = input.sort
            .map(function (sort) { return "" + (sort.desc ? '-' : '') + prependRtIfNeeded(sort.name); })
            .join(',');
    }
    // https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters
    return output;
};
var RtService = /** @class */ (function () {
    function RtService(gapi) {
        this.gapi = gapi;
        this.limit = 10000;
    }
    RtService.prototype.get = function (params) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__["a" /* fromPromise */])(this.retrieveAsync(params));
    };
    RtService.prototype.retrieveAsync = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var start, total, items, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = 1;
                        total = 0;
                        items = [];
                        _a.label = 1;
                    case 1: return [4 /*yield*/, this.gapi.client.analytics.data.realtime.get(Object.assign({}, mapGaRequest(params), {
                            'fields': "rows,totalResults",
                            'max-results': this.limit,
                            'start-index': start
                        }))];
                    case 2:
                        response = _a.sent();
                        total = response.result.totalResults;
                        start = start + this.limit;
                        items = items.concat(response.result.rows);
                        _a.label = 3;
                    case 3:
                        if (start < total) return [3 /*break*/, 1];
                        _a.label = 4;
                    case 4: return [2 /*return*/, items];
                }
            });
        });
    };
    RtService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('gapi')),
        __metadata("design:paramtypes", [Object])
    ], RtService);
    return RtService;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map