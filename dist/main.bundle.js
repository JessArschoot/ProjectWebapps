webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-article/add-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add{\n    width:100%;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-article/add-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='add'>\n    <form [formGroup]='article' class=\"ui reply form\" (ngSubmit)=\"addArticle()\">\n      <h2>Voeg artikel toe</h2>\n      <div class=\"field\">\n        <label>Title\n        <input type=\"text\" value=\"title\" formControlName=\"title\"/>\n        </label>\n      </div>\n      <div class=\"field\">\n          <label for=\"nation\">Land\n          <select  formControleName=\"nation\" name=\"nation\"> \n              <option name=\"Frankrijk\">Frankrijk</option>\n              <option name=\"Spanje\">Spanje</option>\n              <option name=\"Italie\">Italië</option>\n              <option name=\"Amerika\">Amerika</option>\n          </select>\n          </label>\n      </div>\n      <div class=\"field\">\n          <label>Artikel\n        <textarea formControlName='text'></textarea>\n        </label>\n      </div>\n      <div>\n          <label>Foto\n         <input name=\"picture\" id='picture' type=\"file\" #fileInput>\n        </label>\n      </div>\n  \n        <input class=\"ui primary button \" type=\"submit\" value=\"Toevoegen\"/>\n      \n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-article/add-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddArticleComponent = (function () {
    function AddArticleComponent(fb, service, userService) {
        this.fb = fb;
        this.service = service;
        this.userService = userService;
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.user = JSON.parse(localStorage.getItem('currentUser')).username;
    }
    AddArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser(this.user).subscribe(function (data) {
            _this._user = new __WEBPACK_IMPORTED_MODULE_3__models_User__["a" /* User */](data.name, data.username, data.picture);
        });
        this.article = this.fb.group({
            title: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].minLength(2)]],
            text: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].minLength(20)]],
            nation: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required]]
        });
    };
    AddArticleComponent.prototype.addArticle = function () {
        var _this = this;
        var fileBrowser = this.fileInput.nativeElement;
        var f = fileBrowser.files[0];
        var r = new FileReader();
        r.readAsDataURL(f);
        r.onload = function (e) {
            var data = r.result.split(',')[1];
            var model = {
                username: _this._user.username,
                userpic: _this._user.picture,
                date: new Date(),
                nation: _this.article.value.nation,
                title: _this.article.value.title,
                text: _this.article.value.text,
                picture: data,
                likes: 0,
            };
            _this.service.addArticle(model).subscribe(function (data) {
                _this.event.emit(data);
            });
            //this._articles.push(new Article(this._user.username, this._user.picture, model.date, model.title, model.text, model.likes,[], model.picture));
            _this.article.get("text").setValue("");
            _this.article.get("title").setValue("");
            _this.article.get('nation').setValue('');
        };
    };
    return AddArticleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], AddArticleComponent.prototype, "event", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], AddArticleComponent.prototype, "fileInput", void 0);
AddArticleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-article',
        template: __webpack_require__("../../../../../src/app/add-article/add-article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-article/add-article.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AddArticleComponent);

var _a, _b, _c;
//# sourceMappingURL=add-article.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n    width:100%;\n    height:100%;\n}\n.article{\n    display:inline;\n   vertical-align: bottom;\n}\n\n.customheader{\n    color:white;\n    background-color:#14ADE0;\n    z-index:1;\n    padding-top:2%;\n    padding-left:2%;\n    height:3em;\n    text-align: left;\n    font-size:2em;\n}\nnav{\n    display:inline;\n    float:right;\n    width:30%;\n}\nnav a{\n    width:10%;\n    margin-left:3%;\n    color:white;\n}\nnav a:hover{\n    border-bottom: 2px solid #3F7D91;\n    padding-bottom:.5em;\n\n}\n.logo{\n    display:inline;\n    width:50%;\n}\n\nfooter{\n    display:block;\n    bottom:0;\n    position:fixed;\n    width:100%;\n    text-align: center;\n    color:white;\n    z-index:1;\n    background-repeat: repeat-y;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui header customheader\">\n    <div class=\"logo\">WanderFull</div>\n    <nav>\n      <a class='item' routerLinkActive='active' routerLink=\"article/list\" >Articles</a>\n      <a *ngIf='(currentUser | async) else loginlink' class=\"item\" routerLinkActive='active' routerLink=\"/user\">{{currentUser|async}} </a>\n      <ng-template #loginlink>\n        <a class=\"item\" routerLinkActive='active' routerLink=\"/login\">log in</a>\n      </ng-template>\n     \n      <a class='item' *ngIf='!currentuser' routerLinkActive='active' routerLink=\"/logout\" >Log out</a>\n      \n    </nav>\n    \n\n  </div>\n<div class=\"ui container wrapper\"> \n  \n\n       <router-outlet></router-outlet>\n </div>\n  \n\n<footer>©Jess Arschoot</footer>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    Object.defineProperty(AppComponent.prototype, "currentUser", {
        get: function () {
            return this.authService.user$;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article_article_component__ = __webpack_require__("../../../../../src/app/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_list_article_list_component__ = __webpack_require__("../../../../../src/app/article-list/article-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_article_resolver_service__ = __webpack_require__("../../../../../src/app/services/article-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__article_detail_article_detail_component__ = __webpack_require__("../../../../../src/app/article-detail/article-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__add_article_add_article_component__ = __webpack_require__("../../../../../src/app/add-article/add-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__nations_nations_component__ = __webpack_require__("../../../../../src/app/nations/nations.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
var appRoutes = [
    { path: "article/list/:id", component: __WEBPACK_IMPORTED_MODULE_15__article_detail_article_detail_component__["a" /* ArticleDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuardService */]], resolve: { article: __WEBPACK_IMPORTED_MODULE_9__services_article_resolver_service__["a" /* ArticleResolverService */] } },
    { path: "article/list", component: __WEBPACK_IMPORTED_MODULE_1__article_list_article_list_component__["a" /* ArticleListComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */] },
    { path: "user", component: __WEBPACK_IMPORTED_MODULE_18__user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: "logout", component: __WEBPACK_IMPORTED_MODULE_14__logout_logout_component__["a" /* LogoutComponent */] },
    { path: "**", redirectTo: 'article/list' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_0__article_article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__article_detail_article_detail_component__["a" /* ArticleDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_1__article_list_article_list_component__["a" /* ArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_1__article_list_article_list_component__["a" /* ArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__add_article_add_article_component__["a" /* AddArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_18__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__nations_nations_component__["a" /* NationsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_article_resolver_service__["a" /* ArticleResolverService */], __WEBPACK_IMPORTED_MODULE_10__services_article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_16__services_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/article-detail/article-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article-detail/article-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_article\">\n        <div class=\"ui raised link card\">\n                <div class=\"content\">\n                    \n                        <div class=\"header\">{{_article.nation}} -- {{_article.title}}</div>\n                  <div class=\"description\">\n                    <p>{{_article.text}}</p>\n                  </div>\n                  <div>\n                      <img class=\"ui image\" id =\"userPic\" src='data:image/jpg;base64,{{_article.picture}}' >\n                  </div>\n                  <br>\n                  <div class=\"right floated author\">\n                      <img class=\"ui avatar image\" src= \"data:image/jpg;base64,{{_article.userpic}}\"> {{_article.username}}\n                      <sub>{{_article.date | date: 'dd/MM/yyyy'}}</sub>\n                    </div>\n                  </div>\n                  <div class=\"extra content\">\n                        <div class=\"meta\">\n                             <a class=\"like \" (click)=\"addLike()\">\n                               <i class=\"like icon\" *ngIf='_like'></i> {{_article.likes}} Likes\n                             </a>\n                             <a class=\"comment\" (click)=\"makeComment()\">\n                                 <i class=\"comment icon\"></i>{{_article.comments.length}} Comments\n                               </a>\n                           </div>\n                    </div>\n                    <div *ngIf=\"_comment\">\n                      <div class=\"comments\">\n                        <div  *ngFor='let feed of _article.comments'>\n                            <div class=\"comment\">\n                              <div class=\"content\">\n                                <a class=\"author\"><img class=\"ui avatar image\" id =\"userPic\" src='data:image/jpg;base64,{{feed.userpic}}' >{{feed.username}} \n                                  <sub>{{feed.date | date : 'dd/MM/yyyy'}}</sub>\n                                </a>\n                                <div class=\"text\">\n                                  {{feed.text}}\n                                </div>\n                                \n                              </div>\n                            </div>\n                          </div>\n                      </div>\n                    \n                      <form [formGroup]='comment' class=\"ui reply form\">\n                        <div class=\"field\">\n                          <textarea formControlName='text'></textarea>\n                        </div>\n                        <div *ngIf=\"_user\">\n                            <div class=\"metadata\">\n                                <img class=\"ui avatar image\" id =\"userPic\" src='data:image/jpg;base64,{{_user.picture}}' >{{user}}\n                              \n                            </div>\n                        </div>\n                        <div class=\"ui blue labeled submit icon button\" (click)=\"addComment()\">\n                          <i class=\"icon edit\" ></i> Add Reply\n                        </div>\n                       \n                        \n                      </form>\n                    </div>\n                </div>\n              </div>\n"

/***/ }),

/***/ "../../../../../src/app/article-detail/article-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Comment__ = __webpack_require__("../../../../../src/app/models/Comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticleDetailComponent = (function () {
    function ArticleDetailComponent(fb, route, service, userService) {
        this.fb = fb;
        this.route = route;
        this.service = service;
        this.userService = userService;
        this._comment = false;
        this._like = false;
        this.user = JSON.parse(localStorage.getItem('currentUser')).username;
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (pa) {
            return _this.service.getArticle(pa.get('id'))
                .subscribe(function (item) {
                _this._article = item;
                console.log(_this._article);
            });
        });
        this.comment = this.fb.group({
            text: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].minLength(2)]],
        });
        // console.log(this._article.comments.length);
    };
    Object.defineProperty(ArticleDetailComponent.prototype, "getcomment", {
        get: function () {
            return this.comment.get('text');
        },
        enumerable: true,
        configurable: true
    });
    ArticleDetailComponent.prototype.addLike = function () {
        if (this._like == false) {
            this._article.likes++;
            this._like = true;
        }
        else {
            this._article.likes--;
            this._like = false;
        }
        console.log(this._article.likes);
    };
    ArticleDetailComponent.prototype.makeComment = function () {
        var _this = this;
        if (this._comment == false) {
            this._comment = true;
            this.userService.getUser(this.user).subscribe(function (data) {
                _this._user = data;
                console.log(data);
                //var preview = document.getElementById('userPic');
                //console.log(preview);
                // var reader  = new FileReader();
                //reader.addEventListener("loadend", function () {
                //  preview.setAttribute('src', 'data: image/jpg;base64,'+data.picture);
                //}, true);
            });
        }
        else {
            this._comment = false;
        }
    };
    ArticleDetailComponent.prototype.addComment = function () {
        var model = {
            name: this.user,
            userpic: this._user.picture,
            date: new Date(),
            text: this.comment.value.text,
        };
        this.service.addComment(this._article._id, model).subscribe(function (data) { return console.log(data); });
        this._article.comments.push(new __WEBPACK_IMPORTED_MODULE_2__models_Comment__["a" /* Comment */](model.name, model.userpic, model.date, model.text));
        console.log(this._article.comments);
        this.comment.get("text").setValue("");
    };
    return ArticleDetailComponent;
}());
ArticleDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-article-detail',
        template: __webpack_require__("../../../../../src/app/article-detail/article-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article-detail/article-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_article_service__["a" /* ArticleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], ArticleDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=article-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/article-list/article-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article-list/article-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf='user'>\n        <app-add-article (event)='addArticle($event)'></app-add-article>\n    </div>\n<div class=\"ui grid\">\n    <div *ngFor=\"let article of articles\" class=\"four wide column\">\n      <app-article  [article]=\"article\" >\n      </app-article>\n    </div>\n\n</div>\n\n\n    \n\n"

/***/ }),

/***/ "../../../../../src/app/article-list/article-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleListComponent = (function () {
    function ArticleListComponent(fb, service, userService) {
        this.fb = fb;
        this.service = service;
        this.userService = userService;
        var jsonUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user = jsonUser ? jsonUser.username : null;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.articles
            .subscribe(function (items) { _this._articles = items, console.log(items); });
    };
    ArticleListComponent.prototype.addArticle = function (article) {
        this._articles.push(article);
    };
    Object.defineProperty(ArticleListComponent.prototype, "articles", {
        get: function () {
            return this._articles;
        },
        enumerable: true,
        configurable: true
    });
    return ArticleListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], ArticleListComponent.prototype, "fileInput", void 0);
ArticleListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-article-list',
        template: __webpack_require__("../../../../../src/app/article-list/article-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article-list/article-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], ArticleListComponent);

var _a, _b, _c;
//# sourceMappingURL=article-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-comment{\n    display:none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div  class=\"ui raised link card\">\n    <div class=\"content\">\n      <div class=\"header\">\n        <a [routerLink]=\"[article._id]\">{{article.nation}} -- {{article.title}}</a></div>\n     \n      <div class=\"description\">\n        <p>{{article.text}}</p>\n        <a [routerLink]=\"[article._id]\"><img class=\"ui image\" src=\"data:image/jpg;base64,{{article.picture}}\"  style=\"max-height:200px\"></a>\n        \n      </div>\n    </div>\n    <div class=\"extra content\">\n       <div class=\"meta\">\n            <a class=\"like \">\n              <i class=\"like icon\"></i> {{article.likes}} Likes\n            </a>\n            <a class=\"comment\" >\n                <i class=\"comment icon\"></i>{{article.comments.length}} Comments\n              </a>\n          </div>\n      <div class=\"right floated author\">\n        <img class=\"ui avatar image\" src= \"data:image/jpg;base64,{{article.userpic}}\"> {{article.username}}\n        <sub>{{article.date | date: 'dd/MM/yyyy'}}</sub>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_Article__ = __webpack_require__("../../../../../src/app/models/Article.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleComponent = (function () {
    function ArticleComponent(service) {
        this.service = service;
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    return ArticleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__models_Article__["a" /* Article */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__models_Article__["a" /* Article */]) === "function" && _a || Object)
], ArticleComponent.prototype, "article", void 0);
ArticleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-article',
        template: __webpack_require__("../../../../../src/app/article/article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article/article.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */]) === "function" && _b || Object])
], ArticleComponent);

var _a, _b;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='user' (ngSubmit)='onSubmit()' class=\"ui large form segment\">\n  <h3 class=\"ui header\">login</h3>\n  <div class=\"field\">\n    <label for=\"username\">username:</label>\n    <input type=\"text\" id=\"username\" formControlName='username'>\n  </div>\n  <div class=\"field\">\n    <label for=\"password\">password:</label>\n    <input type=\"password\" id=\"password\" formControlName='password'>\n  </div>\n  <button type='submit' [disabled]='!user.valid' class=\"ui positive right floated button\">log in</button>\n  <div *ngIf='errorMsg' class='ui red label'>{{errorMsg}}</div>\n  <a class='item' routerLink=\"/register\" >register</a>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordValidator() {
    return function (control) {
        console.log(control.value);
        return control.value.length < 12 ? { 'passwordTooShort': { value: control.value.length } } : null;
    };
}
var LoginComponent = (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.user.value.username, this.user.value.password).subscribe(function (val) {
            if (val) {
                console.log(val);
                if (_this.authService.redirectUrl) {
                    _this.router.navigateByUrl(_this.authService.redirectUrl);
                    _this.authService.redirectUrl = undefined;
                }
                else {
                    _this.router.navigate(['/article/list']);
                }
            }
        }, function (err) { return _this.errorMsg = err.json().message; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "you are succesfully logged out"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        // this.router.navigate(['login']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/Article.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article(username, userpic, nation, date, title, text, likes, comments, picture) {
        this.username = username;
        this.userpic = userpic;
        this.nation = nation;
        this.date = date;
        this.title = title;
        this.text = text;
        this.likes = likes;
        this.comments = comments;
        this.picture = picture;
    }
    return Article;
}());

//# sourceMappingURL=Article.js.map

/***/ }),

/***/ "../../../../../src/app/models/Comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(name, userpic, date, text) {
        this.username = name;
        this.userpic = userpic;
        this.date = date;
        this.text = text;
    }
    return Comment;
}());

//# sourceMappingURL=Comment.js.map

/***/ }),

/***/ "../../../../../src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, username, picture) {
        this.name = name;
        this.username = username;
        this.picture = picture;
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/nations/nations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nations/nations.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  nations works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/nations/nations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NationsComponent = (function () {
    function NationsComponent() {
    }
    NationsComponent.prototype.ngOnInit = function () {
    };
    return NationsComponent;
}());
NationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nations',
        template: __webpack_require__("../../../../../src/app/nations/nations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nations/nations.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NationsComponent);

//# sourceMappingURL=nations.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='user' (ngSubmit)='onSubmit()' class=\"ui large form segment register\">\n  <h3 class=\"ui header\">register new user</h3>\n  <div class=\"field\">\n    <label for=\"username\">username:</label>\n    <input type=\"text\" id=\"username\" formControlName='username'>\n    <div class='ui pointing red basic label' *ngIf=' user.get(\"username\").errors?.required && user.get(\"username\").touched'>\n      a username is required\n    </div>\n    <div class='ui pointing red basic label' *ngIf='user.get(\"username\").errors?.minlength && user.get(\"username\").touched'>\n      the username should be at least {{user.get(\"username\").errors?.minlength.requiredLength }} letters\n    </div>\n    <div class='ui pointing red basic label' *ngIf='user.get(\"username\").errors?.userAlreadyExists && user.get(\"username\").touched'>\n      a user with that name already exists\n    </div>\n  </div>\n  <div>\n    <input name=\"picture\" id='picture' type=\"file\" #fileInput (change)='previewFile()'>\n    <br>\n    <img id=\"previewPic\" height=\"200\" alt=\"Image preview...\">\n    \n  </div>\n  \n  <div class=\"field\">\n      <label for=\"name\">Name:</label>\n      <input type=\"name\" id=\"name\" formControlName='name'>\n  </div>\n  <div formGroupName='passwordGroup'>\n    <div class=\"field\">\n      <label for=\"password\">password:</label>\n      <input type=\"password\" id=\"password\" formControlName='password'>\n      <div class='ui pointing red basic label' *ngIf=' passwordControl.errors?.passwordTooShort && passwordControl.touched'>\n        password too short, please use at least {{passwordControl.errors?.passwordTooShort.requiredLength}} letters (got {{passwordControl.errors?.passwordTooShort.actualLength}})\n      </div>\n    </div>\n    <div class=\"field\">\n      <label for=\"confirmpassword\">confirm password:</label>\n      <input type=\"password\" id=\"confirmpassword\" formControlName='confirmPassword'>\n    </div>\n    <div class='ui pointing red basic label' *ngIf=' user.get(\"passwordGroup\").errors?.passwordsDiffer && user.get(\"passwordGroup\").get(\"confirmPassword\").touched  && user.get(\"passwordGroup\").get(\"password\").touched'>\n     the two passwords should be the same\n    </div>\n  </div>\n  <br>\n\n  <button type='submit' [disabled]='!user.valid' class=\"ui positive right floated button\">register</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordValidator(length) {
    return function (control) {
        return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
    };
}
function comparePasswords(control) {
    var password = control.get('password');
    var confirmPassword = control.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}
var RegisterComponent = (function () {
    function RegisterComponent(authenticationService, router, fb) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.fb = fb;
    }
    Object.defineProperty(RegisterComponent.prototype, "passwordControl", {
        get: function () {
            return this.user.get('passwordGroup').get('password');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].minLength(4)], this.serverSideValidateUsername()],
            passwordGroup: this.fb.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, passwordValidator(12)]],
                confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
            }, { validator: comparePasswords }),
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
        });
    };
    RegisterComponent.prototype.serverSideValidateUsername = function () {
        var _this = this;
        return function (control) {
            return _this.authenticationService.checkUserNameAvailability(control.value).map(function (available) {
                if (available) {
                    return null;
                }
                return { userAlreadyExists: true };
            });
        };
    };
    RegisterComponent.prototype.previewFile = function () {
        var preview = document.getElementById('previewPic');
        var file = this.fileInput.nativeElement.files[0];
        var reader = new FileReader();
        reader.addEventListener("loadend", function () {
            preview.setAttribute('src', reader.result);
        }, true);
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var fileBrowser = this.fileInput.nativeElement;
        var data;
        var f = fileBrowser.files[0];
        var r = new FileReader();
        r.readAsDataURL(f);
        r.onload = function (e) {
            data = r.result.split(',')[1];
            _this.authenticationService.register(_this.user.value.username, _this.passwordControl.value, _this.user.value.name, data).subscribe(function (val) {
                if (val) {
                    _this.router.navigate(['article/list']);
                }
            });
            //console.log(data2);
            //send your binary data via $http or $resource or do anything else with it
        };
        //console.log(data.result);  
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "fileInput", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/article-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleResolverService = (function () {
    function ArticleResolverService(service) {
        this.service = service;
    }
    ArticleResolverService.prototype.resolve = function (route, state) {
        console.log(route.params['id']);
        return this.service.getArticle(route.params['id']);
    };
    return ArticleResolverService;
}());
ArticleResolverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */]) === "function" && _a || Object])
], ArticleResolverService);

var _a;
//# sourceMappingURL=article-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleService = (function () {
    function ArticleService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    Object.defineProperty(ArticleService.prototype, "articles", {
        get: function () {
            return this.http.get("https://webapps-backend-jess.herokuapp.com/articles").map(function (response) {
                return response.json();
            });
        },
        enumerable: true,
        configurable: true
    });
    ArticleService.prototype.getArticle = function (id) {
        console.log(id);
        return this.http.get("https://webapps-backend-jess.herokuapp.com/article/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (response) {
            return response.json();
        });
    };
    ArticleService.prototype.addComment = function (id, model) {
        return this.http.post("https://webapps-backend-jess.herokuapp.com/article/add-comment/" + id, model, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (response) { return response.json(); });
    };
    ArticleService.prototype.addArticle = function (model) {
        return this.http.post("https://webapps-backend-jess.herokuapp.com/article/add-article/", model, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (response) { return response.json(); });
    };
    return ArticleService;
}());
ArticleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], ArticleService);

var _a, _b;
//# sourceMappingURL=article.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import our authentication service
var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.user$.getValue()) {
            return true;
        }
        // Retain the attempted URL for redirection
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this._url = 'https://webapps-backend-jess.herokuapp.com/API/users';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this._user$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](currentUser && currentUser.username);
    }
    Object.defineProperty(AuthenticationService.prototype, "user$", {
        get: function () {
            return this._user$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "token", {
        get: function () {
            return JSON.parse(localStorage.getItem('currentUser')).token;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this._url + "/login", { username: username, password: password })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                _this._user$.next(username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        if (this.user$.getValue()) {
            localStorage.removeItem('currentUser');
            setTimeout(function () { return _this._user$.next(null); });
        }
    };
    AuthenticationService.prototype.register = function (username, password, name, picture) {
        var _this = this;
        return this.http.post(this._url + "/register", { username: username, password: password, name: name, picture: picture })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: res.token }));
                _this._user$.next(username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.checkUserNameAvailability = function (username) {
        return this.http.post(this._url + "/checkusername", { username: username }).map(function (res) { return res.json(); })
            .map(function (item) {
            if (item.username === 'alreadyexists') {
                return false;
            }
            else {
                return true;
            }
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    UserService.prototype.getUser = function (name) {
        return this.http.get("https://webapps-backend-jess.herokuapp.com/API/users/user/" + name, { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='articles'>\n<div *ngFor='let article of articles'>\n    {{article._id}}\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(service, articleService) {
        this.service = service;
        this.articleService = articleService;
        //this._user = JSON.parse(localStorage.getItem('currentuser')).username;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUser(this._user)
            .subscribe(function (data) { return _this.user = new __WEBPACK_IMPORTED_MODULE_2__models_User__["a" /* User */](data.name, data.username, data.picture); });
        console.log(this.user);
        this.articleService.articles.subscribe(function (data) { return data.forEach(function (d) {
            if (d.username == _this.user.username) {
                _this.articles.push(d);
            }
        }); });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_article_service__["a" /* ArticleService */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map