"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Mark_Desktop_FOODNESS_main_fb_FOODNESS_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Mark_Desktop_FOODNESS_main_fb_FOODNESS_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Mark_Desktop_FOODNESS_main_fb_FOODNESS_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_context_UserAuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/context/UserAuthContext */ \"./pages/context/UserAuthContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Navbar = function() {\n    var redirectToUserPage = function redirectToUserPage() {\n        router.push(\"/admin\");\n    };\n    var userInfo = function userInfo() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            class: \"flex space-x-2 justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: redirectToUserPage,\n                        type: \"button\",\n                        class: \"h-16 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-60\",\n                        disabled: true,\n                        children: \"Primary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleLogOut,\n                        type: \"button\",\n                        class: \"inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-60\",\n                        disabled: true,\n                        children: \"Secondary\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n            lineNumber: 39,\n            columnNumber: 17\n        }, this);\n    };\n    _s();\n    var cart2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(state) {\n        return state.cart.value;\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref2 = (0,_pages_context_UserAuthContext__WEBPACK_IMPORTED_MODULE_4__.useUserAuth1)(), user = ref2.user, logOut = ref2.logOut;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0), isSSR = ref1[0], setIsSSR = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        var ref;\n        var cartLength = ((ref = cart2.cart) === null || ref === void 0 ? void 0 : ref.length) ? cart2.cart.length : 0;\n        setIsSSR(cartLength / 4);\n    }, [\n        cart2\n    ]);\n    var handleLogOut = function() {\n        var _ref = _asyncToGenerator(C_Users_Mark_Desktop_FOODNESS_main_fb_FOODNESS_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_Mark_Desktop_FOODNESS_main_fb_FOODNESS_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return logOut();\n                    case 3:\n                        _ctx.next = 8;\n                        break;\n                    case 5:\n                        _ctx.prev = 5;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    5\n                ]\n            ]);\n        }));\n        return function handleLogOut() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().item),\n                children: user ? userInfo() : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().profile),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/login\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/img/profile.png\",\n                            alt: \"\",\n                            width: \"55\",\n                            height: \"55\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 38\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().item),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().list),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                children: \"Homepage\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/meniu\",\n                                children: \"Meniu\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/produse\",\n                                children: \"Produse\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/img/logo.png\",\n                            alt: \"\",\n                            width: \"160px\",\n                            height: \"150px\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/about\",\n                                children: \"Despre\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/blog\",\n                                children: \"Blog\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().item),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().texts),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().text),\n                                children: \"COMANDA ONLINE SAU TELEFONIC\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().text),\n                                children: \"074 709 1311\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().cart),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/cart\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/img/cart.png\",\n                                    alt: \"\",\n                                    width: \"30px\",\n                                    height: \"30px\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().counter),\n                                children: isSSR\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mark\\\\Desktop\\\\FOODNESS-main-fb\\\\FOODNESS-main\\\\components\\\\Navbar.jsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navbar, \"0xxfoKIGd/un7eLxN0s1/Aklpxk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _pages_context_UserAuthContext__WEBPACK_IMPORTED_MODULE_4__.useUserAuth1\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7Z0JBQUNtQixTQUFTLEVBQUVoQyx1RUFBVzs7a0NBQ3ZCLDhEQUFDYSxLQUFHO3dCQUFDbUIsU0FBUyxFQUFFaEMsd0VBQVk7OzBDQUN4Qiw4REFBQ2EsS0FBRztnQ0FBQ21CLFNBQVMsRUFBRWhDLHVFQUFXOzBDQUFFLDhCQUE0Qjs7Ozs7cUNBQU07MENBQy9ELDhEQUFDYSxLQUFHO2dDQUFDbUIsU0FBUyxFQUFFaEMsdUVBQVc7MENBQUUsY0FBWTs7Ozs7cUNBQU07Ozs7Ozs2QkFDN0M7a0NBQ04sOERBQUNhLEtBQUc7d0JBQUNtQixTQUFTLEVBQUVoQyx1RUFBVzs7MENBQ3ZCLDhEQUFDQyxrREFBSTtnQ0FBQ21DLElBQUksRUFBQyxPQUFPOzBDQUNkLDRFQUFDckMsbURBQUs7b0NBQUNzQyxHQUFHLEVBQUMsZUFBZTtvQ0FBQ0MsR0FBRyxFQUFDLEVBQUU7b0NBQUNDLEtBQUssRUFBQyxNQUFNO29DQUFDQyxNQUFNLEVBQUMsTUFBTTs7Ozs7eUNBQUc7Ozs7O3FDQUM1RDswQ0FDUCw4REFBQzNCLEtBQUc7Z0NBQUNtQixTQUFTLEVBQUVoQywwRUFBYzswQ0FBRzBCLEtBQUs7Ozs7O3FDQUFPOzs7Ozs7NkJBQzNDOzs7Ozs7cUJBQ0o7Ozs7OzthQUNKLENBQ1Q7Q0FDSjtHQTVGS2xCLE1BQU07O1FBQ01ELG9EQUFXO1FBQ1ZKLGtEQUFTO1FBQ0RELHdFQUFZOzs7QUFIakNNLEtBQUFBLE1BQU07QUE4RlosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4PzNhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlVXNlckF1dGgxIH0gZnJvbSBcIi4uL3BhZ2VzL2NvbnRleHQvVXNlckF1dGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhcnQyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0LnZhbHVlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBsZXQgeyB1c2VyLCBsb2dPdXQgfSA9IHVzZVVzZXJBdXRoMSgpO1xyXG5cclxuICAgIGNvbnN0IFtpc1NTUiwgc2V0SXNTU1JdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXJ0TGVuZ3RoID0gY2FydDIuY2FydD8ubGVuZ3RoID8gY2FydDIuY2FydC5sZW5ndGggOiAwXHJcbiAgICAgICAgc2V0SXNTU1IoY2FydExlbmd0aCAvIDQpO1xyXG5cclxuICAgIH0sIFtjYXJ0Ml0pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGxvZ091dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0VG9Vc2VyUGFnZSgpIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2FkbWluJylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1c2VySW5mbygpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzPVwiZmxleCBzcGFjZS14LTIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVkaXJlY3RUb1VzZXJQYWdlfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJoLTE2IGlubGluZS1ibG9jayBweC02IHB5LTIuNSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHRleHQteHMgbGVhZGluZy10aWdodCB1cHBlcmNhc2Ugcm91bmRlZCBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBwb2ludGVyLWV2ZW50cy1ub25lIG9wYWNpdHktNjBcIiBkaXNhYmxlZD5QcmltYXJ5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ091dH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaW5saW5lLWJsb2NrIHB4LTYgcHktMi41IGJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdXBwZXJjYXNlIHJvdW5kZWQgc2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgcG9pbnRlci1ldmVudHMtbm9uZSBvcGFjaXR5LTYwXCIgZGlzYWJsZWQ+U2Vjb25kYXJ5PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgICAgICAge3VzZXIgPyB1c2VySW5mbygpIDogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3Byb2ZpbGUucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCI1NVwiIGhlaWdodD1cIjU1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWVwYWdlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tZW5pdVwiPk1lbml1PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdXNlXCI+UHJvZHVzZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2xvZ28ucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIxNjBweFwiIGhlaWdodD1cIjE1MHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkRlc3ByZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPkJsb2c8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+Q09NQU5EQSBPTkxJTkUgU0FVIFRFTEVGT05JQzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+MDc0IDcwOSAxMzExPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2NhcnQucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIzMHB4XCIgaGVpZ2h0PVwiMzBweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRlcn0+e2lzU1NSfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJMaW5rIiwidXNlVXNlckF1dGgxIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiTmF2YmFyIiwicmVkaXJlY3RUb1VzZXJQYWdlIiwicm91dGVyIiwicHVzaCIsInVzZXJJbmZvIiwiZGl2IiwiY2xhc3MiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSIsImRpc2FibGVkIiwiaGFuZGxlTG9nT3V0IiwiY2FydDIiLCJzdGF0ZSIsImNhcnQiLCJ2YWx1ZSIsInVzZXIiLCJsb2dPdXQiLCJpc1NTUiIsInNldElzU1NSIiwiY2FydExlbmd0aCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpdGVtIiwicHJvZmlsZSIsImhyZWYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVsIiwibGlzdCIsImxpIiwibGlzdEl0ZW0iLCJ0ZXh0cyIsInRleHQiLCJjb3VudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n");

/***/ })

});