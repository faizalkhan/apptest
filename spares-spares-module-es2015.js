(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["spares-spares-module"],{

/***/ "2bTi":
/*!*****************************************!*\
  !*** ./src/app/spares/spares.module.ts ***!
  \*****************************************/
/*! exports provided: SparesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparesModule", function() { return SparesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-module/shared-module.module */ "QYs8");
/* harmony import */ var _spares_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spares-routing.module */ "ELTV");
/* harmony import */ var _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock-list/stock-list.component */ "mwoA");
/* harmony import */ var _stock_list_spares_group_spares_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-list/spares-group/spares-group.component */ "AgS2");
/* harmony import */ var _stock_list_sku_stock_sku_stock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-list/sku-stock/sku-stock.component */ "7Zk8");
/* harmony import */ var _order_basket_order_basket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-basket/order-basket.component */ "4XD7");
/* harmony import */ var _order_basket_basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-basket/basket-item/basket-item.component */ "Yu72");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-history/order-history.component */ "BUSm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class SparesModule {
}
SparesModule.ɵfac = function SparesModule_Factory(t) { return new (t || SparesModule)(); };
SparesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: SparesModule });
SparesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _spares_routing_module__WEBPACK_IMPORTED_MODULE_3__["SparesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SparesModule, { declarations: [_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_4__["StockListComponent"],
        _stock_list_spares_group_spares_group_component__WEBPACK_IMPORTED_MODULE_5__["SparesGroupComponent"],
        _stock_list_sku_stock_sku_stock_component__WEBPACK_IMPORTED_MODULE_6__["SkuStockComponent"],
        _order_basket_order_basket_component__WEBPACK_IMPORTED_MODULE_7__["OrderBasketComponent"],
        _order_basket_basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_8__["BasketItemComponent"],
        _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__["OrderHistoryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _spares_routing_module__WEBPACK_IMPORTED_MODULE_3__["SparesRoutingModule"]] }); })();


/***/ }),

/***/ "4XD7":
/*!***************************************************************!*\
  !*** ./src/app/spares/order-basket/order-basket.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderBasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBasketComponent", function() { return OrderBasketComponent; });
/* harmony import */ var src_app_services_basket_basket_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/basket/basket.types */ "7v0c");
/* harmony import */ var _src_utils_numberUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/utils/numberUtils */ "XZqO");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order/order.service */ "KWTU");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_account_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-account/user.service */ "lw6W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared-module/section-header/section-header.component */ "OeDX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basket-item/basket-item.component */ "Yu72");















function OrderBasketComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 3);
} }
function OrderBasketComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Your basket is empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Add more spares");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function OrderBasketComponent_div_5_app_basket_item_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-basket-item", 16);
} if (rf & 2) {
    const basketItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("basketItem", basketItem_r6);
} }
function OrderBasketComponent_div_5_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.errorMessage, " ");
} }
function OrderBasketComponent_div_5_button_26_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Place Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function OrderBasketComponent_div_5_button_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 3);
} }
function OrderBasketComponent_div_5_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function OrderBasketComponent_div_5_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r9.handlesPlaceOrderClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, OrderBasketComponent_div_5_button_26_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, OrderBasketComponent_div_5_button_26_div_2_Template, 1, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r5.isPlacingOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.isPlacingOrder);
} }
function OrderBasketComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " \u00A0& Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Order Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "UOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Added By");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, OrderBasketComponent_div_5_app_basket_item_18_Template, 1, 1, "app-basket-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, OrderBasketComponent_div_5_div_19_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Add more spares");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, OrderBasketComponent_div_5_button_26_Template, 3, 2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.basket.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.canPlaceOrder);
} }
class OrderBasketComponent {
    constructor(basketService, authenticationService, toastService, orderService, router, userService) {
        this.basketService = basketService;
        this.authenticationService = authenticationService;
        this.toastService = toastService;
        this.orderService = orderService;
        this.router = router;
        this.userService = userService;
        this.numberToPriceString = _src_utils_numberUtils__WEBPACK_IMPORTED_MODULE_1__["numberToPriceString"];
        this.isPlacingOrder = false;
        this.isGettingBasket = false;
    }
    ngOnInit() {
        this.isGettingBasket = true;
        this.basketService.basket$.subscribe((basket) => {
            this.isGettingBasket = false;
            if (basket && basket.items) {
                this.basket = basket;
            }
        });
        this.setPermissionBooleans();
    }
    setPermissionBooleans() {
        this.authenticationService
            .currentUserHasPermission({
            [src_app_services__WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].Spares]: [src_app_services__WEBPACK_IMPORTED_MODULE_2__["SparesPermissions"].CanPlaceOrder]
        })
            .subscribe(hasPermission => (this.canPlaceOrder = hasPermission));
        this.authenticationService
            .currentUserHasPermission({
            [src_app_services__WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].Spares]: [src_app_services__WEBPACK_IMPORTED_MODULE_2__["SparesPermissions"].CanViewOrderHistory]
        })
            .subscribe(hasPermission => (this.canViewOrderHistory = hasPermission));
    }
    placeOrder() {
        if (this.isPlacingOrder) {
            return;
        }
        this.isPlacingOrder = true;
        this.errorMessage = '';
        this.orderService
            .requestOrder(this.basket, this.userService.primaryOrganisationId)
            .subscribe(_ => {
            this.isPlacingOrder = false;
            this.toastService.showToast(new src_app_services__WEBPACK_IMPORTED_MODULE_2__["Toast"]('Request details emailed to purchase team'));
            this.basketService
                .getBasket()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                .subscribe(basket => {
                this.basketService.basket$.next(new src_app_services_basket_basket_types__WEBPACK_IMPORTED_MODULE_0__["Basket"](basket));
            });
            this.router.navigate(['spares/stock-list']);
        }, (errorResponse) => {
            this.isPlacingOrder = false;
            const errorMessage = errorResponse.error;
            this.toastService.showErrorToast(errorMessage);
            return;
        }, () => {
            this.isPlacingOrder = false;
            this.errorMessage = `Sorry something went wrong... please try again later`;
        });
    }
    handlesPlaceOrderClick() {
        if (this.isPlacingOrder) {
            return;
        }
        this.placeOrder();
    }
}
OrderBasketComponent.ɵfac = function OrderBasketComponent_Factory(t) { return new (t || OrderBasketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["BasketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_user_account_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
OrderBasketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: OrderBasketComponent, selectors: [["app-order-basket"]], decls: 6, vars: 3, consts: [["class", "spinner light", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [4, "ngIf"], [1, "spinner", "light"], [1, "text-center"], [1, "row"], [1, "col-md-4", "offset-md-4"], ["routerLink", "/product-catalogue", 1, "btn", "add-btn", "btn-block", "mt-2"], [1, "mobile-only"], [3, "basketItem", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger text-center", 4, "ngIf"], [1, "actions", "row"], [1, "col-sm-7"], ["routerLink", "/spares/stock-list", 1, "btn", "add-btn"], [1, "col-sm-5"], ["class", "btn btn-primary btn-block", 3, "click", 4, "ngIf"], [3, "basketItem"], [1, "alert", "alert-danger", "text-center"], [1, "btn", "btn-primary", "btn-block", 3, "click"]], template: function OrderBasketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-section-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Order Basket\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, OrderBasketComponent_div_3_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, OrderBasketComponent_div_4_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, OrderBasketComponent_div_5_Template, 27, 3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isGettingBasket);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.basket && !ctx.isGettingBasket || ctx.basket.items.length === 0 && !ctx.isGettingBasket);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.basket && ctx.basket.items.length > 0);
    } }, directives: [_shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_8__["SectionHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_10__["BasketItemComponent"]], styles: ["h2[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin-top: -0.8em;\n  margin-bottom: 1em;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2em;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.875em;\n  text-align: center;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n  width: 15%;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  width: 30%;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2)    > .mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n  width: 20%;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n  width: 5%;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5) {\n  width: 20%;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6) {\n  width: 10%;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  line-height: 1.1;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.8em;\n  text-align: center;\n  vertical-align: middle;\n  position: relative;\n  height: 5em;\n  border-bottom: 2px solid white;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.summary-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  padding-left: 2.5rem;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.summary-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  font-weight: 600;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.tax-row[_ngcontent-%COMP%] {\n  background-color: #dedede;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.total-row[_ngcontent-%COMP%] {\n  background-color: #cccccc;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.credit-row[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.actions.row[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.actions.row[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  margin-left: 3em;\n}\n\n.actions.row[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (max-width: 768px) {\n  table[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    display: none;\n    width: 0em;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    text-align: left;\n    display: inline-block;\n    padding-left: 0.8em;\n    width: 60%;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2)    > .mobile-only[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    display: inline-block;\n    width: 40%;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]    > .mobile-only[_ngcontent-%COMP%] {\n    display: block;\n  }\n  table[_ngcontent-%COMP%]   app-basket-item[_ngcontent-%COMP%] {\n    display: inline-flex;\n    padding-right: 0;\n    width: 100%;\n  }\n  table[_ngcontent-%COMP%]   app-basket-item[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  table[_ngcontent-%COMP%]   app-basket-item[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    height: auto;\n  }\n  table[_ngcontent-%COMP%]   app-basket-item[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    width: 70%;\n  }\n\n  .actions.row[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 0.5em;\n    margin-left: 0;\n  }\n  .actions.row[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlci1iYXNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVJO0VBQ0UsVUFBQTtBQUFOOztBQUNJO0VBQ0UsVUFBQTtBQUNOOztBQUFNO0VBQ0UsYUFBQTtBQUVSOztBQUNJO0VBQ0UsVUFBQTtBQUNOOztBQUFJO0VBQ0UsU0FBQTtBQUVOOztBQURJO0VBQ0UsVUFBQTtBQUdOOztBQUZJO0VBQ0UsVUFBQTtBQUlOOztBQUFJO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUVOOztBQUFNO0VBQ0UsY0FsQ29CO0VBbUNwQixrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFFUjs7QUFHTTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFEUjs7QUFHTTtFQUNFLGdCQUFBO0FBRFI7O0FBS0k7RUFDRSx5QkFBQTtBQUhOOztBQU1JO0VBQ0UseUJBQUE7QUFKTjs7QUFPSTtFQUNFLHVCQUFBO0FBTE47O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBUUU7RUFDRSxnQkFBQTtBQU5KOztBQVFFO0VBQ0UsV0FBQTtBQU5KOztBQVVBO0VBQ0U7SUFDRSxlQUFBO0VBUEY7RUFTRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VBUEo7RUFRSTtJQUNFLGFBQUE7SUFDQSxVQUFBO0VBTk47RUFRSTtJQUNFLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUFOTjtFQU9NO0lBQ0UscUJBQUE7RUFMUjtFQVFJO0lBQ0UscUJBQUE7SUFDQSxVQUFBO0VBTk47RUFPSTtJQUNFLGNBQUE7RUFMTjtFQVFFO0lBQ0Usb0JBQUE7SUFDRixnQkFBQTtJQUNBLFdBQUE7RUFORjtFQVFFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0VBTko7RUFPSTtJQUNFLGNBQUE7SUFDQSxZQUFBO0VBTE47RUFNTTtJQUNFLFVBQUE7RUFKUjs7RUFZRTtJQUNFLGNBQUE7SUFDQSxvQkFBQTtJQUNBLGNBQUE7RUFUSjtFQVdFO0lBQ0UsV0FBQTtFQVRKO0FBQ0YiLCJmaWxlIjoib3JkZXItYmFza2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tdG9wOiAtMC44ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4kYmFza2V0LXRhYmxlLWNlbGwtcGFkZGluZzogMC44ZW07XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcblxyXG4gIHRoZWFkIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgdGg6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgd2lkdGg6IDE1JTsgICAgfSAvLyBJRFxyXG4gICAgdGg6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgPiAubW9iaWxlLW9ubHkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH0gLy8gRGVzY3JpcHRpb25cclxuICAgIHRoOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIHdpZHRoOiAyMCU7ICAgIH0gLy8gT3JkZXIgUXR5XHJcbiAgICB0aDpudGgtY2hpbGQoNCkge1xyXG4gICAgICB3aWR0aDogNSU7ICAgIH0gLy8gVU9NXHJcbiAgICB0aDpudGgtY2hpbGQoNSkge1xyXG4gICAgICB3aWR0aDogMjAlOyAgICB9IC8vIEFkZGVkIEJ5XHJcbiAgICB0aDpudGgtY2hpbGQoNikge1xyXG4gICAgICB3aWR0aDogMTAlOyAgICB9IC8vIERlbGV0ZVxyXG4gIH1cclxuXHJcbiAgdGJvZHkge1xyXG4gICAgdHIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG5cclxuICAgICAgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6ICRiYXNrZXQtdGFibGUtY2VsbC1wYWRkaW5nO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDVlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0ci5zdW1tYXJ5LXJvdyB7XHJcbiAgICAgIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyLnRheC1yb3cge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG4gICAgfVxyXG5cclxuICAgIHRyLnRvdGFsLXJvdyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICB9XHJcblxyXG4gICAgdHIuY3JlZGl0LXJvdyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbnMucm93IHtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgLmFkZC1idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNlbTtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICB0YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGgge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDBlbTtcclxuICAgICAgfVxyXG4gICAgICB0aDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC44ZW07XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICA+IC5tb2JpbGUtb25seSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IC8vIERlc2NyaXB0aW9uXHJcbiAgICAgIHRoOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7IH0gLy8gT3JkZXIgUXR5XHJcbiAgICAgID4gLm1vYmlsZS1vbmx5IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwLWJhc2tldC1pdGVte1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB0Ym9keSB0ciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHRkIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgfSAvLyBEZXNjcmlwdGlvblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGlvbnMucm93IHtcclxuICAgIC5hZGQtYnRuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "7Zk8":
/*!********************************************************************!*\
  !*** ./src/app/spares/stock-list/sku-stock/sku-stock.component.ts ***!
  \********************************************************************/
/*! exports provided: SkuStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkuStockComponent", function() { return SkuStockComponent; });
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _utils_observableUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/observableUtils */ "4ShH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_module_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-module/modal/modal.component */ "oeRM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function SkuStockComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkuStockComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkuStockComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkuStockComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkuStockComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkuStockComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkuStockComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkuStockComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkuStockComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkuStockComponent_app_modal_40_div_42_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Please note, minimum order quantity for this product is ", ctx_r14.skuStock.quantities.minimumOrderQuantity, " items. ");
} }
function SkuStockComponent_app_modal_40_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SkuStockComponent_app_modal_40_div_42_div_1_div_2_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.qty < ctx_r11.skuStock.quantities.minimumOrderQuantity);
} }
function SkuStockComponent_app_modal_40_div_42_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add to Basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkuStockComponent_app_modal_40_div_42_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 47);
} }
function SkuStockComponent_app_modal_40_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SkuStockComponent_app_modal_40_div_42_div_1_Template, 3, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SkuStockComponent_app_modal_40_div_42_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.qty = $event; })("paste", function SkuStockComponent_app_modal_40_div_42_Template_input_paste_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.handleQtyClipboard($event); })("keydown", function SkuStockComponent_app_modal_40_div_42_Template_input_keydown_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.handleQtyInputKeyDown($event); })("keyup", function SkuStockComponent_app_modal_40_div_42_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.handleQtyKeyup($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkuStockComponent_app_modal_40_div_42_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.handleAddToBasket(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SkuStockComponent_app_modal_40_div_42_span_7_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SkuStockComponent_app_modal_40_div_42_div_8_Template, 1, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.qty < ctx_r10.skuStock.quantities.minimumOrderQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r10.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r10.qty < ctx_r10.skuStock.quantities.minimumOrderQuantity || ctx_r10.qty < 1 || ctx_r10.qty.toString().length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r10.isAddingToBasket);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.isAddingToBasket);
} }
function SkuStockComponent_app_modal_40_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-modal", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("modalShouldClose", function SkuStockComponent_app_modal_40_Template_app_modal_modalShouldClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.handleDetailsModalClose(); })("contextmenu", function SkuStockComponent_app_modal_40_Template_app_modal_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.disableRightClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "header", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "section", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "In stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Min. Required Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Uom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, SkuStockComponent_app_modal_40_div_42_Template, 9, 5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.skuStock.sparesGroupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.skuStock.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.skuStock.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.skuStock.quantities.inStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.skuStock.quantities.reOrderLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.skuStock.uom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.canAddToBasket);
} }
_utils_observableUtils__WEBPACK_IMPORTED_MODULE_1__["AutoUnsubscribe"];
class SkuStockComponent {
    constructor(basketService, toastService, authenticationService) {
        this.basketService = basketService;
        this.toastService = toastService;
        this.authenticationService = authenticationService;
        this.visuallyExpanded = false;
        this.detailsModalVisible = false;
        this.isAddingToBasket = false;
        this.qty = 1;
        this.isQtyInOrderMultiples = true;
        this.canAddToBasket = true;
        this.userProfile = this.authenticationService.currentUserProfile$.getValue();
    }
    ngOnInit() {
        if (this.skuStock.quantities.minimumOrderQuantity) {
            this.qty = this.skuStock.quantities.minimumOrderQuantity;
        }
    }
    handleOrderMoreClick() {
        this.detailsModalVisible = true;
    }
    handleDetailsModalClose() {
        this.detailsModalVisible = false;
    }
    handleAddToBasket() {
        this.isAddingToBasket = true;
        Object(_utils_observableUtils__WEBPACK_IMPORTED_MODULE_1__["safelyUnsubscribeFrom"])(this.addToBasketSubscription);
        let basketItem;
        basketItem = {
            createdByUserId: this.userProfile.userId,
            createdByUserName: this.userProfile.name,
            skuId: this.skuStock.id,
            skuDescription: this.skuStock.description,
            uom: this.skuStock.uom,
            qty: this.qty
        };
        this.addToBasketSubscription = this.basketService
            .addToBasket(basketItem, this.userProfile.primarySite.id)
            .subscribe(() => {
            this.isAddingToBasket = false;
            this.detailsModalVisible = false;
            this.toastService.showToast(new src_app_services__WEBPACK_IMPORTED_MODULE_0__["Toast"]('Added to basket'));
        }, (errorResponse) => {
            this.isAddingToBasket = false;
            const errorMessage = errorResponse.error;
            this.toastService.showErrorToast(errorMessage);
            return;
        });
    }
    handleQtyClipboard(event) {
        event.preventDefault();
        return;
    }
    disableRightClick(e) {
        e.preventDefault();
    }
    handleQtyInputKeyDown(event) {
        if (event.key === 'Backspace' || event.key === 'Delete') {
            return;
        }
        if (isNaN(event.key) || event.keyCode === 32) {
            event.preventDefault();
        }
    }
    handleQtyKeyup(event) {
        if (event.key === 'Enter' &&
            this.qty > 0 &&
            this.qty.toString().length > 0 &&
            this.qty >= this.skuStock.quantities.minimumOrderQuantity) {
            event.preventDefault();
            this.handleAddToBasket();
        }
    }
}
SkuStockComponent.ɵfac = function SkuStockComponent_Factory(t) { return new (t || SkuStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_0__["BasketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_0__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"])); };
SkuStockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkuStockComponent, selectors: [["app-sku-stock"]], inputs: { skuStock: "skuStock" }, decls: 41, vars: 17, consts: [[1, "sku-stock"], [1, "sku-stock-row"], [1, "id"], [1, "name"], [1, "stock-levels"], [2, "display", "flex"], ["class", "9", 4, "ngIf"], ["class", "8", 4, "ngIf"], ["class", "7", 4, "ngIf"], ["class", "6", 4, "ngIf"], ["class", "5", 4, "ngIf"], ["class", "4", 4, "ngIf"], ["class", "3", 4, "ngIf"], ["class", "2", 4, "ngIf"], ["class", "1", 4, "ngIf"], [1, "actions"], [1, "btn", "btn-link", 3, "click"], ["class", "order-stock-sku-modal", 3, "modalShouldClose", "contextmenu", 4, "ngIf"], [1, "9"], [1, "8"], [1, "7"], [1, "6"], [1, "5"], [1, "4"], [1, "3"], [1, "2"], [1, "1"], [1, "order-stock-sku-modal", 3, "modalShouldClose", "contextmenu"], [1, "generic-info"], [1, "row"], [1, "col-8"], [1, "col-4", "text-right"], [1, "row", "description-row", "mt-4"], [1, "col-12"], [1, "stock-info"], [1, "col12"], [1, "info-row", "row"], [1, "col-sm-3", "col-3"], [1, "col-sm-5", "col-6"], [4, "ngIf"], ["class", "row notice-row", 4, "ngIf"], [1, "row", "add-to-basket-row"], [1, "col-4"], ["type", "text", "pattern", "[0-9]*", "inputmode", "text", "ng-pattern", "[0-9]*", "maxlength", "6", 1, "form-control", "quantity-input", 3, "ngModel", "ngModelChange", "paste", "keydown", "keyup"], [1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], ["class", "spinner light", 4, "ngIf"], [1, "row", "notice-row"], [1, "spinner", "light"]], template: function SkuStockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "In\u00A0Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "On\u00A0Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SkuStockComponent_span_22_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SkuStockComponent_span_23_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SkuStockComponent_span_24_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SkuStockComponent_span_25_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SkuStockComponent_span_26_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SkuStockComponent_span_27_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, SkuStockComponent_span_28_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, SkuStockComponent_span_29_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, SkuStockComponent_span_30_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Min Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkuStockComponent_Template_button_click_38_listener() { return ctx.handleOrderMoreClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Order More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, SkuStockComponent_app_modal_40_Template, 43, 7, "app-modal", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("expanded", ctx.visuallyExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.skuStock.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.skuStock.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.skuStock.quantities.inStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.skuStock.quantities.onOrder, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skuStock.quantities.onOrder.toString().length === 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skuStock.quantities.onOrder.toString().length === 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skuStock.quantities.onOrder.toString().length === 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skuStock.quantities.onOrder.toString().length === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skuStock.quantities.onOrder.toString().length === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skuStock.quantities.onOrder.toString().length === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skuStock.quantities.onOrder.toString().length === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skuStock.quantities.onOrder.toString().length === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skuStock.quantities.onOrder.toString().length === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.skuStock.quantities.minimumOrderQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.detailsModalVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_module_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["@charset \"UTF-8\";\n@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n.sku-stock-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  background-color: #f2f2f2;\n  margin-bottom: 2px;\n  padding: 0.5em 3.6em 0.5em 0.5em;\n  transition: all 0.2s ease-in-out;\n  border: 1px solid transparent;\n  min-height: 5em;\n}\n@media (hover: hover) {\n  .sku-stock-row[_ngcontent-%COMP%]:hover, .sku-stock-row.expanded[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.0196);\n    border-color: #e0e0e0;\n  }\n}\n.sku-stock-row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n}\n.sku-stock-row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0.5em;\n  bottom: 0.5em;\n  background-color: #c7c7c7;\n  width: 1px;\n  margin-left: -1em;\n}\n.sku-stock-row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child:before {\n  content: none;\n}\n.sku-stock-row[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  width: 8em;\n  word-wrap: break-word;\n  line-height: 1;\n}\n.sku-stock-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  width: 40%;\n  word-wrap: break-word;\n  line-height: 1;\n  word-break: break-all;\n}\n.sku-stock-row[_ngcontent-%COMP%]   .stock-levels[_ngcontent-%COMP%] {\n  width: 11em;\n  font-size: 0.875em;\n}\n.sku-stock-row[_ngcontent-%COMP%]   .stock-levels[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-right: 0.5em;\n}\n.sku-stock-row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  width: 15em;\n  flex-grow: 1;\n}\n.sku-stock-row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.sku-stock-row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  padding: 0.75em;\n  white-space: normal;\n  text-decoration: none;\n}\n.sku-stock-row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.sku-stock-row[_ngcontent-%COMP%]   button.row-toggle.row-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  transition: all 0.2s ease-in-out;\n  background: rgba(0, 0, 0, 0.05);\n  padding: 1.3em 1em 1.4em 1em;\n}\n.sku-stock-row[_ngcontent-%COMP%]   button.row-toggle.row-toggle[_ngcontent-%COMP%]:before {\n  content: none;\n}\n.sku-stock-row[_ngcontent-%COMP%]   button.row-toggle.ellipsis[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #424244;\n  padding: 0.6em 0.2em 0.2em 0.2em;\n}\n.sku-stock-row[_ngcontent-%COMP%]   button.row-toggle.ellipsis[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%] {\n  background-color: black;\n}\n@media screen and (max-width: 768px) {\n  .sku-stock-row[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    padding-left: 0;\n  }\n  .sku-stock-row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding: 0.5em 0.4em;\n  }\n  .sku-stock-row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:before {\n    margin-left: -0.4em;\n  }\n  .sku-stock-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    padding: 0.5em;\n  }\n  .sku-stock-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sku-stock-row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    width: 40% em;\n  }\n  .sku-stock-row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   [tooltip-danger][_ngcontent-%COMP%]:before {\n    padding: 0.4em;\n    width: 10em;\n  }\n  .sku-stock-row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    padding: 0;\n  }\n}\napp-sku-stock:first-child[_nghost-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]:before, app-sku-stock:first-child   [_nghost-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]:before, app-sku-stock:last-child[_nghost-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]:not(.expanded):after, app-sku-stock:last-child   [_nghost-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]:not(.expanded):after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  top: 0;\n  height: 0.7rem;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0));\n  left: 0;\n}\napp-sku-stock:last-child[_nghost-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]:not(.expanded):after, app-sku-stock:last-child   [_nghost-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]:not(.expanded):after {\n  top: 100%;\n  transform: rotate(180deg) translateY(100%);\n}\n.sku-stock-row[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  transform: rotate(0) translateY(0em);\n}\n.sku-stock-row.expanded[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg) translateY(0.1em);\n}\n  .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n  text-align: left;\n  background-color: #f2f2f2;\n  height: 29.1rem;\n}\n  .order-stock-sku-modal.not-stockable .taro-modal.taro-modal.taro-modal {\n  background-color: white;\n}\n  .order-stock-sku-modal.not-stockable .taro-modal.taro-modal.taro-modal .generic-info {\n  box-shadow: none;\n}\napp-modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-left: 0 -1em 0;\n}\napp-modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0;\n}\napp-modal[_ngcontent-%COMP%]   .generic-info[_ngcontent-%COMP%] {\n  margin: -3rem;\n  margin-bottom: 0;\n  background-color: white;\n  padding: 3rem;\n  padding-bottom: 1rem !important;\n  box-shadow: 0px -2px 2px inset rgba(0, 0, 0, 0.13);\n}\napp-modal[_ngcontent-%COMP%]   .generic-info[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\napp-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-top: -0.5em 0 1.5em;\n  border-bottom: 1px solid #e5e5e5;\n}\napp-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-bottom: 0.5em;\n}\napp-modal[_ngcontent-%COMP%]   \u0326\u0326[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 700;\n}\napp-modal[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  text-transform: uppercase;\n  margin-bottom: 0.2em;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin-bottom: 1em;\n  font-weight: 600;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 1.5em 0 1.5em 1em;\n  text-align: center;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.75em;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  margin-bottom: 0em !important;\n  font-weight: 200;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  margin-top: 0.8em;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], app-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  margin-top: 0.6rem;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: #6A955B;\n  margin: 0 0 0 0.5em;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  border: 1px solid #bcbcbc;\n  border-width: 0 1px;\n}\n@media screen and (max-width: 768px) {\n  app-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n  }\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%] {\n  margin-top: 0.9em;\n  text-align: center;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  padding-right: 0.5em;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child   .form-control[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: white;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .notice-row[_ngcontent-%COMP%]    > .col-12[_ngcontent-%COMP%] {\n  background: #c8d5c3;\n  padding: 1em;\n  margin: 0.4em 0;\n  border-radius: 0.5em;\n  line-height: 1.4;\n}\n@media screen and (max-width: 768px) {\n  td[_ngcontent-%COMP%] {\n    display: none;\n  }\n  td[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]:nth-child(2), td[_ngcontent-%COMP%]:last-child {\n    display: table-cell;\n  }\n  td[_ngcontent-%COMP%]:nth-child(2):after {\n    display: none;\n  }\n\n  app-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%] {\n    margin-top: 2.5rem;\n  }\n  app-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    margin-top: 0.5em;\n  }\n  app-modal[_ngcontent-%COMP%]   .generic-info[_ngcontent-%COMP%] {\n    margin: -1.7em;\n    padding: 1.7em;\n  }\n}\n@media screen and (max-width: 800px) {\n  app-modal[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 0.9rem !important;\n  }\n}\n@media screen and (max-width: 360px) {\n  app-modal[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n  app-modal[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 0.7rem !important;\n  }\n}\n@media screen and (max-width: 360px) and (min-height: 640px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 17em);\n    max-height: calc(100% - 17em);\n  }\n}\n@media screen and (max-width: 412px) and (min-height: 732px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 23em);\n    max-height: calc(100% - 23em);\n  }\n}\n@media screen and (max-width: 412px) and (min-height: 896px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 35em);\n    max-height: calc(100% - 35em);\n  }\n}\n@media screen and (max-width: 360px) and (min-height: 740px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 24em);\n    max-height: calc(100% - 24em);\n  }\n}\n@media screen and (max-width: 768px) and (min-height: 1024px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 44em);\n    max-height: calc(100% - 44em);\n  }\n}\n@media screen and (min-width: 1440px) and (min-height: 900px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 32em);\n    max-height: calc(100% - 32em);\n  }\n}\n@media screen and (min-height: 1280px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 59.5em);\n    max-height: calc(100% - 59.5em);\n  }\n}\n.stock-levels[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  display: table-caption;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2t1LXN0b2NrLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcX2dsb2JhbHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAdGFyb3B1bXBzXFxib290c3RyYXBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNrQmhCO0VBQ0U7Ozs7SUFJRSx3QkFBQTtFRGhCRjs7RUNrQkE7SUFDRSxvQkFBQTtJQUNBLHNCQWJpQjtFREZuQjs7RUNpQkE7SUFDRSx5QkFBQTtJQUNBLDBCQUFBO0VEZEY7QUFDRjtBQWhCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDRFk7RURFWixrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFrQkY7QUFoQkU7RUFDRTtJQUVFLHVDQUFBO0lBQ0EscUJBQUE7RUFpQko7QUFDRjtBQWRFO0VBQ0Usa0JBQUE7QUFnQko7QUFkSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFnQk47QUFiSTtFQUNFLGFBQUE7QUFlTjtBQVhFO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQWFKO0FBWEU7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFhSjtBQVZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBWUo7QUFYSTtFQUNFLG9CQUFBO0FBYU47QUFURTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBV0o7QUFUSTtFQUNFLGtCQUFBO0FBV047QUFSSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBVU47QUFUTTtFQUNFLDBCQUFBO0FBV1I7QUFORTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBUUo7QUFOSTtFQUNFLGFBQUE7QUFRTjtBQUhJO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtBQUtOO0FBRkk7RUFDRSx1QkFBQTtBQUlOO0FBQUU7RUFwR0Y7SUFxR0ksbUJBQUE7SUFDQSxlQUFBO0VBR0Y7RUFERTtJQUNFLG9CQUFBO0VBR0o7RUFESTtJQUNFLG1CQUFBO0VBR047RUFDRTtJQUNFLGNBQUE7RUFDSjtFQUVFO0lBQ0UsYUFBQTtFQUFKO0VBR0U7SUFDRSxhQUFBO0VBREo7RUFHSTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBRE47RUFLRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQUhKO0FBQ0Y7QUFPQTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLG1GQUFBO0VBS0EsT0FBQTtBQVJGO0FBV0E7RUFDRSxTQUFBO0VBQ0EsMENBQUE7QUFSRjtBQVlFO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtBQVRKO0FBWUU7RUFDRSwyQ0FBQTtBQVZKO0FBZ0JBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFiRjtBQWdCQTtFQUdFLHVCQUFBO0FBZkY7QUFpQkU7RUFDRSxnQkFBQTtBQWZKO0FBb0JFO0VBQ0UscUJBQUE7QUFqQko7QUFtQkk7RUFDRSxVQUFBO0FBakJOO0FBcUJFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQS9CWTtFQWdDWiwrQkFBQTtFQUNBLGtEQUFBO0FBbkJKO0FBb0JJO0VBQ0UsNEJBQUE7QUFsQk47QUFzQkU7RUFDRSwwQkFBQTtFQUNBLGdDQUFBO0FBcEJKO0FBc0JJO0VBQ0UscUJBQUE7QUFwQk47QUF3QkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUF0Qko7QUEwQkk7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUF4Qk47QUE0QkU7RUFDRSxrQkFBQTtBQTFCSjtBQTRCSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTFCTjtBQTZCSTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQTNCTjtBQTZCUTtFQUNFLGdCQUFBO0FBM0JWO0FBNkJVO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQTNCWjtBQThCVTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQTVCWjtBQWdDTTtFQUNFLGlCQUFBO0FBOUJSO0FBK0JRO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUE3QlY7QUFnQ1E7O0VBRUUscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQTlCVjtBQWlDUTtFQUNFLGNFbFJGO0VGbVJFLG1CQUFBO0FBL0JWO0FBbUNNO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQWpDUjtBQW9DTTtFQS9DRjtJQWdESSwwQkFBQTtFQWpDTjtBQUNGO0FBcUNJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQW5DTjtBQW9DTTtFQUNFLFdBQUE7QUFsQ1I7QUFxQ007RUFDRSxvQkFBQTtBQW5DUjtBQXFDUTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUFuQ1Y7QUF3Q0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQXRDTjtBQTBDQTtFQUNFO0lBQ0UsYUFBQTtFQXZDRjtFQXlDRTtJQUdFLG1CQUFBO0VBekNKO0VBNENFO0lBQ0UsYUFBQTtFQTFDSjs7RUE4Q0U7SUFDRSxrQkFBQTtFQTNDSjtFQThDRTtJQUNFLGlCQUFBO0VBNUNKO0VBK0NFO0lBQ0UsY0FBQTtJQUNBLGNBQUE7RUE3Q0o7QUFDRjtBQWtEQTtFQUdNO0lBQ0UsMEJBQUE7RUFsRE47QUFDRjtBQXVEQTtFQUdNO0lBQ0UsZ0JBQUE7RUF2RE47RUF5REk7SUFDRSwwQkFBQTtFQXZETjtBQUNGO0FBOERBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLDZCQUFBO0VBNURGO0FBQ0Y7QUErREE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsNkJBQUE7RUE3REY7QUFDRjtBQWdFQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSw2QkFBQTtFQTlERjtBQUNGO0FBaUVBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLDZCQUFBO0VBL0RGO0FBQ0Y7QUFrRUE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsNkJBQUE7RUFoRUY7QUFDRjtBQW1FQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSw2QkFBQTtFQWpFRjtBQUNGO0FBb0VBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLCtCQUFBO0VBbEVGO0FBQ0Y7QUF1RUk7RUFDRSxzQkFBQTtBQXJFTiIsImZpbGUiOiJza3Utc3RvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AbWVkaWEgcHJpbnQge1xuICAuYXBwLWhlYWRlcixcbi5mdW5jdGlvbi1iYXIsXG5hcHAtc2VjdGlvbi1oZWFkZXIsXG4ubWVkaWEtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFwcC1jb250ZW50LWFyZWEge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAubWVkaWEtcHJpbnQge1xuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5za3Utc3RvY2stcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHBhZGRpbmc6IDAuNWVtIDMuNmVtIDAuNWVtIDAuNWVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG1pbi1oZWlnaHQ6IDVlbTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gIC5za3Utc3RvY2stcm93OmhvdmVyLCAuc2t1LXN0b2NrLXJvdy5leHBhbmRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAxOTYpO1xuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiAgfVxufVxuLnNrdS1zdG9jay1yb3cgPiAqIHtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xufVxuLnNrdS1zdG9jay1yb3cgPiAqOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjVlbTtcbiAgYm90dG9tOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzdjNztcbiAgd2lkdGg6IDFweDtcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XG59XG4uc2t1LXN0b2NrLXJvdyA+ICo6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgY29udGVudDogbm9uZTtcbn1cbi5za3Utc3RvY2stcm93IC5pZCB7XG4gIHdpZHRoOiA4ZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uc2t1LXN0b2NrLXJvdyAubmFtZSB7XG4gIHdpZHRoOiA0MCU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5za3Utc3RvY2stcm93IC5zdG9jay1sZXZlbHMge1xuICB3aWR0aDogMTFlbTtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xufVxuLnNrdS1zdG9jay1yb3cgLnN0b2NrLWxldmVscyB0aCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xufVxuLnNrdS1zdG9jay1yb3cgLmFjdGlvbnMge1xuICB3aWR0aDogMTVlbTtcbiAgZmxleC1ncm93OiAxO1xufVxuLnNrdS1zdG9jay1yb3cgLmFjdGlvbnMgPiBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2t1LXN0b2NrLXJvdyAuYWN0aW9ucyAuYnRuLWxpbmsge1xuICBwYWRkaW5nOiAwLjc1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5za3Utc3RvY2stcm93IC5hY3Rpb25zIC5idG4tbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnNrdS1zdG9jay1yb3cgYnV0dG9uLnJvdy10b2dnbGUucm93LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgcGFkZGluZzogMS4zZW0gMWVtIDEuNGVtIDFlbTtcbn1cbi5za3Utc3RvY2stcm93IGJ1dHRvbi5yb3ctdG9nZ2xlLnJvdy10b2dnbGU6YmVmb3JlIHtcbiAgY29udGVudDogbm9uZTtcbn1cbi5za3Utc3RvY2stcm93IGJ1dHRvbi5yb3ctdG9nZ2xlLmVsbGlwc2lzID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0NDtcbiAgcGFkZGluZzogMC42ZW0gMC4yZW0gMC4yZW0gMC4yZW07XG59XG4uc2t1LXN0b2NrLXJvdyBidXR0b24ucm93LXRvZ2dsZS5lbGxpcHNpczpob3ZlciA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNrdS1zdG9jay1yb3cge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIC5za3Utc3RvY2stcm93ID4gKiB7XG4gICAgcGFkZGluZzogMC41ZW0gMC40ZW07XG4gIH1cbiAgLnNrdS1zdG9jay1yb3cgPiAqOmJlZm9yZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjRlbTtcbiAgfVxuICAuc2t1LXN0b2NrLXJvdyA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZzogMC41ZW07XG4gIH1cbiAgLnNrdS1zdG9jay1yb3cgLm5hbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnNrdS1zdG9jay1yb3cgLmFjdGlvbnMge1xuICAgIHdpZHRoOiA0MCUgZW07XG4gIH1cbiAgLnNrdS1zdG9jay1yb3cgLmFjdGlvbnMgW3Rvb2x0aXAtZGFuZ2VyXTpiZWZvcmUge1xuICAgIHBhZGRpbmc6IDAuNGVtO1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG4gIC5za3Utc3RvY2stcm93IC5hY3Rpb25zIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG46aG9zdC1jb250ZXh0KGFwcC1za3Utc3RvY2s6Zmlyc3QtY2hpbGQpIC5za3Utc3RvY2stcm93OmJlZm9yZSxcbjpob3N0LWNvbnRleHQoYXBwLXNrdS1zdG9jazpsYXN0LWNoaWxkKSAuc2t1LXN0b2NrLXJvdzpub3QoLmV4cGFuZGVkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMC43cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuMTEpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgbGVmdDogMDtcbn1cblxuOmhvc3QtY29udGV4dChhcHAtc2t1LXN0b2NrOmxhc3QtY2hpbGQpIC5za3Utc3RvY2stcm93Om5vdCguZXhwYW5kZWQpOmFmdGVyIHtcbiAgdG9wOiAxMDAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZVkoMTAwJSk7XG59XG5cbi5za3Utc3RvY2stcm93IHN2ZyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKSB0cmFuc2xhdGVZKDBlbSk7XG59XG4uc2t1LXN0b2NrLXJvdy5leHBhbmRlZCBzdmcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZVkoMC4xZW0pO1xufVxuXG46Om5nLWRlZXAgLm9yZGVyLXN0b2NrLXNrdS1tb2RhbCAudGFyby1tb2RhbC50YXJvLW1vZGFsLnRhcm8tbW9kYWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBoZWlnaHQ6IDI5LjFyZW07XG59XG5cbjo6bmctZGVlcCAub3JkZXItc3RvY2stc2t1LW1vZGFsLm5vdC1zdG9ja2FibGUgLnRhcm8tbW9kYWwudGFyby1tb2RhbC50YXJvLW1vZGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgLm9yZGVyLXN0b2NrLXNrdS1tb2RhbC5ub3Qtc3RvY2thYmxlIC50YXJvLW1vZGFsLnRhcm8tbW9kYWwudGFyby1tb2RhbCAuZ2VuZXJpYy1pbmZvIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuYXBwLW1vZGFsIC5yb3cge1xuICBtYXJnaW4tbGVmdDogMCAtMWVtIDA7XG59XG5hcHAtbW9kYWwgLnJvdyA+IGRpdiB7XG4gIHBhZGRpbmc6IDA7XG59XG5hcHAtbW9kYWwgLmdlbmVyaWMtaW5mbyB7XG4gIG1hcmdpbjogLTNyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwcHggLTJweCAycHggaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjEzKTtcbn1cbmFwcC1tb2RhbCAuZ2VuZXJpYy1pbmZvIC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cbmFwcC1tb2RhbCBoZWFkZXIge1xuICBtYXJnaW4tdG9wOiAtMC41ZW0gMCAxLjVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG59XG5hcHAtbW9kYWwgaGVhZGVyID4gZGl2IHtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xufVxuYXBwLW1vZGFsIMymzKYgaDEge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmFwcC1tb2RhbCAuZGVzY3JpcHRpb24tcm93IGR0IHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xufVxuYXBwLW1vZGFsIC5zdG9jay1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuYXBwLW1vZGFsIC5zdG9jay1pbmZvIGgyIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuYXBwLW1vZGFsIC5zdG9jay1pbmZvIC5pbmZvLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxLjVlbSAwIDEuNWVtIDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYXBwLW1vZGFsIC5zdG9jay1pbmZvIC5pbmZvLXJvdyBkbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5hcHAtbW9kYWwgLnN0b2NrLWluZm8gLmluZm8tcm93IGRsIGR0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5hcHAtbW9kYWwgLnN0b2NrLWluZm8gLmluZm8tcm93IGRsIGRkIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbWFyZ2luLWJvdHRvbTogMGVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5hcHAtbW9kYWwgLnN0b2NrLWluZm8gLmluZm8tcm93IC5jb2wtMTIge1xuICBtYXJnaW4tdG9wOiAwLjhlbTtcbn1cbmFwcC1tb2RhbCAuc3RvY2staW5mbyAuaW5mby1yb3cgLmNvbC0xMiBkbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbmFwcC1tb2RhbCAuc3RvY2staW5mbyAuaW5mby1yb3cgLmNvbC0xMiBkZCxcbmFwcC1tb2RhbCAuc3RvY2staW5mbyAuaW5mby1yb3cgLmNvbC0xMiBkdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAwLjZyZW07XG59XG5hcHAtbW9kYWwgLnN0b2NrLWluZm8gLmluZm8tcm93IC5jb2wtMTIgZGQge1xuICBjb2xvcjogIzZBOTU1QjtcbiAgbWFyZ2luOiAwIDAgMCAwLjVlbTtcbn1cbmFwcC1tb2RhbCAuc3RvY2staW5mbyAuaW5mby1yb3cgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JjYmNiYztcbiAgYm9yZGVyLXdpZHRoOiAwIDFweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGFwcC1tb2RhbCAuc3RvY2staW5mbyAuaW5mby1yb3cge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG59XG5hcHAtbW9kYWwgLnN0b2NrLWluZm8gLmFkZC10by1iYXNrZXQtcm93IHtcbiAgbWFyZ2luLXRvcDogMC45ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmFwcC1tb2RhbCAuc3RvY2staW5mbyAuYWRkLXRvLWJhc2tldC1yb3cgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5hcHAtbW9kYWwgLnN0b2NrLWluZm8gLmFkZC10by1iYXNrZXQtcm93ID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMC41ZW07XG59XG5hcHAtbW9kYWwgLnN0b2NrLWluZm8gLmFkZC10by1iYXNrZXQtcm93ID4gZGl2OmZpcnN0LWNoaWxkIC5mb3JtLWNvbnRyb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuYXBwLW1vZGFsIC5zdG9jay1pbmZvIC5ub3RpY2Utcm93ID4gLmNvbC0xMiB7XG4gIGJhY2tncm91bmQ6ICNjOGQ1YzM7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAwLjRlbSAwO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgdGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgdGQ6Zmlyc3QtY2hpbGQsIHRkOm50aC1jaGlsZCgyKSwgdGQ6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgfVxuICB0ZDpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBhcHAtbW9kYWwgLnN0b2NrLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgfVxuICBhcHAtbW9kYWwgaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgfVxuICBhcHAtbW9kYWwgLmdlbmVyaWMtaW5mbyB7XG4gICAgbWFyZ2luOiAtMS43ZW07XG4gICAgcGFkZGluZzogMS43ZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIGFwcC1tb2RhbCAuYWRkLXRvLWJhc2tldC1yb3cgaW5wdXQge1xuICAgIHBhZGRpbmc6IDAuOXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICBhcHAtbW9kYWwgLmFkZC10by1iYXNrZXQtcm93IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICBhcHAtbW9kYWwgLmFkZC10by1iYXNrZXQtcm93IGlucHV0IHtcbiAgICBwYWRkaW5nOiAwLjdyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIGFuZCAobWluLWhlaWdodDogNjQwcHgpIHtcbiAgOjpuZy1kZWVwIC5vcmRlci1zdG9jay1za3UtbW9kYWwgLnRhcm8tbW9kYWwudGFyby1tb2RhbC50YXJvLW1vZGFsIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE3ZW0pO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDE3ZW0pO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTJweCkgYW5kIChtaW4taGVpZ2h0OiA3MzJweCkge1xuICA6Om5nLWRlZXAgLm9yZGVyLXN0b2NrLXNrdS1tb2RhbCAudGFyby1tb2RhbC50YXJvLW1vZGFsLnRhcm8tbW9kYWwge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjNlbSk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjNlbSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDg5NnB4KSB7XG4gIDo6bmctZGVlcCAub3JkZXItc3RvY2stc2t1LW1vZGFsIC50YXJvLW1vZGFsLnRhcm8tbW9kYWwudGFyby1tb2RhbCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNWVtKTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNWVtKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIGFuZCAobWluLWhlaWdodDogNzQwcHgpIHtcbiAgOjpuZy1kZWVwIC5vcmRlci1zdG9jay1za3UtbW9kYWwgLnRhcm8tbW9kYWwudGFyby1tb2RhbC50YXJvLW1vZGFsIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI0ZW0pO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDI0ZW0pO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChtaW4taGVpZ2h0OiAxMDI0cHgpIHtcbiAgOjpuZy1kZWVwIC5vcmRlci1zdG9jay1za3UtbW9kYWwgLnRhcm8tbW9kYWwudGFyby1tb2RhbC50YXJvLW1vZGFsIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0ZW0pO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0ZW0pO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIGFuZCAobWluLWhlaWdodDogOTAwcHgpIHtcbiAgOjpuZy1kZWVwIC5vcmRlci1zdG9jay1za3UtbW9kYWwgLnRhcm8tbW9kYWwudGFyby1tb2RhbC50YXJvLW1vZGFsIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMyZW0pO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMyZW0pO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMTI4MHB4KSB7XG4gIDo6bmctZGVlcCAub3JkZXItc3RvY2stc2t1LW1vZGFsIC50YXJvLW1vZGFsLnRhcm8tbW9kYWwudGFyby1tb2RhbCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1OS41ZW0pO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDU5LjVlbSk7XG4gIH1cbn1cbi5zdG9jay1sZXZlbHMgPiB0YWJsZSA+IHRyIHtcbiAgZGlzcGxheTogdGFibGUtY2FwdGlvbjtcbn0iLCJAaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL0B0YXJvcHVtcHMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4kbmF2LWdyZXk6ICNlMmUyZTI7XHJcbiRzZWFyY2gtZ3JleTogI2YyZjJmMjtcclxuJGhlYWRlci1wYWRkaW5nOiAyLjVyZW07XHJcbiRoZWFkZXItcGFkZGluZy1zbTogMXJlbTtcclxuJGJhc2UtbmF2LXdpZHRoOiA3LjllbTtcclxuJGV4cGFuZGVkLW5hdi13aWR0aDogMjBlbTtcclxuJGhlYWRlci1oZWlnaHQ6IDEyLjRyZW07XHJcbiRtZW51LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nOiAxcmVtIDMuM3JlbTtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZy1zbTogMXJlbSAxLjdyZW07XHJcbiRjb250ZW50LWFyZWEtY29sb3I6ICNmZmY7XHJcbiR3YXJuaW5nOiAjRUEwMDI5O1xyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLmFwcC1oZWFkZXIsXHJcbiAgLmZ1bmN0aW9uLWJhcixcclxuICBhcHAtc2VjdGlvbi1oZWFkZXIsXHJcbiAgLm1lZGlhLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYXBwLWNvbnRlbnQtYXJlYSB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250ZW50LWFyZWEtY29sb3I7XHJcbiAgfVxyXG4gIC5tZWRpYS1wcmludCB7XHJcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIktvaGlub29yXCIsIFwiT3BlbiBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIFwiR2lsbCBTYW5zXCIsIENvcmJlbCwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRib2R5LWNvbG9yOiAjNDI0MjQ0ICFkZWZhdWx0O1xuJGdyZWVuOiAjNkE5NTVCICFkZWZhdWx0O1xuJGdyZWVuLWZhZGVkOiAjRDFERUNEO1xuJHJlZDogI0ZGNDIyRSAhZGVmYXVsdDtcbiRyZWQtbGlnaHQ6ICNGRkQ5RDUgIWRlZmF1bHQ7XG4kcmVkLWRhcms6ICM5OTQ0NEYgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiA2cHg7XG5cbiRwcmltYXJ5OiAkZ3JlZW47XG5cbiRhbGVydC1ib3JkZXItd2lkdGg6IDA7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogNnB4O1xuJGFsZXJ0LXBhZGRpbmcteDogMS41cmVtO1xuJGFsZXJ0LXBhZGRpbmcteTogMS4ycmVtO1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogIC43NXJlbTtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAzLjc1cmVtO1xuXG4kdG9hc3Qtei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiR0b2FzdC1kdXJhdGlvbjogMzAwMG1zICFkZWZhdWx0O1xuJHRvYXN0LWhlaWdodDogOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1oZWlnaHQtc206IDUuOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1icmVha3BvaW50OiA3NjhweCAhZGVmYXVsdDsiXX0= */"] });


/***/ }),

/***/ "AgS2":
/*!**************************************************************************!*\
  !*** ./src/app/spares/stock-list/spares-group/spares-group.component.ts ***!
  \**************************************************************************/
/*! exports provided: SparesGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparesGroupComponent", function() { return SparesGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "o0su");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sku_stock_sku_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sku-stock/sku-stock.component */ "7Zk8");






function SparesGroupComponent_app_sku_stock_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sku-stock", 10);
} if (rf & 2) {
    const skuStock_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skuStock", skuStock_r4);
} }
function SparesGroupComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SparesGroupComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.getNextSkuStocks(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SparesGroupComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} }
function SparesGroupComponent_i_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You may see more results by changing or removing your search query.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SparesGroupComponent_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SparesGroupComponent_i_13_span_2_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" All stocks in the '", ctx_r3.sparesGroup.name, "' group have been loaded. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.textFilter);
} }
class SparesGroupComponent {
    constructor(skuService, elementRef) {
        this.skuService = skuService;
        this.elementRef = elementRef;
        this.skuStocks = [];
        this.visuallyExpanded = false;
        this.offset = 0;
        this.takeSize = 10;
        this.shouldGetNextSkuStocks = true;
        this.isGettingNextSkuStocks = false;
    }
    ngOnInit() { }
    handleRowToggleClick() {
        if (this.skuStocks.length === 0 && !this.isGettingNextSkuStocks) {
            this.getNextSkuStocks();
        }
        this.visuallyExpanded = !this.visuallyExpanded;
        this.setMaxHeight();
    }
    getNextSkuStocks() {
        this.isGettingNextSkuStocks = true;
        this.skuService
            .getSkuStockForSparesGroup(this.sparesGroup.groupId, this.sparesGroup.subGroupId, this.takeSize, this.offset, this.siteId, this.textFilter)
            .subscribe((skus) => {
            this.skuStocks.push(...skus);
            this.offset += this.takeSize;
            if (skus.length < this.takeSize) {
                this.shouldGetNextSkuStocks = false;
            }
            this.isGettingNextSkuStocks = false;
            this.handleSkuStockHeightChanged();
        });
    }
    handleSkuStockHeightChanged() {
        setTimeout(() => this.setMaxHeight(), 200);
    }
    setMaxHeight() {
        const children = this.elementRef.nativeElement.children[1].children;
        let totalHeight = 0;
        for (const child of children) {
            totalHeight += child.getBoundingClientRect().height;
        }
        this.maxHeight = totalHeight + 'px';
    }
}
SparesGroupComponent.ɵfac = function SparesGroupComponent_Factory(t) { return new (t || SparesGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["SkuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SparesGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SparesGroupComponent, selectors: [["app-spares-group"]], inputs: { sparesGroup: "sparesGroup", textFilter: "textFilter", siteId: "siteId" }, decls: 14, vars: 11, consts: [[1, "group-toggle"], [1, "row-toggle", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 8.797 5.194"], ["d", "M8,0l.8.8-4.4,4.4Q2.2,3,0,.8L.8,0C.81-.014,4.394,3.625,4.394,3.625S8.006,0,8,0Z"], [1, "sku-stocks"], [3, "skuStock", 4, "ngFor", "ngForOf"], [1, "load-more-container"], ["class", "btn btn-link", 3, "click", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], [4, "ngIf"], [3, "skuStock"], [1, "btn", "btn-link", 3, "click"], [1, "spinner"]], template: function SparesGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SparesGroupComponent_Template_button_click_3_listener() { return ctx.handleRowToggleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SparesGroupComponent_app_sku_stock_9_Template, 1, 1, "app-sku-stock", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SparesGroupComponent_button_11_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SparesGroupComponent_div_12_Template, 1, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SparesGroupComponent_i_13_Template, 3, 2, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", ctx.visuallyExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sparesGroup.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx.maxHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", ctx.visuallyExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skuStocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldGetNextSkuStocks && !ctx.isGettingNextSkuStocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGettingNextSkuStocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.shouldGetNextSkuStocks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _sku_stock_sku_stock_component__WEBPACK_IMPORTED_MODULE_3__["SkuStockComponent"]], styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n[_nghost-%COMP%] {\n  position: relative;\n}\n.group-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #E5E5E5;\n  padding: 1.5em 2em;\n  margin-bottom: 2px;\n  display: block;\n  width: 100%;\n  border: none;\n  text-align: left;\n  border: 1px solid transparent;\n  transition: all 0.2s ease-in-out;\n}\n@media (hover: hover) {\n  .group-toggle[_ngcontent-%COMP%]:hover, .group-toggle.expanded[_ngcontent-%COMP%] {\n    background-color: #efefef;\n    border-color: #e3e3e3;\n  }\n}\n.group-toggle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.125em;\n  margin-bottom: 0;\n  font-weight: 400;\n}\n.group-toggle[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 1.3em 1em 1.4em 1em;\n  top: 0;\n  right: 0;\n  transition: all 0.2s ease-in-out;\n  background: rgba(0, 0, 0, 0.05);\n}\n.group-toggle[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.group-toggle[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #f3f3f3;\n  transition: all 0.2s ease-in-out;\n}\n.group-toggle[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  transform: rotate(0) translateY(0em);\n}\n.group-toggle.expanded[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg) translateY(0.1em);\n}\n[_nghost-%COMP%]:first-child   .sku-stocks.expanded[_ngcontent-%COMP%] {\n  margin-top: -2px;\n}\n.sku-stocks[_ngcontent-%COMP%] {\n  position: relative;\n  margin: -2px 0.4em 2px 0.4em;\n  max-height: 8rem;\n  overflow: hidden;\n  transition: all 0.2s ease-in-out;\n}\n.sku-stocks[_ngcontent-%COMP%]:not(.expanded) {\n  max-height: 0 !important;\n  margin: 0;\n}\n.sku-stocks[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sku-stocks[_ngcontent-%COMP%]   .load-more-container[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #f2f2f2;\n  padding: 1.2em;\n}\n.sku-stocks[_ngcontent-%COMP%]   .load-more-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin: 0 auto;\n}\n.sku-stocks[_ngcontent-%COMP%]   .load-more-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.sku-stocks[_ngcontent-%COMP%]   .load-more-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875em;\n  font-style: italic;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXF9nbG9iYWx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3BhcmVzLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFOzs7O0lBSUUsd0JBQUE7RUNqQkY7O0VEbUJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFiaUI7RUNIbkI7O0VEa0JBO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQ2ZGO0FBQ0Y7QUFmQTtFQUNFLGtCQUFBO0FBaUJGO0FBZEE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQWlCRjtBQWZFO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLHFCQUFBO0VBaUJKO0FBQ0Y7QUFkRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWdCSjtBQWJFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQWVKO0FBYkk7RUFDRSw4QkFBQTtBQWVOO0FBWkk7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0FBY047QUFYSTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7QUFhTjtBQVRFO0VBQ0UsMkNBQUE7QUFXSjtBQVBBO0VBQ0UsZ0JBQUE7QUFVRjtBQVBBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQ0FBQTtBQVNGO0FBWEU7RUFBbUIsd0JBQUE7RUFBMEIsU0FBQTtBQWUvQztBQVhFO0VBQ0Usa0JBQUE7QUFhSjtBQVZFO0VBRUUsa0JBQUE7RUFDQSx5QkR6RVU7RUMwRVYsY0FBQTtBQVdKO0FBVEk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFXTjtBQVJJO0VBQ0UsVUFBQTtBQVVOO0FBUEk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVNOIiwiZmlsZSI6InNwYXJlcy1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvQHRhcm9wdW1wcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbiRuYXYtZ3JleTogI2UyZTJlMjtcclxuJHNlYXJjaC1ncmV5OiAjZjJmMmYyO1xyXG4kaGVhZGVyLXBhZGRpbmc6IDIuNXJlbTtcclxuJGhlYWRlci1wYWRkaW5nLXNtOiAxcmVtO1xyXG4kYmFzZS1uYXYtd2lkdGg6IDcuOWVtO1xyXG4kZXhwYW5kZWQtbmF2LXdpZHRoOiAyMGVtO1xyXG4kaGVhZGVyLWhlaWdodDogMTIuNHJlbTtcclxuJG1lbnUtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmc6IDFyZW0gMy4zcmVtO1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nLXNtOiAxcmVtIDEuN3JlbTtcclxuJGNvbnRlbnQtYXJlYS1jb2xvcjogI2ZmZjtcclxuJHdhcm5pbmc6ICNFQTAwMjk7XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAuYXBwLWhlYWRlcixcclxuICAuZnVuY3Rpb24tYmFyLFxyXG4gIGFwcC1zZWN0aW9uLWhlYWRlcixcclxuICAubWVkaWEtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hcHAtY29udGVudC1hcmVhIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRlbnQtYXJlYS1jb2xvcjtcclxuICB9XHJcbiAgLm1lZGlhLXByaW50IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIHByaW50IHtcbiAgLmFwcC1oZWFkZXIsXG4uZnVuY3Rpb24tYmFyLFxuYXBwLXNlY3Rpb24taGVhZGVyLFxuLm1lZGlhLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcHAtY29udGVudC1hcmVhIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLm1lZGlhLXByaW50IHtcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdyb3VwLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgcGFkZGluZzogMS41ZW0gMmVtO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAuZ3JvdXAtdG9nZ2xlOmhvdmVyLCAuZ3JvdXAtdG9nZ2xlLmV4cGFuZGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgIGJvcmRlci1jb2xvcjogI2UzZTNlMztcbiAgfVxufVxuLmdyb3VwLXRvZ2dsZSBoMiB7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5ncm91cC10b2dnbGUgLnJvdy10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEuM2VtIDFlbSAxLjRlbSAxZW07XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmdyb3VwLXRvZ2dsZSAucm93LXRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5ncm91cC10b2dnbGUgLnJvdy10b2dnbGUgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5ncm91cC10b2dnbGUgLnJvdy10b2dnbGUgc3ZnIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApIHRyYW5zbGF0ZVkoMGVtKTtcbn1cbi5ncm91cC10b2dnbGUuZXhwYW5kZWQgLnJvdy10b2dnbGUgc3ZnIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGVZKDAuMWVtKTtcbn1cblxuOmhvc3Q6Zmlyc3QtY2hpbGQgLnNrdS1zdG9ja3MuZXhwYW5kZWQge1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4uc2t1LXN0b2NrcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAtMnB4IDAuNGVtIDJweCAwLjRlbTtcbiAgbWF4LWhlaWdodDogOHJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uc2t1LXN0b2Nrczpub3QoLmV4cGFuZGVkKSB7XG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xufVxuLnNrdS1zdG9ja3MgPiBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2t1LXN0b2NrcyAubG9hZC1tb3JlLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogMS4yZW07XG59XG4uc2t1LXN0b2NrcyAubG9hZC1tb3JlLWNvbnRhaW5lciAuc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNrdS1zdG9ja3MgLmxvYWQtbW9yZS1jb250YWluZXIgLmJ0biB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2t1LXN0b2NrcyAubG9hZC1tb3JlLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjOTk5O1xufSJdfQ== */"] });


/***/ }),

/***/ "BUSm":
/*!*****************************************************************!*\
  !*** ./src/app/spares/order-history/order-history.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared-module/section-header/section-header.component */ "OeDX");


class OrderHistoryComponent {
    constructor() { }
    ngOnInit() { }
}
OrderHistoryComponent.ɵfac = function OrderHistoryComponent_Factory(t) { return new (t || OrderHistoryComponent)(); };
OrderHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderHistoryComponent, selectors: [["app-order-history"]], decls: 1, vars: 0, template: function OrderHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-section-header");
    } }, directives: [_shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_1__["SectionHeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ELTV":
/*!*************************************************!*\
  !*** ./src/app/spares/spares-routing.module.ts ***!
  \*************************************************/
/*! exports provided: stockListRequiredPermissions, basketRequiredPermissions, orderViewRequiredPermissions, routes, SparesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockListRequiredPermissions", function() { return stockListRequiredPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basketRequiredPermissions", function() { return basketRequiredPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderViewRequiredPermissions", function() { return orderViewRequiredPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparesRoutingModule", function() { return SparesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_permission_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/permission.guard */ "RGSW");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "o0su");
/* harmony import */ var _shared_module_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-module/landing-page/landing-page.component */ "6GVx");
/* harmony import */ var _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock-list/stock-list.component */ "mwoA");
/* harmony import */ var _order_basket_order_basket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-basket/order-basket.component */ "4XD7");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-history/order-history.component */ "BUSm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const stockListRequiredPermissions = {
    [_services__WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].Spares]: [_services__WEBPACK_IMPORTED_MODULE_2__["SparesPermissions"].CanViewStockList]
};
const basketRequiredPermissions = {
    [_services__WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].Spares]: [_services__WEBPACK_IMPORTED_MODULE_2__["SparesPermissions"].CanAddToBasket]
};
const orderViewRequiredPermissions = {
    [_services__WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].Spares]: [_services__WEBPACK_IMPORTED_MODULE_2__["SparesPermissions"].CanViewOrderHistory]
};
const routes = [
    {
        path: 'stock-list',
        component: _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_4__["StockListComponent"],
        canActivate: [_guards_permission_guard__WEBPACK_IMPORTED_MODULE_1__["PermissionGuard"]],
        data: {
            permissionsRequired: stockListRequiredPermissions
        }
    },
    {
        path: '',
        component: _shared_module_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
    },
    {
        path: 'order-basket',
        component: _order_basket_order_basket_component__WEBPACK_IMPORTED_MODULE_5__["OrderBasketComponent"],
        canActivate: [_guards_permission_guard__WEBPACK_IMPORTED_MODULE_1__["PermissionGuard"]],
        data: {
            permissionsRequired: basketRequiredPermissions
        }
    },
    {
        path: 'order-history',
        component: _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryComponent"],
        canActivate: [_guards_permission_guard__WEBPACK_IMPORTED_MODULE_1__["PermissionGuard"]],
        data: {
            permissionsRequired: orderViewRequiredPermissions
        }
    }
];
class SparesRoutingModule {
}
SparesRoutingModule.ɵfac = function SparesRoutingModule_Factory(t) { return new (t || SparesRoutingModule)(); };
SparesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SparesRoutingModule });
SparesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SparesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "KWTU":
/*!*************************************************!*\
  !*** ./src/app/services/order/order.service.ts ***!
  \*************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/authentication.service */ "ri4K");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class OrderService {
    constructor(authenticationService, httpClient) {
        this.authenticationService = authenticationService;
        this.httpClient = httpClient;
        this.orderUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiBaseUrl}/purchase-request`;
    }
    get currentUserProfile() {
        return this.authenticationService.currentUserProfile$.getValue();
    }
    requestOrder(basket, organisationId) {
        const items = basket.items.map(item => ({
            skuId: item.skuId,
            skuDescription: item.skuDescription,
            requestedByUserId: item.createdByUserId,
            requestedByUserName: item.createdByUserName,
            uom: item.uom,
            qty: item.qty
        }));
        let orderLink = this.orderUrl.concat('?organisationUnitId=', organisationId);
        const payload = {
            items,
            siteId: this.currentUserProfile.primarySite.id,
            approvedByUserId: this.currentUserProfile.userId,
            approvedByUserName: this.currentUserProfile.name,
            approvedByEmailId: this.currentUserProfile.emailAddress
        };
        return this.httpClient.post(orderLink, payload);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XZqO":
/*!**********************************!*\
  !*** ./src/utils/numberUtils.ts ***!
  \**********************************/
/*! exports provided: commaSeperatedNumberString, numberToPriceString, numberToPriceStringNoGlyph, randomInt, numberToWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commaSeperatedNumberString", function() { return commaSeperatedNumberString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToPriceString", function() { return numberToPriceString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToPriceStringNoGlyph", function() { return numberToPriceStringNoGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToWords", function() { return numberToWords; });
function commaSeperatedNumberString(number) {
    let numberString = number.toFixed(2).toString();
    let lastThreeAndDecimalValues = numberString.substring(numberString.length - 6);
    const otherNumbers = numberString.substring(0, numberString.length - 6);
    if (otherNumbers !== '') {
        lastThreeAndDecimalValues = ',' + lastThreeAndDecimalValues;
    }
    numberString = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThreeAndDecimalValues;
    return numberString;
}
function numberToPriceString(price, currencyGlyph = '₹', dropThePennies = false) {
    if (!price) {
        return '₹0.00';
    }
    let prefix = currencyGlyph;
    if (price < 0) {
        price = price * -1;
        prefix = `- ${currencyGlyph}`;
    }
    let priceString = commaSeperatedNumberString(price);
    if (dropThePennies && Math.floor(price) !== price) {
        priceString = priceString.substring(0, priceString.length - 3);
    }
    return prefix + priceString;
}
function numberToPriceStringNoGlyph(price, currencyGlyph = 'Rs', dropThePennies = false) {
    if (!price) {
        return '₹0.00';
    }
    let prefix = currencyGlyph;
    if (price < 0) {
        price = price * -1;
        prefix = `- ${currencyGlyph}`;
    }
    let priceString = commaSeperatedNumberString(price);
    if (dropThePennies && Math.floor(price) !== price) {
        priceString = priceString.substring(0, priceString.length - 3);
    }
    return prefix + ' ' + priceString;
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function numberToWords(value, dropThePennies = false) {
    if (dropThePennies && Math.floor(value) !== value) {
        const priceString = value.toFixed(2).toString();
        value = priceString.substring(0, priceString.length - 3);
    }
    const units = [
        '',
        'one ',
        'two ',
        'three ',
        'four ',
        'five ',
        'six ',
        'seven ',
        'eight ',
        'nine ',
        'ten ',
        'eleven ',
        'twelve ',
        'thirteen ',
        'fourteen ',
        'fifteen ',
        'sixteen ',
        'seventeen ',
        'eighteen ',
        'nineteen '
    ];
    const tens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];
    if (value) {
        let num = Number(value);
        if (num) {
            if ((num = num.toString()).length > 9) { // Number length can not go longer then 9 digit, function will give result not more then 10 Cores
                return 'Very big digit :)';
            }
            const n = ('000000000' + num)
                .substr(-9)
                .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
            if (!n) {
                return '';
            }
            let str = '';
            str +=
                Number(n[1]) !== 0
                    ? (units[Number(n[1])] || tens[n[1][0]] + ' ' + units[n[1][1]]) + 'crore '
                    : '';
            str +=
                Number(n[2]) !== 0
                    ? (units[Number(n[2])] || tens[n[2][0]] + ' ' + units[n[2][1]]) + 'lakh '
                    : '';
            str +=
                Number(n[3]) !== 0
                    ? (units[Number(n[3])] || tens[n[3][0]] + ' ' + units[n[3][1]]) + 'thousand '
                    : '';
            str +=
                Number(n[4]) !== 0
                    ? (units[Number(n[4])] || tens[n[4][0]] + ' ' + units[n[4][1]]) + 'hundred '
                    : '';
            str +=
                Number(n[5]) !== 0
                    ? (str !== '' ? 'and ' : '') +
                        (units[Number(n[5])] || tens[n[5][0]] + ' ' + units[n[5][1]]) +
                        'rupees'
                    : '';
            return str.toUpperCase();
        }
        else {
            return '';
        }
    }
    else {
        return '';
    }
}


/***/ }),

/***/ "Yu72":
/*!**************************************************************************!*\
  !*** ./src/app/spares/order-basket/basket-item/basket-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: BasketItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketItemComponent", function() { return BasketItemComponent; });
/* harmony import */ var src_app_services_basket_basket_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/basket/basket.types */ "7v0c");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_utils_observableUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/observableUtils */ "4ShH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_module_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared-module/loading-modal/loading-modal.component */ "ZaN7");
/* harmony import */ var _shared_module_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared-module/modal/modal.component */ "oeRM");











function BasketItemComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BasketItemComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.handleQtyChangeBtnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.basketItem.qty, " ");
} }
function BasketItemComponent_strong_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.basketItem.qty, " ");
} }
function BasketItemComponent_app_loading_modal_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loading-modal");
} }
function BasketItemComponent_app_loading_modal_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loading-modal");
} }
function BasketItemComponent_app_modal_30_div_42_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Please note, minimum order quantity for this product is ", ctx_r11.skuStock.quantities.minimumOrderQuantity, " items. ");
} }
function BasketItemComponent_app_modal_30_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BasketItemComponent_app_modal_30_div_42_div_1_div_2_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.qtyForm.value.qty < ctx_r8.skuStock.quantities.minimumOrderQuantity);
} }
function BasketItemComponent_app_modal_30_div_42_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Update quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function BasketItemComponent_app_modal_30_div_42_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 36);
} }
function BasketItemComponent_app_modal_30_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BasketItemComponent_app_modal_30_div_42_div_1_Template, 3, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function BasketItemComponent_app_modal_30_div_42_Template_form_submit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r12.handleUpdateQty(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("paste", function BasketItemComponent_app_modal_30_div_42_Template_input_paste_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r14.handleQtyClipboard($event); })("contextmenu", function BasketItemComponent_app_modal_30_div_42_Template_input_contextmenu_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r15.disableRightClick($event); })("keydown", function BasketItemComponent_app_modal_30_div_42_Template_input_keydown_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r16.handleQtyInputKeyDown($event); })("keyup", function BasketItemComponent_app_modal_30_div_42_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r17.handleQtyKeyup($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BasketItemComponent_app_modal_30_div_42_span_7_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, BasketItemComponent_app_modal_30_div_42_div_8_Template, 1, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.qtyForm.value.qty < ctx_r7.skuStock.quantities.minimumOrderQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r7.qtyForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r7.qtyForm.value.qty < ctx_r7.skuStock.quantities.minimumOrderQuantity || ctx_r7.qtyForm.value.qty < 1 || ctx_r7.qtyForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r7.isUpdatingQty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.isUpdatingQty);
} }
function BasketItemComponent_app_modal_30_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-modal", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("modalShouldClose", function BasketItemComponent_app_modal_30_Template_app_modal_modalShouldClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.quantityChangeModalVisible = false; })("contextmenu", function BasketItemComponent_app_modal_30_Template_app_modal_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.disableRightClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "header", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "In stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Min. Required Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Uom");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, BasketItemComponent_app_modal_30_div_42_Template, 9, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.skuStock.sparesGroupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.skuStock.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.skuStock.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.skuStock.quantities.inStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.skuStock.quantities.reOrderLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.skuStock.uom);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.canModifyBasket);
} }
class BasketItemComponent {
    constructor(basketService, authenticationService, formBuilder, skuService, toastService) {
        this.basketService = basketService;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.skuService = skuService;
        this.toastService = toastService;
        this.itemActionInProgress = false;
        this.quantityChangeModalVisible = false;
        this.isGettingSkuInfo = false;
        this.isUpdatingQty = false;
        this.isCurrentUserManager = false;
        this.isRequestedUser = false;
    }
    ngOnInit() {
        this.setPermissionBooleans();
    }
    ngOnDestroy() {
        Object(src_utils_observableUtils__WEBPACK_IMPORTED_MODULE_4__["safelyUnsubscribeFrom"])(this.skuInfoSubscription);
    }
    setPermissionBooleans() {
        this.authenticationService
            .currentUserHasPermission({
            [src_app_services__WEBPACK_IMPORTED_MODULE_1__["PermissionGroup"].Spares]: [src_app_services__WEBPACK_IMPORTED_MODULE_1__["SparesPermissions"].CanModifyBasket]
        })
            .subscribe(hasPermission => (this.canModifyBasket = hasPermission));
        this.authenticationService
            .currentUserIsManager()
            .subscribe(isManager => (this.isCurrentUserManager = isManager));
        this.currentUserId = this.authenticationService.currentUserProfile$.getValue().userId;
        this.isRequestedUser =
            this.currentUserId === this.basketItem.createdByUserId;
    }
    handleQtyClipboard(event) {
        event.preventDefault();
        return;
    }
    disableRightClick(e) {
        e.preventDefault();
    }
    handleDeleteItem() {
        if (this.isCurrentUserManager || this.isRequestedUser) {
            this.itemActionInProgress = true;
            this.basketService
                .deleteBasketItem(this.basketItem.skuId, this.basketItem.createdByUserId, this.currentUserId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(x => x);
        }
        else {
            this.toastService.showErrorToast(`You do not have permission to delete this basket item!`);
        }
    }
    handleQtyChangeBtnClick() {
        if (this.isCurrentUserManager || this.isRequestedUser) {
            this.isGettingSkuInfo = true;
            this.qtyForm = this.formBuilder.group({
                qty: [
                    this.basketItem.qty,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999999), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                ]
            });
            this.skuInfoSubscription = this.skuService
                .getSkuStockForSkuId(this.basketItem.skuId)
                .subscribe((sku) => {
                this.isGettingSkuInfo = false;
                if (sku.length > 0) {
                    this.skuStock = sku[0];
                    this.quantityChangeModalVisible = true;
                }
                else {
                    const errorMessage = 'Sorry something went wrong, please try again later';
                    this.toastService.showErrorToast(errorMessage);
                }
            }, _ => {
                const errorMessage = 'Sorry something went wrong, please try again later';
                this.toastService.showErrorToast(errorMessage);
                this.isGettingSkuInfo = false;
            });
        }
        else {
            this.toastService.showErrorToast(`You do not have permission to update this basket item!`);
            this.isGettingSkuInfo = false;
        }
    }
    handleUpdateQty() {
        if (this.isUpdatingQty) {
            return;
        }
        this.isUpdatingQty = true;
        this.basketService
            .updateBasketItem(this.basketItem.skuId, this.qtyForm.value.qty)
            .subscribe(_ => {
            this.isUpdatingQty = false;
            this.quantityChangeModalVisible = false;
        }, (errorResponse) => {
            this.isUpdatingQty = false;
            const errorMessage = errorResponse.error;
            this.toastService.showErrorToast(errorMessage);
            return;
        });
    }
    handleQtyKeyup(event) {
        if (event.key === 'Enter' &&
            this.qtyForm.value.qty > 0 &&
            this.qtyForm.value.qty.toString().length > 0 &&
            this.qtyForm.value.qty >= this.skuStock.quantities.minimumOrderQuantity) {
            event.preventDefault();
            this.handleUpdateQty();
        }
    }
    handleQtyInputKeyDown(event) {
        const qtyStringExceedsMaxLength = this.qtyForm.value.qty.toString().length >= 6;
        if (this.qtyForm.valid &&
            this.qtyForm.value.qty > 0 &&
            this.qtyForm.value.qty >= this.skuStock.quantities.minimumOrderQuantity &&
            event.key === 'Enter') {
            return;
        }
        if (event.key === 'Backspace' || event.key === 'Delete') {
            return;
        }
        if (qtyStringExceedsMaxLength || isNaN(event.key) || event.keyCode === 32) {
            event.preventDefault();
        }
    }
}
BasketItemComponent.ɵfac = function BasketItemComponent_Factory(t) { return new (t || BasketItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["BasketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["SkuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
BasketItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BasketItemComponent, selectors: [["app-basket-item"]], hostVars: 2, hostBindings: function BasketItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("action-in-progress", ctx.itemActionInProgress);
    } }, inputs: { basketItem: "basketItem" }, decls: 31, vars: 12, consts: [[1, "sku-id-cell"], [1, "description-cell"], [1, "desktop-only"], [1, "mobile-only"], [1, "qty-cell"], ["type", "button", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "uom-cell"], [1, "user-cell"], [1, "delete-row-cell"], [1, "delete-btn", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 14 18"], ["d", "M12.333 3.933L1.267 3.8c-.133.133-.4.133-.533.267A.8.8 0 0 0 .6 4.6l1.2 11.6c0 .4.267.533.667.533h8.267a.61.61 0 0 0 .666-.533l1.467-11.6a.8.8 0 0 0-.133-.533 1.343 1.343 0 0 0-.401-.134zm-2 11.6h-7.2L2.067 5.267h9.467z", "transform", "translate(.2 1.267)", 1, "cls-1"], ["d", "M13.333 3.2h-2.666A3.739 3.739 0 0 0 6.933 0a3.607 3.607 0 0 0-3.6 3.2H.667A.63.63 0 0 0 0 3.867a.63.63 0 0 0 .667.667h12.666A.63.63 0 0 0 14 3.867a.63.63 0 0 0-.667-.667zm-6.4-1.867a2.442 2.442 0 0 1 2.4 1.867H4.667a2.407 2.407 0 0 1 2.266-1.867z", 1, "cls-1"], ["d", "M5.367 13.467a.63.63 0 0 0 .667-.667V6.667A.63.63 0 0 0 5.367 6a.63.63 0 0 0-.667.667v6.267c0 .266.4.533.667.533z", "transform", "translate(1.567 2)", 1, "cls-1"], ["d", "M3.9 13.5a.714.714 0 0 0 .667-.667l-.534-6.266a.714.714 0 0 0-.666-.667.845.845 0 0 0-.667.8l.533 6.267a.886.886 0 0 0 .667.533z", "transform", "translate(.9 1.967)", 1, "cls-1"], ["d", "M6.942 13.475a.63.63 0 0 0 .667-.667l.533-6.267c.133-.267-.133-.533-.533-.533-.4-.133-.667.133-.667.533l-.533 6.267c-.134.401.133.667.533.667z", "transform", "translate(2.125 1.991)", 1, "cls-1"], ["class", "basket-item-modal", 3, "modalShouldClose", "contextmenu", 4, "ngIf"], ["type", "button", 3, "click"], [1, "basket-item-modal", 3, "modalShouldClose", "contextmenu"], [1, "generic-info"], [1, "row"], [1, "col-8"], [1, "col-4", "text-right"], [1, "row", "description-row", "mt-4"], [1, "col-12"], [1, "stock-info"], [1, "col12"], [1, "info-row", "row"], [1, "col-4"], ["class", "row notice-row", 4, "ngIf"], [1, "row", "add-to-basket-row", 3, "formGroup", "submit"], ["formControlName", "qty", "type", "text", "pattern", "[0-9]*", "inputmode", "text", "ng-pattern", "[0-9]*", "maxlength", "6", 1, "form-control", "quantity-input", 3, "paste", "contextmenu", "keydown", "keyup"], [1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["class", "spinner light", 4, "ngIf"], [1, "row", "notice-row"], [1, "spinner", "light"]], template: function BasketItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, BasketItemComponent_button_11_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, BasketItemComponent_strong_12_Template, 2, 1, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BasketItemComponent_Template_button_click_20_listener() { return ctx.handleDeleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, BasketItemComponent_app_loading_modal_28_Template, 1, 0, "app-loading-modal", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, BasketItemComponent_app_loading_modal_29_Template, 1, 0, "app-loading-modal", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, BasketItemComponent_app_modal_30_Template, 43, 7, "app-modal", 17);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.basketItem.skuId);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.basketItem.skuDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.basketItem.skuDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("ID-", ctx.basketItem.skuId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.canModifyBasket);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.canModifyBasket);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.basketItem.uom);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.basketItem.createdByUserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.canModifyBasket);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.itemActionInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isGettingSkuInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.quantityChangeModalVisible && ctx.skuStock && !ctx.isGettingSkuInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_module_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_7__["LoadingModalComponent"], _shared_module_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], styles: ["@charset \"UTF-8\";\n@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n[_nghost-%COMP%] {\n  display: table-row;\n  background-color: #f2f2f2;\n  line-height: 1.1;\n  position: relative;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.8em;\n  text-align: center;\n  vertical-align: middle;\n  height: 5em;\n  border-bottom: 2px solid white;\n  position: relative;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  font-weight: 600;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  background-color: #dedede;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]   .mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 1.5em;\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.2s ease-in-out;\n  background-color: rgba(0, 0, 0, 0);\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.07);\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1.1);\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.3;\n  background-color: transparent;\n  cursor: default;\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[disabled][_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1);\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1em;\n  height: auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1);\n  transition: all 0.2s ease-in-out;\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #424244;\n}\n[_nghost-%COMP%]   .qty-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #e5e5e5;\n  background: white;\n  border-radius: 4px;\n  font-weight: 600;\n  text-align: center;\n  width: 4.5em;\n  padding: 0.7em 0;\n  transition: all 0.2s ease-in-out;\n}\n[_nghost-%COMP%]   .qty-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: #c5c5c5;\n}\n[_nghost-%COMP%]   .qty-cell[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n}\n.action-in-progress[_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n.action-in-progress[_nghost-%COMP%]   td[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(app-loading-modal) {\n  opacity: 0.4;\n}\n  .basket-item-modal .taro-modal.taro-modal {\n  text-align: left;\n  background-color: #f2f2f2;\n  height: 29rem;\n  max-height: 29rem;\n}\napp-modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0em -1em 0;\n}\napp-modal[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0;\n}\napp-modal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  font-weight: 0;\n}\napp-modal[_ngcontent-%COMP%]   .generic-info[_ngcontent-%COMP%] {\n  margin: -3rem;\n  margin-bottom: 0;\n  background-color: white;\n  padding: 3rem;\n  padding-bottom: 2rem;\n  box-shadow: 0px -2px 2px inset rgba(0, 0, 0, 0.13);\n}\napp-modal[_ngcontent-%COMP%]   .generic-info[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\napp-modal[_ngcontent-%COMP%]   \u0326\u0326[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 700;\n}\napp-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e5e5;\n}\napp-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-bottom: 0.5em;\n}\napp-modal[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  text-transform: uppercase;\n  margin-bottom: 0.2em;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-bottom: 1em;\n  font-weight: 700;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 1.5em 0 1.5em 0;\n  text-align: center;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.75em;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 1.875em;\n  margin: 0.2em 0 0 0;\n  font-weight: 200;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  margin-top: 0.8em;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], app-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  margin-top: 0.6rem;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: #6A955B;\n  margin: 0;\n  margin-left: 0.5em;\n}\napp-modal[_ngcontent-%COMP%]   .stock-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  border: 1px solid #bcbcbc;\n  border-width: 0 1px;\n}\napp-modal[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%] {\n  margin-top: 0.9em;\n  text-align: center;\n}\napp-modal[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\napp-modal[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  padding-right: 0.5em;\n}\napp-modal[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child   .form-control[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: white;\n  padding-right: 1em;\n  padding-left: 1em;\n}\napp-modal[_ngcontent-%COMP%]   .notice-row[_ngcontent-%COMP%]    > .col-12[_ngcontent-%COMP%] {\n  background: #c8d5c3;\n  padding: 1em;\n  margin: 0.4em 0;\n  border-radius: 0.5em;\n  line-height: 1.4;\n}\n@media screen and (min-width: 768px) {\n  .generic-info[_ngcontent-%COMP%] {\n    margin: -3rem;\n    padding: 3rem 3rem 2rem 3rem;\n  }\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    margin-bottom: 3.5em;\n    padding-right: 7em;\n    display: flex;\n    align-items: center;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-bottom: none;\n  }\n  [_nghost-%COMP%]   .generic-info[_ngcontent-%COMP%] {\n    margin: -1.5rem;\n    padding: 1.5rem 1.5rem 0 1.5rem;\n  }\n  [_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n    display: none;\n    border-bottom: none;\n    height: auto;\n  }\n  [_nghost-%COMP%]   td.description-cell[_ngcontent-%COMP%], [_nghost-%COMP%]   td.qty-cell[_ngcontent-%COMP%], [_nghost-%COMP%]   td.delete-row-cell[_ngcontent-%COMP%] {\n    display: block;\n  }\n  [_nghost-%COMP%]   td.description-cell[_ngcontent-%COMP%] {\n    width: 60%;\n    display: inline-flex;\n    text-align: left;\n  }\n  [_nghost-%COMP%]   td.description-cell[_ngcontent-%COMP%]    > .desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   td.description-cell[_ngcontent-%COMP%]    > .mobile-only[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: 500;\n  }\n  [_nghost-%COMP%]   td.qty-cell[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    width: 40%;\n  }\n  [_nghost-%COMP%]   td.qty-cell[_ngcontent-%COMP%]   .mobile-only[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-weight: 700;\n    margin-left: 0.5em;\n  }\n  [_nghost-%COMP%]   td.delete-row-cell[_ngcontent-%COMP%] {\n    display: block;\n    width: calc(100% + 2px);\n    position: absolute;\n    top: 100%;\n    margin: -1px;\n    background-color: transparent;\n  }\n  [_nghost-%COMP%]   td.delete-row-cell[_ngcontent-%COMP%]   .delete-btn.delete-btn[_ngcontent-%COMP%] {\n    background: #eaeaea;\n    padding: 1.5em 0;\n    border-bottom-left-radius: 0.5em;\n    border-bottom-right-radius: 0.5em;\n    border: 1px solid rgba(0, 0, 0, 0.05);\n    border-top: none;\n  }\n  [_nghost-%COMP%]   td.delete-row-cell[_ngcontent-%COMP%]   .delete-btn.delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #666667;\n  }\n  [_nghost-%COMP%]   td.delete-row-cell[_ngcontent-%COMP%]   .delete-btn.delete-btn[disabled][_ngcontent-%COMP%] {\n    opacity: 0.5;\n  }\n}\n@media screen and (max-width: 412px) {\n  app-modal[_ngcontent-%COMP%]   .add-to-basket-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n@media screen and (max-width: 360px) and (min-height: 640px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 17em);\n    max-height: calc(100% - 17em);\n  }\n}\n@media screen and (max-width: 412px) and (min-height: 732px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 23em);\n    max-height: calc(100% - 23em);\n  }\n}\n@media screen and (max-width: 412px) and (min-height: 896px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 35em);\n    max-height: calc(100% - 35em);\n  }\n}\n@media screen and (max-width: 360px) and (min-height: 740px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 24em);\n    max-height: calc(100% - 24em);\n  }\n}\n@media screen and (max-width: 768px) and (min-height: 1024px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 44em);\n    max-height: calc(100% - 44em);\n  }\n}\n@media screen and (min-width: 1440px) and (min-height: 900px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 32em);\n    max-height: calc(100% - 32em);\n  }\n}\n@media screen and (min-height: 1280px) {\n    .order-stock-sku-modal .taro-modal.taro-modal.taro-modal {\n    height: calc(100% - 59.5em);\n    max-height: calc(100% - 59.5em);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmFza2V0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxfZ2xvYmFsdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEB0YXJvcHVtcHNcXGJvb3RzdHJhcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ2tCaEI7RUFDRTs7OztJQUlFLHdCQUFBO0VEaEJGOztFQ2tCQTtJQUNFLG9CQUFBO0lBQ0Esc0JBYmlCO0VERm5COztFQ2lCQTtJQUNFLHlCQUFBO0lBQ0EsMEJBQUE7RURkRjtBQUNGO0FBZkE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWlCRjtBQWZFO0VBQ0UsY0FUd0I7RUFVeEIsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBaUJKO0FBZkk7RUFDRSxnQkFBQTtBQWlCTjtBQWRJO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQWdCTjtBQWJJO0VBQ0UsYUFBQTtBQWVOO0FBWEU7RUFDRSxrQkFBQTtBQWFKO0FBWEk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFhTjtBQVZJO0VBQ0UsU0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtBQVlOO0FBVk07RUFDRSxxQ0FBQTtBQVlSO0FBVlE7RUFDRSwyQ0FBQTtBQVlWO0FBUk07RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBVVI7QUFQVTtFQUNFLHlDQUFBO0FBU1o7QUFKTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0NBQUE7QUFNUjtBQUpRO0VBQ0UsYUU5RUc7QUZvRmI7QUFDSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUNOO0FBQ007RUFDRSxxQkFBQTtBQUNSO0FBRU07RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUFBUjtBQUtFO0VBQ0UseUJBQUE7QUFISjtBQUtJO0VBQ0UsWUFBQTtBQUhOO0FBVUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBUEY7QUFXRTtFQUNFLGtCQUFBO0FBUko7QUFVSTtFQUNFLFVBQUE7QUFSTjtBQWFJO0VBQ0UsY0FBQTtBQVhOO0FBZUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBNUJZO0VBNkJaLG9CQUFBO0VBQ0Esa0RBQUE7QUFiSjtBQWNJO0VBQ0UsNEJBQUE7QUFaTjtBQWdCRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQWRKO0FBaUJFO0VBQ0UsZ0NBQUE7QUFmSjtBQWlCSTtFQUNFLHFCQUFBO0FBZk47QUFvQkk7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFsQk47QUFzQkU7RUFDRSxrQkFBQTtBQXBCSjtBQXNCSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBcEJOO0FBdUJJO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBckJOO0FBd0JRO0VBQ0UsZ0JBQUE7QUF0QlY7QUF3QlU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBdEJaO0FBeUJVO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBdkJaO0FBNEJNO0VBQ0UsaUJBQUE7QUExQlI7QUEyQlE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQXpCVjtBQTRCUTs7RUFFRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBMUJWO0FBNkJRO0VBQ0UsY0UzTkY7RUY0TkUsU0FBQTtFQUNBLGtCQUFBO0FBM0JWO0FBK0JNO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQTdCUjtBQWtDRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFoQ0o7QUFpQ0k7RUFDRSxXQUFBO0FBL0JOO0FBa0NJO0VBQ0Usb0JBQUE7QUFoQ047QUFrQ007RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWhDUjtBQXFDRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBbkNKO0FBdUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7RUFwQ0Y7QUFDRjtBQXVDQTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG9DQUFBO0lBQ0EsbUJBQUE7RUFyQ0Y7RUF1Q0U7SUFDRSxlQUFBO0lBQ0EsK0JBQUE7RUFyQ0o7RUF3Q0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VBdENKO0VBd0NJO0lBR0UsY0FBQTtFQXhDTjtFQTJDSTtJQUNFLFVBQUE7SUFDSixvQkFBQTtJQUNJLGdCQUFBO0VBekNOO0VBMENNO0lBQ0UsYUFBQTtFQXhDUjtFQTBDTTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtFQXhDUjtFQTRDSTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQTFDTjtFQTRDTTtJQUNFLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQTFDUjtFQThDSTtJQUNFLGNBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSw2QkFBQTtFQTVDTjtFQThDTTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQ0FBQTtJQUNBLGlDQUFBO0lBQ0EscUNBQUE7SUFDQSxnQkFBQTtFQTVDUjtFQThDUTtJQUNFLGFBQUE7RUE1Q1Y7RUErQ1E7SUFDRSxZQUFBO0VBN0NWO0FBQ0Y7QUFvREE7RUFHTTtJQUNFLGdCQUFBO0VBcEROO0FBQ0Y7QUF5REE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsNkJBQUE7RUF2REY7QUFDRjtBQTBEQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSw2QkFBQTtFQXhERjtBQUNGO0FBMkRBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLDZCQUFBO0VBekRGO0FBQ0Y7QUE0REE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsNkJBQUE7RUExREY7QUFDRjtBQTZEQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSw2QkFBQTtFQTNERjtBQUNGO0FBOERBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLDZCQUFBO0VBNURGO0FBQ0Y7QUErREE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsK0JBQUE7RUE3REY7QUFDRiIsImZpbGUiOiJiYXNrZXQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBtZWRpYSBwcmludCB7XG4gIC5hcHAtaGVhZGVyLFxuLmZ1bmN0aW9uLWJhcixcbmFwcC1zZWN0aW9uLWhlYWRlcixcbi5tZWRpYS1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXBwLWNvbnRlbnQtYXJlYSB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5tZWRpYS1wcmludCB7XG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuOmhvc3Qge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IHRkIHtcbiAgcGFkZGluZzogMC44ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA1ZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgdGQ6bnRoLWNoaWxkKDEpIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IHRkOm50aC1jaGlsZCg2KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCB0ZCAubW9iaWxlLW9ubHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLmRlbGV0ZS1yb3ctY2VsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5kZWxldGUtcm93LWNlbGwgLnNwaW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbjpob3N0IC5kZWxldGUtcm93LWNlbGwgLmRlbGV0ZS1idG4ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG46aG9zdCAuZGVsZXRlLXJvdy1jZWxsIC5kZWxldGUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3KTtcbn1cbjpob3N0IC5kZWxldGUtcm93LWNlbGwgLmRlbGV0ZS1idG46aG92ZXIgc3ZnIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xKTtcbn1cbjpob3N0IC5kZWxldGUtcm93LWNlbGwgLmRlbGV0ZS1idG5bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC4zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuOmhvc3QgLmRlbGV0ZS1yb3ctY2VsbCAuZGVsZXRlLWJ0bltkaXNhYmxlZF06aG92ZXIgc3ZnIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG46aG9zdCAuZGVsZXRlLXJvdy1jZWxsIC5kZWxldGUtYnRuIHN2ZyB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAuZGVsZXRlLXJvdy1jZWxsIC5kZWxldGUtYnRuIHN2ZyBwYXRoIHtcbiAgZmlsbDogIzQyNDI0NDtcbn1cbjpob3N0IC5xdHktY2VsbCBidXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA0LjVlbTtcbiAgcGFkZGluZzogMC43ZW0gMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAucXR5LWNlbGwgYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjYzVjNWM1O1xufVxuOmhvc3QgLnF0eS1jZWxsIGJ1dHRvbltkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuOmhvc3QuYWN0aW9uLWluLXByb2dyZXNzIHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbjpob3N0LmFjdGlvbi1pbi1wcm9ncmVzcyB0ZCA+ICo6bm90KGFwcC1sb2FkaW5nLW1vZGFsKSB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuOjpuZy1kZWVwIC5iYXNrZXQtaXRlbS1tb2RhbCAudGFyby1tb2RhbC50YXJvLW1vZGFsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgaGVpZ2h0OiAyOXJlbTtcbiAgbWF4LWhlaWdodDogMjlyZW07XG59XG5cbmFwcC1tb2RhbCAucm93IHtcbiAgbWFyZ2luOiAwZW0gLTFlbSAwO1xufVxuYXBwLW1vZGFsIC5yb3cgPiBkaXYge1xuICBwYWRkaW5nOiAwO1xufVxuYXBwLW1vZGFsIHRkOm50aC1jaGlsZCg2KSB7XG4gIGZvbnQtd2VpZ2h0OiAwO1xufVxuYXBwLW1vZGFsIC5nZW5lcmljLWluZm8ge1xuICBtYXJnaW46IC0zcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIGJveC1zaGFkb3c6IDBweCAtMnB4IDJweCBpbnNldCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xufVxuYXBwLW1vZGFsIC5nZW5lcmljLWluZm8gLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuYXBwLW1vZGFsIMymzKYgaDEge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmFwcC1tb2RhbCBoZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcbn1cbmFwcC1tb2RhbCBoZWFkZXIgPiBkaXYge1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG59XG5hcHAtbW9kYWwgLmRlc2NyaXB0aW9uLXJvdyBkdCB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbn1cbmFwcC1tb2RhbCAuc3RvY2staW5mbyB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbmFwcC1tb2RhbCAuc3RvY2staW5mbyBoMiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5hcHAtbW9kYWwgLnN0b2NrLWluZm8gLmluZm8tcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEuNWVtIDAgMS41ZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYXBwLW1vZGFsIC5zdG9jay1pbmZvIC5pbmZvLXJvdyAuY29sLTQgZGwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuYXBwLW1vZGFsIC5zdG9jay1pbmZvIC5pbmZvLXJvdyAuY29sLTQgZGwgZHQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cbmFwcC1tb2RhbCAuc3RvY2staW5mbyAuaW5mby1yb3cgLmNvbC00IGRsIGRkIHtcbiAgZm9udC1zaXplOiAxLjg3NWVtO1xuICBtYXJnaW46IDAuMmVtIDAgMCAwO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuYXBwLW1vZGFsIC5zdG9jay1pbmZvIC5pbmZvLXJvdyAuY29sLTEyIHtcbiAgbWFyZ2luLXRvcDogMC44ZW07XG59XG5hcHAtbW9kYWwgLnN0b2NrLWluZm8gLmluZm8tcm93IC5jb2wtMTIgZGwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5hcHAtbW9kYWwgLnN0b2NrLWluZm8gLmluZm8tcm93IC5jb2wtMTIgZGQsXG5hcHAtbW9kYWwgLnN0b2NrLWluZm8gLmluZm8tcm93IC5jb2wtMTIgZHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xufVxuYXBwLW1vZGFsIC5zdG9jay1pbmZvIC5pbmZvLXJvdyAuY29sLTEyIGRkIHtcbiAgY29sb3I6ICM2QTk1NUI7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuYXBwLW1vZGFsIC5zdG9jay1pbmZvIC5pbmZvLXJvdyA+IGRpdjpudGgtY2hpbGQoMikge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmNiY2JjO1xuICBib3JkZXItd2lkdGg6IDAgMXB4O1xufVxuYXBwLW1vZGFsIC5hZGQtdG8tYmFza2V0LXJvdyB7XG4gIG1hcmdpbi10b3A6IDAuOWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5hcHAtbW9kYWwgLmFkZC10by1iYXNrZXQtcm93IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuYXBwLW1vZGFsIC5hZGQtdG8tYmFza2V0LXJvdyA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xufVxuYXBwLW1vZGFsIC5hZGQtdG8tYmFza2V0LXJvdyA+IGRpdjpmaXJzdC1jaGlsZCAuZm9ybS1jb250cm9sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cbmFwcC1tb2RhbCAubm90aWNlLXJvdyA+IC5jb2wtMTIge1xuICBiYWNrZ3JvdW5kOiAjYzhkNWMzO1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMC40ZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5nZW5lcmljLWluZm8ge1xuICAgIG1hcmdpbjogLTNyZW07XG4gICAgcGFkZGluZzogM3JlbSAzcmVtIDJyZW0gM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDMuNWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDdlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbiAgOmhvc3QgLmdlbmVyaWMtaW5mbyB7XG4gICAgbWFyZ2luOiAtMS41cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMCAxLjVyZW07XG4gIH1cbiAgOmhvc3QgdGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgOmhvc3QgdGQuZGVzY3JpcHRpb24tY2VsbCwgOmhvc3QgdGQucXR5LWNlbGwsIDpob3N0IHRkLmRlbGV0ZS1yb3ctY2VsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgOmhvc3QgdGQuZGVzY3JpcHRpb24tY2VsbCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIDpob3N0IHRkLmRlc2NyaXB0aW9uLWNlbGwgPiAuZGVza3RvcC1vbmx5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIDpob3N0IHRkLmRlc2NyaXB0aW9uLWNlbGwgPiAubW9iaWxlLW9ubHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgOmhvc3QgdGQucXR5LWNlbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICA6aG9zdCB0ZC5xdHktY2VsbCAubW9iaWxlLW9ubHkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgfVxuICA6aG9zdCB0ZC5kZWxldGUtcm93LWNlbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAycHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIDpob3N0IHRkLmRlbGV0ZS1yb3ctY2VsbCAuZGVsZXRlLWJ0bi5kZWxldGUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICAgIHBhZGRpbmc6IDEuNWVtIDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuICA6aG9zdCB0ZC5kZWxldGUtcm93LWNlbGwgLmRlbGV0ZS1idG4uZGVsZXRlLWJ0biBzdmcgcGF0aCB7XG4gICAgZmlsbDogIzY2NjY2NztcbiAgfVxuICA6aG9zdCB0ZC5kZWxldGUtcm93LWNlbGwgLmRlbGV0ZS1idG4uZGVsZXRlLWJ0bltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDEycHgpIHtcbiAgYXBwLW1vZGFsIC5hZGQtdG8tYmFza2V0LXJvdyBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XG4gIDo6bmctZGVlcCAub3JkZXItc3RvY2stc2t1LW1vZGFsIC50YXJvLW1vZGFsLnRhcm8tbW9kYWwudGFyby1tb2RhbCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxN2VtKTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxN2VtKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDEycHgpIGFuZCAobWluLWhlaWdodDogNzMycHgpIHtcbiAgOjpuZy1kZWVwIC5vcmRlci1zdG9jay1za3UtbW9kYWwgLnRhcm8tbW9kYWwudGFyby1tb2RhbC50YXJvLW1vZGFsIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIzZW0pO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIzZW0pO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTJweCkgYW5kIChtaW4taGVpZ2h0OiA4OTZweCkge1xuICA6Om5nLWRlZXAgLm9yZGVyLXN0b2NrLXNrdS1tb2RhbCAudGFyby1tb2RhbC50YXJvLW1vZGFsLnRhcm8tbW9kYWwge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzVlbSk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMzVlbSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc0MHB4KSB7XG4gIDo6bmctZGVlcCAub3JkZXItc3RvY2stc2t1LW1vZGFsIC50YXJvLW1vZGFsLnRhcm8tbW9kYWwudGFyby1tb2RhbCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNGVtKTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNGVtKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogMTAyNHB4KSB7XG4gIDo6bmctZGVlcCAub3JkZXItc3RvY2stc2t1LW1vZGFsIC50YXJvLW1vZGFsLnRhcm8tbW9kYWwudGFyby1tb2RhbCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NGVtKTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NGVtKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDkwMHB4KSB7XG4gIDo6bmctZGVlcCAub3JkZXItc3RvY2stc2t1LW1vZGFsIC50YXJvLW1vZGFsLnRhcm8tbW9kYWwudGFyby1tb2RhbCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMmVtKTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMmVtKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDEyODBweCkge1xuICA6Om5nLWRlZXAgLm9yZGVyLXN0b2NrLXNrdS1tb2RhbCAudGFyby1tb2RhbC50YXJvLW1vZGFsLnRhcm8tbW9kYWwge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTkuNWVtKTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA1OS41ZW0pO1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9AdGFyb3B1bXBzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuJG5hdi1ncmV5OiAjZTJlMmUyO1xyXG4kc2VhcmNoLWdyZXk6ICNmMmYyZjI7XHJcbiRoZWFkZXItcGFkZGluZzogMi41cmVtO1xyXG4kaGVhZGVyLXBhZGRpbmctc206IDFyZW07XHJcbiRiYXNlLW5hdi13aWR0aDogNy45ZW07XHJcbiRleHBhbmRlZC1uYXYtd2lkdGg6IDIwZW07XHJcbiRoZWFkZXItaGVpZ2h0OiAxMi40cmVtO1xyXG4kbWVudS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZzogMXJlbSAzLjNyZW07XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmctc206IDFyZW0gMS43cmVtO1xyXG4kY29udGVudC1hcmVhLWNvbG9yOiAjZmZmO1xyXG4kd2FybmluZzogI0VBMDAyOTtcclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5hcHAtaGVhZGVyLFxyXG4gIC5mdW5jdGlvbi1iYXIsXHJcbiAgYXBwLXNlY3Rpb24taGVhZGVyLFxyXG4gIC5tZWRpYS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFwcC1jb250ZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1hcmVhLWNvbG9yO1xyXG4gIH1cclxuICAubWVkaWEtcHJpbnQge1xyXG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIkZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJLb2hpbm9vclwiLCBcIk9wZW4gU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBcIkdpbGwgU2Fuc1wiLCBDb3JiZWwsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kYm9keS1jb2xvcjogIzQyNDI0NCAhZGVmYXVsdDtcbiRncmVlbjogIzZBOTU1QiAhZGVmYXVsdDtcbiRncmVlbi1mYWRlZDogI0QxREVDRDtcbiRyZWQ6ICNGRjQyMkUgIWRlZmF1bHQ7XG4kcmVkLWxpZ2h0OiAjRkZEOUQ1ICFkZWZhdWx0O1xuJHJlZC1kYXJrOiAjOTk0NDRGICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogNnB4O1xuXG4kcHJpbWFyeTogJGdyZWVuO1xuXG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAwO1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6IDZweDtcbiRhbGVydC1wYWRkaW5nLXg6IDEuNXJlbTtcbiRhbGVydC1wYWRkaW5nLXk6IDEuMnJlbTtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAuNzVyZW07XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMy43NXJlbTtcblxuJHRvYXN0LXotaW5kZXg6IDEwMDAgIWRlZmF1bHQ7XG4kdG9hc3QtZHVyYXRpb246IDMwMDBtcyAhZGVmYXVsdDtcbiR0b2FzdC1oZWlnaHQ6IDhyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtaGVpZ2h0LXNtOiA1LjhyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYnJlYWtwb2ludDogNzY4cHggIWRlZmF1bHQ7Il19 */"] });


/***/ }),

/***/ "mwoA":
/*!***********************************************************!*\
  !*** ./src/app/spares/stock-list/stock-list.component.ts ***!
  \***********************************************************/
/*! exports provided: StockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListComponent", function() { return StockListComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "o0su");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-module/section-header/section-header.component */ "OeDX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _spares_group_spares_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spares-group/spares-group.component */ "AgS2");









function StockListComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 21);
} }
function StockListComponent_article_26_app_spares_group_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-spares-group", 25);
} if (rf & 2) {
    const sparesGroup_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sparesGroup", sparesGroup_r3)("textFilter", ctx_r2.searchForm.get("text").value)("siteId", ctx_r2.siteId);
} }
function StockListComponent_article_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, StockListComponent_article_26_app_spares_group_3_Template, 1, 3, "app-spares-group", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.sparesGroups);
} }
class StockListComponent {
    constructor(skuService, formBuilder, toastService, authenticationService) {
        this.skuService = skuService;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.authenticationService = authenticationService;
        this.isLoading = true;
        this.allProductClassesOption = '';
        this.sparesGroups = [];
        this.siteId = this.authenticationService.currentUserProfile$.value.primarySite.id;
        this.searchForm = this.formBuilder.group({
            text: ''
        });
    }
    ngOnInit() {
        this.getSparesGroupSubscription = this.skuService
            .getSparesGroups(undefined, this.siteId)
            .subscribe((data) => {
            this.sparesGroups = data;
            this.isLoading = false;
        }, (err) => {
            this.toastService.showErrorToast(`Sorry something went wrong... please try again later, ${err}`);
        });
        this.searchForm
            .get('text')
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(textValue => textValue.length >= 2 || textValue.length === 0))
            .subscribe(() => this.submitSearch());
    }
    get noSparesGroups() {
        return this.sparesGroups.length === 0;
    }
    submitSearch() {
        this.getSparesGroupSubscription.unsubscribe();
        this.isLoading = true;
        this.getSparesGroupSubscription = this.skuService
            .getSparesGroups(this.searchForm.get('text').value, this.siteId)
            .subscribe((data) => {
            this.sparesGroups = data;
            this.isLoading = false;
        }, (err) => {
            this.toastService.showErrorToast(`Sorry something went wrong... please try again later, ${err}`);
        });
    }
}
StockListComponent.ɵfac = function StockListComponent_Factory(t) { return new (t || StockListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["SkuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
StockListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StockListComponent, selectors: [["app-stock-list"]], decls: 27, vars: 3, consts: [[1, "search-form", 3, "formGroup"], [1, "row"], [1, "col-md-5"], [1, "input-with-search-wrapper"], ["type", "text", "formControlName", "text", "placeholder", "Search stock by id or description", 1, "form-control", "form-control--search-prefix"], [1, "col-md-7", "d-flex", "justify-content-end"], ["type", "button", 1, "btn-download-csv"], ["viewBox", "0 0 15.375 19.188"], ["id", "Group_1558", "data-name", "Group 1558", "transform", "translate(-299.063 -288.813)"], ["id", "Path_783", "data-name", "Path 783", 1, "cls-1"], ["d", "M940.063 237.334v19.188h15.375v-14.313l-4.875-4.875h-10.5z", "transform", "translate(-641 51.479)", 1, "cls-3"], ["d", "M954.438 255.521v-12.898l-4.29-4.289h-9.085v17.187h13.375m1 1h-15.375v-19.187h10.5l4.875 4.875v14.312z", "transform", "translate(-641 51.479)", 1, "cls-4"], ["id", "Path_784", "d", "M954.918 242.288h-5.043v-5.079", "data-name", "Path 784", "transform", "translate(-640.959 51.604)", 1, "cls-2"], ["id", "Path_785", "data-name", "Path 785", 1, "cls-1"], ["d", "M943.5 245.334h8.563v7.25H943.5z", "transform", "translate(-641 51.479)", 1, "cls-3"], ["d", "M951.063 251.584v-5.25H944.5v5.25h6.563m1 1H943.5v-7.25h8.563v7.25z", "transform", "translate(-641 51.479)", 1, "cls-4"], ["id", "Path_786", "d", "M946.5 245.084v7.25", "data-name", "Path 786", "transform", "translate(-641.064 51.729)", 1, "cls-2"], ["id", "Path_787", "d", "M952.063 247.834H944", "data-name", "Path 787", "transform", "translate(-641 51.479)", 1, "cls-2"], ["id", "Path_788", "d", "M951.938 250.4h-8.562", "data-name", "Path 788", "transform", "translate(-640.875 51.479)", 1, "cls-2"], ["class", "spinner", 4, "ngIf"], [4, "ngIf"], [1, "spinner"], [1, "spare-class"], [1, "spare-groups"], [3, "sparesGroup", "textFilter", "siteId", 4, "ngFor", "ngForOf"], [3, "sparesGroup", "textFilter", "siteId"]], template: function StockListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-section-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Stock List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "g", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, StockListComponent_div_25_Template, 1, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, StockListComponent_article_26_Template, 4, 1, "article", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.noSparesGroups);
    } }, directives: [_shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_4__["SectionHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _spares_group_spares_group_component__WEBPACK_IMPORTED_MODULE_6__["SparesGroupComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  margin-bottom: 1.75em;\n}\n\n.search-form[_ngcontent-%COMP%] {\n  padding-bottom: 1.5em;\n  margin-bottom: 1.5em;\n}\n\n@media screen and (max-width: 768px) {\n  .search-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n  }\n  .search-form[_ngcontent-%COMP%]   button.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  .search-form[_ngcontent-%COMP%]   button.btn-download-csv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 0.25rem;\n  }\n}\n\nbutton.btn-download-csv[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: flex-end;\n  display: flex;\n  color: #000;\n  border: none;\n  background: transparent;\n}\n\nbutton.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.4rem;\n  height: auto;\n}\n\nbutton.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%], button.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: none;\n}\n\nbutton.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  stroke: #424244;\n}\n\nbutton.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%], button.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  stroke: none;\n}\n\nbutton.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  fill: #424244;\n}\n\nbutton.btn-download-csv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 0.875em;\n  font-weight: 600;\n  margin-bottom: 0.5em;\n}\n\nbutton.btn-download-csv[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\nbutton.btn-download-csv[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: scale(1.025);\n}\n\n.spare-class[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n\n.spare-class[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n  font-weight: 600;\n  margin-bottom: 0.5em;\n}\n\n.spare-class.not-visible[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdG9jay1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFBRTtFQUNFO0lBQ0Usa0JBQUE7RUFFSjtFQUNJO0lBQ0UsZ0JBQUE7RUFDTjtFQUNJO0lBQ0UsbUJBQUE7RUFDTjtBQUNGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQURKOztBQUVJOztFQUVFLFVBQUE7QUFBTjs7QUFFSTtFQUNFLGVBQUE7QUFBTjs7QUFFSTs7RUFFRSxZQUFBO0FBQU47O0FBRUk7RUFDRSxhQUFBO0FBQU47O0FBR0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFHRTtFQUNFLDBCQUFBO0FBREo7O0FBRUk7RUFDRSx1QkFBQTtBQUFOOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUtFO0VBQ0UsYUFBQTtBQUhKIiwiZmlsZSI6InN0b2NrLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS43NWVtO1xyXG59XHJcbi5zZWFyY2gtZm9ybSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5idG4tZG93bmxvYWQtY3N2IHtcclxuICAgICAgc3ZnIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuYnV0dG9uLmJ0bi1kb3dubG9hZC1jc3Yge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDEuNHJlbTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC5jbHMtMSxcclxuICAgIC5jbHMtMiB7XHJcbiAgICAgIGZpbGw6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2xzLTIge1xyXG4gICAgICBzdHJva2U6ICM0MjQyNDQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLTMsXHJcbiAgICAuY2xzLTQge1xyXG4gICAgICBzdHJva2U6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2xzLTQge1xyXG4gICAgICBmaWxsOiAjNDI0MjQ0O1xyXG4gICAgfVxyXG4gIH1cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBzdmcge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zcGFyZS1jbGFzcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICB9XHJcblxyXG4gICYubm90LXZpc2libGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=spares-spares-module-es2015.js.map