n themes or plugins and doing so will break in the next version of WordPress.",
  "@wordpress/router"
);


;// ./node_modules/@wordpress/router/build-module/private-apis.js



const privateApis = {};
lock(privateApis, {
  useHistory: useHistory,
  useLocation: useLocation,
  RouterProvider: RouterProvider,
  useLink: useLink,
  Link: Link
});


;// ./node_modules/@wordpress/router/build-module/index.js



(window.wp = window.wp || {}).router = __webpack_exports__;
/******/ })()
;