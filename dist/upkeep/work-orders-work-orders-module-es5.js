(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-orders-work-orders-module"], {
    /***/
    "6pNi":
    /*!******************************************************************************!*\
      !*** ./src/app/work-orders/create-work-order/create-work-order.component.ts ***!
      \******************************************************************************/

    /*! exports provided: CreateWorkOrderComponent */

    /***/
    function pNi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateWorkOrderComponent", function () {
        return CreateWorkOrderComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_utils_enumUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/utils/enumUtils */
      "pA2v");
      /* harmony import */


      var _work_order_wizard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../work-order.wizard */
      "bryy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared-module/section-header/section-header.component */
      "OeDX");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _shared_module_list_user_list_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared-module/list-user/list-users.component */
      "Xi4i");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _shared_module_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../shared-module/modal/modal.component */
      "oeRM");
      /* harmony import */


      var _shared_module_pick_assets_pick_assets_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../shared-module/pick-assets/pick-assets.component */
      "eQ4o");
      /* harmony import */


      var _shared_module_pick_check_lists_pick_check_lists_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../shared-module/pick-check-lists/pick-check-lists.component */
      "Nu5/");

      function CreateWorkOrderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CreateWorkOrderComponent_article_2_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " You must specify title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CreateWorkOrderComponent_article_2_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " You must specify description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CreateWorkOrderComponent_article_2_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " You must specify reported on date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CreateWorkOrderComponent_article_2_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " You must specify due on date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CreateWorkOrderComponent_article_2_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " You must specify category ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CreateWorkOrderComponent_article_2_option_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", category_r19.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", category_r19.name, " ");
        }
      }

      function CreateWorkOrderComponent_article_2_div_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " You must specify priority ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CreateWorkOrderComponent_article_2_option_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var workOrderPriority_r21 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", workOrderPriority_r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r11.priorityString(workOrderPriority_r21), " ");
        }
      }

      function CreateWorkOrderComponent_article_2_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " You must specify an asset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CreateWorkOrderComponent_article_2_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Asset");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "svg", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "g", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "path", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "path", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "path", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function CreateWorkOrderComponent_article_2_div_68_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Asset");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateWorkOrderComponent_article_2_div_68_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);

            var workOrderAsset_r22 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r23.handleDeleteAsset(workOrderAsset_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "svg", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "g", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "path", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "path", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "path", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var workOrderAsset_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", workOrderAsset_r22.assetId + " - " + workOrderAsset_r22.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", workOrderAsset_r22.location);
        }
      }

      function CreateWorkOrderComponent_article_2_mat_chip_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var checklist_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](checklist_r25.name);
        }
      }

      function CreateWorkOrderComponent_article_2_app_modal_89_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-modal", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("modalShouldClose", function CreateWorkOrderComponent_article_2_app_modal_89_Template_app_modal_modalShouldClose_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r26.handleDetailsModalClose();
          })("contextmenu", function CreateWorkOrderComponent_article_2_app_modal_89_Template_app_modal_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r28.disableRightClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-pick-assets", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("addedAssets", function CreateWorkOrderComponent_article_2_app_modal_89_Template_app_pick_assets_addedAssets_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r29.handleAddedWorkOrderAssets($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("existingAssets", ctx_r17.existingWorkOrderAssets);
        }
      }

      function CreateWorkOrderComponent_article_2_app_modal_90_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-modal", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("modalShouldClose", function CreateWorkOrderComponent_article_2_app_modal_90_Template_app_modal_modalShouldClose_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r30.handlePickCheckListsModalClose();
          })("contextmenu", function CreateWorkOrderComponent_article_2_app_modal_90_Template_app_modal_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r32.disableRightClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-pick-check-lists", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("addedCheckLists", function CreateWorkOrderComponent_article_2_app_modal_90_Template_app_pick_check_lists_addedCheckLists_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r33.handlePickWorkOrderCheckLists($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("existingChecklists", ctx_r18.existingWorkOrderChecklists);
        }
      }

      function CreateWorkOrderComponent_article_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Create Work Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CreateWorkOrderComponent_article_2_div_6_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CreateWorkOrderComponent_article_2_div_13_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, CreateWorkOrderComponent_article_2_div_23_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Reported On");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function CreateWorkOrderComponent_article_2_Template_input_dateChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r34.onDateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "mat-datepicker-toggle", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "mat-datepicker", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, CreateWorkOrderComponent_article_2_div_34_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Due On");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "mat-datepicker-toggle", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "mat-datepicker", 23, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Assign To");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "app-list-users", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedUserId", function CreateWorkOrderComponent_article_2_Template_app_list_users_selectedUserId_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r36.selectedUserId($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, CreateWorkOrderComponent_article_2_div_52_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, CreateWorkOrderComponent_article_2_option_58_Template, 2, 2, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, CreateWorkOrderComponent_article_2_div_59_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, CreateWorkOrderComponent_article_2_option_65_Template, 2, 2, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, CreateWorkOrderComponent_article_2_div_66_Template, 7, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, CreateWorkOrderComponent_article_2_div_67_Template, 20, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, CreateWorkOrderComponent_article_2_div_68_Template, 21, 2, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateWorkOrderComponent_article_2_Template_button_click_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r37.handlePickAssets();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Add asset");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Checklists");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "mat-chip-list", null, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, CreateWorkOrderComponent_article_2_mat_chip_80_Template, 2, 1, "mat-chip", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matChipInputTokenEnd", function CreateWorkOrderComponent_article_2_Template_input_matChipInputTokenEnd_81_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r38.addCheckList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateWorkOrderComponent_article_2_Template_button_click_83_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r39.handlePickCheckLists();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Add Checklist");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateWorkOrderComponent_article_2_Template_button_click_87_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r40.createWorkOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, " Save all changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](89, CreateWorkOrderComponent_article_2_app_modal_89_Template, 2, 1, "app-modal", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](90, CreateWorkOrderComponent_article_2_app_modal_90_Template, 2, 1, "app-modal", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](33);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](44);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](79);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.formCreateWorkOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.submitAttempted && ctx_r1.formCreateWorkOrder.controls.title.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.submitAttempted && ctx_r1.formCreateWorkOrder.controls.description.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.submitAttempted && ctx_r1.formCreateWorkOrder.controls.reportedOn.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.submitAttempted && ctx_r1.formCreateWorkOrder.controls.dueDate.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r7)("min", ctx_r1.minDueDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.submitAttempted && ctx_r1.formCreateWorkOrder.controls.category.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.workOrderCategories);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.submitAttempted && ctx_r1.formCreateWorkOrder.controls.priority.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.workOrderPriorities);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.submitAttempted && ctx_r1.existingWorkOrderAssets.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.existingWorkOrderAssets.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.existingWorkOrderAssets);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.checklists);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matChipInputFor", _r15)("matChipInputAddOnBlur", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("visible", ctx_r1.formCreateWorkOrder.dirty || ctx_r1.showSaveButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.addAssetsModalVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.pickCheckListsModalVisible);
        }
      }

      var CreateWorkOrderComponent = /*#__PURE__*/function () {
        function CreateWorkOrderComponent(formBuilder, workOrderService, toastService, router, workOrderWizard) {
          _classCallCheck(this, CreateWorkOrderComponent);

          this.formBuilder = formBuilder;
          this.workOrderService = workOrderService;
          this.toastService = toastService;
          this.router = router;
          this.workOrderWizard = workOrderWizard;
          this.isLoading = false;
          this.workOrderPriorities = Object(src_utils_enumUtils__WEBPACK_IMPORTED_MODULE_4__["enumValues"])(src_app_services__WEBPACK_IMPORTED_MODULE_3__["WorkOrderPriority"]);
          this.showSaveButton = false;
          this.submitAttempted = false;
          this.addAssetsModalVisible = false;
          this.existingWorkOrderAssets = [];
          this.existingWorkOrderChecklists = [];
          this.minDueDate = new Date();
          this.todayDate = new Date();
          this.pickCheckListsModalVisible = false;
          this.checklists = [];
        }

        _createClass(CreateWorkOrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
            this.listCategory();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            var _this = this;

            var bulidWorkOrderDetailForm = function bulidWorkOrderDetailForm() {
              _this.formCreateWorkOrder = _this.formBuilder.group({
                title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)])],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4000)])],
                category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                reportedOn: [_this.todayDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                dueDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                assignedToUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)])]
              });
            };

            bulidWorkOrderDetailForm();
          }
        }, {
          key: "createWorkOrder",
          value: function createWorkOrder() {
            var _this2 = this;

            this.submitAttempted = true;
            this.showSaveButton = false;
            this.isLoading = true;

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(this.formCreateWorkOrder.value.dueDate, 'yyyy-MM-dd', 'en-US') < Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(this.formCreateWorkOrder.value.reportedOn, 'yyyy-MM-dd', 'en-US')) {
              this.formCreateWorkOrder.controls['dueDate'].setErrors({
                incorrect: true
              });
            }

            if (this.existingWorkOrderAssets.length === 0) {
              this.isLoading = false;
              return;
            }

            if (!this.formCreateWorkOrder.valid) {
              this.isLoading = false;
              return;
            }

            var workOrderAssets = this.existingWorkOrderAssets.map(function (x) {
              return x.id;
            });
            var workOrderChecklists = this.existingWorkOrderChecklists.map(function (x) {
              return x.id;
            });
            var assignedToUser = this.formCreateWorkOrder.value.assignedToUser;
            var title = this.formCreateWorkOrder.value.title;
            var description = this.formCreateWorkOrder.value.description;
            var priorityId = this.formCreateWorkOrder.value.priority;
            var categoryId = this.formCreateWorkOrder.value.category;
            var reportedOn = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(this.formCreateWorkOrder.value.reportedOn, 'yyyy-MM-ddThh:mm:ss', 'en-US');
            var dueDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(this.formCreateWorkOrder.value.dueDate, 'yyyy-MM-ddThh:mm:ss', 'en-US');
            this.workOrderService.createWorkOrder({
              assignedToUser: assignedToUser,
              title: title,
              description: description,
              priorityId: priorityId,
              categoryId: categoryId,
              reportedOn: reportedOn,
              dueDate: dueDate,
              workOrderAssets: workOrderAssets,
              workOrderChecklists: workOrderChecklists
            }).subscribe(function (data) {
              _this2.toastService.showToast(new src_app_services__WEBPACK_IMPORTED_MODULE_3__["Toast"]('Work order (' + data.workOrderNumber + ') created successfully'));

              _this2.isLoading = false;
              _this2.workOrderWizard.workOrder = {
                id: data.id,
                number: data.number,
                status: data.status,
                assignedToUser: data.assignedToUser,
                dueDate: data.dueDate,
                createdTimestampUtc: data.createdTimestampUtc,
                lastUpdatedTimestampUtc: data.lastUpdatedTimestampUtc,
                title: data.title
              };

              _this2.router.navigate(['work-orders', data.number]);
            }, function (err) {
              _this2.toastService.showErrorToast("Work Order not saved");

              _this2.isLoading = false;
            });
            this.isLoading = false;
          }
        }, {
          key: "selectedUserId",
          value: function selectedUserId(userId) {
            this.formCreateWorkOrder.get('assignedToUser').setValue(userId);
            this.showSaveButton = true;
          }
        }, {
          key: "listCategory",
          value: function listCategory() {
            var _this3 = this;

            this.workOrderService.listWorkOrderCategory().subscribe(function (data) {
              _this3.workOrderCategories = data;
            });
          }
        }, {
          key: "onDateChange",
          value: function onDateChange(inputDate) {
            this.minDueDate = new Date(inputDate.value);
            this.minDueDate.setDate(this.minDueDate.getDate());
            this.formCreateWorkOrder.get('dueDate').setValue(null);
          }
        }, {
          key: "handlePickAssets",
          value: function handlePickAssets() {
            this.addAssetsModalVisible = true;
          }
        }, {
          key: "handleDetailsModalClose",
          value: function handleDetailsModalClose() {
            this.addAssetsModalVisible = false;
          }
        }, {
          key: "disableRightClick",
          value: function disableRightClick(e) {
            e.preventDefault();
          }
        }, {
          key: "handleAddedWorkOrderAssets",
          value: function handleAddedWorkOrderAssets(listAssets) {
            this.addAssetsModalVisible = false;
            this.existingWorkOrderAssets = listAssets;
            this.showSaveButton = true;
          }
        }, {
          key: "handleDeleteAsset",
          value: function handleDeleteAsset(asset) {
            this.existingWorkOrderAssets.splice(this.existingWorkOrderAssets.indexOf(asset), 1);
            this.showSaveButton = true;
          }
        }, {
          key: "priorityString",
          value: function priorityString(priority) {
            return Object(src_utils_enumUtils__WEBPACK_IMPORTED_MODULE_4__["enumString"])(src_app_services__WEBPACK_IMPORTED_MODULE_3__["WorkOrderPriority"], priority);
          }
        }, {
          key: "handlePickWorkOrderCheckLists",
          value: function handlePickWorkOrderCheckLists(pickCheckLists) {
            this.pickCheckListsModalVisible = false;
            this.existingWorkOrderChecklists = pickCheckLists;
            this.checklists = pickCheckLists;
            this.showSaveButton = true;
          }
        }, {
          key: "handlePickCheckLists",
          value: function handlePickCheckLists() {
            this.pickCheckListsModalVisible = true;
          }
        }, {
          key: "handlePickCheckListsModalClose",
          value: function handlePickCheckListsModalClose() {
            this.pickCheckListsModalVisible = false;
          }
        }, {
          key: "addCheckList",
          value: function addCheckList(event) {
            var value = (event.value || '').trim();

            if (value) {
              this.checklists.push(value);
            }

            if (event.input) {
              event.input.value = '';
            }
          }
        }]);

        return CreateWorkOrderComponent;
      }();

      CreateWorkOrderComponent.ɵfac = function CreateWorkOrderComponent_Factory(t) {
        return new (t || CreateWorkOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["WorkordersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_work_order_wizard__WEBPACK_IMPORTED_MODULE_5__["WorkOrderWizard"]));
      };

      CreateWorkOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: CreateWorkOrderComponent,
        selectors: [["app-create-work-order"]],
        decls: 3,
        vars: 3,
        consts: [[3, "customCurrentPageTitle"], [4, "ngIf"], [1, "spinner"], [3, "formGroup"], [1, "core-info", "mt-4"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex", "align-items-center", "mb-sm-4", "mb-2"], [1, "col-4", "col-sm-2"], [1, "col-8", "col-sm-10"], ["type", "text", "maxlength", "50", "formControlName", "title", 1, "form-control"], [1, "d-flex", "mb-sm-4", "mb-2"], [1, "col-sm-2", "col-4", "mt-2"], [1, "col-sm-10", "col-8"], ["formControlName", "description", "rows", "8", "maxlength", "4000", 1, "form-control"], [1, "row", "d-flex"], [1, "col-sm-6"], [1, "d-flex", "mb-2", "mb-sm-3", "align-items-center"], [1, "col-4"], [1, "col-8"], [1, "form-group"], [1, "taro-material-datepicker"], ["matInput", "", "formControlName", "reportedOn", 1, "form-control", "mat-input-date", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], ["disabled", "false"], ["datePicker", ""], ["matInput", "", "formControlName", "dueDate", 1, "form-control", "mat-input-date", 3, "matDatepicker", "min"], ["datePickerDueDate", ""], ["type", "hidden", "formControlName", "assignedToUser", 1, "form-control"], [3, "selectedUserId"], ["formControlName", "category", 1, "custom-select", "form-control"], ["class", "form-control", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "priority", 1, "custom-select", "form-control"], ["class", "row", 4, "ngIf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "pb-4"], [1, "btn", "btn-link", "p-0", "add-asset", 3, "click"], [1, "col-4", "col-sm-2", "pt-4"], [1, "pt-2"], ["chipList", ""], [4, "ngFor", "ngForOf"], ["readonly", "", 3, "matChipInputFor", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [1, "form-actions"], [1, "btn", "btn-primary", "btn-block", "col-12", 3, "click"], [3, "modalShouldClose", "contextmenu", 4, "ngIf"], [1, "d-flex"], [1, "col-8", "col-sm-10", "alert", "alert-danger", "arrow-alert"], [1, "col-8", "alert", "alert-danger", "arrow-alert"], [1, "form-control", 3, "value"], [1, "row"], [1, "d-flex", "align-items-center"], [1, "col-8", "asset-input-alret", "alert", "alert-danger", "arrow-alert"], [1, "col-sm-6", "mb-2", "mb-sm-3"], [1, "col-8", "asset-input-size"], ["type", "text", "readonly", "", 1, "readonly", "form-control", 3, "value"], [1, "col-8", "d-flex", "align-items-center"], ["type", "text", "readonly", "", 1, "form-control", "readonly", 3, "value"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15.002", "height", "19.003", "viewBox", "0 0 14.002 18.003", 1, "del-icon", "opacity-50"], ["id", "wrench", "transform", "translate(0.001 0)"], ["id", "Path_1563", "data-name", "Path 1563", "d", "M12.333,3.933,1.267,3.8c-.133.133-.4.133-.533.267A.8.8,0,0,0,.6,4.6L1.8,16.2c0,.4.267.533.667.533h8.267A.61.61,0,0,0,11.4,16.2L12.867,4.6a.8.8,0,0,0-.133-.533,1.343,1.343,0,0,0-.4-.134Zm-2,11.6h-7.2L2.067,5.267h9.467Z", "transform", "translate(0.2 1.267)"], ["id", "Path_1564", "data-name", "Path 1564", "d", "M13.333,3.2H10.667A3.739,3.739,0,0,0,6.933,0a3.607,3.607,0,0,0-3.6,3.2H.667A.63.63,0,0,0,0,3.867a.63.63,0,0,0,.667.667H13.333A.63.63,0,0,0,14,3.867a.63.63,0,0,0-.667-.667Zm-6.4-1.867A2.442,2.442,0,0,1,9.333,3.2H4.667A2.407,2.407,0,0,1,6.933,1.333Z"], ["id", "Path_1565", "data-name", "Path 1565", "d", "M5.367,13.467a.63.63,0,0,0,.667-.667V6.667A.63.63,0,0,0,5.367,6a.63.63,0,0,0-.667.667v6.267C4.7,13.2,5.1,13.467,5.367,13.467Z", "transform", "translate(1.567 2)"], ["id", "Path_1566", "data-name", "Path 1566", "d", "M3.9,13.5a.714.714,0,0,0,.667-.667L4.033,6.567A.714.714,0,0,0,3.367,5.9a.845.845,0,0,0-.667.8l.533,6.267A.886.886,0,0,0,3.9,13.5Z", "transform", "translate(0.9 1.967)"], ["id", "Path_1567", "data-name", "Path 1567", "d", "M6.942,13.475a.63.63,0,0,0,.667-.667l.533-6.267c.133-.267-.133-.533-.533-.533-.4-.133-.667.133-.667.533l-.533,6.267c-.134.4.133.667.533.667Z", "transform", "translate(2.125 1.991)"], [1, "del-icon-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15.002", "height", "19.003", "viewBox", "0 0 14.002 18.003", 1, "del-icon"], [3, "modalShouldClose", "contextmenu"], [3, "existingAssets", "addedAssets"], [3, "existingChecklists", "addedCheckLists"]],
        template: function CreateWorkOrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-section-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateWorkOrderComponent_div_1_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CreateWorkOrderComponent_article_2_Template, 91, 24, "article", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("customCurrentPageTitle", "Create Work Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_7__["SectionHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _shared_module_list_user_list_users_component__WEBPACK_IMPORTED_MODULE_10__["ListUsersComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChip"], _shared_module_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"], _shared_module_pick_assets_pick_assets_component__WEBPACK_IMPORTED_MODULE_13__["PickAssetsComponent"], _shared_module_pick_check_lists_pick_check_lists_component__WEBPACK_IMPORTED_MODULE_14__["PickCheckListsComponent"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\narticle[_ngcontent-%COMP%] {\n  margin-bottom: 6em;\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f2f2f2;\n  height: 3.8em;\n  font-size: 0.85em;\n  border: 1px solid #ced4da;\n  border-radius: 0.25em;\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 1em 0 0 1em;\n  font-weight: 500;\n  text-transform: none;\n  font-size: 1em !important;\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]   .btn-file-upload[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-width: 1px 0 1px 0;\n  background-color: #dddddd;\n  height: 3.7em;\n  width: 100%;\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]   .btn-file-upload[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\narticle[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #dedede;\n  margin-bottom: 1em;\n  padding-bottom: 0.5em;\n}\narticle[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.5em;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .del-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\narticle[_ngcontent-%COMP%]   .readonly[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background-color: rgba(234, 234, 234, 0.295);\n  color: #9c9a9a;\n}\narticle[_ngcontent-%COMP%]   .del-icon-button[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: transparent;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%] {\n  padding: 0 1em;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: solid 1px #bcbcbc;\n  width: 100%;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #e4e4e4;\n  font-weight: bold;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: solid 1px #bcbcbc;\n  padding: 10px;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  text-align: center;\n  width: 15%;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: center;\n  width: 20%;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  word-break: break-all;\n  width: 65%;\n}\n@media screen and (max-width: 610px) {\n  article[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    display: none;\n  }\n  article[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    width: 40%;\n  }\n  article[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    width: 60%;\n  }\n  article[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .desktop-time-view[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6A955B;\n  text-decoration: underline;\n  font-size: small;\n}\narticle[_ngcontent-%COMP%]   .modal-details[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  background-color: #f5f3f3;\n  padding: 1.2em;\n}\n@media screen and (max-width: 610px) {\n  article[_ngcontent-%COMP%]   .attachment-icon[_ngcontent-%COMP%] {\n    padding-right: 0em !important;\n  }\n}\n  .form-group {\n  position: relative;\n}\n  .form-group .alert-msgs {\n  position: absolute;\n  bottom: 2.5em;\n}\n  .form-group .asset-alert-msgs {\n  position: absolute;\n  bottom: 0em;\n  width: 100%;\n  margin-bottom: -0.35em;\n  z-index: 9;\n}\n.mat-input-date[_ngcontent-%COMP%] {\n  padding: 0.9rem !important;\n  box-sizing: inherit !important;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n  .mat-chip-list-wrapper {\n  display: block;\n  width: 100%;\n  padding: 0.55rem 0.5rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #424244;\n  background-color: rgba(234, 234, 234, 0.295);\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.375rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n  .mat-form-field-underline {\n  display: none;\n}\n  .mat-chip.mat-standard-chip {\n  background-color: #5c747d;\n  color: #fff;\n}\n  .mat-standard-chip {\n  border-radius: 5px !important;\n}\n@media screen and (max-width: 768px) {\n    .mat-standard-chip {\n    height: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcX2dsb2JhbHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNyZWF0ZS13b3JrLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFOzs7O0lBSUUsd0JBQUE7RUNqQkY7O0VEbUJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFiaUI7RUNIbkI7O0VEa0JBO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQ2ZGO0FBQ0Y7QUFmQTtFQUNFLGtCQUFBO0FBaUJGO0FBZkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBaUJKO0FBaEJJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFrQk47QUFoQkk7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQWtCTjtBQWpCTTtFQUNFLGVBQUE7QUFtQlI7QUFkRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQWdCSjtBQWRJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQWdCTjtBQVhJO0VBQ0Usa0JBQUE7QUFhTjtBQVhJO0VBQ0UsWUFBQTtBQWFOO0FBVEU7RUFDRSxvQkFBQTtFQUNBLDRDQUFBO0VBQ0EsY0FBQTtBQVdKO0FBUkU7RUFDRSxTQUFBO0VBQ0EsNkJBQUE7QUFVSjtBQVJFO0VBQ0UsY0FBQTtBQVVKO0FBVEk7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQVdOO0FBVE07RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBV1I7QUFUTTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQVdSO0FBVFE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFXVjtBQVRRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBV1Y7QUFUUTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQVdWO0FBUlE7RUFDRTtJQUNFLGFBQUE7RUFVVjtFQVJRO0lBQWdCLFVBQUE7RUFXeEI7RUFWUTtJQUFnQixVQUFBO0VBYXhCO0VBWk87SUFDQyxhQUFBO0VBY1I7QUFDRjtBQVRNO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFXUjtBQU5FO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQVFKO0FBTEU7RUFDRTtJQUNFLDZCQUFBO0VBT0o7QUFDRjtBQUZBO0VBQ0Usa0JBQUE7QUFLRjtBQUpFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBTUo7QUFKRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFNSjtBQUZBO0VBQ0UsMEJBQUE7RUFDQSw4QkFBQTtBQUtGO0FBRkE7RUFDRSxXQUFBO0FBS0Y7QUFGQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdFQUFBO0FBS0Y7QUFGQTtFQUNFLGFBQUE7QUFLRjtBQUZBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBS0Y7QUFGQTtFQUNFLDZCQUFBO0FBS0Y7QUFIRTtFQUhGO0lBSUUsdUJBQUE7RUFNQTtBQUNGIiwiZmlsZSI6ImNyZWF0ZS13b3JrLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9AdGFyb3B1bXBzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuJG5hdi1ncmV5OiAjZTJlMmUyO1xyXG4kc2VhcmNoLWdyZXk6ICNmMmYyZjI7XHJcbiRoZWFkZXItcGFkZGluZzogMi41cmVtO1xyXG4kaGVhZGVyLXBhZGRpbmctc206IDFyZW07XHJcbiRiYXNlLW5hdi13aWR0aDogNy45ZW07XHJcbiRleHBhbmRlZC1uYXYtd2lkdGg6IDIwZW07XHJcbiRoZWFkZXItaGVpZ2h0OiAxMi40cmVtO1xyXG4kbWVudS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZzogMXJlbSAzLjNyZW07XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmctc206IDFyZW0gMS43cmVtO1xyXG4kY29udGVudC1hcmVhLWNvbG9yOiAjZmZmO1xyXG4kd2FybmluZzogI0VBMDAyOTtcclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5hcHAtaGVhZGVyLFxyXG4gIC5mdW5jdGlvbi1iYXIsXHJcbiAgYXBwLXNlY3Rpb24taGVhZGVyLFxyXG4gIC5tZWRpYS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFwcC1jb250ZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1hcmVhLWNvbG9yO1xyXG4gIH1cclxuICAubWVkaWEtcHJpbnQge1xyXG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgcHJpbnQge1xuICAuYXBwLWhlYWRlcixcbi5mdW5jdGlvbi1iYXIsXG5hcHAtc2VjdGlvbi1oZWFkZXIsXG4ubWVkaWEtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFwcC1jb250ZW50LWFyZWEge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAubWVkaWEtcHJpbnQge1xuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmFydGljbGUge1xuICBtYXJnaW4tYm90dG9tOiA2ZW07XG59XG5hcnRpY2xlIC5maWxlLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgaGVpZ2h0OiAzLjhlbTtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbn1cbmFydGljbGUgLmZpbGUtaW5wdXQgbGFiZWwge1xuICBtYXJnaW46IDFlbSAwIDAgMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbn1cbmFydGljbGUgLmZpbGUtaW5wdXQgLmJ0bi1maWxlLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci13aWR0aDogMXB4IDAgMXB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIGhlaWdodDogMy43ZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuYXJ0aWNsZSAuZmlsZS1pbnB1dCAuYnRuLWZpbGUtdXBsb2FkW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbmFydGljbGUgaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG59XG5hcnRpY2xlIGhlYWRlciBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5hcnRpY2xlIC5jb3JlLWluZm8gLmRlbC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuYXJ0aWNsZSAuY29yZS1pbmZvIHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuYXJ0aWNsZSAucmVhZG9ubHkge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDIzNCwgMjM0LCAwLjI5NSk7XG4gIGNvbG9yOiAjOWM5YTlhO1xufVxuYXJ0aWNsZSAuZGVsLWljb24tYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmFydGljbGUgLnNlcnZpY2UtaGlzdG9yeSB7XG4gIHBhZGRpbmc6IDAgMWVtO1xufVxuYXJ0aWNsZSAuc2VydmljZS1oaXN0b3J5IHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JjYmNiYztcbiAgd2lkdGg6IDEwMCU7XG59XG5hcnRpY2xlIC5zZXJ2aWNlLWhpc3RvcnkgdGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmFydGljbGUgLnNlcnZpY2UtaGlzdG9yeSB0YWJsZSB0ZCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiY2JjYmM7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5hcnRpY2xlIC5zZXJ2aWNlLWhpc3RvcnkgdGFibGUgdGQ6bnRoLWNoaWxkKDEpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTUlO1xufVxuYXJ0aWNsZSAuc2VydmljZS1oaXN0b3J5IHRhYmxlIHRkOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIwJTtcbn1cbmFydGljbGUgLnNlcnZpY2UtaGlzdG9yeSB0YWJsZSB0ZDpudGgtY2hpbGQoMykge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdpZHRoOiA2NSU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xuICBhcnRpY2xlIC5zZXJ2aWNlLWhpc3RvcnkgdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgYXJ0aWNsZSAuc2VydmljZS1oaXN0b3J5IHRhYmxlIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICBhcnRpY2xlIC5zZXJ2aWNlLWhpc3RvcnkgdGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIGFydGljbGUgLnNlcnZpY2UtaGlzdG9yeSB0YWJsZSB0ZCAuZGVza3RvcC10aW1lLXZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbmFydGljbGUgLnNlcnZpY2UtaGlzdG9yeSB0YWJsZSBhIHtcbiAgY29sb3I6ICM2QTk1NUI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuYXJ0aWNsZSAubW9kYWwtZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjNmMztcbiAgcGFkZGluZzogMS4yZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xuICBhcnRpY2xlIC5hdHRhY2htZW50LWljb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cbjo6bmctZGVlcCAuZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjo6bmctZGVlcCAuZm9ybS1ncm91cCAuYWxlcnQtbXNncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyLjVlbTtcbn1cbjo6bmctZGVlcCAuZm9ybS1ncm91cCAuYXNzZXQtYWxlcnQtbXNncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAtMC4zNWVtO1xuICB6LWluZGV4OiA5O1xufVxuXG4ubWF0LWlucHV0LWRhdGUge1xuICBwYWRkaW5nOiAwLjlyZW0gIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNTVyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDI0MjQ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgMjM0LCAyMzQsIDAuMjk1KTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Yzc0N2Q7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "A5z7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js ***!
      \***********************************************************************/

    /*! exports provided: MAT_CHIPS_DEFAULT_OPTIONS, MAT_CHIP_AVATAR, MAT_CHIP_REMOVE, MAT_CHIP_TRAILING_ICON, MatChip, MatChipAvatar, MatChipInput, MatChipList, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule, ɵ0 */

    /***/
    function A5z7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function () {
        return MAT_CHIPS_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_AVATAR", function () {
        return MAT_CHIP_AVATAR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_REMOVE", function () {
        return MAT_CHIP_REMOVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_TRAILING_ICON", function () {
        return MAT_CHIP_TRAILING_ICON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChip", function () {
        return MatChip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function () {
        return MatChipAvatar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipInput", function () {
        return MatChipInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipList", function () {
        return MatChipList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipListChange", function () {
        return MatChipListChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipRemove", function () {
        return MatChipRemove;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function () {
        return MatChipSelectionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function () {
        return MatChipTrailingIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipsModule", function () {
        return MatChipsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Event object emitted by MatChip when selected or deselected. */


      var _c0 = ["*"];

      var MatChipSelectionChange = /*#__PURE__*/_createClass(function MatChipSelectionChange(
      /** Reference to the chip that emitted the event. */
      source,
      /** Whether the chip that emitted the event is selected. */
      selected) {
        var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _classCallCheck(this, MatChipSelectionChange);

        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
      });
      /**
       * Injection token that can be used to reference instances of `MatChipRemove`. It serves as
       * alternative token to the actual `MatChipRemove` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_CHIP_REMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipRemove');
      /**
       * Injection token that can be used to reference instances of `MatChipAvatar`. It serves as
       * alternative token to the actual `MatChipAvatar` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_CHIP_AVATAR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipAvatar');
      /**
       * Injection token that can be used to reference instances of `MatChipTrailingIcon`. It serves as
       * alternative token to the actual `MatChipTrailingIcon` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_CHIP_TRAILING_ICON = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipTrailingIcon'); // Boilerplate for applying mixins to MatChip.

      /** @docs-private */

      var MatChipBase = /*#__PURE__*/_createClass(function MatChipBase(_elementRef) {
        _classCallCheck(this, MatChipBase);

        this._elementRef = _elementRef;
      });

      var _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatChipBase), 'primary'), -1);
      /**
       * Dummy directive to add CSS class to chip avatar.
       * @docs-private
       */


      var MatChipAvatar = /*#__PURE__*/_createClass(function MatChipAvatar() {
        _classCallCheck(this, MatChipAvatar);
      });

      MatChipAvatar.ɵfac = function MatChipAvatar_Factory(t) {
        return new (t || MatChipAvatar)();
      };

      MatChipAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipAvatar,
        selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
        hostAttrs: [1, "mat-chip-avatar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_AVATAR,
          useExisting: MatChipAvatar
        }])]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipAvatar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'mat-chip-avatar, [matChipAvatar]',
            host: {
              'class': 'mat-chip-avatar'
            },
            providers: [{
              provide: MAT_CHIP_AVATAR,
              useExisting: MatChipAvatar
            }]
          }]
        }], null, null);
      })();
      /**
       * Dummy directive to add CSS class to chip trailing icon.
       * @docs-private
       */


      var MatChipTrailingIcon = /*#__PURE__*/_createClass(function MatChipTrailingIcon() {
        _classCallCheck(this, MatChipTrailingIcon);
      });

      MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(t) {
        return new (t || MatChipTrailingIcon)();
      };

      MatChipTrailingIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipTrailingIcon,
        selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
        hostAttrs: [1, "mat-chip-trailing-icon"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_TRAILING_ICON,
          useExisting: MatChipTrailingIcon
        }])]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipTrailingIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
            host: {
              'class': 'mat-chip-trailing-icon'
            },
            providers: [{
              provide: MAT_CHIP_TRAILING_ICON,
              useExisting: MatChipTrailingIcon
            }]
          }]
        }], null, null);
      })();
      /**
       * Material design styled Chip component. Used inside the MatChipList component.
       */


      var MatChip = /*#__PURE__*/function (_MatChipMixinBase2) {
        _inherits(MatChip, _MatChipMixinBase2);

        var _super = _createSuper(MatChip);

        function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, _changeDetectorRef, _document, animationMode, tabIndex) {
          var _this4;

          _classCallCheck(this, MatChip);

          _this4 = _super.call(this, _elementRef);
          _this4._elementRef = _elementRef;
          _this4._ngZone = _ngZone;
          _this4._changeDetectorRef = _changeDetectorRef;
          /** Whether the chip has focus. */

          _this4._hasFocus = false;
          /** Whether the chip list is selectable */

          _this4.chipListSelectable = true;
          /** Whether the chip list is in multi-selection mode. */

          _this4._chipListMultiple = false;
          /** Whether the chip list as a whole is disabled. */

          _this4._chipListDisabled = false;
          _this4._selected = false;
          _this4._selectable = true;
          _this4._disabled = false;
          _this4._removable = true;
          /** Emits when the chip is focused. */

          _this4._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Emits when the chip is blured. */

          _this4._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Emitted when the chip is selected or deselected. */

          _this4.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emitted when the chip is destroyed. */

          _this4.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emitted when a chip is to be removed. */

          _this4.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          _this4._addHostClassName(); // Dynamically create the ripple target, append it within the chip, and use it as the
          // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
          // the proper styles.


          _this4._chipRippleTarget = _document.createElement('div');

          _this4._chipRippleTarget.classList.add('mat-chip-ripple');

          _this4._elementRef.nativeElement.appendChild(_this4._chipRippleTarget);

          _this4._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["RippleRenderer"](_assertThisInitialized(_this4), _ngZone, _this4._chipRippleTarget, platform);

          _this4._chipRipple.setupTriggerEvents(_elementRef);

          _this4.rippleConfig = globalRippleOptions || {};
          _this4._animationsDisabled = animationMode === 'NoopAnimations';
          _this4.tabIndex = tabIndex != null ? parseInt(tabIndex) || -1 : -1;
          return _this4;
        }
        /**
         * Whether ripples are disabled on interaction
         * @docs-private
         */


        _createClass(MatChip, [{
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || this.disableRipple || this._animationsDisabled || !!this.rippleConfig.disabled;
          }
          /** Whether the chip is selected. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            var coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (coercedValue !== this._selected) {
              this._selected = coercedValue;

              this._dispatchSelectionChange();
            }
          }
          /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */

        }, {
          key: "value",
          get: function get() {
            return this._value !== undefined ? this._value : this._elementRef.nativeElement.textContent;
          },
          set: function set(value) {
            this._value = value;
          }
          /**
           * Whether or not the chip is selectable. When a chip is not selectable,
           * changes to its selected state are always ignored. By default a chip is
           * selectable, and it becomes non-selectable if its parent chip list is
           * not selectable.
           */

        }, {
          key: "selectable",
          get: function get() {
            return this._selectable && this.chipListSelectable;
          },
          set: function set(value) {
            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the chip is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._chipListDisabled || this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /**
           * Determines whether or not the chip displays the remove styling and emits (removed) events.
           */

        }, {
          key: "removable",
          get: function get() {
            return this._removable;
          },
          set: function set(value) {
            this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** The ARIA selected applied to the chip. */

        }, {
          key: "ariaSelected",
          get: function get() {
            // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
            // it adds noise to NVDA users where "not selected" will be read out for each chip.
            return this.selectable && (this._chipListMultiple || this.selected) ? this.selected.toString() : null;
          }
        }, {
          key: "_addHostClassName",
          value: function _addHostClassName() {
            var basicChipAttrName = 'mat-basic-chip';
            var element = this._elementRef.nativeElement;

            if (element.hasAttribute(basicChipAttrName) || element.tagName.toLowerCase() === basicChipAttrName) {
              element.classList.add(basicChipAttrName);
              return;
            } else {
              element.classList.add('mat-standard-chip');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed.emit({
              chip: this
            });

            this._chipRipple._removeTriggerEvents();
          }
          /** Selects the chip. */

        }, {
          key: "select",
          value: function select() {
            if (!this._selected) {
              this._selected = true;

              this._dispatchSelectionChange();

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Deselects the chip. */

        }, {
          key: "deselect",
          value: function deselect() {
            if (this._selected) {
              this._selected = false;

              this._dispatchSelectionChange();

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Select this chip and emit selected event */

        }, {
          key: "selectViaInteraction",
          value: function selectViaInteraction() {
            if (!this._selected) {
              this._selected = true;

              this._dispatchSelectionChange(true);

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Toggles the current selected state of this chip. */

        }, {
          key: "toggleSelected",
          value: function toggleSelected() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this._selected = !this.selected;

            this._dispatchSelectionChange(isUserInput);

            this._changeDetectorRef.markForCheck();

            return this.selected;
          }
          /** Allows for programmatic focusing of the chip. */

        }, {
          key: "focus",
          value: function focus() {
            if (!this._hasFocus) {
              this._elementRef.nativeElement.focus();

              this._onFocus.next({
                chip: this
              });
            }

            this._hasFocus = true;
          }
          /**
           * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
           * BACKSPACE keys are pressed.
           *
           * Informs any listeners of the removal request. Does not remove the chip from the DOM.
           */

        }, {
          key: "remove",
          value: function remove() {
            if (this.removable) {
              this.removed.emit({
                chip: this
              });
            }
          }
          /** Handles click events on the chip. */

        }, {
          key: "_handleClick",
          value: function _handleClick(event) {
            if (this.disabled) {
              event.preventDefault();
            } else {
              event.stopPropagation();
            }
          }
          /** Handle custom key presses. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (this.disabled) {
              return;
            }

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DELETE"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"]:
                // If we are removable, remove the focused chip
                this.remove(); // Always prevent so page navigation does not occur

                event.preventDefault();
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                  this.toggleSelected(true);
                } // Always prevent space from scrolling the page since the list has focus


                event.preventDefault();
                break;
            }
          }
        }, {
          key: "_blur",
          value: function _blur() {
            var _this5 = this;

            // When animations are enabled, Angular may end up removing the chip from the DOM a little
            // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
            // that moves focus not the next item. To work around the issue, we defer marking the chip
            // as not focused until the next time the zone stabilizes.
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () {
              _this5._ngZone.run(function () {
                _this5._hasFocus = false;

                _this5._onBlur.next({
                  chip: _this5
                });
              });
            });
          }
        }, {
          key: "_dispatchSelectionChange",
          value: function _dispatchSelectionChange() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.selectionChange.emit({
              source: this,
              isUserInput: isUserInput,
              selected: this._selected
            });
          }
        }]);

        return MatChip;
      }(_MatChipMixinBase);

      MatChip.ɵfac = function MatChip_Factory(t) {
        return new (t || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'));
      };

      MatChip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChip,
        selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
        contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_AVATAR, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_REMOVE, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
          }
        },
        hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"],
        hostVars: 14,
        hostBindings: function MatChip_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChip_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            })("keydown", function MatChip_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("focus", function MatChip_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChip_blur_HostBindingHandler() {
              return ctx._blur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
          }
        },
        inputs: {
          color: "color",
          disableRipple: "disableRipple",
          tabIndex: "tabIndex",
          selected: "selected",
          value: "value",
          selectable: "selectable",
          disabled: "disabled",
          removable: "removable"
        },
        outputs: {
          selectionChange: "selectionChange",
          destroyed: "destroyed",
          removed: "removed"
        },
        exportAs: ["matChip"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      MatChip.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }];
      };

      MatChip.propDecorators = {
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_AVATAR]
        }],
        trailingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_TRAILING_ICON]
        }],
        removeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_REMOVE]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChip, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
            inputs: ['color', 'disableRipple', 'tabIndex'],
            exportAs: 'matChip',
            host: {
              'class': 'mat-chip mat-focus-indicator',
              '[attr.tabindex]': 'disabled ? null : tabIndex',
              'role': 'option',
              '[class.mat-chip-selected]': 'selected',
              '[class.mat-chip-with-avatar]': 'avatar',
              '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
              '[class.mat-chip-disabled]': 'disabled',
              '[class._mat-animation-noopable]': '_animationsDisabled',
              '[attr.disabled]': 'disabled || null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-selected]': 'ariaSelected',
              '(click)': '_handleClick($event)',
              '(keydown)': '_handleKeydown($event)',
              '(focus)': 'focus()',
              '(blur)': '_blur()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }];
        }, {
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_AVATAR]
          }],
          trailingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_TRAILING_ICON]
          }],
          removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_REMOVE]
          }]
        });
      })();
      /**
       * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
       * available at https://material.io/icons/#ic_cancel.
       *
       * Example:
       *
       *     `<mat-chip>
       *       <mat-icon matChipRemove>cancel</mat-icon>
       *     </mat-chip>`
       *
       * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
       * styles to properly center the icon within the chip.
       */


      var MatChipRemove = /*#__PURE__*/function () {
        function MatChipRemove(_parentChip, elementRef) {
          _classCallCheck(this, MatChipRemove);

          this._parentChip = _parentChip;

          if (elementRef.nativeElement.nodeName === 'BUTTON') {
            elementRef.nativeElement.setAttribute('type', 'button');
          }
        }
        /** Calls the parent chip's public `remove()` method if applicable. */


        _createClass(MatChipRemove, [{
          key: "_handleClick",
          value: function _handleClick(event) {
            var parentChip = this._parentChip;

            if (parentChip.removable && !parentChip.disabled) {
              parentChip.remove();
            } // We need to stop event propagation because otherwise the event will bubble up to the
            // form field and cause the `onContainerClick` method to be invoked. This method would then
            // reset the focused chip that has been focused after chip removal. Usually the parent
            // the parent click listener of the `MatChip` would prevent propagation, but it can happen
            // that the chip is being removed before the event bubbles up.


            event.stopPropagation();
          }
        }]);

        return MatChipRemove;
      }();

      MatChipRemove.ɵfac = function MatChipRemove_Factory(t) {
        return new (t || MatChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatChip), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      MatChipRemove.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipRemove,
        selectors: [["", "matChipRemove", ""]],
        hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"],
        hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChipRemove_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: MAT_CHIP_REMOVE,
          useExisting: MatChipRemove
        }])]
      });

      MatChipRemove.ctorParameters = function () {
        return [{
          type: MatChip
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipRemove, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[matChipRemove]',
            host: {
              'class': 'mat-chip-remove mat-chip-trailing-icon',
              '(click)': '_handleClick($event)'
            },
            providers: [{
              provide: MAT_CHIP_REMOVE,
              useExisting: MatChipRemove
            }]
          }]
        }], function () {
          return [{
            type: MatChip
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for the chips module. */


      var MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-chips-default-options');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatChipList.

      /** @docs-private */

      var MatChipListBase = /*#__PURE__*/_createClass(function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
      /** @docs-private */
      ngControl) {
        _classCallCheck(this, MatChipListBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      });

      var _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinErrorState"])(MatChipListBase); // Increasing integer for generating unique ids for chip-list components.


      var nextUniqueId = 0;
      /** Change event object that is emitted when the chip list value has changed. */

      var MatChipListChange = /*#__PURE__*/_createClass(function MatChipListChange(
      /** Chip list that emitted the event. */
      source,
      /** Value of the chip list when the event was emitted. */
      value) {
        _classCallCheck(this, MatChipListChange);

        this.source = source;
        this.value = value;
      });
      /**
       * A material design chips component (named ChipList for its similarity to the List component).
       */


      var MatChipList = /*#__PURE__*/function (_MatChipListMixinBase2) {
        _inherits(MatChipList, _MatChipListMixinBase2);

        var _super2 = _createSuper(MatChipList);

        function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher,
        /** @docs-private */
        ngControl) {
          var _this6;

          _classCallCheck(this, MatChipList);

          _this6 = _super2.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this6._elementRef = _elementRef;
          _this6._changeDetectorRef = _changeDetectorRef;
          _this6._dir = _dir;
          _this6.ngControl = ngControl;
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this6.controlType = 'mat-chip-list';
          /**
           * When a chip is destroyed, we store the index of the destroyed chip until the chips
           * query list notifies about the update. This is necessary because we cannot determine an
           * appropriate chip that should receive focus until the array of chips updated completely.
           */

          _this6._lastDestroyedChipIndex = null;
          /** Subject that emits when the component has been destroyed. */

          _this6._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Uid of the chip list */

          _this6._uid = "mat-chip-list-".concat(nextUniqueId++);
          /** Tab index for the chip list. */

          _this6._tabIndex = 0;
          /**
           * User defined tab index.
           * When it is not null, use user defined tab index. Otherwise use _tabIndex
           */

          _this6._userTabIndex = null;
          /** Function when touched */

          _this6._onTouched = function () {};
          /** Function when changed */


          _this6._onChange = function () {};

          _this6._multiple = false;

          _this6._compareWith = function (o1, o2) {
            return o1 === o2;
          };

          _this6._required = false;
          _this6._disabled = false;
          /** Orientation of the chip list. */

          _this6.ariaOrientation = 'horizontal';
          _this6._selectable = true;
          /** Event emitted when the selected chip list value has been changed by the user. */

          _this6.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Event that emits whenever the raw value of the chip-list changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this6.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          if (_this6.ngControl) {
            _this6.ngControl.valueAccessor = _assertThisInitialized(_this6);
          }

          return _this6;
        }
        /** The array of selected chips inside chip list. */


        _createClass(MatChipList, [{
          key: "selected",
          get: function get() {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
          }
          /** The ARIA role applied to the chip list. */

        }, {
          key: "role",
          get: function get() {
            return this.empty ? null : 'listbox';
          }
          /** Whether the user should be allowed to select multiple chips. */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            this._syncChipsState();
          }
          /**
           * A function to compare the option values with the selected values. The first argument
           * is a value from an option. The second is a value from the selection. A boolean
           * should be returned.
           */

        }, {
          key: "compareWith",
          get: function get() {
            return this._compareWith;
          },
          set: function set(fn) {
            this._compareWith = fn;

            if (this._selectionModel) {
              // A different comparator means the selection could change.
              this._initializeSelection();
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            this.writeValue(value);
            this._value = value;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "id",
          get: function get() {
            return this._chipInput ? this._chipInput.id : this._uid;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "placeholder",
          get: function get() {
            return this._chipInput ? this._chipInput.placeholder : this._placeholder;
          },
          set: function set(value) {
            this._placeholder = value;
            this.stateChanges.next();
          }
          /** Whether any chips or the matChipInput inside of this chip-list has focus. */

        }, {
          key: "focused",
          get: function get() {
            return this._chipInput && this._chipInput.focused || this._hasFocusedChip();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "empty",
          get: function get() {
            return (!this._chipInput || this._chipInput.empty) && (!this.chips || this.chips.length === 0);
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return !this.empty || this.focused;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.ngControl ? !!this.ngControl.disabled : this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            this._syncChipsState();
          }
          /**
           * Whether or not this chip list is selectable. When a chip list is not selectable,
           * the selected states for all the chips inside the chip list are always ignored.
           */

        }, {
          key: "selectable",
          get: function get() {
            return this._selectable;
          },
          set: function set(value) {
            var _this7 = this;

            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (this.chips) {
              this.chips.forEach(function (chip) {
                return chip.chipListSelectable = _this7._selectable;
              });
            }
          }
        }, {
          key: "tabIndex",
          set: function set(value) {
            this._userTabIndex = value;
            this._tabIndex = value;
          }
          /** Combined stream of all of the child chips' selection change events. */

        }, {
          key: "chipSelectionChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip.selectionChange;
            })));
          }
          /** Combined stream of all of the child chips' focus change events. */

        }, {
          key: "chipFocusChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip._onFocus;
            })));
          }
          /** Combined stream of all of the child chips' blur change events. */

        }, {
          key: "chipBlurChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip._onBlur;
            })));
          }
          /** Combined stream of all of the child chips' remove change events. */

        }, {
          key: "chipRemoveChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip.destroyed;
            })));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this8 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusKeyManager"](this.chips).withWrap().withVerticalOrientation().withHomeAndEnd().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function (dir) {
                return _this8._keyManager.withHorizontalOrientation(dir);
              });
            }

            this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this8._allowFocusEscape();
            }); // When the list changes, re-subscribe


            this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function () {
              if (_this8.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then(function () {
                  _this8._syncChipsState();
                });
              }

              _this8._resetChips(); // Reset chips selected/deselected status


              _this8._initializeSelection(); // Check to see if we need to update our tab index


              _this8._updateTabIndex(); // Check to see if we have a destroyed chip and need to refocus


              _this8._updateFocusForDestroyedChips();

              _this8.stateChanges.next();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](this.multiple, undefined, false);
            this.stateChanges.next();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();

              if (this.ngControl.disabled !== this._disabled) {
                this.disabled = !!this.ngControl.disabled;
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();

            this.stateChanges.complete();

            this._dropSubscriptions();
          }
          /** Associates an HTML input element with this chip list. */

        }, {
          key: "registerInput",
          value: function registerInput(inputElement) {
            this._chipInput = inputElement; // We use this attribute to match the chip list to its input in test harnesses.
            // Set the attribute directly here to avoid "changed after checked" errors.

            this._elementRef.nativeElement.setAttribute('data-mat-chip-input', inputElement.id);
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (this.chips) {
              this._setSelectionByValue(value, false);
            }
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
            this.stateChanges.next();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick(event) {
            if (!this._originatesFromChip(event)) {
              this.focus();
            }
          }
          /**
           * Focuses the first non-disabled chip in this chip list, or the associated input when there
           * are no eligible chips.
           */

        }, {
          key: "focus",
          value: function focus(options) {
            if (this.disabled) {
              return;
            } // TODO: ARIA says this should focus the first `selected` chip if any are selected.
            // Focus on first element if there's no chipInput inside chip-list


            if (this._chipInput && this._chipInput.focused) {// do nothing
            } else if (this.chips.length > 0) {
              this._keyManager.setFirstItemActive();

              this.stateChanges.next();
            } else {
              this._focusInput(options);

              this.stateChanges.next();
            }
          }
          /** Attempt to focus an input if we have one. */

        }, {
          key: "_focusInput",
          value: function _focusInput(options) {
            if (this._chipInput) {
              this._chipInput.focus(options);
            }
          }
          /**
           * Pass events to the keyboard manager. Available here for tests.
           */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            var target = event.target; // If they are on an empty input and hit backspace, focus the last chip

            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"] && this._isInputEmpty(target)) {
              this._keyManager.setLastItemActive();

              event.preventDefault();
            } else if (target && target.classList.contains('mat-chip')) {
              this._keyManager.onKeydown(event);

              this.stateChanges.next();
            }
          }
          /**
           * Check the tab index as you should not be allowed to focus an empty list.
           */

        }, {
          key: "_updateTabIndex",
          value: function _updateTabIndex() {
            // If we have 0 chips, we should not allow keyboard focus
            this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
          }
          /**
           * If the amount of chips changed, we need to update the
           * key manager state and focus the next closest chip.
           */

        }, {
          key: "_updateFocusForDestroyedChips",
          value: function _updateFocusForDestroyedChips() {
            // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
            if (this._lastDestroyedChipIndex != null) {
              if (this.chips.length) {
                var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);

                this._keyManager.setActiveItem(newChipIndex);
              } else {
                this.focus();
              }
            }

            this._lastDestroyedChipIndex = null;
          }
          /**
           * Utility to ensure all indexes are valid.
           *
           * @param index The index to be checked.
           * @returns True if the index is valid for our list of chips.
           */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            return index >= 0 && index < this.chips.length;
          }
        }, {
          key: "_isInputEmpty",
          value: function _isInputEmpty(element) {
            if (element && element.nodeName.toLowerCase() === 'input') {
              var input = element;
              return !input.value;
            }

            return false;
          }
        }, {
          key: "_setSelectionByValue",
          value: function _setSelectionByValue(value) {
            var _this9 = this;

            var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this._clearSelection();

            this.chips.forEach(function (chip) {
              return chip.deselect();
            });

            if (Array.isArray(value)) {
              value.forEach(function (currentValue) {
                return _this9._selectValue(currentValue, isUserInput);
              });

              this._sortValues();
            } else {
              var correspondingChip = this._selectValue(value, isUserInput); // Shift focus to the active item. Note that we shouldn't do this in multiple
              // mode, because we don't know what chip the user interacted with last.


              if (correspondingChip) {
                if (isUserInput) {
                  this._keyManager.setActiveItem(correspondingChip);
                }
              }
            }
          }
          /**
           * Finds and selects the chip based on its value.
           * @returns Chip that has the corresponding value.
           */

        }, {
          key: "_selectValue",
          value: function _selectValue(value) {
            var _this10 = this;

            var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var correspondingChip = this.chips.find(function (chip) {
              return chip.value != null && _this10._compareWith(chip.value, value);
            });

            if (correspondingChip) {
              isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();

              this._selectionModel.select(correspondingChip);
            }

            return correspondingChip;
          }
        }, {
          key: "_initializeSelection",
          value: function _initializeSelection() {
            var _this11 = this;

            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then(function () {
              if (_this11.ngControl || _this11._value) {
                _this11._setSelectionByValue(_this11.ngControl ? _this11.ngControl.value : _this11._value, false);

                _this11.stateChanges.next();
              }
            });
          }
          /**
           * Deselects every chip in the list.
           * @param skip Chip that should not be deselected.
           */

        }, {
          key: "_clearSelection",
          value: function _clearSelection(skip) {
            this._selectionModel.clear();

            this.chips.forEach(function (chip) {
              if (chip !== skip) {
                chip.deselect();
              }
            });
            this.stateChanges.next();
          }
          /**
           * Sorts the model values, ensuring that they keep the same
           * order that they have in the panel.
           */

        }, {
          key: "_sortValues",
          value: function _sortValues() {
            var _this12 = this;

            if (this._multiple) {
              this._selectionModel.clear();

              this.chips.forEach(function (chip) {
                if (chip.selected) {
                  _this12._selectionModel.select(chip);
                }
              });
              this.stateChanges.next();
            }
          }
          /** Emits change event to set the model value. */

        }, {
          key: "_propagateChanges",
          value: function _propagateChanges(fallbackValue) {
            var valueToEmit = null;

            if (Array.isArray(this.selected)) {
              valueToEmit = this.selected.map(function (chip) {
                return chip.value;
              });
            } else {
              valueToEmit = this.selected ? this.selected.value : fallbackValue;
            }

            this._value = valueToEmit;
            this.change.emit(new MatChipListChange(this, valueToEmit));
            this.valueChange.emit(valueToEmit);

            this._onChange(valueToEmit);

            this._changeDetectorRef.markForCheck();
          }
          /** When blurred, mark the field as touched when focus moved outside the chip list. */

        }, {
          key: "_blur",
          value: function _blur() {
            var _this13 = this;

            if (!this._hasFocusedChip()) {
              this._keyManager.setActiveItem(-1);
            }

            if (!this.disabled) {
              if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout(function () {
                  if (!_this13.focused) {
                    _this13._markAsTouched();
                  }
                });
              } else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
              }
            }
          }
          /** Mark the field as touched */

        }, {
          key: "_markAsTouched",
          value: function _markAsTouched() {
            this._onTouched();

            this._changeDetectorRef.markForCheck();

            this.stateChanges.next();
          }
          /**
           * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
           * user to tab out of it. This prevents the list from capturing focus and redirecting
           * it back to the first chip, creating a focus trap, if it user tries to tab away.
           */

        }, {
          key: "_allowFocusEscape",
          value: function _allowFocusEscape() {
            var _this14 = this;

            if (this._tabIndex !== -1) {
              this._tabIndex = -1;
              setTimeout(function () {
                _this14._tabIndex = _this14._userTabIndex || 0;

                _this14._changeDetectorRef.markForCheck();
              });
            }
          }
        }, {
          key: "_resetChips",
          value: function _resetChips() {
            this._dropSubscriptions();

            this._listenToChipsFocus();

            this._listenToChipsSelection();

            this._listenToChipsRemoved();
          }
        }, {
          key: "_dropSubscriptions",
          value: function _dropSubscriptions() {
            if (this._chipFocusSubscription) {
              this._chipFocusSubscription.unsubscribe();

              this._chipFocusSubscription = null;
            }

            if (this._chipBlurSubscription) {
              this._chipBlurSubscription.unsubscribe();

              this._chipBlurSubscription = null;
            }

            if (this._chipSelectionSubscription) {
              this._chipSelectionSubscription.unsubscribe();

              this._chipSelectionSubscription = null;
            }

            if (this._chipRemoveSubscription) {
              this._chipRemoveSubscription.unsubscribe();

              this._chipRemoveSubscription = null;
            }
          }
          /** Listens to user-generated selection events on each chip. */

        }, {
          key: "_listenToChipsSelection",
          value: function _listenToChipsSelection() {
            var _this15 = this;

            this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(function (event) {
              event.source.selected ? _this15._selectionModel.select(event.source) : _this15._selectionModel.deselect(event.source); // For single selection chip list, make sure the deselected value is unselected.

              if (!_this15.multiple) {
                _this15.chips.forEach(function (chip) {
                  if (!_this15._selectionModel.isSelected(chip) && chip.selected) {
                    chip.deselect();
                  }
                });
              }

              if (event.isUserInput) {
                _this15._propagateChanges();
              }
            });
          }
          /** Listens to user-generated selection events on each chip. */

        }, {
          key: "_listenToChipsFocus",
          value: function _listenToChipsFocus() {
            var _this16 = this;

            this._chipFocusSubscription = this.chipFocusChanges.subscribe(function (event) {
              var chipIndex = _this16.chips.toArray().indexOf(event.chip);

              if (_this16._isValidIndex(chipIndex)) {
                _this16._keyManager.updateActiveItem(chipIndex);
              }

              _this16.stateChanges.next();
            });
            this._chipBlurSubscription = this.chipBlurChanges.subscribe(function () {
              _this16._blur();

              _this16.stateChanges.next();
            });
          }
        }, {
          key: "_listenToChipsRemoved",
          value: function _listenToChipsRemoved() {
            var _this17 = this;

            this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(function (event) {
              var chip = event.chip;

              var chipIndex = _this17.chips.toArray().indexOf(event.chip); // In case the chip that will be removed is currently focused, we temporarily store
              // the index in order to be able to determine an appropriate sibling chip that will
              // receive focus.


              if (_this17._isValidIndex(chipIndex) && chip._hasFocus) {
                _this17._lastDestroyedChipIndex = chipIndex;
              }
            });
          }
          /** Checks whether an event comes from inside a chip element. */

        }, {
          key: "_originatesFromChip",
          value: function _originatesFromChip(event) {
            var currentElement = event.target;

            while (currentElement && currentElement !== this._elementRef.nativeElement) {
              if (currentElement.classList.contains('mat-chip')) {
                return true;
              }

              currentElement = currentElement.parentElement;
            }

            return false;
          }
          /** Checks whether any of the chips is focused. */

        }, {
          key: "_hasFocusedChip",
          value: function _hasFocusedChip() {
            return this.chips && this.chips.some(function (chip) {
              return chip._hasFocus;
            });
          }
          /** Syncs the list's state with the individual chips. */

        }, {
          key: "_syncChipsState",
          value: function _syncChipsState() {
            var _this18 = this;

            if (this.chips) {
              this.chips.forEach(function (chip) {
                chip._chipListDisabled = _this18._disabled;
                chip._chipListMultiple = _this18.multiple;
              });
            }
          }
        }]);

        return MatChipList;
      }(_MatChipListMixinBase);

      MatChipList.ɵfac = function MatChipList_Factory(t) {
        return new (t || MatChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], 10));
      };

      MatChipList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatChipList,
        selectors: [["mat-chip-list"]],
        contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChip, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chips = _t);
          }
        },
        hostAttrs: [1, "mat-chip-list"],
        hostVars: 15,
        hostBindings: function MatChipList_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatChipList_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChipList_blur_HostBindingHandler() {
              return ctx._blur();
            })("keydown", function MatChipList_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx._uid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
          }
        },
        inputs: {
          ariaOrientation: ["aria-orientation", "ariaOrientation"],
          multiple: "multiple",
          compareWith: "compareWith",
          value: "value",
          required: "required",
          placeholder: "placeholder",
          disabled: "disabled",
          selectable: "selectable",
          tabIndex: "tabIndex",
          errorStateMatcher: "errorStateMatcher"
        },
        outputs: {
          change: "change",
          valueChange: "valueChange"
        },
        exportAs: ["matChipList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
          useExisting: MatChipList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-chip-list-wrapper"]],
        template: function MatChipList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatChipList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }];
      };

      MatChipList.propDecorators = {
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaOrientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-orientation']
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        chips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatChip, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-chip-list',
            template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
            exportAs: 'matChipList',
            host: {
              '[attr.tabindex]': 'disabled ? null : _tabIndex',
              '[attr.aria-describedby]': '_ariaDescribedby || null',
              '[attr.aria-required]': 'role ? required : null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-multiselectable]': 'multiple',
              '[attr.role]': 'role',
              '[class.mat-chip-list-disabled]': 'disabled',
              '[class.mat-chip-list-invalid]': 'errorState',
              '[class.mat-chip-list-required]': 'required',
              '[attr.aria-orientation]': 'ariaOrientation',
              'class': 'mat-chip-list',
              '(focus)': 'focus()',
              '(blur)': '_blur()',
              '(keydown)': '_keydown($event)',
              '[id]': '_uid'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
              useExisting: MatChipList
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }];
        }, {
          ariaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-orientation']
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          chips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatChip, {
              // We need to use `descendants: true`, because Ivy will no longer match
              // indirect descendants if it's left as false.
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Increasing integer for generating unique ids.


      var nextUniqueId$1 = 0;
      /**
       * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
       * May be placed inside or outside of an `<mat-chip-list>`.
       */

      var MatChipInput = /*#__PURE__*/function () {
        function MatChipInput(_elementRef, _defaultOptions) {
          _classCallCheck(this, MatChipInput);

          this._elementRef = _elementRef;
          this._defaultOptions = _defaultOptions;
          /** Whether the control is focused. */

          this.focused = false;
          this._addOnBlur = false;
          /**
           * The list of key codes that will trigger a chipEnd event.
           *
           * Defaults to `[ENTER]`.
           */

          this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
          /** Emitted when a chip is to be added. */

          this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** The input's placeholder text. */

          this.placeholder = '';
          /** Unique id for the input. */

          this.id = "mat-chip-list-input-".concat(nextUniqueId$1++);
          this._disabled = false;
          this._inputElement = this._elementRef.nativeElement;
        }
        /** Register input for chip list */


        _createClass(MatChipInput, [{
          key: "chipList",
          set: function set(value) {
            if (value) {
              this._chipList = value;

              this._chipList.registerInput(this);
            }
          }
          /**
           * Whether or not the chipEnd event will be emitted when the input is blurred.
           */

        }, {
          key: "addOnBlur",
          get: function get() {
            return this._addOnBlur;
          },
          set: function set(value) {
            this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this._chipList && this._chipList.disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the input is empty. */

        }, {
          key: "empty",
          get: function get() {
            return !this._inputElement.value;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._chipList.stateChanges.next();
          }
          /** Utility method to make host definition/tests more clear. */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            // Allow the user's focus to escape when they're tabbing forward. Note that we don't
            // want to do this when going backwards, because focus should go back to the first chip.
            if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event, 'shiftKey')) {
              this._chipList._allowFocusEscape();
            }

            this._emitChipEnd(event);
          }
          /** Checks to see if the blur should emit the (chipEnd) event. */

        }, {
          key: "_blur",
          value: function _blur() {
            if (this.addOnBlur) {
              this._emitChipEnd();
            }

            this.focused = false; // Blur the chip list if it is not focused

            if (!this._chipList.focused) {
              this._chipList._blur();
            }

            this._chipList.stateChanges.next();
          }
        }, {
          key: "_focus",
          value: function _focus() {
            this.focused = true;

            this._chipList.stateChanges.next();
          }
          /** Checks to see if the (chipEnd) event needs to be emitted. */

        }, {
          key: "_emitChipEnd",
          value: function _emitChipEnd(event) {
            if (!this._inputElement.value && !!event) {
              this._chipList._keydown(event);
            }

            if (!event || this._isSeparatorKey(event)) {
              this.chipEnd.emit({
                input: this._inputElement,
                value: this._inputElement.value
              });

              if (event) {
                event.preventDefault();
              }
            }
          }
        }, {
          key: "_onInput",
          value: function _onInput() {
            // Let chip list know whenever the value changes.
            this._chipList.stateChanges.next();
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._inputElement.focus(options);
          }
          /** Checks whether a keycode is one of the configured separators. */

        }, {
          key: "_isSeparatorKey",
          value: function _isSeparatorKey(event) {
            return !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
          }
        }]);

        return MatChipInput;
      }();

      MatChipInput.ɵfac = function MatChipInput_Factory(t) {
        return new (t || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_CHIPS_DEFAULT_OPTIONS));
      };

      MatChipInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatChipInput,
        selectors: [["input", "matChipInputFor", ""]],
        hostAttrs: [1, "mat-chip-input", "mat-input-element"],
        hostVars: 5,
        hostBindings: function MatChipInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            })("blur", function MatChipInput_blur_HostBindingHandler() {
              return ctx._blur();
            })("focus", function MatChipInput_focus_HostBindingHandler() {
              return ctx._focus();
            })("input", function MatChipInput_input_HostBindingHandler() {
              return ctx._onInput();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
          }
        },
        inputs: {
          separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
          placeholder: "placeholder",
          id: "id",
          chipList: ["matChipInputFor", "chipList"],
          addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"],
          disabled: "disabled"
        },
        outputs: {
          chipEnd: "matChipInputTokenEnd"
        },
        exportAs: ["matChipInput", "matChipInputFor"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      MatChipInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_CHIPS_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatChipInput.propDecorators = {
        chipList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputFor']
        }],
        addOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputAddOnBlur']
        }],
        separatorKeyCodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputSeparatorKeyCodes']
        }],
        chipEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['matChipInputTokenEnd']
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'input[matChipInputFor]',
            exportAs: 'matChipInput, matChipInputFor',
            host: {
              'class': 'mat-chip-input mat-input-element',
              '(keydown)': '_keydown($event)',
              '(blur)': '_blur()',
              '(focus)': '_focus()',
              '(input)': '_onInput()',
              '[id]': 'id',
              '[attr.disabled]': 'disabled || null',
              '[attr.placeholder]': 'placeholder || null',
              '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
              '[attr.aria-required]': '_chipList && _chipList.required || null'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_CHIPS_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          separatorKeyCodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputSeparatorKeyCodes']
          }],
          chipEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['matChipInputTokenEnd']
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          chipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputFor']
          }],
          addOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputAddOnBlur']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CHIP_DECLARATIONS = [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
      var ɵ0 = {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]]
      };

      var MatChipsModule = /*#__PURE__*/_createClass(function MatChipsModule() {
        _classCallCheck(this, MatChipsModule);
      });

      MatChipsModule.ɵfac = function MatChipsModule_Factory(t) {
        return new (t || MatChipsModule)();
      };

      MatChipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatChipsModule
      });
      MatChipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
          provide: MAT_CHIPS_DEFAULT_OPTIONS,
          useValue: ɵ0
        }],
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatChipsModule, {
          declarations: function declarations() {
            return [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: CHIP_DECLARATIONS,
            declarations: CHIP_DECLARATIONS,
            providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
              provide: MAT_CHIPS_DEFAULT_OPTIONS,
              useValue: ɵ0
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=chips.js.map

      /***/

    },

    /***/
    "CycE":
    /*!***************************************************!*\
      !*** ./src/app/work-orders/work-orders.module.ts ***!
      \***************************************************/

    /*! exports provided: WorkOrdersModule */

    /***/
    function CycE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkOrdersModule", function () {
        return WorkOrdersModule;
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


      var _work_orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./work-orders-routing.module */
      "wyWS");
      /* harmony import */


      var _work_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./work-orders.component */
      "fg9g");
      /* harmony import */


      var _view_workorder_view_workorder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-workorder/view-workorder.component */
      "WQq8");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var src_utils_dateUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/utils/dateUtils */
      "Y4NF");
      /* harmony import */


      var _pick_workorder_spares_pick_workorder_spares_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pick-workorder-spares/pick-workorder-spares.component */
      "ZCnb");
      /* harmony import */


      var _pick_workorder_spares_spares_skus_spares_skus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pick-workorder-spares/spares-skus/spares-skus.component */
      "msZ0");
      /* harmony import */


      var _create_work_order_create_work_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./create-work-order/create-work-order.component */
      "6pNi");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _view_workorder_checklist_task_item_checklist_task_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./view-workorder/checklist-task-item/checklist-task-item.component */
      "H6ry");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PickDateAdapter = /*#__PURE__*/function (_angular_material_cor) {
        _inherits(PickDateAdapter, _angular_material_cor);

        var _super3 = _createSuper(PickDateAdapter);

        function PickDateAdapter() {
          _classCallCheck(this, PickDateAdapter);

          return _super3.apply(this, arguments);
        }

        _createClass(PickDateAdapter, [{
          key: "format",
          value: function format(date, displayFormat) {
            if (displayFormat === 'input') {
              return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'dd MMM yyyy', this.locale);
            } else {
              return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, 'dd MMM yyyy', this.locale);
            }
          }
        }]);

        return PickDateAdapter;
      }(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["NativeDateAdapter"]);

      var WorkOrdersModule = /*#__PURE__*/_createClass(function WorkOrdersModule() {
        _classCallCheck(this, WorkOrdersModule);
      });

      WorkOrdersModule.ɵfac = function WorkOrdersModule_Factory(t) {
        return new (t || WorkOrdersModule)();
      };

      WorkOrdersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
        type: WorkOrdersModule
      });
      WorkOrdersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
          useClass: PickDateAdapter
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"],
          useValue: src_utils_dateUtils__WEBPACK_IMPORTED_MODULE_8__["dateFormatWithMonthName"]
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _work_orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["WorkOrdersRoutingModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](WorkOrdersModule, {
          declarations: [_work_orders_component__WEBPACK_IMPORTED_MODULE_4__["WorkOrdersComponent"], _view_workorder_view_workorder_component__WEBPACK_IMPORTED_MODULE_5__["ViewWorkorderComponent"], _pick_workorder_spares_pick_workorder_spares_component__WEBPACK_IMPORTED_MODULE_9__["PickWorkOrderSparesComponent"], _pick_workorder_spares_spares_skus_spares_skus_component__WEBPACK_IMPORTED_MODULE_10__["SparesSkusComponent"], _create_work_order_create_work_order_component__WEBPACK_IMPORTED_MODULE_11__["CreateWorkOrderComponent"], _view_workorder_checklist_task_item_checklist_task_item_component__WEBPACK_IMPORTED_MODULE_14__["ChecklistTaskItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _work_orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["WorkOrdersRoutingModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]]
        });
      })();
      /***/

    },

    /***/
    "H6ry":
    /*!*************************************************************************************************!*\
      !*** ./src/app/work-orders/view-workorder/checklist-task-item/checklist-task-item.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ChecklistTaskItemComponent */

    /***/
    function H6ry(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChecklistTaskItemComponent", function () {
        return ChecklistTaskItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ChecklistTaskItemComponent_table_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChecklistTaskItemComponent_table_1_Template_input_change_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.handleSelectChecklistTask($event, ctx_r1.taskItem);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.taskItem.sequenceNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.taskItem.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.isTaskEditable)("checked", ctx_r0.taskItem.isCompleted);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "addtask-wrapper": a0
        };
      };

      var ChecklistTaskItemComponent = /*#__PURE__*/function () {
        function ChecklistTaskItemComponent() {
          _classCallCheck(this, ChecklistTaskItemComponent);

          this.taskSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ChecklistTaskItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleSelectChecklistTask",
          value: function handleSelectChecklistTask(event, taskItem) {
            taskItem.isCompleted = !taskItem.isCompleted;
            event.currentTarget.checked = taskItem.isCompleted;
            this.taskSelected.emit();
          }
        }]);

        return ChecklistTaskItemComponent;
      }();

      ChecklistTaskItemComponent.ɵfac = function ChecklistTaskItemComponent_Factory(t) {
        return new (t || ChecklistTaskItemComponent)();
      };

      ChecklistTaskItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChecklistTaskItemComponent,
        selectors: [["app-checklist-task-item"]],
        inputs: {
          taskItem: "taskItem",
          firstItem: "firstItem",
          isTaskEditable: "isTaskEditable"
        },
        outputs: {
          taskSelected: "taskSelected"
        },
        decls: 2,
        vars: 4,
        consts: [[3, "ngClass"], ["width", "100%", 4, "ngIf"], ["width", "100%"], [1, "task-id-cell"], [1, "task-description-cell"], [1, "task-iscompleted-cell"], [1, "form-group"], [1, "radio", "custom"], ["for", "includeObsolete", 1, "custom-control-label", "label-align"], ["type", "checkbox", 1, "custom-control-input", 3, "disabled", "checked", "change"]],
        template: function ChecklistTaskItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChecklistTaskItemComponent_table_1_Template, 14, 4, "table", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.firstItem));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskItem);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n[_nghost-%COMP%] {\n  display: table-row;\n  background-color: #f2f2f2;\n  position: relative;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: middle;\n  height: 5em;\n  border-bottom: 2px solid white;\n  position: relative;\n  background: #F2F2F2;\n  padding: 0.5em 0px;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  font-weight: 400;\n  text-align: center;\n  width: 5em;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  font-weight: 400;\n  text-align: left;\n  width: 88%;\n  padding-left: 1em;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  font-weight: 600;\n  width: 5em;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3)   input[_ngcontent-%COMP%] {\n  width: 18px;\n  margin-top: 22px;\n  height: 18px;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    display: flex;\n    align-items: center;\n    border-bottom: none;\n  }\n  [_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n    border-bottom: none;\n    height: auto;\n    text-align: center;\n    vertical-align: middle;\n    height: 5em;\n    border-bottom: 2px solid white;\n    position: relative;\n    background: #F2F2F2;\n  }\n  [_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n    font-weight: 400;\n    text-align: center;\n    width: 3em;\n  }\n  [_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    font-weight: 400;\n    text-align: left;\n    width: 80%;\n    padding-left: 0.5em;\n  }\n  [_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    font-weight: 600;\n    width: 3em;\n    padding-right: 0.4em;\n  }\n  [_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3)   input[_ngcontent-%COMP%] {\n    width: 15px;\n    height: 15px;\n  }\n}\n.task-id-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5em;\n}\n.task-description-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-right: solid 1px #c3bbbb;\n  border-left: solid 1px #c3bbbb;\n  display: block;\n  padding: 0.5em;\n}\n.addtask-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 1px 4px 3px rgba(221, 220, 220, 0.75);\n  margin-top: -6px;\n  width: 100%;\n  display: block;\n  clear: both;\n  float: left;\n  height: 6px;\n  position: absolute;\n  z-index: 9;\n  top: 0%;\n}\n.custom[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.custom.checkbox[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  padding-left: 20px;\n}\n.custom[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: -1;\n  cursor: pointer;\n}\n.custom[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: -0.5;\n  width: 21px;\n  height: 19px;\n  background: #fff;\n  border: solid 1px #938e8e;\n  cursor: pointer;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:before {\n  transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);\n  transform: rotate(-45deg) scale(0, 0);\n  content: \"\";\n  position: absolute;\n  left: 4px;\n  top: 3px;\n  z-index: 1;\n  width: 13px;\n  height: 8px;\n  border: 3px solid #5e5b5b;\n  border-top-style: none;\n  border-right-style: none;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked:before {\n  transform: rotate(-45deg) scale(1, 1);\n}\ninput[type=checkbox][_ngcontent-%COMP%]:after {\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXF9nbG9iYWx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hlY2tsaXN0LXRhc2staXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDRTs7OztJQUlFLHdCQUFBO0VDakJGOztFRG1CQTtJQUNFLG9CQUFBO0lBQ0Esc0JBYmlCO0VDSG5COztFRGtCQTtJQUNFLHlCQUFBO0lBQ0EsMEJBQUE7RUNmRjtBQUNGO0FBZkE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFpQkY7QUFmRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFpQko7QUFoQkk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWtCTjtBQWZJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQWlCTjtBQWRJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBZ0JOO0FBZk07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBaUJSO0FBVkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBYUY7RUFYRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBYUo7RUFWSTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VBWU47RUFUSTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7RUFXTjtFQVJJO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7RUFVTjtFQVRNO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFXUjtBQUNGO0FBSkE7RUFFRSxjQUFBO0VBQ0EsY0FBQTtBQUtGO0FBRkE7RUFFRSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFJRjtBQURBO0VBQ0ksaURBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtBQUlKO0FBREE7RUFDRyxtQkFBQTtBQUlIO0FBRkU7RUFFSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdOO0FBQUU7RUFFSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ047QUFDTTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQ1Y7QUFLTTtFQUNJLDZEQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQUZWO0FBTVU7RUFDSSxxQ0FBQTtBQUpkO0FBUU07RUFDSSxrQkFBQTtBQU5WIiwiZmlsZSI6ImNoZWNrbGlzdC10YXNrLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL0B0YXJvcHVtcHMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4kbmF2LWdyZXk6ICNlMmUyZTI7XHJcbiRzZWFyY2gtZ3JleTogI2YyZjJmMjtcclxuJGhlYWRlci1wYWRkaW5nOiAyLjVyZW07XHJcbiRoZWFkZXItcGFkZGluZy1zbTogMXJlbTtcclxuJGJhc2UtbmF2LXdpZHRoOiA3LjllbTtcclxuJGV4cGFuZGVkLW5hdi13aWR0aDogMjBlbTtcclxuJGhlYWRlci1oZWlnaHQ6IDEyLjRyZW07XHJcbiRtZW51LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nOiAxcmVtIDMuM3JlbTtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZy1zbTogMXJlbSAxLjdyZW07XHJcbiRjb250ZW50LWFyZWEtY29sb3I6ICNmZmY7XHJcbiR3YXJuaW5nOiAjRUEwMDI5O1xyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLmFwcC1oZWFkZXIsXHJcbiAgLmZ1bmN0aW9uLWJhcixcclxuICBhcHAtc2VjdGlvbi1oZWFkZXIsXHJcbiAgLm1lZGlhLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYXBwLWNvbnRlbnQtYXJlYSB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250ZW50LWFyZWEtY29sb3I7XHJcbiAgfVxyXG4gIC5tZWRpYS1wcmludCB7XHJcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBwcmludCB7XG4gIC5hcHAtaGVhZGVyLFxuLmZ1bmN0aW9uLWJhcixcbmFwcC1zZWN0aW9uLWhlYWRlcixcbi5tZWRpYS1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXBwLWNvbnRlbnQtYXJlYSB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5tZWRpYS1wcmludCB7XG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuOmhvc3Qge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gIHBhZGRpbmc6IDAuNWVtIDBweDtcbn1cbjpob3N0IHRkOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDVlbTtcbn1cbjpob3N0IHRkOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA4OCU7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xufVxuOmhvc3QgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDVlbTtcbn1cbjpob3N0IHRkOm50aC1jaGlsZCgzKSBpbnB1dCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuICA6aG9zdCB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA1ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICB9XG4gIDpob3N0IHRkOm50aC1jaGlsZCgxKSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDNlbTtcbiAgfVxuICA6aG9zdCB0ZDpudGgtY2hpbGQoMikge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gIH1cbiAgOmhvc3QgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAzZW07XG4gICAgcGFkZGluZy1yaWdodDogMC40ZW07XG4gIH1cbiAgOmhvc3QgdGQ6bnRoLWNoaWxkKDMpIGlucHV0IHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gIH1cbn1cbi50YXNrLWlkLWNlbGwgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLnRhc2stZGVzY3JpcHRpb24tY2VsbCBzcGFuIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2MzYmJiYjtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjYzNiYmJiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5hZGR0YXNrLXdyYXBwZXIge1xuICBib3gtc2hhZG93OiAxcHggNHB4IDNweCByZ2JhKDIyMSwgMjIwLCAyMjAsIDAuNzUpO1xuICBtYXJnaW4tdG9wOiAtNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgdG9wOiAwJTtcbn1cblxuLmN1c3RvbSB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uY3VzdG9tLmNoZWNrYm94ID4gbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmN1c3RvbSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IC0xO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3VzdG9tIGlucHV0W3R5cGU9Y2hlY2tib3hdOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMC41O1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjOTM4ZThlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjQ1LCAxLjgsIDAuNSwgMC43NSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCwgMCk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDNweDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjNWU1YjViO1xuICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSwgMSk7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTphZnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "WQq8":
    /*!************************************************************************!*\
      !*** ./src/app/work-orders/view-workorder/view-workorder.component.ts ***!
      \************************************************************************/

    /*! exports provided: ViewWorkorderComponent */

    /***/
    function WQq8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewWorkorderComponent", function () {
        return ViewWorkorderComponent;
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


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services */
      "o0su");
      /* harmony import */


      var src_utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/utils/dateUtils */
      "Y4NF");
      /* harmony import */


      var src_utils_enumUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/utils/enumUtils */
      "pA2v");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_utils_formValidators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/utils/formValidators */
      "svQ6");
      /* harmony import */


      var _work_order_wizard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../work-order.wizard */
      "bryy");
      /* harmony import */


      var _shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared-module/section-header/section-header.component */
      "OeDX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_module_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../shared-module/loading-modal/loading-modal.component */
      "ZaN7");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _shared_module_list_user_list_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../shared-module/list-user/list-users.component */
      "Xi4i");
      /* harmony import */


      var _shared_module_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../shared-module/accordion/accordion.component */
      "87/D");
      /* harmony import */


      var _shared_module_view_attached_files_view_attached_files_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../shared-module/view-attached-files/view-attached-files.component */
      "rBvy");
      /* harmony import */


      var _checklist_task_item_checklist_task_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./checklist-task-item/checklist-task-item.component */
      "H6ry");
      /* harmony import */


      var _shared_module_modal_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../shared-module/modal/modal.component */
      "oeRM");
      /* harmony import */


      var _shared_module_pick_assets_pick_assets_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../shared-module/pick-assets/pick-assets.component */
      "eQ4o");

      var _c0 = ["fileUploadInput"];

      function ViewWorkorderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewWorkorderComponent_app_loading_modal_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-modal");
        }
      }

      function ViewWorkorderComponent_article_3_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You must specify title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewWorkorderComponent_article_3_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You must specify description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewWorkorderComponent_article_3_option_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r25 = ctx.$implicit;
          var i_r26 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r7.workOrderStatusValues[i_r26])("selected", ctx_r7.workOrderStatusValues[i_r26] === ctx_r7.extendedWorkOrder.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.WorkOrderStatus[status_r25], " ");
        }
      }

      function ViewWorkorderComponent_article_3_div_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 68);
        }
      }

      function ViewWorkorderComponent_article_3_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 68);
        }
      }

      function ViewWorkorderComponent_article_3_div_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 68);
        }
      }

      function ViewWorkorderComponent_article_3_option_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r27.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", category_r27.name, " ");
        }
      }

      function ViewWorkorderComponent_article_3_option_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var workOrderPriority_r29 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", workOrderPriority_r29)("selected", workOrderPriority_r29 === ctx_r12.extendedWorkOrder.priority);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.priorityString(workOrderPriority_r29), " ");
        }
      }

      function ViewWorkorderComponent_article_3_form_88_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Allowed file types are doc, docx, xls, xlsx, csv, pdf, jpeg, png, bmp. Max file size allowed 2 MB. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewWorkorderComponent_article_3_form_88_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Too many files selected. Total number of files cannot exceed ", ctx_r32.filesLimit, ". ");
        }
      }

      function ViewWorkorderComponent_article_3_form_88_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No file selected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewWorkorderComponent_article_3_form_88_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r34.fileCount, " file added");
        }
      }

      function ViewWorkorderComponent_article_3_form_88_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r35.fileCount, " files added");
        }
      }

      function ViewWorkorderComponent_article_3_form_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 71, 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewWorkorderComponent_article_3_form_88_div_4_Template, 2, 0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewWorkorderComponent_article_3_form_88_div_5_Template, 2, 1, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewWorkorderComponent_article_3_form_88_span_9_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewWorkorderComponent_article_3_form_88_span_10_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewWorkorderComponent_article_3_form_88_span_11_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkorderComponent_article_3_form_88_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r37.launchFileInput();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 78, 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewWorkorderComponent_article_3_form_88_Template_input_change_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r39.handleFileInputChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r13.fileUploadForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.fileUploadForm.controls["files"].hasError("acceptableFileType") || ctx_r13.fileUploadForm.controls["files"].hasError("acceptableFileSize"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.fileUploadForm.controls["files"].hasError("acceptableNumberOfFiles") && ctx_r13.fileCount > 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.fileCount === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.fileCount === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.fileCount > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r13.fileCount > 2 || !ctx_r13.isEditable || ctx_r13.fileUploadForm.controls["files"].hasError("acceptableFileType") || ctx_r13.fileUploadForm.controls["files"].hasError("acceptableFileSize"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx_r13.isEditable);
        }
      }

      function ViewWorkorderComponent_article_3_div_89_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-view-attached-files", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deletedFileIndex", function ViewWorkorderComponent_article_3_div_89_Template_app_view_attached_files_deletedFileIndex_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.handleDeleteFileAttached($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attachedFileCollection", ctx_r14.attachedFileCollection)("isEditable", ctx_r14.isEditable);
        }
      }

      function ViewWorkorderComponent_article_3_div_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 83);
        }
      }

      function ViewWorkorderComponent_article_3_div_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 83);
        }
      }

      function ViewWorkorderComponent_article_3_div_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 83);
        }
      }

      function ViewWorkorderComponent_article_3_div_93_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You must specify an asset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewWorkorderComponent_article_3_div_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Asset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewWorkorderComponent_article_3_div_93_div_8_Template, 2, 0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.isAssetAvailable);
        }
      }

      function ViewWorkorderComponent_article_3_div_94_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Asset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkorderComponent_article_3_div_94_div_1_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var i_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.handleDeleteItem(i_r44);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var workOrderAsset_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", workOrderAsset_r43.assetId + " - " + workOrderAsset_r43.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", workOrderAsset_r43.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r45.isEditable);
        }
      }

      function ViewWorkorderComponent_article_3_div_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewWorkorderComponent_article_3_div_94_div_1_Template, 21, 3, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var workOrderAsset_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !workOrderAsset_r43.isDelete);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "last-item": a0
        };
      };

      function ViewWorkorderComponent_article_3_div_108_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-checklist-task-item", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskSelected", function ViewWorkorderComponent_article_3_div_108_div_2_Template_app_checklist_task_item_taskSelected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r55.handleSelectedChecklistTask($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r52 = ctx.$implicit;
          var first_r53 = ctx.first;
          var last_r54 = ctx.last;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("taskItem", task_r52)("firstItem", first_r53)("isTaskEditable", !ctx_r51.isEditable)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, last_r54));
        }
      }

      function ViewWorkorderComponent_article_3_div_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-accordion", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewWorkorderComponent_article_3_div_108_div_2_Template, 2, 6, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var workOrderChecklist_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleDetails", "Checklist  " + workOrderChecklist_r50.numberWithPrefix + " - " + workOrderChecklist_r50.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", workOrderChecklist_r50.task);
        }
      }

      function ViewWorkorderComponent_article_3_tr_127_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkorderComponent_article_3_tr_127_span_6_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

            var workOrderServiceDetail_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.handleViewMoreClick(workOrderServiceDetail_r57);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var workOrderServiceDetail_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", workOrderServiceDetail_r57.serviceDetail.substring(0, ctx_r58.textMaxLength - 10), "... ");
        }
      }

      function ViewWorkorderComponent_article_3_tr_127_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var workOrderServiceDetail_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](workOrderServiceDetail_r57.serviceDetail);
        }
      }

      function ViewWorkorderComponent_article_3_tr_127_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewWorkorderComponent_article_3_tr_127_span_6_Template, 4, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewWorkorderComponent_article_3_tr_127_span_7_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var workOrderServiceDetail_r57 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.getUserName(workOrderServiceDetail_r57.userId));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.standardFormattedDate(workOrderServiceDetail_r57.createdTimestampUtc, true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", workOrderServiceDetail_r57.serviceDetail.length > ctx_r21.textMaxLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", workOrderServiceDetail_r57.serviceDetail.length <= ctx_r21.textMaxLength);
        }
      }

      function ViewWorkorderComponent_article_3_app_modal_128_span_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkorderComponent_article_3_app_modal_128_span_12_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            ctx_r67.enableServiceTextarea = !ctx_r67.enableServiceTextarea;
            return ctx_r67.isShowEditIcon = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewWorkorderComponent_article_3_app_modal_128_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkorderComponent_article_3_app_modal_128_ng_container_16_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r69.handleServiceSaveButton();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r66.isSubmitDisabled);
        }
      }

      function ViewWorkorderComponent_article_3_app_modal_128_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modalShouldClose", function ViewWorkorderComponent_article_3_app_modal_128_Template_app_modal_modalShouldClose_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r71.handleDetailsModalClose();
          })("contextmenu", function ViewWorkorderComponent_article_3_app_modal_128_Template_app_modal_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r73.disableRightClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewWorkorderComponent_article_3_app_modal_128_span_12_Template, 5, 0, "span", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewWorkorderComponent_article_3_app_modal_128_Template_textarea_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r74.selectedWorkOrderServiceDetails.serviceDetail = $event;
          })("input", function ViewWorkorderComponent_article_3_app_modal_128_Template_textarea_input_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r75.handleTextAreaInput();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ViewWorkorderComponent_article_3_app_modal_128_ng_container_16_Template, 4, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Service Details", " (#" + ctx_r22.extendedWorkOrder.number + ")", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.getUserName(ctx_r22.selectedWorkOrderServiceDetails.userId), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.standardFormattedDate(ctx_r22.selectedWorkOrderServiceDetails.createdTimestampUtc, true), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.isShowEditIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("modal-details-textarea-focus", ctx_r22.enableServiceTextarea);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.selectedWorkOrderServiceDetails.serviceDetail)("readOnly", !ctx_r22.enableServiceTextarea);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.enableServiceTextarea);
        }
      }

      function ViewWorkorderComponent_article_3_app_modal_129_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modalShouldClose", function ViewWorkorderComponent_article_3_app_modal_129_Template_app_modal_modalShouldClose_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r76.handleDetailsModalClose();
          })("contextmenu", function ViewWorkorderComponent_article_3_app_modal_129_Template_app_modal_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r78.disableRightClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-pick-assets", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addedAssets", function ViewWorkorderComponent_article_3_app_modal_129_Template_app_pick_assets_addedAssets_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r79.handleAddedWorkOrderAssets($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("existingAssets", ctx_r23.extendedWorkOrder.workOrderAssets);
        }
      }

      function ViewWorkorderComponent_article_3_div_131_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkorderComponent_article_3_div_131_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r80.updateWorkOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Save all changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", !ctx_r24.isUpdatingWorkOrder && ctx_r24.showSaveButton);
        }
      }

      function ViewWorkorderComponent_article_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkorderComponent_article_3_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r82.handlesPickSpares(ctx_r82.workOrderNumber);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pick Spares");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewWorkorderComponent_article_3_div_11_Template, 4, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function ViewWorkorderComponent_article_3_Template_input_paste_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r84.handleClipboard($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkorderComponent_article_3_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r85.handlesPickSpares(ctx_r85.workOrderNumber, ctx_r85.workOrderStatus);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Pick Spares");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ViewWorkorderComponent_article_3_div_23_Template, 4, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Reported On");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-datepicker-toggle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-datepicker", null, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Due On");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-datepicker-toggle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-datepicker", null, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Assigned To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "app-list-users", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedUserId", function ViewWorkorderComponent_article_3_Template_app_list_users_selectedUserId_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r86.selectedUserId($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ViewWorkorderComponent_article_3_option_63_Template, 2, 3, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ViewWorkorderComponent_article_3_div_64_Template, 1, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ViewWorkorderComponent_article_3_div_65_Template, 1, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ViewWorkorderComponent_article_3_div_66_Template, 1, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ViewWorkorderComponent_article_3_option_73_Template, 2, 2, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ViewWorkorderComponent_article_3_option_79_Template, 2, 3, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Attachments ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "svg", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ViewWorkorderComponent_article_3_form_88_Template, 17, 8, "form", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ViewWorkorderComponent_article_3_div_89_Template, 2, 2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ViewWorkorderComponent_article_3_div_90_Template, 1, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, ViewWorkorderComponent_article_3_div_91_Template, 1, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, ViewWorkorderComponent_article_3_div_92_Template, 1, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ViewWorkorderComponent_article_3_div_93_Template, 23, 1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, ViewWorkorderComponent_article_3_div_94_Template, 2, 1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewWorkorderComponent_article_3_Template_button_click_96_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r87.handlePickAssets();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Add Asset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Service Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "textarea", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, ViewWorkorderComponent_article_3_div_108_Template, 3, 2, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Add Checklist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "app-accordion", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "User ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, ViewWorkorderComponent_article_3_tr_127_Template, 8, 4, "tr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, ViewWorkorderComponent_article_3_app_modal_128_Template, 17, 9, "app-modal", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, ViewWorkorderComponent_article_3_app_modal_129_Template, 2, 1, "app-modal", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, ViewWorkorderComponent_article_3_div_131_Template, 4, 2, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("#WO" + ctx_r2.workOrderNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitAttempted && ctx_r2.form.controls.title.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitAttempted && ctx_r2.form.controls.description.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isEditable", ctx_r2.isEditable)("userName", ctx_r2.extendedWorkOrder.assignedToUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.workOrderStatusValues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.workOrderCategories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.workOrderPriorities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileUploadForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fileSrcCollection && ctx_r2.fileSrcCollection.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.extendedWorkOrder.workOrderAssets || ctx_r2.extendedWorkOrder.workOrderAssets.length === 0 || !ctx_r2.isAssetAvailable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.extendedWorkOrder.workOrderAssets);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx_r2.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.extendedWorkOrder.workOrderChecklists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleDetails", "Order Service History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.workOrderServiceDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.detailsModalVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.addAssetsModalVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form);
        }
      }

      var ViewWorkorderComponent = /*#__PURE__*/function () {
        function ViewWorkorderComponent(workOrdersService, formBuilder, router, fileUploadService, authenticationService, toastService, workOrderWizard) {
          _classCallCheck(this, ViewWorkorderComponent);

          this.workOrdersService = workOrdersService;
          this.formBuilder = formBuilder;
          this.router = router;
          this.fileUploadService = fileUploadService;
          this.authenticationService = authenticationService;
          this.toastService = toastService;
          this.workOrderWizard = workOrderWizard;
          this.isLoading = true;
          this.attachedFileCollection = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
          this.standardFormattedDate = src_utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__["standardFormattedDate"];
          this.workOrderPriorities = Object(src_utils_enumUtils__WEBPACK_IMPORTED_MODULE_5__["enumValues"])(_services__WEBPACK_IMPORTED_MODULE_3__["WorkOrderPriority"]);
          this.WorkOrderStatus = _services__WEBPACK_IMPORTED_MODULE_3__["WorkorderStatus"];
          this.workOrderStatusValues = Object(src_utils_enumUtils__WEBPACK_IMPORTED_MODULE_5__["enumValues"])(_services__WEBPACK_IMPORTED_MODULE_3__["WorkorderStatus"]);
          this.standardFormattedDateTime = src_utils_dateUtils__WEBPACK_IMPORTED_MODULE_4__["standardFormattedDateTime"];
          this.detailsModalVisible = false;
          this.textMaxLength = 90;
          this.fileCount = 0;
          this.fileSrcCollection = [];
          this.isEditable = false;
          this.isUpdatingWorkOrder = false;
          this.isNewFilesAdded = false;
          this.showSaveButton = false;
          this.filesLimit = 3;
          this.filePathCollection = [];
          this.fileTypes = ['image/jpeg', 'image/png', 'application/msword', 'jpeg', 'jpg', 'png', 'doc', 'docx', 'xls', 'csv', 'application/ms-excel', 'xlsx', 'pdf', 'bmp'];
          this.addAssetsModalVisible = false;
          this.isAssetAvailable = true;
          this.enableServiceTextarea = false;
          this.isShowEditIcon = true;
          this.submitAttempted = false;
          this.expanded = false;

          if (this.workOrderWizard.workOrder) {
            this.workOrderStatus = this.workOrderWizard.workOrder.status.toString();
            this.workOrderNumber = this.workOrderWizard.workOrder.number.toString();
            this.checkUserEditRights();
          } else {
            this.router.navigate(['work-orders']);
          }
        }

        _createClass(ViewWorkorderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.viewWorkOrderForId();
            this.viewWorkOrderServiceDetailForId();
            this.listCategory();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            var _this19 = this;

            var validPattern = '^[a-zA-Z0-9 ]*';

            var bulidWorkOrderDetailForm = function bulidWorkOrderDetailForm(extendedWorkOrder) {
              _this19.form = _this19.formBuilder.group({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: extendedWorkOrder.title,
                  disabled: !_this19.isEditable
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(validPattern)])),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: extendedWorkOrder.description,
                  disabled: !_this19.isEditable
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: extendedWorkOrder.category.id,
                  disabled: !_this19.isEditable
                }),
                reportedOn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: extendedWorkOrder.reportedOn,
                  disabled: true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
                dueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: extendedWorkOrder.dueDate,
                  disabled: true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
                priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: extendedWorkOrder.priority,
                  disabled: !_this19.isEditable
                }),
                assignedToUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: extendedWorkOrder.assignedToUser,
                  disabled: !_this19.isEditable
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)])),
                status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: extendedWorkOrder.status,
                  disabled: !_this19.isEditable
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
                serviceDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: '',
                  disabled: !_this19.isEditable
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4000)]))
              });
            };

            bulidWorkOrderDetailForm(this.extendedWorkOrder);
            this.form.valueChanges.subscribe(function () {
              setTimeout(function () {
                _this19.updateFormChanges();
              }, 100);
            });
            this.fileUploadForm = this.formBuilder.group({
              files: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(src_utils_formValidators__WEBPACK_IMPORTED_MODULE_8__["fileListFileTypeValidator"])(this.fileTypes), Object(src_utils_formValidators__WEBPACK_IMPORTED_MODULE_8__["fileListFileSizesValidator"])(2000000)], Object(src_utils_formValidators__WEBPACK_IMPORTED_MODULE_8__["fileListNumberOfFilesValidator"])(this.filesLimit)]
            });
          }
        }, {
          key: "viewWorkOrderForId",
          value: function viewWorkOrderForId() {
            var _this20 = this;

            var isOnInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this.isLoading = true;
            var workOrderAttachements$ = this.workOrdersService.viewWorkOrderForId(this.workOrderNumber.toString()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (extendedWorkOrder) {
              _this20.extendedWorkOrder = extendedWorkOrder;

              if (isOnInit) {
                _this20.createForm();
              }

              return extendedWorkOrder.attachedFiles;
            }));
            workOrderAttachements$.subscribe(function (assetAttachments) {
              _this20.fileCount = assetAttachments ? assetAttachments.length : 0;
              var fileList = [];
              _this20.fileSrcCollection = [];
              _this20.filePathCollection = [];

              if (assetAttachments) {
                assetAttachments.forEach(function (filePath) {
                  var fileNameWithExt = filePath.replace(/^.*[\\\/]/, '');
                  var fileName = fileNameWithExt.substring(0, fileNameWithExt.length);

                  if (fileName === 'blob') {
                    return;
                  }

                  _this20.filePathCollection.push(filePath);

                  _this20.fileUploadService.getFile(filePath).subscribe(function (fileData) {
                    fileData.name = fileName;

                    _this20.fileSrcCollection.push(fileData);

                    _this20.fileCount = _this20.fileSrcCollection ? _this20.fileSrcCollection.length : 0;
                    fileList.push(fileData);
                  });
                });

                _this20.fileUploadForm.setValue({
                  files: _this20.fileSrcCollection
                });

                _this20.attachedFileCollection.next(_this20.fileSrcCollection);
              }

              _this20.isLoading = false;
            });
          }
        }, {
          key: "viewWorkOrderServiceDetailForId",
          value: function viewWorkOrderServiceDetailForId() {
            var _this21 = this;

            this.workOrdersService.viewWorkOrderServiceDetailForId(this.workOrderWizard.workOrder.number.toString()).subscribe(function (workOrderServiceDetails) {
              _this21.workOrderServiceDetails = workOrderServiceDetails;
            });
          }
        }, {
          key: "listCategory",
          value: function listCategory() {
            var _this22 = this;

            this.workOrdersService.listWorkOrderCategory().subscribe(function (data) {
              _this22.workOrderCategories = data;
            });
          }
        }, {
          key: "handleViewMoreClick",
          value: function handleViewMoreClick(workOrderServiceDetail) {
            this.detailsModalVisible = true;
            this.isShowEditIcon = this.isEditable;
            this.selectedWorkOrderServiceDetails = workOrderServiceDetail;
          }
        }, {
          key: "handleDetailsModalClose",
          value: function handleDetailsModalClose() {
            this.detailsModalVisible = false;
            this.enableServiceTextarea = false;
            this.addAssetsModalVisible = false;
          }
        }, {
          key: "disableRightClick",
          value: function disableRightClick(e) {
            e.preventDefault();
          }
        }, {
          key: "handlesPickSpares",
          value: function handlesPickSpares(workOrderNumber) {
            this.router.navigate(['work-orders', '#WO' + workOrderNumber, 'PickSpares']);
          }
        }, {
          key: "checkUserEditRights",
          value: function checkUserEditRights() {
            var _this23 = this;

            this.isGettingUserRights = true;
            var userRole$ = this.authenticationService.currentUserProfile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (userProfile) {
              return userProfile;
            }));
            userRole$.subscribe(function (userProfile) {
              _this23.authenticationService.currentUserHasPermission(_defineProperty({}, _services__WEBPACK_IMPORTED_MODULE_3__["PermissionGroup"].WorkOrders, [_services__WEBPACK_IMPORTED_MODULE_3__["WorkOrdersPermissions"].CanEditWorkOrder])).subscribe(function (hasPermission) {
                if (userProfile.userRole.groupName !== _services__WEBPACK_IMPORTED_MODULE_3__["Role"].Technician) {
                  _this23.isEditable = hasPermission && Number(_this23.workOrderStatus) !== _services__WEBPACK_IMPORTED_MODULE_3__["WorkorderStatus"].Closed;
                } else {
                  _this23.isEditable = hasPermission && Number(_this23.workOrderStatus) !== _services__WEBPACK_IMPORTED_MODULE_3__["WorkorderStatus"].Closed && Number(_this23.workOrderStatus) !== _services__WEBPACK_IMPORTED_MODULE_3__["WorkorderStatus"].Complete;
                }

                _this23.isGettingUserRights = false;
              });
            });
          }
        }, {
          key: "launchFileInput",
          value: function launchFileInput() {
            this.fileUploadForm.reset({});
            this.fileUploadInput.nativeElement.value = '';
            this.fileUploadInput.nativeElement.click();
          }
        }, {
          key: "updateFormChanges",
          value: function updateFormChanges() {
            debugger;
            this.extendedWorkOrder.status = this.form.get('status').value;
            this.extendedWorkOrder.assignedToUser = this.form.get('assignedToUser').value ? this.form.get('assignedToUser').value.toString() : '';
            this.extendedWorkOrder.title = this.form.get('title').value.toString();
            this.extendedWorkOrder.description = this.form.get('description').value.toString();
            this.extendedWorkOrder.priority = this.form.get('priority').value;
            this.extendedWorkOrder.dueDate = this.form.get('dueDate').value;
            this.extendedWorkOrder.reportedOn = this.form.get('reportedOn').value;
            var categoryId = this.form.get('category').value;
            this.extendedWorkOrder.category = this.workOrderCategories.filter(function (category) {
              return category.id === Number(categoryId);
            })[0];
            this.extendedWorkOrder.serviceDetails = this.form.get('serviceDetails').value.toString();
            this.showSaveButton = true;
            this.form.markAsDirty();
          }
        }, {
          key: "selectedUserId",
          value: function selectedUserId(userId) {
            this.form.get('assignedToUser').setValue(userId);
            this.showSaveButton = true;
          }
        }, {
          key: "updateWorkOrder",
          value: function updateWorkOrder() {
            var _this24 = this;

            debugger;
            this.submitAttempted = true;

            if (!this.isUpdatingWorkOrder) {
              this.isUpdatingWorkOrder = true;
              this.isAssetAvailable = this.extendedWorkOrder.workOrderAssets.filter(function (asset) {
                return asset.isDelete !== true;
              }).length > 0;

              if (!this.form.valid || !this.isAssetAvailable) {
                this.isNewFilesAdded = false;
                this.showSaveButton = false;
                this.isUpdatingWorkOrder = false; //  this.submitAttempted = false;

                this.form.markAsPristine();
                return;
              }

              this.showSaveButton = false;
              this.form.get('serviceDetails').setValue('');

              if (this.form.valid && this.form.dirty) {
                var paramWorkOrderAssets = [];
                this.extendedWorkOrder.workOrderAssets.forEach(function (workOrderAssets) {
                  if (workOrderAssets.isDelete === true || workOrderAssets.isNew) {
                    workOrderAssets.referenceId = _this24.extendedWorkOrder.id;
                    paramWorkOrderAssets.push(workOrderAssets);
                  }
                });
                this.extendedWorkOrder.workOrderAssets = [];
                this.extendedWorkOrder.workOrderAssets = paramWorkOrderAssets;
                this.form.markAsPristine();
                this.workOrdersService.updateWorkOrderForId(this.extendedWorkOrder.id, this.extendedWorkOrder).subscribe(function (data) {
                  _this24.toastService.showToast(new _services__WEBPACK_IMPORTED_MODULE_3__["Toast"]('Work Order (' + data.workOrderNumber + ') saved successfully'));

                  if (_this24.fileUploadForm.valid && _this24.isNewFilesAdded) {
                    _this24.fileUploadService.uploadFiles(Number(_this24.extendedWorkOrder.number), _services__WEBPACK_IMPORTED_MODULE_3__["Modules"].WorkOrder, _this24.fileSrcCollection).subscribe(function (data) {
                      _this24.savedFileSrcCollection = data;
                      _this24.filePathCollection = data.attachments;

                      _this24.viewWorkOrderForId(false);

                      _this24.viewWorkOrderServiceDetailForId();
                    }, function (errorResponse) {
                      _this24.isUpdatingWorkOrder = false;

                      _this24.toastService.showErrorToast('Unable to save workorder files.');

                      return;
                    });
                  } else {
                    _this24.viewWorkOrderForId(false);

                    _this24.viewWorkOrderServiceDetailForId();

                    _this24.isUpdatingWorkOrder = false;
                  }

                  _this24.isNewFilesAdded = false;
                  _this24.showSaveButton = false;
                  _this24.extendedWorkOrder = data;
                }, function (errorResponse) {
                  _this24.isNewFilesAdded = false;
                  _this24.showSaveButton = false;
                  _this24.isUpdatingWorkOrder = false;
                  var errorMessage = errorResponse[0];

                  _this24.toastService.showErrorToast(errorMessage);

                  return;
                }, function () {
                  _this24.errorMessage = 'Sorry something went wrong... please try again later';
                  _this24.isUpdatingWorkOrder = false;
                  _this24.isNewFilesAdded = false;
                  _this24.showSaveButton = false;
                });
                return;
              }

              if (this.fileUploadForm.valid && this.isNewFilesAdded && !this.form.dirty) {
                this.fileUploadService.uploadFiles(Number(this.extendedWorkOrder.number), _services__WEBPACK_IMPORTED_MODULE_3__["Modules"].WorkOrder, this.fileSrcCollection).subscribe(function (data) {
                  _this24.savedFileSrcCollection = data;

                  if (_this24.savedFileSrcCollection.attachments) {
                    _this24.filePathCollection = data.attachments;

                    _this24.viewWorkOrderForId(false);

                    _this24.viewWorkOrderServiceDetailForId();

                    _this24.toastService.showToast(new _services__WEBPACK_IMPORTED_MODULE_3__["Toast"]('Workorder files saved successfully'));
                  } else {
                    _this24.toastService.showErrorToast("Files not saved");
                  }

                  _this24.isUpdatingWorkOrder = false;
                  _this24.isNewFilesAdded = false;
                  _this24.showSaveButton = false;
                });
              }

              if (!this.fileUploadForm.valid && this.isNewFilesAdded && !this.form.dirty) {
                this.toastService.showErrorToast("Files not saved");
              }

              this.isUpdatingWorkOrder = false;
              this.showSaveButton = false;
            }
          }
        }, {
          key: "handleDeleteItem",
          value: function handleDeleteItem(assetIndex) {
            if (this.extendedWorkOrder && this.extendedWorkOrder.workOrderAssets) {
              this.extendedWorkOrder.workOrderAssets[assetIndex].isDelete = true;
              this.isAssetAvailable = this.extendedWorkOrder.workOrderAssets.filter(function (asset) {
                return asset.isDelete !== true;
              }).length > 0;
              this.form.markAsDirty();
              this.showSaveButton = true;
            }
          }
        }, {
          key: "handleFileInputChange",
          value: function handleFileInputChange() {
            var _this25 = this;

            this.showSaveButton = true;
            this.isNewFilesAdded = true;
            var noExistingFile = this.fileSrcCollection.length === 0;
            var inputFiles = this.fileUploadInput.nativeElement.files;

            var _loop = function _loop(i) {
              if (_this25.fileSrcCollection.filter(function (file) {
                return file.name === inputFiles[i].name;
              }).length === 0) {
                _this25.fileSrcCollection.push(inputFiles[i]);

                _this25.filePathCollection.push('NewFile');
              } else {
                _this25.toastService.showErrorToast('Cannot upload duplicate file.');
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
          key: "handleDeleteFileAttached",
          value: function handleDeleteFileAttached(fileIndex) {
            var _this26 = this;

            var filePath = this.filePathCollection[fileIndex];
            this.isUpdatingWorkOrder = true;

            if (filePath === 'NewFile') {
              this.fileSrcCollection.splice(fileIndex, 1);
              this.filePathCollection.splice(fileIndex, 1);
              this.fileCount = this.fileSrcCollection.length;
              this.attachedFileCollection.next([]);
              this.attachedFileCollection.next(this.fileSrcCollection);
              this.fileUploadForm.patchValue({
                files: this.fileSrcCollection
              });
              this.toastService.showToast(new _services__WEBPACK_IMPORTED_MODULE_3__["Toast"]('File has been deleted.'));
              this.isUpdatingWorkOrder = false;
              this.resetSaveButtonDisplay();
            } else {
              this.fileUploadService.deleteFile(filePath, false).subscribe(function () {
                _this26.fileSrcCollection.splice(fileIndex, 1);

                _this26.filePathCollection.splice(fileIndex, 1);

                _this26.fileCount = _this26.fileSrcCollection.length;

                _this26.attachedFileCollection.next([]);

                _this26.attachedFileCollection.next(_this26.fileSrcCollection);

                _this26.toastService.showToast(new _services__WEBPACK_IMPORTED_MODULE_3__["Toast"]('File has been deleted.'));

                _this26.isUpdatingWorkOrder = false;

                _this26.resetSaveButtonDisplay();
              }, function (err) {
                _this26.toastService.showErrorToast('Unable to delete the file.');

                return;
              });
              this.fileUploadForm.patchValue({
                files: this.fileSrcCollection
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
          key: "priorityString",
          value: function priorityString(priority) {
            return Object(src_utils_enumUtils__WEBPACK_IMPORTED_MODULE_5__["enumString"])(_services__WEBPACK_IMPORTED_MODULE_3__["WorkOrderPriority"], priority);
          }
        }, {
          key: "handlePickAssets",
          value: function handlePickAssets() {
            this.addAssetsModalVisible = true;
          }
        }, {
          key: "handleAddedWorkOrderAssets",
          value: function handleAddedWorkOrderAssets(workOrderAsset) {
            this.addAssetsModalVisible = false;
            this.extendedWorkOrder.workOrderAssets = workOrderAsset;
            this.isAssetAvailable = this.extendedWorkOrder.workOrderAssets.filter(function (asset) {
              return asset.isDelete !== true;
            }).length > 0;
            this.form.markAsDirty();
            this.showSaveButton = true;
          }
        }, {
          key: "handleClipboard",
          value: function handleClipboard(event) {
            event.preventDefault();
            return;
          }
        }, {
          key: "clearFileFormErrors",
          value: function clearFileFormErrors() {
            this.fileUploadForm.controls['files'].setErrors({
              acceptableFileType: false,
              acceptableFileSize: false
            });
          }
        }, {
          key: "getUserName",
          value: function getUserName(userDetails) {
            if (userDetails && userDetails.includes('-')) {
              return userDetails.split('-')[1];
            } else {
              return userDetails;
            }
          }
        }, {
          key: "handleTextAreaInput",
          value: function handleTextAreaInput() {
            this.isSubmitDisabled = this.selectedWorkOrderServiceDetails.serviceDetail.trim() === '';
          }
        }, {
          key: "handleServiceSaveButton",
          value: function handleServiceSaveButton() {
            var _this27 = this;

            this.enableServiceTextarea = false;
            this.isLoading = true;
            this.workOrdersService.updateWorkOrderService(this.selectedWorkOrderServiceDetails).subscribe(function () {
              _this27.viewWorkOrderServiceDetailForId();

              _this27.toastService.showToast(new _services__WEBPACK_IMPORTED_MODULE_3__["Toast"]('Workorder service history saved successfully'));

              _this27.isLoading = false;
              _this27.detailsModalVisible = false;
            }, function (errorResponse) {
              _this27.viewWorkOrderServiceDetailForId();

              _this27.toastService.showErrorToast('Unable to save workorder service history');

              _this27.isLoading = false;
              return;
            });
          }
        }, {
          key: "handleShowCheckListContent",
          value: function handleShowCheckListContent(checkList) {
            if (this.expanded === checkList) {
              this.expanded = null;
            } else {
              this.expanded = checkList;
            }
          }
        }, {
          key: "handleSelectedChecklistTask",
          value: function handleSelectedChecklistTask() {
            this.showSaveButton = true;
            this.form.markAsDirty();
          }
        }]);

        return ViewWorkorderComponent;
      }();

      ViewWorkorderComponent.ɵfac = function ViewWorkorderComponent_Factory(t) {
        return new (t || ViewWorkorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["WorkordersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["FilehandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_work_order_wizard__WEBPACK_IMPORTED_MODULE_9__["WorkOrderWizard"]));
      };

      ViewWorkorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewWorkorderComponent,
        selectors: [["app-view-workorder"]],
        viewQuery: function ViewWorkorderComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUploadInput = _t.first);
          }
        },
        decls: 4,
        vars: 5,
        consts: [[3, "customPreviousPageTitle", "customCurrentPageTitle"], [4, "ngIf"], [1, "spinner"], [3, "formGroup"], [1, "core-info", "mt-4"], [1, "col-12", "spares-button", "mobile-btn"], [1, "btn-pick-spares"], [1, "btn", "btn-primary", 3, "click"], [1, "col-2", "col-sm-3"], ["class", "d-flex  align-items-center", 4, "ngIf"], [1, "row", "align-items-center", "mb-sm-4", "mb-2"], [1, "col-sm-2", "col-4"], [1, "col-md-6", "col-sm-10", "col-8"], ["type", "text", "pattern", "^[a-zA-Z0-9 ]*", "formControlName", "title", "maxlength", "50", 1, "form-control", 3, "paste"], [1, "gap"], [1, "col-sm-4", "spares-button", "tab-view"], [1, "btn", "btn-primary", "px-md-5", 3, "click"], ["class", "d-flex", 4, "ngIf"], [1, "row", "mb-sm-4", "mb-2"], [1, "col-sm-10", "col-8"], ["formControlName", "description", "rows", "8", "maxlength", "4000", 1, "form-control", 3, "readOnly"], [1, "row"], [1, "col-sm-6"], [1, "row", "align-items-center", "d-flex", "mb-2", "mb-sm-3"], [1, "col-4"], [1, "col-8"], [1, "form-group"], [1, "taro-material-datepicker"], ["matInput", "", "formControlName", "reportedOn", 1, "form-control", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datePicker", ""], ["matInput", "", "formControlName", "dueDate", 1, "form-control", 3, "matDatepicker"], ["datePickerDueDate", ""], ["type", "hidden", "formControlName", "assignedToUser", "maxlength", "50", 1, "form-control", 3, "readOnly"], [3, "isEditable", "userName", "selectedUserId"], ["formControlName", "status", 1, "custom-select", "form-control"], ["class", "form-control", 3, "value", "selected", 4, "ngFor", "ngForOf"], ["class", "row d-flex mb-sm-3 mobile-view", 4, "ngIf"], ["formControlName", "category", 1, "custom-select", "form-control"], ["class", "form-control", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "priority", 1, "custom-select", "form-control"], [1, "row", "d-flex", "align-items-center", "mb-2", "mb-sm-3", "file-attach"], [1, "col-4", "attachment-icon"], ["tooltip-danger", "Allowed file types are doc, docx, xls, xlsx, csv, pdf, jpeg, png, bmp. Max file size allowed 2 MB."], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 19.199 19.2", "width", "14", "height", "14"], ["d", "M0 9.6a9.6 9.6 0 0 0 18.5 3.6 8.571 8.571 0 0 0 .7-3.6A9.6 9.6 0 1 0 0 9.6z", "fill", "#fff", "stroke", "#ff422e"], ["d", "M9.6 4a1.184 1.184 0 0 1 1.2 1.3 1.2 1.2 0 1 1-2.4 0A1.24 1.24 0 0 1 9.6 4zm-1 3.3h2.1v7.9H8.6z", "fill", "#ff422e"], ["class", "col-8", 3, "formGroup", 4, "ngIf"], ["class", "row  d-flex  file-row", 4, "ngIf"], ["class", "row  d-flex mb-sm-3", 4, "ngIf"], ["class", "row", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "mb-2", "mb-sm-3"], [1, "btn", "btn-link", "p-0", "add-asset", 3, "disabled", "click"], [1, "row", "mb-sm-4", "mb-2", "service-details-text"], ["formControlName", "serviceDetails", "rows", "8", "maxlength", "4000", 1, "form-control", 3, "readOnly"], [1, "btn", "btn-link", "p-0", "add-checklist"], [3, "titleDetails"], [1, "row", "pl-10"], [1, "col-sm-12", "service-history"], [3, "modalShouldClose", "contextmenu", 4, "ngIf"], ["class", "form-actions", 3, "visible", 4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "col-4", "col-sm-2", "width-17"], [1, "col-md-6", "col-sm-10", "col-8", "width-49", "alert", "alert-danger", "arrow-alert"], [1, "d-flex"], [1, "col-md-6", "col-sm-10", "col-8", "width-83", "alert", "alert-danger", "arrow-alert"], [1, "form-control", 3, "value", "selected"], [1, "row", "d-flex", "mb-sm-3", "mobile-view"], [1, "form-control", 3, "value"], [1, "col-8", 3, "formGroup"], [1, "alert-msgs"], ["alertElementRef", ""], ["class", "alert alert-danger arrow-alert", 4, "ngIf"], [1, "file-input"], [1, "col-7"], [1, "col-5"], [1, "btn-file-upload", 3, "disabled", "click"], ["hidden", "", "multiple", "", "type", "file", 3, "readonly", "change"], ["fileUploadInput", ""], [1, "alert", "alert-danger", "arrow-alert"], [1, "row", "d-flex", "file-row"], [3, "attachedFileCollection", "isEditable", "deletedFileIndex"], [1, "row", "d-flex", "mb-sm-3"], [1, "col-sm-6", "mb-2", "mb-sm-3"], [1, "row", "d-flex", "align-items-center"], [1, "asset-alert-msgs"], ["type", "text", "readonly", "", 1, "readonly", "form-control", 3, "value"], [1, "col-8", "d-flex", "align-items-center"], ["type", "text", "readonly", "", 1, "form-control", "readonly", 3, "value"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15.002", "height", "19.003", "viewBox", "0 0 14.002 18.003", 1, "del-icon", "opacity-50"], ["id", "wrench", "transform", "translate(0.001 0)"], ["id", "Path_1563", "data-name", "Path 1563", "d", "M12.333,3.933,1.267,3.8c-.133.133-.4.133-.533.267A.8.8,0,0,0,.6,4.6L1.8,16.2c0,.4.267.533.667.533h8.267A.61.61,0,0,0,11.4,16.2L12.867,4.6a.8.8,0,0,0-.133-.533,1.343,1.343,0,0,0-.4-.134Zm-2,11.6h-7.2L2.067,5.267h9.467Z", "transform", "translate(0.2 1.267)"], ["id", "Path_1564", "data-name", "Path 1564", "d", "M13.333,3.2H10.667A3.739,3.739,0,0,0,6.933,0a3.607,3.607,0,0,0-3.6,3.2H.667A.63.63,0,0,0,0,3.867a.63.63,0,0,0,.667.667H13.333A.63.63,0,0,0,14,3.867a.63.63,0,0,0-.667-.667Zm-6.4-1.867A2.442,2.442,0,0,1,9.333,3.2H4.667A2.407,2.407,0,0,1,6.933,1.333Z"], ["id", "Path_1565", "data-name", "Path 1565", "d", "M5.367,13.467a.63.63,0,0,0,.667-.667V6.667A.63.63,0,0,0,5.367,6a.63.63,0,0,0-.667.667v6.267C4.7,13.2,5.1,13.467,5.367,13.467Z", "transform", "translate(1.567 2)"], ["id", "Path_1566", "data-name", "Path 1566", "d", "M3.9,13.5a.714.714,0,0,0,.667-.667L4.033,6.567A.714.714,0,0,0,3.367,5.9a.845.845,0,0,0-.667.8l.533,6.267A.886.886,0,0,0,3.9,13.5Z", "transform", "translate(0.9 1.967)"], ["id", "Path_1567", "data-name", "Path 1567", "d", "M6.942,13.475a.63.63,0,0,0,.667-.667l.533-6.267c.133-.267-.133-.533-.533-.533-.4-.133-.667.133-.667.533l-.533,6.267c-.134.4.133.667.533.667Z", "transform", "translate(2.125 1.991)"], ["type", "text", "readonly", "", 1, "form-control", "readonly", "location-input", 3, "value"], [1, "delete-btn", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15.002", "height", "19.003", "viewBox", "0 0 14.002 18.003", 1, "del-icon"], [1, "addtask-expanded", 3, "taskItem", "firstItem", "isTaskEditable", "ngClass", "taskSelected"], [1, "clickView", 3, "click"], [3, "modalShouldClose", "contextmenu"], [1, "col-4", "text-end"], [1, "col-12", "modal-details", "mb-2"], [1, "col", "float-start"], [1, "col", "text-end"], [3, "click", 4, "ngIf"], ["row", "8", "maxlength", "4000", 1, "modal-details-textarea", 3, "ngModel", "readOnly", "ngModelChange", "input"], [1, "modal-details-footer"], [3, "click"], ["id", "edit-button-svgrepo-com", "xmlns", "http://www.w3.org/2000/svg", "width", "15.583", "height", "14.969", "viewBox", "0 0 15.583 14.969"], ["id", "Group_3267", "data-name", "Group 3267"], ["id", "Path_1568", "data-name", "Path 1568", "d", "M12.274,86.27a.384.384,0,0,0-.384.384v7.02a1.347,1.347,0,0,1-1.346,1.345H2.114A1.347,1.347,0,0,1,.769,93.674v-8.43A1.347,1.347,0,0,1,2.114,83.9h8.43a.384.384,0,1,0,0-.769H2.114A2.117,2.117,0,0,0,0,85.244v8.43a2.117,2.117,0,0,0,2.114,2.114h8.43a2.117,2.117,0,0,0,2.114-2.114v-7.02A.384.384,0,0,0,12.274,86.27Z", "transform", "translate(0 -80.82)", "fill", "#424244"], ["id", "Path_1569", "data-name", "Path 1569", "d", "M196.426,10.1a1.19,1.19,0,0,0-1.681,0l-6.585,6.585a.892.892,0,0,0-.134.17l-.912,2.049a.384.384,0,0,0,.508.508l2.049-.912a.9.9,0,0,0,.17-.134l6.585-6.585a1.188,1.188,0,0,0,0-1.681Zm-.544,1.137L189.3,17.823l0,0-1.07.476.476-1.07,0,0,6.585-6.585a.429.429,0,0,1,.593,0,.419.419,0,0,1,0,.593Z", "transform", "translate(-181.191 -9.753)", "fill", "#424244"], [1, "btn", "btn-primary", "mt-4", "handlesServicesSaveBtn", 3, "disabled", "click"], [3, "existingAssets", "addedAssets"], [1, "form-actions"], [1, "btn", "btn-primary", "btn-block", "col-12", 3, "click"]],
        template: function ViewWorkorderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-section-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewWorkorderComponent_div_1_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewWorkorderComponent_app_loading_modal_2_Template, 1, 0, "app-loading-modal", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewWorkorderComponent_article_3_Template, 132, 33, "article", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customPreviousPageTitle", "Work Orders")("customCurrentPageTitle", "#WO" + ctx.workOrderNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.isGettingUserRights);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdatingWorkOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.isGettingUserRights && !ctx.isUpdatingWorkOrder);
          }
        },
        directives: [_shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_10__["SectionHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_module_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_12__["LoadingModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _shared_module_list_user_list_users_component__WEBPACK_IMPORTED_MODULE_15__["ListUsersComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _shared_module_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_16__["AccordionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _shared_module_view_attached_files_view_attached_files_component__WEBPACK_IMPORTED_MODULE_17__["ViewAttachedFilesComponent"], _checklist_task_item_checklist_task_item_component__WEBPACK_IMPORTED_MODULE_18__["ChecklistTaskItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _shared_module_modal_modal_component__WEBPACK_IMPORTED_MODULE_19__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _shared_module_pick_assets_pick_assets_component__WEBPACK_IMPORTED_MODULE_20__["PickAssetsComponent"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\narticle[_ngcontent-%COMP%] {\n  margin-bottom: 6em;\n}\narticle[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  text-align: left !important;\n  padding: 0.8em 0.8em;\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f2f2f2;\n  height: 3.8em;\n  font-size: 0.85em;\n  border: 1px solid #ced4da;\n  border-radius: 0.25em;\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0.8em 0 0 0.7em;\n  font-weight: 400;\n  text-transform: none;\n  font-size: 1.2em !important;\n}\n@media screen and (max-width: 355px) {\n  article[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-top: 1em;\n    font-size: 1.1em !important;\n  }\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]   .btn-file-upload[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-width: 1px 0 1px 0;\n  background-color: #dddddd;\n  height: 3.7em;\n  width: 100%;\n}\narticle[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]   .btn-file-upload[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\narticle[_ngcontent-%COMP%]   .file-attach[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n}\narticle[_ngcontent-%COMP%]   .file-attach[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-left: 0.25em;\n}\narticle[_ngcontent-%COMP%]   .file-row[_ngcontent-%COMP%] {\n  padding-bottom: 0em;\n  height: auto;\n}\n@media screen and (max-width: 767px) {\n  article[_ngcontent-%COMP%]   .file-row[_ngcontent-%COMP%] {\n    padding-bottom: 0.7em;\n  }\n}\narticle[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  text-align: center;\n}\narticle[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  transform: scale(1.25);\n}\narticle[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\narticle[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]   .btn-pick-spares[_ngcontent-%COMP%] {\n  float: right;\n}\n@media only screen and (max-width: 540px) {\n  article[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]   .btn-pick-spares[_ngcontent-%COMP%] {\n    margin: 0.5em 0 0 9.5em;\n    float: none;\n  }\n}\n@media only screen and (min-width: 541px) {\n  article[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]   .gap[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 540px) {\n  article[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]   .gap[_ngcontent-%COMP%] {\n    clear: both;\n    display: block;\n  }\n  article[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]   .location-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  article[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@media only screen and (max-width: 360px) {\n  article[_ngcontent-%COMP%]   .align-items-center[_ngcontent-%COMP%]   .btn-pick-spares[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\narticle[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding-bottom: 0.25em;\n  transition: all 0.2s ease-in-out;\n  margin-left: 0.25em;\n}\narticle[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1em;\n  height: auto;\n  transform: scale(1);\n  transition: all 0.2s ease-in-out;\n}\narticle[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #424244;\n}\narticle[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: scale(1.125);\n}\narticle[_ngcontent-%COMP%]   .delete-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: default;\n}\narticle[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding-bottom: 0.25em;\n  transition: all 0.2s ease-in-out;\n  margin-left: 0.25em;\n}\narticle[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1em;\n  height: auto;\n  transform: scale(1);\n  transition: all 0.2s ease-in-out;\n}\narticle[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #424244;\n}\narticle[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: scale(1.125);\n}\narticle[_ngcontent-%COMP%]   .edit-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: default;\n}\narticle[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #dedede;\n  margin-bottom: 1em;\n  padding-bottom: 0.5em;\n}\narticle[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1em;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   .del-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\narticle[_ngcontent-%COMP%]   .core-info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\narticle[_ngcontent-%COMP%]   .service-details-text[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\narticle[_ngcontent-%COMP%]   .readonly[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background-color: rgba(234, 234, 234, 0.295);\n  color: #9c9a9a;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%] {\n  padding: 1em 1em;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: solid 1px #bcbcbc;\n  width: 100%;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #e4e4e4;\n  font-weight: bold;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: solid 1px #bcbcbc;\n  padding: 10px;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  text-align: center;\n  width: 15%;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: center;\n  width: 20%;\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  word-break: break-all;\n  width: 65%;\n}\n@media screen and (max-width: 610px) {\n  article[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    display: none;\n  }\n  article[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    width: 40%;\n  }\n  article[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    width: 60%;\n  }\n  article[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .desktop-time-view[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\narticle[_ngcontent-%COMP%]   .service-history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6a955b;\n  text-decoration: underline;\n  font-size: small;\n}\narticle[_ngcontent-%COMP%]   .modal-details-textarea[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  margin-bottom: 1em;\n  background-color: #f2f2f2;\n  padding: 1.5em;\n  text-align: justify;\n  border-radius: 5px;\n  min-height: 100%;\n  width: 100%;\n  border: 0;\n  outline-style: none;\n  box-shadow: none;\n  border-color: transparent;\n}\narticle[_ngcontent-%COMP%]   .modal-details-textarea-focus[_ngcontent-%COMP%] {\n  color: #424244;\n  background-color: #fff !important;\n  border: 1px solid #b5caad !important;\n  border-color: #b5caad;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(106, 149, 91, 0.25);\n}\narticle[_ngcontent-%COMP%]   .modal-details-textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\narticle[_ngcontent-%COMP%]   .modal-details[_ngcontent-%COMP%] {\n  height: 78% !important;\n}\narticle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\narticle[_ngcontent-%COMP%]   .addtask-expanded[_ngcontent-%COMP%] {\n  background: none;\n  display: flex;\n}\n@media screen and (max-width: 576px) {\n  .mobile-view[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media screen and (max-width: 767px) {\n  .mobile-btn[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 1.5rem;\n  }\n  .mobile-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .tab-view[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 767px) {\n  .mobile-btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.alertMessage[_ngcontent-%COMP%] {\n  height: 67px;\n}\n@media screen and (max-width: 576px) {\n  .alertMessage[_ngcontent-%COMP%] {\n    height: 0px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .alertMessages[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n}\n  .alert {\n  padding: 0.9em 0 1em 0;\n}\n@media screen and (max-width: 800px) {\n    .alert {\n    padding: 1em 0.2em;\n  }\n}\n  .form-group {\n  position: relative;\n}\n  .form-group .alert-msgs {\n  position: absolute;\n  bottom: 2.5em;\n}\n  .form-group .asset-alert-msgs {\n  position: absolute;\n  bottom: 0em;\n  width: 100%;\n  margin-bottom: -0.35em;\n}\n  .find-as-you-type .text-display {\n  padding-left: 0.8em;\n}\n.modal-details-footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n@media screen and (max-width: 567px) {\n  .width-17[_ngcontent-%COMP%] {\n    width: 36%;\n  }\n\n  .width-49[_ngcontent-%COMP%] {\n    width: 64%;\n  }\n\n  .width-83[_ngcontent-%COMP%] {\n    width: 64%;\n  }\n}\n@media screen and (min-width: 767px) {\n  .width-49[_ngcontent-%COMP%] {\n    width: 49%;\n  }\n\n  .width-17[_ngcontent-%COMP%] {\n    width: 17%;\n  }\n\n  .width-83[_ngcontent-%COMP%] {\n    width: 83%;\n  }\n}\n  .breadcrumb li:nth-child(2) a {\n  text-transform: uppercase;\n}\n  .detail-container {\n  margin-top: 0 !important;\n}\n  .title-block {\n  margin-top: 0.3em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcX2dsb2JhbHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHZpZXctd29ya29yZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEB0YXJvcHVtcHNcXGJvb3RzdHJhcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFOzs7O0lBSUUsd0JBQUE7RUNqQkY7O0VEbUJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFiaUI7RUNIbkI7O0VEa0JBO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQ2ZGO0FBQ0Y7QUFmQTtFQUNFLGtCQUFBO0FBaUJGO0FBZkU7RUFDRSwyQkFBQTtFQUNBLG9CQUFBO0FBaUJKO0FBZEU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBZ0JKO0FBZEk7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQWdCTjtBQWRNO0VBTkY7SUFPSSxlQUFBO0lBQ0EsMkJBQUE7RUFpQk47QUFDRjtBQWRJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFnQk47QUFkTTtFQUNFLGVBQUE7QUFnQlI7QUFWSTtFQUNFLGFBQUE7QUFZTjtBQVZNO0VBQ0UsbUJBQUE7QUFZUjtBQVBFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBU0o7QUFQSTtFQUpGO0lBS0kscUJBQUE7RUFVSjtBQUNGO0FBTkk7RUFDRSxrQkFBQTtBQVFOO0FBSk07RUFDRSxzQkFBQTtBQU1SO0FBSE07RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUtSO0FBREk7RUFDRSxZQUFBO0FBR047QUFETTtFQUhGO0lBSUksdUJBQUE7SUFDQSxXQUFBO0VBSU47QUFDRjtBQURJO0VBQ0U7SUFDRSxhQUFBO0VBR047QUFDRjtBQUFJO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQUVOO0VBRU07SUFDRSxZQUFBO0VBQVI7RUFJSTtJQUNFLFVBQUE7RUFGTjtBQUNGO0FBS0k7RUFDRTtJQUNFLGNBQUE7RUFITjtBQUNGO0FBT0U7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLGdDQUFBO0FBTk47QUFRTTtFQUNFLGFDbElLO0FENEhiO0FBV007RUFDRSx1QkFBQTtBQVRSO0FBYUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQVhOO0FBZUU7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFiSjtBQWVJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBYk47QUFlTTtFQUNFLGFDaEtLO0FEbUpiO0FBa0JNO0VBQ0UsdUJBQUE7QUFoQlI7QUFvQkk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQWxCTjtBQXNCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQXBCSjtBQXNCSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQXBCTjtBQXlCSTtFQUNFLGtCQUFBO0FBdkJOO0FBMEJJO0VBQ0UsWUFBQTtBQXhCTjtBQTZCSTtFQUNFLFlBQUE7QUEzQk47QUErQkU7RUFDRSxvQkFBQTtFQUNBLDRDQUFBO0VBQ0EsY0FBQTtBQTdCSjtBQWdDRTtFQUNFLGdCQUFBO0FBOUJKO0FBZ0NJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUE5Qk47QUFnQ007RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBOUJSO0FBaUNNO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBL0JSO0FBaUNRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBL0JWO0FBa0NRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBaENWO0FBbUNRO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBakNWO0FBb0NRO0VBQ0U7SUFDRSxhQUFBO0VBbENWO0VBcUNRO0lBQ0UsVUFBQTtFQW5DVjtFQXNDUTtJQUNFLFVBQUE7RUFwQ1Y7RUF1Q1E7SUFDRSxhQUFBO0VBckNWO0FBQ0Y7QUF5Q007RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQXZDUjtBQTRDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBMUNKO0FBNkNFO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrREFBQTtBQTNDSjtBQThDRTtFQUNFLGFBQUE7QUE1Q0o7QUErQ0U7RUFDRSxzQkFBQTtBQTdDSjtBQWdERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQTlDSjtBQWdERTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQTlDSjtBQW1EQTtFQUNFO0lBQ0Usd0JBQUE7RUFoREY7QUFDRjtBQW1EQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0VBakRGO0VBbURFO0lBQ0UsV0FBQTtFQWpESjs7RUFxREE7SUFDRSx3QkFBQTtFQWxERjtBQUNGO0FBcURBO0VBQ0U7SUFDRSx3QkFBQTtFQW5ERjtBQUNGO0FBc0RBO0VBQ0UsWUFBQTtBQXBERjtBQXNERTtFQUhGO0lBSUksV0FBQTtFQW5ERjtBQUNGO0FBdURFO0VBREY7SUFFSSxZQUFBO0VBbkRGO0FBQ0Y7QUFzREE7RUFDRSxzQkFBQTtBQW5ERjtBQXFERTtFQUhGO0lBSUksa0JBQUE7RUFsREY7QUFDRjtBQXFEQTtFQUNFLGtCQUFBO0FBbERGO0FBb0RFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBbERKO0FBcURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBbkRKO0FBdURBO0VBQ0UsbUJBQUE7QUFwREY7QUF1REE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBcERGO0FBdURBO0VBQ0U7SUFDRSxVQUFBO0VBcERGOztFQXVEQTtJQUNFLFVBQUE7RUFwREY7O0VBdURBO0lBQ0UsVUFBQTtFQXBERjtBQUNGO0FBdURBO0VBQ0U7SUFDRSxVQUFBO0VBckRGOztFQXdEQTtJQUNFLFVBQUE7RUFyREY7O0VBd0RBO0lBQ0UsVUFBQTtFQXJERjtBQUNGO0FBMERJO0VBQ0UseUJBQUE7QUF4RE47QUE2REE7RUFDRSx3QkFBQTtBQTFERjtBQTZEQTtFQUNFLDRCQUFBO0FBMURGIiwiZmlsZSI6InZpZXctd29ya29yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9AdGFyb3B1bXBzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuJG5hdi1ncmV5OiAjZTJlMmUyO1xyXG4kc2VhcmNoLWdyZXk6ICNmMmYyZjI7XHJcbiRoZWFkZXItcGFkZGluZzogMi41cmVtO1xyXG4kaGVhZGVyLXBhZGRpbmctc206IDFyZW07XHJcbiRiYXNlLW5hdi13aWR0aDogNy45ZW07XHJcbiRleHBhbmRlZC1uYXYtd2lkdGg6IDIwZW07XHJcbiRoZWFkZXItaGVpZ2h0OiAxMi40cmVtO1xyXG4kbWVudS10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZzogMXJlbSAzLjNyZW07XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmctc206IDFyZW0gMS43cmVtO1xyXG4kY29udGVudC1hcmVhLWNvbG9yOiAjZmZmO1xyXG4kd2FybmluZzogI0VBMDAyOTtcclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5hcHAtaGVhZGVyLFxyXG4gIC5mdW5jdGlvbi1iYXIsXHJcbiAgYXBwLXNlY3Rpb24taGVhZGVyLFxyXG4gIC5tZWRpYS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFwcC1jb250ZW50LWFyZWEge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1hcmVhLWNvbG9yO1xyXG4gIH1cclxuICAubWVkaWEtcHJpbnQge1xyXG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAbWVkaWEgcHJpbnQge1xuICAuYXBwLWhlYWRlcixcbi5mdW5jdGlvbi1iYXIsXG5hcHAtc2VjdGlvbi1oZWFkZXIsXG4ubWVkaWEtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFwcC1jb250ZW50LWFyZWEge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAubWVkaWEtcHJpbnQge1xuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmFydGljbGUge1xuICBtYXJnaW4tYm90dG9tOiA2ZW07XG59XG5hcnRpY2xlIC5mb3JtLWNvbnRyb2wge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAuOGVtIDAuOGVtO1xufVxuYXJ0aWNsZSAuZmlsZS1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGhlaWdodDogMy44ZW07XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG59XG5hcnRpY2xlIC5maWxlLWlucHV0IGxhYmVsIHtcbiAgbWFyZ2luOiAwLjhlbSAwIDAgMC43ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTVweCkge1xuICBhcnRpY2xlIC5maWxlLWlucHV0IGxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgZm9udC1zaXplOiAxLjFlbSAhaW1wb3J0YW50O1xuICB9XG59XG5hcnRpY2xlIC5maWxlLWlucHV0IC5idG4tZmlsZS11cGxvYWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItd2lkdGg6IDFweCAwIDFweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICBoZWlnaHQ6IDMuN2VtO1xuICB3aWR0aDogMTAwJTtcbn1cbmFydGljbGUgLmZpbGUtaW5wdXQgLmJ0bi1maWxlLXVwbG9hZFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5hcnRpY2xlIC5maWxlLWF0dGFjaCBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5hcnRpY2xlIC5maWxlLWF0dGFjaCBsYWJlbCBzdmcge1xuICBtYXJnaW4tbGVmdDogMC4yNWVtO1xufVxuYXJ0aWNsZSAuZmlsZS1yb3cge1xuICBwYWRkaW5nLWJvdHRvbTogMGVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBhcnRpY2xlIC5maWxlLXJvdyB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuN2VtO1xuICB9XG59XG5hcnRpY2xlIC5hbGlnbi1pdGVtcy1jZW50ZXIgOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmFydGljbGUgLmFsaWduLWl0ZW1zLWNlbnRlciBzdmc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xufVxuYXJ0aWNsZSAuYWxpZ24taXRlbXMtY2VudGVyIHN2ZzpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuYXJ0aWNsZSAuYWxpZ24taXRlbXMtY2VudGVyIC5idG4tcGljay1zcGFyZXMge1xuICBmbG9hdDogcmlnaHQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIGFydGljbGUgLmFsaWduLWl0ZW1zLWNlbnRlciAuYnRuLXBpY2stc3BhcmVzIHtcbiAgICBtYXJnaW46IDAuNWVtIDAgMCA5LjVlbTtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDFweCkge1xuICBhcnRpY2xlIC5hbGlnbi1pdGVtcy1jZW50ZXIgLmdhcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICBhcnRpY2xlIC5hbGlnbi1pdGVtcy1jZW50ZXIgLmdhcCB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgYXJ0aWNsZSAuYWxpZ24taXRlbXMtY2VudGVyIC5sb2NhdGlvbi1pbnB1dCBpbnB1dCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIGFydGljbGUgLmFsaWduLWl0ZW1zLWNlbnRlciAuZGVsZXRlLWJ0biB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICBhcnRpY2xlIC5hbGlnbi1pdGVtcy1jZW50ZXIgLmJ0bi1waWNrLXNwYXJlcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbmFydGljbGUgLmRlbGV0ZS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNWVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVlbTtcbn1cbmFydGljbGUgLmRlbGV0ZS1idG4gc3ZnIHtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbmFydGljbGUgLmRlbGV0ZS1idG4gc3ZnIHBhdGgge1xuICBmaWxsOiAjNDI0MjQ0O1xufVxuYXJ0aWNsZSAuZGVsZXRlLWJ0bjpob3ZlciBzdmcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTI1KTtcbn1cbmFydGljbGUgLmRlbGV0ZS1idG5bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5hcnRpY2xlIC5lZGl0LWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW4tbGVmdDogMC4yNWVtO1xufVxuYXJ0aWNsZSAuZWRpdC1idG4gc3ZnIHtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbmFydGljbGUgLmVkaXQtYnRuIHN2ZyBwYXRoIHtcbiAgZmlsbDogIzQyNDI0NDtcbn1cbmFydGljbGUgLmVkaXQtYnRuOmhvdmVyIHN2ZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xMjUpO1xufVxuYXJ0aWNsZSAuZWRpdC1idG5bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5hcnRpY2xlIGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xufVxuYXJ0aWNsZSBoZWFkZXIgaDEge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDFlbTtcbn1cbmFydGljbGUgLmNvcmUtaW5mbyAuZGVsLWljb24ge1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5hcnRpY2xlIC5jb3JlLWluZm8gdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5hcnRpY2xlIC5zZXJ2aWNlLWRldGFpbHMtdGV4dCB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbmFydGljbGUgLnJlYWRvbmx5IHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCAyMzQsIDIzNCwgMC4yOTUpO1xuICBjb2xvcjogIzljOWE5YTtcbn1cbmFydGljbGUgLnNlcnZpY2UtaGlzdG9yeSB7XG4gIHBhZGRpbmc6IDFlbSAxZW07XG59XG5hcnRpY2xlIC5zZXJ2aWNlLWhpc3RvcnkgdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjYmNiY2JjO1xuICB3aWR0aDogMTAwJTtcbn1cbmFydGljbGUgLnNlcnZpY2UtaGlzdG9yeSB0YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYXJ0aWNsZSAuc2VydmljZS1oaXN0b3J5IHRhYmxlIHRkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JjYmNiYztcbiAgcGFkZGluZzogMTBweDtcbn1cbmFydGljbGUgLnNlcnZpY2UtaGlzdG9yeSB0YWJsZSB0ZDpudGgtY2hpbGQoMSkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxNSU7XG59XG5hcnRpY2xlIC5zZXJ2aWNlLWhpc3RvcnkgdGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjAlO1xufVxuYXJ0aWNsZSAuc2VydmljZS1oaXN0b3J5IHRhYmxlIHRkOm50aC1jaGlsZCgzKSB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd2lkdGg6IDY1JTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XG4gIGFydGljbGUgLnNlcnZpY2UtaGlzdG9yeSB0YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBhcnRpY2xlIC5zZXJ2aWNlLWhpc3RvcnkgdGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIGFydGljbGUgLnNlcnZpY2UtaGlzdG9yeSB0YWJsZSB0ZDpudGgtY2hpbGQoMykge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgYXJ0aWNsZSAuc2VydmljZS1oaXN0b3J5IHRhYmxlIHRkIC5kZXNrdG9wLXRpbWUtdmlldyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuYXJ0aWNsZSAuc2VydmljZS1oaXN0b3J5IHRhYmxlIGEge1xuICBjb2xvcjogIzZhOTU1YjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5hcnRpY2xlIC5tb2RhbC1kZXRhaWxzLXRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5hcnRpY2xlIC5tb2RhbC1kZXRhaWxzLXRleHRhcmVhLWZvY3VzIHtcbiAgY29sb3I6ICM0MjQyNDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I1Y2FhZCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNiNWNhYWQ7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMjVyZW0gcmdiYSgxMDYsIDE0OSwgOTEsIDAuMjUpO1xufVxuYXJ0aWNsZSAubW9kYWwtZGV0YWlscy10ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuYXJ0aWNsZSAubW9kYWwtZGV0YWlscyB7XG4gIGhlaWdodDogNzglICFpbXBvcnRhbnQ7XG59XG5hcnRpY2xlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmFydGljbGUgLmFkZHRhc2stZXhwYW5kZWQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubW9iaWxlLXZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1vYmlsZS1idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxuICAubW9iaWxlLWJ0biBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnRhYi12aWV3IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIC5tb2JpbGUtYnRuIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5hbGVydE1lc3NhZ2Uge1xuICBoZWlnaHQ6IDY3cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYWxlcnRNZXNzYWdlIHtcbiAgICBoZWlnaHQ6IDBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYWxlcnRNZXNzYWdlcyB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAuYWxlcnQge1xuICBwYWRkaW5nOiAwLjllbSAwIDFlbSAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgOjpuZy1kZWVwIC5hbGVydCB7XG4gICAgcGFkZGluZzogMWVtIDAuMmVtO1xuICB9XG59XG5cbjo6bmctZGVlcCAuZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjo6bmctZGVlcCAuZm9ybS1ncm91cCAuYWxlcnQtbXNncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyLjVlbTtcbn1cbjo6bmctZGVlcCAuZm9ybS1ncm91cCAuYXNzZXQtYWxlcnQtbXNncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAtMC4zNWVtO1xufVxuXG46Om5nLWRlZXAgLmZpbmQtYXMteW91LXR5cGUgLnRleHQtZGlzcGxheSB7XG4gIHBhZGRpbmctbGVmdDogMC44ZW07XG59XG5cbi5tb2RhbC1kZXRhaWxzLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLndpZHRoLTE3IHtcbiAgICB3aWR0aDogMzYlO1xuICB9XG5cbiAgLndpZHRoLTQ5IHtcbiAgICB3aWR0aDogNjQlO1xuICB9XG5cbiAgLndpZHRoLTgzIHtcbiAgICB3aWR0aDogNjQlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICAud2lkdGgtNDkge1xuICAgIHdpZHRoOiA0OSU7XG4gIH1cblxuICAud2lkdGgtMTcge1xuICAgIHdpZHRoOiAxNyU7XG4gIH1cblxuICAud2lkdGgtODMge1xuICAgIHdpZHRoOiA4MyU7XG4gIH1cbn1cbjo6bmctZGVlcCAuYnJlYWRjcnVtYiBsaTpudGgtY2hpbGQoMikgYSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbjo6bmctZGVlcCAuZGV0YWlsLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC50aXRsZS1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDAuM2VtICFpbXBvcnRhbnQ7XG59IiwiJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwiS29oaW5vb3JcIiwgXCJPcGVuIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgXCJHaWxsIFNhbnNcIiwgQ29yYmVsLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGJvZHktY29sb3I6ICM0MjQyNDQgIWRlZmF1bHQ7XG4kZ3JlZW46ICM2QTk1NUIgIWRlZmF1bHQ7XG4kZ3JlZW4tZmFkZWQ6ICNEMURFQ0Q7XG4kcmVkOiAjRkY0MjJFICFkZWZhdWx0O1xuJHJlZC1saWdodDogI0ZGRDlENSAhZGVmYXVsdDtcbiRyZWQtZGFyazogIzk5NDQ0RiAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6IDZweDtcblxuJHByaW1hcnk6ICRncmVlbjtcblxuJGFsZXJ0LWJvcmRlci13aWR0aDogMDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiA2cHg7XG4kYWxlcnQtcGFkZGluZy14OiAxLjVyZW07XG4kYWxlcnQtcGFkZGluZy15OiAxLjJyZW07XG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgLjc1cmVtO1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6IDMuNzVyZW07XG5cbiR0b2FzdC16LWluZGV4OiAxMDAwICFkZWZhdWx0O1xuJHRvYXN0LWR1cmF0aW9uOiAzMDAwbXMgIWRlZmF1bHQ7XG4kdG9hc3QtaGVpZ2h0OiA4cmVtICFkZWZhdWx0O1xuJHRvYXN0LWhlaWdodC1zbTogNS44cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJyZWFrcG9pbnQ6IDc2OHB4ICFkZWZhdWx0OyJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZCnb":
    /*!**************************************************************************************!*\
      !*** ./src/app/work-orders/pick-workorder-spares/pick-workorder-spares.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: PickWorkOrderSparesComponent */

    /***/
    function ZCnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickWorkOrderSparesComponent", function () {
        return PickWorkOrderSparesComponent;
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


      var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services */
      "o0su");
      /* harmony import */


      var src_utils_stringUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/utils/stringUtils */
      "mymk");
      /* harmony import */


      var _work_order_wizard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../work-order.wizard */
      "bryy");
      /* harmony import */


      var _shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared-module/section-header/section-header.component */
      "OeDX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _spares_skus_spares_skus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./spares-skus/spares-skus.component */
      "msZ0");

      var _c0 = ["searchInput"];
      var _c1 = ["searchResult"];

      function PickWorkOrderSparesComponent_span_3_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PickWorkOrderSparesComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PickWorkOrderSparesComponent_span_3_span_2_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r0.workOrderSpares.spareSkus.length, " item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.workOrderSpares.spareSkus.length > 1);
        }
      }

      function PickWorkOrderSparesComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
        }
      }

      function PickWorkOrderSparesComponent_div_5_div_8_div_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PickWorkOrderSparesComponent_div_5_div_8_div_1_button_1_Template_button_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r15.handleSearchResultKeyUp($event);
          })("click", function PickWorkOrderSparesComponent_div_5_div_8_div_1_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var spares_r13 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r17.handleSearchResultClick(spares_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var spares_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-sparesname", spares_r13.sparesGroupName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", spares_r13.id, " - ", spares_r13.description, " ");
        }
      }

      function PickWorkOrderSparesComponent_div_5_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickWorkOrderSparesComponent_div_5_div_8_div_1_button_1_Template, 3, 3, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.searchResults);
        }
      }

      function PickWorkOrderSparesComponent_div_5_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No spares found ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PickWorkOrderSparesComponent_div_5_div_8_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PickWorkOrderSparesComponent_div_5_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PickWorkOrderSparesComponent_div_5_div_8_div_1_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PickWorkOrderSparesComponent_div_5_div_8_div_2_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PickWorkOrderSparesComponent_div_5_div_8_div_3_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isSearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.searchResults.length === 0 && !ctx_r5.isSearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isSearching);
        }
      }

      function PickWorkOrderSparesComponent_div_5_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sparesGroupOption_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sparesGroupOption_r18.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sparesGroupOption_r18.label, " ");
        }
      }

      function PickWorkOrderSparesComponent_div_5_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No spares added to this work order. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PickWorkOrderSparesComponent_div_5_div_15_app_spares_skus_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-spares-skus", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isSkuDeleted", function PickWorkOrderSparesComponent_div_5_div_15_app_spares_skus_11_Template_app_spares_skus_isSkuDeleted_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var skuIndex_r21 = ctx.index;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r22.handleDeleteSparesSku($event, skuIndex_r21);
          })("handlesQtyChange", function PickWorkOrderSparesComponent_div_5_div_15_app_spares_skus_11_Template_app_spares_skus_handlesQtyChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var skuIndex_r21 = ctx.index;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r24.handleSkuQtyChange($event, skuIndex_r21);
          })("isQtyInValid", function PickWorkOrderSparesComponent_div_5_div_15_app_spares_skus_11_Template_app_spares_skus_isQtyInValid_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r25.handleInValidQty($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sparesSku_r20 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sparesSku", sparesSku_r20)("isEditable", ctx_r19.isEditable);
        }
      }

      function PickWorkOrderSparesComponent_div_5_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "UOM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PickWorkOrderSparesComponent_div_5_div_15_app_spares_skus_11_Template, 1, 2, "app-spares-skus", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.workOrderSpares.spareSkus);
        }
      }

      function PickWorkOrderSparesComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PickWorkOrderSparesComponent_div_5_Template_input_blur_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.handleSearchBlur();
          })("keyup", function PickWorkOrderSparesComponent_div_5_Template_input_keyup_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.handleSearchKeyUp($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PickWorkOrderSparesComponent_div_5_div_8_Template, 4, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All Spare Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PickWorkOrderSparesComponent_div_5_option_13_Template, 2, 2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PickWorkOrderSparesComponent_div_5_div_14_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PickWorkOrderSparesComponent_div_5_div_15_Template, 17, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.searchResultsVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.allSpareGroupOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.sparesGroupOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.workOrderSpares || !ctx_r2.workOrderSpares.spareSkus || ctx_r2.workOrderSpares.spareSkus.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.workOrderSpares && ctx_r2.workOrderSpares.spareSkus && ctx_r2.workOrderSpares.spareSkus.length > 0);
        }
      }

      function PickWorkOrderSparesComponent_footer_7_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save picked list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PickWorkOrderSparesComponent_footer_7_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 32);
        }
      }

      function PickWorkOrderSparesComponent_footer_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickWorkOrderSparesComponent_footer_7_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.handleUpdateSpares();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PickWorkOrderSparesComponent_footer_7_span_3_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PickWorkOrderSparesComponent_footer_7_div_4_Template, 1, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx_r3.showSaveButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.isQtyFormInvalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isUpdatingSpares);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isUpdatingSpares);
        }
      }

      var PickWorkOrderSparesComponent = /*#__PURE__*/function () {
        function PickWorkOrderSparesComponent(formBuilder, skuService, workOrderService, toastService, authenticationService, workOrderWizard) {
          _classCallCheck(this, PickWorkOrderSparesComponent);

          this.formBuilder = formBuilder;
          this.skuService = skuService;
          this.workOrderService = workOrderService;
          this.toastService = toastService;
          this.authenticationService = authenticationService;
          this.workOrderWizard = workOrderWizard;
          this.allSpareGroupOption = '';
          this.sparesGroupOptions = [];
          this.sparesGroups = [];
          this.WorkOrderStatus = src_app_services__WEBPACK_IMPORTED_MODULE_3__["WorkorderStatus"];
          this.isLoading = true;
          this.showSaveButton = false;
          this.isUpdatingSpares = false;
          this.isSparesSelected = false;
          this.searchResultsVisible = false;
          this.searchResults = [];
          this.isSearching = false;
          this.isGettingUserRights = true;
          this.isQtyFormInvalid = false;
          this.workOrderStatus = this.workOrderWizard.workOrder.status.toString();
          this.wordOrderNumber = this.workOrderWizard.workOrder.number.toString();
          this.viewWorkOrderForId();
          this.getSpares(this.wordOrderNumber);
        }

        _createClass(PickWorkOrderSparesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSearchGroupOptions();
          }
        }, {
          key: "viewWorkOrderForId",
          value: function viewWorkOrderForId() {
            var _this28 = this;

            var workOrderNumber = this.workOrderWizard.workOrder.number.toString();
            this.workOrderService.viewWorkOrderForId(workOrderNumber).subscribe(function (extendedWorkOrder) {
              _this28.extendedWorkOrder = extendedWorkOrder;

              _this28.checkUserEditRights();
            });
          }
        }, {
          key: "searchSpares",
          value: function searchSpares() {
            var _this29 = this;

            this.searchSparesSubscription && !this.searchSparesSubscription.closed && this.searchSparesSubscription.unsubscribe();
            var textValue = this.searchForm.get('text').value;

            if (this.isSparesSelected === false) {
              this.isSearching = true;
              this.searchResultsVisible = true;
              this.searchSparesSubscription = this.skuService.getSkuStockForSpares(this.searchForm.get('sparesGroup').value, textValue).subscribe(function (skus) {
                _this29.searchResults = skus;
                _this29.isSearching = false;
              });
            }
          }
        }, {
          key: "getSearchGroupOptions",
          value: function getSearchGroupOptions() {
            var _this30 = this;

            this.skuService.getSparesGroups().subscribe(function (data) {
              _this30.sparesGroups = data;

              _this30.sparesGroups.map(function (sparesGroup) {
                _this30.sparesGroupOptions.push({
                  label: Object(src_utils_stringUtils__WEBPACK_IMPORTED_MODULE_4__["stringCamelize"])(sparesGroup.name),
                  value: sparesGroup.groupId + '~' + sparesGroup.subGroupId
                });
              });

              _this30.isLoading = false;
            });
          }
        }, {
          key: "handleDeleteSparesSku",
          value: function handleDeleteSparesSku(isSkuDeleted, skuIndex) {
            this.showSaveButton = true;

            if (isSkuDeleted) {
              this.workOrderSpares.spareSkus.splice(skuIndex, 1);
            }
          }
        }, {
          key: "getSpares",
          value: function getSpares(wordOrderId) {
            var _this31 = this;

            this.workOrderService.getWorkOrderSpares(wordOrderId).subscribe(function (workOrderSpares) {
              var spareSkus = [];
              workOrderSpares.spareSkus.forEach(function (sparesSku) {
                if (sparesSku) {
                  var inStock = sparesSku.sku.quantities.inStock;
                  var qty = sparesSku.quantity;
                  sparesSku.sku.quantities.inStock = inStock + qty;
                  spareSkus.push(sparesSku);
                }
              });
              _this31.workOrderSpares = {
                siteId: workOrderSpares.siteId,
                workOrderNumber: workOrderSpares.workOrderNumber,
                spareSkus: spareSkus
              };
            });
          }
        }, {
          key: "handleSkuQtyChange",
          value: function handleSkuQtyChange(skuQty, skuIndex) {
            var _this32 = this;

            this.workOrderSpares.spareSkus[skuIndex].quantity = skuQty;
            this.workOrderSpares.spareSkus.forEach(function (spareSku) {
              if (spareSku.quantity > spareSku.sku.quantities.inStock) {
                _this32.showSaveButton = false;
                return;
              } else {
                _this32.showSaveButton = true;
              }
            });
          }
        }, {
          key: "handleUpdateSpares",
          value: function handleUpdateSpares() {
            var _this33 = this;

            this.isUpdatingSpares = true;
            this.workOrderService.updateWorkOrderSpares(this.workOrderSpares).subscribe(function (workOrderSpares) {
              _this33.workOrderSpares = workOrderSpares;
              _this33.isUpdatingSpares = false;
              _this33.showSaveButton = false;

              _this33.toastService.showToast(new src_app_services__WEBPACK_IMPORTED_MODULE_3__["Toast"]('Updated spares for this work order.'));
            }, function (err) {
              _this33.toastService.showErrorToast('Unable to update spares.');

              _this33.isUpdatingSpares = false;
              _this33.showSaveButton = false;
            });
          }
        }, {
          key: "clearSearchForm",
          value: function clearSearchForm() {
            this.searchForm.get('text').setValue('');
            this.searchForm.get('spares').setValue(null);
            this.searchResultsVisible = false;
          }
        }, {
          key: "handleSearchKeyUp",
          value: function handleSearchKeyUp(event) {
            this.isSparesSelected = false;

            switch (event.key) {
              case 'ArrowDown':
                var resultButtons = this.searchResultElements.toArray();
                resultButtons.length > 0 && resultButtons[0].nativeElement.focus();
                break;

              case 'Escape':
                this.clearSearchForm();
                break;
            }
          }
        }, {
          key: "sparesNameIsInSearchResults",
          value: function sparesNameIsInSearchResults(searchText) {
            var result = false;

            var _iterator = _createForOfIteratorHelper(this.searchResults),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var spares = _step.value;

                if (spares.id + ' - ' + spares.description === searchText) {
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
          key: "handleSearchBlur",
          value: function handleSearchBlur() {
            var _this34 = this;

            setTimeout(function () {
              var searchValue = _this34.searchForm.get('text').value;

              var activeElement = document.activeElement;

              if (_this34.sparesNameIsInSearchResults(searchValue) || activeElement.dataset.sparesname) {
                return;
              }

              _this34.clearSearchForm();
            }, 0);
          }
        }, {
          key: "handleSearchResultKeyUp",
          value: function handleSearchResultKeyUp(event) {
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
                event.target.nextSibling && event.target.nextSibling.focus();
                break;

              case 'Escape':
                this.clearSearchForm();
                break;
            }
          }
        }, {
          key: "handleSearchResultClick",
          value: function handleSearchResultClick(spares) {
            if (this.workOrderSpares.spareSkus.filter(function (spare) {
              return spare.sku.id === spares.id;
            }).length !== 0) {
              this.toastService.showErrorToast("Item ".concat(spares.id, " Spare already selected"));
              this.clearSearchForm();
              this.searchResultsVisible = false;
              this.isSparesSelected = true;
              return;
            }

            if (spares.quantities.inStock === 0) {
              this.toastService.showErrorToast("Item ".concat(spares.id, " does not have stock"));
              this.clearSearchForm();
              this.searchResultsVisible = false;
              this.isSparesSelected = true;
              return;
            }

            this.workOrderSpares.spareSkus.push({
              sku: spares,
              quantity: spares.quantities.inStock > 0 ? 1 : 0
            });
            this.clearSearchForm();
            this.searchResultsVisible = false;
            this.isSparesSelected = true;
            this.showSaveButton = true;
          }
        }, {
          key: "checkUserEditRights",
          value: function checkUserEditRights() {
            var _this35 = this;

            this.isGettingUserRights = true;
            var userRole$ = this.authenticationService.currentUserProfile$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userProfile) {
              return userProfile;
            }));
            userRole$.subscribe(function (userProfile) {
              _this35.authenticationService.currentUserHasPermission(_defineProperty({}, src_app_services__WEBPACK_IMPORTED_MODULE_3__["PermissionGroup"].WorkOrders, [src_app_services__WEBPACK_IMPORTED_MODULE_3__["WorkOrdersPermissions"].CanEditWorkOrder])).subscribe(function (hasPermission) {
                if (userProfile.userRole.groupName !== src_app_services__WEBPACK_IMPORTED_MODULE_3__["Role"].Technician) {
                  _this35.isEditable = hasPermission && Number(_this35.workOrderStatus) !== src_app_services__WEBPACK_IMPORTED_MODULE_3__["WorkorderStatus"].Closed;
                } else {
                  _this35.isEditable = hasPermission && Number(_this35.workOrderStatus) !== src_app_services__WEBPACK_IMPORTED_MODULE_3__["WorkorderStatus"].Closed && Number(_this35.workOrderStatus) !== src_app_services__WEBPACK_IMPORTED_MODULE_3__["WorkorderStatus"].Complete;
                }

                _this35.isGettingUserRights = false;
              });
            });
            this.searchForm = this.formBuilder.group({
              text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: '',
                disabled: !this.isEditable
              }),
              spares: null,
              sparesGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: this.allSpareGroupOption,
                disabled: !this.isEditable
              })
            });
            this.searchForm.get('text').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return textValue.length >= 3;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return !_this35.sparesNameIsInSearchResults(textValue);
            })).subscribe(function () {
              return _this35.searchSpares();
            });
          }
        }, {
          key: "handleInValidQty",
          value: function handleInValidQty(isQtyFormInvalid) {
            this.isQtyFormInvalid = isQtyFormInvalid;
          }
        }]);

        return PickWorkOrderSparesComponent;
      }();

      PickWorkOrderSparesComponent.ɵfac = function PickWorkOrderSparesComponent_Factory(t) {
        return new (t || PickWorkOrderSparesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["SkuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["WorkordersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_work_order_wizard__WEBPACK_IMPORTED_MODULE_5__["WorkOrderWizard"]));
      };

      PickWorkOrderSparesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PickWorkOrderSparesComponent,
        selectors: [["app-pick-workorder-spares"]],
        viewQuery: function PickWorkOrderSparesComponent_Query(rf, ctx) {
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
        decls: 8,
        vars: 6,
        consts: [[3, "customCurrentPageTitle"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "spinner"], [1, "search-form", 3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], [1, "find-as-you-type", "input-with-search-wrapper"], ["type", "text", "formControlName", "text", "placeholder", "Search spares by id or name", 1, "form-control", "form-control--search-prefix", 3, "blur", "keyup"], ["formControlName", "spares", "type", "hidden"], ["formControlName", "sparesGroup", 1, "custom-select"], ["default", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-center mt-5", 4, "ngIf"], ["class", "find-as-you-type__results", 4, "ngIf"], ["class", "find-as-you-type__no-results mt-2", 4, "ngIf"], ["class", "find-as-you-type__spinner-container", 4, "ngIf"], [1, "find-as-you-type__results"], ["class", "select-spares-btn", 3, "keyup", "click", 4, "ngFor", "ngForOf"], [1, "select-spares-btn", 3, "keyup", "click"], ["searchResult", ""], [1, "find-as-you-type__no-results", "mt-2"], [1, "find-as-you-type__spinner-container"], [3, "value"], [1, "text-center", "mt-5"], [3, "sparesSku", "isEditable", "isSkuDeleted", "handlesQtyChange", "isQtyInValid", 4, "ngFor", "ngForOf"], [1, "non-sku-row"], [3, "sparesSku", "isEditable", "isSkuDeleted", "handlesQtyChange", "isQtyInValid"], [1, "form-actions"], [1, "btn", "btn-primary", "btn-block", "col-12", 3, "disabled", "click"], ["class", "spinner light", 4, "ngIf"], [1, "spinner", "light"]],
        template: function PickWorkOrderSparesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-section-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PickWorkOrderSparesComponent_span_3_Template, 4, 2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PickWorkOrderSparesComponent_div_4_Template, 1, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PickWorkOrderSparesComponent_div_5_Template, 16, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PickWorkOrderSparesComponent_footer_7_Template, 5, 5, "footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customCurrentPageTitle", "Pick Spares");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Picking spares for WO", ctx.wordOrderNumber, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.workOrderSpares && ctx.workOrderSpares.spareSkus && ctx.workOrderSpares.spareSkus.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading || ctx.isGettingUserRights);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.isGettingUserRights);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSaveButton);
          }
        },
        directives: [_shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_6__["SectionHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _spares_skus_spares_skus_component__WEBPACK_IMPORTED_MODULE_8__["SparesSkusComponent"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n.search-form[_ngcontent-%COMP%] {\n  padding-bottom: 1.5em;\n  margin-bottom: 1.5em;\n}\n.search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  height: calc(1.5em + 1.5rem + 2px);\n}\n.search-form[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 1.5rem + 2px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n@media screen and (max-width: 768px) {\n  .search-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n  }\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2em;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.875em;\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n  width: 40%;\n  text-align: left;\n  padding-left: 14px;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  width: 10%;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n  width: 20%;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n  width: 4%;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child) {\n  background-color: #F2F2F2;\n  line-height: 1.1;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child)   td[_ngcontent-%COMP%] {\n  padding: 0.8em;\n  text-align: center;\n  vertical-align: middle;\n  position: relative;\n  height: 5em;\n  border-bottom: 2px solid white;\n}\ntable[_ngcontent-%COMP%]   .non-sku-row[_ngcontent-%COMP%] {\n  line-height: 1.1;\n}\ntable[_ngcontent-%COMP%]   .non-sku-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.8em;\n  text-align: center;\n  vertical-align: middle;\n  position: relative;\n  height: 5em;\n  border-bottom: 2px solid white;\n}\n@media screen and (max-width: 768px) {\n  table[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: block;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n    display: none;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n    width: 60%;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n    width: 40%;\n  }\n  table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\nfooter[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  bottom: 0;\n  padding: 2em;\n  left: 7.9em;\n  width: calc(100% - 7.9em);\n  background-color: #f2f2f2;\n  box-shadow: 0 0 3px #c3c3c3;\n  transition: all 0.2s ease-out;\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n@media screen and (max-width: 800px) {\n  footer[_ngcontent-%COMP%] {\n    left: 0;\n    width: 100%;\n  }\n  footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.3rem;\n  }\n}\n.find-as-you-type[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 5;\n}\n.find-as-you-type[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n.find-as-you-type__results[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], .find-as-you-type__no-results[_ngcontent-%COMP%], .find-as-you-type__spinner-container[_ngcontent-%COMP%] {\n  padding: 0.8em 1.2em;\n  background-color: #f2f2f2;\n  border: 1px solid #ced4da;\n  display: block;\n}\n.find-as-you-type__results[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .find-as-you-type[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(106, 149, 91, 0.25);\n  position: relative;\n  background-color: #fff;\n  z-index: 5;\n}\n.find-as-you-type[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n}\n.find-as-you-type[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0 auto;\n}\n.find-as-you-type--suggestions-visible[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n  .nav-expanded.nav-expanded.nav-expanded app-pick-workorder-spares article footer {\n  left: 20em;\n  width: calc(100% - 20em);\n}\n@media screen and (max-width: 480px) {\n    .nav-expanded.nav-expanded.nav-expanded app-pick-workorder-spares article footer {\n    left: 0em;\n    width: 0em;\n    z-index: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcX2dsb2JhbHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHBpY2std29ya29yZGVyLXNwYXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDRTs7OztJQUlFLHdCQUFBO0VDakJGOztFRG1CQTtJQUNFLG9CQUFBO0lBQ0Esc0JBYmlCO0VDSG5COztFRGtCQTtJQUNFLHlCQUFBO0lBQ0EsMEJBQUE7RUNmRjtBQUNGO0FBZkE7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0FBaUJGO0FBZkU7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFpQko7QUFkRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBZ0JKO0FBYkU7RUFDRTtJQUNFLGtCQUFBO0VBZUo7QUFDRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFXRjtBQVRFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBV0o7QUFUSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBV047QUFQSTtFQUNFLFVBQUE7QUFTTjtBQUxJO0VBQ0UsVUFBQTtBQU9OO0FBSEk7RUFDRSxTQUFBO0FBS047QUFFSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBTjtBQUVNO0VBQ0UsY0F6Q29CO0VBMENwQixrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFBUjtBQUtFO0VBQ0UsZ0JBQUE7QUFISjtBQUtJO0VBQ0UsY0F2RHNCO0VBd0R0QixrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFITjtBQVFBO0VBQ0U7SUFDRSxlQUFBO0VBTEY7RUFRRTtJQUNFLGNBQUE7RUFOSjtFQVFJO0lBQ0UsYUFBQTtFQU5OO0VBV0k7SUFDRSxVQUFBO0VBVE47RUFZSTtJQUNFLFVBQUE7RUFWTjtFQWVFO0lBQ0UsY0FBQTtFQWJKO0FBQ0Y7QUFpQkE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0RsSWU7RUNtSWYseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJEbklnQjtBQ29IbEI7QUFpQkU7RUFDRSxZQUFBO0FBZko7QUFrQkU7RUFmRjtJQWdCSSxPQUFBO0lBQ0EsV0FBQTtFQWZGO0VBaUJFO0lBQ0UsdUJBQUE7RUFmSjtBQUNGO0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBaEJGO0FBa0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBaEJKO0FBbUJFO0VBR0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQW5CSjtBQXVCSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFyQk47QUF5QkU7O0VBRUUsaURBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQXZCSjtBQTBCRTtFQUNFLHNCQUFBO0FBeEJKO0FBMkJFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBekJKO0FBNkJJO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQTNCTjtBQWdDQTtFQUNFLFVEek1tQjtFQzBNbkIsd0JBQUE7QUE3QkY7QUFnQ0E7RUFDRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQTdCRjtBQUNGIiwiZmlsZSI6InBpY2std29ya29yZGVyLXNwYXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvQHRhcm9wdW1wcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbiRuYXYtZ3JleTogI2UyZTJlMjtcclxuJHNlYXJjaC1ncmV5OiAjZjJmMmYyO1xyXG4kaGVhZGVyLXBhZGRpbmc6IDIuNXJlbTtcclxuJGhlYWRlci1wYWRkaW5nLXNtOiAxcmVtO1xyXG4kYmFzZS1uYXYtd2lkdGg6IDcuOWVtO1xyXG4kZXhwYW5kZWQtbmF2LXdpZHRoOiAyMGVtO1xyXG4kaGVhZGVyLWhlaWdodDogMTIuNHJlbTtcclxuJG1lbnUtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmc6IDFyZW0gMy4zcmVtO1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nLXNtOiAxcmVtIDEuN3JlbTtcclxuJGNvbnRlbnQtYXJlYS1jb2xvcjogI2ZmZjtcclxuJHdhcm5pbmc6ICNFQTAwMjk7XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAuYXBwLWhlYWRlcixcclxuICAuZnVuY3Rpb24tYmFyLFxyXG4gIGFwcC1zZWN0aW9uLWhlYWRlcixcclxuICAubWVkaWEtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hcHAtY29udGVudC1hcmVhIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRlbnQtYXJlYS1jb2xvcjtcclxuICB9XHJcbiAgLm1lZGlhLXByaW50IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIHByaW50IHtcbiAgLmFwcC1oZWFkZXIsXG4uZnVuY3Rpb24tYmFyLFxuYXBwLXNlY3Rpb24taGVhZGVyLFxuLm1lZGlhLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcHAtY29udGVudC1hcmVhIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLm1lZGlhLXByaW50IHtcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG4uc2VhcmNoLWZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuLnNlYXJjaC1mb3JtIGlucHV0IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAxLjVyZW0gKyAycHgpO1xufVxuLnNlYXJjaC1mb3JtIC5jdXN0b20tc2VsZWN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMS41cmVtICsgMnB4KTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2VhcmNoLWZvcm0gLmZvcm0tY29udHJvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cbnRhYmxlIHRoZWFkIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG50YWJsZSB0aGVhZCB0aDpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG59XG50YWJsZSB0aGVhZCB0aDpudGgtY2hpbGQoMikge1xuICB3aWR0aDogMTAlO1xufVxudGFibGUgdGhlYWQgdGg6bnRoLWNoaWxkKDMpIHtcbiAgd2lkdGg6IDIwJTtcbn1cbnRhYmxlIHRoZWFkIHRoOm50aC1jaGlsZCg0KSB7XG4gIHdpZHRoOiA0JTtcbn1cbnRhYmxlIHRib2R5IHRyOm5vdCg6bGFzdC1jaGlsZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxudGFibGUgdGJvZHkgdHI6bm90KDpsYXN0LWNoaWxkKSB0ZCB7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1ZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cbnRhYmxlIC5ub24tc2t1LXJvdyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG50YWJsZSAubm9uLXNrdS1yb3cgdGQge1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNWVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cbiAgdGFibGUgdGhlYWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIHRhYmxlIHRoZWFkIHRoOm50aC1jaGlsZCgyKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICB0YWJsZSB0aGVhZCB0aDpudGgtY2hpbGQoMSkge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgdGFibGUgdGhlYWQgdGg6bnRoLWNoaWxkKDMpIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIHRhYmxlIHRib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDJlbTtcbiAgbGVmdDogNy45ZW07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3LjllbSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggI2MzYzNjMztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5mb290ZXIgYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgZm9vdGVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGZvb3RlciBidXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4zcmVtO1xuICB9XG59XG5cbi5maW5kLWFzLXlvdS10eXBlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xufVxuLmZpbmQtYXMteW91LXR5cGUgPiBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpbmQtYXMteW91LXR5cGVfX3Jlc3VsdHMgPiBidXR0b24sIC5maW5kLWFzLXlvdS10eXBlX19uby1yZXN1bHRzLCAuZmluZC1hcy15b3UtdHlwZV9fc3Bpbm5lci1jb250YWluZXIge1xuICBwYWRkaW5nOiAwLjhlbSAxLjJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZmluZC1hcy15b3UtdHlwZV9fcmVzdWx0cyA+IGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5maW5kLWFzLXlvdS10eXBlIC5mb3JtLWNvbnRyb2w6Zm9jdXMsXG4uZmluZC1hcy15b3UtdHlwZSBidXR0b246Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDYsIDE0OSwgOTEsIDAuMjUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDU7XG59XG4uZmluZC1hcy15b3UtdHlwZSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmZpbmQtYXMteW91LXR5cGUgLnNwaW5uZXIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZmluZC1hcy15b3UtdHlwZS0tc3VnZ2VzdGlvbnMtdmlzaWJsZSAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbjo6bmctZGVlcCAubmF2LWV4cGFuZGVkLm5hdi1leHBhbmRlZC5uYXYtZXhwYW5kZWQgYXBwLXBpY2std29ya29yZGVyLXNwYXJlcyBhcnRpY2xlIGZvb3RlciB7XG4gIGxlZnQ6IDIwZW07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMGVtKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgOjpuZy1kZWVwIC5uYXYtZXhwYW5kZWQubmF2LWV4cGFuZGVkLm5hdi1leHBhbmRlZCBhcHAtcGljay13b3Jrb3JkZXItc3BhcmVzIGFydGljbGUgZm9vdGVyIHtcbiAgICBsZWZ0OiAwZW07XG4gICAgd2lkdGg6IDBlbTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "bryy":
    /*!**************************************************!*\
      !*** ./src/app/work-orders/work-order.wizard.ts ***!
      \**************************************************/

    /*! exports provided: WorkOrderWizard */

    /***/
    function bryy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkOrderWizard", function () {
        return WorkOrderWizard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WorkOrderWizard = /*#__PURE__*/function () {
        function WorkOrderWizard() {
          _classCallCheck(this, WorkOrderWizard);
        }

        _createClass(WorkOrderWizard, [{
          key: "reset",
          value: function reset() {
            this.workOrder = undefined;
          }
        }]);

        return WorkOrderWizard;
      }();

      WorkOrderWizard.ɵfac = function WorkOrderWizard_Factory(t) {
        return new (t || WorkOrderWizard)();
      };

      WorkOrderWizard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WorkOrderWizard,
        factory: WorkOrderWizard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "fg9g":
    /*!******************************************************!*\
      !*** ./src/app/work-orders/work-orders.component.ts ***!
      \******************************************************/

    /*! exports provided: WorkOrdersComponent */

    /***/
    function fg9g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkOrdersComponent", function () {
        return WorkOrdersComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/utils/dateUtils */
      "Y4NF");
      /* harmony import */


      var _services_workorder_workorder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/workorder/workorder.service */
      "KP8F");
      /* harmony import */


      var _services_workorder_workorder_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/workorder/workorder.types */
      "NWDC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services */
      "o0su");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_search_filter_search_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/search-filter/search-filter.service */
      "gXUA");
      /* harmony import */


      var _work_order_wizard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./work-order.wizard */
      "bryy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared-module/section-header/section-header.component */
      "OeDX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function WorkOrdersComponent_li_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WorkOrdersComponent_li_44_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);

            var workorder_r4 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r6.handleSelectedWorkorderClick(workorder_r4.number, workorder_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "svg", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var workorder_r4 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("status-", workorder_r4.status ? ctx_r0.WorkorderStatus[workorder_r4.status] : "Open", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](workorder_r4.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.standardFormattedDate(workorder_r4.dueDate, true));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.standardFormattedDateNoYear(workorder_r4.dueDate, true));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](workorder_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.WorkorderStatus[workorder_r4.status]);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.getUserName(workorder_r4.assignedToUser));
        }
      }

      function WorkOrdersComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No workorders found\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function WorkOrdersComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WorkOrdersComponent_div_46_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r8.loadNextWorkorders();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Load more");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function WorkOrdersComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      var WorkOrdersComponent = /*#__PURE__*/function () {
        function WorkOrdersComponent(formBuilder, workorderService, router, authenticationService, searchFilterService, workOrderWizard, toastService) {
          _classCallCheck(this, WorkOrdersComponent);

          this.formBuilder = formBuilder;
          this.workorderService = workorderService;
          this.router = router;
          this.authenticationService = authenticationService;
          this.searchFilterService = searchFilterService;
          this.workOrderWizard = workOrderWizard;
          this.toastService = toastService;
          this.offset = 0;
          this.take = 10;
          this.shouldGetNextWorkorders = true;
          this.workorders = [];
          this.standardFormattedDate = src_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__["standardFormattedDate"];
          this.standardFormattedDateNoYear = src_utils_dateUtils__WEBPACK_IMPORTED_MODULE_1__["standardFormattedDateNoYear"];
          this.WorkorderStatus = _services_workorder_workorder_types__WEBPACK_IMPORTED_MODULE_3__["WorkorderStatus"];
        }

        _createClass(WorkOrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setPermissionBooleans();
            this.searchForm = this.formBuilder.group({
              text: this.searchFilterService.searchWOTextValue
            });
            this.initiateFreshSearchSettings();
            this.formChangeEvent();
            this.loadNextWorkorders();
          }
        }, {
          key: "formChangeEvent",
          value: function formChangeEvent() {
            var _this36 = this;

            this.searchForm.get('text').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (textValue) {
              return textValue.length >= 3 || textValue.length === 0;
            })).subscribe(function () {
              _this36.submitSearch();
            });
          }
        }, {
          key: "initiateFreshSearchSettings",
          value: function initiateFreshSearchSettings() {
            this.workorders = [];
            this.workOrderWizard.reset();
            this.offset = 0;
            this.shouldGetNextWorkorders = true;
          }
        }, {
          key: "loadNextWorkorders",
          value: function loadNextWorkorders() {
            var _this37 = this;

            this.isLoadingWorkorders = true;
            this.workorderService.listWorkorders({
              offset: this.offset,
              take: this.take,
              text: this.searchForm.value.text
            }).subscribe(function (workorderList) {
              var _this37$workorders;

              _this37.searchFilterService.searchWOTextValueCache = _this37.searchForm.value.text;

              (_this37$workorders = _this37.workorders).push.apply(_this37$workorders, _toConsumableArray(workorderList));

              _this37.offset += _this37.take;

              if (workorderList.length < _this37.take) {
                _this37.shouldGetNextWorkorders = false;
              }

              _this37.isLoadingWorkorders = false;
            });
          }
        }, {
          key: "submitSearch",
          value: function submitSearch() {
            this.initiateFreshSearchSettings();
            this.loadNextWorkorders();
          }
        }, {
          key: "handleSelectedWorkorderClick",
          value: function handleSelectedWorkorderClick(workOrderNumber, workOrder) {
            this.workOrderWizard.workOrder = workOrder;

            if (this.workOrderWizard.workOrder) {
              this.router.navigate(['work-orders', 'WO' + workOrderNumber]);
            }
          }
        }, {
          key: "createWorkOrder",
          value: function createWorkOrder() {
            this.router.navigate(['work-orders', 'create-work-order']);
          }
        }, {
          key: "setPermissionBooleans",
          value: function setPermissionBooleans() {
            var _this38 = this;

            this.authenticationService.currentUserHasPermission(_defineProperty({}, _services__WEBPACK_IMPORTED_MODULE_5__["PermissionGroup"].WorkOrders, [_services__WEBPACK_IMPORTED_MODULE_5__["WorkOrdersPermissions"].CanCreateWorkOrder])).subscribe(function (hasPermission) {
              return _this38.canCreateWorkOrder = hasPermission;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.searchFilterService.initiateWOSearchFilter();
          }
        }, {
          key: "getUserName",
          value: function getUserName(userDetails) {
            if (userDetails && userDetails.includes('-')) {
              return userDetails.split('-')[1];
            } else {
              return userDetails;
            }
          }
        }, {
          key: "getWorkOrderCSV",
          value: function getWorkOrderCSV() {
            var _this39 = this;

            this.workorderService.getWorkorderCSV().subscribe(function (workOrder) {
              var MIME_TYPE = 'text/csv';
              var blob = new Blob([workOrder], {
                type: MIME_TYPE
              });
              var date = new Date(Date.now());
              var curDate = date.toLocaleString('en-IN', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
              });
              var a = window.document.createElement('a');
              var fileName = 'workorder';
              a.href = window.URL.createObjectURL(blob);
              a.download = "".concat(fileName, "-").concat(curDate, ".csv");
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            }, function (err) {
              _this39.toastService.showErrorToast('Unable to download the work orders CSV file.');

              return;
            });
          }
        }]);

        return WorkOrdersComponent;
      }();

      WorkOrdersComponent.ɵfac = function WorkOrdersComponent_Factory(t) {
        return new (t || WorkOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_workorder_workorder_service__WEBPACK_IMPORTED_MODULE_2__["WorkordersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_search_filter_search_filter_service__WEBPACK_IMPORTED_MODULE_7__["SearchFilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_work_order_wizard__WEBPACK_IMPORTED_MODULE_8__["WorkOrderWizard"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["ToastService"]));
      };

      WorkOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: WorkOrdersComponent,
        selectors: [["app-work-orders"]],
        decls: 48,
        vars: 7,
        consts: [[3, "customCurrentPageTitle"], [1, "search-filter-form", 3, "formGroup"], [1, "input-with-search-wrapper"], ["type", "text", "formControlName", "text", "placeholder", "Search by work order id, title or asset name", 1, "form-control", "form-control--search-prefix"], [1, "workorder-source-filter"], [1, "btn", 3, "disabled", "click"], ["type", "button", 1, "btn-download-csv", 3, "click"], ["viewBox", "0 0 15.375 19.188"], ["id", "Group_1558", "data-name", "Group 1558", "transform", "translate(-299.063 -288.813)"], ["id", "Path_783", "data-name", "Path 783", 1, "cls-1"], ["d", "M940.063 237.334v19.188h15.375v-14.313l-4.875-4.875h-10.5z", "transform", "translate(-641 51.479)", 1, "cls-3"], ["d", "M954.438 255.521v-12.898l-4.29-4.289h-9.085v17.187h13.375m1 1h-15.375v-19.187h10.5l4.875 4.875v14.312z", "transform", "translate(-641 51.479)", 1, "cls-4"], ["id", "Path_784", "d", "M954.918 242.288h-5.043v-5.079", "data-name", "Path 784", "transform", "translate(-640.959 51.604)", 1, "cls-2"], ["id", "Path_785", "data-name", "Path 785", 1, "cls-1"], ["d", "M943.5 245.334h8.563v7.25H943.5z", "transform", "translate(-641 51.479)", 1, "cls-3"], ["d", "M951.063 251.584v-5.25H944.5v5.25h6.563m1 1H943.5v-7.25h8.563v7.25z", "transform", "translate(-641 51.479)", 1, "cls-4"], ["id", "Path_786", "d", "M946.5 245.084v7.25", "data-name", "Path 786", "transform", "translate(-641.064 51.729)", 1, "cls-2"], ["id", "Path_787", "d", "M952.063 247.834H944", "data-name", "Path 787", "transform", "translate(-641 51.479)", 1, "cls-2"], ["id", "Path_788", "d", "M951.938 250.4h-8.562", "data-name", "Path 788", "transform", "translate(-640.875 51.479)", 1, "cls-2"], [1, "workorder-list"], [3, "class", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "text-center", 4, "ngIf"], [3, "click"], [1, "desktop-view"], [1, "mobile-view"], [1, "row-toggle"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 8.797 5.194"], ["d", "M8,0l.8.8-4.4,4.4Q2.2,3,0,.8L.8,0C.81-.014,4.394,3.625,4.394,3.625S8.006,0,8,0Z"], [1, "text-center"], [1, "btn", "btn-link", 3, "click"], [1, "spinner"]],
        template: function WorkOrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-section-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Work Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WorkOrdersComponent_Template_button_click_7_listener() {
              return ctx.createWorkOrder();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Create Work Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function WorkOrdersComponent_Template_button_click_11_listener() {
              return ctx.getWorkOrderCSV();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "g", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "g", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "path", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "path", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "g", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "path", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "path", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "path", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "path", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "path", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "CSV");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "id");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "due");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "status");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "assigned to");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, WorkOrdersComponent_li_44_Template, 22, 9, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, WorkOrdersComponent_div_45_Template, 2, 0, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, WorkOrdersComponent_div_46_Template, 3, 0, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, WorkOrdersComponent_div_47_Template, 2, 0, "div", 21);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("customCurrentPageTitle", "Work Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.searchForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.canCreateWorkOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.workorders);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.workorders.length === 0 && !ctx.isLoadingWorkorders);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.shouldGetNextWorkorders && !ctx.isLoadingWorkorders);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoadingWorkorders);
          }
        },
        directives: [_shared_module_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_10__["SectionHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin-top: -0.8em;\n  margin-bottom: 1em;\n}\n.search-filter-form[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 1em;\n}\n.search-filter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #424244;\n  font-weight: 200;\n}\n.search-filter-form[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n.search-filter-form[_ngcontent-%COMP%]   .input-with-search-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.search-filter-form[_ngcontent-%COMP%]   .input-with-search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.search-filter-form[_ngcontent-%COMP%]   .workorder-source-filter[_ngcontent-%COMP%] {\n  width: 360px;\n  text-align: right;\n}\n@media screen and (min-width: 768px) and (max-width: 800px) {\n  .search-filter-form[_ngcontent-%COMP%]   .workorder-source-filter[_ngcontent-%COMP%] {\n    width: 425px;\n    text-align: right;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 360px) {\n  .search-filter-form[_ngcontent-%COMP%]   .workorder-source-filter[_ngcontent-%COMP%] {\n    float: left;\n    text-align: left;\n    width: auto;\n  }\n}\n@media screen and (min-width: 361px) and (max-width: 420px) {\n  .search-filter-form[_ngcontent-%COMP%]   .workorder-source-filter[_ngcontent-%COMP%] {\n    float: left;\n    text-align: left;\n    width: 86%;\n  }\n}\n@media screen and (max-width: 610px) {\n  .search-filter-form[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .search-filter-form[_ngcontent-%COMP%]   .input-with-search-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-filter-form[_ngcontent-%COMP%]   .input-with-search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-filter-form[_ngcontent-%COMP%]   .input-with-search-wrapper[_ngcontent-%COMP%]   .workorder-source-filter[_ngcontent-%COMP%] {\n    padding-top: 1em;\n    width: 100%;\n  }\n  .search-filter-form[_ngcontent-%COMP%]   .input-with-search-wrapper[_ngcontent-%COMP%]   .workorder-source-filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.workorder-list[_ngcontent-%COMP%] {\n  margin-top: 0.6em;\n  padding: 0;\n  list-style: none;\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  background-color: #ffffff;\n  transition: all 0.2s ease-in-out;\n  margin-bottom: 0.15em;\n  position: relative;\n  cursor: pointer;\n  padding: 1em 0.2em;\n}\n.workorder-list[_ngcontent-%COMP%]   li.status-Complete[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n.workorder-list[_ngcontent-%COMP%]   li.status-Complete[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.workorder-list[_ngcontent-%COMP%]   li.status-Complete[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n.workorder-list[_ngcontent-%COMP%]   li.status-In-progress[_ngcontent-%COMP%] {\n  background-color: #d1decd;\n}\n.workorder-list[_ngcontent-%COMP%]   li.status-In-progress[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #a8b7a2;\n}\n.workorder-list[_ngcontent-%COMP%]   li.status-Open[_ngcontent-%COMP%] {\n  background-color: #efe6d9;\n}\n.workorder-list[_ngcontent-%COMP%]   li.status-Open[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #c9bea0;\n}\n.workorder-list[_ngcontent-%COMP%]   li.status-Closed[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n.workorder-list[_ngcontent-%COMP%]   li.status-Closed[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: rgba(44, 44, 44, 0.05);\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  border-right: 1px solid rgba(0, 0, 0, 0.22);\n  display: flex;\n  align-items: center;\n  padding: 0.7em 0.8em;\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  width: 4.5em;\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 9em;\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   .desktop-view[_ngcontent-%COMP%] {\n  display: block;\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   .mobile-view[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 415px) {\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n    width: 5em;\n  }\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   .desktop-view[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   .mobile-view[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 50%;\n  word-break: break-all;\n}\n@media screen and (min-width: 320px) and (max-width: 767px) {\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n    width: 40%;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 800px) {\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n    width: 30%;\n  }\n}\n@media screen and (max-width: 415px) {\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n    display: none;\n  }\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 8em;\n  word-break: break-all;\n}\n@media screen and (max-width: 415px) {\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n    width: 7em;\n  }\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5) {\n  width: 25%;\n  word-break: break-all;\n  border-right: none;\n}\n@media screen and (min-width: 320px) and (max-width: 360px) {\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5) {\n    width: 26%;\n    padding: 0.7em 0.3em 0.7em 0.3em;\n  }\n}\n@media screen and (min-width: 361px) and (max-width: 575px) {\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5) {\n    width: 35%;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 800px) {\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5) {\n    width: 23%;\n  }\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(n+6) {\n  border-right: none;\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 1.6em 1em;\n  top: 0;\n  right: 0;\n  transition: all 0.2s ease-in-out;\n  background: rgba(0, 0, 0, 0.05);\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 610px) {\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%] {\n    padding: 1.6em 0.7em;\n  }\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .row-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  text-transform: uppercase;\n  font-weight: 900;\n  cursor: auto;\n  padding: 0;\n}\n.workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%] {\n  border-right: none;\n}\n@media screen and (max-width: 610px) {\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n    display: block;\n  }\n  .workorder-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%]:nth-child(4) {\n    width: 7em;\n  }\n}\n@media screen and (max-width: 415px) {\n  .workorder-list[_ngcontent-%COMP%] {\n    font-size: 0.85em;\n  }\n}\n@media screen and (max-width: 768px) {\n  .form-control[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n  }\n\n  button.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  button.btn-download-csv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 0.25rem;\n  }\n}\n@media screen and (min-width: 361px) and (max-width: 420px) {\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  button.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n}\nbutton.btn-download-csv[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: flex-end;\n  display: flex;\n  color: #000 !important;\n  border: none;\n  margin-left: 20px;\n  margin-top: 6px;\n  background: none !important;\n}\n@media screen and (min-width: 320px) and (max-width: 360px) {\n  button.btn-download-csv[_ngcontent-%COMP%] {\n    margin-top: -9px;\n    padding-left: 31px;\n  }\n}\n@media screen and (min-width: 361px) and (max-width: 420px) {\n  button.btn-download-csv[_ngcontent-%COMP%] {\n    padding-left: 18px;\n  }\n}\nbutton.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.4rem;\n  height: auto;\n}\nbutton.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-1[_ngcontent-%COMP%], button.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  fill: none;\n}\nbutton.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-2[_ngcontent-%COMP%] {\n  stroke: #424244;\n}\nbutton.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-3[_ngcontent-%COMP%], button.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  stroke: none;\n}\nbutton.btn-download-csv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .cls-4[_ngcontent-%COMP%] {\n  fill: #424244;\n}\nbutton.btn-download-csv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.875em;\n  font-weight: 600;\n  margin-bottom: 0.5em;\n}\nbutton.btn-download-csv[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\nbutton.btn-download-csv[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: scale(1.025);\n}\n@media screen and (min-width: 800px) {\n    .input-with-search-wrapper:before {\n    top: 47% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFxfZ2xvYmFsdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFx3b3JrLW9yZGVycy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEB0YXJvcHVtcHNcXGJvb3RzdHJhcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFOzs7O0lBSUUsd0JBQUE7RUNqQkY7O0VEbUJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFiaUI7RUNIbkI7O0VEa0JBO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQ2ZGO0FBQ0Y7QUFmQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBaUJGO0FBZEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFpQkY7QUFmRTtFQUNFLFlBQUE7RUFDQSx5QkNiUztFRGNULGdCQUFBO0FBaUJKO0FBZkk7RUFDRSxlQUFBO0FBaUJOO0FBYkU7RUFDRSxXQUFBO0FBZUo7QUFiSTtFQUNFLFVBQUE7QUFlTjtBQVhFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBYUo7QUFYSTtFQUpGO0lBS0ksWUFBQTtJQUNBLGlCQUFBO0VBY0o7QUFDRjtBQVpJO0VBVEY7SUFVSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VBZUo7QUFDRjtBQWJJO0VBZkY7SUFnQkksV0FBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQWdCSjtBQUNGO0FBYkU7RUE1Q0Y7SUE2Q0ksY0FBQTtFQWdCRjtFQWRFO0lBQ0UsV0FBQTtFQWdCSjtFQWRJO0lBQ0UsV0FBQTtFQWdCTjtFQWJJO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VBZU47RUFiTTtJQUNFLFdBQUE7RUFlUjtBQUNGO0FBVEE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVlGO0FBVkU7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVlKO0FBVkk7RUFDRSx5QkFBQTtBQVlOO0FBWE07RUFDRSxxQ0FBQTtBQWFSO0FBVk07RUFDRSx5QkFBQTtBQVlSO0FBUkk7RUFDRSx5QkFBQTtBQVVOO0FBVE07RUFDRSx5QkFBQTtBQVdSO0FBUEk7RUFDRSx5QkFBQTtBQVNOO0FBUk07RUFDRSx5QkFBQTtBQVVSO0FBTkk7RUFDRSx5QkFBQTtBQVFOO0FBUE07RUFDRSx3Q0FBQTtBQVNSO0FBTEk7RUFDRSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFPTjtBQUxNO0VBQ0UsWUFBQTtBQU9SO0FBSk07RUFDRSxVQUFBO0FBTVI7QUFKUTtFQUNFLGNBQUE7QUFNVjtBQUhRO0VBQ0UsYUFBQTtBQUtWO0FBRlE7RUFYRjtJQVlJLFVBQUE7RUFLUjtFQUhRO0lBQ0UsYUFBQTtFQUtWO0VBRlE7SUFDRSxjQUFBO0VBSVY7QUFDRjtBQUFNO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBRVI7QUFBUTtFQUpGO0lBS0ksVUFBQTtFQUdSO0FBQ0Y7QUFEUTtFQVJGO0lBU0ksVUFBQTtFQUlSO0FBQ0Y7QUFGUTtFQVpGO0lBYUksYUFBQTtFQUtSO0FBQ0Y7QUFGTTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQUlSO0FBRlE7RUFKRjtJQUtJLFVBQUE7RUFLUjtBQUNGO0FBRk07RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUlSO0FBRlE7RUFMRjtJQU1JLFVBQUE7SUFDQSxnQ0FBQTtFQUtSO0FBQ0Y7QUFIUTtFQVZGO0lBV0ksVUFBQTtFQU1SO0FBQ0Y7QUFKUTtFQWRGO0lBZUksVUFBQTtFQU9SO0FBQ0Y7QUFKTTtFQUNFLGtCQUFBO0FBTVI7QUFGSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSU47QUFGTTtFQVhGO0lBWUksb0JBQUE7RUFLTjtBQUNGO0FBSE07RUFDRSx5QkFBQTtBQUtSO0FBREk7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFHTjtBQUZNO0VBQ0Usa0JBQUE7QUFJUjtBQUZRO0VBRUk7SUFDRSxjQUFBO0VBR1o7RUFDUTtJQUNFLFVBQUE7RUFDVjtBQUNGO0FBS0U7RUEvS0Y7SUFnTEksaUJBQUE7RUFGRjtBQUNGO0FBS0E7RUFDRTtJQUNFLGtCQUFBO0VBRkY7O0VBTUU7SUFDRSxnQkFBQTtFQUhKO0VBTUU7SUFDRSxtQkFBQTtFQUpKO0FBQ0Y7QUFRQTtFQUNFO0lBQ0UsV0FBQTtFQU5GOztFQVVFO0lBQ0Usa0JBQUE7RUFQSjtBQUNGO0FBV0E7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBVEY7QUFXRTtFQVZGO0lBV0ksZ0JBQUE7SUFDQSxrQkFBQTtFQVJGO0FBQ0Y7QUFVRTtFQWZGO0lBZ0JJLGtCQUFBO0VBUEY7QUFDRjtBQVNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFQSjtBQVNJOztFQUVFLFVBQUE7QUFQTjtBQVVJO0VBQ0UsZUFBQTtBQVJOO0FBV0k7O0VBRUUsWUFBQTtBQVROO0FBWUk7RUFDRSxhQUFBO0FBVk47QUFjRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQVpKO0FBZUU7RUFDRSwwQkFBQTtBQWJKO0FBZUk7RUFDRSx1QkFBQTtBQWJOO0FBa0JBO0VBQ0U7SUFDRSxtQkFBQTtFQWZGO0FBQ0YiLCJmaWxlIjoid29yay1vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL0B0YXJvcHVtcHMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG4kbmF2LWdyZXk6ICNlMmUyZTI7XHJcbiRzZWFyY2gtZ3JleTogI2YyZjJmMjtcclxuJGhlYWRlci1wYWRkaW5nOiAyLjVyZW07XHJcbiRoZWFkZXItcGFkZGluZy1zbTogMXJlbTtcclxuJGJhc2UtbmF2LXdpZHRoOiA3LjllbTtcclxuJGV4cGFuZGVkLW5hdi13aWR0aDogMjBlbTtcclxuJGhlYWRlci1oZWlnaHQ6IDEyLjRyZW07XHJcbiRtZW51LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nOiAxcmVtIDMuM3JlbTtcclxuJGZ1bmN0aW9uLWJhci1idXR0b24tcGFkZGluZy1zbTogMXJlbSAxLjdyZW07XHJcbiRjb250ZW50LWFyZWEtY29sb3I6ICNmZmY7XHJcbiR3YXJuaW5nOiAjRUEwMDI5O1xyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLmFwcC1oZWFkZXIsXHJcbiAgLmZ1bmN0aW9uLWJhcixcclxuICBhcHAtc2VjdGlvbi1oZWFkZXIsXHJcbiAgLm1lZGlhLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYXBwLWNvbnRlbnQtYXJlYSB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb250ZW50LWFyZWEtY29sb3I7XHJcbiAgfVxyXG4gIC5tZWRpYS1wcmludCB7XHJcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBwcmludCB7XG4gIC5hcHAtaGVhZGVyLFxuLmZ1bmN0aW9uLWJhcixcbmFwcC1zZWN0aW9uLWhlYWRlcixcbi5tZWRpYS1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXBwLWNvbnRlbnQtYXJlYSB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5tZWRpYS1wcmludCB7XG4gICAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuaDEge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAtMC44ZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLnNlYXJjaC1maWx0ZXItZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG4uc2VhcmNoLWZpbHRlci1mb3JtIGJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0NDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbi5zZWFyY2gtZmlsdGVyLWZvcm0gYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5zZWFyY2gtZmlsdGVyLWZvcm0gLmlucHV0LXdpdGgtc2VhcmNoLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWFyY2gtZmlsdGVyLWZvcm0gLmlucHV0LXdpdGgtc2VhcmNoLXdyYXBwZXIgaW5wdXQge1xuICB3aWR0aDogNzUlO1xufVxuLnNlYXJjaC1maWx0ZXItZm9ybSAud29ya29yZGVyLXNvdXJjZS1maWx0ZXIge1xuICB3aWR0aDogMzYwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc2VhcmNoLWZpbHRlci1mb3JtIC53b3Jrb3JkZXItc291cmNlLWZpbHRlciB7XG4gICAgd2lkdGg6IDQyNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5zZWFyY2gtZmlsdGVyLWZvcm0gLndvcmtvcmRlci1zb3VyY2UtZmlsdGVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNjFweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zZWFyY2gtZmlsdGVyLWZvcm0gLndvcmtvcmRlci1zb3VyY2UtZmlsdGVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA4NiU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XG4gIC5zZWFyY2gtZmlsdGVyLWZvcm0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5zZWFyY2gtZmlsdGVyLWZvcm0gLmlucHV0LXdpdGgtc2VhcmNoLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWFyY2gtZmlsdGVyLWZvcm0gLmlucHV0LXdpdGgtc2VhcmNoLXdyYXBwZXIgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWFyY2gtZmlsdGVyLWZvcm0gLmlucHV0LXdpdGgtc2VhcmNoLXdyYXBwZXIgLndvcmtvcmRlci1zb3VyY2UtZmlsdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWFyY2gtZmlsdGVyLWZvcm0gLmlucHV0LXdpdGgtc2VhcmNoLXdyYXBwZXIgLndvcmtvcmRlci1zb3VyY2UtZmlsdGVyIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLndvcmtvcmRlci1saXN0IHtcbiAgbWFyZ2luLXRvcDogMC42ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ud29ya29yZGVyLWxpc3QgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbi1ib3R0b206IDAuMTVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDFlbSAwLjJlbTtcbn1cbi53b3Jrb3JkZXItbGlzdCBsaS5zdGF0dXMtQ29tcGxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuLndvcmtvcmRlci1saXN0IGxpLnN0YXR1cy1Db21wbGV0ZSAucm93LXRvZ2dsZSA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG4ud29ya29yZGVyLWxpc3QgbGkuc3RhdHVzLUNvbXBsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cbi53b3Jrb3JkZXItbGlzdCBsaS5zdGF0dXMtSW4tcHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkZWNkO1xufVxuLndvcmtvcmRlci1saXN0IGxpLnN0YXR1cy1Jbi1wcm9ncmVzcyAucm93LXRvZ2dsZSA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGI3YTI7XG59XG4ud29ya29yZGVyLWxpc3QgbGkuc3RhdHVzLU9wZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlNmQ5O1xufVxuLndvcmtvcmRlci1saXN0IGxpLnN0YXR1cy1PcGVuIC5yb3ctdG9nZ2xlID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YmVhMDtcbn1cbi53b3Jrb3JkZXItbGlzdCBsaS5zdGF0dXMtQ2xvc2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbn1cbi53b3Jrb3JkZXItbGlzdCBsaS5zdGF0dXMtQ2xvc2VkIC5yb3ctdG9nZ2xlID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgNDQsIDQ0LCAwLjA1KTtcbn1cbi53b3Jrb3JkZXItbGlzdCBsaSA+IGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC43ZW0gMC44ZW07XG59XG4ud29ya29yZGVyLWxpc3QgbGkgPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDQuNWVtO1xufVxuLndvcmtvcmRlci1saXN0IGxpID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiA5ZW07XG59XG4ud29ya29yZGVyLWxpc3QgbGkgPiBkaXY6bnRoLWNoaWxkKDIpIC5kZXNrdG9wLXZpZXcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi53b3Jrb3JkZXItbGlzdCBsaSA+IGRpdjpudGgtY2hpbGQoMikgLm1vYmlsZS12aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNXB4KSB7XG4gIC53b3Jrb3JkZXItbGlzdCBsaSA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgIHdpZHRoOiA1ZW07XG4gIH1cbiAgLndvcmtvcmRlci1saXN0IGxpID4gZGl2Om50aC1jaGlsZCgyKSAuZGVza3RvcC12aWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC53b3Jrb3JkZXItbGlzdCBsaSA+IGRpdjpudGgtY2hpbGQoMikgLm1vYmlsZS12aWV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLndvcmtvcmRlci1saXN0IGxpID4gZGl2Om50aC1jaGlsZCgzKSB7XG4gIHdpZHRoOiA1MCU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLndvcmtvcmRlci1saXN0IGxpID4gZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAud29ya29yZGVyLWxpc3QgbGkgPiBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTVweCkge1xuICAud29ya29yZGVyLWxpc3QgbGkgPiBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ud29ya29yZGVyLWxpc3QgbGkgPiBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgd2lkdGg6IDhlbTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgLndvcmtvcmRlci1saXN0IGxpID4gZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgd2lkdGg6IDdlbTtcbiAgfVxufVxuLndvcmtvcmRlci1saXN0IGxpID4gZGl2Om50aC1jaGlsZCg1KSB7XG4gIHdpZHRoOiAyNSU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAud29ya29yZGVyLWxpc3QgbGkgPiBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICB3aWR0aDogMjYlO1xuICAgIHBhZGRpbmc6IDAuN2VtIDAuM2VtIDAuN2VtIDAuM2VtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNjFweCkgYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53b3Jrb3JkZXItbGlzdCBsaSA+IGRpdjpudGgtY2hpbGQoNSkge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLndvcmtvcmRlci1saXN0IGxpID4gZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgd2lkdGg6IDIzJTtcbiAgfVxufVxuLndvcmtvcmRlci1saXN0IGxpID4gZGl2Om50aC1jaGlsZChuKzYpIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLndvcmtvcmRlci1saXN0IGxpIC5yb3ctdG9nZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxLjZlbSAxZW07XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xuICAud29ya29yZGVyLWxpc3QgbGkgLnJvdy10b2dnbGUge1xuICAgIHBhZGRpbmc6IDEuNmVtIDAuN2VtO1xuICB9XG59XG4ud29ya29yZGVyLWxpc3QgbGkgLnJvdy10b2dnbGUgc3ZnIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cbi53b3Jrb3JkZXItbGlzdCBsaTpudGgtY2hpbGQoMSkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjdXJzb3I6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG4ud29ya29yZGVyLWxpc3QgbGk6bnRoLWNoaWxkKDEpID4gZGl2IHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcbiAgLndvcmtvcmRlci1saXN0IGxpOm50aC1jaGlsZCgxKSA+IGRpdiBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLndvcmtvcmRlci1saXN0IGxpOm50aC1jaGlsZCgxKSA+IGRpdjpudGgtY2hpbGQoNCkge1xuICAgIHdpZHRoOiA3ZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNXB4KSB7XG4gIC53b3Jrb3JkZXItbGlzdCB7XG4gICAgZm9udC1zaXplOiAwLjg1ZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0tY29udHJvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgYnV0dG9uLmJ0bi1kb3dubG9hZC1jc3Ygc3ZnIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG4gIGJ1dHRvbi5idG4tZG93bmxvYWQtY3N2IGgxIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNjFweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgYnV0dG9uLmJ0bi1kb3dubG9hZC1jc3Ygc3ZnIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH1cbn1cbmJ1dHRvbi5idG4tZG93bmxvYWQtY3N2IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIGJ1dHRvbi5idG4tZG93bmxvYWQtY3N2IHtcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzFweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzYxcHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICBidXR0b24uYnRuLWRvd25sb2FkLWNzdiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICB9XG59XG5idXR0b24uYnRuLWRvd25sb2FkLWNzdiBzdmcge1xuICB3aWR0aDogMS40cmVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG5idXR0b24uYnRuLWRvd25sb2FkLWNzdiBzdmcgLmNscy0xLFxuYnV0dG9uLmJ0bi1kb3dubG9hZC1jc3Ygc3ZnIC5jbHMtMiB7XG4gIGZpbGw6IG5vbmU7XG59XG5idXR0b24uYnRuLWRvd25sb2FkLWNzdiBzdmcgLmNscy0yIHtcbiAgc3Ryb2tlOiAjNDI0MjQ0O1xufVxuYnV0dG9uLmJ0bi1kb3dubG9hZC1jc3Ygc3ZnIC5jbHMtMyxcbmJ1dHRvbi5idG4tZG93bmxvYWQtY3N2IHN2ZyAuY2xzLTQge1xuICBzdHJva2U6IG5vbmU7XG59XG5idXR0b24uYnRuLWRvd25sb2FkLWNzdiBzdmcgLmNscy00IHtcbiAgZmlsbDogIzQyNDI0NDtcbn1cbmJ1dHRvbi5idG4tZG93bmxvYWQtY3N2IGgyIHtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbmJ1dHRvbi5idG4tZG93bmxvYWQtY3N2OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5idXR0b24uYnRuLWRvd25sb2FkLWNzdjpob3ZlciBzdmcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgOjpuZy1kZWVwIC5pbnB1dC13aXRoLXNlYXJjaC13cmFwcGVyOmJlZm9yZSB7XG4gICAgdG9wOiA0NyUgIWltcG9ydGFudDtcbiAgfVxufSIsIiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIktvaGlub29yXCIsIFwiT3BlbiBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIFwiR2lsbCBTYW5zXCIsIENvcmJlbCwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRib2R5LWNvbG9yOiAjNDI0MjQ0ICFkZWZhdWx0O1xuJGdyZWVuOiAjNkE5NTVCICFkZWZhdWx0O1xuJGdyZWVuLWZhZGVkOiAjRDFERUNEO1xuJHJlZDogI0ZGNDIyRSAhZGVmYXVsdDtcbiRyZWQtbGlnaHQ6ICNGRkQ5RDUgIWRlZmF1bHQ7XG4kcmVkLWRhcms6ICM5OTQ0NEYgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiA2cHg7XG5cbiRwcmltYXJ5OiAkZ3JlZW47XG5cbiRhbGVydC1ib3JkZXItd2lkdGg6IDA7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogNnB4O1xuJGFsZXJ0LXBhZGRpbmcteDogMS41cmVtO1xuJGFsZXJ0LXBhZGRpbmcteTogMS4ycmVtO1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogIC43NXJlbTtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAzLjc1cmVtO1xuXG4kdG9hc3Qtei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiR0b2FzdC1kdXJhdGlvbjogMzAwMG1zICFkZWZhdWx0O1xuJHRvYXN0LWhlaWdodDogOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1oZWlnaHQtc206IDUuOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1icmVha3BvaW50OiA3NjhweCAhZGVmYXVsdDsiXX0= */"]
      });
      /***/
    },

    /***/
    "msZ0":
    /*!****************************************************************************************!*\
      !*** ./src/app/work-orders/pick-workorder-spares/spares-skus/spares-skus.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: SparesSkusComponent */

    /***/
    function msZ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SparesSkusComponent", function () {
        return SparesSkusComponent;
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

      function SparesSkusComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quantity is greater than instock quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SparesSkusComponent = /*#__PURE__*/function () {
        function SparesSkusComponent(formBuilder) {
          _classCallCheck(this, SparesSkusComponent);

          this.formBuilder = formBuilder;
          this.isSkuDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.handlesQtyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isQtyInValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(SparesSkusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            this.qtyForm = this.formBuilder.group({
              qty: [this.sparesSku.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(this.sparesSku.sku.quantities.inStock), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
            this.qtyForm.get('qty').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (textValue) {
              return textValue <= _this40.sparesSku.sku.quantities.inStock;
            })).subscribe(function (skuQty) {
              _this40.handlesQtyChange.emit(skuQty);

              _this40.isQtyInValid.emit(_this40.qtyForm.value.qty > _this40.sparesSku.sku.quantities.inStock);
            });
          }
        }, {
          key: "handleQtyClipboard",
          value: function handleQtyClipboard(event) {
            event.preventDefault();
            return;
          }
        }, {
          key: "disableRightClick",
          value: function disableRightClick(e) {
            e.preventDefault();
          }
        }, {
          key: "handleQtyInputKeyUp",
          value: function handleQtyInputKeyUp(event) {
            this.isQtyInValid.emit(this.qtyForm.get('qty').value > this.sparesSku.sku.quantities.inStock);

            if (event.key === 'Enter' && this.qtyForm.value.qty > 0 && this.qtyForm.value.qty.toString().length > 0 && this.qtyForm.get('qty').value > this.sparesSku.sku.quantities.inStock) {
              event.preventDefault();
            }
          }
        }, {
          key: "handleQtyInputKeyDown",
          value: function handleQtyInputKeyDown(event) {
            var qtyStringExceedsMaxLength = this.qtyForm.value.qty.toString().length >= 4;

            if (this.qtyForm.valid && this.qtyForm.get('qty').value > 0 && this.qtyForm.get('qty').value > this.sparesSku.sku.quantities.inStock && event.key === 'Enter') {
              return;
            }

            if (event.key === 'Backspace' || event.key === 'Delete') {
              return;
            }

            if (qtyStringExceedsMaxLength || isNaN(event.key) || event.keyCode === 32) {
              event.preventDefault();
            }

            var currentQty = this.qtyForm.get('qty').value;
            this.handlesQtyChange.emit(currentQty);
            this.isQtyInValid.emit(this.qtyForm.get('qty').value > this.sparesSku.sku.quantities.inStock);
          }
        }, {
          key: "handleDeleteItem",
          value: function handleDeleteItem() {
            this.isSkuDeleted.emit(true);
          }
        }, {
          key: "handlesDecreaseQty",
          value: function handlesDecreaseQty() {
            var currentQty = this.qtyForm.get('qty').value;
            currentQty -= 1;

            if (currentQty <= 0) {
              return;
            }

            this.qtyForm.setValue({
              qty: currentQty
            });
            this.handlesQtyChange.emit(currentQty);
            this.isQtyInValid.emit(this.qtyForm.get('qty').value > this.sparesSku.sku.quantities.inStock);
          }
        }, {
          key: "handlesIncreaseQty",
          value: function handlesIncreaseQty() {
            var currentQty = Number(this.qtyForm.get('qty').value);
            currentQty += 1;

            if (currentQty > this.sparesSku.sku.quantities.inStock) {
              return;
            }

            this.qtyForm.setValue({
              qty: currentQty
            });
            this.handlesQtyChange.emit(currentQty);
            this.isQtyInValid.emit(this.qtyForm.get('qty').value > this.sparesSku.sku.quantities.inStock);
          }
        }]);

        return SparesSkusComponent;
      }();

      SparesSkusComponent.ɵfac = function SparesSkusComponent_Factory(t) {
        return new (t || SparesSkusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      SparesSkusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SparesSkusComponent,
        selectors: [["app-spares-skus"]],
        inputs: {
          sparesSku: "sparesSku",
          isEditable: "isEditable"
        },
        outputs: {
          isSkuDeleted: "isSkuDeleted",
          handlesQtyChange: "handlesQtyChange",
          isQtyInValid: "isQtyInValid"
        },
        decls: 41,
        vars: 10,
        consts: [[1, "spare-name-cell"], [1, "sku-uom-cell", "mobile-only"], [1, "sku-qty-cell"], [1, "spares-row", 3, "formGroup"], [1, "btn-decrease", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "20"], ["data-name", "Group 3136", "transform", "translate(-556 -289.5)"], ["cx", "8", "cy", "8", "r", "8", "fill", "#777", "data-name", "Ellipse 284", "transform", "translate(556 292)"], ["fill", "#fff", "data-name", "-", "font-family", "Kohinoor-Book, Kohinoor", "font-size", "15", "transform", "translate(561.5 304.5)"], ["x", "0", "y", "0"], ["formControlName", "qty", "type", "text", "pattern", "[0-9]*", "inputmode", "numeric", "ng-pattern", "[0-9]*", "maxlength", "4", 1, "form-control", "qty-text-input", 3, "readOnly", "paste", "contextmenu", "keydown", "keyup"], ["class", "alert alert-danger arrow-alert", 4, "ngIf"], [1, "btn-increase", 3, "disabled", "click"], ["data-name", "Group 3138", "transform", "translate(-946 -724.2)"], ["cx", "8", "cy", "8", "r", "8", "fill", "#777", "data-name", "Ellipse 285", "transform", "translate(946 726)"], ["fill", "#fff", "data-name", "+", "font-family", "Kohinoor-Book, Kohinoor", "font-size", "15", "transform", "translate(950 739.2)"], [1, "delete-row-cell"], [1, "delete-btn", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 14 18"], ["d", "M12.333 3.933L1.267 3.8c-.133.133-.4.133-.533.267A.8.8 0 0 0 .6 4.6l1.2 11.6c0 .4.267.533.667.533h8.267a.61.61 0 0 0 .666-.533l1.467-11.6a.8.8 0 0 0-.133-.533 1.343 1.343 0 0 0-.401-.134zm-2 11.6h-7.2L2.067 5.267h9.467z", "transform", "translate(.2 1.267)", 1, "cls-1"], ["d", "M13.333 3.2h-2.666A3.739 3.739 0 0 0 6.933 0a3.607 3.607 0 0 0-3.6 3.2H.667A.63.63 0 0 0 0 3.867a.63.63 0 0 0 .667.667h12.666A.63.63 0 0 0 14 3.867a.63.63 0 0 0-.667-.667zm-6.4-1.867a2.442 2.442 0 0 1 2.4 1.867H4.667a2.407 2.407 0 0 1 2.266-1.867z", 1, "cls-1"], ["d", "M5.367 13.467a.63.63 0 0 0 .667-.667V6.667A.63.63 0 0 0 5.367 6a.63.63 0 0 0-.667.667v6.267c0 .266.4.533.667.533z", "transform", "translate(1.567 2)", 1, "cls-1"], ["d", "M3.9 13.5a.714.714 0 0 0 .667-.667l-.534-6.266a.714.714 0 0 0-.666-.667.845.845 0 0 0-.667.8l.533 6.267a.886.886 0 0 0 .667.533z", "transform", "translate(.9 1.967)", 1, "cls-1"], ["d", "M6.942 13.475a.63.63 0 0 0 .667-.667l.533-6.267c.133-.267-.133-.533-.533-.533-.4-.133-.667.133-.667.533l-.533 6.267c-.134.401.133.667.533.667z", "transform", "translate(2.125 1.991)", 1, "cls-1"], [1, "alert", "alert-danger", "arrow-alert"]],
        template: function SparesSkusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ID ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SparesSkusComponent_Template_button_click_16_listener() {
              return ctx.handlesDecreaseQty();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "text", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tspan", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function SparesSkusComponent_Template_input_paste_23_listener($event) {
              return ctx.handleQtyClipboard($event);
            })("contextmenu", function SparesSkusComponent_Template_input_contextmenu_23_listener($event) {
              return ctx.disableRightClick($event);
            })("keydown", function SparesSkusComponent_Template_input_keydown_23_listener($event) {
              return ctx.handleQtyInputKeyDown($event);
            })("keyup", function SparesSkusComponent_Template_input_keyup_23_listener($event) {
              return ctx.handleQtyInputKeyUp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SparesSkusComponent_div_24_Template, 3, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SparesSkusComponent_Template_button_click_25_listener() {
              return ctx.handlesIncreaseQty();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "circle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "text", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tspan", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SparesSkusComponent_Template_button_click_33_listener() {
              return ctx.handleDeleteItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sparesSku.sku.sparesGroupName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sparesSku.sku.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sparesSku.sku.description, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sparesSku.sku.uom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.qtyForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qtyForm.value.qty > ctx.sparesSku.sku.quantities.inStock && ctx.qtyForm.dirty && ctx.qtyForm.value !== "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isEditable);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["@media print {\n  .app-header[_ngcontent-%COMP%], .function-bar[_ngcontent-%COMP%], app-section-header[_ngcontent-%COMP%], .media-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .app-content-area[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    background-color: #fff;\n  }\n\n  .media-print[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n    max-width: 100% !important;\n  }\n}\n[_nghost-%COMP%] {\n  display: table-row;\n  background-color: #f2f2f2;\n  line-height: 1.1;\n  position: relative;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.8em;\n  text-align: center;\n  vertical-align: middle;\n  height: 5em;\n  border-bottom: 2px solid white;\n  position: relative;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  font-weight: 400;\n  text-align: left;\n  width: 40%;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 10%;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 20%;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 4%;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #dedede;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%]   .mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .sku-qty-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .sku-qty-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n[_nghost-%COMP%]   .sku-qty-cell[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n[_nghost-%COMP%]   .sku-qty-cell[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -80%;\n  width: 100%;\n  left: 0%;\n  z-index: 999;\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 1.5em;\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.2s ease-in-out;\n  background-color: rgba(0, 0, 0, 0);\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.07);\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1.1);\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.3;\n  background-color: transparent;\n  cursor: default;\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[disabled][_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1);\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1em;\n  height: auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1);\n  transition: all 0.2s ease-in-out;\n}\n[_nghost-%COMP%]   .delete-row-cell[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #424244;\n}\n@media screen and (max-width: 480px) {\n  [_nghost-%COMP%] {\n    padding-right: 0 !important;\n  }\n  [_nghost-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    width: 50%;\n  }\n  [_nghost-%COMP%]   .spares-row[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    margin-bottom: 3.5em;\n    padding-right: 7em;\n    display: flex;\n    align-items: center;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-bottom: none;\n  }\n  [_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n    display: none;\n    border-bottom: none;\n    height: auto;\n  }\n  [_nghost-%COMP%]   td.spare-name-cell[_ngcontent-%COMP%], [_nghost-%COMP%]   td.sku-qty-cell[_ngcontent-%COMP%], [_nghost-%COMP%]   td.qty-btn[_ngcontent-%COMP%], [_nghost-%COMP%]   td.delete-row-cell[_ngcontent-%COMP%] {\n    display: block;\n  }\n  [_nghost-%COMP%]   td.spare-name-cell[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    text-align: left;\n  }\n  [_nghost-%COMP%]   td.spare-name-cell[_ngcontent-%COMP%]    > .mobile-only[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: 500;\n  }\n  [_nghost-%COMP%]   td.sku-qty-cell[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n  [_nghost-%COMP%]   td.sku-qty-cell[_ngcontent-%COMP%]   .mobile-only[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-weight: 700;\n    margin-left: 0.5em;\n  }\n  [_nghost-%COMP%]   td.sku-qty-cell[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  [_nghost-%COMP%]   td.delete-row-cell[_ngcontent-%COMP%] {\n    display: block;\n    width: calc(100% + 2px);\n    position: absolute;\n    top: 100%;\n    margin: -1px;\n    background-color: transparent;\n  }\n  [_nghost-%COMP%]   td.delete-row-cell[_ngcontent-%COMP%]   .delete-btn.delete-btn[_ngcontent-%COMP%] {\n    background: #eaeaea;\n    padding: 1.5em 0;\n    border-bottom-left-radius: 0.5em;\n    border-bottom-right-radius: 0.5em;\n    border: 1px solid rgba(0, 0, 0, 0.05);\n    border-top: none;\n  }\n  [_nghost-%COMP%]   td.delete-row-cell[_ngcontent-%COMP%]   .delete-btn.delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #666667;\n  }\n  [_nghost-%COMP%]   td.delete-row-cell[_ngcontent-%COMP%]   .delete-btn.delete-btn[disabled][_ngcontent-%COMP%] {\n    opacity: 0.5;\n  }\n}\n.spares-row[_ngcontent-%COMP%] {\n  margin-top: 0.4em;\n  text-align: center;\n}\n.spares-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  padding-right: 0.5em;\n}\n.spares-row[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: white;\n  width: 80px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXF9nbG9iYWx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3BhcmVzLXNrdXMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEB0YXJvcHVtcHNcXGJvb3RzdHJhcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFOzs7O0lBSUUsd0JBQUE7RUNqQkY7O0VEbUJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFiaUI7RUNIbkI7O0VEa0JBO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQ2ZGO0FBQ0Y7QUFkQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBZ0JGO0FBZEU7RUFDRSxjQVR3QjtFQVV4QixrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFnQko7QUFkSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBZ0JOO0FBYkk7RUFDRSxVQUFBO0FBZU47QUFaSTtFQUNFLFVBQUE7QUFjTjtBQVhJO0VBQ0UsU0FBQTtBQWFOO0FBVkk7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBWU47QUFUSTtFQUNFLGFBQUE7QUFXTjtBQVBJO0VBQ0UsU0FBQTtFQUNBLDZCQUFBO0FBU047QUFQUTtFQUNFLHFCQUFBO0FBU1Y7QUFOTTtFQUNFLGVBQUE7QUFRUjtBQUxJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBT047QUFKRTtFQUNFLGtCQUFBO0FBTUo7QUFKSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQU1OO0FBSEk7RUFDRSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0FBS047QUFITTtFQUNFLHFDQUFBO0FBS1I7QUFIUTtFQUNFLDJDQUFBO0FBS1Y7QUFETTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFHUjtBQUFVO0VBQ0UseUNBQUE7QUFFWjtBQUdNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7RUFDQSxnQ0FBQTtBQURSO0FBR1E7RUFDRSxhQ2hIRztBRCtHYjtBQVFBO0VBQ0U7SUFDRSwyQkFBQTtFQUxGO0VBU1E7SUFDRSxVQUFBO0VBUFY7RUFXRTtJQUNFLFdBQUE7RUFUSjtBQUNGO0FBZUE7RUFDRTtJQUNFLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQ0FBQTtJQUNBLG1CQUFBO0VBYkY7RUFlRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUFiSjtFQWVJO0lBSUUsY0FBQTtFQWhCTjtFQW1CSTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtFQWpCTjtFQW1CTTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtFQWpCUjtFQXFCSTtJQUNFLG1CQUFBO0VBbkJOO0VBcUJNO0lBQ0UscUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBbkJSO0VBcUJNO0lBQ0UsbUJBQUE7RUFuQlI7RUF1Qkk7SUFDRSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsNkJBQUE7RUFyQk47RUF1Qk07SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxpQ0FBQTtJQUNBLHFDQUFBO0lBQ0EsZ0JBQUE7RUFyQlI7RUF1QlE7SUFDRSxhQUFBO0VBckJWO0VBd0JRO0lBQ0UsWUFBQTtFQXRCVjtBQUNGO0FBK0JBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQTdCRjtBQStCRTtFQUNFLG9CQUFBO0FBN0JKO0FBK0JJO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQTdCTiIsImZpbGUiOiJzcGFyZXMtc2t1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvQHRhcm9wdW1wcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbiRuYXYtZ3JleTogI2UyZTJlMjtcclxuJHNlYXJjaC1ncmV5OiAjZjJmMmYyO1xyXG4kaGVhZGVyLXBhZGRpbmc6IDIuNXJlbTtcclxuJGhlYWRlci1wYWRkaW5nLXNtOiAxcmVtO1xyXG4kYmFzZS1uYXYtd2lkdGg6IDcuOWVtO1xyXG4kZXhwYW5kZWQtbmF2LXdpZHRoOiAyMGVtO1xyXG4kaGVhZGVyLWhlaWdodDogMTIuNHJlbTtcclxuJG1lbnUtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiRmdW5jdGlvbi1iYXItYnV0dG9uLXBhZGRpbmc6IDFyZW0gMy4zcmVtO1xyXG4kZnVuY3Rpb24tYmFyLWJ1dHRvbi1wYWRkaW5nLXNtOiAxcmVtIDEuN3JlbTtcclxuJGNvbnRlbnQtYXJlYS1jb2xvcjogI2ZmZjtcclxuJHdhcm5pbmc6ICNFQTAwMjk7XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAuYXBwLWhlYWRlcixcclxuICAuZnVuY3Rpb24tYmFyLFxyXG4gIGFwcC1zZWN0aW9uLWhlYWRlcixcclxuICAubWVkaWEtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hcHAtY29udGVudC1hcmVhIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRlbnQtYXJlYS1jb2xvcjtcclxuICB9XHJcbiAgLm1lZGlhLXByaW50IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIHByaW50IHtcbiAgLmFwcC1oZWFkZXIsXG4uZnVuY3Rpb24tYmFyLFxuYXBwLXNlY3Rpb24taGVhZGVyLFxuLm1lZGlhLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcHAtY29udGVudC1hcmVhIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLm1lZGlhLXByaW50IHtcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgdGQge1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCB0ZDpudGgtY2hpbGQoMSkge1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNDAlO1xufVxuOmhvc3QgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDEwJTtcbn1cbjpob3N0IHRkOm50aC1jaGlsZCgzKSB7XG4gIHdpZHRoOiAyMCU7XG59XG46aG9zdCB0ZDpudGgtY2hpbGQoNCkge1xuICB3aWR0aDogNCU7XG59XG46aG9zdCB0ZDpudGgtY2hpbGQoNCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgdGQgLm1vYmlsZS1vbmx5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC5za3UtcXR5LWNlbGwgYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5za3UtcXR5LWNlbGwgYnV0dG9uOmhvdmVyIHN2ZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbjpob3N0IC5za3UtcXR5LWNlbGwgYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbjpob3N0IC5za3UtcXR5LWNlbGwgLmFsZXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwJTtcbiAgei1pbmRleDogOTk5O1xufVxuOmhvc3QgLmRlbGV0ZS1yb3ctY2VsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5kZWxldGUtcm93LWNlbGwgLnNwaW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbjpob3N0IC5kZWxldGUtcm93LWNlbGwgLmRlbGV0ZS1idG4ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG46aG9zdCAuZGVsZXRlLXJvdy1jZWxsIC5kZWxldGUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3KTtcbn1cbjpob3N0IC5kZWxldGUtcm93LWNlbGwgLmRlbGV0ZS1idG46aG92ZXIgc3ZnIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xKTtcbn1cbjpob3N0IC5kZWxldGUtcm93LWNlbGwgLmRlbGV0ZS1idG5bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC4zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuOmhvc3QgLmRlbGV0ZS1yb3ctY2VsbCAuZGVsZXRlLWJ0bltkaXNhYmxlZF06aG92ZXIgc3ZnIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG46aG9zdCAuZGVsZXRlLXJvdy1jZWxsIC5kZWxldGUtYnRuIHN2ZyB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAuZGVsZXRlLXJvdy1jZWxsIC5kZWxldGUtYnRuIHN2ZyBwYXRoIHtcbiAgZmlsbDogIzQyNDI0NDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICA6aG9zdCB0ZDpudGgtY2hpbGQoMykge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgOmhvc3QgLnNwYXJlcy1yb3cgLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG4gIDpob3N0IHRkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIDpob3N0IHRkLnNwYXJlLW5hbWUtY2VsbCwgOmhvc3QgdGQuc2t1LXF0eS1jZWxsLCA6aG9zdCB0ZC5xdHktYnRuLCA6aG9zdCB0ZC5kZWxldGUtcm93LWNlbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIDpob3N0IHRkLnNwYXJlLW5hbWUtY2VsbCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgOmhvc3QgdGQuc3BhcmUtbmFtZS1jZWxsID4gLm1vYmlsZS1vbmx5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIDpob3N0IHRkLnNrdS1xdHktY2VsbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICA6aG9zdCB0ZC5za3UtcXR5LWNlbGwgLm1vYmlsZS1vbmx5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIH1cbiAgOmhvc3QgdGQuc2t1LXF0eS1jZWxsIC5hbGVydCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuICA6aG9zdCB0ZC5kZWxldGUtcm93LWNlbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAycHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIDpob3N0IHRkLmRlbGV0ZS1yb3ctY2VsbCAuZGVsZXRlLWJ0bi5kZWxldGUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICAgIHBhZGRpbmc6IDEuNWVtIDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuICA6aG9zdCB0ZC5kZWxldGUtcm93LWNlbGwgLmRlbGV0ZS1idG4uZGVsZXRlLWJ0biBzdmcgcGF0aCB7XG4gICAgZmlsbDogIzY2NjY2NztcbiAgfVxuICA6aG9zdCB0ZC5kZWxldGUtcm93LWNlbGwgLmRlbGV0ZS1idG4uZGVsZXRlLWJ0bltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuLnNwYXJlcy1yb3cge1xuICBtYXJnaW4tdG9wOiAwLjRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNwYXJlcy1yb3cgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbn1cbi5zcGFyZXMtcm93IC5mb3JtLWNvbnRyb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSIsIiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIktvaGlub29yXCIsIFwiT3BlbiBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIFwiR2lsbCBTYW5zXCIsIENvcmJlbCwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRib2R5LWNvbG9yOiAjNDI0MjQ0ICFkZWZhdWx0O1xuJGdyZWVuOiAjNkE5NTVCICFkZWZhdWx0O1xuJGdyZWVuLWZhZGVkOiAjRDFERUNEO1xuJHJlZDogI0ZGNDIyRSAhZGVmYXVsdDtcbiRyZWQtbGlnaHQ6ICNGRkQ5RDUgIWRlZmF1bHQ7XG4kcmVkLWRhcms6ICM5OTQ0NEYgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiA2cHg7XG5cbiRwcmltYXJ5OiAkZ3JlZW47XG5cbiRhbGVydC1ib3JkZXItd2lkdGg6IDA7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogNnB4O1xuJGFsZXJ0LXBhZGRpbmcteDogMS41cmVtO1xuJGFsZXJ0LXBhZGRpbmcteTogMS4ycmVtO1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogIC43NXJlbTtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAzLjc1cmVtO1xuXG4kdG9hc3Qtei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiR0b2FzdC1kdXJhdGlvbjogMzAwMG1zICFkZWZhdWx0O1xuJHRvYXN0LWhlaWdodDogOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1oZWlnaHQtc206IDUuOHJlbSAhZGVmYXVsdDtcbiR0b2FzdC1icmVha3BvaW50OiA3NjhweCAhZGVmYXVsdDsiXX0= */"]
      });
      /***/
    },

    /***/
    "mymk":
    /*!**********************************!*\
      !*** ./src/utils/stringUtils.ts ***!
      \**********************************/

    /*! exports provided: stringCamelize */

    /***/
    function mymk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stringCamelize", function () {
        return stringCamelize;
      });

      function stringCamelize(str) {
        str = str.toLocaleLowerCase();
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
          return word.toUpperCase();
        }).replace(/\s+/g, ' ');
      }
      /***/

    },

    /***/
    "wyWS":
    /*!***********************************************************!*\
      !*** ./src/app/work-orders/work-orders-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: routes, WorkOrdersRoutingModule */

    /***/
    function wyWS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkOrdersRoutingModule", function () {
        return WorkOrdersRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _work_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./work-orders.component */
      "fg9g");
      /* harmony import */


      var _view_workorder_view_workorder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-workorder/view-workorder.component */
      "WQq8");
      /* harmony import */


      var _pick_workorder_spares_pick_workorder_spares_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pick-workorder-spares/pick-workorder-spares.component */
      "ZCnb");
      /* harmony import */


      var _create_work_order_create_work_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./create-work-order/create-work-order.component */
      "6pNi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _work_orders_component__WEBPACK_IMPORTED_MODULE_1__["WorkOrdersComponent"]
      }, {
        path: 'create-work-order',
        component: _create_work_order_create_work_order_component__WEBPACK_IMPORTED_MODULE_4__["CreateWorkOrderComponent"]
      }, {
        path: ':id',
        component: _view_workorder_view_workorder_component__WEBPACK_IMPORTED_MODULE_2__["ViewWorkorderComponent"]
      }, {
        path: ':id/PickSpares',
        component: _pick_workorder_spares_pick_workorder_spares_component__WEBPACK_IMPORTED_MODULE_3__["PickWorkOrderSparesComponent"]
      }];

      var WorkOrdersRoutingModule = /*#__PURE__*/_createClass(function WorkOrdersRoutingModule() {
        _classCallCheck(this, WorkOrdersRoutingModule);
      });

      WorkOrdersRoutingModule.ɵfac = function WorkOrdersRoutingModule_Factory(t) {
        return new (t || WorkOrdersRoutingModule)();
      };

      WorkOrdersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: WorkOrdersRoutingModule
      });
      WorkOrdersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WorkOrdersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=work-orders-work-orders-module-es5.js.map