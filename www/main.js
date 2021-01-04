(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/17z":
/*!***************************************************************!*\
  !*** ./src/app/Components/show-users/show-users.component.ts ***!
  \***************************************************************/
/*! exports provided: ShowUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowUsersComponent", function() { return ShowUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Queries_getUsers_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Queries/getUsers.query */ "/t5H");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function ShowUsersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowUsersComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.reads == null ? null : user_r2.reads.length);
} }
class ShowUsersComponent {
    constructor(apollo) {
        this.apollo = apollo;
        this.loading = true;
    }
    ngOnInit() {
        this.apollo.watchQuery({
            query: _Queries_getUsers_query__WEBPACK_IMPORTED_MODULE_1__["getUsers"]
        }).valueChanges.subscribe(({ data, loading }) => {
            this.loading = loading;
            this.users = data === null || data === void 0 ? void 0 : data.users;
        });
    }
}
ShowUsersComponent.ɵfac = function ShowUsersComponent_Factory(t) { return new (t || ShowUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"])); };
ShowUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowUsersComponent, selectors: [["app-show-users"]], decls: 20, vars: 11, consts: [["class", "overlay", 4, "ngIf"], [1, "container"], [1, "table", "table-hover", "table-dark", "usersTable"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "overlay"], ["src", "../../../assets/images/loading.gif", 1, "loadImg"], ["scope", "row"]], template: function ShowUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowUsersComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ShowUsersComponent_tr_19_Template, 11, 5, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, "reads"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [":root {\n    --main: #fe2d53;\n    --float:'left';\n  } \n.usersTable[_ngcontent-%COMP%]{\n    \n    \n    margin-top:5vh; \n    padding: 5%;\n    border-radius: 1%;\n} \n.container[_ngcontent-%COMP%]{\n    direction: var(--dir);\n    font-family: Cairo;\n} \n.overlay[_ngcontent-%COMP%]{\n    width: 82vw;\n    height: 90vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    margin-left: 1%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwic2hvdy11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUNGRjtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakIiLCJmaWxlIjoic2hvdy11c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwICA6cm9vdCB7XG4gICAgLS1tYWluOiAjZmUyZDUzO1xuICAgIC0tZmxvYXQ6J2xlZnQnO1xuICB9XG4gICIsIkBpbXBvcnQgJy4uLy4uL2FwcC5jb21wb25lbnQuY3NzJzsgXG4udXNlcnNUYWJsZXtcbiAgICAvKiBtYXJnaW4tbGVmdDogMTJ2dzsgKi9cbiAgICAvKiBhbGlnbi1zZWxmIDogY2VudGVyOyAqL1xuICAgIG1hcmdpbi10b3A6NXZoOyBcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiAxJTtcbn1cbi5jb250YWluZXJ7XG4gICAgZGlyZWN0aW9uOiB2YXIoLS1kaXIpO1xuICAgIGZvbnQtZmFtaWx5OiBDYWlybztcbn1cbi5vdmVybGF5e1xuICAgIHdpZHRoOiA4MnZ3O1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-users',
                templateUrl: './show-users.component.html',
                styleUrls: ['./show-users.component.css']
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }]; }, null); })();


/***/ }),

/***/ "/t5H":
/*!*******************************************!*\
  !*** ./src/app/Queries/getUsers.query.ts ***!
  \*******************************************/
/*! exports provided: getUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const getUsers = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    query{
        users{
            id
            name
            email
            password
            reads{
                time
            }
        }
    }
`;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/mkhaled/46229A46229A3B3F/Applications/Web/Angular/BookyDB/src/main.ts */"zUnb");


/***/ }),

/***/ "0SwS":
/*!*******************************************************************!*\
  !*** ./src/app/Components/show-authors/show-authors.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShowAuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAuthorsComponent", function() { return ShowAuthorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Queries_getAuthors_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Queries/getAuthors.query */ "8u5e");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _author_card_author_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../author-card/author-card.component */ "ukor");







function ShowAuthorsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowAuthorsComponent_div_2_app_author_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-author-card", 7);
} if (rf & 2) {
    const author_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", author_r3);
} }
function ShowAuthorsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowAuthorsComponent_div_2_app_author_card_1_Template, 1, 1, "app-author-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.authors);
} }
class ShowAuthorsComponent {
    constructor(apollo, titleService) {
        this.apollo = apollo;
        this.titleService = titleService;
        this.authors = [];
        this.loading = true;
    }
    ngOnInit() {
        // this.titleService.setTitle("Authors")
        this.querySubscription = this.apollo.watchQuery({
            query: _Queries_getAuthors_query__WEBPACK_IMPORTED_MODULE_1__["getAuthors"]
        }).valueChanges.subscribe(({ data, loading }) => {
            this.loading = loading;
            this.authors = data === null || data === void 0 ? void 0 : data.authors;
            // console.log("Authors loaded : ",data.authors);
        });
    }
    ngOnDestroy() {
        this.querySubscription.unsubscribe();
    }
}
ShowAuthorsComponent.ɵfac = function ShowAuthorsComponent_Factory(t) { return new (t || ShowAuthorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
ShowAuthorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowAuthorsComponent, selectors: [["app-show-authors"]], decls: 3, vars: 2, consts: [[1, "authorsContainer"], ["class", "overlay", 4, "ngIf"], ["class", "author", 4, "ngIf"], [1, "overlay"], ["src", "../../../assets/images/loading.gif", 1, "loadImg"], [1, "author"], [3, "author", 4, "ngFor", "ngForOf"], [3, "author"]], template: function ShowAuthorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowAuthorsComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowAuthorsComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _author_card_author_card_component__WEBPACK_IMPORTED_MODULE_5__["AuthorCardComponent"]], styles: [".author[_ngcontent-%COMP%]{\n    padding-left: 2vw;\n}\n\n.overlay[_ngcontent-%COMP%]{\n    width: 82vw;\n    height: 90vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    margin-left: 1%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYXV0aG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQiIsImZpbGUiOiJzaG93LWF1dGhvcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRob3J7XG4gICAgcGFkZGluZy1sZWZ0OiAydnc7XG59XG5cbi5vdmVybGF5e1xuICAgIHdpZHRoOiA4MnZ3O1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowAuthorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-authors',
                templateUrl: './show-authors.component.html',
                styleUrls: ['./show-authors.component.css']
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }]; }, null); })();


/***/ }),

/***/ "4KHl":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular/http */ "E21e");





const uri = 'https://bookyser.herokuapp.com/gql'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri }),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"](),
    };
}
class GraphQLModule {
}
GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); }, providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
        },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    {
                        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
                        useFactory: createApollo,
                        deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "4mZ4":
/*!***************************************************!*\
  !*** ./src/app/Queries/getAuthorsGenres.query.ts ***!
  \***************************************************/
/*! exports provided: getAuthorsGenres */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorsGenres", function() { return getAuthorsGenres; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const getAuthorsGenres = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    query{
        authorsAndGenres{
            authors{
              id
              name
            }
            genres{
              id
              name
            }
          }
    }
`;


/***/ }),

/***/ "7v5E":
/*!************************************************************!*\
  !*** ./src/app/shared/loaders/translate-browser.loader.ts ***!
  \************************************************************/
/*! exports provided: TranslateBrowserLoader, translateBrowserLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateBrowserLoader", function() { return TranslateBrowserLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateBrowserLoaderFactory", function() { return translateBrowserLoaderFactory; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");



class TranslateBrowserLoader {
    constructor(http, transferState) {
        this.http = http;
        this.transferState = transferState;
    }
    getTranslation(lang) {
        const key = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["makeStateKey"])('transfer-translate-' + lang);
        const data = this.transferState.get(key, null);
        // First we are looking for the translations in transfer-state, 
        // if none found, http load as fallback
        if (data) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
                observer.next(data);
                observer.complete();
            });
        }
        else {
            return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__["TranslateHttpLoader"](this.http).getTranslation(lang);
        }
    }
}
function translateBrowserLoaderFactory(httpClient, transferState) {
    return new TranslateBrowserLoader(httpClient, transferState);
}


/***/ }),

/***/ "83e3":
/*!***********************************************************!*\
  !*** ./src/app/Components/add-book/add-book.component.ts ***!
  \***********************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Queries_getAuthorsGenres_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Queries/getAuthorsGenres.query */ "4mZ4");
/* harmony import */ var _Mutations_addBook_mutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Mutations/addBook.mutation */ "9u1E");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AddBookComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", author_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", author_r4.name, " ");
} }
function AddBookComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", genre_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r5.name, " ");
} }
function AddBookComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.loadPercent, "%");
} }
class AddBookComponent {
    constructor(apollo, translate) {
        this.apollo = apollo;
        this.translate = translate;
        this.releaseDate = new Date().getFullYear().toString();
        this.readURL = "";
        this.buyURL = "";
        this.downloadURL = "";
        this.imgUploading = false;
        apollo.watchQuery({
            query: _Queries_getAuthorsGenres_query__WEBPACK_IMPORTED_MODULE_1__["getAuthorsGenres"],
        }).valueChanges.subscribe((res) => {
            let data = res.data.authorsAndGenres;
            this.genres = data.genres;
            this.authors = data.authors;
        });
    }
    ngOnInit() {
    }
    uploadImg(poster) {
        console.log("POSTER : ", poster.target.files[0]);
        // let file = poster.target.files[0];
        // let filePath = "covers/img" + Math.random() + ".png";
        // let task = this.af.upload(filePath, file);
        // let ref = this.af.ref(filePath);
        // this.imgUploading = true;
        // task.percentageChanges().subscribe(res => {
        //   console.log("load : ", res);
        //   this.loadPercent = parseInt(res + "");
        //   if (res == 100) {
        //     setTimeout(() => {
        //       this.imgUploading = false;
        //       ref.getDownloadURL().subscribe(path => {
        //         console.log("URL : ", path);
        //         this.posterURL = path;
        //       });
        //     }, 500)
        //   }
        // });
    }
    addBook() {
        console.log("name : ", this.name);
        console.log("genre : ", this.genre);
        console.log("authorID: ", this.authorID);
        console.log("description : ", this.description);
        console.log("Download : ", this.downloadURL);
        console.log("releaseDate : ", this.releaseDate);
        console.log("rate : ", this.rate);
        console.log("read : ", this.readURL);
        console.log("buy : ", this.buyURL);
        this.apollo.mutate({
            mutation: _Mutations_addBook_mutation__WEBPACK_IMPORTED_MODULE_2__["addBook"],
            variables: {
                name: this.name,
                genreID: this.genre,
                authorID: this.authorID,
                description: this.description,
                releaseDate: this.releaseDate + "",
                posterURL: this.posterURL,
                buyURL: this.buyURL,
                downloadURL: this.downloadURL,
                rate: this.rate,
                readURL: this.readURL
            }
        }).subscribe(({ data }) => {
            console.log("Adding boook RES :  ", data);
            alert("book added success");
            this.name = "";
            this.genre = "";
            this.authorID = "";
            this.description = "";
            this.downloadURL = "";
            this.rate = null;
            this.readURL = "";
            this.releaseDate = "";
        });
    }
}
AddBookComponent.ɵfac = function AddBookComponent_Factory(t) { return new (t || AddBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
AddBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddBookComponent, selectors: [["app-add-book"]], decls: 57, vars: 52, consts: [[1, "formCont", 3, "submit"], [1, "form"], [1, "form-group"], ["type", "text", "name", "name", 1, "form-control", "input", 3, "ngModel", "placeholder", "ngModelChange"], ["id", "authorName", "name", "authorID", 1, "form-control", "input", "dropDown", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "Genre", "name", "genre", 1, "form-control", "input", "dropDown", 3, "ngModel", "ngModelChange"], ["disabled", "", "selected", "", "hidden", "", 3, "ngValue"], ["type", "number", "min", "1899", "max", "2030", "step", "1", "placeholder", "Release Year", "name", "releaseDate", 1, "form-control", "input", 3, "ngModel", "ngModelChange"], ["for", "poster"], ["type", "file", "accept", "*.png.jpg", "id", "poster", 1, "input", "uploadBtn", "form-control-file", 3, "change"], ["poster", ""], ["class", "loadingInd", 4, "ngIf"], ["type", "text", "name", "downloadURL", 1, "form-control", "input", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "text", "name", "buyURL", 1, "form-control", "input", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "text", "name", "readURL", 1, "form-control", "input", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "number", "name", "rate", 1, "form-control", "input", 3, "ngModel", "placeholder", "ngModelChange"], ["name", "description", "rows", "3", 1, "form-control", "input", 3, "placeholder", "ngModel", "ngModelChange"], [1, "card", "bookView", "text-center", 2, "width", "18rem"], [1, "card-img-top", "cover", 3, "src"], [1, "card-body"], [1, "card-text"], ["type", "submit", 1, "btn", "btn-submit"], [3, "ngValue"], [1, "loadingInd"]], template: function AddBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddBookComponent_Template_div_submit_0_listener() { return ctx.addBook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookComponent_Template_input_ngModelChange_3_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookComponent_Template_select_ngModelChange_9_listener($event) { return ctx.authorID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddBookComponent_option_10_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookComponent_Template_select_ngModelChange_15_listener($event) { return ctx.genre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddBookComponent_option_18_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookComponent_Template_input_ngModelChange_23_listener($event) { return ctx.releaseDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddBookComponent_Template_input_change_28_listener($event) { return ctx.uploadImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddBookComponent_p_30_Template, 2, 1, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookComponent_Template_input_ngModelChange_32_listener($event) { return ctx.downloadURL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookComponent_Template_input_ngModelChange_35_listener($event) { return ctx.buyURL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookComponent_Template_input_ngModelChange_38_listener($event) { return ctx.readURL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookComponent_Template_input_ngModelChange_41_listener($event) { return ctx.rate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookComponent_Template_textarea_ngModelChange_44_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 28, "bookName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 30, "author"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.authorID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 32, "genre"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 34, "releaseDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.releaseDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 36, "poster"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgUploading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.downloadURL)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 38, "downloadURL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buyURL)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 40, "buyURL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.readURL)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 42, "readURL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rate)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 44, "rate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 46, "description"))("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.posterURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 48, "add"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 50, "book"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [":root {\n    --main: #fe2d53;\n    --float:'left';\n  } \n\n.formCont[_ngcontent-%COMP%] {\n  width: 83vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  margin-top: 5%;\n  height: 90vh;\n  direction: var(--dir);\n} \n\n.form[_ngcontent-%COMP%] {\n  background-color: #404e67;\n  padding: 2vw;\n  border-radius: 1vw;\n  box-shadow: 0 0 11px rgba(0, 0, 0, 0.3);\n  width: 70%;\n} \n\n.form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n  font-family: Cairo;\n} \n\n.input[_ngcontent-%COMP%] {\n  background-color: #404e67;\n  border-color: #dcdcdc;\n  color: #dcdcdc;\n  font-family: Cairo;\n} \n\n.form-control-file.uploadBtn[_ngcontent-%COMP%]{\n  width: 50%;\n  margin-left: 7%;\n  margin-right: 7%;\n\n\n} \n\n.loadingInd[_ngcontent-%COMP%]{\n  color: #dcdcdc;\n  font-family: Cairo;\n} \n\n.dropDown[_ngcontent-%COMP%] {\n  padding-top: 0;\n} \n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #fe2d53;\n  color: #dcdcdc;\n  font-family: \"Courier New\", Courier, monospace;\n  border-radius: 1vh;\n  margin-top: 1vh;\n  width: 20%;\n} \n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n  float: var(--float);\n} \n\n.bookView[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  margin-left: 20vw;\n} \n\n.bookView[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  height: 30vh;\n} \n\n.card-text[_ngcontent-%COMP%]{\n    font-family: Cairo;\n\n} \n\nlabel[_ngcontent-%COMP%]{\n    color:#fff; \n    float: left;\n    font-family: Cairo;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiYWRkLWJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztBQ0RGO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjs7O0FBR2xCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLDhDQUE4QztFQUM5QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYWRkLWJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAgOnJvb3Qge1xuICAgIC0tbWFpbjogI2ZlMmQ1MztcbiAgICAtLWZsb2F0OidsZWZ0JztcbiAgfVxuICAiLCJAaW1wb3J0ICcuLi8uLi9hcHAuY29tcG9uZW50LmNzcyc7IFxuXG4uZm9ybUNvbnQge1xuICB3aWR0aDogODN2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIG1hcmdpbi10b3A6IDUlO1xuICBoZWlnaHQ6IDkwdmg7XG4gIGRpcmVjdGlvbjogdmFyKC0tZGlyKTtcbn1cbi5mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNGU2NztcbiAgcGFkZGluZzogMnZ3O1xuICBib3JkZXItcmFkaXVzOiAxdnc7XG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgd2lkdGg6IDcwJTtcbn1cbi5mb3JtIC5idG57XG4gIGZvbnQtZmFtaWx5OiBDYWlybztcbn1cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDRlNjc7XG4gIGJvcmRlci1jb2xvcjogI2RjZGNkYztcbiAgY29sb3I6ICNkY2RjZGM7XG4gIGZvbnQtZmFtaWx5OiBDYWlybztcbn1cblxuLmZvcm0tY29udHJvbC1maWxlLnVwbG9hZEJ0bntcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDclO1xuICBtYXJnaW4tcmlnaHQ6IDclO1xuXG5cbn1cbi5sb2FkaW5nSW5ke1xuICBjb2xvcjogI2RjZGNkYztcbiAgZm9udC1mYW1pbHk6IENhaXJvO1xufVxuXG5cbi5kcm9wRG93biB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTJkNTM7XG4gIGNvbG9yOiAjZGNkY2RjO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcbiAgbWFyZ2luLXRvcDogMXZoO1xuICB3aWR0aDogMjAlO1xufVxuLmZvcm0tZ3JvdXAgbGFiZWx7XG4gIGZsb2F0OiB2YXIoLS1mbG9hdCk7XG59XG5cbi5ib29rVmlldyB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tbGVmdDogMjB2dztcbn1cblxuLmJvb2tWaWV3IC5jb3ZlciB7XG4gIGhlaWdodDogMzB2aDtcbn1cblxuLmNhcmQtdGV4dHtcbiAgICBmb250LWZhbWlseTogQ2Fpcm87XG5cbn1cbmxhYmVse1xuICAgIGNvbG9yOiNmZmY7IFxuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBDYWlybztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-book',
                templateUrl: './add-book.component.html',
                styleUrls: ['./add-book.component.css']
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "8u5e":
/*!*********************************************!*\
  !*** ./src/app/Queries/getAuthors.query.ts ***!
  \*********************************************/
/*! exports provided: getAuthors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthors", function() { return getAuthors; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const getAuthors = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    query{
        authors{
            id 
            name
            avatarURL
          }
    }
`;


/***/ }),

/***/ "9u1E":
/*!***********************************************!*\
  !*** ./src/app/Mutations/addBook.mutation.ts ***!
  \***********************************************/
/*! exports provided: addBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBook", function() { return addBook; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const addBook = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    mutation addBook(
        $name:String!,
        $genreID:String!,
        $authorID:ID!,
        $description:String!,
        $releaseDate:String,
        $posterURL:String,
        $buyURL:String,
        $downloadURL:String,
        $rate:Int,
        $readURL:String!){
        addBook(name: $name,
                genreID: $genreID,
                description: $description,
                posterURL : $posterURL,
                authorID:$authorID,
                releaseDate:$releaseDate,
                buyURL:$buyURL,
                downloadURL:$downloadURL,
                rate:$rate, 
                readURL:$readURL){
            name
          }
    }
`;


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBVKJIigcT3sfzt0eIN3z7Tf27h4dvga-s",
        authDomain: "booky-a6a30.firebaseapp.com",
        databaseURL: "https://booky-a6a30.firebaseio.com",
        projectId: "booky-a6a30",
        storageBucket: "booky-a6a30.appspot.com",
        messagingSenderId: "474191272686",
        appId: "1:474191272686:web:3dff14e9ca19dd334cf1ff",
        measurementId: "G-78GEZ0VJ2Q"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KoZ3":
/*!*************************************************!*\
  !*** ./src/app/Mutations/addAuthor.mutation.ts ***!
  \*************************************************/
/*! exports provided: addAuthor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAuthor", function() { return addAuthor; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const addAuthor = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    mutation addAuthor($name:String!,$age:Int!,$bio:String,$avatarURL:String){
        addAuthor(name: $name, age: $age, bio: $bio, avatarURL : $avatarURL){
            name
          }
    }
`;


/***/ }),

/***/ "LCYd":
/*!***************************************************************!*\
  !*** ./src/app/Components/show-books/show-books.component.ts ***!
  \***************************************************************/
/*! exports provided: ShowBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowBooksComponent", function() { return ShowBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Queries_getBooks_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Queries/getBooks.query */ "uKhG");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _book_card_book_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../book-card/book-card.component */ "OkbM");








function ShowBooksComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowBooksComponent_div_2_app_book_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-book-card", 7);
} if (rf & 2) {
    const book_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("book", book_r3);
} }
function ShowBooksComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowBooksComponent_div_2_app_book_card_1_Template, 1, 1, "app-book-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.books);
} }
class ShowBooksComponent {
    constructor(apollo, titleService, tr) {
        this.apollo = apollo;
        this.titleService = titleService;
        this.tr = tr;
        this.loading = true;
        this.books = [];
    }
    ngOnInit() {
        // this.tr.get("books").subscribe(res => {
        //   this.titleService.setTitle(res);
        // })
        this.querySubscription = this.apollo.watchQuery({
            query: _Queries_getBooks_query__WEBPACK_IMPORTED_MODULE_1__["getBooks"]
        }).valueChanges.subscribe(({ data, loading }) => {
            this.loading = loading;
            this.books = data === null || data === void 0 ? void 0 : data.books;
            // console.log("Data loaded : ", data.books);
        });
    }
}
ShowBooksComponent.ɵfac = function ShowBooksComponent_Factory(t) { return new (t || ShowBooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
ShowBooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowBooksComponent, selectors: [["app-show-books"]], decls: 3, vars: 2, consts: [[1, "booksContainer"], ["class", "overlay", 4, "ngIf"], ["class", "book", 4, "ngIf"], [1, "overlay"], ["src", "../../../assets/images/loading.gif", 1, "loadImg"], [1, "book"], [3, "book", 4, "ngFor", "ngForOf"], [3, "book"]], template: function ShowBooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowBooksComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowBooksComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _book_card_book_card_component__WEBPACK_IMPORTED_MODULE_6__["BookCardComponent"]], styles: [".book[_ngcontent-%COMP%]{\n    padding-left: 2vw;\n}\n\n.overlay[_ngcontent-%COMP%]{\n    width: 82vw;\n    height: 90vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    margin-left: 1%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakIiLCJmaWxlIjoic2hvdy1ib29rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2t7XG4gICAgcGFkZGluZy1sZWZ0OiAydnc7XG59XG5cbi5vdmVybGF5e1xuICAgIHdpZHRoOiA4MnZ3O1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowBooksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-books',
                templateUrl: './show-books.component.html',
                styleUrls: ['./show-books.component.css']
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "OMCE":
/*!***************************************************************!*\
  !*** ./src/app/Components/genre-card/genre-card.component.ts ***!
  \***************************************************************/
/*! exports provided: GenreCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreCardComponent", function() { return GenreCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GenreCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
GenreCardComponent.ɵfac = function GenreCardComponent_Factory(t) { return new (t || GenreCardComponent)(); };
GenreCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenreCardComponent, selectors: [["app-genre-card"]], inputs: { genre: "genre" }, decls: 5, vars: 2, consts: [[1, "card", "genreCard", 2, "width", "18rem"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title", "generName"]], template: function GenreCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.genre.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.genre.name);
    } }, styles: [".genreCard[_ngcontent-%COMP%] {\n    border-radius: 2vw;\n    overflow: hidden;\n    margin: 1vw;\n    text-align: center;\n    box-shadow: 0 0 11px rgba(0, 0, 0, 0.3);\n    display: inline-block;\n    opacity: 0.8;\n    cursor: pointer;\n  }\n  .genreCard[_ngcontent-%COMP%]:hover{\n    opacity: 1;\n    transform: scale(1.05);\n    transition: 0.5s ease-in-out;\n  }\n  .card-img-top[_ngcontent-%COMP%] {\n    height: 20vh;\n  }\n  .generName[_ngcontent-%COMP%]{\n    font-family: 'Cairo', sans-serif;\n    font-weight: 600;\n    color: #fe2d53\n    \n}\n  .card-body[_ngcontent-%COMP%]{\n    background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbnJlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCOztBQUVKO0VBQ0E7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoiZ2VucmUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlbnJlQ2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMnZ3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuZ2VucmVDYXJkOmhvdmVye1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5jYXJkLWltZy10b3Age1xuICAgIGhlaWdodDogMjB2aDtcbiAgfVxuXG4gIC5nZW5lck5hbWV7XG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZlMmQ1M1xuICAgIFxufVxuLmNhcmQtYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenreCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-genre-card',
                templateUrl: './genre-card.component.html',
                styleUrls: ['./genre-card.component.css']
            }]
    }], function () { return []; }, { genre: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['genre']
        }] }); })();


/***/ }),

/***/ "OkbM":
/*!*************************************************************!*\
  !*** ./src/app/Components/book-card/book-card.component.ts ***!
  \*************************************************************/
/*! exports provided: BookCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCardComponent", function() { return BookCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BookCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
BookCardComponent.ɵfac = function BookCardComponent_Factory(t) { return new (t || BookCardComponent)(); };
BookCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookCardComponent, selectors: [["app-book-card"]], inputs: { book: "book" }, decls: 10, vars: 4, consts: [[1, "card", "bookCard", "col-sm-3", "p-0"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title", "bookName"], [1, "card-text", "bookDesc"], [1, "list-group", "list-group-flush", "authorDiv"], [1, "list-group-item", "authorName"]], template: function BookCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.book.posterURL || "https://www.imockups.com/storage/product/1753/HLemBweMKZjlpUXPpoh7.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.book.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book == null ? null : ctx.book.author == null ? null : ctx.book.author.name);
    } }, styles: [".bookCard[_ngcontent-%COMP%] {\n  border-radius: 2vw;\n  overflow: hidden;\n  margin: 1vw;\n  text-align: center;\n  box-shadow: 0 0 11px rgba(0, 0, 0, 0.3);\n  display: inline-block;\n  opacity: 0.8;\n  cursor: pointer;\n}\n.bookCard[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: scale(1.05);\n  transition: 0.5s ease-in-out;\n}\n.card-img-top[_ngcontent-%COMP%] {\n  height: 25vh;\n}\n.bookDesc[_ngcontent-%COMP%] {\n  height: 7.5vh;\n  overflow: hidden;\n  font-family: \"Cairo\", sans-serif;\n}\n.bookName[_ngcontent-%COMP%] {\n  font-family: \"Cairo\", sans-serif;\n  font-weight: 600;\n  color: #404e67;\n  height: 5vh;\n}\n.authorName[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fe2d53;\n  font-family: \"Cairo\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6ImJvb2stY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tDYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMnZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDF2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDAgMTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3BhY2l0eTogMC44O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm9va0NhcmQ6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgaGVpZ2h0OiAyNXZoO1xufVxuLmJvb2tEZXNjIHtcbiAgaGVpZ2h0OiA3LjV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IFwiQ2Fpcm9cIiwgc2Fucy1zZXJpZjtcbn1cbi5ib29rTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDA0ZTY3O1xuICBoZWlnaHQ6IDV2aDtcbn1cbi5hdXRob3JOYW1lIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTJkNTM7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-card',
                templateUrl: './book-card.component.html',
                styleUrls: ['./book-card.component.css']
            }]
    }], function () { return []; }, { book: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['book']
        }] }); })();


/***/ }),

/***/ "Ot7Q":
/*!**********************************************!*\
  !*** ./src/app/Pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/navbar/navbar.component */ "UA8t");
/* harmony import */ var _Components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/sidebar/sidebar.component */ "UZdp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HomeComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
        // this.titleService.setTitle("Home")
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-2", "col-sm-4", "p-0"], [1, "content", "col-md-10", "col-sm-8"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _Components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [":root {\n    --main: #fe2d53;\n    --float:'left';\n  }\n.container-fluid[_ngcontent-%COMP%]{\n    direction: var(--dir);\n}\n.content[_ngcontent-%COMP%]{\n    width: 83.5vw;\n    margin-top: 6vh;\n    padding-top: 2vh;\n    \n    max-height: 94vh;\n    overflow: auto;\n    \n    text-align: center;\n    direction: ltr;\n}\n.content[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyIsIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FDRkg7SUFDSSxlQUFlO0lBQ2YsY0FBYztFQUNoQjtBREVGO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7RUFDOUIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmVtcHR5e1xuICAgIHdpZHRoOiAxNXZ3O1xufSAqL1xuQGltcG9ydCAnLi4vLi4vYXBwLmNvbXBvbmVudC5jc3MnO1xuXG4uY29udGFpbmVyLWZsdWlke1xuICAgIGRpcmVjdGlvbjogdmFyKC0tZGlyKTtcbn1cbi5jb250ZW50e1xuICAgIHdpZHRoOiA4My41dnc7XG4gICAgbWFyZ2luLXRvcDogNnZoO1xuICAgIHBhZGRpbmctdG9wOiAydmg7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICBtYXgtaGVpZ2h0OiA5NHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAxM3Z3OyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXJlY3Rpb246IGx0cjtcbn1cblxuLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6J3JlZCc7ICovXG4gIH1cbiIsIjo6bmctZGVlcCAgOnJvb3Qge1xuICAgIC0tbWFpbjogI2ZlMmQ1MztcbiAgICAtLWZsb2F0OidsZWZ0JztcbiAgfVxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    // rootStyle = document.querySelector(":root");
    constructor(translate) {
        this.translate = translate;
        this.title = 'Booky DB';
        this.currentLang = localStorage.getItem('lang');
        this.direction = localStorage.getItem('dir');
        let language = this.currentLang ? this.currentLang : 'en';
        let dir = this.direction ? this.direction : 'ltr';
        localStorage.setItem("lang", language);
        translate.setDefaultLang(language);
        // document.documentElement.style.setProperty('--dir', dir);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [":root {\n    --main: #fe2d53;\n    --float:'left';\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7RUFDaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgIDpyb290IHtcbiAgICAtLW1haW46ICNmZTJkNTM7XG4gICAgLS1mbG9hdDonbGVmdCc7XG4gIH1cbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "UA8t":
/*!*******************************************************!*\
  !*** ./src/app/Components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class NavbarComponent {
    // rootStyle: any = <HTMLElement>document.querySelector(":root");
    // 
    constructor(translate) {
        this.translate = translate;
        this.currentLang = localStorage.getItem('lang');
    }
    ngOnInit() {
        console.log("Current Lang : ", this.currentLang);
    }
    changeLang(targetLang) {
        // let targetLang = localStorage.getItem('lang') === 'en' ? 'ar' : 'en'; 
        console.log("Target  ", targetLang);
        let dir = targetLang === 'ar' ? 'rtl' : 'ltr';
        let float = targetLang === 'ar' ? 'right' : 'left';
        // document.documentElement.style.setProperty('--dir', dir);
        // document.documentElement.style.setProperty('--float', float);
        localStorage.setItem('lang', targetLang);
        localStorage.setItem('dir', dir);
        this.translate.use(targetLang);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-nav-bar"]], decls: 20, vars: 8, consts: [[1, "p-0", "bookyNav"], [1, "navbar-logo", "col-sm-2"], ["routerLink", "/", 1, "navbar-brand"], ["src", "../../../assets/images/logo.png", 1, "logoImg"], ["type", "text", "aria-label", "Search", 1, "form-control", "form-control-dark", "searchInput", "d-none", "d-sm-block", 3, "placeholder"], [1, "navbar-nav", "px-3", "signOut"], [1, "nav-item", "text-nowrap"], ["href", "#", 1, "nav-link"], [1, "langSelect", "form-control", 3, "change"], ["lang", ""], ["value", "en", 3, "selected"], ["value", "ar", 3, "selected"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " oOKy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NavbarComponent_Template_select_change_14_listener($event) { return ctx.changeLang($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "signOut"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.currentLang === "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.currentLang === "ar");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [":root {\n    --main: #fe2d53;\n    --float:'left';\n  }\n\n.bookyNav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 7vh;\n  padding-bottom: 0;\n  box-shadow: 0 0 11px rgba(0, 0, 0, 0.3);\n  width: 100vw;\n  \n  position: fixed;\n  background-color: #404e67;\n  z-index: 10;\n  \n  direction: var(--dir);\n}\n\n.searchInput[_ngcontent-%COMP%] {\n  \n  \n  border-color: #dcdcdc;\n  \n  height: 100%;\n  border-radius: 0;\n  font-family: Cairo;\n  \n}\n\n.navbar-logo[_ngcontent-%COMP%] {\n  \n  \n  height: 100%;\n  border-radius: 0;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  direction: ltr;\n}\n\n.logoImg[_ngcontent-%COMP%] {\n  width: 45px;\n}\n\n.signOut[_ngcontent-%COMP%] {\n  \n  height: 100%;\n  text-align: center;\n  justify-content: center;\n  \n  font-family: Cairo;\n}\n\n.signOut[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #dcdcdc;\n}\n\n.navbar-brand[_ngcontent-%COMP%]{\n  color:#dcdcdc\n}\n\n.langSelect[_ngcontent-%COMP%]{\n  background-color: transparent;\n  color: #dcdcdc;\n  font-family: Cairo;\n  font-size: small;\n}\n\noption[_ngcontent-%COMP%]{\n  color:#404e67;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwibmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7QUNERjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsZ0RBQWdEO0VBQ2hELDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgIDpyb290IHtcbiAgICAtLW1haW46ICNmZTJkNTM7XG4gICAgLS1mbG9hdDonbGVmdCc7XG4gIH1cbiAgIiwiQGltcG9ydCAnLi4vLi4vYXBwLmNvbXBvbmVudC5jc3MnO1xuXG4uYm9va3lOYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDd2aDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICAvKiBmbGV4LWRpcmVjdGlvbjogcm93OyAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDRlNjc7XG4gIHotaW5kZXg6IDEwO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xuICBkaXJlY3Rpb246IHZhcigtLWRpcik7XG59XG4uc2VhcmNoSW5wdXQge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7ICovXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXG4gIGJvcmRlci1jb2xvcjogI2RjZGNkYztcbiAgLyogY29sb3I6ICM0MDRlNjc7ICovXG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IENhaXJvO1xuICAvKiB3aWR0aDogNjUlOyAqL1xufVxuLm5hdmJhci1sb2dvIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzQwNGU2NzsgKi9cbiAgLyogd2lkdGg6IDE1JTsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4ubG9nb0ltZyB7XG4gIHdpZHRoOiA0NXB4O1xufVxuLnNpZ25PdXQge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0ZTY3OyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIHdpZHRoOiAxMHZ3OyAqL1xuICBmb250LWZhbWlseTogQ2Fpcm87XG59XG4uc2lnbk91dCBsaSBhIHtcbiAgY29sb3I6ICNkY2RjZGM7XG59XG4ubmF2YmFyLWJyYW5ke1xuICBjb2xvcjojZGNkY2RjXG59XG4ubGFuZ1NlbGVjdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZGNkY2RjO1xuICBmb250LWZhbWlseTogQ2Fpcm87XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5vcHRpb257XG4gIGNvbG9yOiM0MDRlNjc7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "UZdp":
/*!*********************************************************!*\
  !*** ./src/app/Components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






class SidebarComponent {
    constructor(translateService, translate) {
        this.translateService = translateService;
        this.translate = translate;
    }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-side-bar"]], decls: 47, vars: 27, consts: [[1, "sidebar"], [1, "sidebar-sticky"], [1, "nav", "flex-column", "menu"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/books", 1, "nav-link"], [1, "fas", "fa-book"], ["routerLink", "/authors", 1, "nav-link"], [1, "fas", "fa-pen"], ["routerLink", "/genres", 1, "nav-link"], [1, "fas", "fa-puzzle-piece"], ["routerLink", "/users", 1, "nav-link"], [1, "fas", "fa-users"], [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"], [1, "sectionName"], ["href", "#", 1, "d-flex", "align-items-center", "text-muted"], ["routerLink", "/addBook", 1, "nav-link"], [1, "fas", "fa-book-medical"], ["routerLink", "/addAuthor", 1, "nav-link"], [1, "fas", "fa-user-plus"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, "books"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, "authors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 13, "genres"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 15, "users"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 17, "edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 19, "add"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 21, "book"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 23, "add"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 25, "author"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [":root {\n    --main: #fe2d53;\n    --float:'left';\n  }\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  height: 93vh;\n  background-color: #404e67;\n  \n  \n  margin-top: 7vh;\n  direction: var(--dir);\n}\n\nul.menu[_ngcontent-%COMP%] {\n  padding-top: 4vh;\n  padding-inline-start: 0;\n}\n\nli.nav-item[_ngcontent-%COMP%] {\n  margin-bottom: 1vh;\n  margin-top: 1vh;\n  display: inline-block;\n  width: 80%;\n  align-self: center;\n  text-align: initial;\n}\n\nli.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  font-family: Cairo;\n}\n\ni[_ngcontent-%COMP%] {\n  margin-right: 1vw;\n  margin-left: 1vw;\n\n}\n\na.nav-link[_ngcontent-%COMP%] {\n  color: #dcdcdc;\n}\n\nli.active[_ngcontent-%COMP%] {\n  \n  \n  \n  background-color: var(--main);\n\n  border-radius: 10px;\n}\n\n.sectionName[_ngcontent-%COMP%] {\n  color: #fe2d53;\n  font-weight: bold;\n  font-size: large;\n  font-family: Cairo;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwic2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0FDREY7O0dBRUc7O0FBRUg7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0FBRWxCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLDZCQUE2Qjs7RUFFN0IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAgOnJvb3Qge1xuICAgIC0tbWFpbjogI2ZlMmQ1MztcbiAgICAtLWZsb2F0OidsZWZ0JztcbiAgfVxuICAiLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5jc3NcIjtcblxuLyogOjpuZy1kZWVwICA6cm9vdCB7XG4gIC0tbWFpbjogI2RjZGNkYztcbn0gKi9cblxuLnNpZGViYXIge1xuICBoZWlnaHQ6IDkzdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDRlNjc7XG4gIC8qIHdpZHRoOiAxNXZ3OyAqL1xuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gIG1hcmdpbi10b3A6IDd2aDtcbiAgZGlyZWN0aW9uOiB2YXIoLS1kaXIpO1xufVxudWwubWVudSB7XG4gIHBhZGRpbmctdG9wOiA0dmg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xufVxuXG5saS5uYXYtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgbWFyZ2luLXRvcDogMXZoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cbmxpLm5hdi1pdGVtIHNwYW57XG4gIGZvbnQtZmFtaWx5OiBDYWlybztcbn1cbmkge1xuICBtYXJnaW4tcmlnaHQ6IDF2dztcbiAgbWFyZ2luLWxlZnQ6IDF2dztcblxufVxuYS5uYXYtbGluayB7XG4gIGNvbG9yOiAjZGNkY2RjO1xufVxubGkuYWN0aXZlIHtcbiAgLyogYm9yZGVyOiBzb2xpZCAjZmUyZDUzOyAqL1xuICAvKiBib3JkZXItd2lkdGg6IDAgMCAwIDVweDsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZlMmQ1MzsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XG5cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zZWN0aW9uTmFtZSB7XG4gIGNvbG9yOiAjZmUyZDUzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC1mYW1pbHk6IENhaXJvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_loaders_translate_browser_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/loaders/translate-browser.loader */ "7v5E");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nguniversal/common */ "rsbC");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/navbar/navbar.component */ "UA8t");
/* harmony import */ var _Components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/sidebar/sidebar.component */ "UZdp");
/* harmony import */ var _Components_show_books_show_books_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/show-books/show-books.component */ "LCYd");
/* harmony import */ var _Components_book_card_book_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/book-card/book-card.component */ "OkbM");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./graphql.module */ "4KHl");
/* harmony import */ var _Components_show_authors_show_authors_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/show-authors/show-authors.component */ "0SwS");
/* harmony import */ var _Components_author_card_author_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/author-card/author-card.component */ "ukor");
/* harmony import */ var _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Pages/home/home.component */ "Ot7Q");
/* harmony import */ var _Components_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/add-author/add-author.component */ "pfuH");
/* harmony import */ var _Components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/add-book/add-book.component */ "83e3");
/* harmony import */ var _Components_genre_card_genre_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/genre-card/genre-card.component */ "OMCE");
/* harmony import */ var _Components_show_genres_show_genres_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/show-genres/show-genres.component */ "ywrg");
/* harmony import */ var _Components_show_users_show_users_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/show-users/show-users.component */ "/17z");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__["TransferHttpCacheModule"],
            _graphql_module__WEBPACK_IMPORTED_MODULE_14__["GraphQLModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            // AngularFireModule.initializeApp(environment?.firebaseConfig),
            // AngularFireStorageModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: _shared_loaders_translate_browser_loader__WEBPACK_IMPORTED_MODULE_6__["translateBrowserLoaderFactory"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["TransferState"]]
                }
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["IonicModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _Components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
        _Components_show_books_show_books_component__WEBPACK_IMPORTED_MODULE_12__["ShowBooksComponent"],
        _Components_book_card_book_card_component__WEBPACK_IMPORTED_MODULE_13__["BookCardComponent"],
        _Components_show_authors_show_authors_component__WEBPACK_IMPORTED_MODULE_15__["ShowAuthorsComponent"],
        _Components_author_card_author_card_component__WEBPACK_IMPORTED_MODULE_16__["AuthorCardComponent"],
        _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _Components_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_18__["AddAuthorComponent"],
        _Components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_19__["AddBookComponent"],
        _Components_genre_card_genre_card_component__WEBPACK_IMPORTED_MODULE_20__["GenreCardComponent"],
        _Components_show_genres_show_genres_component__WEBPACK_IMPORTED_MODULE_21__["ShowGenresComponent"],
        _Components_show_users_show_users_component__WEBPACK_IMPORTED_MODULE_22__["ShowUsersComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__["TransferHttpCacheModule"],
        _graphql_module__WEBPACK_IMPORTED_MODULE_14__["GraphQLModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["IonicModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                    _Components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                    _Components_show_books_show_books_component__WEBPACK_IMPORTED_MODULE_12__["ShowBooksComponent"],
                    _Components_book_card_book_card_component__WEBPACK_IMPORTED_MODULE_13__["BookCardComponent"],
                    _Components_show_authors_show_authors_component__WEBPACK_IMPORTED_MODULE_15__["ShowAuthorsComponent"],
                    _Components_author_card_author_card_component__WEBPACK_IMPORTED_MODULE_16__["AuthorCardComponent"],
                    _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                    _Components_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_18__["AddAuthorComponent"],
                    _Components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_19__["AddBookComponent"],
                    _Components_genre_card_genre_card_component__WEBPACK_IMPORTED_MODULE_20__["GenreCardComponent"],
                    _Components_show_genres_show_genres_component__WEBPACK_IMPORTED_MODULE_21__["ShowGenresComponent"],
                    _Components_show_users_show_users_component__WEBPACK_IMPORTED_MODULE_22__["ShowUsersComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__["TransferHttpCacheModule"],
                    _graphql_module__WEBPACK_IMPORTED_MODULE_14__["GraphQLModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    // AngularFireModule.initializeApp(environment?.firebaseConfig),
                    // AngularFireStorageModule,
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                            useFactory: _shared_loaders_translate_browser_loader__WEBPACK_IMPORTED_MODULE_6__["translateBrowserLoaderFactory"],
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["TransferState"]]
                        }
                    }),
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_23__["IonicModule"].forRoot()
                ],
                providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "huCn":
/*!********************************************!*\
  !*** ./src/app/Queries/getGenres.query.ts ***!
  \********************************************/
/*! exports provided: getGenres */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenres", function() { return getGenres; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const getGenres = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    query{
        genres{
            id
            name
            photoURL
        }
    }
`;


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "pfuH":
/*!***************************************************************!*\
  !*** ./src/app/Components/add-author/add-author.component.ts ***!
  \***************************************************************/
/*! exports provided: AddAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAuthorComponent", function() { return AddAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Mutations_addAuthor_mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Mutations/addAuthor.mutation */ "KoZ3");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class AddAuthorComponent {
    constructor(apollo) {
        this.apollo = apollo;
    }
    ngOnInit() {
    }
    addAuthor() {
        this.apollo.mutate({
            mutation: _Mutations_addAuthor_mutation__WEBPACK_IMPORTED_MODULE_1__["addAuthor"],
            variables: {
                name: this.authorName,
                age: this.age,
                bio: this.bio,
                avatarURL: this.avatarURL
            }
        }).subscribe(({ data }) => {
            console.log("Adding Author RES : ", data);
            this.age = null;
            this.authorName = "";
            this.bio = "";
            this.avatarURL = "";
            alert("Author Added Successfully");
        });
    }
}
AddAuthorComponent.ɵfac = function AddAuthorComponent_Factory(t) { return new (t || AddAuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"])); };
AddAuthorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddAuthorComponent, selectors: [["app-add-author"]], decls: 19, vars: 7, consts: [[1, "formCont", 3, "submit"], [1, "form"], [1, "form-group"], ["type", "text", "name", "authorName", "placeholder", "Author Name", 1, "form-control", "input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "avatarURL", "placeholder", "Avatar URL", 1, "form-control", "input", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "age", "placeholder", "Age", 1, "form-control", "input", 3, "ngModel", "ngModelChange"], ["placeholder", "Bio", "name", "bio", "rows", "3", 1, "form-control", "input", 3, "ngModel", "ngModelChange"], [1, "card", "authorView", "text-center", 2, "width", "18rem"], [1, "card-img-top", "cover", 3, "src"], [1, "card-body"], [1, "card-text"], ["type", "submit", 1, "btn", "btn-submit"]], template: function AddAuthorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddAuthorComponent_Template_div_submit_0_listener() { return ctx.addAuthor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAuthorComponent_Template_input_ngModelChange_3_listener($event) { return ctx.authorName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAuthorComponent_Template_input_ngModelChange_5_listener($event) { return ctx.avatarURL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAuthorComponent_Template_input_ngModelChange_7_listener($event) { return ctx.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAuthorComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.bio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.authorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.avatarURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.avatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.age);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: [".formCont[_ngcontent-%COMP%] {\n  width: 83vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  margin-top: 5%;\n  height: 90vh;\n}\n.form[_ngcontent-%COMP%] {\n  background-color: #404e67;\n  padding: 2vw;\n  border-radius: 1vw;\n  box-shadow: 0 0 11px rgba(0, 0, 0, 0.3);\n  width: 70%;\n}\n.input[_ngcontent-%COMP%]{\n    background-color: #404e67;\n    border-color: #dcdcdc;\n    color:#dcdcdc; \n    font-family: Cairo;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #fe2d53;\n  color:#dcdcdc; \n  font-family: 'Courier New', Courier, monospace;\n  border-radius: 1vh;\n  margin-top: 1vh;\n  width: 20%;\n}\n.authorView[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  margin-left: 20vw;\n}\n.authorView[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  height: 30vh;\n}\n.card-text[_ngcontent-%COMP%]{\n    font-family: Cairo;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hdXRob3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLFVBQVU7QUFDWjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYWRkLWF1dGhvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1Db250IHtcbiAgd2lkdGg6IDgzdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuLmZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0ZTY3O1xuICBwYWRkaW5nOiAydnc7XG4gIGJvcmRlci1yYWRpdXM6IDF2dztcbiAgYm94LXNoYWRvdzogMCAwIDExcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB3aWR0aDogNzAlO1xufVxuLmlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDRlNjc7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGNkY2RjO1xuICAgIGNvbG9yOiNkY2RjZGM7IFxuICAgIGZvbnQtZmFtaWx5OiBDYWlybztcbn1cblxuLmJ0bi1zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmUyZDUzO1xuICBjb2xvcjojZGNkY2RjOyBcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xuICBtYXJnaW4tdG9wOiAxdmg7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5hdXRob3JWaWV3IHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1sZWZ0OiAyMHZ3O1xufVxuXG4uYXV0aG9yVmlldyAuY292ZXIge1xuICBoZWlnaHQ6IDMwdmg7XG59XG5cbi5jYXJkLXRleHR7XG4gICAgZm9udC1mYW1pbHk6IENhaXJvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAuthorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-author',
                templateUrl: './add-author.component.html',
                styleUrls: ['./add-author.component.css']
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }]; }, null); })();


/***/ }),

/***/ "uKhG":
/*!*******************************************!*\
  !*** ./src/app/Queries/getBooks.query.ts ***!
  \*******************************************/
/*! exports provided: getBooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBooks", function() { return getBooks; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const getBooks = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    query{
        books{
            id 
            name
            description
            posterURL
            author{
                id
                name
            }
          }
    }
`;


/***/ }),

/***/ "ukor":
/*!*****************************************************************!*\
  !*** ./src/app/Components/author-card/author-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: AuthorCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorCardComponent", function() { return AuthorCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthorCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthorCardComponent.ɵfac = function AuthorCardComponent_Factory(t) { return new (t || AuthorCardComponent)(); };
AuthorCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorCardComponent, selectors: [["app-author-card"]], inputs: { author: "author" }, decls: 4, vars: 3, consts: [[1, "authorCard", 2, "width", "22rem"], ["alt", "Card image cap", 1, "card-img-top", 3, "src", "title"], [1, "card-title", "authorName"]], template: function AuthorCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.author.avatarURL || "https://www.imockups.com/storage/product/1753/HLemBweMKZjlpUXPpoh7.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", (ctx.author == null ? null : ctx.author.name) || "authorCover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.author == null ? null : ctx.author.name);
    } }, styles: [".authorCard[_ngcontent-%COMP%] {\n  border-radius: 2vw;\n  overflow: hidden;\n  margin: 1vw;\n  text-align: center;\n  \n  display: inline-block;\n  opacity: 0.7;\n  cursor: pointer;\n}\n.card-img-top[_ngcontent-%COMP%] {\n  height: 25vh;\n  width: 25vh;\n  border-radius: 12.5vh;\n  border: 13px solid #fe2d53;\n  box-shadow: 0 0 11px rgba(0, 0, 0, 0.3);\n}\n.authorCard[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1) ;\n    opacity: 1;\n    transition: 0.5s ease-in-out;\n}\n.authorName[_ngcontent-%COMP%] {\n  color: #fe2d53;\n  \n  margin-top: 2vh;\n  font-family: \"Cairo\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHVDQUF1QztBQUN6QztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDViw0QkFBNEI7QUFDaEM7QUFFQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGdDQUFnQztBQUNsQyIsImZpbGUiOiJhdXRob3ItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGhvckNhcmQge1xuICBib3JkZXItcmFkaXVzOiAydnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMXZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkLWltZy10b3Age1xuICBoZWlnaHQ6IDI1dmg7XG4gIHdpZHRoOiAyNXZoO1xuICBib3JkZXItcmFkaXVzOiAxMi41dmg7XG4gIGJvcmRlcjogMTNweCBzb2xpZCAjZmUyZDUzO1xuICBib3gtc2hhZG93OiAwIDAgMTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uYXV0aG9yQ2FyZDpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmF1dGhvck5hbWUge1xuICBjb2xvcjogI2ZlMmQ1MztcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZlMmQ1MzsgKi9cbiAgbWFyZ2luLXRvcDogMnZoO1xuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-author-card',
                templateUrl: './author-card.component.html',
                styleUrls: ['./author-card.component.css']
            }]
    }], function () { return []; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['author']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _Components_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/add-author/add-author.component */ "pfuH");
/* harmony import */ var _Components_show_authors_show_authors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/show-authors/show-authors.component */ "0SwS");
/* harmony import */ var _Components_show_books_show_books_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/show-books/show-books.component */ "LCYd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/home/home.component */ "Ot7Q");
/* harmony import */ var _Components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/add-book/add-book.component */ "83e3");
/* harmony import */ var _Components_show_genres_show_genres_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/show-genres/show-genres.component */ "ywrg");
/* harmony import */ var _Components_show_users_show_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/show-users/show-users.component */ "/17z");











const routes = [
    { path: '', component: _Pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], children: [
            { path: '', component: _Components_show_books_show_books_component__WEBPACK_IMPORTED_MODULE_2__["ShowBooksComponent"] },
            { path: 'books', component: _Components_show_books_show_books_component__WEBPACK_IMPORTED_MODULE_2__["ShowBooksComponent"] },
            { path: 'authors', component: _Components_show_authors_show_authors_component__WEBPACK_IMPORTED_MODULE_1__["ShowAuthorsComponent"] },
            { path: 'genres', component: _Components_show_genres_show_genres_component__WEBPACK_IMPORTED_MODULE_7__["ShowGenresComponent"] },
            { path: 'users', component: _Components_show_users_show_users_component__WEBPACK_IMPORTED_MODULE_8__["ShowUsersComponent"] },
            { path: 'addAuthor', component: _Components_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_0__["AddAuthorComponent"] },
            { path: 'addBook', component: _Components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_6__["AddBookComponent"] },
        ] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { useHash: false, initialNavigation: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { useHash: false, initialNavigation: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ywrg":
/*!*****************************************************************!*\
  !*** ./src/app/Components/show-genres/show-genres.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowGenresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowGenresComponent", function() { return ShowGenresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Queries_getGenres_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Queries/getGenres.query */ "huCn");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _genre_card_genre_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../genre-card/genre-card.component */ "OMCE");







function ShowGenresComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowGenresComponent_div_2_app_genre_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-genre-card", 7);
} if (rf & 2) {
    const genre_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("genre", genre_r3);
} }
function ShowGenresComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowGenresComponent_div_2_app_genre_card_1_Template, 1, 1, "app-genre-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.genres);
} }
class ShowGenresComponent {
    constructor(apollo, titleService) {
        this.apollo = apollo;
        this.titleService = titleService;
        this.loading = true;
        this.genres = [];
    }
    ngOnInit() {
        this.querySub = this.apollo.watchQuery({
            query: _Queries_getGenres_query__WEBPACK_IMPORTED_MODULE_1__["getGenres"]
        }).valueChanges.subscribe(({ data, loading }) => {
            this.loading = loading;
            this.genres = data === null || data === void 0 ? void 0 : data.genres;
        });
    }
}
ShowGenresComponent.ɵfac = function ShowGenresComponent_Factory(t) { return new (t || ShowGenresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
ShowGenresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowGenresComponent, selectors: [["app-show-genres"]], decls: 3, vars: 2, consts: [[1, "genresContainer"], ["class", "overlay", 4, "ngIf"], ["class", "genre", 4, "ngIf"], [1, "overlay"], ["src", "../../../assets/images/loading.gif", 1, "loadImg"], [1, "genre"], [3, "genre", 4, "ngFor", "ngForOf"], [3, "genre"]], template: function ShowGenresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowGenresComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowGenresComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _genre_card_genre_card_component__WEBPACK_IMPORTED_MODULE_5__["GenreCardComponent"]], styles: [".genre[_ngcontent-%COMP%]{\n    padding-left: 2vw;\n}\n\n.overlay[_ngcontent-%COMP%]{\n    width: 82vw;\n    height: 90vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    margin-left: 1%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctZ2VucmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCIiwiZmlsZSI6InNob3ctZ2VucmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VucmV7XG4gICAgcGFkZGluZy1sZWZ0OiAydnc7XG59XG5cbi5vdmVybGF5e1xuICAgIHdpZHRoOiA4MnZ3O1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowGenresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-genres',
                templateUrl: './show-genres.component.html',
                styleUrls: ['./show-genres.component.css']
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map