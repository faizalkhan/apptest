(function () {
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assets-assets-module"], {
    /***/
    "+CPk":
    /*!***********************************************************!*\
      !*** ./src/app/assets/asset-item/asset-item.component.ts ***!
      \***********************************************************/

    /*! exports provided: AssetItemComponent */

    /***/
    function CPk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetItemComponent", function () {
        return AssetItemComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_asset_asset_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/asset/asset.types */
      "JSbE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssetItemComponent = /*#__PURE__*/function () {
        function AssetItemComponent(router) {
          _classCallCheck(this, AssetItemComponent);

          this.router = router;
        }

        _createClass(AssetItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleSelectedAssetClick",
          value: function handleSelectedAssetClick(assetId, assetCode) {
            this.router.navigate(['assets', assetId + '&&' + assetCode]);
          }
        }]);

        return AssetItemComponent;
      }();

      AssetItemComponent.ɵfac = function AssetItemComponent_Factory(t) {
        return new (t || AssetItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      AssetItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AssetItemComponent,
        selectors: [["app-asset-item"]],
        inputs: {
          assetItem: "assetItem"
        },
        decls: 9,
        vars: 2,
        consts: [[1, "sm-pad"], [1, "row-toggle", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 8.797 5.194"], ["d", "M8,0l.8.8-4.4,4.4Q2.2,3,0,.8L.8,0C.81-.014,4.394,3.625,4.394,3.625S8.006,0,8,0Z"]],
        template: function AssetItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssetItemComponent_Template_div_click_5_listener() {
              return ctx.handleSelectedAssetClick(ctx.assetItem.id, ctx.assetItem.assetCode);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.assetItem.assetId, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.assetItem.name, "\n");
          }
        },
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n[_nghost-%COMP%] {\n  display: table-row;\n  background-color: #f2f2f2;\n  line-height: 1.1;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.8em;\n  text-align: left;\n  vertical-align: middle;\n  position: relative;\n  height: 5em;\n  border-bottom: 2px solid white;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:after {\n  content: \" \";\n  position: absolute;\n  top: 0.8em;\n  bottom: 0.8em;\n  right: 0;\n  width: 1px;\n  background-color: #bcbcbc;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:last-child:after, [_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-last-child(2):after {\n  display: none;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:last-of-type {\n  position: relative;\n}\n[_nghost-%COMP%]   .row-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-right: 1em;\n  top: 0;\n  right: 0;\n  padding-top: 1.6em;\n  padding-bottom: 1.6em;\n  padding-left: 1em;\n  transition: all 0.2s ease-in-out;\n  background: rgba(0, 0, 0, 0.05);\n}\n[_nghost-%COMP%]   .row-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n@media screen and (max-width: 768px) {\n  td[_ngcontent-%COMP%] {\n    display: none;\n  }\n  td[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]:nth-child(2), td[_ngcontent-%COMP%]:last-child {\n    display: table-cell;\n  }\n  td[_ngcontent-%COMP%]:nth-child(2):after {\n    display: none;\n  }\n}\n@media screen and (max-width: 575px) {\n  td.sm-pad[_ngcontent-%COMP%] {\n    padding: 0.6em 1.8em 0.6em 0.6em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcX2dsb2JhbHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGFzc2V0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0U7Ozs7SUFJRSx3QkFBQTtFQ2pCRjs7RURtQkE7SUFDRSxvQkFBQTtJQUNBLHNCQWJpQjtFQ0huQjs7RURrQkE7SUFDRSx5QkFBQTtJQUNBLDBCQUFBO0VDZkY7QUFDRjtBQWRBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBZ0JGO0FBZkU7RUFDRSxjQVB1QjtFQVF2QixnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFpQko7QUFmSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBakJxQjtFQWtCckIsYUFsQnFCO0VBbUJyQixRQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBaUJOO0FBZEk7RUFFRSxhQUFBO0FBZU47QUFaSTtFQUNFLGtCQUFBO0FBY047QUFYRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUFhSjtBQVhJO0VBQ0UseUJBQUE7QUFhTjtBQVRBO0VBQ0U7SUFDRSxhQUFBO0VBWUY7RUFWRTtJQUdFLG1CQUFBO0VBVUo7RUFQRTtJQUNFLGFBQUE7RUFTSjtBQUNGO0FBTEE7RUFDRTtJQUNFLGdDQUFBO0VBT0Y7QUFDRiIsImZpbGUiOiJhc3NldC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9AdGFyb3B1bXBzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuJG5hdi1ncmV5OiAjZTJlMmUyO1xyXG4kc2VhcmNoLWdyZXk6ICNmMmYyZjI7XHJcbiRoZWFkZXItcGFkZGluZzogMi41cmVtO1xyXG4kaGVhZGVyLXBhZGRpbmctc206IDFyZW07XHJcbiRiYXNlLW5hdi13aWR0aDogNy45ZW07XHJcbiRleHBhbmRlZC1uYXYtd2lkdGg6IDIwZW07XHJcbiRoZWFkZXItaGVpZ2h0OiAxMi40cmVtO1xyXG4kbWVudS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZzogMXJlbSAzLjNyZW07XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmctc206IDFyZW0gMS43cmVtO1xyXG4kY29udGVudC1hcmVhLWNvbG9yOiAjZmZmO1xyXG4kd2FybmluZzogI0VBMDAyOTtcclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5hcHAtaGVhZGVyLFxyXG4gIC5mdW5jdGlvbi1iYXIsXHJcbiAgYXBwLXNlY3Rpb24taGVhZGVyLFxyXG4gIC5tZWRpYS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFwcC1jb250ZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1hcmVhLWNvbG9yO1xyXG4gIH1cclxuICAubWVkaWEtcHJpbnQge1xyXG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgcHJpbnQge1xuICAuYXBwLWhlYWRlcixcbi5mdW5jdGlvbi1iYXIsXG5hcHAtc2VjdGlvbi1oZWFkZXIsXG4ubWVkaWEtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFwcC1jb250ZW50LWFyZWEge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAubWVkaWEtcHJpbnQge1xuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjpob3N0IHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuOmhvc3QgdGQge1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuOmhvc3QgdGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuOGVtO1xuICBib3R0b206IDAuOGVtO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYmNiYztcbn1cbjpob3N0IHRkOmxhc3QtY2hpbGQ6YWZ0ZXIsIDpob3N0IHRkOm50aC1sYXN0LWNoaWxkKDIpOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IHRkOmxhc3Qtb2YtdHlwZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5yb3ctdG9nZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAxLjZlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG46aG9zdCAucm93LXRvZ2dsZSBzdmcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICB0ZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICB0ZDpmaXJzdC1jaGlsZCwgdGQ6bnRoLWNoaWxkKDIpLCB0ZDpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB9XG4gIHRkOm50aC1jaGlsZCgyKTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgdGQuc20tcGFkIHtcbiAgICBwYWRkaW5nOiAwLjZlbSAxLjhlbSAwLjZlbSAwLjZlbTtcbiAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "+xyr":
    /*!********************************************!*\
      !*** ./src/app/assets/assets.component.ts ***!
      \********************************************/

    /*! exports provided: AssetsComponent */

    /***/
    function xyr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetsComponent", function () {
        return AssetsComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_asset_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/asset/asset.service */
      "D7Wi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared-module/section-header/section-header.component */
      "OeDX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _asset_item_asset_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./asset-item/asset-item.component */
      "+CPk");

      function AssetsComponent_tbody_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetsComponent_tbody_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " No assets found for this site ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetsComponent_tbody_19_app_asset_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-asset-item", 14);
        }

        if (rf & 2) {
          var assetItem_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("assetItem", assetItem_r6);
        }
      }

      function AssetsComponent_tbody_19_tr_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetsComponent_tbody_19_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetsComponent_tbody_19_tr_3_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r7.loadNextAssetlist();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Load More");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetsComponent_tbody_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AssetsComponent_tbody_19_app_asset_item_1_Template, 1, 1, "app-asset-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AssetsComponent_tbody_19_tr_2_Template, 3, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AssetsComponent_tbody_19_tr_3_Template, 6, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.assets);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isGettingNextAssets);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.shouldGetNextAssets && !ctx_r2.isGettingNextAssets && ctx_r2.assets.length > 0);
        }
      }

      var AssetsComponent = /*#__PURE__*/function () {
        function AssetsComponent(formBuilder, assetService) {
          _classCallCheck(this, AssetsComponent);

          this.assetService = assetService;
          this.assets = [];
          this.isSearching = false;
          this.takeSize = 20;
          this.isGettingNextAssets = false;
          this.shouldGetNextAssets = false;
          this.searchForm = formBuilder.group({
            text: ''
          });
        }

        _createClass(AssetsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.initiateFreshSearchSettings();
            this.searchForm.get('text').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (textValue) {
              return textValue.length >= 3 || textValue.length === 0;
            })).subscribe(function () {
              return _this.submitSearch();
            });
            this.loadNextAssetlist();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.safelyDestroySearchSubscription();
          }
        }, {
          key: "submitSearch",
          value: function submitSearch() {
            this.initiateFreshSearchSettings();
            this.loadNextAssetlist();
          }
        }, {
          key: "initiateFreshSearchSettings",
          value: function initiateFreshSearchSettings() {
            this.assets = [];
            this.offset = 0;
            this.shouldGetNextAssets = true;
          }
        }, {
          key: "loadNextAssetlist",
          value: function loadNextAssetlist() {
            var _this2 = this;

            this.isGettingNextAssets = true;
            this.safelyDestroySearchSubscription();
            this.searchSubcription = this.assetService.listAssets({
              offset: this.offset,
              take: this.takeSize,
              text: this.searchForm.value.text
            }).subscribe(function (assets) {
              var _this2$assets;

              (_this2$assets = _this2.assets).push.apply(_this2$assets, _toConsumableArray(assets));

              _this2.offset += _this2.takeSize;

              if (assets.length < _this2.takeSize) {
                _this2.shouldGetNextAssets = false;
              }

              _this2.isGettingNextAssets = false;
            });
          }
        }, {
          key: "safelyDestroySearchSubscription",
          value: function safelyDestroySearchSubscription() {
            this.searchSubcription && !this.searchSubcription.closed && this.searchSubcription.unsubscribe();
          }
        }]);

        return AssetsComponent;
      }();

      AssetsComponent.ɵfac = function AssetsComponent_Factory(t) {
        return new (t || AssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_asset_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"]));
      };

      AssetsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AssetsComponent,
        selectors: [["app-assets"]],
        decls: 20,
        vars: 4,
        consts: [[1, "row", "search-row", 3, "formGroup"], [1, "col-lg-4", "col-sm-6"], [1, "form-group"], [1, "input-with-search-wrapper"], ["type", "text", "formControlName", "text", "placeholder", "Search by Id or Name", 1, "form-control", "form-control--search-prefix"], [1, "row"], [1, "col-12"], [4, "ngIf"], ["colspan", "8"], [1, "spinner"], [1, "mt-3"], [3, "assetItem", 4, "ngFor", "ngForOf"], ["class", "loading-row", 4, "ngIf"], ["class", "load-more-row", 4, "ngIf"], [3, "assetItem"], [1, "loading-row"], ["colspan", "7"], [1, "load-more-row"], ["colspan", "7", 1, "pt-3", "text-center"], [1, "btn", "btn-link", 3, "click"]],
        template: function AssetsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-section-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Assets");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AssetsComponent_tbody_17_Template, 4, 0, "tbody", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AssetsComponent_tbody_18_Template, 5, 0, "tbody", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AssetsComponent_tbody_19_Template, 4, 3, "tbody", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSearching || ctx.isGettingNextAssets);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.assets.length === 0 && !ctx.isSearching && !ctx.isGettingNextAssets);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.assets.length > 0 && !ctx.isSearching);
          }
        },
        directives: [_shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_4__["SectionHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _asset_item_asset_item_component__WEBPACK_IMPORTED_MODULE_6__["AssetItemComponent"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin-top: -0.8em;\n  margin-bottom: 1em;\n}\n.search-row[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n  padding-bottom: 0.5em;\n  border-bottom: 1px solid #E5E5E5;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.875em;\n  text-align: left;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n  padding-left: 0.9em;\n  width: 15%;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 0.9em;\n  width: 85%;\n}\n@media screen and (max-width: 768px) {\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: none;\n  }\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2), table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    display: table-cell;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFxfZ2xvYmFsdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0U7Ozs7SUFJRSx3QkFBQTtFQ2pCRjs7RURtQkE7SUFDRSxvQkFBQTtJQUNBLHNCQWJpQjtFQ0huQjs7RURrQkE7SUFDRSx5QkFBQTtJQUNBLDBCQUFBO0VDZkY7QUFDRjtBQWhCQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBa0JGO0FBZkE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFrQkY7QUFkQTtFQUNFLFdBQUE7QUFpQkY7QUFoQkU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFrQko7QUFqQkk7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFtQk47QUFqQkk7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFtQk47QUFkQTtFQUVJOztJQUVFLGFBQUE7RUFnQko7RUFmSTs7OztJQUdFLG1CQUFBO0VBa0JOO0FBQ0YiLCJmaWxlIjoiYXNzZXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9AdGFyb3B1bXBzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuJG5hdi1ncmV5OiAjZTJlMmUyO1xyXG4kc2VhcmNoLWdyZXk6ICNmMmYyZjI7XHJcbiRoZWFkZXItcGFkZGluZzogMi41cmVtO1xyXG4kaGVhZGVyLXBhZGRpbmctc206IDFyZW07XHJcbiRiYXNlLW5hdi13aWR0aDogNy45ZW07XHJcbiRleHBhbmRlZC1uYXYtd2lkdGg6IDIwZW07XHJcbiRoZWFkZXItaGVpZ2h0OiAxMi40cmVtO1xyXG4kbWVudS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZzogMXJlbSAzLjNyZW07XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmctc206IDFyZW0gMS43cmVtO1xyXG4kY29udGVudC1hcmVhLWNvbG9yOiAjZmZmO1xyXG4kd2FybmluZzogI0VBMDAyOTtcclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5hcHAtaGVhZGVyLFxyXG4gIC5mdW5jdGlvbi1iYXIsXHJcbiAgYXBwLXNlY3Rpb24taGVhZGVyLFxyXG4gIC5tZWRpYS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFwcC1jb250ZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1hcmVhLWNvbG9yO1xyXG4gIH1cclxuICAubWVkaWEtcHJpbnQge1xyXG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgcHJpbnQge1xuICAuYXBwLWhlYWRlcixcbi5mdW5jdGlvbi1iYXIsXG5hcHAtc2VjdGlvbi1oZWFkZXIsXG4ubWVkaWEtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFwcC1jb250ZW50LWFyZWEge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAubWVkaWEtcHJpbnQge1xuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmgyIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogLTAuOGVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5zZWFyY2gtcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSB0aGVhZCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnRhYmxlIHRoZWFkIHRoOm50aC1jaGlsZCgxKSB7XG4gIHBhZGRpbmctbGVmdDogMC45ZW07XG4gIHdpZHRoOiAxNSU7XG59XG50YWJsZSB0aGVhZCB0aDpudGgtY2hpbGQoMikge1xuICBwYWRkaW5nLWxlZnQ6IDAuOWVtO1xuICB3aWR0aDogODUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICB0YWJsZSB0aCxcbnRhYmxlIHRkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIHRhYmxlIHRoOmZpcnN0LWNoaWxkLCB0YWJsZSB0aDpudGgtY2hpbGQoMiksIHRhYmxlIHRoOmxhc3QtY2hpbGQsXG50YWJsZSB0ZDpmaXJzdC1jaGlsZCxcbnRhYmxlIHRkOm50aC1jaGlsZCgyKSxcbnRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "8pem":
    /*!***********************************************************!*\
      !*** ./src/app/assets/view-asset/list-subgroup.wizard.ts ***!
      \***********************************************************/

    /*! exports provided: SubGroupWizard */

    /***/
    function pem(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubGroupWizard", function () {
        return SubGroupWizard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SubGroupWizard = /*#__PURE__*/function () {
        function SubGroupWizard() {
          _classCallCheck(this, SubGroupWizard);
        }

        _createClass(SubGroupWizard, [{
          key: "reset",
          value: function reset() {
            this.listSubGroup = undefined;
          }
        }]);

        return SubGroupWizard;
      }();

      SubGroupWizard.ɵfac = function SubGroupWizard_Factory(t) {
        return new (t || SubGroupWizard)();
      };

      SubGroupWizard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SubGroupWizard,
        factory: SubGroupWizard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AV5o":
    /*!*************************************************!*\
      !*** ./src/app/assets/assets-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: routes, AssetsRoutingModule */

    /***/
    function AV5o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetsRoutingModule", function () {
        return AssetsRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _assets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assets.component */
      "+xyr");
      /* harmony import */


      var _view_asset_view_asset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-asset/view-asset.component */
      "nBU3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _assets_component__WEBPACK_IMPORTED_MODULE_1__["AssetsComponent"]
      }, {
        path: ':id',
        component: _view_asset_view_asset_component__WEBPACK_IMPORTED_MODULE_2__["ViewAssetComponent"]
      }];

      var AssetsRoutingModule = /*#__PURE__*/_createClass(function AssetsRoutingModule() {
        _classCallCheck(this, AssetsRoutingModule);
      });

      AssetsRoutingModule.ɵfac = function AssetsRoutingModule_Factory(t) {
        return new (t || AssetsRoutingModule)();
      };

      AssetsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AssetsRoutingModule
      });
      AssetsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AssetsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "IlCi":
    /*!***************************************************!*\
      !*** ./src/app/services/vendor/vendor.service.ts ***!
      \***************************************************/

    /*! exports provided: VendorService */

    /***/
    function IlCi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorService", function () {
        return VendorService;
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

      var VendorService = /*#__PURE__*/function () {
        function VendorService(httpClient, authenticationService) {
          _classCallCheck(this, VendorService);

          this.httpClient = httpClient;
          this.authenticationService = authenticationService;
          this.vendorURL = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl, "/vendor");
        }

        _createClass(VendorService, [{
          key: "primarySiteId",
          get: function get() {
            var userProfile = this.authenticationService.currentUserProfile$.getValue();

            if (userProfile && userProfile.primarySite) {
              return userProfile.primarySite.id;
            }

            return null;
          }
        }, {
          key: "getVendor",
          value: function getVendor(vendor) {
            return this.httpClient.get("".concat(this.vendorURL, "?siteId=").concat(this.primarySiteId, "&Text=").concat(vendor));
          }
        }]);

        return VendorService;
      }();

      VendorService.ɵfac = function VendorService_Factory(t) {
        return new (t || VendorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      VendorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: VendorService,
        factory: VendorService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "MU9p":
    /*!*****************************************!*\
      !*** ./src/app/assets/assets.module.ts ***!
      \*****************************************/

    /*! exports provided: AssetsModule */

    /***/
    function MU9p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssetsModule", function () {
        return AssetsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared-module/shared-module.module */
      "QYs8");
      /* harmony import */


      var _asset_item_asset_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./asset-item/asset-item.component */
      "+CPk");
      /* harmony import */


      var _assets_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./assets-routing.module */
      "AV5o");
      /* harmony import */


      var _assets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./assets.component */
      "+xyr");
      /* harmony import */


      var _view_asset_view_asset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view-asset/view-asset.component */
      "nBU3");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var src_utils_dateUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/utils/dateUtils */
      "Y4NF");
      /* harmony import */


      var _view_asset_list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./view-asset/list-vendor/list-vendor.component */
      "Zue0");
      /* harmony import */


      var _view_asset_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./view-asset/list-group/list-group.component */
      "n/kG");
      /* harmony import */


      var _view_asset_list_sub_group_list_sub_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./view-asset/list-sub-group/list-sub-group.component */
      "gccc");
      /* harmony import */


      var _view_asset_list_attached_files_list_attached_files_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./view-asset/list-attached-files/list-attached-files.component */
      "hP9e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PickDateAdapter = /*#__PURE__*/function (_angular_material_cor) {
        _inherits(PickDateAdapter, _angular_material_cor);

        var _super = _createSuper(PickDateAdapter);

        function PickDateAdapter() {
          _classCallCheck(this, PickDateAdapter);

          return _super.apply(this, arguments);
        }

        _createClass(PickDateAdapter, [{
          key: "format",
          value: function format(date, displayFormat) {
            if (displayFormat === 'input') {
              return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'dd MMM yyyy', this.locale);
            } else {
              return date.toDateString();
            }
          }
        }]);

        return PickDateAdapter;
      }(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NativeDateAdapter"]);

      var AssetsModule = /*#__PURE__*/_createClass(function AssetsModule() {
        _classCallCheck(this, AssetsModule);
      });

      AssetsModule.ɵfac = function AssetsModule_Factory(t) {
        return new (t || AssetsModule)();
      };

      AssetsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: AssetsModule
      });
      AssetsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          useClass: PickDateAdapter
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],
          useValue: src_utils_dateUtils__WEBPACK_IMPORTED_MODULE_9__["dateFormatWithMonthName"]
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _assets_routing_module__WEBPACK_IMPORTED_MODULE_4__["AssetsRoutingModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AssetsModule, {
          declarations: [_assets_component__WEBPACK_IMPORTED_MODULE_5__["AssetsComponent"], _asset_item_asset_item_component__WEBPACK_IMPORTED_MODULE_3__["AssetItemComponent"], _view_asset_view_asset_component__WEBPACK_IMPORTED_MODULE_6__["ViewAssetComponent"], _view_asset_list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_10__["ListVendorComponent"], _view_asset_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_11__["ListGroupComponent"], _view_asset_list_sub_group_list_sub_group_component__WEBPACK_IMPORTED_MODULE_12__["ListSubGroupComponent"], _view_asset_list_attached_files_list_attached_files_component__WEBPACK_IMPORTED_MODULE_13__["ListAttachedFilesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _assets_routing_module__WEBPACK_IMPORTED_MODULE_4__["AssetsRoutingModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"]]
        });
      })();
      /***/

    },

    /***/
    "Zue0":
    /*!************************************************************************!*\
      !*** ./src/app/assets/view-asset/list-vendor/list-vendor.component.ts ***!
      \************************************************************************/

    /*! exports provided: ListVendorComponent */

    /***/
    function Zue0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListVendorComponent", function () {
        return ListVendorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/vendor/vendor.service */
      "IlCi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["searchInput"];
      var _c1 = ["searchResult"];

      function ListVendorComponent_div_7_div_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListVendorComponent_div_7_div_1_button_1_Template_button_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r8.handleVendorListResultKeyUp($event);
          })("click", function ListVendorComponent_div_7_div_1_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var vendor_r6 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r10.handleVendorListResultClick(vendor_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vendor_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-sitename", vendor_r6.vendorInfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vendor_r6.vendorInfo, " ");
        }
      }

      function ListVendorComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListVendorComponent_div_7_div_1_button_1_Template, 3, 2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.listVendorResults);
        }
      }

      function ListVendorComponent_div_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No vendor found ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListVendorComponent_div_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListVendorComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListVendorComponent_div_7_div_1_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListVendorComponent_div_7_div_2_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListVendorComponent_div_7_div_3_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isVendorSearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.listVendorResults.length === 0 && !ctx_r1.isVendorSearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isVendorSearching);
        }
      }

      var ListVendorComponent = /*#__PURE__*/function () {
        function ListVendorComponent(formBuilder, vendorService) {
          _classCallCheck(this, ListVendorComponent);

          this.formBuilder = formBuilder;
          this.vendorService = vendorService;
          this.listVendorResultsVisible = false;
          this.isVendorSearching = false;
          this.listVendorResults = [];
          this.isVendorSelected = false;
          this.selectedVendorId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.listVendorForm = this.formBuilder.group({
            text: '',
            vendorId: null
          });
        }

        _createClass(ListVendorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.listVendorForm.get('text').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return textValue.length >= 3;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return !_this3.vendorNameIsInListResults(textValue);
            })).subscribe(function () {
              return _this3.listVendor();
            });
            this.listVendorForm.get('text').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return textValue.length < 3;
            })).subscribe(function () {
              _this3.listVendorResultsVisible = false;
            });
            this.listVendorForm.get('text').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return textValue.length === 0;
            })).subscribe(function () {
              _this3.selectedVendorId.emit(null);
            });

            if (this.vendorName) {
              this.listVendorForm.setValue({
                text: this.vendorName,
                vendorId: ''
              });
            }
          }
        }, {
          key: "listVendor",
          value: function listVendor() {
            var _this4 = this;

            this.listVendorSubscription && !this.listVendorSubscription.closed && this.listVendorSubscription.unsubscribe();
            var textValue = this.listVendorForm.get('text').value;

            if (this.isVendorSelected === false) {
              this.isVendorSearching = true;
              this.listVendorResultsVisible = this.listVendorForm.get('text').dirty ? true : false;
              this.listVendorSubscription = this.vendorService.getVendor(textValue).subscribe(function (data) {
                _this4.listVendorResults = data;
                _this4.isVendorSearching = false;
              });
            }
          }
        }, {
          key: "handleVendorListKeyUp",
          value: function handleVendorListKeyUp(event) {
            this.isVendorSelected = false;

            switch (event.key) {
              case 'ArrowDown':
                var resultButtons = this.searchResultElements.toArray();
                resultButtons.length > 0 && resultButtons[0].nativeElement.focus();
                break;

              case 'Escape':
                this.clearlistVendorForm();
                break;
            }
          }
        }, {
          key: "handleVendorListResultKeyUp",
          value: function handleVendorListResultKeyUp(event) {
            switch (event.key) {
              case 'ArrowUp':
                var firstResultButton = this.searchResultElements.toArray()[0].nativeElement;

                if (event.target === firstResultButton) {
                  this.searchInputElement.nativeElement.focus();
                } else {
                  event.target.previousSibling.focus();
                }

                break;

              case 'ArrowDown':
                if (event.target.nextElementSibling != null) {
                  event.target.nextSibling && event.target.nextSibling.focus();
                }

                break;

              case 'Escape':
                this.clearlistVendorForm();
                break;
            }
          }
        }, {
          key: "handleVendorListResultClick",
          value: function handleVendorListResultClick(vendor) {
            this.listVendorForm.setValue({
              text: vendor.vendorInfo,
              vendorId: vendor.id
            });
            this.listVendorResultsVisible = false;
            this.isVendorSelected = true;
            this.selectedVendorId.emit(vendor.vendorInfo);
          }
        }, {
          key: "handleVendorListBlur",
          value: function handleVendorListBlur() {
            var _this5 = this;

            setTimeout(function () {
              var searchValue = _this5.listVendorForm.get('text').value;

              var activeElement = document.activeElement;

              if (_this5.vendorNameIsInListResults(searchValue) || activeElement.dataset.sitename) {
                return;
              }

              if (!searchValue) {
                _this5.clearlistVendorForm();
              }
            }, 0);
          }
        }, {
          key: "vendorNameIsInListResults",
          value: function vendorNameIsInListResults(searchText) {
            var result = false;

            var _iterator = _createForOfIteratorHelper(this.listVendorResults),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var vendor = _step.value;

                if (vendor.vendorInfo === searchText) {
                  result = true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return result;
          }
        }, {
          key: "clearlistVendorForm",
          value: function clearlistVendorForm() {
            this.listVendorForm.setValue({
              text: '',
              vendorId: null
            });
            this.listVendorResultsVisible = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.listVendorSubscription && !this.listVendorSubscription.closed && this.listVendorSubscription.unsubscribe();
          }
        }]);

        return ListVendorComponent;
      }();

      ListVendorComponent.ɵfac = function ListVendorComponent_Factory(t) {
        return new (t || ListVendorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_3__["VendorService"]));
      };

      ListVendorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListVendorComponent,
        selectors: [["app-list-vendor"]],
        viewQuery: function ListVendorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInputElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchResultElements = _t);
          }
        },
        inputs: {
          isEditable: "isEditable",
          vendorName: "vendorName"
        },
        outputs: {
          selectedVendorId: "selectedVendorId"
        },
        decls: 8,
        vars: 5,
        consts: [[1, "row", 3, "formGroup"], [1, "form-group"], [1, "find-as-you-type"], ["formControlName", "text", "type", "text", "placeholder", "Select Vendor", 1, "form-control", 3, "readonly", "blur", "keyup"], ["searchInput", ""], ["formControlName", "vendorId", "type", "hidden"], [4, "ngIf"], ["class", "find-as-you-type__results dropdown-scroll", 4, "ngIf"], ["class", "find-as-you-type__no-results", 4, "ngIf"], ["class", "find-as-you-type__spinner-container", 4, "ngIf"], [1, "find-as-you-type__results", "dropdown-scroll"], ["class", "select-vendor-btn", 3, "keyup", "click", 4, "ngFor", "ngForOf"], [1, "select-vendor-btn", 3, "keyup", "click"], ["searchResult", ""], [1, "find-as-you-type__no-results"], [1, "find-as-you-type__spinner-container"], [1, "spinner"]],
        template: function ListVendorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ListVendorComponent_Template_input_blur_4_listener() {
              return ctx.handleVendorListBlur();
            })("keyup", function ListVendorComponent_Template_input_keyup_4_listener($event) {
              return ctx.handleVendorListKeyUp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListVendorComponent_div_7_Template, 4, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.listVendorForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("find-as-you-type--suggestions-visible", ctx.isVendorSearching || ctx.listVendorResultsVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listVendorResultsVisible);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: [".find-as-you-type[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 5;\n}\n.find-as-you-type[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n.find-as-you-type__results[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], .find-as-you-type__no-results[_ngcontent-%COMP%], .find-as-you-type__spinner-container[_ngcontent-%COMP%] {\n  padding: 0.8em 1.2em;\n  background-color: #f2f2f2;\n  border: 1px solid #ced4da;\n  display: block;\n}\n.find-as-you-type__results[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .dropdown-scroll[_ngcontent-%COMP%] {\n  max-height: 150px;\n  border-bottom: solid 2px #ced4da;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .dropdown-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .find-as-you-type[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(106, 149, 91, 0.25);\n  position: relative;\n  background-color: #fff;\n  z-index: 5;\n}\n.find-as-you-type[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0 auto;\n}\n.find-as-you-type--suggestions-visible[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGlzdC12ZW5kb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFRTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFBSjtBQUlJO0VBQ0csY0FBQTtFQUNELFdBQUE7RUFDQSxnQkFBQTtBQUZOO0FBTUU7RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7QUFMSjtBQVFFO0VBQ0UsaURBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQU5KO0FBU0U7RUFDRSxzQkFBQTtBQVBKO0FBVUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFSSjtBQVlJO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQVZOIiwiZmlsZSI6Imxpc3QtdmVuZG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbmQtYXMteW91LXR5cGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA1O1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICZfX3Jlc3VsdHMgPiBidXR0b24sICZfX25vLXJlc3VsdHMsICZfX3NwaW5uZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDEuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Jlc3VsdHMge1xyXG4gICAgPiBidXR0b24ge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLXNjcm9sbHtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNjZWQ0ZGE7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cywgYnV0dG9uOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEwNiwgMTQ5LCA5MSwgMC4yNSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDogNTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gICYtLXN1Z2dlc3Rpb25zLXZpc2libGUge1xyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "gccc":
    /*!******************************************************************************!*\
      !*** ./src/app/assets/view-asset/list-sub-group/list-sub-group.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ListSubGroupComponent */

    /***/
    function gccc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListSubGroupComponent", function () {
        return ListSubGroupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["searchInput"];
      var _c1 = ["searchResult"];

      function ListSubGroupComponent_div_7_div_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListSubGroupComponent_div_7_div_1_button_1_Template_button_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r8.handleSubGroupListResultKeyUp($event);
          })("click", function ListSubGroupComponent_div_7_div_1_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var subGroup_r6 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r10.handleSubGroupListResultClick(subGroup_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subGroup_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-sitename", subGroup_r6.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subGroup_r6.name, " ");
        }
      }

      function ListSubGroupComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListSubGroupComponent_div_7_div_1_button_1_Template, 3, 2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.listSubGroupResults);
        }
      }

      function ListSubGroupComponent_div_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No subgroup found ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListSubGroupComponent_div_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListSubGroupComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListSubGroupComponent_div_7_div_1_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListSubGroupComponent_div_7_div_2_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListSubGroupComponent_div_7_div_3_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isSubGroupSearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.listSubGroupResults.length === 0 && !ctx_r1.isSubGroupSearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubGroupSearching);
        }
      }

      var ListSubGroupComponent = /*#__PURE__*/function () {
        function ListSubGroupComponent(formBuilder) {
          _classCallCheck(this, ListSubGroupComponent);

          this.formBuilder = formBuilder;
          this.listSubGroupResultsVisible = false;
          this.isSubGroupSearching = false;
          this.listSubGroupResults = [];
          this.isSubGroupSelected = false;
          this.subGroupId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.listSubGroupForm = this.formBuilder.group({
            text: '',
            subGroupId: null
          });
        }

        _createClass(ListSubGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.listSubGroupForm.get('text').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return textValue.length >= 3;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return !_this6.subGroupNameIsInListResults(textValue);
            })).subscribe(function () {
              return _this6.listSubGroup();
            });
            this.listSubGroupForm.get('text').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return textValue.length < 3;
            })).subscribe(function () {
              _this6.listSubGroupResultsVisible = false;
            });

            if (this.assetSubGroupName) {
              this.listSubGroupForm.get('text').setValue(this.assetSubGroupName);
            }
          }
        }, {
          key: "listSubGroup",
          value: function listSubGroup() {
            if (this.listSubGroups && this.isSubGroupSelected === false) {
              var textValue = this.listSubGroupForm.get('text').value.toLowerCase();
              this.isSubGroupSearching = true;
              this.listSubGroupResultsVisible = this.listSubGroupForm.get('text').dirty ? true : false;
              this.listSubGroupResults = this.listSubGroups.filter(function (subGroup) {
                return subGroup.name.toLowerCase().includes(textValue);
              });
              this.isSubGroupSearching = false;
            }
          }
        }, {
          key: "handleSubGroupListKeyUp",
          value: function handleSubGroupListKeyUp(event) {
            this.isSubGroupSelected = false;

            switch (event.key) {
              case 'ArrowDown':
                var resultButtons = this.searchResultElements.toArray();
                resultButtons.length > 0 && resultButtons[0].nativeElement.focus();
                break;

              case 'Escape':
                this.clearlistSubGroupForm();
                break;
            }
          }
        }, {
          key: "handleSubGroupListResultKeyUp",
          value: function handleSubGroupListResultKeyUp(event) {
            switch (event.key) {
              case 'ArrowUp':
                var firstResultButton = this.searchResultElements.toArray()[0].nativeElement;

                if (event.target === firstResultButton) {
                  this.searchInputElement.nativeElement.focus();
                } else {
                  event.target.previousSibling.focus();
                }

                break;

              case 'ArrowDown':
                if (event.target.nextElementSibling != null) {
                  event.target.nextSibling && event.target.nextSibling.focus();
                }

                break;

              case 'Escape':
                this.clearlistSubGroupForm();
                break;
            }
          }
        }, {
          key: "handleSubGroupListResultClick",
          value: function handleSubGroupListResultClick(subGroup) {
            this.listSubGroupForm.setValue({
              text: subGroup.name,
              subGroupId: subGroup.id
            });
            this.listSubGroupResultsVisible = false;
            this.isSubGroupSelected = true;
            this.subGroupId.emit(subGroup.id);
          }
        }, {
          key: "handleSubGroupListBlur",
          value: function handleSubGroupListBlur() {
            var _this7 = this;

            setTimeout(function () {
              var searchValue = _this7.listSubGroupForm.get('text').value;

              if (_this7.subGroupNameIsInListResults(searchValue) || searchValue !== '') {
                return;
              }

              _this7.clearlistSubGroupForm();
            }, 0);
          }
        }, {
          key: "subGroupNameIsInListResults",
          value: function subGroupNameIsInListResults(searchText) {
            var result = false;

            var _iterator2 = _createForOfIteratorHelper(this.listSubGroupResults),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subGroup = _step2.value;

                if (subGroup.name === searchText) {
                  result = true;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return result;
          }
        }, {
          key: "clearlistSubGroupForm",
          value: function clearlistSubGroupForm() {
            this.listSubGroupForm.setValue({
              text: '',
              subGroupId: null
            });
            this.listSubGroupResultsVisible = false;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.clearlistSubGroupForm();
          }
        }]);

        return ListSubGroupComponent;
      }();

      ListSubGroupComponent.ɵfac = function ListSubGroupComponent_Factory(t) {
        return new (t || ListSubGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ListSubGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListSubGroupComponent,
        selectors: [["app-list-sub-group"]],
        viewQuery: function ListSubGroupComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInputElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchResultElements = _t);
          }
        },
        inputs: {
          listSubGroups: "listSubGroups",
          assetSubGroupName: "assetSubGroupName"
        },
        outputs: {
          subGroupId: "subGroupId"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 8,
        vars: 5,
        consts: [[1, "row", 3, "formGroup"], [1, "form-group"], [1, "find-as-you-type"], ["formControlName", "text", "type", "text", "placeholder", "Select Asset SubGroup", 1, "form-control", 3, "readonly", "blur", "keyup"], ["searchInput", ""], ["formControlName", "subGroupId", "type", "hidden"], [4, "ngIf"], ["class", "find-as-you-type__results dropdown-scroll", 4, "ngIf"], ["class", "find-as-you-type__no-results", 4, "ngIf"], ["class", "find-as-you-type__spinner-container", 4, "ngIf"], [1, "find-as-you-type__results", "dropdown-scroll"], ["class", "select-subgroup-btn", 3, "keyup", "click", 4, "ngFor", "ngForOf"], [1, "select-subgroup-btn", 3, "keyup", "click"], ["searchResult", ""], [1, "find-as-you-type__no-results"], [1, "find-as-you-type__spinner-container"], [1, "spinner"]],
        template: function ListSubGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ListSubGroupComponent_Template_input_blur_4_listener() {
              return ctx.handleSubGroupListBlur();
            })("keyup", function ListSubGroupComponent_Template_input_keyup_4_listener($event) {
              return ctx.handleSubGroupListKeyUp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListSubGroupComponent_div_7_Template, 4, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.listSubGroupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("find-as-you-type--suggestions-visible", ctx.isSubGroupSearching || ctx.listSubGroupResultsVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx.listSubGroups);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listSubGroupResultsVisible);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".find-as-you-type[_ngcontent-%COMP%] {\n  position: relative;\n}\n.find-as-you-type[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n.find-as-you-type__results[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], .find-as-you-type__no-results[_ngcontent-%COMP%], .find-as-you-type__spinner-container[_ngcontent-%COMP%] {\n  padding: 0.8em 1.2em;\n  background-color: #f2f2f2;\n  border: 1px solid #ced4da;\n  display: block;\n}\n.find-as-you-type__results[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .dropdown-scroll[_ngcontent-%COMP%] {\n  max-height: 167px;\n  border-bottom: solid 2px #ced4da;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .dropdown-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .find-as-you-type[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(106, 149, 91, 0.25);\n  position: relative;\n  background-color: #fff;\n  z-index: 5;\n}\n.find-as-you-type[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0 auto;\n}\n.find-as-you-type--suggestions-visible[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGlzdC1zdWItZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUVFO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBSUk7RUFDRyxjQUFBO0VBQ0QsV0FBQTtFQUNBLGdCQUFBO0FBRk47QUFNRTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtBQUxKO0FBUUU7RUFDRSxpREFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBTko7QUFTRTtFQUNFLHNCQUFBO0FBUEo7QUFVRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQVJKO0FBWUk7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBVk4iLCJmaWxlIjoibGlzdC1zdWItZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmluZC1hcy15b3UtdHlwZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICZfX3Jlc3VsdHMgPiBidXR0b24sICZfX25vLXJlc3VsdHMsICZfX3NwaW5uZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDEuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICZfX3Jlc3VsdHMge1xyXG4gICAgPiBidXR0b24ge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLXNjcm9sbHtcclxuICAgIG1heC1oZWlnaHQ6IDE2N3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNjZWQ0ZGE7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cywgYnV0dG9uOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDEwNiwgMTQ5LCA5MSwgMC4yNSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDogNTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gICYtLXN1Z2dlc3Rpb25zLXZpc2libGUge1xyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "hP9e":
    /*!****************************************************************************************!*\
      !*** ./src/app/assets/view-asset/list-attached-files/list-attached-files.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ListAttachedFilesComponent */

    /***/
    function hP9e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListAttachedFilesComponent", function () {
        return ListAttachedFilesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ListAttachedFilesComponent_div_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r1.name);
        }
      }

      function ListAttachedFilesComponent_div_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("file-", i_r2, "");
        }
      }

      function ListAttachedFilesComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListAttachedFilesComponent_div_1_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var file_r1 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.handleOpenFile(file_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListAttachedFilesComponent_div_1_span_4_Template, 2, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListAttachedFilesComponent_div_1_span_5_Template, 2, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListAttachedFilesComponent_div_1_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var i_r2 = ctx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.handleDeleteItem(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.fileCollection.length > 1 ? "rows-" + ctx_r0.fileCollection.length + "-file-" + i_r2 : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", file_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !file_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.isEditable);
        }
      }

      var ListAttachedFilesComponent = /*#__PURE__*/function () {
        function ListAttachedFilesComponent() {
          _classCallCheck(this, ListAttachedFilesComponent);

          this.deletedFileIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ListAttachedFilesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleDeleteItem",
          value: function handleDeleteItem(fileIndex) {
            this.deletedFileIndex.emit(fileIndex);
          }
        }, {
          key: "handleOpenFile",
          value: function handleOpenFile(fileToOpen) {
            var fileURL;

            if (fileToOpen.file) {
              fileURL = URL.createObjectURL(fileToOpen.file);
            } else {
              fileURL = URL.createObjectURL(fileToOpen);
            }

            window.open(fileURL, '_blank');
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this8 = this;

            if (changes['attachedFileCollection'] && this.attachedFileCollection) {
              this.attachedFileCollection.subscribe(function (value) {
                setTimeout(function () {
                  _this8.fileCollection = value;
                });
              });
            }
          }
        }]);

        return ListAttachedFilesComponent;
      }();

      ListAttachedFilesComponent.ɵfac = function ListAttachedFilesComponent_Factory(t) {
        return new (t || ListAttachedFilesComponent)();
      };

      ListAttachedFilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListAttachedFilesComponent,
        selectors: [["app-list-attached-files"]],
        inputs: {
          attachedFileCollection: "attachedFileCollection",
          isEditable: "isEditable"
        },
        outputs: {
          deletedFileIndex: "deletedFileIndex"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 1,
        consts: [[1, "row", "d-flex", "file-attach"], ["class", "file-details", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "file-details", 3, "ngClass"], [1, "col-4", "blank-color"], [1, "file-link", "col-6"], ["target", "_blank", 3, "click"], [4, "ngIf"], [1, "col-2"], [1, "delete-btn", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 14 18"], ["d", "M12.333 3.933L1.267 3.8c-.133.133-.4.133-.533.267A.8.8 0 0 0 .6 4.6l1.2 11.6c0 .4.267.533.667.533h8.267a.61.61 0 0 0 .666-.533l1.467-11.6a.8.8 0 0 0-.133-.533 1.343 1.343 0 0 0-.401-.134zm-2 11.6h-7.2L2.067 5.267h9.467z", "transform", "translate(.2 1.267)", 1, "cls-1"], ["d", "M13.333 3.2h-2.666A3.739 3.739 0 0 0 6.933 0a3.607 3.607 0 0 0-3.6 3.2H.667A.63.63 0 0 0 0 3.867a.63.63 0 0 0 .667.667h12.666A.63.63 0 0 0 14 3.867a.63.63 0 0 0-.667-.667zm-6.4-1.867a2.442 2.442 0 0 1 2.4 1.867H4.667a2.407 2.407 0 0 1 2.266-1.867z", 1, "cls-1"], ["d", "M5.367 13.467a.63.63 0 0 0 .667-.667V6.667A.63.63 0 0 0 5.367 6a.63.63 0 0 0-.667.667v6.267c0 .266.4.533.667.533z", "transform", "translate(1.567 2)", 1, "cls-1"], ["d", "M3.9 13.5a.714.714 0 0 0 .667-.667l-.534-6.266a.714.714 0 0 0-.666-.667.845.845 0 0 0-.667.8l.533 6.267a.886.886 0 0 0 .667.533z", "transform", "translate(.9 1.967)", 1, "cls-1"], ["d", "M6.942 13.475a.63.63 0 0 0 .667-.667l.533-6.267c.133-.267-.133-.533-.533-.533-.4-.133-.667.133-.667.533l-.533 6.267c-.134.401.133.667.533.667z", "transform", "translate(2.125 1.991)", 1, "cls-1"]],
        template: function ListAttachedFilesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListAttachedFilesComponent_div_1_Template, 15, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fileCollection);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n.file-details[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 1.75em;\n}\n.file-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2), .file-details[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #f2f2f2;\n  padding: 0.6em 0 0 1em;\n  border: 1px solid #ced4da;\n  border-radius: 0.25em;\n}\n.file-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  border-right-width: 0;\n  border-right-color: #f2f2f2;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.file-details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  border-left-width: 0;\n  border-left-color: #f2f2f2;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.file-details[_ngcontent-%COMP%]:nth-child(1) {\n  border-top-width: 0;\n  padding-left: 1.75em;\n}\n.rows-2-file-0[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  border-bottom-width: 0;\n  border-bottom-left-radius: 0;\n}\n.rows-2-file-0[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  border-bottom-width: 0;\n  border-bottom-right-radius: 0;\n}\n.rows-2-file-1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  border-top-width: 0;\n  border-top-left-radius: 0;\n}\n.rows-2-file-1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  border-top-width: 0;\n  border-top-right-radius: 0;\n}\n.rows-2-file-1[_ngcontent-%COMP%]:nth-child(2) {\n  border-top-width: 0;\n  padding-left: 1.75em;\n}\n.rows-3-file-0[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  border-bottom-width: 0;\n  border-bottom-left-radius: 0;\n}\n.rows-3-file-0[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  border-bottom-width: 0;\n  border-bottom-right-radius: 0;\n}\n.rows-3-file-1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  border-top-width: 0;\n  border-top-left-radius: 0;\n  border-bottom-width: 0;\n  border-bottom-left-radius: 0;\n}\n.rows-3-file-1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  border-top-width: 0;\n  border-top-right-radius: 0;\n  border-bottom-width: 0;\n  border-bottom-right-radius: 0;\n}\n.rows-3-file-1[_ngcontent-%COMP%]:nth-child(2) {\n  border-top-width: 0;\n  padding-left: 1.75em;\n}\n.rows-3-file-2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  border-top-width: 0;\n  border-top-left-radius: 0;\n}\n.rows-3-file-2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  border-top-width: 0;\n  border-top-right-radius: 0;\n}\n.rows-3-file-2[_ngcontent-%COMP%]:nth-child(3) {\n  border-top-width: 0;\n  padding-left: 1.75em;\n}\n.file-attach[_ngcontent-%COMP%] {\n  display: flex;\n}\n.file-attach[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n}\n.file-text[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding-bottom: 0.25em;\n  transition: all 0.2s ease-in-out;\n}\n.delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1em;\n  height: auto;\n  transform: scale(1);\n  transition: all 0.2s ease-in-out;\n}\n.delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #424244;\n}\n.delete-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: scale(1.125);\n}\n.delete-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: default;\n}\n.file-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 0.85em;\n  display: inline-block;\n  white-space: nowrap;\n  width: 95%;\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  padding-top: 0.4em;\n  padding-bottom: 0.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXF9nbG9iYWx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGlzdC1hdHRhY2hlZC1maWxlcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQHRhcm9wdW1wc1xcYm9vdHN0cmFwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0U7Ozs7SUFJRSx3QkFBQTtFQ2pCRjs7RURtQkE7SUFDRSxvQkFBQTtJQUNBLHNCQWJpQjtFQ0huQjs7RURrQkE7SUFDRSx5QkFBQTtJQUNBLDBCQUFBO0VDZkY7QUFDRjtBQWZBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBaUJGO0FBaEJFOztFQUVFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBa0JKO0FBZkU7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQWlCSjtBQWZFO0VBQ0Usb0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFpQko7QUFkRTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUFnQko7QUFYRTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUFjSjtBQVpFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQWNKO0FBVkU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBYUo7QUFYRTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7QUFhSjtBQVhFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQWFKO0FBUkU7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FBV0o7QUFURTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7QUFXSjtBQVBFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFVSjtBQVJFO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFVSjtBQVJFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQVVKO0FBTkU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBU0o7QUFQRTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7QUFTSjtBQVBFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQVNKO0FBTkE7RUFDRSxhQUFBO0FBU0Y7QUFSRTtFQUNFLFdBQUE7QUFVSjtBQU5BO0VBQ0UsZ0JBQUE7QUFTRjtBQU5BO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQVNGO0FBUkU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFTSjtBQVBJO0VBQ0UsYUN6SE87QURrSWI7QUFMSTtFQUNFLHVCQUFBO0FBT047QUFKRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBTUo7QUFERTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFJSiIsImZpbGUiOiJsaXN0LWF0dGFjaGVkLWZpbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9AdGFyb3B1bXBzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuJG5hdi1ncmV5OiAjZTJlMmUyO1xyXG4kc2VhcmNoLWdyZXk6ICNmMmYyZjI7XHJcbiRoZWFkZXItcGFkZGluZzogMi41cmVtO1xyXG4kaGVhZGVyLXBhZGRpbmctc206IDFyZW07XHJcbiRiYXNlLW5hdi13aWR0aDogNy45ZW07XHJcbiRleHBhbmRlZC1uYXYtd2lkdGg6IDIwZW07XHJcbiRoZWFkZXItaGVpZ2h0OiAxMi40cmVtO1xyXG4kbWVudS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZzogMXJlbSAzLjNyZW07XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmctc206IDFyZW0gMS43cmVtO1xyXG4kY29udGVudC1hcmVhLWNvbG9yOiAjZmZmO1xyXG4kd2FybmluZzogI0VBMDAyOTtcclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5hcHAtaGVhZGVyLFxyXG4gIC5mdW5jdGlvbi1iYXIsXHJcbiAgYXBwLXNlY3Rpb24taGVhZGVyLFxyXG4gIC5tZWRpYS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFwcC1jb250ZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1hcmVhLWNvbG9yO1xyXG4gIH1cclxuICAubWVkaWEtcHJpbnQge1xyXG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgcHJpbnQge1xuICAuYXBwLWhlYWRlcixcbi5mdW5jdGlvbi1iYXIsXG5hcHAtc2VjdGlvbi1oZWFkZXIsXG4ubWVkaWEtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFwcC1jb250ZW50LWFyZWEge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAubWVkaWEtcHJpbnQge1xuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5maWxlLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDEuNzVlbTtcbn1cbi5maWxlLWRldGFpbHMgPiBkaXY6bnRoLWNoaWxkKDIpLFxuLmZpbGUtZGV0YWlscyA6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogMC42ZW0gMCAwIDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xufVxuLmZpbGUtZGV0YWlscyA+IGRpdjpudGgtY2hpbGQoMikge1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2YyZjJmMjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLmZpbGUtZGV0YWlscyA+IGRpdjpudGgtY2hpbGQoMykge1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmMmYyZjI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uZmlsZS1kZXRhaWxzOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIHBhZGRpbmctbGVmdDogMS43NWVtO1xufVxuXG4ucm93cy0yLWZpbGUtMCA+IGRpdjpudGgtY2hpbGQoMikge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLnJvd3MtMi1maWxlLTAgPiBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5yb3dzLTItZmlsZS0xID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG59XG4ucm93cy0yLWZpbGUtMSA+IGRpdjpudGgtY2hpbGQoMykge1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5yb3dzLTItZmlsZS0xOm50aC1jaGlsZCgyKSB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIHBhZGRpbmctbGVmdDogMS43NWVtO1xufVxuXG4ucm93cy0zLWZpbGUtMCA+IGRpdjpudGgtY2hpbGQoMikge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLnJvd3MtMy1maWxlLTAgPiBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5yb3dzLTMtZmlsZS0xID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4ucm93cy0zLWZpbGUtMSA+IGRpdjpudGgtY2hpbGQoMykge1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4ucm93cy0zLWZpbGUtMTpudGgtY2hpbGQoMikge1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDEuNzVlbTtcbn1cblxuLnJvd3MtMy1maWxlLTIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbn1cbi5yb3dzLTMtZmlsZS0yID4gZGl2Om50aC1jaGlsZCgzKSB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuLnJvd3MtMy1maWxlLTI6bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgcGFkZGluZy1sZWZ0OiAxLjc1ZW07XG59XG5cbi5maWxlLWF0dGFjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmlsZS1hdHRhY2ggYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uZmlsZS10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNWVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5kZWxldGUtYnRuIHN2ZyB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogYXV0bztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uZGVsZXRlLWJ0biBzdmcgcGF0aCB7XG4gIGZpbGw6ICM0MjQyNDQ7XG59XG4uZGVsZXRlLWJ0bjpob3ZlciBzdmcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTI1KTtcbn1cbi5kZWxldGUtYnRuW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uZmlsZS1saW5rIGEge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDk1JTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDAuNGVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XG59IiwiJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwiS29oaW5vb3JcIiwgXCJPcGVuIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgXCJHaWxsIFNhbnNcIiwgQ29yYmVsLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGJvZHktY29sb3I6ICM0MjQyNDQgIWRlZmF1bHQ7XG4kZ3JlZW46ICM2QTk1NUIgIWRlZmF1bHQ7XG4kZ3JlZW4tZmFkZWQ6ICNEMURFQ0Q7XG4kcmVkOiAjRkY0MjJFICFkZWZhdWx0O1xuJHJlZC1saWdodDogI0ZGRDlENSAhZGVmYXVsdDtcbiRyZWQtZGFyazogIzk5NDQ0RiAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6IDZweDtcblxuJHByaW1hcnk6ICRncmVlbjtcblxuJGFsZXJ0LWJvcmRlci13aWR0aDogMDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiA2cHg7XG4kYWxlcnQtcGFkZGluZy14OiAxLjVyZW07XG4kYWxlcnQtcGFkZGluZy15OiAxLjJyZW07XG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgLjc1cmVtO1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6IDMuNzVyZW07XG5cbiR0b2FzdC16LWluZGV4OiAxMDAwICFkZWZhdWx0O1xuJHRvYXN0LWR1cmF0aW9uOiAzMDAwbXMgIWRlZmF1bHQ7XG4kdG9hc3QtaGVpZ2h0OiA4cmVtICFkZWZhdWx0O1xuJHRvYXN0LWhlaWdodC1zbTogNS44cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJyZWFrcG9pbnQ6IDc2OHB4ICFkZWZhdWx0OyJdfQ== */"]
      });
      /***/
    },

    /***/
    "n/kG":
    /*!**********************************************************************!*\
      !*** ./src/app/assets/view-asset/list-group/list-group.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ListGroupComponent */

    /***/
    function nKG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListGroupComponent", function () {
        return ListGroupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _list_subgroup_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../list-subgroup.wizard */
      "8pem");
      /* harmony import */


      var src_app_services_asset_asset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/asset/asset.service */
      "D7Wi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["searchInput"];
      var _c1 = ["searchResult"];

      function ListGroupComponent_div_7_div_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListGroupComponent_div_7_div_1_button_1_Template_button_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r8.handleListResultKeyUp($event);
          })("click", function ListGroupComponent_div_7_div_1_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var group_r6 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r10.handleListResultClick(group_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-sitename", group_r6.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r6.name, " ");
        }
      }

      function ListGroupComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListGroupComponent_div_7_div_1_button_1_Template, 3, 2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.searchResults);
        }
      }

      function ListGroupComponent_div_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No group found ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListGroupComponent_div_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListGroupComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListGroupComponent_div_7_div_1_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListGroupComponent_div_7_div_2_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListGroupComponent_div_7_div_3_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isSearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length === 0 && !ctx_r1.isSearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSearching);
        }
      }

      var ListGroupComponent = /*#__PURE__*/function () {
        function ListGroupComponent(formBuilder, assetService, subGroupWizard) {
          _classCallCheck(this, ListGroupComponent);

          this.formBuilder = formBuilder;
          this.assetService = assetService;
          this.subGroupWizard = subGroupWizard;
          this.listResultsVisible = false;
          this.isSearching = false;
          this.searchResults = [];
          this.isGroupSelected = false;
          this.listSubgroups = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.listGroupForm = this.formBuilder.group({
            text: '',
            groupId: null
          });
        }

        _createClass(ListGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.listGroupForm.get('text').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return textValue.length >= 3;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return !_this9.groupNameIsInListResults(textValue);
            })).subscribe(function () {
              return _this9.listGroup();
            });
            this.listGroupForm.get('text').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return textValue.length < 3;
            })).subscribe(function () {
              _this9.listResultsVisible = false;
            });

            if (this.assetGroupName) {
              this.listGroupForm.setValue({
                text: this.assetGroupName,
                groupId: ''
              });
            }
          }
        }, {
          key: "listGroup",
          value: function listGroup() {
            var _this10 = this;

            this.listGroupsSubscription && !this.listGroupsSubscription.closed && this.listGroupsSubscription.unsubscribe();
            var textValue = this.listGroupForm.get('text').value;

            if (this.isGroupSelected === false) {
              this.isSearching = true;
              this.listResultsVisible = this.listGroupForm.get('text').dirty ? true : false;
              this.listGroupsSubscription = this.assetService.getAssetGroup(textValue).subscribe(function (data) {
                _this10.searchResults = data;
                _this10.isSearching = false;
              });
            }
          }
        }, {
          key: "handleListKeyUp",
          value: function handleListKeyUp(event) {
            this.isGroupSelected = false;

            switch (event.key) {
              case 'ArrowDown':
                var resultButtons = this.searchResultElements.toArray();
                resultButtons.length > 0 && resultButtons[0].nativeElement.focus();
                break;

              case 'Escape':
                this.clearlistGroupForm();
                break;
            }
          }
        }, {
          key: "handleListResultKeyUp",
          value: function handleListResultKeyUp(event) {
            switch (event.key) {
              case 'ArrowUp':
                var firstResultButton = this.searchResultElements.toArray()[0].nativeElement;

                if (event.target === firstResultButton) {
                  this.searchInputElement.nativeElement.focus();
                } else {
                  event.target.previousSibling.focus();
                }

                break;

              case 'ArrowDown':
                if (event.target.nextElementSibling != null) {
                  event.target.nextSibling && event.target.nextSibling.focus();
                }

                break;

              case 'Escape':
                this.clearlistGroupForm();
                break;
            }
          }
        }, {
          key: "handleListResultClick",
          value: function handleListResultClick(group) {
            var _this11 = this;

            var selectedGroup;
            this.listGroupForm.setValue({
              text: group.name,
              groupId: group.id
            });
            this.listResultsVisible = false;
            this.isGroupSelected = true;
            selectedGroup = this.searchResults.filter(function (group) {
              return group.name === _this11.listGroupForm.get('text').value;
            });
            this.subGroupWizard.reset();
            this.subGroupWizard.listSubGroup = selectedGroup[0].assetSubGroups;
            this.listSubgroups.emit({
              subGroup: this.subGroupWizard.listSubGroup,
              groupId: group.id
            });
          }
        }, {
          key: "handleListBlur",
          value: function handleListBlur() {
            var _this12 = this;

            setTimeout(function () {
              var searchValue = _this12.listGroupForm.get('text').value;

              var activeElement = document.activeElement;

              if (_this12.groupNameIsInListResults(searchValue) || activeElement.dataset.sitename) {
                return;
              }

              _this12.clearlistGroupForm();
            }, 0);
          }
        }, {
          key: "groupNameIsInListResults",
          value: function groupNameIsInListResults(searchText) {
            var result = false;

            var _iterator3 = _createForOfIteratorHelper(this.searchResults),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var group = _step3.value;

                if (group.name === searchText) {
                  result = true;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return result;
          }
        }, {
          key: "clearlistGroupForm",
          value: function clearlistGroupForm() {
            this.listGroupForm.setValue({
              text: '',
              groupId: null
            });
            this.listResultsVisible = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.listGroupsSubscription && !this.listGroupsSubscription.closed && this.listGroupsSubscription.unsubscribe();
          }
        }]);

        return ListGroupComponent;
      }();

      ListGroupComponent.ɵfac = function ListGroupComponent_Factory(t) {
        return new (t || ListGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_asset_asset_service__WEBPACK_IMPORTED_MODULE_4__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_list_subgroup_wizard__WEBPACK_IMPORTED_MODULE_3__["SubGroupWizard"]));
      };

      ListGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListGroupComponent,
        selectors: [["app-list-group"]],
        viewQuery: function ListGroupComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInputElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchResultElements = _t);
          }
        },
        inputs: {
          isEditable: "isEditable",
          assetGroupName: "assetGroupName",
          assetGroupId: "assetGroupId"
        },
        outputs: {
          listSubgroups: "listSubgroups"
        },
        decls: 8,
        vars: 5,
        consts: [[1, "row", 3, "formGroup"], [1, "form-group"], [1, "find-as-you-type"], ["formControlName", "text", "type", "text", "placeholder", "Select Asset Group", 1, "form-control", 3, "readonly", "blur", "keyup"], ["searchInput", ""], ["formControlName", "groupId", "type", "hidden"], [4, "ngIf"], ["class", "find-as-you-type__results dropdown-scroll", 4, "ngIf"], ["class", "find-as-you-type__no-results", 4, "ngIf"], ["class", "find-as-you-type__spinner-container", 4, "ngIf"], [1, "find-as-you-type__results", "dropdown-scroll"], ["class", "select-group-btn", 3, "keyup", "click", 4, "ngFor", "ngForOf"], [1, "select-group-btn", 3, "keyup", "click"], ["searchResult", ""], [1, "find-as-you-type__no-results"], [1, "find-as-you-type__spinner-container"], [1, "spinner"]],
        template: function ListGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ListGroupComponent_Template_input_blur_4_listener() {
              return ctx.handleListBlur();
            })("keyup", function ListGroupComponent_Template_input_keyup_4_listener($event) {
              return ctx.handleListKeyUp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListGroupComponent_div_7_Template, 4, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.listGroupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("find-as-you-type--suggestions-visible", ctx.isSearching || ctx.listResultsVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listResultsVisible);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: [".find-as-you-type[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 5;\n}\n.find-as-you-type[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n.find-as-you-type__results[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], .find-as-you-type__no-results[_ngcontent-%COMP%], .find-as-you-type__spinner-container[_ngcontent-%COMP%] {\n  padding: 0.8em 1.2em;\n  background-color: #f2f2f2;\n  border: 1px solid #ced4da;\n  display: block;\n}\n.find-as-you-type__results[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .dropdown-scroll[_ngcontent-%COMP%] {\n  max-height: 207px;\n  border-bottom: solid 2px #ced4da;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .dropdown-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .find-as-you-type[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(106, 149, 91, 0.25);\n  position: relative;\n  background-color: #fff;\n  z-index: 5;\n}\n.find-as-you-type[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0 auto;\n}\n.find-as-you-type--suggestions-visible[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGlzdC1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUVFO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBSUk7RUFDRyxjQUFBO0VBQ0QsV0FBQTtFQUNBLGdCQUFBO0FBRk47QUFNRTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtBQUxKO0FBUUU7RUFDRSxpREFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBTko7QUFTRTtFQUNFLHNCQUFBO0FBUEo7QUFVRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQVJKO0FBWUk7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBVk4iLCJmaWxlIjoibGlzdC1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maW5kLWFzLXlvdS10eXBlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogNTtcclxuXHJcbiAgPiBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19yZXN1bHRzID4gYnV0dG9uLCAmX19uby1yZXN1bHRzLCAmX19zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAxLjJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmX19yZXN1bHRzIHtcclxuICAgID4gYnV0dG9uIHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1zY3JvbGx7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDdweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjY2VkNGRhO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDYsIDE0OSwgOTEsIDAuMjUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5zcGlubmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAmLS1zdWdnZXN0aW9ucy12aXNpYmxlIHtcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "nBU3":
    /*!***********************************************************!*\
      !*** ./src/app/assets/view-asset/view-asset.component.ts ***!
      \***********************************************************/

    /*! exports provided: ViewAssetComponent */

    /***/
    function nBU3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewAssetComponent", function () {
        return ViewAssetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/toast/toast.service */
      "9ZKQ");
      /* harmony import */


      var src_utils_enumUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/utils/enumUtils */
      "pA2v");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_utils_formValidators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/utils/formValidators */
      "svQ6");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared-module/section-header/section-header.component */
      "OeDX");
      /* harmony import */


      var _shared_module_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../shared-module/loading-modal/loading-modal.component */
      "ZaN7");
      /* harmony import */


      var _shared_module_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../shared-module/accordion/accordion.component */
      "87/D");
      /* harmony import */


      var _list_group_list_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./list-group/list-group.component */
      "n/kG");
      /* harmony import */


      var _list_sub_group_list_sub_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./list-sub-group/list-sub-group.component */
      "gccc");
      /* harmony import */


      var _list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./list-vendor/list-vendor.component */
      "Zue0");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _list_attached_files_list_attached_files_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./list-attached-files/list-attached-files.component */
      "hP9e");

      var _c0 = ["fileUploadInput"];
      var _c1 = ["alertElementRef"];

      function ViewAssetComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewAssetComponent_app_loading_modal_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-modal");
        }
      }

      function ViewAssetComponent_article_3_option_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var assetType_r23 = ctx.$implicit;
          var i_r24 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.assetTypesValues[i_r24]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", assetType_r23, " ");
        }
      }

      function ViewAssetComponent_article_3_div_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 74);
        }
      }

      function ViewAssetComponent_article_3_div_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 74);
        }
      }

      function ViewAssetComponent_article_3_div_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 74);
        }
      }

      function ViewAssetComponent_article_3_option_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var phaseType_r25 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", phaseType_r25)("selected", phaseType_r25 === ctx_r7.extendedAsset.phase);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", phaseType_r25, " ");
        }
      }

      function ViewAssetComponent_article_3_div_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Allowed file types are doc, docx, xls, xlsx, csv, pdf, jpeg, png, bmp. Max file size allowed is 2 mb. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewAssetComponent_article_3_div_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Too many files selected. Total number of files cannot exceed ", ctx_r10.filesLimit, ". ");
        }
      }

      function ViewAssetComponent_article_3_span_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No file selected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewAssetComponent_article_3_span_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.fileCount, " file added");
        }
      }

      function ViewAssetComponent_article_3_span_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r13.fileCount, " files added");
        }
      }

      function ViewAssetComponent_article_3_div_123_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-list-attached-files", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deletedFileIndex", function ViewAssetComponent_article_3_div_123_Template_app_list_attached_files_deletedFileIndex_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.handleDeleteFileAttached($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attachedFileCollection", ctx_r15.attachedFileCollection)("isEditable", ctx_r15.isEditable);
        }
      }

      function ViewAssetComponent_article_3_ng_container_124_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 14);
        }
      }

      function ViewAssetComponent_article_3_ng_container_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 14);
        }
      }

      function ViewAssetComponent_article_3_ng_container_126_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 14);
        }
      }

      function ViewAssetComponent_article_3_div_161_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You must specify valid to date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewAssetComponent_article_3_footer_187_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save all changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewAssetComponent_article_3_footer_187_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAssetComponent_article_3_footer_187_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.updateAsset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewAssetComponent_article_3_footer_187_span_3_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx_r22.form.dirty || ctx_r22.fileUploadForm.dirty || ctx_r22.showSaveButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r22.isUpdatingAsset);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "select-readonly": a0
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "alertMessages": a0
        };
      };

      function ViewAssetComponent_article_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAssetComponent_article_3_Template_img_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.showExpandedImage = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Supplier");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Next Maintenance Due");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "app-accordion", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Model / S.No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Manufacturer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "app-list-group", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("listSubgroups", function ViewAssetComponent_article_3_Template_app_list_group_listSubgroups_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.assignSubGroupList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Sub Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "app-list-sub-group", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("subGroupId", function ViewAssetComponent_article_3_Template_app_list_sub_group_subGroupId_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.selectedSubGroupId($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ViewAssetComponent_article_3_option_67_Template, 2, 2, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Specifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "textarea", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ViewAssetComponent_article_3_div_73_Template, 1, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ViewAssetComponent_article_3_div_74_Template, 1, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ViewAssetComponent_article_3_div_75_Template, 1, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Load Factor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ViewAssetComponent_article_3_Template_input_keydown_81_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.handleInputKeyDownNumberWithPeriod($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "KW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ViewAssetComponent_article_3_Template_input_keydown_86_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.handleInputKeyDownNumberWithPeriod($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Volts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ViewAssetComponent_article_3_Template_input_keydown_91_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.handleInputKeyDownNumberWithPeriod($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Phase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, ViewAssetComponent_article_3_option_97_Template, 2, 3, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Attachments ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "svg", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "form", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ViewAssetComponent_article_3_div_110_Template, 2, 0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ViewAssetComponent_article_3_div_111_Template, 2, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, ViewAssetComponent_article_3_span_115_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, ViewAssetComponent_article_3_span_116_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, ViewAssetComponent_article_3_span_117_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAssetComponent_article_3_Template_button_click_119_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.launchFileInput();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "input", 46, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewAssetComponent_article_3_Template_input_change_121_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.handleFileInputChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, ViewAssetComponent_article_3_div_123_Template, 2, 2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, ViewAssetComponent_article_3_ng_container_124_Template, 1, 0, "ng-container", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, ViewAssetComponent_article_3_ng_container_125_Template, 1, 0, "ng-container", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, ViewAssetComponent_article_3_ng_container_126_Template, 1, 0, "ng-container", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "app-accordion", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Vendor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "app-list-vendor", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedVendorId", function ViewAssetComponent_article_3_Template_app_list_vendor_selectedVendorId_135_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.selectedVendorId($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Service Frequency ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ViewAssetComponent_article_3_Template_input_keydown_144_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.handleDaysInputKeyDown($event);
          })("input", function ViewAssetComponent_article_3_Template_input_input_144_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.handleDaysInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Valid From");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ViewAssetComponent_article_3_Template_input_dateChange_153_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.onDateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-datepicker-toggle", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAssetComponent_article_3_Template_mat_datepicker_toggle_click_154_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.handleSaveButtonView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "mat-datepicker", 65, 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, ViewAssetComponent_article_3_div_161_Template, 2, 0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-datepicker-toggle", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAssetComponent_article_3_Template_mat_datepicker_toggle_click_169_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.hangleSaveButtonView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "mat-datepicker", 65, 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "app-accordion", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "WO#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Attended By");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](187, ViewAssetComponent_article_3_footer_187_Template, 4, 3, "footer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](156);

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](171);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.extendedAsset.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #", ctx_r2.extendedAsset.assetCode, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Image of product with ID ", ctx_r2.extendedAsset.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.extendedAsset.assetId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.extendedAsset.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.extendedAsset.supplier);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.extendedAsset.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 53, ctx_r2.extendedAsset.nextMaintenanceDate, "dd MMMM YYYY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleDetails", "Asset Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isEditable", ctx_r2.isEditable)("assetGroupName", ctx_r2.extendedAsset.assetGroup === null ? null : ctx_r2.extendedAsset.assetGroup.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listSubGroups", ctx_r2.selectedListSubGroup)("assetSubGroupName", ctx_r2.assetSubGroupValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c2, !ctx_r2.isEditable));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.assetTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c2, !ctx_r2.isEditable));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.phases);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.fileUploadForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileUploadForm.controls["files"].hasError("acceptableFileType") || ctx_r2.fileUploadForm.controls["files"].hasError("acceptableFileSize"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileUploadForm.controls["files"].hasError("acceptableNumberOfFiles") && ctx_r2.fileCount > 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileCount === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileCount === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileCount > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.fileCount > 2 || !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleDetails", "Maintenance Contract");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vendorName", ctx_r2.extendedAsset.vendorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r2.form.controls.vendorId.value === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r19)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c2, ctx_r2.form.controls.vendorId.value === null));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c3, ctx_r2.submitAttempted && ctx_r2.form.controls.validToDate.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitAttempted && ctx_r2.form.controls.validToDate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r21)("min", ctx_r2.toMinDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r21)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c2, ctx_r2.form.controls.validFromDate.value === null));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleDetails", "Maintenance History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.dirty || ctx_r2.fileUploadForm.dirty || ctx_r2.showSaveButton);
        }
      }

      var ViewAssetComponent = /*#__PURE__*/function () {
        function ViewAssetComponent(assetService, activeRouter, formBuilder, authenticationService, toastService, fileUploadService) {
          _classCallCheck(this, ViewAssetComponent);

          this.assetService = assetService;
          this.activeRouter = activeRouter;
          this.formBuilder = formBuilder;
          this.authenticationService = authenticationService;
          this.toastService = toastService;
          this.fileUploadService = fileUploadService;
          this.isLoading = false;
          this.showExpandedImage = false;
          this.showSaveButton = false;
          this.isEditable = false;
          this.assetTypes = Object.keys(src_app_services__WEBPACK_IMPORTED_MODULE_6__["AssetType"]);
          this.assetTypesValues = Object(src_utils_enumUtils__WEBPACK_IMPORTED_MODULE_4__["enumValues"])(src_app_services__WEBPACK_IMPORTED_MODULE_6__["AssetType"]);
          this.phases = Object.keys(src_app_services__WEBPACK_IMPORTED_MODULE_6__["Phase"]);
          this.submitAttempted = false;
          this.fileSrcCollection = [];
          this.filesLimit = 3;
          this.attachedFileCollection = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]([]);
          this.fileCount = 0;
          this.isNewFilesAdded = false;
          this.isUpdatingAsset = false;
          this.filePathCollection = [];
          this.fileTypes = ['image/jpeg', 'image/png', 'application/msword', 'jpeg', 'jpg', 'png', 'doc', 'docx', 'xls', 'csv', 'application/ms-excel', 'xlsx', 'pdf', 'bmp'];
          var param = this.activeRouter.snapshot.params.id.toString().split('&&', 2);
          this.assetId = param[0];
          this.assetCode = param[1];
          this.attachedFileCollection.next([]);
          this.checkUserEditRights();
          this.viewAssetForId();
        }

        _createClass(ViewAssetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createForm",
          value: function createForm() {
            var _this13 = this;

            var bulidForm = function bulidForm(extendedAsset) {
              _this13.form = _this13.formBuilder.group({
                model: [extendedAsset.model],
                manufacturer: [extendedAsset.manufacturer],
                assetGroup: [extendedAsset.assetGroup === null ? null : extendedAsset.assetGroup.name],
                assetSubGroup: [extendedAsset.assetSubGroup === null ? null : extendedAsset.assetSubGroup.name],
                assetGroupId: [extendedAsset.assetGroup === null ? null : extendedAsset.assetGroup.id],
                assetSubGroupId: [extendedAsset.assetSubGroup === null ? null : extendedAsset.assetSubGroup.id],
                assetType: [extendedAsset.assetType.id],
                kw: [extendedAsset.kw],
                volts: [extendedAsset.volts],
                phase: [extendedAsset.phase],
                loadFactor: [extendedAsset.loadFactor],
                specifications: [extendedAsset.specifications],
                vendorId: [extendedAsset.vendorId],
                frequencyDays: [extendedAsset.frequencyDays, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])],
                validFromDate: [extendedAsset.validFromDate],
                validToDate: [extendedAsset.validToDate]
              });
              _this13.assetSubGroupValue = extendedAsset.assetSubGroup === null ? null : extendedAsset.assetSubGroup.name;
              _this13.toMinDate = _this13.form.get('validFromDate').value;
            };

            bulidForm(this.extendedAsset);
            this.Id = this.extendedAsset.id;
            this.fileUploadForm = this.formBuilder.group({
              files: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(src_utils_formValidators__WEBPACK_IMPORTED_MODULE_7__["fileListFileTypeValidator"])(this.fileTypes), Object(src_utils_formValidators__WEBPACK_IMPORTED_MODULE_7__["fileListFileSizesValidator"])(2000000)], Object(src_utils_formValidators__WEBPACK_IMPORTED_MODULE_7__["fileListNumberOfFilesValidator"])(this.filesLimit)]
            });
          }
        }, {
          key: "viewAssetForId",
          value: function viewAssetForId() {
            var _this14 = this;

            var isOnInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var assetAttachments$ = this.assetService.viewAssetForId(this.assetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (extendedAsset) {
              _this14.extendedAsset = extendedAsset;

              if (isOnInit) {
                _this14.createForm();
              }

              return extendedAsset.attachedFiles;
            }));
            assetAttachments$.subscribe(function (assetAttachments) {
              _this14.fileCount = assetAttachments ? assetAttachments.length : 0;
              _this14.fileSrcCollection = [];
              _this14.filePathCollection = [];

              if (assetAttachments) {
                assetAttachments.forEach(function (filePath) {
                  var fileNameWithExt = filePath.replace(/^.*[\\\/]/, '');
                  var fileName = fileNameWithExt.substring(0, fileNameWithExt.length);

                  if (fileName === 'blob') {
                    return;
                  }

                  _this14.filePathCollection.push(filePath);

                  _this14.fileUploadService.getFile(filePath).subscribe(function (fileData) {
                    fileData.name = fileName;

                    _this14.fileSrcCollection.push(fileData);

                    _this14.fileCount = _this14.fileSrcCollection ? _this14.fileSrcCollection.length : 0;
                  });
                });

                _this14.fileUploadForm.setValue({
                  files: _this14.fileSrcCollection
                });

                _this14.attachedFileCollection.next(_this14.fileSrcCollection);
              }

              _this14.isLoading = false;
            });
          }
        }, {
          key: "checkUserEditRights",
          value: function checkUserEditRights() {
            var _this15 = this;

            this.isGettingUserRights = true;
            this.authenticationService.currentUserHasPermission(_defineProperty({}, src_app_services__WEBPACK_IMPORTED_MODULE_6__["PermissionGroup"].Assets, [src_app_services__WEBPACK_IMPORTED_MODULE_6__["AssetsPermissions"].CanModifyAssetDetails])).subscribe(function (hasPermission) {
              _this15.isEditable = hasPermission;
              _this15.isGettingUserRights = false;
            });
          }
        }, {
          key: "updateAsset",
          value: function updateAsset() {
            var _this16 = this;

            this.submitAttempted = true;
            this.isUpdatingAsset = true;

            if (this.form.value.validFromDate !== null && this.form.value.validToDate === null) {
              this.form.controls['validToDate'].setErrors({
                incorrect: true
              });
            }

            if (this.form.valid && this.form.dirty) {
              var updateAsset = {
                id: this.Id,
                model: this.form.value.model,
                manufacturer: this.form.value.manufacturer,
                assetGroupId: this.form.value.assetGroupId,
                assetSubGroupId: this.form.value.assetSubGroupId,
                assetTypeId: this.form.value.assetType,
                kw: this.form.value.kw,
                volts: this.form.value.volts,
                phase: this.form.value.phase,
                loadFactor: this.form.value.loadFactor,
                specifications: this.form.value.specifications,
                vendorId: this.form.value.vendorId,
                frequencyDays: this.form.value.frequencyDays,
                validFromDate: this.form.value.validFromDate ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.form.value.validFromDate, 'yyyy-MM-dd', 'en-US') : null,
                validToDate: this.form.value.validToDate ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(this.form.value.validToDate, 'yyyy-MM-dd', 'en-US') : null
              };
              this.assetService.updateAssetForId(updateAsset).subscribe(function (data) {
                if (_this16.fileUploadForm.valid && _this16.isNewFilesAdded) {
                  _this16.fileUploadService.uploadFiles(_this16.extendedAsset.assetId, src_app_services__WEBPACK_IMPORTED_MODULE_6__["Modules"].Asset, _this16.fileSrcCollection).subscribe(function (data) {
                    _this16.savedFileSrcCollection = data;
                    _this16.filePathCollection = data.attachments;

                    _this16.viewAssetForId(false);
                  });
                } else {
                  _this16.viewAssetForId(false);
                }

                _this16.toastService.showToast(new src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["Toast"]('Asset details saved successfully'));

                _this16.isUpdatingAsset = false;
                _this16.isNewFilesAdded = false;
                _this16.showSaveButton = false;
                _this16.extendedAsset = data;

                _this16.form.markAsPristine();
              }, function (err) {
                _this16.toastService.showErrorToast("Asset details not saved. Please try again later or contact helpdesk");

                _this16.isUpdatingAsset = false;
                _this16.isNewFilesAdded = false;
                _this16.showSaveButton = false;
              });
            }

            if (this.fileUploadForm.valid && this.isNewFilesAdded && !this.form.dirty) {
              this.fileUploadService.uploadFiles(this.extendedAsset.assetId, src_app_services__WEBPACK_IMPORTED_MODULE_6__["Modules"].Asset, this.fileSrcCollection).subscribe(function (data) {
                _this16.savedFileSrcCollection = data;

                if (_this16.savedFileSrcCollection.attachments) {
                  _this16.filePathCollection = data.attachments;

                  _this16.viewAssetForId(false);

                  _this16.toastService.showToast(new src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["Toast"]('Asset details saved successfully'));
                } else {
                  _this16.toastService.showErrorToast("Asset details not saved. Please try again later or contact helpdesk");
                }

                _this16.isNewFilesAdded = false;
                _this16.showSaveButton = false;
                _this16.isUpdatingAsset = false;
              });
            }

            if (!this.fileUploadForm.valid && this.isNewFilesAdded && !this.form.dirty) {
              this.toastService.showErrorToast("Files not saved");
            }

            this.isUpdatingAsset = false;
            this.showSaveButton = false;
          }
        }, {
          key: "assignSubGroupList",
          value: function assignSubGroupList(group) {
            this.selectedListSubGroup = group.subGroup;
            this.form.get('assetGroupId').setValue(group.groupId);
            this.showSaveButton = true;
          }
        }, {
          key: "selectedSubGroupId",
          value: function selectedSubGroupId(subGroupId) {
            this.form.get('assetSubGroupId').setValue(subGroupId);
            this.showSaveButton = true;
          }
        }, {
          key: "selectedVendorId",
          value: function selectedVendorId(vendorId) {
            this.form.get('vendorId').setValue(vendorId);

            if (vendorId === null) {
              this.form.get('frequencyDays').setValue(null);
              this.form.get('validFromDate').setValue(null);
              this.form.get('validToDate').setValue(null);
            }

            this.showSaveButton = true;
          }
        }, {
          key: "onDateChange",
          value: function onDateChange(inputDate) {
            this.toMinDate = new Date(inputDate.value);
            this.toMinDate.setDate(this.toMinDate.getDate() + 1);
          }
        }, {
          key: "handleDaysInputKeyDown",
          value: function handleDaysInputKeyDown(event) {
            if (event.key === 'Backspace' || event.key === 'Delete') {
              return;
            }

            if (isNaN(event.key) || event.keyCode === 32) {
              event.preventDefault();
            }
          }
        }, {
          key: "handleInputKeyDownNumberWithPeriod",
          value: function handleInputKeyDownNumberWithPeriod(event) {
            if (event.key === 'Backspace' || event.key === 'Delete' || event.key === '.') {
              return;
            }

            if (isNaN(event.key) || event.keyCode === 32) {
              event.preventDefault();
            }
          }
        }, {
          key: "handleDaysInput",
          value: function handleDaysInput(event) {
            if (Number.isNaN(parseInt(event.target.value))) {
              this.form.controls['frequencyDays'].setValue(null);
              event.preventDefault();
              return;
            }
          }
        }, {
          key: "handleSaveButtonView",
          value: function handleSaveButtonView() {
            this.form.markAsPristine();
            this.showSaveButton = false;
          }
        }, {
          key: "handleFileInputChange",
          value: function handleFileInputChange() {
            var _this17 = this;

            this.showSaveButton = true;
            this.isNewFilesAdded = true;
            var noExistingFile = this.fileSrcCollection.length === 0;
            var inputFiles = this.fileUploadInput.nativeElement.files;

            var _loop = function _loop(i) {
              if (_this17.fileSrcCollection.filter(function (file) {
                return file.name === inputFiles[i].name;
              }).length === 0) {
                _this17.fileSrcCollection.push(inputFiles[i]);

                _this17.filePathCollection.push('NewFile');
              } else {
                _this17.toastService.showErrorToast('Cannot upload duplicate file.');
              }
            };

            for (var i = 0; i < inputFiles.length; i++) {
              _loop(i);
            }

            this.clearFileFormErrors();

            if (noExistingFile) {
              this.fileUploadForm.setValue({
                files: this.fileSrcCollection
              });
            } else {
              this.fileUploadForm.patchValue({
                files: this.fileSrcCollection
              });
            }

            if (this.fileUploadForm.controls['files'].hasError('acceptableFileType') || this.fileUploadForm.controls['files'].hasError('acceptableNumberOfFiles') || this.fileUploadForm.controls['files'].hasError('acceptableFileSize')) {
              this.showSaveButton = false;
            }

            this.fileCount = this.fileSrcCollection.length;
            this.attachedFileCollection.next(this.fileSrcCollection);
          }
        }, {
          key: "launchFileInput",
          value: function launchFileInput() {
            this.fileUploadForm.reset({});
            this.fileUploadInput.nativeElement.value = '';
            this.fileUploadInput.nativeElement.click();
          }
        }, {
          key: "handleDeleteFileAttached",
          value: function handleDeleteFileAttached(fileIndex) {
            var _this18 = this;

            var filePath = this.filePathCollection[fileIndex];

            if (filePath === 'NewFile') {
              this.fileSrcCollection.splice(fileIndex, 1);
              this.filePathCollection.splice(fileIndex, 1);
              this.fileCount = this.fileSrcCollection.length;
              this.attachedFileCollection.next([]);
              this.attachedFileCollection.next(this.fileSrcCollection);
              this.fileUploadForm.patchValue({
                files: this.fileSrcCollection
              });
              this.toastService.showToast(new src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["Toast"]('File has been deleted.'));
              this.resetSaveButtonDisplay();
            } else {
              this.fileUploadService.deleteFile(filePath, false).subscribe(function () {
                _this18.fileSrcCollection.splice(fileIndex, 1);

                _this18.filePathCollection.splice(fileIndex, 1);

                _this18.fileCount = _this18.fileSrcCollection.length;

                _this18.attachedFileCollection.next([]);

                _this18.attachedFileCollection.next(_this18.fileSrcCollection);

                _this18.toastService.showToast(new src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["Toast"]('File has been deleted.'));

                _this18.fileUploadForm.patchValue({
                  files: _this18.fileSrcCollection
                });

                _this18.resetSaveButtonDisplay();
              }, function (err) {
                _this18.toastService.showErrorToast('Unable to delete the file.');

                return;
              });
            }

            this.fileUploadForm.markAsPristine();
            this.fileUploadForm.markAsUntouched();
            this.fileUploadForm.updateValueAndValidity();
          }
        }, {
          key: "resetSaveButtonDisplay",
          value: function resetSaveButtonDisplay() {
            if (this.fileSrcCollection.length === 0) {
              this.showSaveButton = false;
            }

            if (this.fileSrcCollection.length === 3) {
              this.showSaveButton = true;
            }
          }
        }, {
          key: "clearFileFormErrors",
          value: function clearFileFormErrors() {
            this.fileUploadForm.controls['files'].setErrors({
              acceptableFileType: false,
              acceptableFileSize: false
            });
          }
        }]);

        return ViewAssetComponent;
      }();

      ViewAssetComponent.ɵfac = function ViewAssetComponent_Factory(t) {
        return new (t || ViewAssetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_6__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_6__["FilehandlerService"]));
      };

      ViewAssetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewAssetComponent,
        selectors: [["app-view-asset"]],
        viewQuery: function ViewAssetComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUploadInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alertElementRef = _t.first);
          }
        },
        decls: 4,
        vars: 4,
        consts: [[3, "customCurrentPageTitle"], [4, "ngIf"], [1, "spinner"], [1, "core-info", "row", "mt-5"], [1, "col-sm-4"], ["src", "/assets/asset/awaiting-image.png", "onerror", "this.src='/assets/asset/awaiting-image.png'", 3, "alt", "click"], [1, "col-sm-8", "asset-basic-details"], [1, "row"], [1, "col-sm-5", "col-md-6", "col-6"], [1, "col-sm-7", "col-md-6", "col-6"], [3, "formGroup"], [3, "titleDetails"], [1, "row", "asset-detail"], [1, "col-sm-6"], [1, "row", "d-flex", "mb-3"], [1, "col-4"], [1, "col-8"], ["type", "text", "formControlName", "model", 1, "form-control", 3, "readonly"], ["type", "text", "formControlName", "manufacturer", 1, "form-control", 3, "readonly"], ["formControlName", "assetGroupId", "type", "hidden"], [3, "isEditable", "assetGroupName", "listSubgroups"], ["formControlName", "assetSubGroupId", "type", "hidden"], [3, "listSubGroups", "assetSubGroupName", "subGroupId"], ["formControlName", "assetType", 1, "form-control", "custom-select", 3, "ngClass"], ["class", "form-control", 3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "specifications", 1, "form-control", 3, "readonly"], ["class", "row d-flex mb-3 mobile-view", 4, "ngIf"], ["type", "number", "pattern", "[0-9.]*", "ng-pattern", "[0-9.]*", "formControlName", "loadFactor", 1, "form-control", 3, "readonly", "keydown"], ["type", "number", "pattern", "[0-9.]*", "ng-pattern", "[0-9.]*", "formControlName", "kw", 1, "form-control", 3, "readonly", "keydown"], ["type", "number", "pattern", "[0-9.]*", "ng-pattern", "[0-9.]*", "formControlName", "volts", 1, "form-control", 3, "readonly", "keydown"], ["formControlName", "phase", 1, "form-control", "custom-select", 3, "ngClass"], ["class", "form-control", 3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "mb-3", "file-attach"], ["tooltip-danger", "Allowed file types are doc, docx, xls, xlsx, csv, pdf, jpeg, png, bmp. Max file size allowed 2 MB."], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 19.199 19.2", "width", "13", "height", "13"], ["d", "M0 9.6a9.6 9.6 0 0 0 18.5 3.6 8.571 8.571 0 0 0 .7-3.6A9.6 9.6 0 1 0 0 9.6z", "fill", "#fff", "stroke", "#ff422e"], ["d", "M9.6 4a1.184 1.184 0 0 1 1.2 1.3 1.2 1.2 0 1 1-2.4 0A1.24 1.24 0 0 1 9.6 4zm-1 3.3h2.1v7.9H8.6z", "fill", "#ff422e"], [1, "col-8", 3, "formGroup"], [1, "form-group"], [1, "alert-msgs"], ["alertElementRef", ""], ["class", "alert alert-danger arrow-alert", 4, "ngIf"], [1, "file-input"], [1, "col-7"], [1, "col-5"], [1, "btn-file-upload", 3, "disabled", "click"], ["hidden", "", "multiple", "", "type", "file", 3, "readonly", "change"], ["fileUploadInput", ""], ["class", "row  d-flex  file-row", 4, "ngIf"], ["class", "row d-flex mb-3", 4, "ngIf"], [1, "row", "asset-contract"], [1, "col-sm-12"], [1, "col-sm-2", "col-4"], [1, "col-sm-9", "col-8"], ["formControlName", "vendorId", "type", "hidden"], [3, "vendorName", "selectedVendorId"], [1, "row", "d-flex", "service-frequency"], [1, "col-sm-4", "col-4"], [1, "col-sm-8", "col-8"], [1, "form-group", "date-box"], [1, "d-flex"], ["type", "text", "pattern", "[0-9]*", "inputmode", "numeric", "ng-pattern", "[0-9]*", "maxlength", "4", "formControlName", "frequencyDays", 1, "form-control", 3, "readOnly", "keydown", "input"], [1, "taro-material-datepicker"], ["matInput", "", "placeholder", "Select from date...", "formControlName", "validFromDate", 1, "form-control", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for", "ngClass", "click"], ["disabled", "false"], ["datePicker", ""], [1, "row", "d-flex", "alertMessage", 3, "ngClass"], [1, "col-sm-2", "col-4", "text-sm-center"], ["matInput", "", "placeholder", "Select to date...", "formControlName", "validToDate", 1, "form-control", 3, "matDatepicker", "min"], ["toDatePicker", ""], [1, "row", "pl-10"], [1, "col-sm-12", "asset-history"], [1, "form-control", 3, "value"], [1, "row", "d-flex", "mb-3", "mobile-view"], [1, "form-control", 3, "value", "selected"], [1, "alert", "alert-danger", "arrow-alert"], [1, "row", "d-flex", "file-row"], [3, "attachedFileCollection", "isEditable", "deletedFileIndex"], [1, "form-actions"], [1, "btn", "btn-primary", "btn-block", "col-12", 3, "click"]],
        template: function ViewAssetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-section-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewAssetComponent_div_1_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewAssetComponent_app_loading_modal_2_Template, 1, 0, "app-loading-modal", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewAssetComponent_article_3_Template, 188, 66, "article", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customCurrentPageTitle", ctx.assetCode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.isGettingUserRights);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdatingAsset);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.extendedAsset && !ctx.isGettingUserRights);
          }
        },
        directives: [_shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_10__["SectionHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_module_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_11__["LoadingModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_module_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_12__["AccordionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _list_group_list_group_component__WEBPACK_IMPORTED_MODULE_13__["ListGroupComponent"], _list_sub_group_list_sub_group_component__WEBPACK_IMPORTED_MODULE_14__["ListSubGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_15__["ListVendorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _list_attached_files_list_attached_files_component__WEBPACK_IMPORTED_MODULE_17__["ListAttachedFilesComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\narticle[_ngcontent-%COMP%] {\n  margin-bottom: 6em;\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f2f2f2;\n  height: 3.8em;\n  font-size: 0.85em;\n  border: 1px solid #ced4da;\n  border-radius: 0.25em;\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0.5em 0 0 1em;\n  font-weight: 500;\n  text-transform: none;\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]   .btn-file-upload[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-width: 1px 0 1px 0;\n  background-color: #dddddd;\n  height: 3.7em;\n  width: 100%;\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]   .btn-file-upload[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\narticle[_ngcontent-%COMP%]   .file-attach[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n}\narticle[_ngcontent-%COMP%]   .file-attach[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-left: 0.25em;\n}\narticle[_ngcontent-%COMP%]   .file-row[_ngcontent-%COMP%] {\n  padding-bottom: 0em;\n  height: auto;\n}\n@media screen and (max-width: 767px) {\n  article[_ngcontent-%COMP%]   .file-row[_ngcontent-%COMP%] {\n    padding-bottom: 0.7em;\n  }\n}\narticle[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #dedede;\n  margin-bottom: 1em;\n  padding-bottom: 0.5em;\n}\narticle[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1em;\n}\narticle[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 300;\n}\narticle[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\narticle[_ngcontent-%COMP%]   .subheader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\narticle[_ngcontent-%COMP%]   .subheader[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.75em;\n}\narticle[_ngcontent-%COMP%]   .subheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10em;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1em;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .toggle-price[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .btn-toggle-price[_ngcontent-%COMP%] {\n  display: flex;\n  border: none;\n  background: transparent;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .btn-toggle-price[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.4rem;\n  height: auto;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .btn-toggle-price[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: scale(1.25);\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: 300;\n  margin-bottom: 2rem;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .mrp-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 3em 0;\n  padding: 0;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .usps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .usps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.3em;\n  margin-right: 0.5em;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  max-width: 45em;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 8em;\n  margin-bottom: 1.5em;\n  text-align: center;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 4.5em;\n  margin: 0 auto;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .specs-row[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  padding-top: 1.5em;\n  padding-bottom: 1.5em;\n  text-align: center;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .specs-row[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .specs-row[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.75em;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .specs-row[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 1.875em;\n  margin-top: 0.2em;\n  margin-bottom: 0;\n  font-weight: 200;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .specs-row[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  border: 1px solid #bcbcbc;\n  border-width: 0 1px;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  padding-top: 1.5em;\n  padding-bottom: 1.5em;\n  text-align: center;\n  background-color: #f2f2f2;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.75em;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 1.875em;\n  margin-top: 0.2em;\n  margin-bottom: 0;\n  font-weight: 200;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  margin-top: 0.8em;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], article[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  margin-top: 0.6rem;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: #6A955B;\n  margin: 0;\n  margin-left: 0.5em;\n}\narticle[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  border: 1px solid #bcbcbc;\n  border-width: 0 1px;\n}\narticle[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 110;\n  bottom: 0;\n  padding: 2em;\n  left: 7.9em;\n  width: calc(100% - 7.9em);\n  background-color: #f2f2f2;\n  box-shadow: 0 0 3px #c3c3c3;\n  transition: all 0.2s ease-out;\n}\narticle[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n@media screen and (max-width: 800px) {\n  article[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n    left: 0;\n    width: 100%;\n  }\n  article[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.3rem;\n  }\n}\narticle[_ngcontent-%COMP%]   .apps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n  display: none;\n}\narticle[_ngcontent-%COMP%]   .apps[_ngcontent-%COMP%]   li.toggleList[_ngcontent-%COMP%] {\n  display: list-item;\n}\narticle[_ngcontent-%COMP%]   .tech-details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\narticle[_ngcontent-%COMP%]   .tech-details[_ngcontent-%COMP%]   td.subHeader[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.875rem;\n  text-align: left;\n}\narticle[_ngcontent-%COMP%]   .tech-details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\narticle[_ngcontent-%COMP%]   .spec-details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\narticle[_ngcontent-%COMP%]   .spec-details[_ngcontent-%COMP%]   td.subHeader[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.875rem;\n  text-align: left;\n}\narticle[_ngcontent-%COMP%]   .spec-details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\narticle[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  background-color: #f2f2f2;\n  margin-bottom: 2px;\n  transition: all 0.2s ease-in-out;\n  min-height: 5em;\n}\narticle[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  padding: 0 2em 0 2em;\n}\narticle[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]   .serial-number[_ngcontent-%COMP%] {\n  padding: 1em 1em 1em 2em;\n  border-left: 1px solid #bcbcbc;\n}\narticle[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]   .warranty-details[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-right: 6em;\n  text-align: right;\n  color: #c7c7c7;\n}\narticle[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]   .warranty-date[_ngcontent-%COMP%] {\n  display: none;\n}\narticle[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]   button.used-item-select[_ngcontent-%COMP%] {\n  background-color: rgba(188, 188, 188, 0.2);\n  border: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 5em;\n}\narticle[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]   button.used-item-select[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.8em;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transition: all 0.2s ease-in-out;\n  transform: scale(0.95) translate(-50%, -50%);\n  transform-origin: 0 0;\n}\narticle[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]   button.used-item-select[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: scale(1.15) translate(-50%, -50%);\n}\narticle[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]   button.used-item-select[_ngcontent-%COMP%]:disabled {\n  cursor: pointer;\n}\n@media screen and (max-width: 480px) {\n  article[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]   .warranty-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n  article[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]   .warranty-date[_ngcontent-%COMP%] {\n    display: block;\n    width: 12em;\n    text-align: left;\n    color: #c7c7c7;\n    font-size: 0.75em;\n  }\n  article[_ngcontent-%COMP%]   .sku-stock-row[_ngcontent-%COMP%]   .serial-number[_ngcontent-%COMP%] {\n    padding: 0em 1em;\n  }\n}\narticle[_ngcontent-%COMP%]   .asset-basic-details[_ngcontent-%COMP%] {\n  font-size: 0.875em;\n}\narticle[_ngcontent-%COMP%]   .asset-basic-details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 1.8em;\n}\narticle[_ngcontent-%COMP%]   .asset-basic-details[_ngcontent-%COMP%]   .col-sm-5.col-6[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding-left: 1em;\n  text-transform: uppercase;\n}\narticle[_ngcontent-%COMP%]   .asset-basic-details[_ngcontent-%COMP%]   .col-sm-7.col-6[_ngcontent-%COMP%] {\n  text-align: right;\n}\n  .nav-expanded.nav-expanded.nav-expanded app-view-asset article footer {\n  left: 20em;\n  width: calc(100% - 20em);\n}\n@media screen and (max-width: 480px) {\n    .nav-expanded.nav-expanded.nav-expanded app-view-asset article footer {\n    left: 0em;\n    width: 0em;\n    z-index: 1;\n  }\n}\n  app-view-asset .breadcrumb-item.active {\n  text-transform: uppercase;\n}\n.asset-detail[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .asset-contract[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-top: 0.8em;\n}\n@media screen and (max-width: 480px) {\n  .asset-detail[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .asset-contract[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    padding-left: 0.5em;\n    padding-right: 0em;\n  }\n  .asset-detail[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .asset-contract[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 11px;\n    height: 12px;\n  }\n}\n.asset-detail[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .asset-contract[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n.asset-detail[_ngcontent-%COMP%]   .service-frequency[_ngcontent-%COMP%], .asset-contract[_ngcontent-%COMP%]   .service-frequency[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n@media screen and (max-width: 800px) {\n  .asset-detail[_ngcontent-%COMP%]   .service-frequency[_ngcontent-%COMP%], .asset-contract[_ngcontent-%COMP%]   .service-frequency[_ngcontent-%COMP%] {\n    margin-bottom: 0.8em;\n  }\n}\n.asset-detail[_ngcontent-%COMP%]   .service-frequency[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .asset-contract[_ngcontent-%COMP%]   .service-frequency[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100px;\n}\n.asset-detail[_ngcontent-%COMP%]   .service-frequency[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3), .asset-contract[_ngcontent-%COMP%]   .service-frequency[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  margin-left: -10px;\n}\n.asset-detail[_ngcontent-%COMP%]   .service-frequency[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .asset-contract[_ngcontent-%COMP%]   .service-frequency[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.8em;\n}\n.asset-details[_ngcontent-%COMP%] {\n  margin-left: 1.5em;\n}\n.asset-history[_ngcontent-%COMP%] {\n  padding: 0 1em;\n}\n.asset-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: solid 1px #bcbcbc;\n  width: 100%;\n}\n.asset-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #e4e4e4;\n  font-weight: bold;\n}\n.asset-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: solid 1px #bcbcbc;\n  padding: 10px;\n}\n.asset-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1), .asset-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: center;\n}\n.asset-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  width: 15%;\n}\n.asset-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 10%;\n}\n.asset-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 25%;\n}\n.asset-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 50%;\n}\n@media screen and (max-width: 767px) {\n  .asset-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n}\n.select-readonly[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.alertMessage[_ngcontent-%COMP%] {\n  height: 67px;\n}\n@media screen and (max-width: 576px) {\n  .alertMessage[_ngcontent-%COMP%] {\n    height: 0px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .alertMessages[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n}\n  .alert {\n  padding-bottom: 1em;\n  padding-top: 0.9em;\n}\n@media screen and (max-width: 800px) {\n    .alert {\n    padding: 1em 0.2em;\n  }\n}\n  .form-group {\n  position: relative;\n}\n  .form-group .alert-msgs {\n  position: absolute;\n  bottom: 2.5em;\n}\n@media screen and (max-width: 576px) {\n  .mobile-view[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcX2dsb2JhbHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHZpZXctYXNzZXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQHRhcm9wdW1wc1xcYm9vdHN0cmFwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0U7Ozs7SUFJRSx3QkFBQTtFQ2pCRjs7RURtQkE7SUFDRSxvQkFBQTtJQUNBLHNCQWJpQjtFQ0huQjs7RURrQkE7SUFDRSx5QkFBQTtJQUNBLDBCQUFBO0VDZkY7QUFDRjtBQWZBO0VBQ0Usa0JBQUE7QUFpQkY7QUFmRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFpQko7QUFoQkk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFrQk47QUFoQkk7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQWtCTjtBQWpCTTtFQUNFLGVBQUE7QUFtQlI7QUFiSTtFQUNFLGFBQUE7QUFlTjtBQWRNO0VBQ0UsbUJBQUE7QUFnQlI7QUFYRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQWFKO0FBWkk7RUFIRjtJQUlJLHFCQUFBO0VBZUo7QUFDRjtBQVpFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBY0o7QUFaSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQWNOO0FBWEk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFhTjtBQVpNO0VBQ0UsZ0JBQUE7QUFjUjtBQVZFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBWUo7QUFWSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFZTjtBQVRJO0VBQ0UsV0FBQTtBQVdOO0FBUEk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFTTjtBQVBJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBU047QUFQSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFTTjtBQVJNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFVUjtBQVBRO0VBQ0Usc0JBQUE7QUFTVjtBQUxJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBT047QUFOTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFRUjtBQUpJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQU1OO0FBRk07RUFDRSxvQkFBQTtBQUlSO0FBSFE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFLVjtBQUFJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFFTjtBQURNO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFHUjtBQUZRO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBSVY7QUFFSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFFTTtFQUNFLGdCQUFBO0FBQVI7QUFFUTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFBVjtBQUdRO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFEVjtBQUtNO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQUhSO0FBTUk7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUpOO0FBT1E7RUFDRSxnQkFBQTtBQUxWO0FBT1U7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBTFo7QUFRVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTlo7QUFXTTtFQUNFLGlCQUFBO0FBVFI7QUFVUTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBUlY7QUFXUTs7RUFFRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBVFY7QUFZUTtFQUNFLGNDbE5GO0VEbU5FLFNBQUE7RUFDQSxrQkFBQTtBQVZWO0FBY007RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBWlI7QUFpQkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0QvTmE7RUNnT2IseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJEaE9jO0FDaU5sQjtBQWlCSTtFQUNFLFlBQUE7QUFmTjtBQWtCSTtFQWZGO0lBZ0JJLE9BQUE7SUFDQSxXQUFBO0VBZko7RUFpQkk7SUFDRSx1QkFBQTtFQWZOO0FBQ0Y7QUFtQkk7RUFDRSxvQkFBQTtFQUNBLGFBQUE7QUFqQk47QUFtQk07RUFDRSxrQkFBQTtBQWpCUjtBQXNCSTtFQUNFLHlCQUFBO0FBcEJOO0FBc0JJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFwQk47QUFzQkk7RUFDRSxpQkFBQTtBQXBCTjtBQXdCSTtFQUNFLHlCQUFBO0FBdEJOO0FBd0JJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUF0Qk47QUF3Qkk7RUFDRSxpQkFBQTtBQXRCTjtBQXlCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQXZCSjtBQXdCSTtFQUNFLG9CQUFBO0FBdEJOO0FBd0JJO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtBQXRCTjtBQXdCSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXRCTjtBQXdCSTtFQUNFLGFBQUE7QUF0Qk47QUF5Qkk7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUF2Qk47QUF3Qk07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtBQXRCUjtBQTBCUTtFQUNFLDRDQUFBO0FBeEJWO0FBMkJNO0VBQ0UsZUFBQTtBQXpCUjtBQTZCSTtFQUNFO0lBQ0UsYUFBQTtFQTNCTjtFQTZCSTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUEzQk47RUE2Qkk7SUFDRSxnQkFBQTtFQTNCTjtBQUNGO0FBOEJFO0VBQ0Usa0JBQUE7QUE1Qko7QUE2Qkk7RUFDRSxvQkFBQTtBQTNCTjtBQTZCSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQTNCTjtBQTZCSTtFQUNFLGlCQUFBO0FBM0JOO0FBZ0NBO0VBS0UsVURqWG1CO0VDa1huQix3QkFBQTtBQWpDRjtBQW9DQTtFQUNFO0lBS0UsU0FBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VBckNGO0FBQ0Y7QUF3Q0E7RUFDRSx5QkFBQTtBQXRDRjtBQTJDRTs7RUFDRSxrQkFBQTtBQXZDSjtBQXdDSTtFQUZGOztJQUdJLG1CQUFBO0lBQ0Esa0JBQUE7RUFwQ0o7RUFxQ0k7O0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFsQ047QUFDRjtBQXNDRTs7RUFDRSxZQUFBO0FBbkNKO0FBcUNFOztFQUNFLGtCQUFBO0FBbENKO0FBbUNJO0VBRkY7O0lBR0ksb0JBQUE7RUEvQko7QUFDRjtBQWdDSTs7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUE3Qk47QUErQkk7O0VBQ0Usa0JBQUE7QUE1Qk47QUE4Qkk7O0VBQ0UsY0FBQTtBQTNCTjtBQStCQTtFQUNFLGtCQUFBO0FBNUJGO0FBOEJBO0VBQ0UsY0FBQTtBQTNCRjtBQTRCRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBMUJKO0FBNEJJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQTFCTjtBQTRCSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQTFCTjtBQTRCTTtFQUVFLGtCQUFBO0FBM0JSO0FBOEJNO0VBQ0UsVUFBQTtBQTVCUjtBQThCTTtFQUNFLFVBQUE7QUE1QlI7QUE4Qk07RUFDRSxVQUFBO0FBNUJSO0FBOEJNO0VBQ0UsVUFBQTtBQTVCUjtBQStCTTtFQUNFO0lBQ0UsYUFBQTtFQTdCUjtBQUNGO0FBa0NBO0VBQ0Usb0JBQUE7QUEvQkY7QUFrQ0E7RUFDRSxZQUFBO0FBL0JGO0FBZ0NFO0VBRkY7SUFHSSxXQUFBO0VBN0JGO0FBQ0Y7QUFpQ0U7RUFERjtJQUVJLFlBQUE7RUE3QkY7QUFDRjtBQWdDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUE3QkY7QUE4QkU7RUFIRjtJQUlJLGtCQUFBO0VBM0JGO0FBQ0Y7QUE4QkE7RUFDRSxrQkFBQTtBQTNCRjtBQTRCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQTFCSjtBQThCQTtFQUNFO0lBQ0Usd0JBQUE7RUEzQkY7QUFDRiIsImZpbGUiOiJ2aWV3LWFzc2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9AdGFyb3B1bXBzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuJG5hdi1ncmV5OiAjZTJlMmUyO1xyXG4kc2VhcmNoLWdyZXk6ICNmMmYyZjI7XHJcbiRoZWFkZXItcGFkZGluZzogMi41cmVtO1xyXG4kaGVhZGVyLXBhZGRpbmctc206IDFyZW07XHJcbiRiYXNlLW5hdi13aWR0aDogNy45ZW07XHJcbiRleHBhbmRlZC1uYXYtd2lkdGg6IDIwZW07XHJcbiRoZWFkZXItaGVpZ2h0OiAxMi40cmVtO1xyXG4kbWVudS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZzogMXJlbSAzLjNyZW07XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmctc206IDFyZW0gMS43cmVtO1xyXG4kY29udGVudC1hcmVhLWNvbG9yOiAjZmZmO1xyXG4kd2FybmluZzogI0VBMDAyOTtcclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5hcHAtaGVhZGVyLFxyXG4gIC5mdW5jdGlvbi1iYXIsXHJcbiAgYXBwLXNlY3Rpb24taGVhZGVyLFxyXG4gIC5tZWRpYS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFwcC1jb250ZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1hcmVhLWNvbG9yO1xyXG4gIH1cclxuICAubWVkaWEtcHJpbnQge1xyXG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgcHJpbnQge1xuICAuYXBwLWhlYWRlcixcbi5mdW5jdGlvbi1iYXIsXG5hcHAtc2VjdGlvbi1oZWFkZXIsXG4ubWVkaWEtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFwcC1jb250ZW50LWFyZWEge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAubWVkaWEtcHJpbnQge1xuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmFydGljbGUge1xuICBtYXJnaW4tYm90dG9tOiA2ZW07XG59XG5hcnRpY2xlIC5maWxlLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgaGVpZ2h0OiAzLjhlbTtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbn1cbmFydGljbGUgLmZpbGUtaW5wdXQgbGFiZWwge1xuICBtYXJnaW46IDAuNWVtIDAgMCAxZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuYXJ0aWNsZSAuZmlsZS1pbnB1dCAuYnRuLWZpbGUtdXBsb2FkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAxcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgaGVpZ2h0OiAzLjdlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5hcnRpY2xlIC5maWxlLWlucHV0IC5idG4tZmlsZS11cGxvYWRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuYXJ0aWNsZSAuZmlsZS1hdHRhY2ggbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuYXJ0aWNsZSAuZmlsZS1hdHRhY2ggbGFiZWwgc3ZnIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVlbTtcbn1cbmFydGljbGUgLmZpbGUtcm93IHtcbiAgcGFkZGluZy1ib3R0b206IDBlbTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgYXJ0aWNsZSAuZmlsZS1yb3cge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjdlbTtcbiAgfVxufVxuYXJ0aWNsZSBoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbn1cbmFydGljbGUgaGVhZGVyIGgxIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5hcnRpY2xlIGhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuYXJ0aWNsZSBoZWFkZXIgaDIgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmFydGljbGUgLnN1YmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmFydGljbGUgLnN1YmhlYWRlciBkdCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuYXJ0aWNsZSAuc3ViaGVhZGVyIGltZyB7XG4gIHdpZHRoOiAxMGVtO1xufVxuYXJ0aWNsZSAuY29yZS1pbmZvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5hcnRpY2xlIC5jb3JlLWluZm8gLnRvZ2dsZS1wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmFydGljbGUgLmNvcmUtaW5mbyAuYnRuLXRvZ2dsZS1wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5hcnRpY2xlIC5jb3JlLWluZm8gLmJ0bi10b2dnbGUtcHJpY2Ugc3ZnIHtcbiAgd2lkdGg6IDEuNHJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuYXJ0aWNsZSAuY29yZS1pbmZvIC5idG4tdG9nZ2xlLXByaWNlOmhvdmVyIHN2ZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG59XG5hcnRpY2xlIC5jb3JlLWluZm8gLnByaWNlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbmFydGljbGUgLmNvcmUtaW5mbyAucHJpY2UgLm1ycC10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuYXJ0aWNsZSAuY29yZS1pbmZvIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAzZW0gMDtcbiAgcGFkZGluZzogMDtcbn1cbmFydGljbGUgLmNvcmUtaW5mbyAudXNwcyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuYXJ0aWNsZSAuY29yZS1pbmZvIC51c3BzIGxpIGltZyB7XG4gIHdpZHRoOiAxLjNlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cbmFydGljbGUgLmNvcmUtaW5mbyAuYmFkZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWF4LXdpZHRoOiA0NWVtO1xufVxuYXJ0aWNsZSAuY29yZS1pbmZvIC5iYWRnZXMgbGkge1xuICB3aWR0aDogOGVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYXJ0aWNsZSAuY29yZS1pbmZvIC5iYWRnZXMgbGkgaW1nIHtcbiAgbWF4LXdpZHRoOiA0LjVlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5hcnRpY2xlIC5zdGF0cyAuc3BlY3Mtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmFydGljbGUgLnN0YXRzIC5zcGVjcy1yb3cgZGwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuYXJ0aWNsZSAuc3RhdHMgLnNwZWNzLXJvdyBkbCBkdCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuYXJ0aWNsZSAuc3RhdHMgLnNwZWNzLXJvdyBkbCBkZCB7XG4gIGZvbnQtc2l6ZTogMS44NzVlbTtcbiAgbWFyZ2luLXRvcDogMC4yZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5hcnRpY2xlIC5zdGF0cyAuc3BlY3Mtcm93ID4gLnJvdyA+IGRpdjpudGgtY2hpbGQoMikge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmNiY2JjO1xuICBib3JkZXItd2lkdGg6IDAgMXB4O1xufVxuYXJ0aWNsZSAuc3RhdHMgLmluZm8tcm93IHtcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbmFydGljbGUgLnN0YXRzIC5pbmZvLXJvdyAuY29sLTQgZGwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuYXJ0aWNsZSAuc3RhdHMgLmluZm8tcm93IC5jb2wtNCBkbCBkdCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuYXJ0aWNsZSAuc3RhdHMgLmluZm8tcm93IC5jb2wtNCBkbCBkZCB7XG4gIGZvbnQtc2l6ZTogMS44NzVlbTtcbiAgbWFyZ2luLXRvcDogMC4yZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5hcnRpY2xlIC5zdGF0cyAuaW5mby1yb3cgLmNvbC0xMiB7XG4gIG1hcmdpbi10b3A6IDAuOGVtO1xufVxuYXJ0aWNsZSAuc3RhdHMgLmluZm8tcm93IC5jb2wtMTIgZGwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5hcnRpY2xlIC5zdGF0cyAuaW5mby1yb3cgLmNvbC0xMiBkZCxcbmFydGljbGUgLnN0YXRzIC5pbmZvLXJvdyAuY29sLTEyIGR0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcbn1cbmFydGljbGUgLnN0YXRzIC5pbmZvLXJvdyAuY29sLTEyIGRkIHtcbiAgY29sb3I6ICM2QTk1NUI7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuYXJ0aWNsZSAuc3RhdHMgLmluZm8tcm93ID4gLnJvdyA+IGRpdjpudGgtY2hpbGQoMikge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmNiY2JjO1xuICBib3JkZXItd2lkdGg6IDAgMXB4O1xufVxuYXJ0aWNsZSBmb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDExMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAyZW07XG4gIGxlZnQ6IDcuOWVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNy45ZW0pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBib3gtc2hhZG93OiAwIDAgM3B4ICNjM2MzYzM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuYXJ0aWNsZSBmb290ZXIgYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgYXJ0aWNsZSBmb290ZXIge1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgYXJ0aWNsZSBmb290ZXIgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuM3JlbTtcbiAgfVxufVxuYXJ0aWNsZSAuYXBwcyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBkaXNwbGF5OiBub25lO1xufVxuYXJ0aWNsZSAuYXBwcyBsaS50b2dnbGVMaXN0IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuYXJ0aWNsZSAudGVjaC1kZXRhaWxzIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmFydGljbGUgLnRlY2gtZGV0YWlscyB0ZC5zdWJIZWFkZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmFydGljbGUgLnRlY2gtZGV0YWlscyB0ZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuYXJ0aWNsZSAuc3BlYy1kZXRhaWxzIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmFydGljbGUgLnNwZWMtZGV0YWlscyB0ZC5zdWJIZWFkZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmFydGljbGUgLnNwZWMtZGV0YWlscyB0ZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuYXJ0aWNsZSAuc2t1LXN0b2NrLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgbWluLWhlaWdodDogNWVtO1xufVxuYXJ0aWNsZSAuc2t1LXN0b2NrLXJvdyAuaWQge1xuICBwYWRkaW5nOiAwIDJlbSAwIDJlbTtcbn1cbmFydGljbGUgLnNrdS1zdG9jay1yb3cgLnNlcmlhbC1udW1iZXIge1xuICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAyZW07XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2JjYmNiYztcbn1cbmFydGljbGUgLnNrdS1zdG9jay1yb3cgLndhcnJhbnR5LWRldGFpbHMge1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1yaWdodDogNmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICNjN2M3Yzc7XG59XG5hcnRpY2xlIC5za3Utc3RvY2stcm93IC53YXJyYW50eS1kYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmFydGljbGUgLnNrdS1zdG9jay1yb3cgYnV0dG9uLnVzZWQtaXRlbS1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4OCwgMTg4LCAxODgsIDAuMik7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA1ZW07XG59XG5hcnRpY2xlIC5za3Utc3RvY2stcm93IGJ1dHRvbi51c2VkLWl0ZW0tc2VsZWN0IHN2ZyB7XG4gIHdpZHRoOiAxLjhlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbn1cbmFydGljbGUgLnNrdS1zdG9jay1yb3cgYnV0dG9uLnVzZWQtaXRlbS1zZWxlY3Q6aG92ZXIgc3ZnIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5hcnRpY2xlIC5za3Utc3RvY2stcm93IGJ1dHRvbi51c2VkLWl0ZW0tc2VsZWN0OmRpc2FibGVkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgYXJ0aWNsZSAuc2t1LXN0b2NrLXJvdyAud2FycmFudHktZGV0YWlscyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBhcnRpY2xlIC5za3Utc3RvY2stcm93IC53YXJyYW50eS1kYXRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjYzdjN2M3O1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICB9XG4gIGFydGljbGUgLnNrdS1zdG9jay1yb3cgLnNlcmlhbC1udW1iZXIge1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG4gIH1cbn1cbmFydGljbGUgLmFzc2V0LWJhc2ljLWRldGFpbHMge1xuICBmb250LXNpemU6IDAuODc1ZW07XG59XG5hcnRpY2xlIC5hc3NldC1iYXNpYy1kZXRhaWxzIC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxLjhlbTtcbn1cbmFydGljbGUgLmFzc2V0LWJhc2ljLWRldGFpbHMgLmNvbC1zbS01LmNvbC02IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5hcnRpY2xlIC5hc3NldC1iYXNpYy1kZXRhaWxzIC5jb2wtc20tNy5jb2wtNiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG46Om5nLWRlZXAgLm5hdi1leHBhbmRlZC5uYXYtZXhwYW5kZWQubmF2LWV4cGFuZGVkIGFwcC12aWV3LWFzc2V0IGFydGljbGUgZm9vdGVyIHtcbiAgbGVmdDogMjBlbTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwZW0pO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICA6Om5nLWRlZXAgLm5hdi1leHBhbmRlZC5uYXYtZXhwYW5kZWQubmF2LWV4cGFuZGVkIGFwcC12aWV3LWFzc2V0IGFydGljbGUgZm9vdGVyIHtcbiAgICBsZWZ0OiAwZW07XG4gICAgd2lkdGg6IDBlbTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG46Om5nLWRlZXAgYXBwLXZpZXctYXNzZXQgLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYXNzZXQtZGV0YWlsIGxhYmVsLFxuLmFzc2V0LWNvbnRyYWN0IGxhYmVsIHtcbiAgcGFkZGluZy10b3A6IDAuOGVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmFzc2V0LWRldGFpbCBsYWJlbCxcbi5hc3NldC1jb250cmFjdCBsYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwZW07XG4gIH1cbiAgLmFzc2V0LWRldGFpbCBsYWJlbCBzdmcsXG4uYXNzZXQtY29udHJhY3QgbGFiZWwgc3ZnIHtcbiAgICB3aWR0aDogMTFweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gIH1cbn1cbi5hc3NldC1kZXRhaWwgdGV4dGFyZWEsXG4uYXNzZXQtY29udHJhY3QgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG4uYXNzZXQtZGV0YWlsIC5zZXJ2aWNlLWZyZXF1ZW5jeSxcbi5hc3NldC1jb250cmFjdCAuc2VydmljZS1mcmVxdWVuY3kge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYXNzZXQtZGV0YWlsIC5zZXJ2aWNlLWZyZXF1ZW5jeSxcbi5hc3NldC1jb250cmFjdCAuc2VydmljZS1mcmVxdWVuY3kge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICB9XG59XG4uYXNzZXQtZGV0YWlsIC5zZXJ2aWNlLWZyZXF1ZW5jeSAuZm9ybS1jb250cm9sLFxuLmFzc2V0LWNvbnRyYWN0IC5zZXJ2aWNlLWZyZXF1ZW5jeSAuZm9ybS1jb250cm9sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwcHg7XG59XG4uYXNzZXQtZGV0YWlsIC5zZXJ2aWNlLWZyZXF1ZW5jeSBkaXY6bnRoLWNoaWxkKDMpLFxuLmFzc2V0LWNvbnRyYWN0IC5zZXJ2aWNlLWZyZXF1ZW5jeSBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLmFzc2V0LWRldGFpbCAuc2VydmljZS1mcmVxdWVuY3kgc3Bhbixcbi5hc3NldC1jb250cmFjdCAuc2VydmljZS1mcmVxdWVuY3kgc3BhbiB7XG4gIHBhZGRpbmc6IDAuOGVtO1xufVxuXG4uYXNzZXQtZGV0YWlscyB7XG4gIG1hcmdpbi1sZWZ0OiAxLjVlbTtcbn1cblxuLmFzc2V0LWhpc3Rvcnkge1xuICBwYWRkaW5nOiAwIDFlbTtcbn1cbi5hc3NldC1oaXN0b3J5IHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JjYmNiYztcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXNzZXQtaGlzdG9yeSB0YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFzc2V0LWhpc3RvcnkgdGFibGUgdGQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjYmNiY2JjO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmFzc2V0LWhpc3RvcnkgdGFibGUgdGQ6bnRoLWNoaWxkKDEpLCAuYXNzZXQtaGlzdG9yeSB0YWJsZSB0ZDpudGgtY2hpbGQoMikge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXNzZXQtaGlzdG9yeSB0YWJsZSB0ZDpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMTUlO1xufVxuLmFzc2V0LWhpc3RvcnkgdGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5hc3NldC1oaXN0b3J5IHRhYmxlIHRkOm50aC1jaGlsZCgzKSB7XG4gIHdpZHRoOiAyNSU7XG59XG4uYXNzZXQtaGlzdG9yeSB0YWJsZSB0ZDpudGgtY2hpbGQoNCkge1xuICB3aWR0aDogNTAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFzc2V0LWhpc3RvcnkgdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uc2VsZWN0LXJlYWRvbmx5IHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5hbGVydE1lc3NhZ2Uge1xuICBoZWlnaHQ6IDY3cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYWxlcnRNZXNzYWdlIHtcbiAgICBoZWlnaHQ6IDBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYWxlcnRNZXNzYWdlcyB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAuYWxlcnQge1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBwYWRkaW5nLXRvcDogMC45ZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICA6Om5nLWRlZXAgLmFsZXJ0IHtcbiAgICBwYWRkaW5nOiAxZW0gMC4yZW07XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOjpuZy1kZWVwIC5mb3JtLWdyb3VwIC5hbGVydC1tc2dzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIuNWVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubW9iaWxlLXZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSIsIiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIktvaGlub29yXCIsIFwiT3BlbiBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIFwiR2lsbCBTYW5zXCIsIENvcmJlbCwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRib2R5LWNvbG9yOiAjNDI0MjQ0ICFkZWZhdWx0O1xuJGdyZWVuOiAjNkE5NTVCICFkZWZhdWx0O1xuJGdyZWVuLWZhZGVkOiAjRDFERUNEO1xuJHJlZDogI0ZGNDIyRSAhZGVmYXVsdDtcbiRyZWQtbGlnaHQ6ICNGRkQ5RDUgIWRlZmF1bHQ7XG4kcmVkLWRhcms6ICM5OTQ0NEYgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiA2cHg7XG5cbiRwcmltYXJ5OiAkZ3JlZW47XG5cbiRhbGVydC1ib3JkZXItd2lkdGg6IDA7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogNnB4O1xuJGFsZXJ0LXBhZGRpbmcteDogMS41cmVtO1xuJGFsZXJ0LXBhZGRpbmcteTogMS4ycmVtO1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogIC43NXJlbTtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAzLjc1cmVtO1xuXG4kdG9hc3Qtei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiR0b2FzdC1kdXJhdGlvbjogMzAwMG1zICFkZWZhdWx0O1xuJHRvYXN0LWhlaWdodDogOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1oZWlnaHQtc206IDUuOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1icmVha3BvaW50OiA3NjhweCAhZGVmYXVsdDsiXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=assets-assets-module-es5.js.map