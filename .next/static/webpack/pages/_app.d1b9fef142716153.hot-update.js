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

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var C_Users_tekin_OneDrive_Masa_st_pass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tekin_OneDrive_Masa_st_pass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tekin_OneDrive_Masa_st_pass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/header.module.scss */ \"./styles/header.module.scss\");\n/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/const */ \"./public/const.js\");\n/* harmony import */ var _public_scripts_walletInteract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/scripts/walletInteract */ \"./public/scripts/walletInteract.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), walletAddress = ref[0], setWalletAddress = ref[1];\n    var connectWalletPressed = function() {\n        var _ref = _asyncToGenerator(C_Users_tekin_OneDrive_Masa_st_pass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var walletResponse;\n            return C_Users_tekin_OneDrive_Masa_st_pass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_public_scripts_walletInteract__WEBPACK_IMPORTED_MODULE_4__.connectWallet)();\n                    case 2:\n                        walletResponse = _ctx.sent;\n                        if (window.ethereum.chainId == _public_const__WEBPACK_IMPORTED_MODULE_3__.chainId) {\n                            setWalletAddress(walletResponse.address);\n                        } else {\n                            setWalletAddress(\"\");\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function connectWalletPressed() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var prepare = function() {\n            var _ref = _asyncToGenerator(C_Users_tekin_OneDrive_Masa_st_pass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var walletResponse;\n                return C_Users_tekin_OneDrive_Masa_st_pass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!(window.ethereum.chainId == _public_const__WEBPACK_IMPORTED_MODULE_3__.chainId)) {\n                                _ctx.next = 7;\n                                break;\n                            }\n                            _ctx.next = 3;\n                            return (0,_public_scripts_walletInteract__WEBPACK_IMPORTED_MODULE_4__.getCurrentWalletConnected)();\n                        case 3:\n                            walletResponse = _ctx.sent;\n                            setWalletAddress(walletResponse.address);\n                            _ctx.next = 8;\n                            break;\n                        case 7:\n                            {\n                                setWalletAddress(\"\");\n                            }\n                        case 8:\n                            addWalletListener();\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function prepare() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        prepare();\n    }, []);\n    var addWalletListener = function() {\n        if (window.ethereum) {\n            window.ethereum.on(\"chainChanged\", function() {\n                var _ref = _asyncToGenerator(C_Users_tekin_OneDrive_Masa_st_pass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(wchainId) {\n                    return C_Users_tekin_OneDrive_Masa_st_pass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                console.log(\"chainchanged\");\n                                if (wchainId == _public_const__WEBPACK_IMPORTED_MODULE_3__.chainId) {\n                                    setWalletAddress(window.ethereum.selectedAddress);\n                                } else {\n                                    setWalletAddress(\"\");\n                                }\n                            case 2:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function(wchainId) {\n                    return _ref.apply(this, arguments);\n                };\n            }());\n            window.ethereum.on(\"accountsChanged\", function() {\n                var _ref = _asyncToGenerator(C_Users_tekin_OneDrive_Masa_st_pass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(accounts) {\n                    return C_Users_tekin_OneDrive_Masa_st_pass_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                console.log(\"account change\");\n                                location.reload();\n                                setWalletAddress(\"\");\n                            case 3:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return function(accounts) {\n                    return _ref.apply(this, arguments);\n                };\n            }());\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"row row-flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"col-6 left\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    src: \"/assets/img/logo.png\",\n                                    alt: \"Logo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\pass\\\\components\\\\header.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\pass\\\\components\\\\header.js\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\pass\\\\components\\\\header.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"col-6 right\",\n                            children: walletAddress ? \"Connected: \" + String(walletAddress).substring(0, 6) + \"...\" + String(walletAddress).substring(38) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: connectWalletPressed,\n                                    className: \"btn\",\n                                    children: \"Connect Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\pass\\\\components\\\\header.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\pass\\\\components\\\\header.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\pass\\\\components\\\\header.js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\pass\\\\components\\\\header.js\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\pass\\\\components\\\\header.js\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tekin\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\pass\\\\components\\\\header.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n};\n_s(Header, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNOLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxhQUFhO3NDQUMzQmxCLGFBQWEsR0FDTixhQUFhLEdBQ2J3QixNQUFNLENBQUN4QixhQUFhLENBQUMsQ0FBQ3lCLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQ3JDLEtBQUssR0FDTEQsTUFBTSxDQUFDeEIsYUFBYSxDQUFDLENBQUN5QixTQUFTLENBQUMsRUFBRSxDQUFDLGlCQUUzQzswQ0FDSSw0RUFBQ0MsUUFBTTtvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUNDLE9BQU8sRUFBRTFCLG9CQUFvQjtvQ0FBRWdCLFNBQVMsRUFBQyxLQUFLOzhDQUFDLGdCQUFjOzs7Ozt3Q0FBUzs2Q0FDN0Y7Ozs7O2dDQUVHOzs7Ozs7d0JBQ0o7OEJBQ04sOERBQUNXLElBQUU7Ozs7d0JBQUU7Ozs7OztnQkFDSDs7Ozs7WUFDSixDQUNUO0NBQ0o7R0F2RXVCOUIsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzP2MwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjaGFpbklkIH0gZnJvbSAnLi4vcHVibGljL2NvbnN0JztcclxuaW1wb3J0IHsgY29ubmVjdFdhbGxldCwgZ2V0Q3VycmVudFdhbGxldENvbm5lY3RlZH0gZnJvbSAnLi4vcHVibGljL3NjcmlwdHMvd2FsbGV0SW50ZXJhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTsgICBcclxuICAgIGNvbnN0IGNvbm5lY3RXYWxsZXRQcmVzc2VkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB3YWxsZXRSZXNwb25zZSA9IGF3YWl0IGNvbm5lY3RXYWxsZXQoKTtcclxuICAgICAgaWYod2luZG93LmV0aGVyZXVtLmNoYWluSWQgPT0gY2hhaW5JZCl7XHJcbiAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyh3YWxsZXRSZXNwb25zZS5hZGRyZXNzKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhcIlwiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByZXBhcmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBpZih3aW5kb3cuZXRoZXJldW0uY2hhaW5JZCA9PSBjaGFpbklkKXtcclxuICAgICAgICAgICAgY29uc3Qgd2FsbGV0UmVzcG9uc2UgPSBhd2FpdCBnZXRDdXJyZW50V2FsbGV0Q29ubmVjdGVkKCk7XHJcbiAgICAgICAgICAgIHNldFdhbGxldEFkZHJlc3Mod2FsbGV0UmVzcG9uc2UuYWRkcmVzcyk7XHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFdhbGxldEFkZHJlc3MoXCJcIik7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhZGRXYWxsZXRMaXN0ZW5lcigpO1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICBwcmVwYXJlKCk7IFxyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgYWRkV2FsbGV0TGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICAgICAgd2luZG93LmV0aGVyZXVtLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIGFzeW5jICh3Y2hhaW5JZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYWluY2hhbmdlZFwiKVxyXG4gICAgICAgICAgICBpZiAod2NoYWluSWQgPT0gY2hhaW5JZCkge1xyXG4gICAgICAgICAgICAgIHNldFdhbGxldEFkZHJlc3Mod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgYXN5bmMgKGFjY291bnRzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjb3VudCBjaGFuZ2VcIilcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhcIlwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2xvZ28ucG5nXCIgYWx0PVwiTG9nb1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3YWxsZXRBZGRyZXNzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb25uZWN0ZWQ6IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh3YWxsZXRBZGRyZXNzKS5zdWJzdHJpbmcoMCwgNikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuLi5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcod2FsbGV0QWRkcmVzcykuc3Vic3RyaW5nKDM4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXRQcmVzc2VkfSBjbGFzc05hbWU9J2J0bic+Q29ubmVjdCBXYWxsZXQ8L2J1dHRvbj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNoYWluSWQiLCJjb25uZWN0V2FsbGV0IiwiZ2V0Q3VycmVudFdhbGxldENvbm5lY3RlZCIsIkhlYWRlciIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwiY29ubmVjdFdhbGxldFByZXNzZWQiLCJ3YWxsZXRSZXNwb25zZSIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWRkcmVzcyIsInByZXBhcmUiLCJhZGRXYWxsZXRMaXN0ZW5lciIsIm9uIiwid2NoYWluSWQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWRBZGRyZXNzIiwiYWNjb3VudHMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImxvZ28iLCJpbWciLCJzcmMiLCJhbHQiLCJTdHJpbmciLCJzdWJzdHJpbmciLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

});