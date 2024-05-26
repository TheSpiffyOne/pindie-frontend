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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GamePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Game_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.module.css */ \"(app-pages-browser)/./app/games/[id]/Game.module.css\");\n/* harmony import */ var _Game_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Game_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/config */ \"(app-pages-browser)/./app/api/config.js\");\n/* harmony import */ var _app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/api/api-utils */ \"(app-pages-browser)/./app/api/api-utils.js\");\n/* harmony import */ var _components_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Preloader/Preloader */ \"(app-pages-browser)/./app/components/Preloader/Preloader.jsx\");\n/* harmony import */ var _app_store_app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/store/app-store */ \"(app-pages-browser)/./app/store/app-store.js\");\n/* harmony import */ var _app_components_GameNotFound_GameNotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/components/GameNotFound/GameNotFound */ \"(app-pages-browser)/./app/components/GameNotFound/GameNotFound.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction GamePage(props) {\n    _s();\n    const [preloaderVisible, setPreloaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [game, setGame] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [isVoted, setIsVoted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { openPopup, checkIsAuthorized, currentUser, isAuthorized } = (0,_app_store_app_store__WEBPACK_IMPORTED_MODULE_6__.useStore)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchData() {\n            const game = await (0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.getNormalizedGameDataById)(_api_config__WEBPACK_IMPORTED_MODULE_3__.endpoints.games, props.params.id);\n            (0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.isResponseOk)(game) ? setGame(game) : setGame(null);\n            setPreloaderVisible(false);\n        }\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        checkIsAuthorized();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (currentUser && game) {\n            setIsVoted((0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.checkIfUserVoted)(game, currentUser.id));\n        } else {\n            setIsVoted(false);\n        }\n    }, [\n        currentUser\n    ]);\n    const handleVote = async ()=>{\n        if (isAuthorized) {\n            const jwt = (0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.getJWT)();\n            let usersIdArray = game.users.length ? game.users.map((user)=>user.id) : [];\n            console.log(currentUser);\n            usersIdArray.push(currentUser.id);\n            const response = await (0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.vote)(\"\".concat(_api_config__WEBPACK_IMPORTED_MODULE_3__.endpoints.games, \"/\").concat(game.id), jwt, usersIdArray);\n            if ((0,_app_api_api_utils__WEBPACK_IMPORTED_MODULE_4__.isResponseOk)(response)) {\n                setIsVoted(true);\n                setGame(()=>{\n                    return {\n                        ...game,\n                        users: [\n                            ...game.users,\n                            currentUser\n                        ]\n                    };\n                });\n            }\n        } else {\n            openPopup();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"main\",\n        children: game ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().game),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().game__iframe),\n                        src: game.link\n                    }, void 0, false, {\n                        fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__title),\n                            children: game.title\n                        }, void 0, false, {\n                            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__content),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__description),\n                                    children: game.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__author),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Автор:\",\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__accent),\n                                                children: game.developer\n                                            }, void 0, false, {\n                                                fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__vote),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"about__vote-amount\"]),\n                                    children: [\n                                        \"За игру уже проголосовали:\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default().about__accent),\n                                            children: game.users.length\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    disabled: isVoted,\n                                    className: \"button \".concat((_Game_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"about__vote-button\"])),\n                                    onClick: handleVote,\n                                    children: isVoted ? \"Голос учтён\" : \"Голосовать\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : preloaderVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_5__.Preloader, {}, void 0, false, {\n            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n            lineNumber: 107,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_GameNotFound_GameNotFound__WEBPACK_IMPORTED_MODULE_7__.GameNotFound, {}, void 0, false, {\n            fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n            lineNumber: 109,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/thespiffyone/Documents/GitHub/pindie-frontend/app/games/[id]/page.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(GamePage, \"pec9aJpuVK4S2Gaj4VnlXlSLwI0=\", false, function() {\n    return [\n        _app_store_app_store__WEBPACK_IMPORTED_MODULE_6__.useStore\n    ];\n});\n_c = GamePage;\nvar _c;\n$RefreshReg$(_c, \"GamePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nYW1lcy9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVzQztBQUNLO0FBQ0M7QUFDMEM7QUFDdEI7QUFDSDtBQUNaO0FBQ3lCO0FBRTNELFNBQVNZLFNBQVNDLEtBQUs7O0lBQ3BDLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRWtCLFNBQVMsRUFBRUMsaUJBQWlCLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFLEdBQUdiLDhEQUFRQTtJQUU1RVQsZ0RBQVNBLENBQUM7UUFDUixlQUFldUI7WUFDYixNQUFNUixPQUFPLE1BQU1YLDZFQUF5QkEsQ0FDMUNGLGtEQUFTQSxDQUFDc0IsS0FBSyxFQUNmWixNQUFNYSxNQUFNLENBQUNDLEVBQUU7WUFFakJyQixnRUFBWUEsQ0FBQ1UsUUFBUUMsUUFBUUQsUUFBUUMsUUFBUTtZQUM3Q0Ysb0JBQW9CO1FBQ3RCO1FBQ0FTO0lBQ0YsR0FBRyxFQUFFO0lBRUx2QixnREFBU0EsQ0FBQztRQUNSb0I7SUFDRixHQUFHLEVBQUU7SUFFTHBCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSXFCLGVBQWVOLE1BQU07WUFDdkJHLFdBQVdYLG9FQUFnQkEsQ0FBQ1EsTUFBTU0sWUFBWUssRUFBRTtRQUNsRCxPQUFPO1lBQ0xSLFdBQVc7UUFDYjtJQUNGLEdBQUc7UUFBQ0c7S0FBWTtJQUVoQixNQUFNTSxhQUFhO1FBQ2pCLElBQUlMLGNBQWM7WUFDaEIsTUFBTU0sTUFBTXpCLDBEQUFNQTtZQUNsQixJQUFJMEIsZUFBZWQsS0FBS2UsS0FBSyxDQUFDQyxNQUFNLEdBQ2hDaEIsS0FBS2UsS0FBSyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1AsRUFBRSxJQUNoQyxFQUFFO1lBQ0pRLFFBQVFDLEdBQUcsQ0FBQ2Q7WUFDZFEsYUFBYU8sSUFBSSxDQUFDZixZQUFZSyxFQUFFO1lBQ2hDLE1BQU1XLFdBQVcsTUFBTTdCLHdEQUFJQSxDQUN6QixHQUFzQk8sT0FBbkJiLGtEQUFTQSxDQUFDc0IsS0FBSyxFQUFDLEtBQVcsT0FBUlQsS0FBS1csRUFBRSxHQUM3QkUsS0FDQUM7WUFFRixJQUFJeEIsZ0VBQVlBLENBQUNnQyxXQUFXO2dCQUMxQm5CLFdBQVc7Z0JBQ1hGLFFBQVE7b0JBQ04sT0FBTzt3QkFDTCxHQUFHRCxJQUFJO3dCQUNQZSxPQUFPOytCQUFJZixLQUFLZSxLQUFLOzRCQUFFVDt5QkFBWTtvQkFDckM7Z0JBQ0Y7WUFDRjtRQUNGLE9BQU87WUFDTEY7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNtQjtRQUFLQyxXQUFVO2tCQUNieEIscUJBQ0M7OzhCQUNFLDhEQUFDeUI7b0JBQVFELFdBQVd4Qyw4REFBYzs4QkFDaEMsNEVBQUMwQzt3QkFDQ0YsV0FBV3hDLHNFQUFzQjt3QkFDakMyQyxLQUFLM0IsS0FBSzRCLElBQUk7Ozs7Ozs7Ozs7OzhCQUdsQiw4REFBQ0g7b0JBQVFELFdBQVd4QywrREFBZTs7c0NBQ2pDLDhEQUFDNkM7NEJBQUdMLFdBQVd4QyxzRUFBc0I7c0NBQUdnQixLQUFLOEIsS0FBSzs7Ozs7O3NDQUNsRCw4REFBQ0M7NEJBQUlQLFdBQVd4Qyx3RUFBd0I7OzhDQUN0Qyw4REFBQ2dEO29DQUFFUixXQUFXeEMsNEVBQTRCOzhDQUN2Q2dCLEtBQUtpQyxXQUFXOzs7Ozs7OENBRW5CLDhEQUFDRjtvQ0FBSVAsV0FBV3hDLHVFQUF1Qjs4Q0FDckMsNEVBQUNnRDs7NENBQUU7NENBQ007MERBQ1AsOERBQUNFO2dEQUFLVixXQUFXeEMsdUVBQXVCOzBEQUFHZ0IsS0FBS21DLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUkvRCw4REFBQ0o7NEJBQUlQLFdBQVd4QyxxRUFBcUI7OzhDQUNuQyw4REFBQ2dEO29DQUFFUixXQUFXeEMsK0VBQTRCOzt3Q0FBRTtzREFFMUMsOERBQUNrRDs0Q0FBS1YsV0FBV3hDLHVFQUF1QjtzREFBR2dCLEtBQUtlLEtBQUssQ0FBQ0MsTUFBTTs7Ozs7Ozs7Ozs7OzhDQUU5RCw4REFBQ29CO29DQUNDQyxVQUFVbkM7b0NBQ1ZzQixXQUFXLFVBQXVDLE9BQTdCeEMsK0VBQTRCO29DQUNqRHNELFNBQVMxQjs4Q0FFUlYsVUFBVSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBSWpDSixpQ0FDRiw4REFBQ1Asc0VBQVNBOzs7O2lDQUVWLDhEQUFDSSxtRkFBWUE7Ozs7Ozs7Ozs7QUFJckI7R0FyR3dCQzs7UUFJOENGLDBEQUFRQTs7O0tBSnRERSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2FtZXMvW2lkXS9wYWdlLmpzPzJlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vR2FtZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgZW5kcG9pbnRzIH0gZnJvbSBcIi4uLy4uL2FwaS9jb25maWdcIlxuaW1wb3J0IHsgZ2V0SldULCBnZXROb3JtYWxpemVkR2FtZURhdGFCeUlkLCBpc1Jlc3BvbnNlT2sgfSBmcm9tIFwiQC9hcHAvYXBpL2FwaS11dGlsc1wiO1xuaW1wb3J0IHsgUHJlbG9hZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJlbG9hZGVyL1ByZWxvYWRlclwiXG5pbXBvcnQgeyBjaGVja0lmVXNlclZvdGVkLCB2b3RlIH0gZnJvbSBcIkAvYXBwL2FwaS9hcGktdXRpbHNcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIkAvYXBwL3N0b3JlL2FwcC1zdG9yZVwiO1xuaW1wb3J0IHsgR2FtZU5vdEZvdW5kIH0gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvR2FtZU5vdEZvdW5kL0dhbWVOb3RGb3VuZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lUGFnZShwcm9wcykge1xuICBjb25zdCBbcHJlbG9hZGVyVmlzaWJsZSwgc2V0UHJlbG9hZGVyVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2dhbWUsIHNldEdhbWVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lzVm90ZWQsIHNldElzVm90ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IG9wZW5Qb3B1cCwgY2hlY2tJc0F1dGhvcml6ZWQsIGN1cnJlbnRVc2VyLCBpc0F1dGhvcml6ZWQgfSA9IHVzZVN0b3JlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICBjb25zdCBnYW1lID0gYXdhaXQgZ2V0Tm9ybWFsaXplZEdhbWVEYXRhQnlJZChcbiAgICAgICAgZW5kcG9pbnRzLmdhbWVzLFxuICAgICAgICBwcm9wcy5wYXJhbXMuaWRcbiAgICAgICk7XG4gICAgICBpc1Jlc3BvbnNlT2soZ2FtZSkgPyBzZXRHYW1lKGdhbWUpIDogc2V0R2FtZShudWxsKTtcbiAgICAgIHNldFByZWxvYWRlclZpc2libGUoZmFsc2UpO1xuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tJc0F1dGhvcml6ZWQoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRVc2VyICYmIGdhbWUpIHtcbiAgICAgIHNldElzVm90ZWQoY2hlY2tJZlVzZXJWb3RlZChnYW1lLCBjdXJyZW50VXNlci5pZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc1ZvdGVkKGZhbHNlKVxuICAgIH1cbiAgfSwgW2N1cnJlbnRVc2VyXSk7XG5cbiAgY29uc3QgaGFuZGxlVm90ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNBdXRob3JpemVkKSB7XG4gICAgICBjb25zdCBqd3QgPSBnZXRKV1QoKTtcbiAgICAgIGxldCB1c2Vyc0lkQXJyYXkgPSBnYW1lLnVzZXJzLmxlbmd0aFxuICAgICAgICA/IGdhbWUudXNlcnMubWFwKCh1c2VyKSA9PiB1c2VyLmlkKVxuICAgICAgICA6IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcilcbiAgICAgIHVzZXJzSWRBcnJheS5wdXNoKGN1cnJlbnRVc2VyLmlkKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdm90ZShcbiAgICAgICAgYCR7ZW5kcG9pbnRzLmdhbWVzfS8ke2dhbWUuaWR9YCxcbiAgICAgICAgand0LFxuICAgICAgICB1c2Vyc0lkQXJyYXlcbiAgICAgICk7XG4gICAgICBpZiAoaXNSZXNwb25zZU9rKHJlc3BvbnNlKSkge1xuICAgICAgICBzZXRJc1ZvdGVkKHRydWUpO1xuICAgICAgICBzZXRHYW1lKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZ2FtZSxcbiAgICAgICAgICAgIHVzZXJzOiBbLi4uZ2FtZS51c2VycywgY3VycmVudFVzZXJdLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuUG9wdXAoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICB7Z2FtZSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1N0eWxlc1tcImdhbWVcIl19PlxuICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlc1tcImdhbWVfX2lmcmFtZVwiXX1cbiAgICAgICAgICAgICAgc3JjPXtnYW1lLmxpbmt9XG4gICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRcIl19PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRfX3RpdGxlXCJdfT57Z2FtZS50aXRsZX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlc1tcImFib3V0X19jb250ZW50XCJdfT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtTdHlsZXNbXCJhYm91dF9fZGVzY3JpcHRpb25cIl19PlxuICAgICAgICAgICAgICAgIHtnYW1lLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXNbXCJhYm91dF9fYXV0aG9yXCJdfT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgINCQ0LLRgtC+0YA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtTdHlsZXNbXCJhYm91dF9fYWNjZW50XCJdfT57Z2FtZS5kZXZlbG9wZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXNbXCJhYm91dF9fdm90ZVwiXX0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17U3R5bGVzW1wiYWJvdXRfX3ZvdGUtYW1vdW50XCJdfT5cbiAgICAgICAgICAgICAgICDQl9CwINC40LPRgNGDINGD0LbQtSDQv9GA0L7Qs9C+0LvQvtGB0L7QstCw0LvQuDpcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1N0eWxlc1tcImFib3V0X19hY2NlbnRcIl19PntnYW1lLnVzZXJzLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1ZvdGVkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiAke1N0eWxlc1tcImFib3V0X192b3RlLWJ1dHRvblwiXX1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVZvdGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXNWb3RlZCA/IFwi0JPQvtC70L7RgSDRg9GH0YLRkdC9XCIgOiBcItCT0L7Qu9C+0YHQvtCy0LDRgtGMXCJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPjwvPlxuICAgICAgKSA6IHByZWxvYWRlclZpc2libGUgPyAoXG4gICAgICAgIDxQcmVsb2FkZXIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxHYW1lTm90Rm91bmQvPlxuICAgICAgKX1cbiAgICA8L21haW4+XG4gICk7XG59Il0sIm5hbWVzIjpbIlN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZW5kcG9pbnRzIiwiZ2V0SldUIiwiZ2V0Tm9ybWFsaXplZEdhbWVEYXRhQnlJZCIsImlzUmVzcG9uc2VPayIsIlByZWxvYWRlciIsImNoZWNrSWZVc2VyVm90ZWQiLCJ2b3RlIiwidXNlU3RvcmUiLCJHYW1lTm90Rm91bmQiLCJHYW1lUGFnZSIsInByb3BzIiwicHJlbG9hZGVyVmlzaWJsZSIsInNldFByZWxvYWRlclZpc2libGUiLCJnYW1lIiwic2V0R2FtZSIsImlzVm90ZWQiLCJzZXRJc1ZvdGVkIiwib3BlblBvcHVwIiwiY2hlY2tJc0F1dGhvcml6ZWQiLCJjdXJyZW50VXNlciIsImlzQXV0aG9yaXplZCIsImZldGNoRGF0YSIsImdhbWVzIiwicGFyYW1zIiwiaWQiLCJoYW5kbGVWb3RlIiwiand0IiwidXNlcnNJZEFycmF5IiwidXNlcnMiLCJsZW5ndGgiLCJtYXAiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJyZXNwb25zZSIsIm1haW4iLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaWZyYW1lIiwic3JjIiwibGluayIsImgyIiwidGl0bGUiLCJkaXYiLCJwIiwiZGVzY3JpcHRpb24iLCJzcGFuIiwiZGV2ZWxvcGVyIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/games/[id]/page.js\n"));

/***/ })

});