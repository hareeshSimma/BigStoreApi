webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/components/buynow/buynow.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel{\n    margin-top: 15px;\n}\n.panel-default>.panel-heading {\n    color:white;\n    background-color: #256a95;\n     cursor: pointer;\n     height: 50px;\n}\n.pbody{\n    padding-left: 2pc;\n    padding-right: 2pc;\n}\n.myradiobtn{\n    position: absolute;\n    margin-top: 38px;\n    margin-left: -27px\n}\n.marginleft{\n    margin-left: 23px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/buynow/buynow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <!-- login fields -->\n  <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n                <a data-toggle=\"collapse\"  href=\"#collapseOne\">\n                  <span class=\"glyphicon glyphicon-ok\" *ngIf=\"token\">\n                </span>&nbsp;&nbsp;&nbsp;1.&nbsp;Login Id {{currentUser.email}}</a>\n            </h4>\n        </div>\n    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\n        <div class=\"panel-body\">\n            <div class=\"\">\n        <p> You are already logged in as {{currentUser.email}}</p>\n            </div>\n\n</div>\n</div>\n</div>\n<!-- Select address fields -->\n<div class=\"panel panel-default\">\n    <div (click)=\"addressopen=!addressopen\"  [className]=\"addressopen?'panel-heading collapsed':'panel-heading'\" data-toggle=\"collapse\"  data-parent=\"#accordion\">\n        <h4 class=\"panel-title\">\n            <a>\n              <span class=\"glyphicon glyphicon-ok\" *ngIf=\"addressopen\">\n            </span>&nbsp;&nbsp;&nbsp;2.&nbsp;Select Address</a>\n        </h4>\n    </div>\n<div id=\"collapseTwo\" [className]=\"addressopen? 'panel-collapse collapse':'panel-collapse collapse in'\" >\n    <div class=\"panel-body pbody\">\n        <div class=\"\">\n            <!-- <input type=\"radio\" class=\"myradiobtn\"> -->\n\n            <div class=\"panel panel-default marginleft\" *ngFor=\"let address of userAddress;let idx=index;\">\n            <input type=\"radio\" class=\"myradiobtn\" [checked]=\"idx==index\" [value]=\"address\" [name]=\"address\"  (click)=\"myAddress(idx)\">\n              \n                <div class=\"panel-body\">\n                  <span>{{address.fullname}}</span>\n                 &nbsp;&nbsp; <span>{{address.mobile}}</span>\n                  <p>{{address.address}}</p>\n                  <div *ngIf=\"idx==index\">\n                      <button type=\"submit\" class=\"btn btn-info btn-md\"  (click)=\"deliver(address)\">\n                          Deliver to This Address</button>\n                  </div>\n\n                </div>\n\n              </div>\n      \n        </div>\n<!-- add address -->\n        <div class=\"panel panel-default\">\n            <div class=\"\" (click)=\" out = !out\" [className]=\"out?'panel-heading collapsed':'panel-heading'\" data-toggle=\"collapse\"  data-parent=\"#accordion\">\n                <h4 class=\"panel-title\">\n                    <a ><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                    &nbsp;Add Address</a>\n                </h4>\n            </div>\n            <div id=\"collapse11\"  [className]=\"out? 'panel-collapse collapse':'panel-collapse collapse in'\">\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <form #myForm=\"ngForm\" >\n                        <div class=\"col-md-offset-3 col-md-6\">\n                            <div class=\"form-group\">\n                             <span>Full Name:</span>  \n                              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"data.fullname\" #fullname=\"ngModel\" name=\"fullname\" placeholder=\"\" required />\n                              <div *ngIf=\"fullname.errors && (fullname.dirty || fullname.touched)\" class=\"error\">\n                                  <div [hidden]=\"!fullname.errors.required\">Please fill out this field.</div>\n                              </div>\n                            \n                            </div>\n                            <div class=\"form-group\">\n                                <span>Mobile Number:</span>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"data.mobile\" name=\"mobile\" #mobile=\"ngModel\" pattern=\"^[6789]\\d{9}$\"  maxlength=\"10\"  placeholder=\"\" required />\n                           \n                                <div *ngIf=\"mobile.errors && (mobile.dirty || mobile.touched)\" class=\"error\">\n                                    <div [hidden]=\"!mobile.errors.required\">Please fill out this field..</div>\n                                    <div [hidden]=\"!mobile.errors.pattern\">Not a valid Mobile Number.</div>\n                                </div>\n                              </div>\n                            <div class=\"form-group\">\n                                <span>Pincode:</span>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"data.pincode\" name=\"pincode\" #pincode=\"ngModel\" placeholder=\"\" pattern=\"^[1-9][0-9]{5}$\"  maxlength=\"6\"  required />\n                                <div *ngIf=\"pincode.errors && (pincode.dirty || pincode.touched)\" class=\"error\">\n                                    <div [hidden]=\"!pincode.errors.required\">Please fill out this field..</div>\n                                    <div [hidden]=\"!pincode.errors.pattern\">Please Enter  Valid Pincode.</div>\n                                </div>\n                              </div>\n                            <div class=\"form-group\">\n                                <span>Address (Area and Street) <i>max 250 characters  only</i>:</span>\n                              \n                                <textarea class=\"form-control\"  [(ngModel)]=\"data.address\" placeholder=\"\" name=\"address\" #address=\"ngModel\" maxlength=\"250\" required></textarea>\n                                <div *ngIf=\"address.errors && (address.dirty || address.touched)\" class=\"error\">\n                                    <div [hidden]=\"!address.errors.required\">Please fill out this field.</div>\n                                </div>\n                              </div>\n                            <div class=\"form-group\">\n                                <span>City:</span>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"data.city\" #city=\"ngModel\" name=\"city\" placeholder=\"\" required />\n                           \n                                <div *ngIf=\"city.errors && (city.dirty || city.touched)\" class=\"error\">\n                                    <div [hidden]=\"!city.errors.required\">Please fill out this field.</div>\n                                </div>  \n                               </div>\n                            <div class=\"form-group\">\n                                <span>\n                                    State:</span>\n                                <select class=\"form-control\" [(ngModel)]=\"data.state\"  #state=\"ngModel\" name=\"state\" required>\n                                    <option value=\"\">Select State</option>\n                                    <option value=\"Andhara Predesh\">AP</option>\n                                    <option value=\"Telangana\">TS</option>\n                                    <!-- <option>Contact</option> -->\n                                </select>\n                                <div *ngIf=\"state.errors && (state.dirty || state.touched)\" class=\"error\">\n                                    <div [hidden]=\"!state.errors.required\">Please fill out this field.</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <button type=\"submit\" class=\"btn btn-info btn-md\" [disabled]=\"!myForm.form.valid\" (click)=\"save(data)\">\n                                    <i class=\"fa fa-floppy-o\" aria-hidden=\"true\" ></i>&nbsp;Save</button>\n                                <button type=\"button\" class=\"btn btn-danger btn-md\" (click)=\"cancel()\">\n                                    <i class=\"fa fa-times\" aria-hidden=\"true\" ></i> &nbsp;Cancel</button>\n                            </div>\n\n                        </div>\n                      </form>\n                    </div>\n                 \n                </div>\n            </div>\n        </div>\n\n\n</div>\n</div>\n</div>\n\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n              <span class=\"glyphicon glyphicon-ok\" *ngIf=\"token\">\n            </span>&nbsp;&nbsp;&nbsp;3.&nbsp;Manage Orders</a>\n        </h4>\n    </div>\n<div id=\"collapseThree\" class=\"panel-collapse collapse\">\n    <div class=\"panel-body\">\n        <div class=\"\">\n          \n        </div>\n\n</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/buynow/buynow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuynowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
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





var BuynowComponent = (function () {
    function BuynowComponent(dashboardservice, activeRouter, router, jwtservice) {
        var _this = this;
        this.dashboardservice = dashboardservice;
        this.activeRouter = activeRouter;
        this.router = router;
        this.jwtservice = jwtservice;
        this.out = true;
        this.addressopen = false;
        this.index = 0;
        this.data = {
            fullname: '',
            pincode: '',
            mobile: '',
            address: '',
            city: '',
            state: ''
        };
        this.token = this.jwtservice.getToken();
        this.subscription = dashboardservice.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.initData(_this.currentUser);
        });
    }
    BuynowComponent.prototype.initData = function (currentUser) {
        var _this = this;
        var id = currentUser.id;
        if (id) {
            this.dashboardservice.getAddress().subscribe(function (res) {
                _this.userAddress = res;
                console.log(_this.userAddress);
            });
        }
    };
    BuynowComponent.prototype.save = function (data) {
        var _this = this;
        this.address = {
            fullname: data.fullname,
            mobile: data.mobile,
            address: data.address + "," + data.city + "," + data.state + " " + "-" + " " + data.pincode
        };
        this.myForm.reset();
        // this.collapse = "collapsed";
        this.out = true;
        console.log(this.address);
        this.dashboardservice.manageAddress(this.address).subscribe(function (res) {
            if (res) {
                _this.dashboardservice.getAddress().subscribe(function (res) {
                    _this.userAddress = res;
                });
            }
        }, function (err) {
            _this.errors = err.msg;
            console.log(_this.errors);
        });
    };
    BuynowComponent.prototype.myAddress = function (e) {
        this.index = e;
    };
    BuynowComponent.prototype.deliver = function (address) {
        console.log(address);
        this.addressopen = true;
    };
    BuynowComponent.prototype.cancel = function () {
        this.out = true;
    };
    BuynowComponent.prototype.ngOnInit = function () {
    };
    return BuynowComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["NgForm"]) === "function" && _a || Object)
], BuynowComponent.prototype, "myForm", void 0);
BuynowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-buynow',
        template: __webpack_require__("../../../../../src/app/dashboard/components/buynow/buynow.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/buynow/buynow.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */]) === "function" && _e || Object])
], BuynowComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=buynow.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table>tbody>tr>td, .table>tfoot>tr>td{\n    vertical-align: middle;\n}\n@media screen and (max-width: 600px) {\n    table#cart tbody td .form-control{\n\t\twidth:20%;\n\t\tdisplay: inline !important;\n\t}\n\t.actions .btn{\n\t\twidth:36%;\n\t\tmargin:1.5em 0;\n\t}\n\t\n\t.actions .btn-info{\n\t\tfloat:left;\n\t}\n\t.actions .btn-danger{\n\t\tfloat:right;\n\t}\n\t\n\ttable#cart thead { display: none; }\n\ttable#cart tbody td { display: block; padding: .6rem; min-width:320px;}\n\ttable#cart tbody tr td:first-child { background: #333; color: #fff; }\n\ttable#cart tbody td:before {\n\t\tcontent: attr(data-th); font-weight: bold;\n\t\tdisplay: inline-block; width: 8rem;\n\t}\n\t\n\t\n\t\n\ttable#cart tfoot td{display:block; }\n\ttable#cart tfoot td .btn{display:block;}\n\t\n}\n.cart{\n    box-shadow: 0px 1px 7px #e6e6e1;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    font-family: fantasy;\n}\n.loder{\n\tmargin-bottom: 20pc;\n}\n\n\n\n#loader {\n\tbottom: 0;\n\theight: 175px;\n\tleft: 0;\n\tmargin: auto;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\twidth: 175px;\n}\n#loader {\n\tbottom: 0;\n\theight: 175px;\n\tleft: 0;\n\tmargin: auto;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\twidth: 175px;\n}\n#loader .dot {\n\tbottom: 0;\n\theight: 100%;\n\tleft: 0;\n\tmargin: auto;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\twidth: 87.5px;\n}\n#loader .dot::before {\n\tborder-radius: 100%;\n\tcontent: \"\";\n\theight: 87.5px;\n\tleft: 0;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\t-webkit-transform: scale(0);\n\t        transform: scale(0);\n\twidth: 87.5px;\n}\n#loader .dot:nth-child(7n+1) {\n\t-webkit-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n}\n#loader .dot:nth-child(7n+1)::before {\n\t-webkit-animation: 0.8s linear 0.1s normal none infinite running load;\n\t        animation: 0.8s linear 0.1s normal none infinite running load;\n\tbackground: #00ff80 none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+2) {\n\t-webkit-transform: rotate(90deg);\n\t        transform: rotate(90deg);\n}\n#loader .dot:nth-child(7n+2)::before {\n\t-webkit-animation: 0.8s linear 0.2s normal none infinite running load;\n\t        animation: 0.8s linear 0.2s normal none infinite running load;\n\tbackground: #00ffea none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+3) {\n\t-webkit-transform: rotate(135deg);\n\t        transform: rotate(135deg);\n}\n#loader .dot:nth-child(7n+3)::before {\n\t-webkit-animation: 0.8s linear 0.3s normal none infinite running load;\n\t        animation: 0.8s linear 0.3s normal none infinite running load;\n\tbackground: #00aaff none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+4) {\n\t-webkit-transform: rotate(180deg);\n\t        transform: rotate(180deg);\n}\n#loader .dot:nth-child(7n+4)::before {\n\t-webkit-animation: 0.8s linear 0.4s normal none infinite running load;\n\t        animation: 0.8s linear 0.4s normal none infinite running load;\n\tbackground: #0040ff none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+5) {\n\t-webkit-transform: rotate(225deg);\n\t        transform: rotate(225deg);\n}\n#loader .dot:nth-child(7n+5)::before {\n\t-webkit-animation: 0.8s linear 0.5s normal none infinite running load;\n\t        animation: 0.8s linear 0.5s normal none infinite running load;\n\tbackground: #2a00ff none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+6) {\n\t-webkit-transform: rotate(270deg);\n\t        transform: rotate(270deg);\n}\n#loader .dot:nth-child(7n+6)::before {\n\t-webkit-animation: 0.8s linear 0.6s normal none infinite running load;\n\t        animation: 0.8s linear 0.6s normal none infinite running load;\n\tbackground: #9500ff none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+7) {\n\t-webkit-transform: rotate(315deg);\n\t        transform: rotate(315deg);\n}\n#loader .dot:nth-child(7n+7)::before {\n\t-webkit-animation: 0.8s linear 0.7s normal none infinite running load;\n\t        animation: 0.8s linear 0.7s normal none infinite running load;\n\tbackground: magenta none repeat scroll 0 0;\n}\n#loader .dot:nth-child(7n+8) {\n\t-webkit-transform: rotate(360deg);\n\t        transform: rotate(360deg);\n}\n#loader .dot:nth-child(7n+8)::before {\n\t-webkit-animation: 0.8s linear 0.8s normal none infinite running load;\n\t        animation: 0.8s linear 0.8s normal none infinite running load;\n\tbackground: #ff0095 none repeat scroll 0 0;\n}\n#loader .lading {\n\t/* background-image: url(\"../images/loading.gif\"); */\n\tbackground-position: 50% 50%;\n\tbackground-repeat: no-repeat;\n\tbottom: -40px;\n\theight: 20px;\n\tleft: 0;\n\tposition: absolute;\n\tright: 0;\n\twidth: 180px;\n}\n@-webkit-keyframes load {\n100% {\n\topacity: 0;\n\t-webkit-transform: scale(1);\n\t        transform: scale(1);\n}\n}\n@keyframes load {\n100% {\n\topacity: 0;\n\t-webkit-transform: scale(1);\n\t        transform: scale(1);\n}\n}\n@keyframes load {\n100% {\n\topacity: 0;\n\t-webkit-transform: scale(1);\n\t        transform: scale(1);\n}\n}\n\n.isloader{\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  /* position: relative; */\n\tmargin: 0 auto;\n\tposition: fixed;\n\ttop: 20pc;\n\tbottom: 0;\n\tright: 0;\n\tleft: 0;\n}\n\n/* LOADER 2 */\n\n#loader-2 span{\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #3498db;\n  margin: 35px 5px;\n}\n\n#loader-2 span:nth-child(1){\n  -webkit-animation: bounce 1s ease-in-out infinite;\n          animation: bounce 1s ease-in-out infinite;\n}\n\n#loader-2 span:nth-child(2){\n  -webkit-animation: bounce 1s ease-in-out 0.33s infinite;\n          animation: bounce 1s ease-in-out 0.33s infinite;\n}\n\n#loader-2 span:nth-child(3){\n  -webkit-animation: bounce 1s ease-in-out 0.66s infinite;\n          animation: bounce 1s ease-in-out 0.66s infinite;\n}\n\n@-webkit-keyframes bounce{\n  0%, 75%, 100%{\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  25%{\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n}\n\n@keyframes bounce{\n  0%, 75%, 100%{\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  25%{\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row loder\" *ngIf=\"_isLoder && token\">\n        <div id=\"loader\">\n            <div class=\"dot\"></div>\n          <div class=\"dot\"></div>\n          <div class=\"dot\"></div>\n          <div class=\"dot\"></div>\n          <div class=\"dot\"></div>\n          <div class=\"dot\"></div>\n          <div class=\"dot\"></div>\n          <div class=\"dot\"></div>\n          <div class=\"lading\"></div>\n        </div>\n      </div>\n\n      <!-- <div class=\"loader\" *ngIf=\"_dotLoder\">\n          <div class=\"dot\"></div>\n          <div class=\"dot\"></div>\n          <div class=\"dot\"></div>\n          <div class=\"dot\"></div>\n          <div class=\"dot\"></div>\n        </div> -->\n        <div class=\"isloader\" id=\"loader-2\" *ngIf=\"_dotLoder\">\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n\n  <div>\n    <h3 class=\"text-center text-danger cart\" *ngIf=\"length==0 || !token\">\n      Your Cart is empty...\n    </h3>\n  </div>\n  <div *ngIf=\"!length == 0\">\n    <table id=\"cart\" class=\"table table-hover table-condensed\"  >\n              <thead>\n              <tr>\n                <th style=\"width:50%\">Product</th>\n                <th style=\"width:10%\">Price</th>\n                <th style=\"width:8%\">Quantity</th>\n                <th style=\"width:22%\" class=\"text-center\">Subtotal</th>\n                <th style=\"width:10%\"></th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let item of items;let i=index;\">\n              <tr>\n                <td data-th=\"Product\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-2 hidden-xs\"><img [src]=\"item.href\" alt=\"...\" class=\"img-responsive\"/></div>\n                    <div class=\"col-sm-10\">\n                      <h4 class=\"nomargin\">{{item.name}}</h4>\n                      <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>\n                    </div>\n                  </div>\n                </td>\n                <td data-th=\"Price\"><i class=\"fa fa-inr\" aria-hidden=\"true\">{{item.cost}}</i></td>\n                <td data-th=\"Quantity\">\n                  <input type=\"number\" class=\"form-control text-center\" [(ngModel)]=\"item.qty\"  min=\"1\" [value]=\"item.qty\">\n                </td>\n                <td data-th=\"Subtotal\" class=\"text-center\"><i class=\"fa fa-inr\" aria-hidden=\"true\">{{item.qty*item.cost}}</i></td>\n                <td class=\"actions\" data-th=\"\">\n                  <!-- <button class=\"btn btn-info btn-sm\"><i class=\"fa fa-refresh\"></i></button> -->\n                  \n                  <button class=\"btn btn-danger btn-sm\" (click)=\"deleteCart(item.orderId)\"><i class=\"fa fa-trash-o\"></i></button>\t\t\t\t\t\t\t\t\n                </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr class=\"visible-xs\">\n                <td class=\"text-center\"><strong><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&nbsp;{{getTotal()}}</strong></td>\n              </tr>\n              <tr>\n                <td><a routerLink=\"/\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</a></td>\n                <td colspan=\"2\" class=\"hidden-xs\"></td>\n                <td class=\"hidden-xs text-center\"><strong><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&nbsp;{{getTotal()}}</strong></td>\n                <td><a  class=\"btn btn-success btn-block\" (click)=\"checkout(items,getTotal())\">Checkout <i class=\"fa fa-angle-right\"></i></a></td>\n              </tr>\n            </tfoot>\n          </table>\n          </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = (function () {
    function CartComponent(dashboardservice, router, jwtservice, zone) {
        var _this = this;
        this.dashboardservice = dashboardservice;
        this.router = router;
        this.jwtservice = jwtservice;
        this.zone = zone;
        this._isLoder = true;
        this.token = this.jwtservice.getToken();
        this.subscription = dashboardservice.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.initData(_this.currentUser);
        });
    }
    CartComponent.prototype.initData = function (currentUser) {
        var _this = this;
        var id = currentUser.id;
        if (id) {
            this.dashboardservice.getItems(id)
                .subscribe(function (res) {
                _this._isLoder = false;
                _this.items = res.items;
                _this.length = _this.items.length;
                //  this.dashboardservice.sendPath(this.length);
            });
        }
    };
    //   ngAfterContentChecked()  {
    //   //  let total = 0;
    //    this.totalamount = this.items.reduce(funtion(runningValue: number, this.items)=> {
    //       runningValue = runningValue + (item.cost * item.qty);
    //     }, 0);
    //     // for (var i = 0; i < this.items.length; i++) {
    //     //     if (this.items[i].amount) {
    //     //         total += this.items[i].amount;
    //     //         this.totalamount = total;
    //     //     }
    //     // }
    //     // return total;
    // }
    CartComponent.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].cost) {
                total += this.items[i].cost * this.items[i].qty;
                this.totalamount = total;
            }
        }
        // console.log(total)
        return total;
    };
    CartComponent.prototype.deleteCart = function (item) {
        var _this = this;
        this._dotLoder = true;
        console.log(item);
        var id = this.currentUser.id;
        this.dashboardservice.deleteItem(item)
            .subscribe(function (res) {
            if (res.Success) {
                // console.log("updated view",res);
                setTimeout(function () {
                    _this.dashboardservice.getItems(id).subscribe(function (resp) {
                        // console.log(resp.items);
                        _this.items = resp.items;
                        _this.length = _this.items.length;
                        _this.dashboardservice.sendPath(_this.items.length);
                        _this._dotLoder = false;
                    });
                }, 1000);
            }
            // this.removeByAttr(this.items,"orderId",itemId);
            _this.router.navigate(['/cart']);
        });
    };
    CartComponent.prototype.checkout = function (i, j) {
        var k = JSON.stringify(i);
        console.log(k + "-----" + j);
    };
    // removeByAttr(arr, attr, value){
    //   var i = arr.length;
    //   while(i--){
    //       if( arr[i] 
    //           && arr[i].hasOwnProperty(attr) 
    //           && (arguments.length > 2 && arr[i][attr] === value ) ){ 
    //                 console.log(arguments);
    //           arr.splice(i,1);
    //       }
    //   }
    //   return arr;
    // }
    CartComponent.prototype.ngOnInit = function () {
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/dashboard/components/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object])
], CartComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imgWidth{\n    width: 100%;\n    height: 400px;\n}\n.mgTop{\n    margin-top: 10px;\n}\n.myimg{\n    cursor: pointer;\n    text-align: center;\n    margin-bottom: 2em;\n    border: 1px solid #dec9c9;\n    padding-top: 10px;\n}\n/* .myimg:hover{\n    border: 1px solid indianred;\n    padding-top: 10px;\n} */\n.isHeadding{\n    color: #1a4363;\n    margin-bottom: 19px;\n    font-family: cursive;\n    text-shadow: 1px 3px 1px yellow;\n    text-underline-position: under;\n    text-decoration: underline;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imgWidth\">\n  <carousel [sources]=\"imageSources\" [config]=\"config\"></carousel>\n</div>\n<h1 class=\"text-center isHeadding\">\nBest Offers In All Rice Bags\n</h1>\n<div class=\"container mgTop\">\n\n  <div class=\"col-xs-12 col-sm-3 \" *ngFor =\"let img of images; let i=index;\">\n    <div class=\"myimg\" (click)=\"show(img)\">\n    <img [src]= \"img.href\" class=\"rounded \" alt=\"Quality Rice\" width=\"250\" height=\"236\">\n    <h5>{{img.name }} ({{img.weight}} Kg)</h5>\n    <h4><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&nbsp;{{img.cost}}</h4>\n    </div>\n  </div>\n\n<!-- <div class=\"col-xs-12 col-sm-3 myimg\">\n  <img src=\"assets/images/lalitha.jpg\" class=\"rounded\" alt=\"Cinque Terre\" width=\"250\" height=\"236\">\n  <h5>Lalithabrand Rice</h5>\n  <h4><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&nbsp;1000</h4>\n</div>\n<div class=\"col-xs-12 col-sm-3 myimg\">\n  <img src=\"assets/images/lohitahbrand.jpg\" class=\"rounded\" alt=\"Lohitbrand\" width=\"250\" height=\"236\">\n  <h5>Lohitha Brand Rice</h5>\n  <h4><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&nbsp;1060</h4>\n  </div>\n  <div class=\"col-xs-12 col-sm-3 myimg\">\n  <img src=\"assets/images/indiagate.jpg\" class=\"rounded\" alt=\"India Gate\" width=\"250\" height=\"236\">\n  <h5>India Gate Rice</h5>\n  <h4><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&nbsp;1100</h4>\n    </div>\n    <div class=\"col-xs-12 col-sm-3 myimg\">\n  <img src=\"assets/images/bell.jpg\" class=\"rounded\" alt=\"Cinque Terre\" width=\"250\" height=\"236\">\n  <h5>Bell Rice</h5>\n  <h4><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&nbsp;1300</h4>\n      </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_carousel__ = __webpack_require__("../../../../angular4-carousel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(dashboardservice, router) {
        this.dashboardservice = dashboardservice;
        this.router = router;
        this.imageSources = [
            './assets/images/img1.jpg',
            './assets/images/img2.jpg',
            './assets/images/img3.jpg',
        ];
        this.config = {
            verifyBeforeLoad: true,
            log: false,
            animation: true,
            animationType: __WEBPACK_IMPORTED_MODULE_1_angular4_carousel__["a" /* AnimationConfig */].SLIDE,
            autoplay: true,
            autoplayDelay: 4000,
            stopAutoplayMinWidth: 768
        };
        this.images = [
            {
                "name": "Lalitha Brand ", "href": "assets/images/lalitha.jpg", "cost": 1200, "weight": 25
            },
            {
                "name": "Lohitha Rice", "href": "assets/images/lohitahbrand.jpg", "cost": 1300, "weight": 25
            },
            {
                "name": "India Gate", "href": "assets/images/indiagate.jpg", "cost": 1000, "weight": 25
            },
            {
                "name": "Bell ", "href": "assets/images/bell.jpg", "cost": 1350, "weight": 25
            },
            {
                "name": "Lohitha ", "href": "assets/images/lohitha2.jpg", "cost": 1250, "weight": 25
            },
            {
                "name": "Daawat", "href": "assets/images/daawath.jpg", "cost": 1350, "weight": 25
            },
            {
                "name": "Daawat ", "href": "assets/images/daawath2.jpg", "cost": 1350, "weight": 25
            },
            {
                "name": "Lalitha Brand", "href": "assets/images/lalithabrand.jpg", "cost": 1550, "weight": 25
            }
        ];
    }
    HomeComponent.prototype.show = function (data) {
        //console.log(data)
        this.productdata = localStorage.setItem("data", JSON.stringify(data));
        // this.dashboardservice.sendPath(data);
        this.router.navigate(['/productdata']);
    };
    HomeComponent.prototype.ngOnInit = function () {
        //console.log(this.images)
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/dashboard/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/changepassword/changepassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel{\n    margin-top: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/changepassword/changepassword.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"alert alert-success alert-dismissable fade in\" *ngIf=\"msg && msg.Success == true\">\n            <a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n            <strong>Success!</strong> {{msg.msg}}.\n        </div>\n\n        <div class=\"alert alert-danger alert-dismissable fade in\" *ngIf=\"errors\">\n            <a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n            <strong>Sorry!</strong> {{errors}}.\n        </div>\n    \n\n\n\n<h3>Reset Password</h3>\n<div class=\"panel panel-default\" >\n    <div class=\"panel-body\" >\n        <form #myForm=\"ngForm\" >\n\n        <div class=\"col-md-offset-3 col-md-6\">\n            <div class=\"form-group\">\n             <span>Old Password:</span>  \n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"resetpassword.oldpassword\" minlength=\"6\" #oldpassword=\"ngModel\" name=\"oldpassword\" placeholder=\"\" required />\n              \n              <div *ngIf=\"oldpassword.errors && (oldpassword.dirty || oldpassword.touched)\" class=\"error\">\n                  <div [hidden]=\"!oldpassword.errors.required\">Please Enter Old Password.</div>\n                  <div [hidden]=\"!oldpassword.errors.minlength\">Password shuld be min 6 Charactors.</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <span>New Password:</span>  \n                 <input type=\"password\" class=\"form-control\" [(ngModel)]=\"resetpassword.newpassword\" #newpassword=\"ngModel\" minlength=\"6\" name=\"newpassword\" placeholder=\"\" required />\n                 <div *ngIf=\"newpassword.errors && (newpassword.dirty || newpassword.touched)\" class=\"error\">\n                    <div [hidden]=\"!newpassword.errors.required\">Please Enter New Password.</div>\n                    <div [hidden]=\"!newpassword.errors.minlength\">Password shuld be min 6 Charactors.</div>\n                </div>\n               \n               </div>   \n                 <div class=\"form-group\">\n                  <span>Confirm Password:</span>  \n                   <input type=\"password\" class=\"form-control\" [(ngModel)]=\"resetpassword.confirmpassword\"  validateEqual=\"newpassword\" minlength=\"6\" #confirmpassword=\"ngModel\" name=\"confirmpassword\" placeholder=\"\" required />\n                   <div *ngIf=\"confirmpassword.errors && (confirmpassword.dirty || confirmpassword.touched)\" class=\"error\">\n                      <div [hidden]=\"!confirmpassword.errors.required\">Please Enter Confirm Password.</div>\n                      <div [hidden]=\"!confirmpassword.errors.minlength\">Password shuld be min 6 Charactors.</div>\n                      <div [hidden]=\"confirmpassword.valid || (confirmpassword.pristine && !myForm.submitted)\">\n                          Password mismatch\n                      </div>\n                  </div>\n                 \n                 </div>\n                 <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-info btn-md\" [disabled]=\"!myForm.form.valid\" (click)=\"Resetpassword(resetpassword)\">\n                        Reset Password</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-md\" (click)=\"cancel()\">\n                        Cancel</button>\n                </div>\n            </div>\n            </form>\n    </div>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/changepassword/changepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangepasswordComponent = (function () {
    function ChangepasswordComponent(dashboardservice, router, jwtservice) {
        this.dashboardservice = dashboardservice;
        this.router = router;
        this.jwtservice = jwtservice;
        this.resetpassword = {
            oldpassword: '',
            newpassword: '',
            confirmpassword: ''
        };
    }
    ChangepasswordComponent.prototype.Resetpassword = function (resetpassword) {
        var _this = this;
        console.log(resetpassword);
        this.dashboardservice.updatePassword(resetpassword).subscribe(function (res) {
            _this.msg = res;
            console.log(res);
        }, function (err) {
            _this.errors = err.msg;
            console.log(_this.errors);
        });
        this.myForm.reset();
    };
    ChangepasswordComponent.prototype.cancel = function () {
        this.router.navigate(['']);
    };
    ChangepasswordComponent.prototype.ngOnInit = function () {
    };
    return ChangepasswordComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], ChangepasswordComponent.prototype, "myForm", void 0);
ChangepasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-changepassword',
        template: __webpack_require__("../../../../../src/app/dashboard/components/myaccount/changepassword/changepassword.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/myaccount/changepassword/changepassword.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_jwt_service__["a" /* JwtService */]) === "function" && _d || Object])
], ChangepasswordComponent);

var Resetpassword = (function () {
    function Resetpassword() {
    }
    return Resetpassword;
}());
var _a, _b, _c, _d;
//# sourceMappingURL=changepassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/manageaddress/manageaddress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .form-inline .form-group { margin-right:10px; }\n.well-primary {\ncolor: rgb(255, 255, 255);\nbackground-color: rgb(66, 139, 202);\nborder-color: rgb(53, 126, 189);\n} */\n/* .glyphicon { margin-right:5px; } */\n.panel{\n    margin-top: 15px;\n}\n.panel-default>.panel-heading {\n    color:white;\n    background-color: #256a95;\n     cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/manageaddress/manageaddress.component.html":
/***/ (function(module, exports) {

module.exports = "             <h3>Manage Address</h3>\n              <div class=\"panel panel-default\">\n                  <div class=\"\" (click)=\" out = !out\" [className]=\"out?'panel-heading collapsed':'panel-heading'\" data-toggle=\"collapse\"  data-parent=\"#accordion\">\n                      <h4 class=\"panel-title\">\n                          <a ><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                          &nbsp;Add Address</a>\n                      </h4>\n                  </div>\n                  <div id=\"collapseTwo\"  [className]=\"out? 'panel-collapse collapse':'panel-collapse collapse in'\">\n                      <div class=\"panel-body\">\n                          <div class=\"row\">\n                            <form #myForm=\"ngForm\" >\n                              <div class=\"col-md-offset-3 col-md-6\">\n                                  <div class=\"form-group\">\n                                   <span>Full Name:</span>  \n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"data.fullname\" #fullname=\"ngModel\" name=\"fullname\" placeholder=\"\" required />\n                                    <div *ngIf=\"fullname.errors && (fullname.dirty || fullname.touched)\" class=\"error\">\n                                        <div [hidden]=\"!fullname.errors.required\">Please fill out this field.</div>\n                                    </div>\n                                  \n                                  </div>\n                                  <div class=\"form-group\">\n                                      <span>Mobile Number:</span>\n                                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"data.mobile\" name=\"mobile\" #mobile=\"ngModel\" pattern=\"^[6789]\\d{9}$\"  maxlength=\"10\"  placeholder=\"\" required />\n                                 \n                                      <div *ngIf=\"mobile.errors && (mobile.dirty || mobile.touched)\" class=\"error\">\n                                          <div [hidden]=\"!mobile.errors.required\">Please fill out this field..</div>\n                                          <div [hidden]=\"!mobile.errors.pattern\">Not a valid Mobile Number.</div>\n                                      </div>\n                                    </div>\n                                  <div class=\"form-group\">\n                                      <span>Pincode:</span>\n                                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"data.pincode\" name=\"pincode\" #pincode=\"ngModel\" placeholder=\"\" pattern=\"^[1-9][0-9]{5}$\"  maxlength=\"6\"  required />\n                                      <div *ngIf=\"pincode.errors && (pincode.dirty || pincode.touched)\" class=\"error\">\n                                          <div [hidden]=\"!pincode.errors.required\">Please fill out this field..</div>\n                                          <div [hidden]=\"!pincode.errors.pattern\">Please Enter  Valid Pincode.</div>\n                                      </div>\n                                    </div>\n                                  <div class=\"form-group\">\n                                      <span>Address (Area and Street) <i>max 250 characters  only</i>:</span>\n                                    \n                                      <textarea class=\"form-control\"  [(ngModel)]=\"data.address\" placeholder=\"\" name=\"address\" #address=\"ngModel\" maxlength=\"250\" required></textarea>\n                                      <div *ngIf=\"address.errors && (address.dirty || address.touched)\" class=\"error\">\n                                          <div [hidden]=\"!address.errors.required\">Please fill out this field.</div>\n                                      </div>\n                                    </div>\n                                  <div class=\"form-group\">\n                                      <span>City:</span>\n                                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"data.city\" #city=\"ngModel\" name=\"city\" placeholder=\"\" required />\n                                 \n                                      <div *ngIf=\"city.errors && (city.dirty || city.touched)\" class=\"error\">\n                                          <div [hidden]=\"!city.errors.required\">Please fill out this field.</div>\n                                      </div>  \n                                     </div>\n                                  <div class=\"form-group\">\n                                      <span>\n                                          State:</span>\n                                      <select class=\"form-control\" [(ngModel)]=\"data.state\"  #state=\"ngModel\" name=\"state\" required>\n                                          <option value=\"\">Select State</option>\n                                          <option value=\"Andhara Predesh\">AP</option>\n                                          <option value=\"Telangana\">TS</option>\n                                          <!-- <option>Contact</option> -->\n                                      </select>\n                                      <div *ngIf=\"state.errors && (state.dirty || state.touched)\" class=\"error\">\n                                          <div [hidden]=\"!state.errors.required\">Please fill out this field.</div>\n                                      </div>\n                                  </div>\n                                  <div class=\"form-group\">\n                                      <button type=\"submit\" class=\"btn btn-info btn-md\" [disabled]=\"!myForm.form.valid\" (click)=\"save(data)\">\n                                          <i class=\"fa fa-floppy-o\" aria-hidden=\"true\" ></i>&nbsp;Save</button>\n                                      <button type=\"button\" class=\"btn btn-danger btn-md\" (click)=\"cancel()\">\n                                          <i class=\"fa fa-times\" aria-hidden=\"true\" ></i> &nbsp;Cancel</button>\n                                  </div>\n\n                              </div>\n                            </form>\n                          </div>\n                       \n                      </div>\n                  </div>\n              </div>\n \n\n              <div class=\"panel panel-default\" *ngFor=\"let address of userAddress\">\n                <div class=\"panel-body\" >\n                  <span>{{address.fullname}}</span>\n                 &nbsp;&nbsp; <span>{{address.mobile}}</span>\n                  <p>{{address.address}}</p>\n                  \n                </div>\n\n              </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/manageaddress/manageaddress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageaddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
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





var ManageaddressComponent = (function () {
    function ManageaddressComponent(dashboardservice, router, jwtservice, ngzone) {
        var _this = this;
        this.dashboardservice = dashboardservice;
        this.router = router;
        this.jwtservice = jwtservice;
        this.ngzone = ngzone;
        this.out = true;
        this.data = {
            fullname: '',
            pincode: '',
            mobile: '',
            address: '',
            city: '',
            state: ''
        };
        this.subscription = dashboardservice.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.initData(_this.currentUser);
        });
    }
    ManageaddressComponent.prototype.initData = function (currentUser) {
        var _this = this;
        var id = currentUser.id;
        if (id) {
            this.dashboardservice.getAddress().subscribe(function (res) {
                _this.userAddress = res;
            });
        }
    };
    ManageaddressComponent.prototype.save = function (data) {
        var _this = this;
        this.address = {
            fullname: data.fullname,
            mobile: data.mobile,
            address: data.address + "," + data.city + "," + data.state + " " + "-" + " " + data.pincode
        };
        this.myForm.reset();
        // this.collapse = "collapsed";
        this.out = true;
        console.log(this.address);
        this.dashboardservice.manageAddress(this.address).subscribe(function (res) {
            if (res) {
                _this.dashboardservice.getAddress().subscribe(function (res) {
                    _this.userAddress = res;
                });
            }
        }, function (err) {
            _this.errors = err.msg;
            console.log(_this.errors);
        });
    };
    ManageaddressComponent.prototype.cancel = function () {
        this.out = true;
    };
    ManageaddressComponent.prototype.ngOnInit = function () {
    };
    return ManageaddressComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myForm"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["NgForm"]) === "function" && _a || Object)
], ManageaddressComponent.prototype, "myForm", void 0);
ManageaddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manageaddress',
        template: __webpack_require__("../../../../../src/app/dashboard/components/myaccount/manageaddress/manageaddress.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/myaccount/manageaddress/manageaddress.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object])
], ManageaddressComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=manageaddress.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/myaccount.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********* SIDE NAV BAR ***********/\n/* a {\n    color:#000;\n    }\n     */\n     .row1{\n         margin-right: 0px !important;\n     }\n     span.caret {\n        float: right !important;\n        margin-top: 7px!important;\n    }\n    .active{\n        border-left: 5px solid red;\n        background: #e2eef5;\n        font-family: serif;\n    }\n\n    li {\n    list-style:none;\n    } \n    \n    .panel-default>.panel-heading {\n        color: #fff;\n        background-color: #256a95;\n        border-color: #ddd;\n        cursor: pointer;\n    }\n    \n    .panel-group .panel+.panel {\n        margin-top: 0px;\n    }\n    /* .panel-group {\n        margin-top: 35px;\n    } */\n    .panel-collapse {\n        background-color:rgba(220, 213, 172, 0.5);\n    }\n    \n    .glyphicon { \n    margin-right:10px; \n    }\n    \n    \n    ul.list-group {\n        margin:0px;\n    }\n    \n    ul.bulletlist li {\n        list-style:disc;\n    }\n    \n    \n    ul.list-group  li a {\n     display:block;\n     padding:5px 0px 5px 15px;\n     text-decoration:none;\n    }\n    \n    ul.list-group li {\n        border-bottom: 1px dotted rgba(0,0,0,0.2);\n    }\n        \n    \n    ul.list-group  li a:hover, ul li a:focus {\n     color:#fff;\n     background-color: #00436a;\n    }\n    \n    .panel-title a:hover,\n    .panel-title a:active,\n    .panel-title a:focus,\n    .panel-title .open a:hover,\n    .panel-title .open a:active,\n    .panel-title .open a:focus\n     {\n        text-decoration:none;\n        color:#fff;\n    }\n    \n    .panel-title>.small, .panel-title>.small>a, .panel-title>a, .panel-title>small, .panel-title>small>a {\n            display: block;\n    }\n    \n    @media (min-width: 768px){\n    .navbar-collapse.collapse \n        {\n        display: block!important;\n        height: auto!important;\n        padding-bottom: 0;\n        overflow: visible!important;\n        padding-left:0px; \n    }\n    }\n    \n    @media (min-width: 992px){\n    .menu-hide {\n        display: none;\n    }\n    \n    }\n    .menu-hide .panel-default>.panel-heading {\n        color: #fff;\n        background-color: #8e8c8c;\n        border-color: #ddd;\n    }\n    \n    /********** END SIDEBAR *************/\n    \n    /********** NAVBAR TOGGLE *************/\n    \n    .navbar-toggle .icon-bar {\n        background-color: #fff;\n    }\n    .navbar-toggle {\n        padding: 11px 10px;\n        margin-top: 8px;\n        margin-right: 15px;\n        margin-bottom: 8px;\n        background-color: #a32638;\n        border-radius: 0px;\n    }\n    \n    /********** END NAVBAR TOGGLE *************/\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/myaccount.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row row1\">\n  <!-- <div class=\"col-xs-12 col-sm-2\"> -->\n     <!-- I was motivated to create this after seeing BhaumikPatel's http://bootsnipp.com/snippets/featured/accordion-menu; I adapted it to a list format rather than a table so that it would be easy to create a nav toggle button when viewed on mobile devices -->\n  <div class=\" col-xs-12 col-md-3\">\n      <div id=\"sidenav1\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#sideNavbar\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"sideNavbar\">\n          <div class=\"panel-group\" id=\"accordion\">\n            <div class=\"panel panel-default\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\"><a routerLink=\"/myaccount\" ><i class=\"fa fa-cubes\" aria-hidden=\"true\"></i>&nbsp;Orders</a> </h4>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\"> <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\"><span><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i></span>&nbsp;Account Settings<span class=\"caret\"></span></a> </h4>\n              </div>\n              <!-- Note: By adding \"in\" after \"collapse\", it starts with that particular panel open by default; remove if you want them all collapsed by default --> \n              <div id=\"collapseOne\" class=\"panel-collapse collapse\">\n                <ul class=\"list-group\">\n                  <li><a routerLink=\"/myaccount/accountettings/personalinformation\"  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Personal Information</a></li>\n                  <li><a routerLink=\"/myaccount/accountettings/manageaddress\" routerLinkActive=\"active\"  >Manage Address</a></li>\n                  <li><a routerLink=\"/myaccount/accountettings/changepassword\" routerLinkActive=\"active\"  >Change Password</a></li>\n                  \n                  <!-- <li><a href=\"\" class=\"navlink\">Link 3</a></li>\n                  <li><a href=\"\" class=\"navlink\">Link 4</a></li> -->\n                </ul>\n              </div>\n            </div>\n            <div class=\"panel panel-default\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" *ngIf=\"role\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\"><a routerLink=\"/myaccount/uplodeproducts\" ><i class=\"fa fa-upload\" aria-hidden=\"true\"></i>&nbsp;Uplode Product Detials</a> </h4>\n                </div>\n              </div>\n              <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\"><a (click)=\"logout()\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i>&nbsp;Logout</a> </h4>\n                  </div>\n                </div>\n\n\n           \n            <!-- This is in case you want to add additional links that will only show once the Nav button is engaged; delete if you don't need -->\n            <!-- <div class=\"menu-hide\">\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\"><a href=\"\"><span class=\"glyphicon glyphicon-new-window\"></span>External Link</a> </h4>\n                </div>\n              </div>\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\"><a href=\"\"><span class=\"glyphicon glyphicon-new-window\"></span>External Link</a> </h4>\n                </div>\n              </div>\n            </div> -->\n            <!-- end hidden Menu items --> \n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <!-- </div> -->\n    <div class=\"col-xs-12 col-md-9\">\n        <router-outlet></router-outlet>\n      </div>\n      \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/myaccount.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyaccountComponent = (function () {
    function MyaccountComponent(router, dashboardService, jwtservice) {
        var _this = this;
        this.router = router;
        this.dashboardService = dashboardService;
        this.jwtservice = jwtservice;
        this.subscription = dashboardService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.role = _this.currentUser.role;
            //  this.initData(this.currentUser)
        });
    }
    MyaccountComponent.prototype.logout = function () {
        this.dashboardService.purgeAuth();
        this.router.navigate(['/login']);
    };
    MyaccountComponent.prototype.ngOnInit = function () {
    };
    return MyaccountComponent;
}());
MyaccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-myaccount',
        template: __webpack_require__("../../../../../src/app/dashboard/components/myaccount/myaccount.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/myaccount/myaccount.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_jwt_service__["a" /* JwtService */]) === "function" && _c || Object])
], MyaccountComponent);

var _a, _b, _c;
//# sourceMappingURL=myaccount.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/personalinformation/personalinformation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel{\n    margin-top: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/personalinformation/personalinformation.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Personal Information</h3>\n<div class=\"panel panel-default\" >\n    <div class=\"panel-body\">\n        <form #myForm=\"ngForm\" >\n            <div class=\"col-md-offset-3 col-md-6\">\n                <div class=\"form-group\">\n                 <span>Full Name:</span>  \n                  <input type=\"text\" class=\"form-control\" [disabled]=\"isEdit\" [(ngModel)]=\"user.full_name\" #fullname=\"ngModel\"  name=\"fullname\" placeholder=\"\" required />\n                  <div *ngIf=\"fullname.errors && (fullname.dirty || fullname.touched)\" class=\"error\">\n                      <div [hidden]=\"!fullname.errors.required\">Please fill out this field.</div>\n                  </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <span>\n                          Your Gender is:</span>\n                      <select class=\"form-control\" [(ngModel)]=\"user.gender\" [disabled]=\"isEdit\"  #gender=\"ngModel\"  name=\"gender\" required>\n                          <option value=\"\">I am ...</option>\n                          <option value=\"male\">Male</option>\n                          <option value=\"female\">Female</option>\n                          <!-- <option>Contact</option> -->\n                      </select>\n                      <!-- <div *ngIf=\"state.errors && (state.dirty || state.touched)\" class=\"error\">\n                          <div [hidden]=\"!state.errors.required\">Please fill out this field.</div>\n                      </div> -->\n                  </div>\n\n                  <div class=\"form-group\">\n                      <span>Mobile Number:</span>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.mobile\" [disabled]=\"isEdit\" name=\"mobile\" #mobile=\"ngModel\"  pattern=\"^[6789]\\d{9}$\"  maxlength=\"10\"  placeholder=\"\" required />\n                 \n                      <div *ngIf=\"mobile.errors && (mobile.dirty || mobile.touched)\" class=\"error\">\n                          <div [hidden]=\"!mobile.errors.required\">Please fill out this fiel..</div>\n                          <div [hidden]=\"!mobile.errors.pattern\">Not a valid Mobile Number.</div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <span>Your E-mail ID</span>\n                        <input type=\"text\"  class=\"form-control\" [(ngModel)]=\"user.email\" [disabled]=\"isEdit\" pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"  name=\"email\" #email=\"ngModel\" required>\n                        <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"error\">\n                            <div [hidden]=\"!email.errors.required\">Please fill out this field.</div>\n                            <div [hidden]=\"!email.errors.pattern\">Please Enter proper Email correctly.</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-info btn-md\"  *ngIf=isEdit (click)=\"enableEdit()\" >\n                            <i class=\"fa fa-pencil-square-o\"></i>&nbsp;Edit</button>\n                        <button type=\"submit\" class=\"btn btn-info btn-md\" *ngIf=!isEdit (click)=\"onSave(user)\">\n                            <i class=\"fa fa-floppy-o\"></i>&nbsp;Save</button>\n                        <button type=\"button\" class=\"btn btn-danger btn-md\" *ngIf=!isEdit (click)=\"cancel()\">\n                            <i class=\"fa fa-times\"></i> &nbsp;Cancel</button>\n                    </div>\n\n     </div>\n     </form>\n    </div>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/personalinformation/personalinformation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalinformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonalinformationComponent = (function () {
    function PersonalinformationComponent(dashboardservice, router, jwtservice) {
        var _this = this;
        this.dashboardservice = dashboardservice;
        this.router = router;
        this.jwtservice = jwtservice;
        this.isEdit = true;
        this.subscription = dashboardservice.currentUser.subscribe(function (user) {
            _this.user = user;
            // console.log(this.user);
        });
        // this.router.events
        // .filter(e => e instanceof NavigationEnd)
        // .pairwise().subscribe((e) => {
        //     console.log(e);
        // });
    }
    PersonalinformationComponent.prototype.enableEdit = function () {
        this.isEdit = false;
    };
    PersonalinformationComponent.prototype.onSave = function (user) {
        //  this.user["gender"]=user.gender;
        this.dashboardservice.updateUser(this.user).subscribe(function (res) {
            console.log(res.msg);
        });
        this.isEdit = true;
    };
    PersonalinformationComponent.prototype.cancel = function () {
        this.isEdit = true;
        // this.router.navigate(['/']);
    };
    PersonalinformationComponent.prototype.ngOnInit = function () {
        // let currentUrl = this.router.url;
        // console.log(currentUrl)
    };
    return PersonalinformationComponent;
}());
PersonalinformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-personalinformation',
        template: __webpack_require__("../../../../../src/app/dashboard/components/myaccount/personalinformation/personalinformation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/myaccount/personalinformation/personalinformation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */]) === "function" && _c || Object])
], PersonalinformationComponent);

var _a, _b, _c;
//# sourceMappingURL=personalinformation.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/uplodeproducts/uplodeproducts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel{\n    margin-top: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/uplodeproducts/uplodeproducts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  uplodeproducts works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/myaccount/uplodeproducts/uplodeproducts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UplodeproductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UplodeproductsComponent = (function () {
    function UplodeproductsComponent(dashboardservice, router, jwtservice) {
        this.dashboardservice = dashboardservice;
        this.router = router;
        this.jwtservice = jwtservice;
    }
    UplodeproductsComponent.prototype.ngOnInit = function () {
    };
    return UplodeproductsComponent;
}());
UplodeproductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-uplodeproducts',
        template: __webpack_require__("../../../../../src/app/dashboard/components/myaccount/uplodeproducts/uplodeproducts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/myaccount/uplodeproducts/uplodeproducts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */]) === "function" && _c || Object])
], UplodeproductsComponent);

var _a, _b, _c;
//# sourceMappingURL=uplodeproducts.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n._isOrders{\n    padding-top: 20px;\n    padding-bottom: 20px;\n    margin-top: 50px;\n    font-family: fantasy;\n    color: grey;\n    margin-bottom: 50px;\n}\n.panel{\n    margin-top: 15px;\n}\n._orderborder{\n\tborder: 1px solid #8b99a2;\n    padding-top: 1pc;\n    padding-bottom: 1pc;\n\tborder-radius: 3px;\n\tmargin-bottom: 1pc;\n\tmargin-top: 1pc;\n}\n._isorderImgborder{\n\tborder-bottom: 1px dotted #6b6363;\n    padding-bottom: 1pc;\n}\n.innerborder{\n\tpadding-top: 1pc;\n}\n.media-object{\n\theight: 8pc;\n}\n.btn-primary{\n\tmargin-top: 20px !important;\n}\n#mycontainer{\n    /* width: auto; */\n    padding-left: 3pc;\n    padding-right: 3pc;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"_isOrders\" *ngIf=\"ordercount==0\">\n  <h3 class=\"text-center\">You Have No Orders</h3>\n</div>\n\n<div class=\"\" id=\"mycontainer\" *ngIf=\"!ordercount==0\">\n\t<h4>My Account > Orders</h4>\n<div class=\"row _orderborder\" *ngFor=\"let order of orders\">\n\t<div class=\"col-xs-12 _isorderImgborder\">\n\t\t<label>Order Id </label>&nbsp;<span>{{order.orderId}}</span>\n\t\t<p>Placed On {{order.date | date:'medium'}} </p>\n\t\t<h5>Total Amount :&nbsp;<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>{{order.cost}}</h5>\n\t</div>\n   <div class=\" col-xs-12 col-sm-6  col-md-2 innerborder\">\n\t\t<img [src]=\"order.href\"   class=\"media-object img-thumbnail\">\n\n</div>\n<div class=\" col-xs-12 col-sm-6  col-md-7 innerborder\">\n\t\t<h5>{{order.name}}</h5>\n\t\t<p><label>Qty :&nbsp;</label>{{order.qty}}</p>\n\t\t<p><label>Weight :&nbsp;</label>{{order.weight}} Kg</p>\n</div>\n<div class=\"col-md-2 innerborder\">\n\t\t<button type=\"button\" class=\"btn btn-primary \">Cancel Your Order</button>\n\t\t<button type=\"button\" class=\"btn btn-primary \">Return Your Order</button>\n\n\t</div>\n</div>\n\n</div>\n\n\n<!-- \n\t\t</div>\n\n\t</div>\n -->\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersComponent = (function () {
    function OrdersComponent(dashboardservice, router, jwtservice) {
        var _this = this;
        this.dashboardservice = dashboardservice;
        this.router = router;
        this.jwtservice = jwtservice;
        this.subscription = dashboardservice.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.initData(_this.currentUser);
        });
    }
    OrdersComponent.prototype.initData = function (currentUser) {
        var _this = this;
        var id = currentUser.id;
        if (id) {
            this.dashboardservice.getOrders().subscribe(function (res) {
                _this.orders = res;
                _this.ordercount = _this.orders.length;
                console.log(_this.ordercount);
            });
        }
    };
    OrdersComponent.prototype.ngOnInit = function () {
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../src/app/dashboard/components/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/orders/orders.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */]) === "function" && _c || Object])
], OrdersComponent);

var _a, _b, _c;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/productdetails/productdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/*****************globals*************/\n.action{\n    margin-top: 9pc;\n}\n  img {\n    max-width: 100%; }\n  \n  .preview {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    @media screen and (max-width: 996px) {\n      .preview {\n        margin-bottom: 20px; } }\n  \n  .preview-pic {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  \n  .preview-thumbnail.nav-tabs {\n    border: none;\n    margin-top: 15px; }\n    .preview-thumbnail.nav-tabs li {\n      width: 18%;\n      margin-right: 2.5%; }\n      .preview-thumbnail.nav-tabs li img {\n        max-width: 100%;\n        display: block; }\n      .preview-thumbnail.nav-tabs li a {\n        padding: 0;\n        margin: 0; }\n      .preview-thumbnail.nav-tabs li:last-of-type {\n        margin-right: 0; }\n  \n  .tab-content {\n    overflow: hidden; }\n    .tab-content img {\n      width: 100%;\n      -webkit-animation-name: opacity;\n              animation-name: opacity;\n      -webkit-animation-duration: .3s;\n              animation-duration: .3s; }\n  \n  .card {\n    margin-top: 50px;\n    background: #eee;\n    padding: 3em;\n    line-height: 1.5em; \n    margin-bottom:3pc;\n  }\n  @media screen and (min-width: 997px) {\n    .wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; } }\n  \n  .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  \n  .colors {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  \n  .product-title, .price, .sizes, .colors {\n    text-transform: UPPERCASE;\n    font-weight: bold; }\n  \n  .checked, .price span {\n    color: #ff9f1a; }\n  \n  .product-title, .rating, .product-description, .price, .vote, .sizes {\n    margin-bottom: 15px; }\n  \n  .product-title {\n    margin-top: 0; }\n  \n  .size {\n    margin-right: 10px; }\n    .size:first-of-type {\n      margin-left: 40px; }\n  \n  .color {\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n    height: 2em;\n    width: 2em;\n    border-radius: 2px; }\n    .color:first-of-type {\n      margin-left: 20px; }\n  \n  .add-to-cart {\n    background: #ff9f1a;\n    padding: 1.2em 1.5em;\n    border: none;\n    text-transform: UPPERCASE;\n    font-weight: bold;\n    color: #fff;\n    transition: background .3s ease; }\n    .add-to-cart:hover {\n      background: #b36800;\n      color: #fff; }\n  \n  .not-available {\n    text-align: center;\n    line-height: 2em; }\n    .not-available:before {\n      font-family: fontawesome;\n      content: \"\\F00D\";\n      color: #fff; }\n  \n  .orange {\n    background: #ff9f1a; }\n  \n  \n  \n  .tooltip-inner {\n    padding: 1.3em; }\n  \n  @-webkit-keyframes opacity {\n    0% {\n      opacity: 0;\n      -webkit-transform: scale(3);\n              transform: scale(3); }\n    100% {\n      opacity: 1;\n      -webkit-transform: scale(1);\n              transform: scale(1); } }\n  \n  @keyframes opacity {\n    0% {\n      opacity: 0;\n      -webkit-transform: scale(3);\n              transform: scale(3); }\n    100% {\n      opacity: 1;\n      -webkit-transform: scale(1);\n              transform: scale(1); } }\n  #qty{\n    width: 50px !important;\n  }\n\n\n  body { background: #222; }\n  figure { \n    position: absolute;\n    margin: auto;\n    top: 0; bottom: 0; left: 0; right: 0;\n    width: 6.250em; height: 6.250em;\n    -webkit-animation: rotate 2.4s linear infinite;\n            animation: rotate 2.4s linear infinite;\n  }\n  .white { \n    top: 0; bottom: 0; left: 0; right: 0; \n    background: white; \n    -webkit-animation: flash 2.4s linear infinite; \n            animation: flash 2.4s linear infinite;\n    opacity: 0;\n  }\n  .dot {\n    position: absolute;\n    margin: auto;\n    width: 2.4em; height: 2.4em;\n    border-radius: 100%;\n    transition: all 1s ease;\n  }\n  .dot:nth-child(2) { top: 0; bottom: 0; left: 0; background: #FF4444; -webkit-animation: dotsY 2.4s linear infinite; animation: dotsY 2.4s linear infinite; }\n  .dot:nth-child(3) { left: 0; right: 0; top: 0; background: #FFBB33; -webkit-animation: dotsX 2.4s linear infinite; animation: dotsX 2.4s linear infinite; }\n  .dot:nth-child(4) { top: 0; bottom: 0; right: 0; background: #99CC00; -webkit-animation: dotsY 2.4s linear infinite; animation: dotsY 2.4s linear infinite; }\n  .dot:nth-child(5) { left: 0; right: 0; bottom: 0; background: #33B5E5; -webkit-animation: dotsX 2.4s linear infinite; animation: dotsX 2.4s linear infinite; }\n  \n  @-webkit-keyframes rotate {\n    0% { -webkit-transform: rotate( 0 ); transform: rotate( 0 ); }\n    10% { width: 6.250em; height: 6.250em; }\n    66% { width: 2.4em; height: 2.4em; }\n    100%{ -webkit-transform: rotate(360deg); transform: rotate(360deg); width: 6.250em; height: 6.250em; }\n  }\n  \n  @keyframes rotate {\n    0% { -webkit-transform: rotate( 0 ); transform: rotate( 0 ); }\n    10% { width: 6.250em; height: 6.250em; }\n    66% { width: 2.4em; height: 2.4em; }\n    100%{ -webkit-transform: rotate(360deg); transform: rotate(360deg); width: 6.250em; height: 6.250em; }\n  }\n  \n  @-webkit-keyframes dotsY {\n    66% { opacity: .1; width: 2.4em; }\n    77%{ opacity: 1; width: 0; }\n  }\n  \n  @keyframes dotsY {\n    66% { opacity: .1; width: 2.4em; }\n    77%{ opacity: 1; width: 0; }\n  }\n  @-webkit-keyframes dotsX {\n    66% { opacity: .1; height: 2.4em;}\n    77%{ opacity: 1; height: 0; }\n  }\n  @keyframes dotsX {\n    66% { opacity: .1; height: 2.4em;}\n    77%{ opacity: 1; height: 0; }\n  }\n  \n  @-webkit-keyframes flash {\n    33% { opacity: 0; border-radius: 0%; }\n    55%{ opacity: .6; border-radius: 100%; }\n    66%{ opacity: 0; }\n  }\n  \n  @keyframes flash {\n    33% { opacity: 0; border-radius: 0%; }\n    55%{ opacity: .6; border-radius: 100%; }\n    66%{ opacity: 0; }\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/productdetails/productdetails.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n\t\t<!-- <figure  *ngIf=\"_dotLoder\">\n\t\t\t\t<div class=\"dot white\"></div>\n\t\t\t\t<div class=\"dot\"></div>\n\t\t\t\t<div class=\"dot\"></div>\n\t\t\t\t<div class=\"dot\"></div>\n\t\t\t\t<div class=\"dot\"></div>\n\t\t</figure> -->\n\n  \t<div class=\"card\" >\n\t\t\t<div class=\"container-fliud\">\n\t\t\t\t<div class=\"wrapper row\" *ngIf=\"data\">\n\t\t\t\t\t<div class=\"preview col-md-6\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"preview-pic tab-content\"  >\n\t\t\t\t\t\t  <div class=\"tab-pane active\" id=\"pic-1\"><img [src] =\"data.href\"/></div>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"details col-md-6\" >\n\t\t\t\t\t\t<h3 class=\"product-title\">{{data.name}}</h3>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<div class=\"stars\">\n\t\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class=\"review-no\">41 reviews</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"product-description\">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>\n\t\t\t\t\t\t<h4 class=\"price\">current price: <span><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>&nbsp;{{data.cost * qty}}</span></h4>\n\t\t\t\t\t\t<p class=\"vote\"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>\n\t\t\t\t\t\t<h5 class=\"sizes\">Net Weight:\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t{{data.weight}} Kg\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t<div>\n              <label>Quantity:</label>\n              <input type=number id=\"qty\" [value]=\"qty\" [(ngModel)]=\"qty\" name=\"quantity\" min=\"1\">\n            </div>\n\t\t\t\t\t\t<div class=\"action\">\n                            <button class=\"add-to-cart btn btn-default\" (click)=\"addcart(data,qty)\" type=\"button\"><i class=\"fa fa-spinner fa-spin\" *ngIf=\"_dotLoder\"></i> &nbsp;add to cart</button>\n\t\t\t\t\t\t\t<button class=\"add-to-cart btn btn-default\" type=\"button\" (click)=\"buyNow(data,qty)\"><i class=\"fa fa-spinner fa-spin\" *ngIf=\"_isdotLoder\"></i> &nbsp; Buy Now</button>\n              \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> \n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/productdetails/productdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductdetailsComponent = (function () {
    // productData:any;
    function ProductdetailsComponent(dashboardservice, zone, router, jwtservice) {
        var _this = this;
        this.dashboardservice = dashboardservice;
        this.zone = zone;
        this.router = router;
        this.jwtservice = jwtservice;
        this.token = this.jwtservice.getToken();
        this.qty = "1";
        this.subscription = dashboardservice.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            // console.log(this.currentUser)
            // this.initData(this.currentUser)
        });
        // this.productDetials = this.dashboardservice.getPath();
        this.productDetials = localStorage.getItem('data');
        this.data = JSON.parse(this.productDetials);
        console.log(this.data);
    }
    // initData(currentUser: User) {
    //   console.log(currentUser)
    // }
    ProductdetailsComponent.prototype.addcart = function (data, qty) {
        var _this = this;
        data["qty"] = qty;
        data["id"] = this.currentUser.id;
        var id = this.currentUser.id;
        if (!this.token) {
            this.router.navigate(['/login']);
        }
        else {
            this._dotLoder = true;
            this.dashboardservice.addCartitems(data).subscribe(function (items) {
                console.log(items);
                if (items.Success == true) {
                    _this.dashboardservice.getItems(id)
                        .subscribe(function (res) {
                        _this._dotLoder = false;
                        _this.items = res.items;
                        _this.length = _this.items.length;
                        console.log(_this.items);
                        _this.dashboardservice.sendPath(_this.length);
                    });
                    _this.router.navigate(['/cart']);
                }
                else {
                    _this.router.navigate(['/']);
                }
            }, function (err) {
                _this.errors = err;
                console.log(_this.errors);
            });
        }
    };
    ProductdetailsComponent.prototype.buyNow = function (data, qty) {
        var _this = this;
        data["qty"] = qty;
        data["id"] = this.currentUser.id;
        //  data.cost=data.cost * qty;
        var id = this.currentUser.id;
        //  let productData=data;
        if (!this.token) {
            this.router.navigate(['/login']);
        }
        else {
            this.dashboardservice.addCartitems(data).subscribe(function (items) {
                console.log(items);
                if (items.Success == true) {
                    _this.dashboardservice.getItems(id)
                        .subscribe(function (res) {
                        // this._dotLoder=false;
                        _this.items = res.items;
                        _this.length = _this.items.length;
                        _this.dashboardservice.sendPath(_this.length);
                    });
                }
            }, function (err) {
                _this.errors = err;
                console.log(_this.errors);
            });
            this.router.navigate(['buynow']);
            //     data["qty"]=qty;
            //     data["id"]=this.currentUser.id;
            //     data.cost=data.cost * qty;
            //     this._isdotLoder=true;
            //     // console.log(data)
            //    this.dashboardservice.buyNow(data).subscribe(res=>{
            //    console.log(res);
            //    this._isdotLoder=false;
            // })
        }
    };
    ProductdetailsComponent.prototype.ngOnInit = function () {
    };
    return ProductdetailsComponent;
}());
ProductdetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-productdetails',
        template: __webpack_require__("../../../../../src/app/dashboard/components/productdetails/productdetails.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/productdetails/productdetails.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_jwt_service__["a" /* JwtService */]) === "function" && _d || Object])
], ProductdetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=productdetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/dashboard/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_productdetails_productdetails_component__ = __webpack_require__("../../../../../src/app/dashboard/components/productdetails/productdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/dashboard/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_orders_orders_component__ = __webpack_require__("../../../../../src/app/dashboard/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_myaccount_myaccount_component__ = __webpack_require__("../../../../../src/app/dashboard/components/myaccount/myaccount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_myaccount_personalinformation_personalinformation_component__ = __webpack_require__("../../../../../src/app/dashboard/components/myaccount/personalinformation/personalinformation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_myaccount_manageaddress_manageaddress_component__ = __webpack_require__("../../../../../src/app/dashboard/components/myaccount/manageaddress/manageaddress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_myaccount_uplodeproducts_uplodeproducts_component__ = __webpack_require__("../../../../../src/app/dashboard/components/myaccount/uplodeproducts/uplodeproducts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_myaccount_changepassword_changepassword_component__ = __webpack_require__("../../../../../src/app/dashboard/components/myaccount/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_buynow_buynow_component__ = __webpack_require__("../../../../../src/app/dashboard/components/buynow/buynow.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { ChangepasswordComponent } from '../login/changepassword/changepassword.component';

var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
        // canActivate : [ AuthGuard ],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
            { path: 'productdata', component: __WEBPACK_IMPORTED_MODULE_4__components_productdetails_productdetails_component__["a" /* ProductdetailsComponent */] },
            { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_5__components_cart_cart_component__["a" /* CartComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_6__components_orders_orders_component__["a" /* OrdersComponent */] },
            { path: 'buynow', component: __WEBPACK_IMPORTED_MODULE_12__components_buynow_buynow_component__["a" /* BuynowComponent */] },
            { path: 'myaccount', component: __WEBPACK_IMPORTED_MODULE_7__components_myaccount_myaccount_component__["a" /* MyaccountComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_orders_orders_component__["a" /* OrdersComponent */] },
                    { path: 'accountettings', children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_myaccount_personalinformation_personalinformation_component__["a" /* PersonalinformationComponent */] },
                            { path: 'personalinformation', component: __WEBPACK_IMPORTED_MODULE_8__components_myaccount_personalinformation_personalinformation_component__["a" /* PersonalinformationComponent */] },
                            { path: 'manageaddress', component: __WEBPACK_IMPORTED_MODULE_9__components_myaccount_manageaddress_manageaddress_component__["a" /* ManageaddressComponent */] },
                            { path: 'changepassword', component: __WEBPACK_IMPORTED_MODULE_11__components_myaccount_changepassword_changepassword_component__["a" /* ChangepasswordComponent */] },
                        ] },
                    { path: 'uplodeproducts', component: __WEBPACK_IMPORTED_MODULE_10__components_myaccount_uplodeproducts_uplodeproducts_component__["a" /* UplodeproductsComponent */] },
                ] },
        ]
    }
];
var dashboardRoutingModule = (function () {
    function dashboardRoutingModule() {
    }
    return dashboardRoutingModule;
}());
dashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], dashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardModule", function() { return dashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_carousel__ = __webpack_require__("../../../../angular4-carousel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/dashboard/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_header_header_component__ = __webpack_require__("../../../../../src/app/shared/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_productdetails_productdetails_component__ = __webpack_require__("../../../../../src/app/dashboard/components/productdetails/productdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_components_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/dashboard/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_orders_orders_component__ = __webpack_require__("../../../../../src/app/dashboard/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_myaccount_myaccount_component__ = __webpack_require__("../../../../../src/app/dashboard/components/myaccount/myaccount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_myaccount_personalinformation_personalinformation_component__ = __webpack_require__("../../../../../src/app/dashboard/components/myaccount/personalinformation/personalinformation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_myaccount_manageaddress_manageaddress_component__ = __webpack_require__("../../../../../src/app/dashboard/components/myaccount/manageaddress/manageaddress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_myaccount_uplodeproducts_uplodeproducts_component__ = __webpack_require__("../../../../../src/app/dashboard/components/myaccount/uplodeproducts/uplodeproducts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_myaccount_changepassword_changepassword_component__ = __webpack_require__("../../../../../src/app/dashboard/components/myaccount/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__validator_module__ = __webpack_require__("../../../../../src/app/validator.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_buynow_buynow_component__ = __webpack_require__("../../../../../src/app/dashboard/components/buynow/buynow.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { EqualValidator } from '../shared/directives/equal-validator.directive';


var dashboardModule = (function () {
    function dashboardModule() {
    }
    return dashboardModule;
}());
dashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__["a" /* dashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_angular4_carousel__["b" /* CarouselModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_17__validator_module__["a" /* validatorModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shared_components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__shared_components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_productdetails_productdetails_component__["a" /* ProductdetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_myaccount_myaccount_component__["a" /* MyaccountComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_myaccount_personalinformation_personalinformation_component__["a" /* PersonalinformationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_myaccount_manageaddress_manageaddress_component__["a" /* ManageaddressComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_myaccount_uplodeproducts_uplodeproducts_component__["a" /* UplodeproductsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_myaccount_changepassword_changepassword_component__["a" /* ChangepasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_buynow_buynow_component__["a" /* BuynowComponent */],
        ],
        exports: [],
        providers: []
    })
], dashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer-sub{\n    background-color: #f3f7f8;\n    border-top: 1px solid #dbdbdb;\n}\n\n#footer-main{\n    background-color: #012b72;\n    padding:15px 0 10px 0;\n    height: 50px;\n    color: white;\n}\n\n#footer-sub h5{\n    color:#565656;\n    margin-top: 25px;\n}\n\n#footer-sub ul{\n    list-style: none;\n    margin-top: 20px;\n}\n\n#footer-sub hr{\n    margin: 5px;\n\n}\n\n#footer-sub ul li{\nmargin-left: -38px;\n}\n\n#footer-sub a:link {\n    text-decoration: none;\n    color:#565656;\n    font-size: 12px;\n}\n\n#footer-sub a {\n    text-decoration: none;\n    color:#565656;\n}\n\n\n#footer-sub a:hover {\n    text-decoration: none;\n    color: blue;\n}\n\n\n#footer-sub a:active {\n    text-decoration: none;\n    color:#565656;\n}\n\n.vertical-line{\n    border-right: 1px solid #dbdbdb;\n    margin: 8px;\n    padding: 0px;\n}\n\n.glyphicon {\n    font-size: 35px;\n     color:#6d6c6c;\n}\n\n#sub-two{\n    margin: 0px;\n    padding: 0px;\n}\n\n#sub-two .vertical-line h4{\n    color:#6d6c6c;\n}\n\n\n#footer-main ul{\n    list-style: none;\n}\n\n#footer-main ul li{\n    float:left;\n    text-decoration: none;\n    padding-left: 15px;\n    margin-top: 17px;\n}\n\n#footer-main a:link {\n    color:white;\n    font-size: 12px;\n}\n\n#footer-main a:visited {\n    color:white;\n}\n\n\n#footer-main a:hover {\n    text-decoration: none;\n    color: #00b9f5;\n}\n\n\n#footer-main a:active {\n    color:white;\n}\n\n.glyphicon-search{\n    font-size: 20px;\n}\n\n#social-menu{\n    float: right;\n   margin-right: 60px;\n}\n\n#side-padding{\n    padding: 0px;\n    margin: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div style=\"min-height: 250px;\" class=\"footer\" id=\"footer-sub\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <h5> HELP </h5>\n                <ul>\n                    <li><a>Payments</a><hr></li>\n                    <li><a>Saved Cards</a><hr></li>\n                    <li><a>Shipping</a><hr ></li>\n                    <li><a>Cancellation & Returns</a><hr></li>\n                    <li><a>FAQ</a></li>               \n                </ul>\n                </div>\n    \n                 <div class=\"col-md-4\">\n                    <h5> BRAND NAME </h5>\n                <ul>\n                    <li><a>Lilitha</a><hr></li>\n                    <li><a> Lohitha </a><hr></li>\n                    <li><a>Bell</a><hr></li>\n                    <li><a>Indian Gate</a><hr></li>\n                    <li><a>Daawat</a></li>               \n                </ul>\n            </div>\n    \n             <div class=\"col-md-4\">\n                <h5> MISC </h5>\n                <ul>\n                    <li><a>Online Shopping</a><hr></li>\n                    <li><a>Affliate Program</a><hr></li>\n                    <li><a>Gift Card</a><hr></li>\n                    <li><a>Subscription</a><hr></li>\n                    <li><a>Sitemap</a></li>               \n                </ul>\n            </div>\n           \n            </div>\n    \n            \n     <hr style=\"margin-bottom:0px; margin-top:30px; padding:0px;\">\n            <div class=\"row\" id=\"sub-two\">\n    \n                <div class=\"col-md-4\">\n                    <div class=\"vertical-line text-center\">\n                        <span class=\"glyphicon glyphicon-map-marker\"></span>\n                        <h4>TRACK YOUR ORDER</h4>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-4\">\n                    <div class=\"vertical-line text-center\">\n                        <span class=\"glyphicon glyphicon-refresh\"></span>\n                        <h4>FREE & EASY RETURNS</h4>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-4\">\n                    <div style=\"margin:8px;\" class=\"text-center\">\n                        <span class=\"glyphicon glyphicon-remove-circle\"></span>\n                        <h4 style=\"color:#6d6c6c;\">ONLINE CANCELLATIONS</h4>\n                    </div>\n                </div>\n                \n    \n            </div>\n            <hr style=\"margin-bottom:30px; margin-top:0px; padding:0px;\">\n    \n           \n    \n        </div>\n    </div>\n    <!-- <div style=\"min-height: 50px;\" >\n    \n        \n    \n    </div> -->\n    <div class=\"text-center\" id=\"footer-main\">\n        <p>Copyright © 2017 All rights reserved</p>\n      </div>\n    </footer>"

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#bigstore-navbar {\n    background-color: #006b96;\n    color: #FFFFFF;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n.row1{\n    padding-top: 10px;\n}\n\n.row2 {\n    padding-bottom: 20px;\n}\n\n.bigstore-navbar-input {\n    color: black !important;\n    padding: 11px 16px;\n    border-radius: 2px 0 0 2px;\n    border: 0 none;\n    outline: 0 none;\n    font-size: 15px;\n}\n\n.bigstore-navbar-button {\n    background-color: #acada6;\n    border: 1px solid #fdfdf9;\n    border-radius: 0 2px 2px 0;\n    color: #565656;\n    padding: 10px 0;\n    height: 43px;\n    cursor: pointer;\n}\n\n.cart-button {\n    background-color: #0c80c7;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2);\n    padding: 10px 0;\n    text-align: center;\n    height: 41px;\n    border-radius: 11px;\n    font-weight: 500;\n    width: 120px;\n    display: inline-block;\n    color: #FFFFFF;\n    text-decoration: none;\n    color: inherit;\n    border: none;\n    outline: none;\n}\n\n.cart-button:hover{\n    text-decoration: none;\n    color: #fff;\n    cursor: pointer;\n}\n\n.cart-svg {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    vertical-align: middle;\n    margin-right: 8px;\n}\n\n.item-number {\n    border-radius: 3px;\n    background-color: rgba(0, 0, 0, .1);\n    height: 20px;\n    padding: 3px 6px;\n    font-weight: 500;\n    display: inline-block;\n    color: #fff;\n    line-height: 12px;\n    margin-left: 10px;\n}\n\n.upper-links {\n    display: inline-block;\n    padding: 0 11px;\n    line-height: 23px;\n    font-family: 'Roboto', sans-serif;\n    letter-spacing: 0;\n    color: inherit;\n    border: none;\n    outline: none;\n    font-size: 12px;\n}\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n    margin-bottom: 0px;\n}\n\n.dropdown:hover {\n    background-color: #fff;\n}\n\n.dropdown:hover .links {\n    color: #000;\n}\n\n.dropdown:hover .dropdown-menu {\n    display: block;\n}\n\n.dropdown .dropdown-menu {\n    position: absolute;\n    top: 100%;\n    display: none;\n    background-color: #fff;\n    color: #333;\n    left: 0px;\n    border: 0;\n    border-radius: 0;\n    box-shadow: 0 4px 8px -3px #555454;\n    margin: 0;\n    padding: 0px;\n}\n\n.links {\n    color: #fff;\n    text-decoration: none;\n}\n\n.links:hover {\n    color: #fff;\n    text-decoration: none;\n}\n\n.profile-links {\n    font-size: 12px;\n    font-family: 'Roboto', sans-serif;\n    border-bottom: 1px solid #e9e9e9;\n    box-sizing: border-box;\n    display: block;\n    padding: 0 11px;\n    line-height: 23px;\n}\n\n.profile-li{\n    padding-top: 2px;\n    cursor: pointer;\n}\n\n.largenav {\n    display: none;\n}\n\n.smallnav{\n    display: block;\n}\n\n.smallsearch{\n    margin-left: 15px;\n    margin-top: 15px;\n}\n\n.menu{\n    cursor: pointer;\n}\n\n@media screen and (min-width: 768px) {\n    .largenav {\n        display: block;\n    }\n    .smallnav{\n        display: none;\n    }\n    .smallsearch{\n        margin: 0px;\n    }\n}\n\n/*Sidenav*/\n.sidenav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: #fff;\n    overflow-x: hidden;\n    transition: 0.5s;\n    box-shadow: 0 4px 8px -3px #555454;\n    padding-top: 0px;\n}\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s\n}\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n    color: #fff;        \n}\n\n@media screen and (max-height: 450px) {\n  .sidenav a {font-size: 18px;}\n}\n\n.sidenav-heading{\n    font-size: 36px;\n    color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bigstore-navbar\">\n    <div class=\"container\">\n        <div class=\"row row1\">\n            <ul class=\"largenav pull-right\">\n\n                <li class=\"upper-links\" *ngIf=\"!token\"><a class=\"links\" routerLink=\"/login/signup\">SignUp</a></li>\n                <li class=\"upper-links\" *ngIf=\"!token\"><a class=\"links\" routerLink=\"/login\">SignIn</a></li>\n\n                <li class=\"upper-links dropdown\" *ngIf=\"token\"><a class=\"links profile-li\">Welcome back :&nbsp;{{currentUser.full_name}}</a>\n                    <ul class=\"dropdown-menu\">\n                        <li class=\"profile-li\"><a class=\"profile-links\" routerLink=\"/myaccount\">Account</a></li>\n                        <li class=\"profile-li\"><a class=\"profile-links\" routerLink=\"/orders\">Orders</a></li>\n                        <li class=\"profile-li\"><a class=\"profile-links\" (click)=\"logout()\">Logout</a></li>\n                        <!-- <li class=\"profile-li\"><a class=\"profile-links\" href=\"\">Link</a></li>\n                      <li class=\"profile-li\"><a class=\"profile-links\" href=\"\">Link</a></li>\n                      <li class=\"profile-li\"><a class=\"profile-links\" href=\"\">Link</a></li>\n                      <li class=\"profile-li\"><a class=\"profile-links\" href=\"\">Link</a></li> -->\n                    </ul>\n                </li>\n\n            </ul>\n        </div>\n        <div class=\"row row2\">\n            <div class=\"col-sm-2\">\n                <h2 style=\"margin:0px;\"><span class=\"smallnav menu\" >☰ Big Store</span></h2>\n                <h1 style=\"margin:0px; cursor:pointer;\" routerLink=\"/\"><span class=\"largenav\">Big Store</span></h1>\n            </div>\n            <div class=\"bigstore-navbar-search smallsearch col-sm-8 col-xs-11\">\n                <div class=\"row\">\n                    <input class=\"bigstore-navbar-input col-xs-11\" type=\"text\" placeholder=\"Search for Products, Brands and more\" name=\"\" >\n                    <button class=\"bigstore-navbar-button col-xs-1\">\n                      <svg width=\"15px\" height=\"15px\">\n                          <path d=\"M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 \"></path>\n                      </svg>\n                  </button>\n                </div>\n            </div>\n            <div class=\"cart largenav col-sm-2\">\n                <a class=\"cart-button\" routerLink=\"/cart\">\n                    <svg class=\"cart-svg \" width=\"16 \" height=\"16 \" viewBox=\"0 0 16 16 \">\n                      <path d=\"M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 \" fill=\"#fff \"></path>\n                  </svg> Cart\n                  <span class=\"item-number\" *ngIf=\"!token\">0</span>                  \n                 <span class=\"item-number\" *ngIf=\"token\">{{itemslength}}</span>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id=\"mySidenav\" class=\"sidenav\">\n    <div class=\"container\" style=\"background-color: #2874f0; padding-top: 10px;\">\n        <span class=\"sidenav-heading\">Home</span>\n        <a href=\"javascript:void(0)\" class=\"closebtn\" >×</a>\n    </div>\n    <a routerLink=\"/myaccount\">account</a>\n    <a routerLink=\"/orders\">orders</a>\n    <a (click)=\"logout()\">logout</a>\n    <a href=\"\">Link</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(router, dashboardService, jwtservice, zone) {
        var _this = this;
        this.router = router;
        this.dashboardService = dashboardService;
        this.jwtservice = jwtservice;
        this.zone = zone;
        this.token = this.jwtservice.getToken();
        this.subscription = dashboardService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.initData(_this.currentUser);
        });
    }
    HeaderComponent.prototype.initData = function (currentUser) {
        var _this = this;
        var id = currentUser.id;
        if (id) {
            this.dashboardService.getItems(id)
                .subscribe(function (res) {
                _this.items = res.items;
                _this.itemslength = _this.items.length;
                // console.log(this.itemslength)
            });
            this.dashboardService.getPath().subscribe(function (res) {
                console.log(res);
            });
            // this.itemslength=this.items.length;
            // this.zone.runOutsideAngular(() => {
            // this.dashboardService.getItems(id)
            //     .subscribe(
            //     res => {
            //     // this.zone.run(() => {
            //       this.items = res.items;
            //       this.itemslength=this.items.length;
            //       console.log("this is length",this.itemslength)
            //     // })
            //     }
            //     )
            // })
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.dashboardService.purgeAuth();
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.caseNumber$.subscribe(function (res) {
            _this.itemslength = res;
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/shared/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_jwt_service__["a" /* JwtService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object])
], HeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=header.component.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map