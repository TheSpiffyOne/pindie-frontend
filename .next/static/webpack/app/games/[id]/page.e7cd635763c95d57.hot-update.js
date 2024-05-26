"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/games/[id]/page",{

/***/ "(app-pages-browser)/./app/games/[id]/page.js":
/*!********************************!*\
  !*** ./app/games/[id]/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GamePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Game_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.module.css */ \"(app-pages-browser)/./app/games/[id]/Game.module.css\");\n/* harmony import */ var _Game_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Game_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/config */ \"(app-pages-browser)/./app/api/config.js\");\n/* harmony import */ var _app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/api/api-utils */ \"(app-pages-browser)/./app/api/api-utils.js\");\n/* harmony import */ var _components_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Preloader/Preloader */ \"(app-pages-browser)/./app/components/Preloader/Preloader.jsx\");\n/* harmony import */ var _app_store_app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/store/app-store */ \"(app-pages-browser)/./app/store/app-store.js\");\n/* harmony import */ var _app_components_GameNotFound_GameNotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/components/GameNotFound/GameNotFound */ \"(app-pages-browser)/./app/components/GameNotFound/GameNotFound.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction GamePage(props) {\n    _s();\n    const [preloaderVisible, setPreloaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [game, setGame] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [isVoted, setIsVoted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { openPopup, checkIsAuthorized, currentUser, isAuthorized } = (0,_app_store_app_store__WEBPACK_IMPORTED_MODULE_6__.useStore)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchData() {\n            const game = await (0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.getNormalizedGameDataById)(_api_config__WEBPACK_IMPORTED_MODULE_3__.endpoints.games, props.params.id);\n            (0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.isResponseOk)(game) ? setGame(game) : setGame(null);\n            setPreloaderVisible(false);\n        }\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        checkIsAuthorized();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (currentUser && game) {\n            setIsVoted((0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.checkIfUserVoted)(game, currentUser.id));\n        } else {\n            setIsVoted(false);\n        }\n    }, [\n        currentUser\n    ]);\n    const handleVote = async ()=>{\n        if (isAuthorized) {\n            const jwt = (0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.getJWT)();\n            let usersIdArray = game.users.length ? game.users.map((user)=>user.id) : [];\n            usersIdArray.push(currentUser.id);\n            const response = await (0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.vote)(\"\".concat(_api_config__WEBPACK_IMPORTED_MODULE_3__.endpoints.games, \"/\").concat(game.id), jwt, usersIdArray);\n            if ((0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.isResponseOk)(response)) {\n                setIsVoted(true);\n                setGame(()=>{\n                    return {\n                        ...game,\n                        users: [\n                            ...game.users,\n                            currentUser\n                        ]\n                    };\n                });\n            }\n        } else {\n            openPopup();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"main\",\n        children: game ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().game),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().game__iframe),\n                        src: game.link\n                    }, void 0, false, {\n                        fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__title),\n                            children: game.title\n                        }, void 0, false, {\n                            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__content),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__description),\n                                    children: game.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__author),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Автор:\",\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__accent),\n                                                children: game.developer\n                                            }, void 0, false, {\n                                                fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__vote),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"about__vote-amount\"]),\n                                    children: [\n                                        \"За игру уже проголосовали:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__accent),\n                                            children: game.users.length\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    disabled: isVoted,\n                                    className: \"button \".concat((_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"about__vote-button\"])),\n                                    onClick: handleVote,\n                                    children: isVoted ? \"Голос учтён\" : \"Голосовать\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : preloaderVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_5__.Preloader, {}, void 0, false, {\n            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n            lineNumber: 107,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_GameNotFound_GameNotFound__WEBPACK_IMPORTED_MODULE_7__.GameNotFound, {}, void 0, false, {\n            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n            lineNumber: 109,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(GamePage, \"pec9aJpuVK4S2Gaj4VnlXlSLwI0=\", false, function() {\n    return [\n        _app_store_app_store__WEBPACK_IMPORTED_MODULE_6__.useStore\n    ];\n});\n_c = GamePage;\nvar _c;\n$RefreshReg$(_c, \"GamePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nYW1lcy9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVzQztBQUNLO0FBQ0M7QUFDMEM7QUFDdEI7QUFDSDtBQUNaO0FBQ3lCO0FBRTNELFNBQVNZLFNBQVNDLEtBQUs7O0lBQ3BDLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRWtCLFNBQVMsRUFBRUMsaUJBQWlCLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFLEdBQUdiLDhEQUFRQTtJQUU1RVQsZ0RBQVNBLENBQUM7UUFDUixlQUFldUI7WUFDYixNQUFNUixPQUFPLE1BQU1YLDZFQUF5QkEsQ0FDMUNGLGtEQUFTQSxDQUFDc0IsS0FBSyxFQUNmWixNQUFNYSxNQUFNLENBQUNDLEVBQUU7WUFFakJyQixnRUFBWUEsQ0FBQ1UsUUFBUUMsUUFBUUQsUUFBUUMsUUFBUTtZQUM3Q0Ysb0JBQW9CO1FBQ3RCO1FBQ0FTO0lBQ0YsR0FBRyxFQUFFO0lBRUx2QixnREFBU0EsQ0FBQztRQUNSb0I7SUFDRixHQUFHLEVBQUU7SUFFTHBCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSXFCLGVBQWVOLE1BQU07WUFDdkJHLFdBQVdYLG9FQUFnQkEsQ0FBQ1EsTUFBTU0sWUFBWUssRUFBRTtRQUNsRCxPQUFPO1lBQ0xSLFdBQVc7UUFDYjtJQUNGLEdBQUc7UUFBQ0c7S0FBWTtJQUVoQixNQUFNTSxhQUFhO1FBQ2pCLElBQUlMLGNBQWM7WUFDaEIsTUFBTU0sTUFBTXpCLDBEQUFNQTtZQUNsQixJQUFJMEIsZUFBZWQsS0FBS2UsS0FBSyxDQUFDQyxNQUFNLEdBQ2hDaEIsS0FBS2UsS0FBSyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1AsRUFBRSxJQUNoQyxFQUFFO1lBRU5HLGFBQWFLLElBQUksQ0FBQ2IsWUFBWUssRUFBRTtZQUNoQyxNQUFNUyxXQUFXLE1BQU0zQix3REFBSUEsQ0FDekIsR0FBc0JPLE9BQW5CYixrREFBU0EsQ0FBQ3NCLEtBQUssRUFBQyxLQUFXLE9BQVJULEtBQUtXLEVBQUUsR0FDN0JFLEtBQ0FDO1lBRUYsSUFBSXhCLGdFQUFZQSxDQUFDOEIsV0FBVztnQkFDMUJqQixXQUFXO2dCQUNYRixRQUFRO29CQUNOLE9BQU87d0JBQ0wsR0FBR0QsSUFBSTt3QkFDUGUsT0FBTzsrQkFBSWYsS0FBS2UsS0FBSzs0QkFBRVQ7eUJBQVk7b0JBQ3JDO2dCQUNGO1lBQ0Y7UUFDRixPQUFPO1lBQ0xGO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDaUI7UUFBS0MsV0FBVTtrQkFDYnRCLHFCQUNDOzs4QkFDRSw4REFBQ3VCO29CQUFRRCxXQUFXdEMsOERBQWM7OEJBQ2hDLDRFQUFDd0M7d0JBQ0NGLFdBQVd0QyxzRUFBc0I7d0JBQ2pDeUMsS0FBS3pCLEtBQUswQixJQUFJOzs7Ozs7Ozs7Ozs4QkFHbEIsOERBQUNIO29CQUFRRCxXQUFXdEMsK0RBQWU7O3NDQUNqQyw4REFBQzJDOzRCQUFHTCxXQUFXdEMsc0VBQXNCO3NDQUFHZ0IsS0FBSzRCLEtBQUs7Ozs7OztzQ0FDbEQsOERBQUNDOzRCQUFJUCxXQUFXdEMsd0VBQXdCOzs4Q0FDdEMsOERBQUM4QztvQ0FBRVIsV0FBV3RDLDRFQUE0Qjs4Q0FDdkNnQixLQUFLK0IsV0FBVzs7Ozs7OzhDQUVuQiw4REFBQ0Y7b0NBQUlQLFdBQVd0Qyx1RUFBdUI7OENBQ3JDLDRFQUFDOEM7OzRDQUFFOzRDQUNNOzBEQUNQLDhEQUFDRTtnREFBS1YsV0FBV3RDLHVFQUF1QjswREFBR2dCLEtBQUtpQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJL0QsOERBQUNKOzRCQUFJUCxXQUFXdEMscUVBQXFCOzs4Q0FDbkMsOERBQUM4QztvQ0FBRVIsV0FBV3RDLCtFQUE0Qjs7d0NBQUU7c0RBRTFDLDhEQUFDZ0Q7NENBQUtWLFdBQVd0Qyx1RUFBdUI7c0RBQUdnQixLQUFLZSxLQUFLLENBQUNDLE1BQU07Ozs7Ozs7Ozs7Ozs4Q0FFOUQsOERBQUNrQjtvQ0FDQ0MsVUFBVWpDO29DQUNWb0IsV0FBVyxVQUF1QyxPQUE3QnRDLCtFQUE0QjtvQ0FDakRvRCxTQUFTeEI7OENBRVJWLFVBQVUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUlqQ0osaUNBQ0YsOERBQUNQLHNFQUFTQTs7OztpQ0FFViw4REFBQ0ksbUZBQVlBOzs7Ozs7Ozs7O0FBSXJCO0dBckd3QkM7O1FBSThDRiwwREFBUUE7OztLQUp0REUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dhbWVzL1tpZF0vcGFnZS5qcz8yZWYyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL0dhbWUubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGVuZHBvaW50cyB9IGZyb20gXCIuLi8uLi9hcGkvY29uZmlnXCJcbmltcG9ydCB7IGdldEpXVCwgZ2V0Tm9ybWFsaXplZEdhbWVEYXRhQnlJZCwgaXNSZXNwb25zZU9rIH0gZnJvbSBcIkAvYXBwL2FwaS9hcGktdXRpbHNcIjtcbmltcG9ydCB7IFByZWxvYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1ByZWxvYWRlci9QcmVsb2FkZXJcIlxuaW1wb3J0IHsgY2hlY2tJZlVzZXJWb3RlZCwgdm90ZSB9IGZyb20gXCJAL2FwcC9hcGkvYXBpLXV0aWxzXCI7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJAL2FwcC9zdG9yZS9hcHAtc3RvcmVcIjtcbmltcG9ydCB7IEdhbWVOb3RGb3VuZCB9IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0dhbWVOb3RGb3VuZC9HYW1lTm90Rm91bmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZVBhZ2UocHJvcHMpIHtcbiAgY29uc3QgW3ByZWxvYWRlclZpc2libGUsIHNldFByZWxvYWRlclZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtnYW1lLCBzZXRHYW1lXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpc1ZvdGVkLCBzZXRJc1ZvdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBvcGVuUG9wdXAsIGNoZWNrSXNBdXRob3JpemVkLCBjdXJyZW50VXNlciwgaXNBdXRob3JpemVkIH0gPSB1c2VTdG9yZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgY29uc3QgZ2FtZSA9IGF3YWl0IGdldE5vcm1hbGl6ZWRHYW1lRGF0YUJ5SWQoXG4gICAgICAgIGVuZHBvaW50cy5nYW1lcyxcbiAgICAgICAgcHJvcHMucGFyYW1zLmlkXG4gICAgICApO1xuICAgICAgaXNSZXNwb25zZU9rKGdhbWUpID8gc2V0R2FtZShnYW1lKSA6IHNldEdhbWUobnVsbCk7XG4gICAgICBzZXRQcmVsb2FkZXJWaXNpYmxlKGZhbHNlKTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrSXNBdXRob3JpemVkKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXJyZW50VXNlciAmJiBnYW1lKSB7XG4gICAgICBzZXRJc1ZvdGVkKGNoZWNrSWZVc2VyVm90ZWQoZ2FtZSwgY3VycmVudFVzZXIuaWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNWb3RlZChmYWxzZSlcbiAgICB9XG4gIH0sIFtjdXJyZW50VXNlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZVZvdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGlzQXV0aG9yaXplZCkge1xuICAgICAgY29uc3Qgand0ID0gZ2V0SldUKCk7XG4gICAgICBsZXQgdXNlcnNJZEFycmF5ID0gZ2FtZS51c2Vycy5sZW5ndGhcbiAgICAgICAgPyBnYW1lLnVzZXJzLm1hcCgodXNlcikgPT4gdXNlci5pZClcbiAgICAgICAgOiBbXTtcbiAgICAgICAgXG4gICAgICB1c2Vyc0lkQXJyYXkucHVzaChjdXJyZW50VXNlci5pZCk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHZvdGUoXG4gICAgICAgIGAke2VuZHBvaW50cy5nYW1lc30vJHtnYW1lLmlkfWAsXG4gICAgICAgIGp3dCxcbiAgICAgICAgdXNlcnNJZEFycmF5XG4gICAgICApO1xuICAgICAgaWYgKGlzUmVzcG9uc2VPayhyZXNwb25zZSkpIHtcbiAgICAgICAgc2V0SXNWb3RlZCh0cnVlKTtcbiAgICAgICAgc2V0R2FtZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmdhbWUsXG4gICAgICAgICAgICB1c2VyczogWy4uLmdhbWUudXNlcnMsIGN1cnJlbnRVc2VyXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb3BlblBvcHVwKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAge2dhbWUgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtTdHlsZXNbXCJnYW1lXCJdfT5cbiAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtTdHlsZXNbXCJnYW1lX19pZnJhbWVcIl19XG4gICAgICAgICAgICAgIHNyYz17Z2FtZS5saW5rfVxuICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1N0eWxlc1tcImFib3V0XCJdfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1N0eWxlc1tcImFib3V0X190aXRsZVwiXX0+e2dhbWUudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXNbXCJhYm91dF9fY29udGVudFwiXX0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRfX2Rlc2NyaXB0aW9uXCJdfT5cbiAgICAgICAgICAgICAgICB7Z2FtZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRfX2F1dGhvclwiXX0+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICDQkNCy0YLQvtGAOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRfX2FjY2VudFwiXX0+e2dhbWUuZGV2ZWxvcGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRfX3ZvdGVcIl19PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1N0eWxlc1tcImFib3V0X192b3RlLWFtb3VudFwiXX0+XG4gICAgICAgICAgICAgICAg0JfQsCDQuNCz0YDRgyDRg9C20LUg0L/RgNC+0LPQvtC70L7RgdC+0LLQsNC70Lg6XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtTdHlsZXNbXCJhYm91dF9fYWNjZW50XCJdfT57Z2FtZS51c2Vycy5sZW5ndGh9PC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNWb3RlZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gJHtTdHlsZXNbXCJhYm91dF9fdm90ZS1idXR0b25cIl19YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVWb3RlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2lzVm90ZWQgPyBcItCT0L7Qu9C+0YEg0YPRh9GC0ZHQvVwiIDogXCLQk9C+0LvQvtGB0L7QstCw0YLRjFwifVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj48Lz5cbiAgICAgICkgOiBwcmVsb2FkZXJWaXNpYmxlID8gKFxuICAgICAgICA8UHJlbG9hZGVyIC8+XG4gICAgICApIDogKFxuICAgICAgICA8R2FtZU5vdEZvdW5kLz5cbiAgICAgICl9XG4gICAgPC9tYWluPlxuICApO1xufSJdLCJuYW1lcyI6WyJTdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImVuZHBvaW50cyIsImdldEpXVCIsImdldE5vcm1hbGl6ZWRHYW1lRGF0YUJ5SWQiLCJpc1Jlc3BvbnNlT2siLCJQcmVsb2FkZXIiLCJjaGVja0lmVXNlclZvdGVkIiwidm90ZSIsInVzZVN0b3JlIiwiR2FtZU5vdEZvdW5kIiwiR2FtZVBhZ2UiLCJwcm9wcyIsInByZWxvYWRlclZpc2libGUiLCJzZXRQcmVsb2FkZXJWaXNpYmxlIiwiZ2FtZSIsInNldEdhbWUiLCJpc1ZvdGVkIiwic2V0SXNWb3RlZCIsIm9wZW5Qb3B1cCIsImNoZWNrSXNBdXRob3JpemVkIiwiY3VycmVudFVzZXIiLCJpc0F1dGhvcml6ZWQiLCJmZXRjaERhdGEiLCJnYW1lcyIsInBhcmFtcyIsImlkIiwiaGFuZGxlVm90ZSIsImp3dCIsInVzZXJzSWRBcnJheSIsInVzZXJzIiwibGVuZ3RoIiwibWFwIiwidXNlciIsInB1c2giLCJyZXNwb25zZSIsIm1haW4iLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaWZyYW1lIiwic3JjIiwibGluayIsImgyIiwidGl0bGUiLCJkaXYiLCJwIiwiZGVzY3JpcHRpb24iLCJzcGFuIiwiZGV2ZWxvcGVyIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/games/[id]/page.js\n"));

/***/ })

});