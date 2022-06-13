"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout_sessions";
exports.ids = ["pages/api/checkout_sessions"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/checkout_sessions.js":
/*!****************************************!*\
  !*** ./pages/api/checkout_sessions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    console.log(req);\n    console.log(res);\n    if (req.method === \"POST\") {\n        try {\n            // Create Checkout Sessions from body params.\n            const session = await stripe.checkout.sessions.create({\n                line_items: [\n                    {\n                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell\n                        price: \"price_1L9ygBLPO2z5XuMVe3vFHZDV\",\n                        quantity: 1\n                    }, \n                ],\n                mode: \"payment\",\n                success_url: `${req.headers.origin}/?success=true`,\n                cancel_url: `${req.headers.origin}/?canceled=true`\n            });\n            res.redirect(303, session.url);\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCLENBQUM7QUFFaEQsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQyxDQUFDO0lBQ2pCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7SUFDakIsSUFBSUQsR0FBRyxDQUFDSSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3ZCLElBQUk7WUFDQSw2Q0FBNkM7WUFDN0MsTUFBTUMsT0FBTyxHQUFHLE1BQU1YLE1BQU0sQ0FBQ1ksUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztnQkFDbERDLFVBQVUsRUFBRTtvQkFDUjt3QkFDSSxvRkFBb0Y7d0JBQ3BGQyxLQUFLLEVBQUUsZ0NBQWdDO3dCQUN2Q0MsUUFBUSxFQUFFLENBQUM7cUJBQ2Q7aUJBQ0o7Z0JBQ0RDLElBQUksRUFBRSxTQUFTO2dCQUNmQyxXQUFXLEVBQUUsQ0FBQyxFQUFFYixHQUFHLENBQUNjLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQztnQkFDbERDLFVBQVUsRUFBRSxDQUFDLEVBQUVoQixHQUFHLENBQUNjLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGVBQWUsQ0FBQzthQUNyRCxDQUFDO1lBQ0ZkLEdBQUcsQ0FBQ2dCLFFBQVEsQ0FBQyxHQUFHLEVBQUVaLE9BQU8sQ0FBQ2EsR0FBRyxDQUFDLENBQUM7U0FDbEMsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7WUFDVmxCLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQ0QsR0FBRyxDQUFDRSxVQUFVLElBQUksR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxPQUFPLENBQUMsQ0FBQztTQUN2RDtLQUNKLE1BQU07UUFDSHRCLEdBQUcsQ0FBQ3VCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0J2QixHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNLLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBQzdDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kbmVzcy8uL3BhZ2VzL2FwaS9jaGVja291dF9zZXNzaW9ucy5qcz8wNzlhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlcSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBDaGVja291dCBTZXNzaW9ucyBmcm9tIGJvZHkgcGFyYW1zLlxyXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBsaW5lX2l0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQcm92aWRlIHRoZSBleGFjdCBQcmljZSBJRCAoZm9yIGV4YW1wbGUsIHByXzEyMzQpIG9mIHRoZSBwcm9kdWN0IHlvdSB3YW50IHRvIHNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICdwcmljZV8xTDl5Z0JMUE8yejVYdU1WZTN2RkhaRFYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1vZGU6ICdwYXltZW50JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59Lz9zdWNjZXNzPXRydWVgLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS8/Y2FuY2VsZWQ9dHJ1ZWAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXMucmVkaXJlY3QoMzAzLCBzZXNzaW9uLnVybCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKTtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2QgTm90IEFsbG93ZWQnKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJzdHJpcGUiLCJyZXF1aXJlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsInN1Y2Nlc3NfdXJsIiwiaGVhZGVycyIsIm9yaWdpbiIsImNhbmNlbF91cmwiLCJyZWRpcmVjdCIsInVybCIsImVyciIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJqc29uIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout_sessions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout_sessions.js"));
module.exports = __webpack_exports__;

})();