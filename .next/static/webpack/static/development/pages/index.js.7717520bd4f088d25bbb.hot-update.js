webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DeleteItem.js":
/*!**********************************!*\
  !*** ./components/DeleteItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Items */ "./components/Items.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
var _jsxFileName = "/home/martina/Documents/nakala-threads/frontend/components/DeleteItem.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tmutation DELETE_ITEM_MUTATION(id: ID!){\n\t\tdeleteItem(id: $id){\n\t\t\tid\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var DELETE_ITEM_MUTATION = gql(_templateObject());

var DeleteItem = function DeleteItem(props) {
  var id = props.id,
      children = props.children;

  var _update = function update(cache, payload) {
    //cache & payload accessible via Apollo
    var data = cache.readQuery({
      query: _Items__WEBPACK_IMPORTED_MODULE_2__["ALL_ITEMS_QUERY"]
    }); // console.log(data, payload);

    data.items = data.items.filter(function (item) {
      return item.id !== payload.data.deleteItem.id;
    });
    cache.writeQuery({
      query: _Items__WEBPACK_IMPORTED_MODULE_2__["ALL_ITEMS_QUERY"],
      data: data
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: DELETE_ITEM_MUTATION,
    variables: {
      id: id
    },
    update: function update() {
      return _update();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, function (deleteItem, _ref) {
    var error = _ref.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-lg text-secondary",
      onClick: function onClick() {
        confirm('Are you sure you want to delete this item?') && deleteItem();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteItem);

/***/ })

})
//# sourceMappingURL=index.js.7717520bd4f088d25bbb.hot-update.js.map