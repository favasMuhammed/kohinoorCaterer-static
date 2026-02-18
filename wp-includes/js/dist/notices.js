ate[context] || DEFAULT_NOTICES;
}


;// ./node_modules/@wordpress/notices/build-module/store/index.js




const store = (0,external_wp_data_namespaceObject.createReduxStore)("core/notices", {
  reducer: reducer_default,
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject
});
(0,external_wp_data_namespaceObject.register)(store);


;// ./node_modules/@wordpress/notices/build-module/index.js



(window.wp = window.wp || {}).notices = __webpack_exports__;
/******/ })()
;