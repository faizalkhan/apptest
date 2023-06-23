(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "svQ6":
    /*!*************************************!*\
      !*** ./src/utils/formValidators.ts ***!
      \*************************************/

    /*! exports provided: fileListFileTypeValidator, fileListFileSizesValidator, fileListNumberOfFilesValidator, minSelectedCheckboxes */

    /***/
    function svQ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fileListFileTypeValidator", function () {
        return fileListFileTypeValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fileListFileSizesValidator", function () {
        return fileListFileSizesValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fileListNumberOfFilesValidator", function () {
        return fileListNumberOfFilesValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "minSelectedCheckboxes", function () {
        return minSelectedCheckboxes;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      function fileListFileTypeValidator(mimeTypesOrFileExtensions) {
        return function (control) {
          var files = control.value;

          if (files) {
            var getFileExtension = function getFileExtension(x) {
              return x.split('.').pop();
            };

            var isAcceptable = function isAcceptable(file) {
              var extension = '';

              if (file.name) {
                extension = getFileExtension(file.name);
              }

              return mimeTypesOrFileExtensions.includes(file.type) && mimeTypesOrFileExtensions.includes(extension) || mimeTypesOrFileExtensions.includes(extension);
            };

            if (!Array.from(files).every(isAcceptable)) {
              return {
                acceptableFileType: true
              };
            }

            return null;
          }

          return null;
        };
      }

      function fileListFileSizesValidator(maxSizeBytes) {
        return function (control) {
          var files = control.value;

          if (files) {
            var isAcceptable = function isAcceptable(file) {
              return file.size < maxSizeBytes;
            };

            if (!Array.from(files).every(isAcceptable)) {
              return {
                acceptableFileSize: true
              };
            }

            return null;
          }

          return null;
        };
      }

      function fileListNumberOfFilesValidator(maxNumberOfFiles) {
        return function (control) {
          var files = control.value;

          if (files) {
            if (files.length > maxNumberOfFiles) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
                acceptableNumberOfFiles: true
              });
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        };
      }

      function minSelectedCheckboxes() {
        var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        var validator = function validator(formArray) {
          var totalSelected = formArray.controls.map(function (control) {
            return control.value;
          }).reduce(function (prev, next) {
            return next ? prev + next : prev;
          }, 0);
          return totalSelected >= min ? null : {
            required: true
          };
        };

        return validator;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map