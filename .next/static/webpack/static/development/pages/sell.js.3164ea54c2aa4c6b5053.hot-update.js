webpackHotUpdate("static/development/pages/sell.js",{

/***/ "./components/CreateItem.js":
/*!**********************************!*\
  !*** ./components/CreateItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "/home/martina/Documents/nakala-threads/frontend/components/CreateItem.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tmutation CREATE_ITEM_MUTATION(\n\t\t$title: String!\n\t\t$description: String!\n\t\t$price: Int!\n\t\t$image: String\n\t\t$largeImage: String\n\t) {\n\t\tcreateItem(\n\t\t\ttitle: $title\n\t\t\tdescription: $description\n\t\t\tprice: $price\n\t\t\timage: $image\n\t\t\tlargeImage: $largeImage\n\t\t) {\n\t\t\tid\t\t\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





 // import formatMoney from '../lib/formatMoney';


var CREATE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var CreateItem = function CreateItem() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // handleChange = e => {
  // 	const { name, type, value } = e.target;
  // 	const val = type === 'number' ? parseFloat(value) : value;
  // 	setState({ [name]: val });
  // }


  var handleChange = function handleChange(e) {
    var copiedState = _objectSpread({}, state);

    var _e$target = e.target,
        name = _e$target.name,
        type = _e$target.type,
        value = _e$target.value;
    var val = type === 'number' ? parseFloat(value) : value;
    copiedState[name] = val;
    setState(copiedState);
  };

  var uploadFile =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var file, data, res, img;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = e.target.file[0];
              data = new FormData();
              data.append('file', file);
              data.append('upload_preset', 'nakala-threads');
              _context.next = 6;
              return fetch('https://api.cloudinary.com/v1_1/stphn/image/upload', {
                method: 'POST',
                body: data
              });

            case 6:
              res = _context.sent;
              _context.next = 9;
              return res.json();

            case 9:
              img = _context.sent;
              setState({
                image: img.secure_url,
                largeImage: img.eager[0].secure_url
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function uploadFile(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
    mutation: CREATE_ITEM_MUTATION,
    variables: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, function (createItem, _ref2) {
    var loading = _ref2.loading,
        error = _ref2.error;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "wow zoomIn",
      "data-wow-delay": "150ms",
      "data-wow-duration": "850ms",
      onSubmit:
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
          var res;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  e.preventDefault();
                  _context2.next = 3;
                  return createItem();

                case 3:
                  res = _context2.sent;
                  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
                    pathname: '/item',
                    query: {
                      id: res.data.createItem.id
                    }
                  });

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "text-center text-secondary wow fadeInDown",
      "data-wow-delay": "250ms",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Upload an item to your store"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row wow fadeInDown",
      "data-wow-delay": "350ms",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-12 col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-12 col-md-9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      id: "title",
      name: "title",
      placeholder: "Title",
      required: true,
      value: state.title,
      className: "form-control",
      onChange: function onChange(e) {
        return handleChange(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row wow fadeInDown",
      "data-wow-delay": "600ms",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-12 col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Price")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-12 col-md-9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "number",
      id: "price",
      name: "price",
      required: true,
      value: state.price,
      className: "form-control",
      onChange: function onChange(e) {
        return handleChange(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row wow fadeInDown",
      "data-wow-delay": "850ms",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-12 col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Description")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-12 col-md-9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
      id: "description",
      name: "description",
      rows: "3",
      placeholder: "Description",
      required: true,
      value: state.description,
      className: "form-control",
      onChange: function onChange(e) {
        return handleChange(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row wow fadeInDown",
      "data-wow-delay": "1100ms",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-12 col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "Image")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-12 col-sm-12 offset-md-1 col-md-7 custom-file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "file",
      id: "file",
      name: "file",
      placeholder: "Select a file",
      required: true,
      className: "custom-file-input form-control-file form-control-sm",
      onChange: function onChange(e) {
        return uploadFile(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-file-label text-secondary",
      htmlFor: "file",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "text-center offset-4 col-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, state.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: state.image,
      alt: "Upload preview",
      width: "150",
      className: "img-fluid rounded mx-auto d-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "d-flex justify-content-center wow flipInX",
      "data-wow-delay": "950ms",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      className: "btn-block btn text-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Submit"))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateItem);
/*
export default class CreateItem extends Component {
	state = {
		title: '',
		description: '',
		image: '',
		largeImage: '',
		price: 0,
	}
	
	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	}
	
	uploadFile = async e => {
		const file = e.target.files[0];
		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', 'nakala-threads');	// for Cloudinary
		// hit Cloudinary api endpoint
		const res = await fetch('https://api.cloudinary.com/v1_1/stphn/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);
		const img = await res.json();
		this.setState({
			image: img.secure_url,
			largImg: img.eager[0].secure_url, 
		});	
	}
	
	render() {
		return (
			<Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
				{(createItem, {loading, error}) => (
					<Form className="wow zoomIn" data-wow-delay="150ms"
						data-wow-duration="850ms"
						onSubmit={
							async e => { 
								e.preventDefault(); 
								const res = await createItem(); 
								Router.push({
									pathname: '/item',
									query: { id: res.data.createItem.id },
								});
							}
						}
					>
						<br />
						<h2 className="text-center text-secondary wow fadeInDown" 
							data-wow-delay="250ms"
						>
							Upload an item to your store
						</h2>
						<br />	
						<ErrorMessage error={error} />
						<fieldset disabled={loading} aria-busy={loading} >
							<br/><br />
							<div className="row wow fadeInDown" data-wow-delay="350ms">
								<div className="col-sm-12 col-md-3">
									<label htmlFor="title">Title</label>
								</div>
								<div className="col-sm-12 col-md-9">
									<input type="text" id="title" name="title"
										placeholder="Title" required value={this.state.title}
										className="form-control" onChange={this.handleChange}
									/>
								</div>
							</div>
							<br />
							<div className="row wow fadeInDown" data-wow-delay="600ms">
								<div className="col-sm-12 col-md-3">
									<label htmlFor="price">Price</label>
								</div>
								<div className="col-sm-12 col-md-9">
									<input type="number" id="price" name="price"
										required value={this.state.price}
										className="form-control" onChange={this.handleChange}
									/>
								</div>
							</div>
							<br />
							<div className="row wow fadeInDown" data-wow-delay="850ms">
								<div className="col-sm-12 col-md-3">
									<label htmlFor="description">Description</label>
								</div>
								<div className="col-sm-12 col-md-9">
									<textarea id="description" name="description" rows="3"
										placeholder="Description" required value={this.state.description}
										className="form-control" onChange={this.handleChange}
									/>
								</div>
							</div>
							<br />
							<div className="row wow fadeInDown" data-wow-delay="1100ms">
								<div className="col-sm-12 col-md-3">
									<label htmlFor="file">Image</label>
								</div>
								<div className="col-12 col-sm-12 offset-md-1 col-md-7 custom-file">
									<input type="file" id="file" name="file"
										placeholder="Select a file" required
										className="custom-file-input form-control-file form-control-sm"
										onChange={this.uploadFile}
									/>
									<label className="custom-file-label text-secondary" htmlFor="file">
										
									</label>
								</div>
							</div>
							<br />
							<div className="row">
								<div className="text-center offset-4 col-4">
									{
										this.state.image &&
										<img src={this.state.image} alt="Upload preview" 
										width="150"
										className="img-fluid rounded mx-auto d-block"
										/>
									}
								</div>
							</div>
							<br />
							<div className="d-flex justify-content-center wow flipInX" 
								data-wow-delay="950ms"
							>
								<button type="submit" className="btn-block btn text-light">
									Submit
								</button>
							</div>
						</fieldset>
					</Form>
				)}
			</Mutation>
		);
	}
}

export { CREATE_ITEM_MUTATION };

*/

/***/ })

})
//# sourceMappingURL=sell.js.3164ea54c2aa4c6b5053.hot-update.js.map