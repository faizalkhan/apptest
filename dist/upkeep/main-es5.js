(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+3I6":
    /*!**********************************************************!*\
      !*** ./src/app/header/basket/basket/basket.component.ts ***!
      \**********************************************************/

    /*! exports provided: BasketComponent */

    /***/
    function I6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketComponent", function () {
        return BasketComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function BasketComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ellipse", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ellipse", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.basketLength, " ");
        }
      }

      var BasketComponent = /*#__PURE__*/function () {
        function BasketComponent(basketService, cdRef) {
          var _this = this;

          _classCallCheck(this, BasketComponent);

          this.basketService = basketService;
          this.cdRef = cdRef;
          this.basketLength = 0;
          this.basketService.basket$.subscribe(function (basket) {
            if (basket && basket.items) {
              _this.basketLength = basket.items.length;

              _this.cdRef.markForCheck();
            }
          });
        }

        _createClass(BasketComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BasketComponent;
      }();

      BasketComponent.ɵfac = function BasketComponent_Factory(t) {
        return new (t || BasketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__["BasketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      BasketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BasketComponent,
        selectors: [["app-basket"]],
        decls: 1,
        vars: 1,
        consts: [["routerLink", "/spares/order-basket", 4, "ngIf"], ["routerLink", "/spares/order-basket"], [1, "basket-length"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 18.141 19.88"], ["transform", "translate(21691.521 3947.093)"], ["d", "M-21687.919-3932.679a.587.587 0 0 1-.621.621h-.5a.587.587 0 0 1-.621-.621v-13.793a.587.587 0 0 1 .624-.621h.5a.587.587 0 0 1 .621.621zM-21679.842-3940.632a.587.587 0 0 1-.621.621h-1.74a.587.587 0 0 1-.621-.621v-5.84a.587.587 0 0 1 .621-.621h1.615a.587.587 0 0 1 .621.621v5.84z"], ["d", "M-21674.127-3933.798a.587.587 0 0 1 .621.621v.5a.587.587 0 0 1-.621.621h-14.91a.587.587 0 0 1-.621-.621v-.5a.587.587 0 0 1 .621-.621zM-21688.539-3947.093a.587.587 0 0 1 .618.621v.5a.587.587 0 0 1-.621.621h-2.358a.587.587 0 0 1-.621-.624v-.5a.587.587 0 0 1 .621-.618z"], ["cx", "1.988", "cy", "1.988", "rx", "1.988", "ry", "1.988", "transform", "translate(-21689.658 -3931.188)"], ["cx", "1.988", "cy", "1.988", "rx", "1.988", "ry", "1.988", "transform", "translate(-21677.357 -3931.188)"], ["d", "M-21680.961-3935.538a.451.451 0 0 1-.745 0c-2.228-2.362-4.095-4.538-4.225-4.721s-.124-.373.248-.373h8.7c.373 0 .5.249.248.5-.002 0-2.363 2.482-4.226 4.594z"]],
        template: function BasketComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BasketComponent_a_0_Template, 10, 1, "a", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basketLength > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\na[_ngcontent-%COMP%] {\n  display: block;\n  border: none;\n  background-color: #F2F2F2;\n  line-height: 0;\n  padding: 0.9rem 3.3rem;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n  border: 1px solid transparent;\n  border-width: 1px 0;\n}\n@media (hover: hover) {\n  a[_ngcontent-%COMP%]:hover {\n    background: #fbfbfb;\n    border-color: rgba(0, 0, 0, 0.07);\n  }\n}\na[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.4rem;\n  height: auto;\n}\na[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%] {\n  fill: #424244;\n}\na[_ngcontent-%COMP%]   .basket-length[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #6A955B;\n  display: block;\n  color: white;\n  width: 1.5em;\n  height: 1.5em;\n  line-height: 1;\n  padding-top: 0.4em;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.7em;\n  right: 3em;\n  top: 0.5em;\n}\n@media screen and (max-width: 768px) {\n  a[_ngcontent-%COMP%] {\n    padding: 0.9rem 1.8rem;\n  }\n  a[_ngcontent-%COMP%]   .basket-length[_ngcontent-%COMP%] {\n    right: 0.7em;\n  }\n  a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.2rem;\n    margin: 0.1em 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXF9nbG9iYWx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmFza2V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAdGFyb3B1bXBzXFxib290c3RyYXBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDRTs7OztJQUlFLHdCQUFBO0VDakJGOztFRG1CQTtJQUNFLG9CQUFBO0lBQ0Esc0JBYmlCO0VDSG5COztFRGtCQTtJQUNFLHlCQUFBO0lBQ0EsMEJBQUE7RUNmRjtBQUNGO0FBZkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFpQkY7QUFmRTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxpQ0FBQTtFQWlCSjtBQUNGO0FBZEU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQWdCSjtBQWRJO0VBQ0UsYUN2Qk87QUR1Q2I7QUFaRTtFQUNFLGtCQUFBO0VBQ0EseUJDNUJJO0VENkJKLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBY0o7QUFWQTtFQUNFO0lBQ0Usc0JBQUE7RUFhRjtFQVhFO0lBQ0UsWUFBQTtFQWFKO0VBVkU7SUFDRSxhQUFBO0lBQ0EsZUFBQTtFQVlKO0FBQ0YiLCJmaWxlIjoiYmFza2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9AdGFyb3B1bXBzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuJG5hdi1ncmV5OiAjZTJlMmUyO1xyXG4kc2VhcmNoLWdyZXk6ICNmMmYyZjI7XHJcbiRoZWFkZXItcGFkZGluZzogMi41cmVtO1xyXG4kaGVhZGVyLXBhZGRpbmctc206IDFyZW07XHJcbiRiYXNlLW5hdi13aWR0aDogNy45ZW07XHJcbiRleHBhbmRlZC1uYXYtd2lkdGg6IDIwZW07XHJcbiRoZWFkZXItaGVpZ2h0OiAxMi40cmVtO1xyXG4kbWVudS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZzogMXJlbSAzLjNyZW07XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmctc206IDFyZW0gMS43cmVtO1xyXG4kY29udGVudC1hcmVhLWNvbG9yOiAjZmZmO1xyXG4kd2FybmluZzogI0VBMDAyOTtcclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5hcHAtaGVhZGVyLFxyXG4gIC5mdW5jdGlvbi1iYXIsXHJcbiAgYXBwLXNlY3Rpb24taGVhZGVyLFxyXG4gIC5tZWRpYS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFwcC1jb250ZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1hcmVhLWNvbG9yO1xyXG4gIH1cclxuICAubWVkaWEtcHJpbnQge1xyXG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgcHJpbnQge1xuICAuYXBwLWhlYWRlcixcbi5mdW5jdGlvbi1iYXIsXG5hcHAtc2VjdGlvbi1oZWFkZXIsXG4ubWVkaWEtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFwcC1jb250ZW50LWFyZWEge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAubWVkaWEtcHJpbnQge1xuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMC45cmVtIDMuM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG59XG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgfVxufVxuYSBzdmcge1xuICB3aWR0aDogMS40cmVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG5hIHN2ZyBnIHtcbiAgZmlsbDogIzQyNDI0NDtcbn1cbmEgLmJhc2tldC1sZW5ndGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2QTk1NUI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBhZGRpbmctdG9wOiAwLjRlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIHJpZ2h0OiAzZW07XG4gIHRvcDogMC41ZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGEge1xuICAgIHBhZGRpbmc6IDAuOXJlbSAxLjhyZW07XG4gIH1cbiAgYSAuYmFza2V0LWxlbmd0aCB7XG4gICAgcmlnaHQ6IDAuN2VtO1xuICB9XG4gIGEgc3ZnIHtcbiAgICB3aWR0aDogMS4ycmVtO1xuICAgIG1hcmdpbjogMC4xZW0gMDtcbiAgfVxufSIsIiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIktvaGlub29yXCIsIFwiT3BlbiBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIFwiR2lsbCBTYW5zXCIsIENvcmJlbCwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRib2R5LWNvbG9yOiAjNDI0MjQ0ICFkZWZhdWx0O1xuJGdyZWVuOiAjNkE5NTVCICFkZWZhdWx0O1xuJGdyZWVuLWZhZGVkOiAjRDFERUNEO1xuJHJlZDogI0ZGNDIyRSAhZGVmYXVsdDtcbiRyZWQtbGlnaHQ6ICNGRkQ5RDUgIWRlZmF1bHQ7XG4kcmVkLWRhcms6ICM5OTQ0NEYgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiA2cHg7XG5cbiRwcmltYXJ5OiAkZ3JlZW47XG5cbiRhbGVydC1ib3JkZXItd2lkdGg6IDA7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogNnB4O1xuJGFsZXJ0LXBhZGRpbmcteDogMS41cmVtO1xuJGFsZXJ0LXBhZGRpbmcteTogMS4ycmVtO1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogIC43NXJlbTtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAzLjc1cmVtO1xuXG4kdG9hc3Qtei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiR0b2FzdC1kdXJhdGlvbjogMzAwMG1zICFkZWZhdWx0O1xuJHRvYXN0LWhlaWdodDogOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1oZWlnaHQtc206IDUuOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1icmVha3BvaW50OiA3NjhweCAhZGVmYXVsdDsiXX0= */"]
      });
      /***/
    },

    /***/
    "/WFp":
    /*!*********************************************************************************!*\
      !*** ./src/app/services/preventive-maintenance/preventive-maintenance.types.ts ***!
      \*********************************************************************************/

    /*! exports provided: PreventiveMaintenanceStatus, PreventiveMaintenance */

    /***/
    function WFp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreventiveMaintenanceStatus", function () {
        return PreventiveMaintenanceStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreventiveMaintenance", function () {
        return PreventiveMaintenance;
      });

      var PreventiveMaintenanceStatus;

      (function (PreventiveMaintenanceStatus) {
        PreventiveMaintenanceStatus[PreventiveMaintenanceStatus["Active"] = 1] = "Active";
        PreventiveMaintenanceStatus[PreventiveMaintenanceStatus["Expired"] = 2] = "Expired";
      })(PreventiveMaintenanceStatus || (PreventiveMaintenanceStatus = {}));

      var PreventiveMaintenance = /*#__PURE__*/_createClass(function PreventiveMaintenance(preventiveMaintenance) {
        _classCallCheck(this, PreventiveMaintenance);

        this.maintenanceAssets = [];

        if (preventiveMaintenance) {
          this.id = preventiveMaintenance.id;
          this.siteId = preventiveMaintenance.siteId;
          this.number = preventiveMaintenance.number;
          this.numberWithPrefix = preventiveMaintenance.numberWithPrefix;
          this.title = preventiveMaintenance.title;
          this.frequency = preventiveMaintenance.frequency;
          this.title = preventiveMaintenance.assetName;
          this.status = preventiveMaintenance.status;
          this.assignedTo = preventiveMaintenance.assignedTo;
          this.startDate = preventiveMaintenance.startDate;
          this.endDate = preventiveMaintenance.endDate;
          this.maintenanceAssets = preventiveMaintenance.maintenanceAssets;
          this.instruction = preventiveMaintenance.instruction;
          this.nextDue = preventiveMaintenance.nextDue;
        }
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\livetesting\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0Pgj":
    /*!***********************************************************************************!*\
      !*** ./src/app/services/preventive-maintenance/preventive-maintenance.service.ts ***!
      \***********************************************************************************/

    /*! exports provided: PreventiveMaintenanceService */

    /***/
    function Pgj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreventiveMaintenanceService", function () {
        return PreventiveMaintenanceService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../authentication/authentication.service */
      "ri4K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PreventiveMaintenanceService = /*#__PURE__*/function () {
        function PreventiveMaintenanceService(http, authenticationService) {
          _classCallCheck(this, PreventiveMaintenanceService);

          this.http = http;
          this.authenticationService = authenticationService;
          this.preventiveMaintenanceUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl, "/preventivemaintenance/scheduler");
        }

        _createClass(PreventiveMaintenanceService, [{
          key: "currentUserProfile",
          get: function get() {
            var userProfile = this.authenticationService.currentUserProfile$.getValue();

            if (userProfile && userProfile.primarySite) {
              return userProfile;
            }

            return null;
          }
        }, {
          key: "getPreventiveMaintenanceList",
          value: function getPreventiveMaintenanceList(args) {
            var siteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentUserProfile.primarySite.id;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.append('offset', args.offset.toString());
            params = params.append('take', args.take.toString());
            params = params.append('searchText', args.searchText.toString());
            params = params.append('includeExpiredSchedule', args.includeExpired.toString());
            return this.http.get("".concat(this.preventiveMaintenanceUrl, "/schedules/").concat(siteId, "?"), {
              params: params
            });
          }
        }, {
          key: "createSchedule",
          value: function createSchedule(args) {
            var createdBy = this.authenticationService.getCurrentUserIdAndName();
            args.siteId = this.currentUserProfile.primarySite.id;
            var body = args;
            return this.http.post("".concat(this.preventiveMaintenanceUrl, "?userId=").concat(createdBy), body);
          }
        }, {
          key: "viewPreventiveMaintenanceDetailForId",
          value: function viewPreventiveMaintenanceDetailForId(preventiveMaintenanceGuId) {
            return this.http.get("".concat(this.preventiveMaintenanceUrl, "/").concat(preventiveMaintenanceGuId));
          }
        }, {
          key: "updatePreventiveMaintenanceDetailForId",
          value: function updatePreventiveMaintenanceDetailForId(preventiveMaintenanceGuId, extendedPreventiveMaintenance) {
            var userId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.authenticationService.getCurrentUserIdAndName();
            return this.http.put("".concat(this.preventiveMaintenanceUrl, "/").concat(preventiveMaintenanceGuId, "/").concat(userId), extendedPreventiveMaintenance);
          }
        }]);

        return PreventiveMaintenanceService;
      }();

      PreventiveMaintenanceService.ɵfac = function PreventiveMaintenanceService_Factory(t) {
        return new (t || PreventiveMaintenanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      PreventiveMaintenanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: PreventiveMaintenanceService,
        factory: PreventiveMaintenanceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "4ShH":
    /*!**************************************!*\
      !*** ./src/utils/observableUtils.ts ***!
      \**************************************/

    /*! exports provided: safelyUnsubscribeFrom, AutoUnsubscribe */

    /***/
    function ShH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "safelyUnsubscribeFrom", function () {
        return safelyUnsubscribeFrom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoUnsubscribe", function () {
        return AutoUnsubscribe;
      });

      var safelyUnsubscribeFrom = function safelyUnsubscribeFrom(subscription) {
        subscription && !subscription.closed && subscription.unsubscribe();
      };

      function AutoUnsubscribe() {
        var subcribeFnList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return function (constructor) {
          var original = constructor.prototype.ngOnDestroy;

          constructor.prototype.ngOnDestroy = function () {
            for (var prop in this) {
              if (this.hasOwnProperty(prop)) {
                var property = this[prop];

                if (!subcribeFnList.includes(prop)) {
                  if (property && typeof property.unsubscribe === 'function') {
                    property.unsubscribe();
                  }
                }
              }
            }

            original && typeof original === 'function' && original.apply(this, arguments);
          };
        };
      }
      /***/

    },

    /***/
    "7v0c":
    /*!*************************************************!*\
      !*** ./src/app/services/basket/basket.types.ts ***!
      \*************************************************/

    /*! exports provided: BasketItem, Basket */

    /***/
    function v0c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketItem", function () {
        return BasketItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Basket", function () {
        return Basket;
      });

      var BasketItem = /*#__PURE__*/_createClass(function BasketItem(item) {
        _classCallCheck(this, BasketItem);

        this.createdByUserId = item.createdByUserId;
        this.createdByUserName = item.createdByUserName;
        this.skuId = item.skuId;
        this.skuDescription = item.skuDescription;
        this.uom = item.uom;
        this.qty = item.qty;
      });

      var Basket = /*#__PURE__*/_createClass(function Basket(basket) {
        _classCallCheck(this, Basket);

        this.siteId = basket.siteId;
        this.items = basket.items.map(function (item) {
          return new BasketItem(item);
        });
        this.lastUpdatedTimestampUtc = basket.lastUpdatedTimestampUtc;
      });
      /***/

    },

    /***/
    "9ZKQ":
    /*!*************************************************!*\
      !*** ./src/app/services/toast/toast.service.ts ***!
      \*************************************************/

    /*! exports provided: ToastType, Toast, ToastService */

    /***/
    function ZKQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastType", function () {
        return ToastType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return Toast;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToastType;

      (function (ToastType) {
        ToastType["Success"] = "success";
        ToastType["Danger"] = "danger";
      })(ToastType || (ToastType = {}));

      var Toast = /*#__PURE__*/_createClass(function Toast(message) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ToastType.Success;

        _classCallCheck(this, Toast);

        this.message = message;
        this.type = type;
      });

      var ToastService = /*#__PURE__*/function () {
        function ToastService() {
          _classCallCheck(this, ToastService);

          this.activeToast = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
          this.toastStack = [];
        }

        _createClass(ToastService, [{
          key: "toastDuration",
          get: function get() {
            return 3500;
          }
        }, {
          key: "showToast",
          value: function showToast(toast) {
            var noActiveToast = this.activeToast.getValue() === null;
            var toastStackEmpty = this.toastStack.length === 0;

            if (noActiveToast && toastStackEmpty) {
              this.setNextToast(toast);
            } else {
              this.toastStack.push(toast);
            }
          }
        }, {
          key: "showErrorToast",
          value: function showErrorToast() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Sorry something went wrong';
            this.showToast(new Toast(message, ToastType.Danger));
          }
        }, {
          key: "setNextToast",
          value: function setNextToast(toast) {
            var _this2 = this;

            this.activeToast.next(toast);
            setTimeout(function () {
              // The toast needs to be set to null briefly so that the CSS
              // animation is triggered by the toast being removed and added
              // back to the DOM
              _this2.activeToast.next(null);

              setTimeout(function () {
                return _this2.loadNextToastFromStack();
              }, 50);
            }, this.toastDuration);
          }
        }, {
          key: "loadNextToastFromStack",
          value: function loadNextToastFromStack() {
            if (this.toastStack.length > 0) {
              var nextToast = this.toastStack.shift();
              this.setNextToast(nextToast);
            }
          }
        }]);

        return ToastService;
      }();

      ToastService.ɵfac = function ToastService_Factory(t) {
        return new (t || ToastService)();
      };

      ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ToastService,
        factory: ToastService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        uiBaseUrl: 'http://localhost:5010',
        production: false,
        apiBaseUrl: 'https://dev-upkeep-api.texmocastings.com'
      };
      /***/
    },

    /***/
    "CAFG":
    /*!************************************!*\
      !*** ./src/app/dashboard/index.ts ***!
      \************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function CAFG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.component */
      "QX6l");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"];
      });
      /***/

    },

    /***/
    "D7Wi":
    /*!*************************************************!*\
      !*** ./src/app/services/asset/asset.service.ts ***!
      \*************************************************/

    /*! exports provided: AssetService */

    /***/
    function D7Wi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetService", function () {
        return AssetService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../authentication/authentication.service */
      "ri4K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssetService = /*#__PURE__*/function () {
        function AssetService(httpClient, authenticationService) {
          _classCallCheck(this, AssetService);

          this.httpClient = httpClient;
          this.authenticationService = authenticationService;
          this.assetUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl, "/asset");
        }

        _createClass(AssetService, [{
          key: "primarySiteId",
          get: function get() {
            var userProfile = this.authenticationService.currentUserProfile$.getValue();

            if (userProfile && userProfile.primarySite) {
              return userProfile.primarySite.id;
            }

            return null;
          }
        }, {
          key: "listAssets",
          value: function listAssets(args) {
            var siteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.primarySiteId;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.append('offset', args.offset.toString());
            params = params.append('take', args.take.toString());
            params = params.append('text', args.text.toString());
            params = params.append('siteId', siteId);
            return this.httpClient.get("".concat(this.assetUrl), {
              params: params
            });
          }
        }, {
          key: "viewAssetForId",
          value: function viewAssetForId(Id) {
            return this.httpClient.get("".concat(this.assetUrl, "/").concat(Id));
          }
        }, {
          key: "updateAssetForId",
          value: function updateAssetForId(updateAsset) {
            return this.httpClient.put("".concat(this.assetUrl), updateAsset);
          }
        }, {
          key: "getAssetGroup",
          value: function getAssetGroup(text) {
            return this.httpClient.get("".concat(this.assetUrl, "/AssetGroupAndSubGroups?Text=").concat(text));
          }
        }]);

        return AssetService;
      }();

      AssetService.ɵfac = function AssetService_Factory(t) {
        return new (t || AssetService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      AssetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: AssetService,
        factory: AssetService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "FkPY":
    /*!*******************************************!*\
      !*** ./src/app/guards/jwt.interceptor.ts ***!
      \*******************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function FkPY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../environments/environment */
      "AytR");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services */
      "o0su");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authenticationService) {
          _classCallCheck(this, JwtInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add auth header with jwt if user is logged in and request is to the api url
            var user = this.authenticationService.userValue;
            var isLoggedIn = user && user.userId;
            var Api_Key = '418413972367e5976207eeb05530ec52213d3b0a0bfcb55001fa00eb0f1c4225';
            var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl);

            if (isLoggedIn && isApiUrl) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(user.userId),
                  Api_Key: Api_Key
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "FmHE":
    /*!***************************************!*\
      !*** ./src/app/DependencyResolver.ts ***!
      \***************************************/

    /*! exports provided: DependencyResolver */

    /***/
    function FmHE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DependencyResolver", function () {
        return DependencyResolver;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services */
      "o0su");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DependencyResolver = /*#__PURE__*/function () {
        function DependencyResolver(userProfileService) {
          _classCallCheck(this, DependencyResolver);

          this.userProfileService = userProfileService;
        }

        _createClass(DependencyResolver, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this3 = this;

            return new Promise(function (resolve) {
              var interval = setInterval(function (_) {
                if (_this3.userProfileService.currentUserProfile$.value !== null) {
                  clearInterval(interval);
                  return resolve(true);
                }
              }, 100);
            });
          }
        }]);

        return DependencyResolver;
      }();

      DependencyResolver.ɵfac = function DependencyResolver_Factory(t) {
        return new (t || DependencyResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      DependencyResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: DependencyResolver,
        factory: DependencyResolver.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Hh11":
    /*!***********************************************************!*\
      !*** ./src/app/services/check-lists/check-lists.types.ts ***!
      \***********************************************************/

    /*! exports provided: CheckListStatus, CheckList */

    /***/
    function Hh11(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckListStatus", function () {
        return CheckListStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckList", function () {
        return CheckList;
      });

      var CheckListStatus;

      (function (CheckListStatus) {
        CheckListStatus[CheckListStatus["Active"] = 1] = "Active";
        CheckListStatus[CheckListStatus["Obsolete"] = 2] = "Obsolete";
      })(CheckListStatus || (CheckListStatus = {}));

      var CheckList = /*#__PURE__*/_createClass(function CheckList(checkList, task) {
        _classCallCheck(this, CheckList);

        if (checkList) {
          this.id = checkList.id;
          this.number = checkList.number;
          this.numberWithPrefix = checkList.numberWithPrefix;
          this.name = checkList.name;
          this.task = task;
          this.status = checkList.status;
        }
      });
      /***/

    },

    /***/
    "IFMO":
    /*!******************************************************!*\
      !*** ./src/app/services/user-account/permissions.ts ***!
      \******************************************************/

    /*! exports provided: AssetsPermissions, SparesPermissions, WorkOrdersPermissions, PreventiveMaintenancePermissions, CheckListPermissions, PermissionGroup, permissionGroupToPermissionSet, emptyPermissionSet, Role, roleString, hasPermission, profileHasPermission */

    /***/
    function IFMO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _permissionGroupToPer, _emptyPermissionSet;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetsPermissions", function () {
        return AssetsPermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SparesPermissions", function () {
        return SparesPermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkOrdersPermissions", function () {
        return WorkOrdersPermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreventiveMaintenancePermissions", function () {
        return PreventiveMaintenancePermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckListPermissions", function () {
        return CheckListPermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionGroup", function () {
        return PermissionGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "permissionGroupToPermissionSet", function () {
        return permissionGroupToPermissionSet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "emptyPermissionSet", function () {
        return emptyPermissionSet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return Role;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "roleString", function () {
        return roleString;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasPermission", function () {
        return hasPermission;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "profileHasPermission", function () {
        return profileHasPermission;
      });
      /* harmony import */


      var lodash_es_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash-es/words */
      "hoZp");

      var AssetsPermissions;

      (function (AssetsPermissions) {
        AssetsPermissions[AssetsPermissions["None"] = 0] = "None";
        AssetsPermissions[AssetsPermissions["CanViewAssetsList"] = 1] = "CanViewAssetsList";
        AssetsPermissions[AssetsPermissions["CanViewAssetDetails"] = 2] = "CanViewAssetDetails";
        AssetsPermissions[AssetsPermissions["CanModifyAssetDetails"] = 4] = "CanModifyAssetDetails";
      })(AssetsPermissions || (AssetsPermissions = {}));

      var SparesPermissions;

      (function (SparesPermissions) {
        SparesPermissions[SparesPermissions["None"] = 0] = "None";
        SparesPermissions[SparesPermissions["CanViewStockList"] = 1] = "CanViewStockList";
        SparesPermissions[SparesPermissions["CanViewBasket"] = 2] = "CanViewBasket";
        SparesPermissions[SparesPermissions["CanAddToBasket"] = 4] = "CanAddToBasket";
        SparesPermissions[SparesPermissions["CanModifyBasket"] = 8] = "CanModifyBasket";
        SparesPermissions[SparesPermissions["CanViewOrderHistory"] = 16] = "CanViewOrderHistory";
        SparesPermissions[SparesPermissions["CanPlaceOrder"] = 32] = "CanPlaceOrder";
        SparesPermissions[SparesPermissions["CanManageOrder"] = 64] = "CanManageOrder";
        SparesPermissions[SparesPermissions["CanTransferStock"] = 128] = "CanTransferStock";
      })(SparesPermissions || (SparesPermissions = {}));

      var WorkOrdersPermissions;

      (function (WorkOrdersPermissions) {
        WorkOrdersPermissions[WorkOrdersPermissions["None"] = 0] = "None";
        WorkOrdersPermissions[WorkOrdersPermissions["CanViewWorkOrders"] = 1] = "CanViewWorkOrders";
        WorkOrdersPermissions[WorkOrdersPermissions["CanViewOrderHistory"] = 2] = "CanViewOrderHistory";
        WorkOrdersPermissions[WorkOrdersPermissions["CanEditWorkOrder"] = 4] = "CanEditWorkOrder";
        WorkOrdersPermissions[WorkOrdersPermissions["CanCreateWorkOrder"] = 8] = "CanCreateWorkOrder";
      })(WorkOrdersPermissions || (WorkOrdersPermissions = {}));

      var PreventiveMaintenancePermissions;

      (function (PreventiveMaintenancePermissions) {
        PreventiveMaintenancePermissions[PreventiveMaintenancePermissions["None"] = 0] = "None";
        PreventiveMaintenancePermissions[PreventiveMaintenancePermissions["CanViewPreventiveMaintenance"] = 1] = "CanViewPreventiveMaintenance";
        PreventiveMaintenancePermissions[PreventiveMaintenancePermissions["CanEditPreventiveMaintenance"] = 2] = "CanEditPreventiveMaintenance";
        PreventiveMaintenancePermissions[PreventiveMaintenancePermissions["CanCreatePreventiveMaintenance"] = 4] = "CanCreatePreventiveMaintenance";
      })(PreventiveMaintenancePermissions || (PreventiveMaintenancePermissions = {}));

      var CheckListPermissions;

      (function (CheckListPermissions) {
        CheckListPermissions[CheckListPermissions["None"] = 0] = "None";
        CheckListPermissions[CheckListPermissions["CanViewCheckList"] = 1] = "CanViewCheckList";
        CheckListPermissions[CheckListPermissions["CanEditCheckList"] = 2] = "CanEditCheckList";
        CheckListPermissions[CheckListPermissions["CanCreateCheckList"] = 4] = "CanCreateCheckList";
      })(CheckListPermissions || (CheckListPermissions = {}));

      var PermissionGroup;

      (function (PermissionGroup) {
        PermissionGroup["Assets"] = "assetsPermissions";
        PermissionGroup["Spares"] = "sparesPermissions";
        PermissionGroup["WorkOrders"] = "workOrdersPermissions";
        PermissionGroup["PreventiveMaintenance"] = "preventiveMaintenancePermissions";
        PermissionGroup["CheckList"] = "checkListPermissions";
      })(PermissionGroup || (PermissionGroup = {}));

      var permissionGroupToPermissionSet = (_permissionGroupToPer = {}, _defineProperty(_permissionGroupToPer, PermissionGroup.Assets, AssetsPermissions), _defineProperty(_permissionGroupToPer, PermissionGroup.Spares, SparesPermissions), _defineProperty(_permissionGroupToPer, PermissionGroup.WorkOrders, WorkOrdersPermissions), _defineProperty(_permissionGroupToPer, PermissionGroup.PreventiveMaintenance, PreventiveMaintenancePermissions), _defineProperty(_permissionGroupToPer, PermissionGroup.CheckList, CheckListPermissions), _permissionGroupToPer);
      var emptyPermissionSet = (_emptyPermissionSet = {}, _defineProperty(_emptyPermissionSet, PermissionGroup.Assets, 0), _defineProperty(_emptyPermissionSet, PermissionGroup.Spares, 0), _defineProperty(_emptyPermissionSet, PermissionGroup.WorkOrders, 0), _defineProperty(_emptyPermissionSet, PermissionGroup.PreventiveMaintenance, 0), _defineProperty(_emptyPermissionSet, PermissionGroup.CheckList, 0), _emptyPermissionSet);
      var Role;

      (function (Role) {
        Role["None"] = "NA";
        Role["Manager"] = "upkeep_manager";
        Role["Technician"] = "upkeep_technician";
        Role["Reviewer"] = "upkeep_reviewer";
      })(Role || (Role = {}));

      function roleString(role) {
        var roleWords = Object(lodash_es_words__WEBPACK_IMPORTED_MODULE_0__["default"])(Role[role]);
        return roleWords.slice(1).join(' ');
      }

      function hasPermission(permission, permissionSubSet) {
        return (permissionSubSet & permission) === permission;
      }

      function profileHasPermission(user, requiredPermissions) {
        var userPermissionSet = {
          assetsPermissions: user.userRole.permission.findIndex(function (module) {
            return module.moduleName === 'Assets';
          }) > -1 ? user.userRole.permission[user.userRole.permission.findIndex(function (module) {
            return module.moduleName === 'Assets';
          })].permissionValue : 0,
          sparesPermissions: user.userRole.permission.findIndex(function (module) {
            return module.moduleName === 'Spares';
          }) > -1 ? user.userRole.permission[user.userRole.permission.findIndex(function (module) {
            return module.moduleName === 'Spares';
          })].permissionValue : 0,
          workOrdersPermissions: user.userRole.permission.findIndex(function (module) {
            return module.moduleName === 'WorkOrders';
          }) > -1 ? user.userRole.permission[user.userRole.permission.findIndex(function (module) {
            return module.moduleName === 'WorkOrders';
          })].permissionValue : 0,
          preventiveMaintenancePermissions: user.userRole.permission.findIndex(function (module) {
            return module.moduleName === 'PreventiveMaintenance';
          }) > -1 ? user.userRole.permission[user.userRole.permission.findIndex(function (module) {
            return module.moduleName === 'PreventiveMaintenance';
          })].permissionValue : 0,
          checkListPermissions: user.userRole.permission.findIndex(function (module) {
            return module.moduleName === 'CheckList';
          }) > -1 ? user.userRole.permission[user.userRole.permission.findIndex(function (module) {
            return module.moduleName === 'CheckList';
          })].permissionValue : 0
        };

        for (var permissionGroup in requiredPermissions) {
          var _iterator = _createForOfIteratorHelper(requiredPermissions[permissionGroup]),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var permission = _step.value;

              if (!hasPermission(permission, userPermissionSet[permissionGroup])) {
                return false;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return true;
      }
      /***/

    },

    /***/
    "JSbE":
    /*!***********************************************!*\
      !*** ./src/app/services/asset/asset.types.ts ***!
      \***********************************************/

    /*! exports provided: AssetType, Phase, IAssetStatus, Asset, Group, SubGroup, ExtendedAsset, AssetGroupAndSubGroup */

    /***/
    function JSbE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetType", function () {
        return AssetType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Phase", function () {
        return Phase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IAssetStatus", function () {
        return IAssetStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Asset", function () {
        return Asset;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Group", function () {
        return Group;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubGroup", function () {
        return SubGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtendedAsset", function () {
        return ExtendedAsset;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetGroupAndSubGroup", function () {
        return AssetGroupAndSubGroup;
      });

      var AssetType;

      (function (AssetType) {
        AssetType["Critical"] = "2";
        AssetType["Major"] = "3";
      })(AssetType || (AssetType = {}));

      var Phase;

      (function (Phase) {
        Phase["Single"] = "1";
        Phase["Three"] = "3";
      })(Phase || (Phase = {}));

      var IAssetStatus;

      (function (IAssetStatus) {
        IAssetStatus[IAssetStatus["Active"] = 0] = "Active";
        IAssetStatus[IAssetStatus["Obsolete"] = 1] = "Obsolete";
      })(IAssetStatus || (IAssetStatus = {}));

      var Asset = /*#__PURE__*/_createClass(function Asset(asset) {
        _classCallCheck(this, Asset);

        if (asset) {
          this.id = asset.id;
          this.assetId = asset.assetId;
          this.assetCode = asset.assetCode;
          this.name = asset.name;
          this.description = asset.description;
          this.statusId = asset.statusId;
          this.location = asset.location;
        }
      });

      var Group = /*#__PURE__*/_createClass(function Group(group) {
        _classCallCheck(this, Group);

        if (group) {
          this.id = group.id;
          this.name = group.name;
        }
      });

      var SubGroup = /*#__PURE__*/_createClass(function SubGroup(subGroup) {
        _classCallCheck(this, SubGroup);

        if (subGroup) {
          this.id = subGroup.id;
          this.name = subGroup.name;
        }
      });

      var ExtendedAsset = /*#__PURE__*/_createClass(function ExtendedAsset(iExtendedAsset) {
        _classCallCheck(this, ExtendedAsset);

        if (iExtendedAsset) {
          this.id = iExtendedAsset.id;
          this.assetId = iExtendedAsset.assetId;
          this.assetCode = iExtendedAsset.assetCode;
          this.name = iExtendedAsset.name;
          this.description = iExtendedAsset.description;
          this.supplier = iExtendedAsset.supplier;
          this.location = iExtendedAsset.location;
          this.nextMaintenanceDate = iExtendedAsset.nextMaintenanceDate;
          this.model = iExtendedAsset.model;
          this.manufacturer = iExtendedAsset.manufacturer;
          this.assetGroup = iExtendedAsset.assetGroup;
          this.assetSubGroup = iExtendedAsset.assetSubGroup;
          this.assetType = iExtendedAsset.assetType;
          this.kw = iExtendedAsset.kw;
          this.volts = iExtendedAsset.volts;
          this.phase = iExtendedAsset.phase;
          this.loadFactor = iExtendedAsset.loadFactor;
          this.specifications = iExtendedAsset.specifications;
          this.vendorId = iExtendedAsset.vendorId;
          this.frequencyDays = iExtendedAsset.frequencyDays;
          this.validFromDate = iExtendedAsset.validFromDate;
          this.validToDate = iExtendedAsset.validToDate;
          this.attachedFiles = iExtendedAsset.attachedFiles;
        }
      });

      var AssetGroupAndSubGroup = /*#__PURE__*/_createClass(function AssetGroupAndSubGroup() {
        _classCallCheck(this, AssetGroupAndSubGroup);
      });
      /***/

    },

    /***/
    "KP8F":
    /*!*********************************************************!*\
      !*** ./src/app/services/workorder/workorder.service.ts ***!
      \*********************************************************/

    /*! exports provided: WorkordersService */

    /***/
    function KP8F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkordersService", function () {
        return WorkordersService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../authentication/authentication.service */
      "ri4K");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WorkordersService = /*#__PURE__*/function () {
        function WorkordersService(httpClient, authenticationService) {
          _classCallCheck(this, WorkordersService);

          this.httpClient = httpClient;
          this.authenticationService = authenticationService;
          this.workOrderURL = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl, "/work-order");
        }

        _createClass(WorkordersService, [{
          key: "currentUserProfile",
          get: function get() {
            var userProfile = this.authenticationService.currentUserProfile$.getValue();

            if (userProfile && userProfile.primarySite) {
              return userProfile;
            }

            return null;
          }
        }, {
          key: "listWorkorders",
          value: function listWorkorders(args) {
            var siteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentUserProfile.primarySite.id;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.append('offset', args.offset.toString());
            params = params.append('take', args.take.toString());
            params = params.append('searchText', args.text.toString());
            return this.httpClient.get("".concat(this.workOrderURL, "/").concat(siteId, "?"), {
              params: params
            });
          }
        }, {
          key: "viewWorkOrderForId",
          value: function viewWorkOrderForId(workOrderId) {
            var siteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentUserProfile.primarySite.id;
            return this.httpClient.get("".concat(this.workOrderURL, "/").concat(siteId, "/").concat(workOrderId));
          }
        }, {
          key: "updateWorkOrderForId",
          value: function updateWorkOrderForId(workOrderGuId, extendedWorkOrder) {
            var userId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.authenticationService.getCurrentUserIdAndName();
            var userProfile = this.authenticationService.currentUserProfile$.getValue();
            var body = {
              id: extendedWorkOrder.id,
              number: extendedWorkOrder.number,
              siteId: extendedWorkOrder.siteId,
              dueDate: extendedWorkOrder.dueDate,
              status: Number(extendedWorkOrder.status),
              assignedToUser: extendedWorkOrder.assignedToUser,
              createdTimestampUtc: extendedWorkOrder.createdTimestampUtc,
              lastUpdatedTimestampUtc: extendedWorkOrder.lastUpdatedTimestampUtc,
              title: extendedWorkOrder.title,
              description: extendedWorkOrder.description,
              reportedOn: extendedWorkOrder.reportedOn,
              priorityId: extendedWorkOrder.priority,
              categoryId: extendedWorkOrder.category.id,
              serviceDetails: extendedWorkOrder.serviceDetails,
              workOrderAssets: extendedWorkOrder.workOrderAssets,
              workOrderCheckLists: extendedWorkOrder.workOrderChecklists,
              UpdatedBy: userProfile
            };
            return this.httpClient.put("".concat(this.workOrderURL, "/").concat(workOrderGuId, "/").concat(userId), body);
          }
        }, {
          key: "viewWorkOrderServiceDetailForId",
          value: function viewWorkOrderServiceDetailForId(workOrderNumber) {
            var siteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentUserProfile.primarySite.id;
            return this.httpClient.get("".concat(this.workOrderURL, "/servicedetail/").concat(siteId, "/").concat(workOrderNumber));
          }
        }, {
          key: "updateWorkOrderService",
          value: function updateWorkOrderService(workOrderServiceDetail) {
            return this.httpClient.patch("".concat(this.workOrderURL, "/servicedetail/").concat(workOrderServiceDetail.id), workOrderServiceDetail);
          }
        }, {
          key: "getWorkOrderSpares",
          value: function getWorkOrderSpares(workOrderNumber) {
            var siteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentUserProfile.primarySite.id;
            var getSpareUrl = "".concat(this.workOrderURL, "/spares/Site/").concat(siteId);
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.append('workOrderNumber', workOrderNumber);
            return this.httpClient.get("".concat(getSpareUrl), {
              params: params
            });
          }
        }, {
          key: "updateWorkOrderSpares",
          value: function updateWorkOrderSpares(workOrderSpares) {
            var userId = this.authenticationService.getCurrentUserIdAndName();
            var getSpareUrl = "".concat(this.workOrderURL, "/spares/").concat(userId);
            return this.httpClient.post("".concat(getSpareUrl), workOrderSpares);
          }
        }, {
          key: "listWorkOrderCategory",
          value: function listWorkOrderCategory() {
            return this.httpClient.get("".concat(this.workOrderURL, "/categories"));
          }
        }, {
          key: "createWorkOrder",
          value: function createWorkOrder(args) {
            args.createdBy = this.authenticationService.getCurrentUserIdAndName();
            args.siteId = this.currentUserProfile.primarySite.id;
            var body = args;
            return this.httpClient.post("".concat(this.workOrderURL), body);
          }
        }, {
          key: "getWorkorderCSV",
          value: function getWorkorderCSV() {
            var siteId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentUserProfile.primarySite.id;
            var options = {
              responseType: 'text'
            };
            return this.httpClient.get("".concat(this.workOrderURL, "/exportcsv/").concat(siteId), options);
          }
        }]);

        return WorkordersService;
      }();

      WorkordersService.ɵfac = function WorkordersService_Factory(t) {
        return new (t || WorkordersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      WorkordersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: WorkordersService,
        factory: WorkordersService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "LeoI":
    /*!**************************************************************************!*\
      !*** ./src/app/header/function-bar/user-flyout/user-flyout.component.ts ***!
      \**************************************************************************/

    /*! exports provided: UserFlyoutComponent */

    /***/
    function LeoI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserFlyoutComponent", function () {
        return UserFlyoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services */
      "o0su");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UserFlyoutComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserFlyoutComponent_a_10_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.handleConfirmSignOut(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var UserFlyoutComponent = /*#__PURE__*/function () {
        function UserFlyoutComponent(elementRef, changeDetectorRef, authentication) {
          var _this4 = this;

          _classCallCheck(this, UserFlyoutComponent);

          this.elementRef = elementRef;
          this.changeDetectorRef = changeDetectorRef;
          this.authentication = authentication;
          this.userFlyoutOpen = false;
          this.isSignedIn = false;
          this.isConfirmingSignOut = false;
          this.authentication.user.subscribe(function (data) {
            _this4.isSignedIn = data ? true : false;
            _this4.userProfile = data;

            _this4.changeDetectorRef.markForCheck();
          });
        }

        _createClass(UserFlyoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleConfirmSignOut",
          value: function handleConfirmSignOut(isConfirmed) {
            this.isConfirmingSignOut = false;

            if (isConfirmed) {
              this.authentication.logout();
            }
          }
        }, {
          key: "closeFlyout",
          value: function closeFlyout() {
            this.userFlyoutOpen = false;
          }
          /**
           * Toggle the userFlyout state
           */

        }, {
          key: "onUserFlyoutClick",
          value: function onUserFlyoutClick() {
            this.userFlyoutOpen = !this.userFlyoutOpen;
          }
          /**
           * Close the flyout when a click occurs outside of it
           */

        }, {
          key: "onDocumentClick",
          value: function onDocumentClick(e) {
            if (!this.elementRef.nativeElement.contains(e.target)) {
              this.userFlyoutOpen = false;
            }
          }
        }]);

        return UserFlyoutComponent;
      }();

      UserFlyoutComponent.ɵfac = function UserFlyoutComponent_Factory(t) {
        return new (t || UserFlyoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      UserFlyoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserFlyoutComponent,
        selectors: [["app-user-flyout"]],
        hostBindings: function UserFlyoutComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserFlyoutComponent_click_HostBindingHandler($event) {
              return ctx.onDocumentClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 11,
        vars: 2,
        consts: [[1, "user-flyout", 3, "ngClass"], [1, "btn-user-flyout", "col-md-2", "col-4"], [1, "user-flyout-toggle", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 17.717 19.031"], ["id", "Group_453", "data-name", "Group 453", "transform", "translate(0.002)"], ["id", "Group_227", "data-name", "Group 227", "transform", "translate(4.309 0)"], ["id", "Ellipse_163", "data-name", "Ellipse 163", "cx", "4.429", "cy", "4.429", "r", "4.429", 1, "cls-14"], ["id", "Group_228", "data-name", "Group 228", "transform", "translate(-0.002 10.174)"], ["id", "Path_308", "data-name", "Path 308", "d", "M17.715,17.357c0-4.907-.239-8.857-8.857-8.857C-.359,8.5,0,12.45,0,17.357Z", "transform", "translate(0.002 -8.5)", 1, "cls-14"], [3, "click", 4, "ngIf"], [3, "click"]],
        template: function UserFlyoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserFlyoutComponent_Template_button_click_2_listener() {
              return ctx.onUserFlyoutClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserFlyoutComponent_a_10_Template, 2, 0, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.userFlyoutOpen ? "open" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignedIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n.user-flyout-toggle[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-width: 1px 0;\n  background-color: #f2f2f2;\n  transition: all 0.2 ease-in-out;\n  line-height: 0;\n  padding: 1rem 3.3rem;\n}\n@media (hover: hover) {\n  [_ngcontent-%COMP%]:not(.open)   .user-flyout-toggle[_ngcontent-%COMP%]:hover {\n    background: #fbfbfb;\n    border-color: rgba(0, 0, 0, 0.07);\n  }\n}\n.user-flyout-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: auto;\n}\n.user-flyout-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .user-flyout-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: #424244;\n}\n.user-flyout.open[_ngcontent-%COMP%]   .user-flyout-toggle[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n.user-flyout.open[_ngcontent-%COMP%]   .user-flyout-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .user-flyout.open[_ngcontent-%COMP%]   .user-flyout-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: white;\n}\n@media screen and (max-width: 768px) {\n  .user-flyout-toggle[_ngcontent-%COMP%] {\n    padding: 1rem 1.7rem;\n  }\n  .user-flyout-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.05em;\n  }\n}\n.user-flyout[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 100;\n}\n.user-flyout[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  transform: scale(0);\n  opacity: 0;\n  transform-origin: right top;\n  transition: all 0.1s ease-out;\n  background-color: #ccc;\n  padding: 2rem;\n  width: 15rem;\n  text-align: center;\n}\n.user-flyout[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1rem;\n  color: #424244;\n}\n.user-flyout[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.user-flyout.open[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  top: 100%;\n  transform: scale(1);\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXF9nbG9iYWx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1mbHlvdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEB0YXJvcHVtcHNcXGJvb3RzdHJhcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFOzs7O0lBSUUsd0JBQUE7RUNqQkY7O0VEbUJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFiaUI7RUNIbkI7O0VEa0JBO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQ2ZGO0FBQ0Y7QUFmQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CREk0QjtBQ2E5QjtBQWZFO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGlDQUFBO0VBaUJKO0FBQ0Y7QUFkRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBZ0JKO0FBZEk7RUFDRSxhQ3BCTztBRG9DYjtBQVpFO0VBQ0Usc0JBQUE7QUFjSjtBQVpNO0VBQ0UsV0FBQTtBQWNSO0FBVEU7RUFqQ0Y7SUFrQ0ksb0JEdkI2QjtFQ21DL0I7RUFWRTtJQUNFLGFBQUE7RUFZSjtBQUNGO0FBUkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFXRjtBQVRFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFXSjtBQVZJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0M3RE87QUR5RWI7QUFWTTtFQUNFLGdCQUFBO0FBWVI7QUFQRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFTSiIsImZpbGUiOiJ1c2VyLWZseW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvQHRhcm9wdW1wcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbiRuYXYtZ3JleTogI2UyZTJlMjtcclxuJHNlYXJjaC1ncmV5OiAjZjJmMmYyO1xyXG4kaGVhZGVyLXBhZGRpbmc6IDIuNXJlbTtcclxuJGhlYWRlci1wYWRkaW5nLXNtOiAxcmVtO1xyXG4kYmFzZS1uYXYtd2lkdGg6IDcuOWVtO1xyXG4kZXhwYW5kZWQtbmF2LXdpZHRoOiAyMGVtO1xyXG4kaGVhZGVyLWhlaWdodDogMTIuNHJlbTtcclxuJG1lbnUtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmc6IDFyZW0gMy4zcmVtO1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nLXNtOiAxcmVtIDEuN3JlbTtcclxuJGNvbnRlbnQtYXJlYS1jb2xvcjogI2ZmZjtcclxuJHdhcm5pbmc6ICNFQTAwMjk7XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAuYXBwLWhlYWRlcixcclxuICAuZnVuY3Rpb24tYmFyLFxyXG4gIGFwcC1zZWN0aW9uLWhlYWRlcixcclxuICAubWVkaWEtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hcHAtY29udGVudC1hcmVhIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRlbnQtYXJlYS1jb2xvcjtcclxuICB9XHJcbiAgLm1lZGlhLXByaW50IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIHByaW50IHtcbiAgLmFwcC1oZWFkZXIsXG4uZnVuY3Rpb24tYmFyLFxuYXBwLXNlY3Rpb24taGVhZGVyLFxuLm1lZGlhLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcHAtY29udGVudC1hcmVhIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLm1lZGlhLXByaW50IHtcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG4udXNlci1mbHlvdXQtdG9nZ2xlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjIgZWFzZS1pbi1vdXQ7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAxcmVtIDMuM3JlbTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gIDpub3QoLm9wZW4pIC51c2VyLWZseW91dC10b2dnbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICB9XG59XG4udXNlci1mbHlvdXQtdG9nZ2xlIHN2ZyB7XG4gIHdpZHRoOiAxLjJyZW07XG4gIGhlaWdodDogYXV0bztcbn1cbi51c2VyLWZseW91dC10b2dnbGUgc3ZnIHBhdGgsIC51c2VyLWZseW91dC10b2dnbGUgc3ZnIGNpcmNsZSB7XG4gIGZpbGw6ICM0MjQyNDQ7XG59XG4udXNlci1mbHlvdXQub3BlbiAudXNlci1mbHlvdXQtdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cbi51c2VyLWZseW91dC5vcGVuIC51c2VyLWZseW91dC10b2dnbGUgc3ZnIHBhdGgsIC51c2VyLWZseW91dC5vcGVuIC51c2VyLWZseW91dC10b2dnbGUgc3ZnIGNpcmNsZSB7XG4gIGZpbGw6IHdoaXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnVzZXItZmx5b3V0LXRvZ2dsZSB7XG4gICAgcGFkZGluZzogMXJlbSAxLjdyZW07XG4gIH1cbiAgLnVzZXItZmx5b3V0LXRvZ2dsZSBzdmcge1xuICAgIHdpZHRoOiAxLjA1ZW07XG4gIH1cbn1cblxuLnVzZXItZmx5b3V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG59XG4udXNlci1mbHlvdXQgbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBwYWRkaW5nOiAycmVtO1xuICB3aWR0aDogMTVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyLWZseW91dCBuYXYgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogIzQyNDI0NDtcbn1cbi51c2VyLWZseW91dCBuYXYgYTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi51c2VyLWZseW91dC5vcGVuIG5hdiB7XG4gIHRvcDogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn0iLCIkZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJLb2hpbm9vclwiLCBcIk9wZW4gU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBcIkdpbGwgU2Fuc1wiLCBDb3JiZWwsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kYm9keS1jb2xvcjogIzQyNDI0NCAhZGVmYXVsdDtcbiRncmVlbjogIzZBOTU1QiAhZGVmYXVsdDtcbiRncmVlbi1mYWRlZDogI0QxREVDRDtcbiRyZWQ6ICNGRjQyMkUgIWRlZmF1bHQ7XG4kcmVkLWxpZ2h0OiAjRkZEOUQ1ICFkZWZhdWx0O1xuJHJlZC1kYXJrOiAjOTk0NDRGICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogNnB4O1xuXG4kcHJpbWFyeTogJGdyZWVuO1xuXG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAwO1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6IDZweDtcbiRhbGVydC1wYWRkaW5nLXg6IDEuNXJlbTtcbiRhbGVydC1wYWRkaW5nLXk6IDEuMnJlbTtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAuNzVyZW07XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMy43NXJlbTtcblxuJHRvYXN0LXotaW5kZXg6IDEwMDAgIWRlZmF1bHQ7XG4kdG9hc3QtZHVyYXRpb246IDMwMDBtcyAhZGVmYXVsdDtcbiR0b2FzdC1oZWlnaHQ6IDhyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtaGVpZ2h0LXNtOiA1LjhyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYnJlYWtwb2ludDogNzY4cHggIWRlZmF1bHQ7Il19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "NWDC":
    /*!*******************************************************!*\
      !*** ./src/app/services/workorder/workorder.types.ts ***!
      \*******************************************************/

    /*! exports provided: Workorder, WorkorderStatus, WorkOrderPriority, WorkOrderCheckList */

    /***/
    function NWDC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Workorder", function () {
        return Workorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkorderStatus", function () {
        return WorkorderStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkOrderPriority", function () {
        return WorkOrderPriority;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkOrderCheckList", function () {
        return WorkOrderCheckList;
      });

      var Workorder = /*#__PURE__*/_createClass(function Workorder(workorder) {
        _classCallCheck(this, Workorder);

        if (workorder) {
          this.id = workorder.id;
          this.number = workorder.number;
          this.title = workorder.title;
          this.dueDate = workorder.dueDate;
          this.status = workorder.status;
          this.assignedToUser = workorder.assignedToUser;
          this.createdTimestampUtc = workorder.createdTimestampUtc;
          this.lastUpdatedTimestampUtc = workorder.lastUpdatedTimestampUtc;
        }
      });

      var WorkorderStatus;

      (function (WorkorderStatus) {
        WorkorderStatus[WorkorderStatus["Open"] = 1] = "Open";
        WorkorderStatus[WorkorderStatus["In-progress"] = 2] = "In-progress";
        WorkorderStatus[WorkorderStatus["Complete"] = 3] = "Complete";
        WorkorderStatus[WorkorderStatus["Closed"] = 4] = "Closed";
      })(WorkorderStatus || (WorkorderStatus = {}));

      var WorkOrderPriority;

      (function (WorkOrderPriority) {
        WorkOrderPriority[WorkOrderPriority["Critical"] = 1] = "Critical";
        WorkOrderPriority[WorkOrderPriority["Major"] = 2] = "Major";
        WorkOrderPriority[WorkOrderPriority["Minor"] = 3] = "Minor";
      })(WorkOrderPriority || (WorkOrderPriority = {}));

      var WorkOrderCheckList = /*#__PURE__*/_createClass(function WorkOrderCheckList(checkList, task) {
        _classCallCheck(this, WorkOrderCheckList);

        if (checkList) {
          this.id = checkList.id;
          this.number = checkList.number;
          this.numberWithPrefix = checkList.numberWithPrefix;
          this.name = checkList.name;
          this.task = task;
          this.status = checkList.status;
        }
      });
      /***/

    },

    /***/
    "O5Kl":
    /*!*************************************************************!*\
      !*** ./src/app/services/check-lists/check-lists.service.ts ***!
      \*************************************************************/

    /*! exports provided: CheckListsService */

    /***/
    function O5Kl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckListsService", function () {
        return CheckListsService;
      });
      /* harmony import */


      var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../authentication/authentication.service */
      "ri4K");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CheckListsService = /*#__PURE__*/function () {
        function CheckListsService(http, authenticationService) {
          _classCallCheck(this, CheckListsService);

          this.http = http;
          this.authenticationService = authenticationService;
          this.checkListUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl, "/check-list");
        }

        _createClass(CheckListsService, [{
          key: "currentUserProfile",
          get: function get() {
            var userProfile = this.authenticationService.currentUserProfile$.getValue();

            if (userProfile && userProfile.primarySite) {
              return userProfile;
            }

            return null;
          }
        }, {
          key: "getCheckListsList",
          value: function getCheckListsList(args) {
            var siteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentUserProfile.primarySite.id;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            params = params.append('offset', args.offset.toString());
            params = params.append('take', args.take.toString());
            params = params.append('searchText', args.searchText.toString());
            params = params.append('includeObsolete', args.includeObsolete.toString());
            return this.http.get("".concat(this.checkListUrl, "/").concat(siteId, "?"), {
              params: params
            });
          }
        }, {
          key: "createCheckList",
          value: function createCheckList(args) {
            args.siteId = this.currentUserProfile.primarySite.id;
            var createdBy = this.authenticationService.getCurrentUserIdAndName();
            var body = args;
            return this.http.post("".concat(this.checkListUrl, "?createdBy=").concat(createdBy), body);
          }
        }, {
          key: "viewCheckListForId",
          value: function viewCheckListForId(checkListId) {
            var siteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentUserProfile.primarySite.id;
            return this.http.get("".concat(this.checkListUrl, "/").concat(siteId, "/").concat(checkListId));
          }
        }, {
          key: "updateCheckListDetailForId",
          value: function updateCheckListDetailForId(extendedCheckList) {
            var userId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.authenticationService.getCurrentUserIdAndName();
            return this.http.put("".concat(this.checkListUrl, "?updatedBy=").concat(userId), extendedCheckList);
          }
        }]);

        return CheckListsService;
      }();

      CheckListsService.ɵfac = function CheckListsService_Factory(t) {
        return new (t || CheckListsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]));
      };

      CheckListsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: CheckListsService,
        factory: CheckListsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/navigation/navigation.service */
      "r+JB");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function DashboardComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dashItem_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", dashItem_r1.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", dashItem_r1.dashPanelColour);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", dashItem_r1.dashIllustration, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", dashItem_r1.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dashItem_r1.label, " ");
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(navigationService) {
          _classCallCheck(this, DashboardComponent);

          this.navigationService = navigationService;
          this.dashItems = [];
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.sub = this.navigationService.getNavigationTree().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (x) {
              return x.length > 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (navItems) {
              _this5.dashItems = _this5.populateDashItems(navItems);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub && !this.sub.closed && this.sub.unsubscribe();
          }
        }, {
          key: "populateDashItems",
          value: function populateDashItems(navItems) {
            var dashItems = [];

            var iterateDashItems = function iterateDashItems(navItem) {
              if (navItem.children) {
                navItem.children.map(function (childItem) {
                  return iterateDashItems(childItem);
                });
              }

              if (navItem.showOnDash) {
                dashItems.push(navItem);
              }
            };

            navItems.map(function (navItem) {
              return iterateDashItems(navItem);
            });
            return dashItems;
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__["NavigationService"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 1,
        vars: 1,
        consts: [[3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "dash-item-panel"], [3, "src", "alt"], [1, "dash-item-text"], ["src", "/assets/img/icon-arrow-right.svg", "alt", "Right pointing arrow"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DashboardComponent_a_0_Template, 6, 6, "a", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dashItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n[_nghost-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: calc(50% - 1em);\n  margin-bottom: 2rem;\n  text-decoration: none;\n}\n[_nghost-%COMP%]    > a[_ngcontent-%COMP%]:nth-child(odd) {\n  margin-right: 2em;\n}\n[_nghost-%COMP%]   .dash-item-panel[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  height: 25vw;\n  padding: 2rem;\n  border-radius: 0.4rem;\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .dash-item-panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 55%;\n  max-width: 80%;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.92);\n  transition: all 0.2s ease-in-out;\n}\n[_nghost-%COMP%]   .dash-item-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.25rem;\n  color: #424244;\n}\n[_nghost-%COMP%]   .dash-item-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1em;\n  margin-right: 0.5em;\n  transform: translateX(0rem);\n  transition: all 0.2s ease-in-out;\n}\n[_nghost-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n[_nghost-%COMP%]    > a[_ngcontent-%COMP%]:hover   .dash-item-panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1);\n}\n[_nghost-%COMP%]    > a[_ngcontent-%COMP%]:hover   .dash-item-text[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n[_nghost-%COMP%]    > a[_ngcontent-%COMP%]:hover   .dash-item-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: translateX(0.6rem);\n}\n@media screen and (max-width: 610px) {\n  [_nghost-%COMP%]    > a[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]    > a[_ngcontent-%COMP%]:nth-child(odd) {\n    margin-right: 0;\n  }\n  [_nghost-%COMP%]    > a[_ngcontent-%COMP%]   .dash-item-panel[_ngcontent-%COMP%] {\n    height: 40vw;\n  }\n}\n@media screen and (min-width: 1300px) {\n  [_nghost-%COMP%]    > a[_ngcontent-%COMP%]:nth-child(odd) {\n    margin-right: 2em;\n  }\n  [_nghost-%COMP%]    > a[_ngcontent-%COMP%] {\n    width: calc(33.3% - 1.4em);\n    margin-right: 2em;\n  }\n  [_nghost-%COMP%]    > a[_ngcontent-%COMP%]:nth-child(3n) {\n    margin-right: 0;\n  }\n  [_nghost-%COMP%]    > a[_ngcontent-%COMP%]   .dash-item-panel[_ngcontent-%COMP%] {\n    height: 20vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFxfZ2xvYmFsdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAdGFyb3B1bXBzXFxib290c3RyYXBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDRTs7OztJQUlFLHdCQUFBO0VDakJGOztFRG1CQTtJQUNFLG9CQUFBO0lBQ0Esc0JBYmlCO0VDSG5COztFRGtCQTtJQUNFLHlCQUFBO0lBQ0EsMEJBQUE7RUNmRjtBQUNGO0FBYkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQWVGO0FBYkU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFlSjtBQWJJO0VBQ0UsaUJBQUE7QUFlTjtBQVhFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBYUo7QUFYSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQWhDa0I7QUE2Q3hCO0FBVEU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ3ZDUztBRGtEYjtBQVRJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0E3Q2tCO0FBd0R4QjtBQVBFO0VBQ0UscUJBQUE7QUFTSjtBQVBJO0VBQ0UseUNBQUE7QUFTTjtBQU5JO0VBQ0UscUJBQUE7QUFRTjtBQU5NO0VBQ0UsNkJBQUE7QUFRUjtBQUZBO0VBRUk7SUFDRSxXQUFBO0VBSUo7RUFGSTtJQUNFLGVBQUE7RUFJTjtFQURJO0lBQ0UsWUFBQTtFQUdOO0FBQ0Y7QUFFQTtFQUVJO0lBQ0UsaUJBQUE7RUFESjtFQUlFO0lBQ0UsMEJBQUE7SUFDQSxpQkFBQTtFQUZKO0VBSUk7SUFDRSxlQUFBO0VBRk47RUFLSTtJQUNFLFlBQUE7RUFITjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvQHRhcm9wdW1wcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbiRuYXYtZ3JleTogI2UyZTJlMjtcclxuJHNlYXJjaC1ncmV5OiAjZjJmMmYyO1xyXG4kaGVhZGVyLXBhZGRpbmc6IDIuNXJlbTtcclxuJGhlYWRlci1wYWRkaW5nLXNtOiAxcmVtO1xyXG4kYmFzZS1uYXYtd2lkdGg6IDcuOWVtO1xyXG4kZXhwYW5kZWQtbmF2LXdpZHRoOiAyMGVtO1xyXG4kaGVhZGVyLWhlaWdodDogMTIuNHJlbTtcclxuJG1lbnUtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmc6IDFyZW0gMy4zcmVtO1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nLXNtOiAxcmVtIDEuN3JlbTtcclxuJGNvbnRlbnQtYXJlYS1jb2xvcjogI2ZmZjtcclxuJHdhcm5pbmc6ICNFQTAwMjk7XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAuYXBwLWhlYWRlcixcclxuICAuZnVuY3Rpb24tYmFyLFxyXG4gIGFwcC1zZWN0aW9uLWhlYWRlcixcclxuICAubWVkaWEtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hcHAtY29udGVudC1hcmVhIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRlbnQtYXJlYS1jb2xvcjtcclxuICB9XHJcbiAgLm1lZGlhLXByaW50IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIHByaW50IHtcbiAgLmFwcC1oZWFkZXIsXG4uZnVuY3Rpb24tYmFyLFxuYXBwLXNlY3Rpb24taGVhZGVyLFxuLm1lZGlhLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcHAtY29udGVudC1hcmVhIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLm1lZGlhLXByaW50IHtcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbjpob3N0ID4gYSB7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDFlbSk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0ID4gYTpudGgtY2hpbGQob2RkKSB7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuOmhvc3QgLmRhc2gtaXRlbS1wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjV2dztcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG46aG9zdCAuZGFzaC1pdGVtLXBhbmVsIGltZyB7XG4gIG1heC1oZWlnaHQ6IDU1JTtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOTIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbjpob3N0IC5kYXNoLWl0ZW0tdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjNDI0MjQ0O1xufVxuOmhvc3QgLmRhc2gtaXRlbS10ZXh0IGltZyB7XG4gIHdpZHRoOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCA+IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCA+IGE6aG92ZXIgLmRhc2gtaXRlbS1wYW5lbCBpbWcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbn1cbjpob3N0ID4gYTpob3ZlciAuZGFzaC1pdGVtLXRleHQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCA+IGE6aG92ZXIgLmRhc2gtaXRlbS10ZXh0IGltZyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjZyZW0pO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xuICA6aG9zdCA+IGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDpob3N0ID4gYTpudGgtY2hpbGQob2RkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIDpob3N0ID4gYSAuZGFzaC1pdGVtLXBhbmVsIHtcbiAgICBoZWlnaHQ6IDQwdnc7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMDBweCkge1xuICA6aG9zdCA+IGE6bnRoLWNoaWxkKG9kZCkge1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICB9XG4gIDpob3N0ID4gYSB7XG4gICAgd2lkdGg6IGNhbGMoMzMuMyUgLSAxLjRlbSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gIH1cbiAgOmhvc3QgPiBhOm50aC1jaGlsZCgzbikge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICA6aG9zdCA+IGEgLmRhc2gtaXRlbS1wYW5lbCB7XG4gICAgaGVpZ2h0OiAyMHZ3O1xuICB9XG59IiwiJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwiS29oaW5vb3JcIiwgXCJPcGVuIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgXCJHaWxsIFNhbnNcIiwgQ29yYmVsLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGJvZHktY29sb3I6ICM0MjQyNDQgIWRlZmF1bHQ7XG4kZ3JlZW46ICM2QTk1NUIgIWRlZmF1bHQ7XG4kZ3JlZW4tZmFkZWQ6ICNEMURFQ0Q7XG4kcmVkOiAjRkY0MjJFICFkZWZhdWx0O1xuJHJlZC1saWdodDogI0ZGRDlENSAhZGVmYXVsdDtcbiRyZWQtZGFyazogIzk5NDQ0RiAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6IDZweDtcblxuJHByaW1hcnk6ICRncmVlbjtcblxuJGFsZXJ0LWJvcmRlci13aWR0aDogMDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiA2cHg7XG4kYWxlcnQtcGFkZGluZy14OiAxLjVyZW07XG4kYWxlcnQtcGFkZGluZy15OiAxLjJyZW07XG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgLjc1cmVtO1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6IDMuNzVyZW07XG5cbiR0b2FzdC16LWluZGV4OiAxMDAwICFkZWZhdWx0O1xuJHRvYXN0LWR1cmF0aW9uOiAzMDAwbXMgIWRlZmF1bHQ7XG4kdG9hc3QtaGVpZ2h0OiA4cmVtICFkZWZhdWx0O1xuJHRvYXN0LWhlaWdodC1zbTogNS44cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJyZWFrcG9pbnQ6IDc2OHB4ICFkZWZhdWx0OyJdfQ== */"]
      });
      /***/
    },

    /***/
    "RGSW":
    /*!********************************************!*\
      !*** ./src/app/guards/permission.guard.ts ***!
      \********************************************/

    /*! exports provided: PermissionGuard */

    /***/
    function RGSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionGuard", function () {
        return PermissionGuard;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services */
      "o0su");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PermissionGuard = /*#__PURE__*/function () {
        function PermissionGuard(toastService, router, authenticationService) {
          _classCallCheck(this, PermissionGuard);

          this.toastService = toastService;
          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(PermissionGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var _this6 = this;

            var requiredPermission = route.data.permissionsRequired;
            return this.authenticationService.currentUserHasPermission(requiredPermission).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (hasPermission) {
              if (hasPermission) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
              }

              _this6.toastService.showToast(new _services__WEBPACK_IMPORTED_MODULE_3__["Toast"]('Access denied', _services__WEBPACK_IMPORTED_MODULE_3__["ToastType"].Danger));

              _this6.router.navigate(['dashboard']);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
            }));
          }
        }]);

        return PermissionGuard;
      }();

      PermissionGuard.ɵfac = function PermissionGuard_Factory(t) {
        return new (t || PermissionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      PermissionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: PermissionGuard,
        factory: PermissionGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "SWH8":
    /*!**********************************************************!*\
      !*** ./src/app/header/function-bar/nav/nav.component.ts ***!
      \**********************************************************/

    /*! exports provided: NavComponent */

    /***/
    function SWH8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
        return NavComponent;
      });
      /* harmony import */


      var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../services/navigation/navigation.service */
      "r+JB");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function NavComponent_li_8_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_li_8_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var navItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            return navItem_r1.toggleExpanded();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function NavComponent_li_8_ul_7_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_li_8_ul_7_li_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r9.handleNavItemClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var navItem_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", navItem_r8.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](navItem_r8.shortLabel ? navItem_r8.shortLabel : navItem_r8.label);
        }
      }

      function NavComponent_li_8_ul_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavComponent_li_8_ul_7_li_1_Template, 3, 2, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var navItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", navItem_r1.children);
        }
      }

      function NavComponent_li_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_li_8_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r12.handleNavItemClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavComponent_li_8_button_6_Template, 4, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NavComponent_li_8_ul_7_Template, 2, 1, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var navItem_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("expanded", navItem_r1.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", navItem_r1.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", navItem_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](navItem_r1.shortLabel ? navItem_r1.shortLabel : navItem_r1.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", navItem_r1.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", navItem_r1.children);
        }
      }

      var NavComponent = /*#__PURE__*/function () {
        function NavComponent(navigationService) {
          _classCallCheck(this, NavComponent);

          this.navigationService = navigationService;
        }

        _createClass(NavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.navigationService.getNavigationTree().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (x) {
              return x.length > 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (navItems) {
              _this7.navItems = navItems;
            });
            this.navigationService.navigationExpanded.subscribe(function (navExpanded) {
              return _this7.navExpanded = navExpanded;
            });
          }
        }, {
          key: "handleHamburgerClick",
          value: function handleHamburgerClick() {
            this.navigationService.toggleNavigation();
          }
        }, {
          key: "handleNavItemClick",
          value: function handleNavItemClick() {
            if (window.innerWidth <= 768 && this.navExpanded) {
              this.navigationService.toggleNavigation();
            }
          }
        }]);

        return NavComponent;
      }();

      NavComponent.ɵfac = function NavComponent_Factory(t) {
        return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__["NavigationService"]));
      };

      NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NavComponent,
        selectors: [["app-nav"]],
        decls: 9,
        vars: 3,
        consts: [[1, "nav-toggle-container"], [1, "nav-toggle", 3, "click"], [1, "hamburger-icon"], [1, "app-nav"], [3, "expanded", 4, "ngFor", "ngForOf"], [3, "routerLink", "click"], [1, "icon-container"], ["onerror", "this.src = '/assets/img/module-icons/circle.svg'", 3, "src"], ["class", "row-toggle", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "row-toggle", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 8.797 5.194"], ["d", "M8,0l.8.8-4.4,4.4Q2.2,3,0,.8L.8,0C.81-.014,4.394,3.625,4.394,3.625S8.006,0,8,0Z"], [4, "ngFor", "ngForOf"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_button_click_1_listener() {
              return ctx.handleHamburgerClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nav", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavComponent_li_8_Template, 8, 7, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.navExpanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.navItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n[_nghost-%COMP%] {\n  background-color: #f2f2f2;\n}\n[_nghost-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: fixed;\n  width: 7.9em;\n  background-color: #f2f2f2;\n  height: 100%;\n  top: 0;\n  z-index: -1;\n  transition: all 0.2s ease-out;\n}\n@media screen and (max-width: 800px) {\n  [_nghost-%COMP%]:before {\n    left: -20rem;\n  }\n}\n.nav-expanded[_nghost-%COMP%]:before, .nav-expanded   [_nghost-%COMP%]:before {\n  width: 20em;\n}\n@media screen and (max-width: 800px) {\n  .nav-expanded[_nghost-%COMP%]:before, .nav-expanded   [_nghost-%COMP%]:before {\n    left: 0rem;\n    z-index: 90;\n  }\n}\n.nav-toggle-container[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-out;\n  width: 7.9em;\n  text-align: right;\n  position: relative;\n  z-index: 200;\n}\n.nav-toggle[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #f2f2f2;\n  padding: 1rem 3.3rem;\n  transition: all 0.2s ease-out;\n  border-top: 1px solid #f2f2f2;\n}\n.nav-toggle[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%] {\n  margin-top: 0.1em;\n  height: 0.9em;\n}\n.nav-toggle[_ngcontent-%COMP%]:hover {\n  background: white;\n}\n@media screen and (max-width: 800px) {\n  .nav-toggle[_ngcontent-%COMP%] {\n    padding: 1rem 1.7rem;\n  }\n}\n.app-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 100;\n  top: 12.4rem;\n  bottom: 0;\n  width: 7.9em;\n  background-color: #f2f2f2;\n  transition: all 0.2s ease-out;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  background-color: #f2f2f2;\n  margin: 0;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n  border-bottom: 2px solid #d6d6d6;\n  transition: all 0.2s ease-in-out;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\n  border-top: 2px solid #d6d6d6;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n  padding: 1rem;\n  color: #424244;\n  background-color: #f2f2f2;\n  transition: all 0.2s ease-out;\n  position: relative;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  max-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: opacity 0.2s ease-in-out;\n  margin-top: 0.25em;\n  margin-left: 3.9em;\n  opacity: 0;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  width: 3.875em;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.8em;\n  width: auto;\n  position: relative;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:before {\n  content: \"\";\n  pointer-events: none;\n  display: block;\n  position: absolute;\n  left: -1rem;\n  top: 0;\n  right: calc(-1rem + 1px);\n  bottom: 0;\n  background-color: transparent;\n  z-index: 0;\n  transition: all 0.2s ease-in-out;\n}\n@media (hover: hover) {\n  .app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover:before {\n    background-color: white;\n  }\n  .app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    background-color: #424244;\n    opacity: 1;\n    color: white;\n    font-size: 0.875rem;\n    z-index: 1;\n    left: 100%;\n    margin: 0;\n    max-width: none;\n    top: 50%;\n    transform: translateY(-50%);\n    padding: 0.3em 0.8em 0.2em;\n    border-radius: 5px;\n  }\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  pointer-events: none;\n  padding-right: 0.8em;\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding-left: 4rem;\n  transition: all 0.2s ease-in-out;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #424244;\n  font-size: 0.875em;\n  padding: 0.7em 1em;\n  display: block;\n  font-weight: 300;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.app-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.nav-expanded[_nghost-%COMP%]   .nav-toggle-container[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .nav-toggle-container[_ngcontent-%COMP%], .nav-expanded[_nghost-%COMP%]   .app-nav[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .app-nav[_ngcontent-%COMP%] {\n  width: 20em;\n}\n.nav-expanded[_nghost-%COMP%]   .nav-toggle[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .nav-toggle[_ngcontent-%COMP%] {\n  padding-right: 1em;\n}\n.nav-expanded[_nghost-%COMP%]   .nav-toggle[_ngcontent-%COMP%]:hover, .nav-expanded   [_nghost-%COMP%]   .nav-toggle[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n.nav-expanded[_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  max-width: 20em;\n  opacity: 1;\n}\n.nav-expanded[_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  position: static;\n  display: inline-block;\n  background-color: transparent;\n  color: #424244;\n  font-size: 1rem;\n  transform: none;\n  left: 0;\n  top: 0;\n  padding: 0;\n  margin-top: 0.25em;\n}\n.nav-expanded[_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.nav-expanded[_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.nav-expanded[_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.nav-expanded[_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .nav-expanded   [_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\n  background-color: transparent;\n}\n.nav-expanded[_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .app-nav.app-nav.app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  max-height: 20rem;\n}\n.nav-expanded[_nghost-%COMP%]   .app-nav[_ngcontent-%COMP%]   .row-toggle.row-toggle[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .app-nav[_ngcontent-%COMP%]   .row-toggle.row-toggle[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n@media screen and (max-width: 800px) {\n  .nav-toggle-container[_ngcontent-%COMP%] {\n    width: 5rem;\n  }\n\n  .app-nav[_ngcontent-%COMP%] {\n    width: 20em;\n    left: -100%;\n  }\n  .app-nav[_ngcontent-%COMP%]   .nav-toggle-container[_ngcontent-%COMP%] {\n    width: 5.9rem;\n  }\n  .nav-expanded[_nghost-%COMP%]   .app-nav[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .app-nav[_ngcontent-%COMP%] {\n    left: 0;\n  }\n  .nav-expanded[_nghost-%COMP%]   .app-nav[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .app-nav[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%] {\n    padding-right: 1em;\n  }\n\n  .app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    background-color: white;\n  }\n  .app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    max-width: 20em;\n  }\n  .app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%] {\n    background-color: white;\n  }\n  .app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background-color: white;\n  }\n  .app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n    text-decoration: underline;\n  }\n  .app-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.expanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    max-height: 20rem;\n  }\n\n  .app-nav[_ngcontent-%COMP%]   .row-toggle.row-toggle[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: all;\n  }\n}\n@media screen and (max-width: 768px) {\n  .app-nav[_ngcontent-%COMP%] {\n    top: 8.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXF9nbG9iYWx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAdGFyb3B1bXBzXFxib290c3RyYXBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDRTs7OztJQUlFLHdCQUFBO0VDakJGOztFRG1CQTtJQUNFLG9CQUFBO0lBQ0Esc0JBYmlCO0VDSG5COztFRGtCQTtJQUNFLHlCQUFBO0lBQ0EsMEJBQUE7RUNmRjtBQUNGO0FBZkE7RUFDRSx5QkRFWTtBQ2VkO0FBZkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZRERhO0VDRWIseUJETFU7RUNNVixZQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSw2QkRIYztBQ29CbEI7QUFmSTtFQVhGO0lBWUksWUFBQTtFQWtCSjtBQUNGO0FBYkU7RUFDRSxXRGZpQjtBQytCckI7QUFkSTtFQUhGO0lBSUksVUFBQTtJQUNBLFdBQUE7RUFpQko7QUFDRjtBQWJBO0VBQ0UsNkJEdkJnQjtFQ3dCaEIsWUQzQmU7RUM0QmYsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFnQkY7QUFiQTtFQUNFLFlBQUE7RUFDQSx5QkR0Q1k7RUN1Q1osb0JEaEM0QjtFQ2lDNUIsNkJEbENnQjtFQ21DaEIsNkJBQUE7QUFnQkY7QUFkRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQWdCSjtBQWJFO0VBQ0UsaUJBQUE7QUFlSjtBQVpFO0VBaEJGO0lBaUJJLG9CRDdDNkI7RUM0RC9CO0FBQ0Y7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlEdkRjO0VDd0RkLFNBQUE7RUFDQSxZRDNEZTtFQzREZix5QkQvRFk7RUNnRVosNkJBQUE7QUFlRjtBQWJFO0VBQ0UsZUFBQTtFQUNBLHlCRHBFVTtFQ3FFVixTQUFBO0FBZUo7QUFiSTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtBQWVOO0FBWlE7RUFDRSw2QkFBQTtBQWNWO0FBVk07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0N6Rks7RUQwRkwseUJEdkZNO0VDd0ZOLDZCRGxGVTtFQ21GVixrQkFBQTtBQVlSO0FBVlE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFZVjtBQVRRO0VBQ0UsY0FBQTtBQVdWO0FBUlE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVVY7QUFQUTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFTVjtBQUpRO0VBR0k7SUFDRSx1QkFBQTtFQUlaO0VBRFU7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsMEJBQUE7SUFDQSxrQkFBQTtFQUdaO0FBQ0Y7QUFFTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUdNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQURSO0FBR1E7RUFDRSxjQ2pMRztFRGtMSCxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRFY7QUFJUTtFQUNFLGNBQUE7QUFGVjtBQUlRO0VBQ0UscUJBQUE7QUFGVjtBQUdVO0VBQ0UsMEJBQUE7QUFEWjtBQVFFO0VBQ0UsZ0JBQUE7QUFOSjtBQVdFOztFQUVFLFdEdE1pQjtBQzhMckI7QUFXRTtFQUNFLGtCQUFBO0FBVEo7QUFXSTtFQUNFLGdCQUFBO0FBVE47QUFlTTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBYlI7QUFnQk07RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQWRSO0FBa0JJO0VBQ0UsdUJBQUE7QUFoQk47QUFrQk07RUFDRSx1QkFBQTtBQWhCUjtBQWtCUTtFQUNFLDBCQUFBO0FBaEJWO0FBbUJRO0VBQ0UsNkJBQUE7QUFqQlY7QUFxQk07RUFDRSxpQkFBQTtBQW5CUjtBQXdCRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQXRCSjtBQTBCQTtFQUNFO0lBQ0UsV0FBQTtFQXZCRjs7RUEwQkE7SUFDRSxXRHZRaUI7SUN3UWpCLFdBQUE7RUF2QkY7RUF5QkU7SUFDRSxhQUFBO0VBdkJKO0VBMEJFO0lBQ0UsT0FBQTtFQXhCSjtFQTBCSTtJQUNFLGtCQUFBO0VBeEJOOztFQStCSTtJQUNFLHVCQUFBO0VBNUJOO0VBOEJJO0lBQ0UsZUFBQTtFQTVCTjtFQWdDRTtJQUNFLHVCQUFBO0VBOUJKO0VBZ0NJO0lBQ0UsdUJBQUE7RUE5Qk47RUFnQ007SUFDRSwwQkFBQTtFQTlCUjtFQWtDSTtJQUNFLGlCQUFBO0VBaENOOztFQXFDQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQWxDRjtBQUNGO0FBcUNBO0VBQ0U7SUFDRSxXQUFBO0VBbkNGO0FBQ0YiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9AdGFyb3B1bXBzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuJG5hdi1ncmV5OiAjZTJlMmUyO1xyXG4kc2VhcmNoLWdyZXk6ICNmMmYyZjI7XHJcbiRoZWFkZXItcGFkZGluZzogMi41cmVtO1xyXG4kaGVhZGVyLXBhZGRpbmctc206IDFyZW07XHJcbiRiYXNlLW5hdi13aWR0aDogNy45ZW07XHJcbiRleHBhbmRlZC1uYXYtd2lkdGg6IDIwZW07XHJcbiRoZWFkZXItaGVpZ2h0OiAxMi40cmVtO1xyXG4kbWVudS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZzogMXJlbSAzLjNyZW07XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmctc206IDFyZW0gMS43cmVtO1xyXG4kY29udGVudC1hcmVhLWNvbG9yOiAjZmZmO1xyXG4kd2FybmluZzogI0VBMDAyOTtcclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5hcHAtaGVhZGVyLFxyXG4gIC5mdW5jdGlvbi1iYXIsXHJcbiAgYXBwLXNlY3Rpb24taGVhZGVyLFxyXG4gIC5tZWRpYS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFwcC1jb250ZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1hcmVhLWNvbG9yO1xyXG4gIH1cclxuICAubWVkaWEtcHJpbnQge1xyXG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgcHJpbnQge1xuICAuYXBwLWhlYWRlcixcbi5mdW5jdGlvbi1iYXIsXG5hcHAtc2VjdGlvbi1oZWFkZXIsXG4ubWVkaWEtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFwcC1jb250ZW50LWFyZWEge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAubWVkaWEtcHJpbnQge1xuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbjpob3N0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA3LjllbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIDpob3N0OmJlZm9yZSB7XG4gICAgbGVmdDogLTIwcmVtO1xuICB9XG59XG5cbjpob3N0LWNvbnRleHQoLm5hdi1leHBhbmRlZCk6YmVmb3JlIHtcbiAgd2lkdGg6IDIwZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICA6aG9zdC1jb250ZXh0KC5uYXYtZXhwYW5kZWQpOmJlZm9yZSB7XG4gICAgbGVmdDogMHJlbTtcbiAgICB6LWluZGV4OiA5MDtcbiAgfVxufVxuXG4ubmF2LXRvZ2dsZS1jb250YWluZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgd2lkdGg6IDcuOWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyMDA7XG59XG5cbi5uYXYtdG9nZ2xlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAxcmVtIDMuM3JlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuLm5hdi10b2dnbGUgLmhhbWJ1cmdlci1pY29uIHtcbiAgbWFyZ2luLXRvcDogMC4xZW07XG4gIGhlaWdodDogMC45ZW07XG59XG4ubmF2LXRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm5hdi10b2dnbGUge1xuICAgIHBhZGRpbmc6IDFyZW0gMS43cmVtO1xuICB9XG59XG5cbi5hcHAtbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIHRvcDogMTIuNHJlbTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNy45ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLmFwcC1uYXYgPiB1bCB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgbWFyZ2luOiAwO1xufVxuLmFwcC1uYXYgPiB1bCA+IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q2ZDZkNjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uYXBwLW5hdiA+IHVsID4gbGk6Zmlyc3QtY2hpbGQgPiBhIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkNmQ2ZDY7XG59XG4uYXBwLW5hdiA+IHVsID4gbGkgPiBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBjb2xvcjogIzQyNDI0NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hcHAtbmF2ID4gdWwgPiBsaSA+IGEgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDMuOWVtO1xuICBvcGFjaXR5OiAwO1xufVxuLmFwcC1uYXYgPiB1bCA+IGxpID4gYSAuaWNvbi1jb250YWluZXIge1xuICB3aWR0aDogMy44NzVlbTtcbn1cbi5hcHAtbmF2ID4gdWwgPiBsaSA+IGEgaW1nIHtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hcHAtbmF2ID4gdWwgPiBsaSA+IGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xcmVtO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiBjYWxjKC0xcmVtICsgMXB4KTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAuYXBwLW5hdiA+IHVsID4gbGkgPiBhOmhvdmVyOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgLmFwcC1uYXYgPiB1bCA+IGxpID4gYTpob3ZlciBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0NDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjhlbSAwLjJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cbi5hcHAtbmF2ID4gdWwgPiBsaSAucm93LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOGVtO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuLmFwcC1uYXYgPiB1bCA+IGxpIHVsIHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5hcHAtbmF2ID4gdWwgPiBsaSB1bCBhIHtcbiAgY29sb3I6ICM0MjQyNDQ7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgcGFkZGluZzogMC43ZW0gMWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5hcHAtbmF2ID4gdWwgPiBsaSB1bCBsaTpmaXJzdC1jaGlsZCBhIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uYXBwLW5hdiA+IHVsID4gbGkgdWwgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hcHAtbmF2ID4gdWwgPiBsaSB1bCBsaSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uYXBwLW5hdiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbjpob3N0LWNvbnRleHQoLm5hdi1leHBhbmRlZCkgLm5hdi10b2dnbGUtY29udGFpbmVyLFxuOmhvc3QtY29udGV4dCgubmF2LWV4cGFuZGVkKSAuYXBwLW5hdiB7XG4gIHdpZHRoOiAyMGVtO1xufVxuOmhvc3QtY29udGV4dCgubmF2LWV4cGFuZGVkKSAubmF2LXRvZ2dsZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cbjpob3N0LWNvbnRleHQoLm5hdi1leHBhbmRlZCkgLm5hdi10b2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuOmhvc3QtY29udGV4dCgubmF2LWV4cGFuZGVkKSAuYXBwLW5hdi5hcHAtbmF2LmFwcC1uYXYgPiB1bCA+IGxpID4gYSA+IHNwYW4ge1xuICBtYXgtd2lkdGg6IDIwZW07XG4gIG9wYWNpdHk6IDE7XG59XG46aG9zdC1jb250ZXh0KC5uYXYtZXhwYW5kZWQpIC5hcHAtbmF2LmFwcC1uYXYuYXBwLW5hdiA+IHVsID4gbGkgPiBhOmhvdmVyIHNwYW4ge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzQyNDI0NDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMC4yNWVtO1xufVxuOmhvc3QtY29udGV4dCgubmF2LWV4cGFuZGVkKSAuYXBwLW5hdi5hcHAtbmF2LmFwcC1uYXYgPiB1bCA+IGxpLmV4cGFuZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG46aG9zdC1jb250ZXh0KC5uYXYtZXhwYW5kZWQpIC5hcHAtbmF2LmFwcC1uYXYuYXBwLW5hdiA+IHVsID4gbGkuZXhwYW5kZWQgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QtY29udGV4dCgubmF2LWV4cGFuZGVkKSAuYXBwLW5hdi5hcHAtbmF2LmFwcC1uYXYgPiB1bCA+IGxpLmV4cGFuZGVkIGE6aG92ZXIgc3BhbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuOmhvc3QtY29udGV4dCgubmF2LWV4cGFuZGVkKSAuYXBwLW5hdi5hcHAtbmF2LmFwcC1uYXYgPiB1bCA+IGxpLmV4cGFuZGVkIGE6aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdC1jb250ZXh0KC5uYXYtZXhwYW5kZWQpIC5hcHAtbmF2LmFwcC1uYXYuYXBwLW5hdiA+IHVsID4gbGkuZXhwYW5kZWQgdWwge1xuICBtYXgtaGVpZ2h0OiAyMHJlbTtcbn1cbjpob3N0LWNvbnRleHQoLm5hdi1leHBhbmRlZCkgLmFwcC1uYXYgLnJvdy10b2dnbGUucm93LXRvZ2dsZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5uYXYtdG9nZ2xlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDVyZW07XG4gIH1cblxuICAuYXBwLW5hdiB7XG4gICAgd2lkdGg6IDIwZW07XG4gICAgbGVmdDogLTEwMCU7XG4gIH1cbiAgLmFwcC1uYXYgLm5hdi10b2dnbGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNS45cmVtO1xuICB9XG4gIDpob3N0LWNvbnRleHQoLm5hdi1leHBhbmRlZCkgLmFwcC1uYXYge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgOmhvc3QtY29udGV4dCgubmF2LWV4cGFuZGVkKSAuYXBwLW5hdiAubmF2LXRvZ2dsZSB7XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xuICB9XG5cbiAgLmFwcC1uYXYgPiB1bCA+IGxpID4gYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgLmFwcC1uYXYgPiB1bCA+IGxpID4gYSA+IHNwYW4ge1xuICAgIG1heC13aWR0aDogMjBlbTtcbiAgfVxuICAuYXBwLW5hdiA+IHVsID4gbGkuZXhwYW5kZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIC5hcHAtbmF2ID4gdWwgPiBsaS5leHBhbmRlZCBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYXBwLW5hdiA+IHVsID4gbGkuZXhwYW5kZWQgYTpob3ZlciBzcGFuIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAuYXBwLW5hdiA+IHVsID4gbGkuZXhwYW5kZWQgdWwge1xuICAgIG1heC1oZWlnaHQ6IDIwcmVtO1xuICB9XG5cbiAgLmFwcC1uYXYgLnJvdy10b2dnbGUucm93LXRvZ2dsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXBwLW5hdiB7XG4gICAgdG9wOiA4LjlyZW07XG4gIH1cbn0iLCIkZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJLb2hpbm9vclwiLCBcIk9wZW4gU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBcIkdpbGwgU2Fuc1wiLCBDb3JiZWwsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kYm9keS1jb2xvcjogIzQyNDI0NCAhZGVmYXVsdDtcbiRncmVlbjogIzZBOTU1QiAhZGVmYXVsdDtcbiRncmVlbi1mYWRlZDogI0QxREVDRDtcbiRyZWQ6ICNGRjQyMkUgIWRlZmF1bHQ7XG4kcmVkLWxpZ2h0OiAjRkZEOUQ1ICFkZWZhdWx0O1xuJHJlZC1kYXJrOiAjOTk0NDRGICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogNnB4O1xuXG4kcHJpbWFyeTogJGdyZWVuO1xuXG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAwO1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6IDZweDtcbiRhbGVydC1wYWRkaW5nLXg6IDEuNXJlbTtcbiRhbGVydC1wYWRkaW5nLXk6IDEuMnJlbTtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAuNzVyZW07XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMy43NXJlbTtcblxuJHRvYXN0LXotaW5kZXg6IDEwMDAgIWRlZmF1bHQ7XG4kdG9hc3QtZHVyYXRpb246IDMwMDBtcyAhZGVmYXVsdDtcbiR0b2FzdC1oZWlnaHQ6IDhyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtaGVpZ2h0LXNtOiA1LjhyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYnJlYWtwb2ludDogNzY4cHggIWRlZmF1bHQ7Il19 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/navigation/navigation.service */
      "r+JB");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services */
      "o0su");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _toast_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./toast/toast.component */
      "TXK5");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(authenticationService, navigationService) {
          var _this8 = this;

          _classCallCheck(this, AppComponent);

          this.authenticationService = authenticationService;
          this.navigationService = navigationService;
          this.authenticationService.user.subscribe(function (data) {
            return _this8.userProfile = data;
          });
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.navigationService.navigationExpanded.subscribe(function (navExpanded) {
              return _this9.navExpanded = navExpanded;
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_0__["NavigationService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 2,
        consts: [[1, "app-wrapper"], [1, "app-content-area"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-toast");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nav-expanded", ctx.navExpanded);
          }
        },
        directives: [_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n.nav-expanded.app-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 800px) {\n  .nav-expanded.app-wrapper[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n  }\n}\n.app-content-area[_ngcontent-%COMP%] {\n  padding: 2em;\n  margin-left: 7.9em;\n  transition: all 0.2s ease-out;\n}\n.nav-expanded[_ngcontent-%COMP%]   .app-content-area[_ngcontent-%COMP%] {\n  margin-left: 20em;\n}\n@media screen and (max-width: 800px) {\n  .app-content-area[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding: 1.5em;\n    font-size: 0.875em;\n  }\n  .nav-expanded[_ngcontent-%COMP%]   .app-content-area[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjc3NcXF9nbG9iYWx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFOzs7O0lBSUUsd0JBQUE7RUNqQkY7O0VEbUJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFiaUI7RUNIbkI7O0VEa0JBO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQ2ZGO0FBQ0Y7QUFmQTtFQUNFLFdBQUE7QUFpQkY7QUFmRTtFQUhGO0lBSUksa0JBQUE7RUFrQkY7QUFDRjtBQWZBO0VBQ0UsWUFBQTtFQUNBLGtCREplO0VDS2YsNkJERmdCO0FDb0JsQjtBQWhCRTtFQUNFLGlCRFBpQjtBQ3lCckI7QUFmRTtFQVRGO0lBVUksY0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQWtCRjtFQWhCRTtJQUNFLGNBQUE7RUFrQko7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL0B0YXJvcHVtcHMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4kbmF2LWdyZXk6ICNlMmUyZTI7XHJcbiRzZWFyY2gtZ3JleTogI2YyZjJmMjtcclxuJGhlYWRlci1wYWRkaW5nOiAyLjVyZW07XHJcbiRoZWFkZXItcGFkZGluZy1zbTogMXJlbTtcclxuJGJhc2UtbmF2LXdpZHRoOiA3LjllbTtcclxuJGV4cGFuZGVkLW5hdi13aWR0aDogMjBlbTtcclxuJGhlYWRlci1oZWlnaHQ6IDEyLjRyZW07XHJcbiRtZW51LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nOiAxcmVtIDMuM3JlbTtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZy1zbTogMXJlbSAxLjdyZW07XHJcbiRjb250ZW50LWFyZWEtY29sb3I6ICNmZmY7XHJcbiR3YXJuaW5nOiAjRUEwMDI5O1xyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLmFwcC1oZWFkZXIsXHJcbiAgLmZ1bmN0aW9uLWJhcixcclxuICBhcHAtc2VjdGlvbi1oZWFkZXIsXHJcbiAgLm1lZGlhLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYXBwLWNvbnRlbnQtYXJlYSB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250ZW50LWFyZWEtY29sb3I7XHJcbiAgfVxyXG4gIC5tZWRpYS1wcmludCB7XHJcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBwcmludCB7XG4gIC5hcHAtaGVhZGVyLFxuLmZ1bmN0aW9uLWJhcixcbmFwcC1zZWN0aW9uLWhlYWRlcixcbi5tZWRpYS1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXBwLWNvbnRlbnQtYXJlYSB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5tZWRpYS1wcmludCB7XG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuLm5hdi1leHBhbmRlZC5hcHAtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm5hdi1leHBhbmRlZC5hcHAtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG59XG5cbi5hcHAtY29udGVudC1hcmVhIHtcbiAgcGFkZGluZzogMmVtO1xuICBtYXJnaW4tbGVmdDogNy45ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLm5hdi1leHBhbmRlZCAuYXBwLWNvbnRlbnQtYXJlYSB7XG4gIG1hcmdpbi1sZWZ0OiAyMGVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmFwcC1jb250ZW50LWFyZWEge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgfVxuICAubmF2LWV4cGFuZGVkIC5hcHAtY29udGVudC1hcmVhIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "TXK5":
    /*!******************************************!*\
      !*** ./src/app/toast/toast.component.ts ***!
      \******************************************/

    /*! exports provided: ToastComponent */

    /***/
    function TXK5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
        return ToastComponent;
      });
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services */
      "o0su");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ToastComponent_div_0__svg_svg_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ToastComponent_div_0__svg_svg_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ToastComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ToastComponent_div_0__svg_svg_2_Template, 2, 0, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToastComponent_div_0__svg_svg_3_Template, 2, 0, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("danger", ctx_r0.activeToast.type === ctx_r0.ToastType.Danger);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.activeToast.type === ctx_r0.ToastType.Success);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.activeToast.type === ctx_r0.ToastType.Danger);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.activeToast.message);
        }
      }

      var ToastComponent = /*#__PURE__*/function () {
        function ToastComponent(toastService) {
          _classCallCheck(this, ToastComponent);

          this.ToastType = _services__WEBPACK_IMPORTED_MODULE_0__["ToastType"];
          this.toastService = toastService;
        }

        _createClass(ToastComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.toastService.activeToast.subscribe(function (toast) {
              return _this10.activeToast = toast;
            });
          }
        }]);

        return ToastComponent;
      }();

      ToastComponent.ɵfac = function ToastComponent_Factory(t) {
        return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToastComponent,
        selectors: [["app-toast"]],
        decls: 1,
        vars: 1,
        consts: [["class", "taro-toast", 3, "danger", 4, "ngIf"], [1, "taro-toast"], [1, "toast-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 17.5 14", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64.9 64.9", 4, "ngIf"], [1, "toast-message"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 17.5 14"], ["d", "M1.1 7.3l4.6 4.6L16.5 1.1", "fill", "none", "stroke-width", "3"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64.9 64.9"], ["d", "M57.2 11.3c-.5-.6-1.1-1.2-1.7-1.8-.6-.6-1.2-1.2-1.8-1.7C40.9-3.1 21.6-2.6 9.5 9.5S-3.1 40.9 7.8 53.6c.5.6 1.1 1.2 1.7 1.8s1.2 1.2 1.8 1.7C24.1 68 43.4 67.5 55.4 55.4s12.7-31.3 1.8-44.1zM13 13C23.2 2.9 39.3 2.3 50.1 11.4L11.4 50.1C2.3 39.3 2.9 23.2 13 13zm1.9 40.6l38.7-38.7c9 10.8 8.4 26.9-1.7 37.1s-26.2 10.6-37 1.6z"]],
        template: function ToastComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastComponent_div_0_Template, 6, 5, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeToast);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n.taro-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: #D1DECD;\n  color: #6A955B;\n  z-index: 1000;\n  height: 8rem;\n  width: 100%;\n  transform: translateY(-100%);\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.125rem;\n  font-weight: 600;\n  animation: toast 3000ms ease-in-out;\n  animation-delay: 200ms;\n}\n.taro-toast[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  margin: 1em 0 0 3em;\n}\n.taro-toast[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%] {\n  margin: 1em 3em 0 0;\n}\n.taro-toast[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.5em;\n  margin-right: 1em;\n  margin-top: -0.2em;\n}\n.taro-toast[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #6A955B;\n}\n@media screen and (max-width: 768px) {\n  .taro-toast[_ngcontent-%COMP%] {\n    height: 5.8rem;\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 240px) {\n  .taro-toast[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n@keyframes toast {\n  0% {\n    transform: translateY(-100%);\n  }\n  20% {\n    transform: translateY(0);\n  }\n  90% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-100%);\n  }\n}\n.taro-toast.danger[_ngcontent-%COMP%] {\n  background-color: #FFD9D5;\n  color: #99444F;\n}\n.taro-toast.danger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: none;\n  fill: #99444F;\n}\n.taro-toast.danger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFxfZ2xvYmFsdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFx0b2FzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEB0YXJvcHVtcHNcXGJvb3RzdHJhcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFOzs7O0lBSUUsd0JBQUE7RUNqQkY7O0VEbUJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFiaUI7RUNIbkI7O0VEa0JBO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQ2ZGO0FBQ0Y7QUFmQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNDRk07RURHTixhQ2NjO0VEYmQsWUNlYTtFRGRiLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtBQWlCRjtBQWZFO0VBQ0UsbUJBQUE7QUFpQko7QUFkRTtFQUNFLG1CQUFBO0FBZ0JKO0FBYkU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWVKO0FBYkk7RUFDRSxlQzlCRTtBRDZDUjtBQVhFO0VBbkNGO0lBb0NJLGNDZmM7SURnQmQsZUFBQTtFQWNGO0FBQ0Y7QUFaRTtFQXhDRjtJQXlDSSxrQkFBQTtFQWVGO0FBQ0Y7QUFaQTtFQUNFO0lBQ0UsNEJBQUE7RUFlRjtFQVpBO0lBQ0Usd0JBQUE7RUFjRjtFQVhBO0lBQ0Usd0JBQUE7RUFhRjtFQVZBO0lBQ0UsNEJBQUE7RUFZRjtBQUNGO0FBVEE7RUFDRSx5QkM1RFU7RUQ2RFYsY0M1RFM7QUR1RVg7QUFURTtFQUNFLFlBQUE7RUFDQSxhQ2hFTztBRDJFWDtBQVRJO0VBQ0UsWUFBQTtBQVdOIiwiZmlsZSI6InRvYXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9AdGFyb3B1bXBzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuJG5hdi1ncmV5OiAjZTJlMmUyO1xyXG4kc2VhcmNoLWdyZXk6ICNmMmYyZjI7XHJcbiRoZWFkZXItcGFkZGluZzogMi41cmVtO1xyXG4kaGVhZGVyLXBhZGRpbmctc206IDFyZW07XHJcbiRiYXNlLW5hdi13aWR0aDogNy45ZW07XHJcbiRleHBhbmRlZC1uYXYtd2lkdGg6IDIwZW07XHJcbiRoZWFkZXItaGVpZ2h0OiAxMi40cmVtO1xyXG4kbWVudS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZzogMXJlbSAzLjNyZW07XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmctc206IDFyZW0gMS43cmVtO1xyXG4kY29udGVudC1hcmVhLWNvbG9yOiAjZmZmO1xyXG4kd2FybmluZzogI0VBMDAyOTtcclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5hcHAtaGVhZGVyLFxyXG4gIC5mdW5jdGlvbi1iYXIsXHJcbiAgYXBwLXNlY3Rpb24taGVhZGVyLFxyXG4gIC5tZWRpYS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFwcC1jb250ZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1hcmVhLWNvbG9yO1xyXG4gIH1cclxuICAubWVkaWEtcHJpbnQge1xyXG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgcHJpbnQge1xuICAuYXBwLWhlYWRlcixcbi5mdW5jdGlvbi1iYXIsXG5hcHAtc2VjdGlvbi1oZWFkZXIsXG4ubWVkaWEtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFwcC1jb250ZW50LWFyZWEge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAubWVkaWEtcHJpbnQge1xuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi50YXJvLXRvYXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDFERUNEO1xuICBjb2xvcjogIzZBOTU1QjtcbiAgei1pbmRleDogMTAwMDtcbiAgaGVpZ2h0OiA4cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBhbmltYXRpb246IHRvYXN0IDMwMDBtcyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcbn1cbi50YXJvLXRvYXN0IC50b2FzdC1pY29uIHtcbiAgbWFyZ2luOiAxZW0gMCAwIDNlbTtcbn1cbi50YXJvLXRvYXN0IC50b2FzdC1tZXNzYWdlIHtcbiAgbWFyZ2luOiAxZW0gM2VtIDAgMDtcbn1cbi50YXJvLXRvYXN0IHN2ZyB7XG4gIHdpZHRoOiAxLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIG1hcmdpbi10b3A6IC0wLjJlbTtcbn1cbi50YXJvLXRvYXN0IHN2ZyBwYXRoIHtcbiAgc3Ryb2tlOiAjNkE5NTVCO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRhcm8tdG9hc3Qge1xuICAgIGhlaWdodDogNS44cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjQwcHgpIHtcbiAgLnRhcm8tdG9hc3Qge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHRvYXN0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxufVxuLnRhcm8tdG9hc3QuZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDlENTtcbiAgY29sb3I6ICM5OTQ0NEY7XG59XG4udGFyby10b2FzdC5kYW5nZXIgc3ZnIHtcbiAgc3Ryb2tlOiBub25lO1xuICBmaWxsOiAjOTk0NDRGO1xufVxuLnRhcm8tdG9hc3QuZGFuZ2VyIHN2ZyBwYXRoIHtcbiAgc3Ryb2tlOiBub25lO1xufSIsIiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIktvaGlub29yXCIsIFwiT3BlbiBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIFwiR2lsbCBTYW5zXCIsIENvcmJlbCwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRib2R5LWNvbG9yOiAjNDI0MjQ0ICFkZWZhdWx0O1xuJGdyZWVuOiAjNkE5NTVCICFkZWZhdWx0O1xuJGdyZWVuLWZhZGVkOiAjRDFERUNEO1xuJHJlZDogI0ZGNDIyRSAhZGVmYXVsdDtcbiRyZWQtbGlnaHQ6ICNGRkQ5RDUgIWRlZmF1bHQ7XG4kcmVkLWRhcms6ICM5OTQ0NEYgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiA2cHg7XG5cbiRwcmltYXJ5OiAkZ3JlZW47XG5cbiRhbGVydC1ib3JkZXItd2lkdGg6IDA7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogNnB4O1xuJGFsZXJ0LXBhZGRpbmcteDogMS41cmVtO1xuJGFsZXJ0LXBhZGRpbmcteTogMS4ycmVtO1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogIC43NXJlbTtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAzLjc1cmVtO1xuXG4kdG9hc3Qtei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiR0b2FzdC1kdXJhdGlvbjogMzAwMG1zICFkZWZhdWx0O1xuJHRvYXN0LWhlaWdodDogOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1oZWlnaHQtc206IDUuOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1icmVha3BvaW50OiA3NjhweCAhZGVmYXVsdDsiXX0= */"]
      });
      /***/
    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services */
      "o0su");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var user = this.authenticationService.userValue;

            if (user && user.userRole) {
              // authorised so return true
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/account/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Vn81":
    /*!****************************************************************!*\
      !*** ./src/app/header/function-bar/search/search.component.ts ***!
      \****************************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function Vn81(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent() {
          _classCallCheck(this, SearchComponent);
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SearchComponent;
      }();

      SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)();
      };

      SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchComponent,
        selectors: [["app-search"]],
        decls: 5,
        vars: 0,
        consts: [[1, "search-bar"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 16"], ["d", "M2,7A4.951,4.951,0,0,1,7,2a4.951,4.951,0,0,1,5,5,4.951,4.951,0,0,1-5,5A4.951,4.951,0,0,1,2,7Zm12.3,8.7a.99.99,0,0,0,1.4-1.4l-3.1-3.1A6.847,6.847,0,0,0,14,7,6.957,6.957,0,0,0,7,0,6.957,6.957,0,0,0,0,7a6.957,6.957,0,0,0,7,7,6.847,6.847,0,0,0,4.2-1.4Z"], ["action", "/search"], ["type", "text", "disabled", ""]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n[_nghost-%COMP%] {\n  flex-grow: 2;\n  position: relative;\n  background-color: #f2f2f2;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  padding-left: 3rem;\n}\n[_nghost-%COMP%]:before, [_nghost-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0));\n  top: 0;\n  pointer-events: none;\n}\n[_nghost-%COMP%]:before {\n  left: 0;\n}\n[_nghost-%COMP%]:after {\n  right: 0;\n  transform: rotate(180deg);\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: none;\n  width: 1.3rem;\n  height: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 1em;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: rgba(66, 66, 68, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXF9nbG9iYWx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFOzs7O0lBSUUsd0JBQUE7RUNqQkY7O0VEbUJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFiaUI7RUNIbkI7O0VEa0JBO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQ2ZGO0FBQ0Y7QUFmQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBaUJGO0FBZkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWlCSjtBQWRFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNEVBQUE7RUFDQSxNQUFBO0VBQ0Esb0JBQUE7QUFnQko7QUFiRTtFQUNFLE9BQUE7QUFlSjtBQVpFO0VBQ0UsUUFBQTtFQUNBLHlCQUFBO0FBY0o7QUFYRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtBQWFKO0FBWEk7RUFDRSwyQkFBQTtBQWFOIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvQHRhcm9wdW1wcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbiRuYXYtZ3JleTogI2UyZTJlMjtcclxuJHNlYXJjaC1ncmV5OiAjZjJmMmYyO1xyXG4kaGVhZGVyLXBhZGRpbmc6IDIuNXJlbTtcclxuJGhlYWRlci1wYWRkaW5nLXNtOiAxcmVtO1xyXG4kYmFzZS1uYXYtd2lkdGg6IDcuOWVtO1xyXG4kZXhwYW5kZWQtbmF2LXdpZHRoOiAyMGVtO1xyXG4kaGVhZGVyLWhlaWdodDogMTIuNHJlbTtcclxuJG1lbnUtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmc6IDFyZW0gMy4zcmVtO1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nLXNtOiAxcmVtIDEuN3JlbTtcclxuJGNvbnRlbnQtYXJlYS1jb2xvcjogI2ZmZjtcclxuJHdhcm5pbmc6ICNFQTAwMjk7XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAuYXBwLWhlYWRlcixcclxuICAuZnVuY3Rpb24tYmFyLFxyXG4gIGFwcC1zZWN0aW9uLWhlYWRlcixcclxuICAubWVkaWEtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hcHAtY29udGVudC1hcmVhIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRlbnQtYXJlYS1jb2xvcjtcclxuICB9XHJcbiAgLm1lZGlhLXByaW50IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIHByaW50IHtcbiAgLmFwcC1oZWFkZXIsXG4uZnVuY3Rpb24tYmFyLFxuYXBwLXNlY3Rpb24taGVhZGVyLFxuLm1lZGlhLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcHAtY29udGVudC1hcmVhIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLm1lZGlhLXByaW50IHtcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG46aG9zdCB7XG4gIGZsZXgtZ3JvdzogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuOmhvc3QgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbn1cbjpob3N0OmJlZm9yZSwgOmhvc3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjA4KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIHRvcDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46aG9zdDpiZWZvcmUge1xuICBsZWZ0OiAwO1xufVxuOmhvc3Q6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbjpob3N0IHN2ZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxLjNyZW07XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAxZW07XG59XG46aG9zdCBzdmcgcGF0aCB7XG4gIGZpbGw6IHJnYmEoNjYsIDY2LCA2OCwgMC41KTtcbn0iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards */
      "auXs");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _toast_toast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./toast/toast.component */
      "TXK5");
      /* harmony import */


      var _header_function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./header/function-bar/function-bar.component */
      "gDpq");
      /* harmony import */


      var _header_function_bar_user_flyout_user_flyout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./header/function-bar/user-flyout/user-flyout.component */
      "LeoI");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _header_function_bar_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./header/function-bar/nav/nav.component */
      "SWH8");
      /* harmony import */


      var _header_function_bar_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./header/function-bar/search/search.component */
      "Vn81");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _header_basket_basket_basket_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./header/basket/basket/basket.component */
      "+3I6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _guards__WEBPACK_IMPORTED_MODULE_3__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _guards__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"]
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_7__["ToastComponent"], _header_function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_8__["FunctionBarComponent"], _header_function_bar_user_flyout_user_flyout_component__WEBPACK_IMPORTED_MODULE_9__["UserFlyoutComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _header_function_bar_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"], _header_function_bar_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"], _header_basket_basket_basket_component__WEBPACK_IMPORTED_MODULE_15__["BasketComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"]]
        });
      })();
      /***/

    },

    /***/
    "auXs":
    /*!*********************************!*\
      !*** ./src/app/guards/index.ts ***!
      \*********************************/

    /*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor */

    /***/
    function auXs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "UTcu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /* harmony import */


      var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error.interceptor */
      "xnjJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"];
      });
      /* harmony import */


      var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./jwt.interceptor */
      "FkPY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"];
      });
      /***/

    },

    /***/
    "cVAT":
    /*!*******************************************!*\
      !*** ./src/app/services/sku/sku.types.ts ***!
      \*******************************************/

    /*! no exports provided */

    /***/
    function cVAT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/index */
      "o0su");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./function-bar/function-bar.component */
      "gDpq");

      function HeaderComponent_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
        }
      }

      function HeaderComponent_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
        }
      }

      function HeaderComponent_img_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
        }
      }

      function HeaderComponent_img_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
        }
      }

      function HeaderComponent_img_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
        }
      }

      function HeaderComponent_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
        }
      }

      function HeaderComponent_app_function_bar_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-function-bar");
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(authenticationService, cdRef) {
          _classCallCheck(this, HeaderComponent);

          this.authenticationService = authenticationService;
          this.cdRef = cdRef;
          this.isLoggedIn = false;
          this.Organisation = _services_index__WEBPACK_IMPORTED_MODULE_1__["Organisation"];
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.authenticationService.user.subscribe(function (user) {
              _this11.isLoggedIn = user ? true : false;
              _this11.user = user ? JSON.parse(localStorage.getItem('user')) : undefined;

              _this11.cdRef.detectChanges();
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 11,
        vars: 7,
        consts: [[1, "app-header"], ["routerLink", "/", 1, "app-logo"], ["src", "/assets/img/Texmo-Group-Logo.svg", "alt", "Texmo Group", 4, "ngIf"], ["src", "/assets/img/texmo-precision-logo.svg", "alt", "Texmo Precision", 4, "ngIf"], ["src", "/assets/img/TaroPumpsLogo--Linear.svg", "alt", "Taro Pumps", 4, "ngIf"], ["src", "/assets/img/RGMT-Logo.svg", "alt", "RGMT", 4, "ngIf"], [4, "ngIf"], ["src", "/assets/img/Texmo-Group-Logo.svg", "alt", "Texmo Group"], ["src", "/assets/img/texmo-precision-logo.svg", "alt", "Texmo Precision"], ["src", "/assets/img/TaroPumpsLogo--Linear.svg", "alt", "Taro Pumps"], ["src", "/assets/img/RGMT-Logo.svg", "alt", "RGMT"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_img_3_Template, 1, 0, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_img_4_Template, 1, 0, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_img_5_Template, 1, 0, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_img_6_Template, 1, 0, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_img_7_Template, 1, 0, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_img_8_Template, 1, 0, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_app_function_bar_10_Template, 1, 0, "app-function-bar", 6);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.user && ctx.user.primarySite.organisationId === ctx.Organisation.TPC_INDIA);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.user && ctx.user.primarySite.organisationId === ctx.Organisation.TPC_US);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.user && ctx.user.primarySite.organisationId === ctx.Organisation.TPC_UK);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.user && ctx.user.primarySite.organisationId === ctx.Organisation.TEXMO);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.user && ctx.user.primarySite.organisationId === ctx.Organisation.RGMT);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _function_bar_function_bar_component__WEBPACK_IMPORTED_MODULE_4__["FunctionBarComponent"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n.app-header[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  z-index: 200;\n  position: relative;\n}\n.app-header   [_nghost-%COMP%] {\n  display: block;\n  background-color: white;\n}\n@media screen and (max-width: 768px) {\n  .app-header[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    display: block;\n    height: 3rem;\n  }\n  .app-header[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n    display: none;\n  }\n}\n@media screen and (max-width: 240px) {\n  .app-header[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n    height: 2rem;\n  }\n}\n.app-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4rem;\n}\n@media screen and (max-height: 400px) {\n  .app-header[_ngcontent-%COMP%] {\n    padding: 1.5em;\n  }\n}\n@media screen and (max-width: 768px) {\n  .app-header[_ngcontent-%COMP%] {\n    padding: 1.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFxfZ2xvYmFsdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0U7Ozs7SUFJRSx3QkFBQTtFQ2pCRjs7RURtQkE7SUFDRSxvQkFBQTtJQUNBLHNCQWJpQjtFQ0huQjs7RURrQkE7SUFDRSx5QkFBQTtJQUNBLDBCQUFBO0VDZkY7QUFDRjtBQWZBO0VBQ0UsZURHZTtFQ0ZmLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBaUJGO0FBaEJFO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0FBa0JKO0FBYkk7RUFDRTtJQUNFLGNBQUE7SUFDQSxZQUFBO0VBZU47RUFaSTtJQUNFLGFBQUE7RUFjTjtBQUNGO0FBWkk7RUFDRTtJQUNFLFlBQUE7RUFjTjtBQUNGO0FBVEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVdKO0FBVEU7RUFwQ0Y7SUFxQ0ksY0FBQTtFQVlGO0FBQ0Y7QUFWRTtFQXhDRjtJQXlDSSxjQUFBO0VBYUY7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL0B0YXJvcHVtcHMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4kbmF2LWdyZXk6ICNlMmUyZTI7XHJcbiRzZWFyY2gtZ3JleTogI2YyZjJmMjtcclxuJGhlYWRlci1wYWRkaW5nOiAyLjVyZW07XHJcbiRoZWFkZXItcGFkZGluZy1zbTogMXJlbTtcclxuJGJhc2UtbmF2LXdpZHRoOiA3LjllbTtcclxuJGV4cGFuZGVkLW5hdi13aWR0aDogMjBlbTtcclxuJGhlYWRlci1oZWlnaHQ6IDEyLjRyZW07XHJcbiRtZW51LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nOiAxcmVtIDMuM3JlbTtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZy1zbTogMXJlbSAxLjdyZW07XHJcbiRjb250ZW50LWFyZWEtY29sb3I6ICNmZmY7XHJcbiR3YXJuaW5nOiAjRUEwMDI5O1xyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLmFwcC1oZWFkZXIsXHJcbiAgLmZ1bmN0aW9uLWJhcixcclxuICBhcHAtc2VjdGlvbi1oZWFkZXIsXHJcbiAgLm1lZGlhLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYXBwLWNvbnRlbnQtYXJlYSB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250ZW50LWFyZWEtY29sb3I7XHJcbiAgfVxyXG4gIC5tZWRpYS1wcmludCB7XHJcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBwcmludCB7XG4gIC5hcHAtaGVhZGVyLFxuLmZ1bmN0aW9uLWJhcixcbmFwcC1zZWN0aW9uLWhlYWRlcixcbi5tZWRpYS1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXBwLWNvbnRlbnQtYXJlYSB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5tZWRpYS1wcmludCB7XG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuLmFwcC1oZWFkZXIge1xuICBwYWRkaW5nOiAyLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDIwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFwcC1oZWFkZXIgOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXBwLWhlYWRlciAuYXBwLWxvZ28gaW1nOmZpcnN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDNyZW07XG4gIH1cbiAgLmFwcC1oZWFkZXIgLmFwcC1sb2dvIGltZzpudGgtY2hpbGQoMikge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XG4gIC5hcHAtaGVhZGVyIC5hcHAtbG9nbyBpbWc6Zmlyc3QtY2hpbGQge1xuICAgIGhlaWdodDogMnJlbTtcbiAgfVxufVxuLmFwcC1oZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MDBweCkge1xuICAuYXBwLWhlYWRlciB7XG4gICAgcGFkZGluZzogMS41ZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hcHAtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxLjVlbTtcbiAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "gDpq":
    /*!***************************************************************!*\
      !*** ./src/app/header/function-bar/function-bar.component.ts ***!
      \***************************************************************/

    /*! exports provided: FunctionBarComponent */

    /***/
    function gDpq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionBarComponent", function () {
        return FunctionBarComponent;
      });
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav/nav.component */
      "SWH8");
      /* harmony import */


      var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search/search.component */
      "Vn81");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _user_flyout_user_flyout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-flyout/user-flyout.component */
      "LeoI");
      /* harmony import */


      var _basket_basket_basket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../basket/basket/basket.component */
      "+3I6");

      function FunctionBarComponent_app_basket_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-basket");
        }
      }

      var FunctionBarComponent = /*#__PURE__*/function () {
        function FunctionBarComponent(authenticationService) {
          _classCallCheck(this, FunctionBarComponent);

          this.authenticationService = authenticationService;
        }

        _createClass(FunctionBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.authenticationService.currentUserHasPermission(_defineProperty({}, src_app_services__WEBPACK_IMPORTED_MODULE_0__["PermissionGroup"].Spares, [src_app_services__WEBPACK_IMPORTED_MODULE_0__["SparesPermissions"].CanViewBasket])).subscribe(function (hasPermission) {
              _this12.canViewBasket = hasPermission;
            });
          }
        }]);

        return FunctionBarComponent;
      }();

      FunctionBarComponent.ɵfac = function FunctionBarComponent_Factory(t) {
        return new (t || FunctionBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]));
      };

      FunctionBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FunctionBarComponent,
        selectors: [["app-function-bar"]],
        decls: 5,
        vars: 1,
        consts: [[1, "function-bar", "col-12"], [4, "ngIf"]],
        template: function FunctionBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FunctionBarComponent_app_basket_3_Template, 1, 0, "app-basket", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-user-flyout");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.canViewBasket);
          }
        },
        directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _user_flyout_user_flyout_component__WEBPACK_IMPORTED_MODULE_5__["UserFlyoutComponent"], _basket_basket_basket_component__WEBPACK_IMPORTED_MODULE_6__["BasketComponent"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n.app-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 1rem 3.3rem;\n}\n.function-bar[_ngcontent-%COMP%] {\n  display: flex;\n  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.1);\n  background-color: #e2e2e2;\n  width: 100%;\n  transition: all 0.2s ease-out;\n}\n@media screen and (max-width: 768px) {\n  .nav-expanded[_nghost-%COMP%]   .function-bar[_ngcontent-%COMP%], .nav-expanded   [_nghost-%COMP%]   .function-bar[_ngcontent-%COMP%] {\n    width: 200%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcX2dsb2JhbHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGZ1bmN0aW9uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDRTs7OztJQUlFLHdCQUFBO0VDakJGOztFRG1CQTtJQUNFLG9CQUFBO0lBQ0Esc0JBYmlCO0VDSG5COztFRGtCQTtJQUNFLHlCQUFBO0lBQ0EsMEJBQUE7RUNmRjtBQUNGO0FBVkU7RUFDRSxvQkFKaUI7QUFnQnJCO0FBUkE7RUFDRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFiUztFQWNULFdBQUE7RUFDQSw2QkROZ0I7QUNpQmxCO0FBUEE7RUFDRTtJQUNFLFdBQUE7RUFVRjtBQUNGIiwiZmlsZSI6ImZ1bmN0aW9uLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvQHRhcm9wdW1wcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbiRuYXYtZ3JleTogI2UyZTJlMjtcclxuJHNlYXJjaC1ncmV5OiAjZjJmMmYyO1xyXG4kaGVhZGVyLXBhZGRpbmc6IDIuNXJlbTtcclxuJGhlYWRlci1wYWRkaW5nLXNtOiAxcmVtO1xyXG4kYmFzZS1uYXYtd2lkdGg6IDcuOWVtO1xyXG4kZXhwYW5kZWQtbmF2LXdpZHRoOiAyMGVtO1xyXG4kaGVhZGVyLWhlaWdodDogMTIuNHJlbTtcclxuJG1lbnUtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmc6IDFyZW0gMy4zcmVtO1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nLXNtOiAxcmVtIDEuN3JlbTtcclxuJGNvbnRlbnQtYXJlYS1jb2xvcjogI2ZmZjtcclxuJHdhcm5pbmc6ICNFQTAwMjk7XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAuYXBwLWhlYWRlcixcclxuICAuZnVuY3Rpb24tYmFyLFxyXG4gIGFwcC1zZWN0aW9uLWhlYWRlcixcclxuICAubWVkaWEtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hcHAtY29udGVudC1hcmVhIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRlbnQtYXJlYS1jb2xvcjtcclxuICB9XHJcbiAgLm1lZGlhLXByaW50IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIHByaW50IHtcbiAgLmFwcC1oZWFkZXIsXG4uZnVuY3Rpb24tYmFyLFxuYXBwLXNlY3Rpb24taGVhZGVyLFxuLm1lZGlhLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcHAtY29udGVudC1hcmVhIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLm1lZGlhLXByaW50IHtcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG4uYXBwLW5hdiBidXR0b24ge1xuICBwYWRkaW5nOiAxcmVtIDMuM3JlbTtcbn1cblxuLmZ1bmN0aW9uLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaGFkb3c6IDAgLTJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0LWNvbnRleHQoLm5hdi1leHBhbmRlZCkgLmZ1bmN0aW9uLWJhciB7XG4gICAgd2lkdGg6IDIwMCU7XG4gIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "gXUA":
    /*!*****************************************************************!*\
      !*** ./src/app/services/search-filter/search-filter.service.ts ***!
      \*****************************************************************/

    /*! exports provided: SearchFilterService */

    /***/
    function gXUA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchFilterService", function () {
        return SearchFilterService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SearchFilterService = /*#__PURE__*/function () {
        function SearchFilterService() {
          _classCallCheck(this, SearchFilterService);

          this.searchWOTextValue = '';
          this.searchPMTextValue = '';
          this.searchPMFilterValue = false;
          this.searchWOTextValueCache = '';
          this.searchPMTextValueCache = '';
          this.searchPMFilterValueCache = false;
          this.searchCLFilterValue = false;
          this.searchCLTextValue = '';
          this.searchCLFilterValueCache = false;
          this.searchCLTextValueCache = '';
        }

        _createClass(SearchFilterService, [{
          key: "initiateWOSearchFilter",
          value: function initiateWOSearchFilter() {
            this.searchWOTextValue = '';
          }
        }, {
          key: "assignWOSearchFilterCache",
          value: function assignWOSearchFilterCache() {
            this.searchWOTextValue = this.searchWOTextValueCache;
          }
        }, {
          key: "initiatePMSearchFilter",
          value: function initiatePMSearchFilter() {
            this.searchPMTextValue = '';
            this.searchPMFilterValue = false;
          }
        }, {
          key: "clearWOFilter",
          value: function clearWOFilter() {
            this.searchWOTextValueCache = '';
          }
        }, {
          key: "assignPMSearchFilterCache",
          value: function assignPMSearchFilterCache() {
            this.searchPMTextValue = this.searchPMTextValueCache;
            this.searchPMFilterValue = this.searchPMFilterValueCache;
          }
        }, {
          key: "assignCLSearchFilterCache",
          value: function assignCLSearchFilterCache() {
            this.searchCLTextValue = this.searchCLTextValueCache;
            this.searchCLFilterValue = this.searchCLFilterValueCache;
          }
        }, {
          key: "clearCLFilter",
          value: function clearCLFilter() {
            this.searchCLTextValue = '';
            this.searchCLFilterValue = false;
          }
        }, {
          key: "clearPMFilter",
          value: function clearPMFilter() {
            this.searchPMTextValueCache = '';
            this.searchPMFilterValueCache = false;
          }
        }]);

        return SearchFilterService;
      }();

      SearchFilterService.ɵfac = function SearchFilterService_Factory(t) {
        return new (t || SearchFilterService)();
      };

      SearchFilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SearchFilterService,
        factory: SearchFilterService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "i36l":
    /*!*************************************************************!*\
      !*** ./src/app/services/filehandler/filehandler.service.ts ***!
      \*************************************************************/

    /*! exports provided: FilehandlerService */

    /***/
    function i36l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilehandlerService", function () {
        return FilehandlerService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../authentication/authentication.service */
      "ri4K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilehandlerService = /*#__PURE__*/function () {
        function FilehandlerService(httpClient, authenticationService) {
          _classCallCheck(this, FilehandlerService);

          this.httpClient = httpClient;
          this.authenticationService = authenticationService;
          this.filehandlerUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl, "/filehandler");
        }

        _createClass(FilehandlerService, [{
          key: "primarySiteId",
          get: function get() {
            var userProfile = this.authenticationService.currentUserProfile$.getValue();

            if (userProfile && userProfile.primarySite) {
              return userProfile.primarySite.id;
            }

            return null;
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles(dataId, ModuleName, fileCollection) {
            var siteId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.primarySiteId;
            var formData = new FormData();
            (fileCollection ? fileCollection : []).forEach(function (srcFile) {
              formData.append('Attachments', srcFile);
            });
            formData.append('SiteId', siteId);
            formData.append('Id', dataId.toString());
            formData.append('ModuleName', ModuleName.toString());
            return this.httpClient.post("".concat(this.filehandlerUrl, "/upload"), formData);
          }
        }, {
          key: "getFile",
          value: function getFile(filePath) {
            var getFileUrl = "".concat(this.filehandlerUrl, "/getfile");
            var httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            httpHeader = httpHeader.append('accept', 'text/plain');
            httpHeader = httpHeader.append('filePath', filePath);
            var options = {
              responseType: 'blob',
              headers: httpHeader
            };
            return this.httpClient.get(getFileUrl, options);
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(filePath, isDeleteAllFiles) {
            var deleteFileUrl = "".concat(this.filehandlerUrl, "/delete?isDeleteAllFiles=").concat(isDeleteAllFiles.toString());
            var httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            httpHeader = httpHeader.append('accept', 'text/plain');
            httpHeader = httpHeader.append('path', filePath);
            var options = {
              responseType: 'text',
              headers: httpHeader
            };
            return this.httpClient["delete"](deleteFileUrl, options);
          }
        }]);

        return FilehandlerService;
      }();

      FilehandlerService.ɵfac = function FilehandlerService_Factory(t) {
        return new (t || FilehandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      FilehandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: FilehandlerService,
        factory: FilehandlerService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "jRxG":
    /*!***********************************************!*\
      !*** ./src/app/services/user-account/user.ts ***!
      \***********************************************/

    /*! exports provided: UserProfile, User */

    /***/
    function jRxG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfile", function () {
        return UserProfile;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var UserProfile = /*#__PURE__*/_createClass(function UserProfile(userProfile) {
        _classCallCheck(this, UserProfile);

        this.name = userProfile.name;
        this.userRole = userProfile.userRole;
        this.userId = userProfile.userId;
        this.givenName = userProfile.givenName;
        this.surName = userProfile.surName;
        this.displayName = userProfile.displayName;
        this.lastLogon = userProfile.lastLogon;
        this.commonCodeIdentifier = userProfile.commonCodeIdentifier;
        this.primarySite = userProfile.primarySite;
        this.sites = userProfile.sites;
        this.emailAddress = userProfile.emailAddress;
      });

      var User = /*#__PURE__*/_createClass(function User() {
        _classCallCheck(this, User);
      });
      /***/

    },

    /***/
    "k4A8":
    /*!***************************************************!*\
      !*** ./src/app/services/basket/basket.service.ts ***!
      \***************************************************/

    /*! exports provided: BasketService */

    /***/
    function k4A8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketService", function () {
        return BasketService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../authentication/authentication.service */
      "ri4K");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _basket_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./basket.types */
      "7v0c");
      /* harmony import */


      var _user_account_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../user-account/permissions */
      "IFMO");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_utils_observableUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/utils/observableUtils */
      "4ShH");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BasketService = /*#__PURE__*/function () {
        function BasketService(authenticationService, httpClient) {
          var _this13 = this;

          _classCallCheck(this, BasketService);

          this.authenticationService = authenticationService;
          this.httpClient = httpClient;
          this.basket$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
          this.basketUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
          this.userProfileSub = this.authenticationService.currentUserProfile$.subscribe(function (userProfile) {
            var canViewBasket = Object(_user_account_permissions__WEBPACK_IMPORTED_MODULE_4__["profileHasPermission"])(userProfile, _defineProperty({}, _user_account_permissions__WEBPACK_IMPORTED_MODULE_4__["PermissionGroup"].Spares, [_user_account_permissions__WEBPACK_IMPORTED_MODULE_4__["SparesPermissions"].CanViewBasket]));

            if (userProfile && userProfile.primarySite && userProfile.primarySite.id && canViewBasket && _this13.basketUrl$.getValue() === null) {
              _this13.userId = userProfile.userId;
              var siteId = userProfile.primarySite.id;

              _this13.basketUrl$.next("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl, "/order-basket/").concat(siteId));

              Object(src_utils_observableUtils__WEBPACK_IMPORTED_MODULE_6__["safelyUnsubscribeFrom"])(_this13.userProfileSub);
            }
          });
          this.getBasket().subscribe(function (data) {
            if (data) {
              _this13.basket$.next(new _basket_types__WEBPACK_IMPORTED_MODULE_3__["Basket"](data));
            }
          });
        }

        _createClass(BasketService, [{
          key: "getBasket",
          value: function getBasket() {
            var _this14 = this;

            return this.basketUrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (basketUrl) {
              if (basketUrl) {
                return _this14.httpClient.get(basketUrl);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
            }));
          }
        }, {
          key: "addToBasket",
          value: function addToBasket(basketItem, siteId) {
            var _this15 = this;

            var basketUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl, "/order-basket");
            var body = {
              siteId: siteId,
              createdByUserId: basketItem.createdByUserId,
              createdByUserName: basketItem.createdByUserName,
              skuId: basketItem.skuId,
              skuDescription: basketItem.skuDescription,
              uom: basketItem.uom,
              qty: basketItem.qty
            };
            return this.httpClient.post(basketUrl, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (iBasket) {
              var basket = new _basket_types__WEBPACK_IMPORTED_MODULE_3__["Basket"](iBasket);

              _this15.basket$.next(basket);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
            }));
          }
        }, {
          key: "updateBasketItem",
          value: function updateBasketItem(skuId, qty) {
            var _this16 = this;

            var basketUrl = this.basketUrl$.getValue();
            return this.httpClient.patch("".concat(basketUrl, "?skuId=").concat(skuId, "&userId=").concat(this.userId, "&qty=").concat(qty), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (iBasket) {
              var basket = new _basket_types__WEBPACK_IMPORTED_MODULE_3__["Basket"](iBasket);

              _this16.basket$.next(basket);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
            }));
          }
        }, {
          key: "deleteBasketItem",
          value: function deleteBasketItem(skuId, createdByUserId, deletedByUserId) {
            var _this17 = this;

            var basketUrl = this.basketUrl$.getValue();
            return this.httpClient["delete"]("".concat(basketUrl, "?skuId=").concat(skuId, "&createdByUserId=").concat(createdByUserId, "&deletedByUserId=").concat(deletedByUserId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (iBasket) {
              var basket = new _basket_types__WEBPACK_IMPORTED_MODULE_3__["Basket"](iBasket);

              _this17.basket$.next(basket);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
            }));
          }
        }]);

        return BasketService;
      }();

      BasketService.ɵfac = function BasketService_Factory(t) {
        return new (t || BasketService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      BasketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: BasketService,
        factory: BasketService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "o0su":
    /*!***********************************!*\
      !*** ./src/app/services/index.ts ***!
      \***********************************/

    /*! exports provided: ToastType, Toast, ToastService, AuthenticationService, UserProfile, User, AssetsPermissions, SparesPermissions, WorkOrdersPermissions, PreventiveMaintenancePermissions, CheckListPermissions, PermissionGroup, permissionGroupToPermissionSet, emptyPermissionSet, Role, roleString, hasPermission, profileHasPermission, Organisation, SkuService, BasketService, AssetService, AssetType, Phase, IAssetStatus, Asset, Group, SubGroup, ExtendedAsset, AssetGroupAndSubGroup, Workorder, WorkorderStatus, WorkOrderPriority, WorkOrderCheckList, SearchFilterService, WorkordersService, FilehandlerService, Modules, PreventiveMaintenanceService, PreventiveMaintenanceStatus, PreventiveMaintenance, CheckListsService, CheckListStatus, CheckList */

    /***/
    function o0su(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _toast_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toast/toast.service */
      "9ZKQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastType", function () {
        return _toast_toast_service__WEBPACK_IMPORTED_MODULE_0__["ToastType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return _toast_toast_service__WEBPACK_IMPORTED_MODULE_0__["Toast"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return _toast_toast_service__WEBPACK_IMPORTED_MODULE_0__["ToastService"];
      });
      /* harmony import */


      var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authentication/authentication.service */
      "ri4K");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"];
      });
      /* harmony import */


      var _user_account_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-account/user */
      "jRxG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserProfile", function () {
        return _user_account_user__WEBPACK_IMPORTED_MODULE_2__["UserProfile"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return _user_account_user__WEBPACK_IMPORTED_MODULE_2__["User"];
      });
      /* harmony import */


      var _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-account/permissions */
      "IFMO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AssetsPermissions", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["AssetsPermissions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SparesPermissions", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["SparesPermissions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WorkOrdersPermissions", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["WorkOrdersPermissions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PreventiveMaintenancePermissions", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["PreventiveMaintenancePermissions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CheckListPermissions", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["CheckListPermissions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionGroup", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["PermissionGroup"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "permissionGroupToPermissionSet", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["permissionGroupToPermissionSet"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "emptyPermissionSet", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["emptyPermissionSet"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["Role"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "roleString", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["roleString"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "hasPermission", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["hasPermission"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "profileHasPermission", function () {
        return _user_account_permissions__WEBPACK_IMPORTED_MODULE_3__["profileHasPermission"];
      });
      /* harmony import */


      var _site_site_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./site/site.service */
      "oLAm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Organisation", function () {
        return _site_site_service__WEBPACK_IMPORTED_MODULE_4__["Organisation"];
      });
      /* harmony import */


      var _sku_sku_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sku/sku.types */
      "cVAT");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _sku_sku_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sku/sku.service */
      "zg3e");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SkuService", function () {
        return _sku_sku_service__WEBPACK_IMPORTED_MODULE_6__["SkuService"];
      });
      /* harmony import */


      var _basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./basket/basket.service */
      "k4A8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BasketService", function () {
        return _basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"];
      });
      /* harmony import */


      var _asset_asset_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./asset/asset.service */
      "D7Wi");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AssetService", function () {
        return _asset_asset_service__WEBPACK_IMPORTED_MODULE_8__["AssetService"];
      });
      /* harmony import */


      var _asset_asset_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./asset/asset.types */
      "JSbE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AssetType", function () {
        return _asset_asset_types__WEBPACK_IMPORTED_MODULE_9__["AssetType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Phase", function () {
        return _asset_asset_types__WEBPACK_IMPORTED_MODULE_9__["Phase"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IAssetStatus", function () {
        return _asset_asset_types__WEBPACK_IMPORTED_MODULE_9__["IAssetStatus"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Asset", function () {
        return _asset_asset_types__WEBPACK_IMPORTED_MODULE_9__["Asset"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Group", function () {
        return _asset_asset_types__WEBPACK_IMPORTED_MODULE_9__["Group"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SubGroup", function () {
        return _asset_asset_types__WEBPACK_IMPORTED_MODULE_9__["SubGroup"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExtendedAsset", function () {
        return _asset_asset_types__WEBPACK_IMPORTED_MODULE_9__["ExtendedAsset"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AssetGroupAndSubGroup", function () {
        return _asset_asset_types__WEBPACK_IMPORTED_MODULE_9__["AssetGroupAndSubGroup"];
      });
      /* harmony import */


      var _workorder_workorder_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./workorder/workorder.types */
      "NWDC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Workorder", function () {
        return _workorder_workorder_types__WEBPACK_IMPORTED_MODULE_10__["Workorder"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WorkorderStatus", function () {
        return _workorder_workorder_types__WEBPACK_IMPORTED_MODULE_10__["WorkorderStatus"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WorkOrderPriority", function () {
        return _workorder_workorder_types__WEBPACK_IMPORTED_MODULE_10__["WorkOrderPriority"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WorkOrderCheckList", function () {
        return _workorder_workorder_types__WEBPACK_IMPORTED_MODULE_10__["WorkOrderCheckList"];
      });
      /* harmony import */


      var _search_filter_search_filter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./search-filter/search-filter.service */
      "gXUA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SearchFilterService", function () {
        return _search_filter_search_filter_service__WEBPACK_IMPORTED_MODULE_11__["SearchFilterService"];
      });
      /* harmony import */


      var _workorder_workorder_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./workorder/workorder.service */
      "KP8F");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WorkordersService", function () {
        return _workorder_workorder_service__WEBPACK_IMPORTED_MODULE_12__["WorkordersService"];
      });
      /* harmony import */


      var _filehandler_filehandler_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./filehandler/filehandler.service */
      "i36l");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilehandlerService", function () {
        return _filehandler_filehandler_service__WEBPACK_IMPORTED_MODULE_13__["FilehandlerService"];
      });
      /* harmony import */


      var _filehandler_filehandler_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./filehandler/filehandler.type */
      "wvr3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Modules", function () {
        return _filehandler_filehandler_type__WEBPACK_IMPORTED_MODULE_14__["Modules"];
      });
      /* harmony import */


      var _preventive_maintenance_preventive_maintenance_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./preventive-maintenance/preventive-maintenance.service */
      "0Pgj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PreventiveMaintenanceService", function () {
        return _preventive_maintenance_preventive_maintenance_service__WEBPACK_IMPORTED_MODULE_15__["PreventiveMaintenanceService"];
      });
      /* harmony import */


      var _preventive_maintenance_preventive_maintenance_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./preventive-maintenance/preventive-maintenance.types */
      "/WFp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PreventiveMaintenanceStatus", function () {
        return _preventive_maintenance_preventive_maintenance_types__WEBPACK_IMPORTED_MODULE_16__["PreventiveMaintenanceStatus"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PreventiveMaintenance", function () {
        return _preventive_maintenance_preventive_maintenance_types__WEBPACK_IMPORTED_MODULE_16__["PreventiveMaintenance"];
      });
      /* harmony import */


      var _check_lists_check_lists_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./check-lists/check-lists.service */
      "O5Kl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CheckListsService", function () {
        return _check_lists_check_lists_service__WEBPACK_IMPORTED_MODULE_17__["CheckListsService"];
      });
      /* harmony import */


      var _check_lists_check_lists_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./check-lists/check-lists.types */
      "Hh11");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CheckListStatus", function () {
        return _check_lists_check_lists_types__WEBPACK_IMPORTED_MODULE_18__["CheckListStatus"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CheckList", function () {
        return _check_lists_check_lists_types__WEBPACK_IMPORTED_MODULE_18__["CheckList"];
      });
      /***/

    },

    /***/
    "oLAm":
    /*!***********************************************!*\
      !*** ./src/app/services/site/site.service.ts ***!
      \***********************************************/

    /*! exports provided: Organisation */

    /***/
    function oLAm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Organisation", function () {
        return Organisation;
      });

      var Organisation;

      (function (Organisation) {
        Organisation["TEXMO"] = "10TI";
        Organisation["TPC_INDIA"] = "30TPCIN";
        Organisation["TPC_UK"] = "31TPCUK";
        Organisation["TPC_US"] = "32TPCUS";
        Organisation["RGMT"] = "20RGH";
      })(Organisation || (Organisation = {}));
      /***/

    },

    /***/
    "r+JB":
    /*!***********************************************************!*\
      !*** ./src/app/services/navigation/navigation.service.ts ***!
      \***********************************************************/

    /*! exports provided: NavigationService */

    /***/
    function rJB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return NavigationService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! .. */
      "o0su");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavigationService = /*#__PURE__*/function () {
        function NavigationService(authenticationService) {
          _classCallCheck(this, NavigationService);

          this.authenticationService = authenticationService;
          this.navigationExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.navigationExpanded$ = this.navigationExpanded.asObservable();
          this.navigationTree = [{
            label: 'Work Orders',
            showOnDash: true,
            dashPanelColour: '#EFEEDA',
            permissionsRequired: _defineProperty({}, ___WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].WorkOrders, [___WEBPACK_IMPORTED_MODULE_2__["WorkOrdersPermissions"].CanViewWorkOrders])
          }, {
            label: 'Preventive Maintenance',
            showOnDash: true,
            dashPanelColour: '#D6E5D8',
            permissionsRequired: _defineProperty({}, ___WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].PreventiveMaintenance, [___WEBPACK_IMPORTED_MODULE_2__["PreventiveMaintenancePermissions"].CanViewPreventiveMaintenance])
          }, {
            label: 'Assets',
            route: './assets',
            showOnDash: false,
            dashPanelColour: '#D6E5D8',
            permissionsRequired: _defineProperty({}, ___WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].Assets, [___WEBPACK_IMPORTED_MODULE_2__["AssetsPermissions"].CanViewAssetsList])
          }, {
            label: 'Spares',
            isLandingPage: true,
            landingPageDescription: "\n      Within this module you can perform many functions related to spares stock, ranging from\n      something as simple as viewing a list of your stock, right up to ordering spare\n      to a purchase or stores.\n      ",
            children: [{
              label: 'Stock List',
              showOnDash: true,
              dashPanelColour: '#D4DADD',
              permissionsRequired: _defineProperty({}, ___WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].Spares, [___WEBPACK_IMPORTED_MODULE_2__["SparesPermissions"].CanViewStockList])
            }, {
              label: 'Transfer Stock',
              showOnDash: false,
              dashPanelColour: '#D4DADD',
              permissionsRequired: _defineProperty({}, ___WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].Spares, [___WEBPACK_IMPORTED_MODULE_2__["SparesPermissions"].CanViewStockList])
            }, {
              label: 'Order History',
              showOnDash: false,
              dashPanelColour: '#D4DADD',
              permissionsRequired: _defineProperty({}, ___WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].Spares, [___WEBPACK_IMPORTED_MODULE_2__["SparesPermissions"].CanViewOrderHistory])
            }]
          }, {
            label: 'Check Lists',
            route: './check-list',
            showOnDash: false,
            dashPanelColour: '#D6E5D8',
            permissionsRequired: _defineProperty({}, ___WEBPACK_IMPORTED_MODULE_2__["PermissionGroup"].CheckList, [___WEBPACK_IMPORTED_MODULE_2__["CheckListPermissions"].CanViewCheckList])
          }];
        }

        _createClass(NavigationService, [{
          key: "toggleNavigation",
          value: function toggleNavigation() {
            this.navigationExpanded.next(!this.navigationExpanded.getValue());
          }
        }, {
          key: "addFieldsByConvention",
          value: function addFieldsByConvention(navItem) {
            var _this18 = this;

            var routePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
            // The slug is a lower case, hyphenated version of the label
            var slug = navItem.label.replace(/\s+/g, '-').toLowerCase();
            var route = navItem.route ? navItem.route : routePrefix + slug;
            return Object.assign(Object.assign(Object.assign(Object.assign({}, navItem), {
              route: route,
              expanded: false,
              toggleExpanded: function toggleExpanded() {
                this.expanded = !this.expanded;
              },
              icon: "/assets/img/module-icons/".concat(slug, ".svg")
            }), navItem.showOnDash && {
              dashIllustration: "/assets/img/module-icons/dash-illustrations/".concat(slug, ".svg")
            }), navItem.children && {
              children: navItem.children.map(function (child) {
                return _this18.addFieldsByConvention(child, "".concat(route, "/"));
              })
            });
          }
          /**
           * @param roleTemplate The users role template
           * @param additionalPermissions The users additional permissions
           * @param navItem The nav item to check permissions on - recursively also checks children
           * @returns either a navItem with its children appropriately filtered or null - use with map then filter top level nulls afterwards
           */

        }, {
          key: "removeItemsBasedOnPermissions",
          value: function removeItemsBasedOnPermissions(user, navItem) {
            var _this19 = this;

            if (navItem.permissionsRequired && !Object(___WEBPACK_IMPORTED_MODULE_2__["profileHasPermission"])(user, navItem.permissionsRequired)) {
              return;
            }

            var children = [];

            if (navItem.children) {
              children = navItem.children.map(function (child) {
                return _this19.removeItemsBasedOnPermissions(user, child);
              }).filter(function (item) {
                return item;
              }); // Remove undefined items
            }

            if (navItem.children && children.length === 0) {
              return;
            }

            return Object.assign(Object.assign({}, navItem), navItem.children && {
              children: children
            });
          }
        }, {
          key: "getNavigationTree",
          value: function getNavigationTree() {
            var _this20 = this;

            var includeHiddenItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.generatedNavTreeCache && !includeHiddenItems) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.generatedNavTreeCache);
            }

            if (this.generatedNavTreeCacheWithHiddenItems && includeHiddenItems) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.generatedNavTreeCacheWithHiddenItems);
            }

            return this.authenticationService.currentUserProfile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (userProfile) {
              if (!userProfile) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
              }

              var navTree = _this20.navigationTree.map(function (navItem) {
                return _this20.removeItemsBasedOnPermissions(userProfile, navItem);
              }).filter(function (item) {
                return item;
              }) // Remove undefined items
              .filter(function (item) {
                return !item.hidden || includeHiddenItems && item.hidden;
              }).map(function (navItem) {
                return _this20.addFieldsByConvention(navItem);
              });

              if (includeHiddenItems) {
                _this20.generatedNavTreeCacheWithHiddenItems = navTree;
              } else {
                _this20.generatedNavTreeCache = navTree;
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(navTree);
            }));
          }
        }]);

        return NavigationService;
      }();

      NavigationService.ɵfac = function NavigationService_Factory(t) {
        return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: NavigationService,
        factory: NavigationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ri4K":
    /*!*******************************************************************!*\
      !*** ./src/app/services/authentication/authentication.service.ts ***!
      \*******************************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function ri4K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "AytR");
      /* harmony import */


      var _user_account_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../user-account/permissions */
      "IFMO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(router, http) {
          _classCallCheck(this, AuthenticationService);

          this.router = router;
          this.http = http;
          this.currentUserProfile$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
          this.user = this.currentUserProfile$.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "userValue",
          get: function get() {
            return this.currentUserProfile$.value;
          }
        }, {
          key: "login",
          value: function login(userid, password) {
            var _this21 = this;

            var body = {
              userId: userid,
              password: password
            };
            var Api_Key = '418413972367e5976207eeb05530ec52213d3b0a0bfcb55001fa00eb0f1c4225';
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
            header = header.append('Api_Key', Api_Key);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl, "/userauthorization"), body, {
              headers: header
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userProfile) {
              localStorage.setItem('user', JSON.stringify(userProfile));

              _this21.currentUserProfile$.next(userProfile);

              return userProfile;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "currentUserHasPermission",
          value: function currentUserHasPermission(requiredPermissions) {
            return this.currentUserProfile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (userProfile) {
              return userProfile !== null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (userProfile) {
              if (!Object(_user_account_permissions__WEBPACK_IMPORTED_MODULE_5__["profileHasPermission"])(userProfile, requiredPermissions)) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
            }));
          }
        }, {
          key: "currentUserIsManager",
          value: function currentUserIsManager() {
            return this.currentUserProfile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (userProfile) {
              return userProfile !== null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (userProfile) {
              if (userProfile.userRole.groupName !== _user_account_permissions__WEBPACK_IMPORTED_MODULE_5__["Role"].Manager) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              console.error('An error occurred:', error.error.message);
            } else {
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error.message));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('user');
            this.currentUserProfile$.next(null);
            this.router.navigate(['/account/login']);
          }
        }, {
          key: "getCurrentUserIdAndName",
          value: function getCurrentUserIdAndName() {
            var userProfile = this.currentUserProfile$.getValue();

            if (userProfile) {
              return userProfile.userId.concat('-', userProfile.displayName).substring(0, 50);
            } else {
              return '';
            }
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: assetsRequiredPermissions, workordersRequiredPermissions, preventiveMaintenancePermissions, checkListPermissions, routes, AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "assetsRequiredPermissions", function () {
        return assetsRequiredPermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "workordersRequiredPermissions", function () {
        return workordersRequiredPermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "preventiveMaintenancePermissions", function () {
        return preventiveMaintenancePermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkListPermissions", function () {
        return checkListPermissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard */
      "CAFG");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./guards */
      "auXs");
      /* harmony import */


      var _DependencyResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./DependencyResolver */
      "FmHE");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services */
      "o0su");
      /* harmony import */


      var _guards_permission_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guards/permission.guard */
      "RGSW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var accountModule = function accountModule() {
        return __webpack_require__.e(
        /*! import() | user-account-account-module */
        "user-account-account-module").then(__webpack_require__.bind(null,
        /*! ./user-account/account.module */
        "7/y+")).then(function (x) {
          return x.AccountModule;
        });
      };

      var assetsRequiredPermissions = _defineProperty({}, _services__WEBPACK_IMPORTED_MODULE_4__["PermissionGroup"].Assets, [_services__WEBPACK_IMPORTED_MODULE_4__["AssetsPermissions"].CanViewAssetsList]);

      var workordersRequiredPermissions = _defineProperty({}, _services__WEBPACK_IMPORTED_MODULE_4__["PermissionGroup"].WorkOrders, [_services__WEBPACK_IMPORTED_MODULE_4__["WorkOrdersPermissions"].CanViewWorkOrders]);

      var preventiveMaintenancePermissions = _defineProperty({}, _services__WEBPACK_IMPORTED_MODULE_4__["PermissionGroup"].PreventiveMaintenance, [_services__WEBPACK_IMPORTED_MODULE_4__["PreventiveMaintenancePermissions"].CanViewPreventiveMaintenance]);

      var checkListPermissions = _defineProperty({}, _services__WEBPACK_IMPORTED_MODULE_4__["PermissionGroup"].CheckList, [_services__WEBPACK_IMPORTED_MODULE_4__["CheckListPermissions"].CanViewCheckList]);

      var routes = [{
        path: '',
        component: _dashboard__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: 'account',
        loadChildren: accountModule
      }, {
        path: 'dashboard',
        component: _dashboard__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: 'assets',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_permission_guard__WEBPACK_IMPORTED_MODULE_5__["PermissionGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | assets-assets-module */
          [__webpack_require__.e("default~assets-assets-module~check-lists-check-lists-module~preventive-maintenance-preventive-mainte~17d46ed1"), __webpack_require__.e("default~assets-assets-module~preventive-maintenance-preventive-maintenance-module~work-orders-work-o~5d9ab162"), __webpack_require__.e("common"), __webpack_require__.e("assets-assets-module")]).then(__webpack_require__.bind(null,
          /*! ./assets/assets.module */
          "MU9p")).then(function (m) {
            return m.AssetsModule;
          });
        },
        resolve: {
          dependenciesResolved: _DependencyResolver__WEBPACK_IMPORTED_MODULE_3__["DependencyResolver"]
        },
        data: {
          permissionsRequired: assetsRequiredPermissions
        }
      }, {
        path: 'spares',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | spares-spares-module */
          [__webpack_require__.e("default~assets-assets-module~check-lists-check-lists-module~preventive-maintenance-preventive-mainte~17d46ed1"), __webpack_require__.e("spares-spares-module")]).then(__webpack_require__.bind(null,
          /*! ./spares/spares.module */
          "2bTi")).then(function (m) {
            return m.SparesModule;
          });
        },
        resolve: {
          dependenciesResolved: _DependencyResolver__WEBPACK_IMPORTED_MODULE_3__["DependencyResolver"]
        }
      }, {
        path: 'work-orders',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_permission_guard__WEBPACK_IMPORTED_MODULE_5__["PermissionGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | work-orders-work-orders-module */
          [__webpack_require__.e("default~assets-assets-module~check-lists-check-lists-module~preventive-maintenance-preventive-mainte~17d46ed1"), __webpack_require__.e("default~assets-assets-module~preventive-maintenance-preventive-maintenance-module~work-orders-work-o~5d9ab162"), __webpack_require__.e("common"), __webpack_require__.e("work-orders-work-orders-module")]).then(__webpack_require__.bind(null,
          /*! ./work-orders/work-orders.module */
          "CycE")).then(function (m) {
            return m.WorkOrdersModule;
          });
        },
        resolve: {
          dependenciesResolved: _DependencyResolver__WEBPACK_IMPORTED_MODULE_3__["DependencyResolver"]
        },
        data: {
          permissionsRequired: workordersRequiredPermissions
        }
      }, {
        path: 'preventive-maintenance',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_permission_guard__WEBPACK_IMPORTED_MODULE_5__["PermissionGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | preventive-maintenance-preventive-maintenance-module */
          [__webpack_require__.e("default~assets-assets-module~check-lists-check-lists-module~preventive-maintenance-preventive-mainte~17d46ed1"), __webpack_require__.e("default~assets-assets-module~preventive-maintenance-preventive-maintenance-module~work-orders-work-o~5d9ab162"), __webpack_require__.e("preventive-maintenance-preventive-maintenance-module")]).then(__webpack_require__.bind(null,
          /*! ./preventive-maintenance/preventive-maintenance.module */
          "UpF3")).then(function (m) {
            return m.PreventiveMaintenanceModule;
          });
        },
        resolve: {
          dependenciesResolved: _DependencyResolver__WEBPACK_IMPORTED_MODULE_3__["DependencyResolver"]
        },
        data: {
          permissionsRequired: preventiveMaintenancePermissions
        }
      }, {
        path: 'check-list',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _guards_permission_guard__WEBPACK_IMPORTED_MODULE_5__["PermissionGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | check-lists-check-lists-module */
          [__webpack_require__.e("default~assets-assets-module~check-lists-check-lists-module~preventive-maintenance-preventive-mainte~17d46ed1"), __webpack_require__.e("check-lists-check-lists-module")]).then(__webpack_require__.bind(null,
          /*! ./check-lists/check-lists.module */
          "vCnL")).then(function (m) {
            return m.CheckListsModule;
          });
        },
        resolve: {
          dependenciesResolved: _DependencyResolver__WEBPACK_IMPORTED_MODULE_3__["DependencyResolver"]
        },
        data: {
          permissionsRequired: checkListPermissions
        }
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wvr3":
    /*!**********************************************************!*\
      !*** ./src/app/services/filehandler/filehandler.type.ts ***!
      \**********************************************************/

    /*! exports provided: Modules */

    /***/
    function wvr3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Modules", function () {
        return Modules;
      });

      var Modules;

      (function (Modules) {
        Modules[Modules["Asset"] = 0] = "Asset";
        Modules[Modules["WorkOrder"] = 1] = "WorkOrder";
      })(Modules || (Modules = {}));
      /***/

    },

    /***/
    "xnjJ":
    /*!*********************************************!*\
      !*** ./src/app/guards/error.interceptor.ts ***!
      \*********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function xnjJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services */
      "o0su");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authenticationService) {
          _classCallCheck(this, ErrorInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this22 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if ([401, 403].includes(err.status) && _this22.authenticationService.userValue) {
                // auto logout if 401 or 403 response returned from api
                _this22.authenticationService.logout();
              }

              var error = err.error.message || err.error;
              console.error(err);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zg3e":
    /*!*********************************************!*\
      !*** ./src/app/services/sku/sku.service.ts ***!
      \*********************************************/

    /*! exports provided: SkuService */

    /***/
    function zg3e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkuService", function () {
        return SkuService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../authentication/authentication.service */
      "ri4K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SkuService = /*#__PURE__*/function () {
        function SkuService(http, authenticationService) {
          _classCallCheck(this, SkuService);

          this.http = http;
          this.authenticationService = authenticationService;
          this.skuStockItemUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl, "/stock");
          this.sparesGroupUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl, "/stock/sparegroup");
        }

        _createClass(SkuService, [{
          key: "primarySiteId",
          get: function get() {
            var userProfile = this.authenticationService.currentUserProfile$.getValue();

            if (userProfile && userProfile.primarySite) {
              return userProfile.primarySite.id;
            }

            return null;
          }
        }, {
          key: "getSkuStockForSparesGroup",
          value: function getSkuStockForSparesGroup(sparesGroupId, sparesSubGroupId, take, offset, siteId, text) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.append('GroupId', sparesGroupId).append('SubGroupId', sparesSubGroupId).append('take', take.toString()).append('offset', offset.toString()).append('siteId', siteId);

            if (text) {
              params = params.append('text', text);
            }

            return this.http.get("".concat(this.skuStockItemUrl), {
              params: params
            });
          }
        }, {
          key: "getSkuStockForSpares",
          value: function getSkuStockForSpares(sparesGroups, text, siteId) {
            siteId = siteId || this.authenticationService.currentUserProfile$.value.primarySite.id;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();

            if (sparesGroups !== '') {
              var groups = sparesGroups.split('~', 2);
              params = params.append('GroupId', groups[0]);
              params = params.append('SubGroupId', groups[1]);
            }

            params = params.append('siteId', siteId);
            params = params.append('text', text);
            return this.http.get("".concat(this.skuStockItemUrl), {
              params: params
            });
          }
        }, {
          key: "getSparesGroups",
          value: function getSparesGroups(text, siteId) {
            siteId = siteId || this.authenticationService.currentUserProfile$.value.primarySite.id;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.append('siteId', siteId);

            if (text) {
              params = params.append('text', text);
            }

            return this.http.get("".concat(this.sparesGroupUrl, "/"), {
              params: params
            });
          }
        }, {
          key: "getSkuStockForSkuId",
          value: function getSkuStockForSkuId(skuId) {
            var siteId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.primarySiteId;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            params = params.append('text', skuId.toString()).append('siteId', siteId);
            return this.http.get("".concat(this.skuStockItemUrl), {
              params: params
            });
          }
        }]);

        return SkuService;
      }();

      SkuService.ɵfac = function SkuService_Factory(t) {
        return new (t || SkuService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      SkuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: SkuService,
        factory: SkuService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map