(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "svQ6":
/*!*************************************!*\
  !*** ./src/utils/formValidators.ts ***!
  \*************************************/
/*! exports provided: fileListFileTypeValidator, fileListFileSizesValidator, fileListNumberOfFilesValidator, minSelectedCheckboxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileListFileTypeValidator", function() { return fileListFileTypeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileListFileSizesValidator", function() { return fileListFileSizesValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileListNumberOfFilesValidator", function() { return fileListNumberOfFilesValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minSelectedCheckboxes", function() { return minSelectedCheckboxes; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

function fileListFileTypeValidator(mimeTypesOrFileExtensions) {
    return function (control) {
        const files = control.value;
        if (files) {
            const getFileExtension = (x) => x.split('.').pop();
            const isAcceptable = (file) => {
                let extension = '';
                if (file.name) {
                    extension = getFileExtension(file.name);
                }
                return ((mimeTypesOrFileExtensions.includes(file.type) && mimeTypesOrFileExtensions.includes(extension)) ||
                    mimeTypesOrFileExtensions.includes(extension));
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
        const files = control.value;
        if (files) {
            const isAcceptable = (file) => file.size < maxSizeBytes;
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
        const files = control.value;
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
function minSelectedCheckboxes(min = 1) {
    const validator = (formArray) => {
        const totalSelected = formArray.controls
            .map(control => control.value)
            .reduce((prev, next) => next ? prev + next : prev, 0);
        return totalSelected >= min ? null : { required: true };
    };
    return validator;
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map