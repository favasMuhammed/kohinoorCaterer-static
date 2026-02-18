map, name) {
  const [subscribe, getValue] = (0,external_wp_element_namespaceObject.useMemo)(
    () => [
      (listener) => map.subscribe(name, listener),
      () => map.get(name)
    ],
    [map, name]
  );
  return (0,external_wp_element_namespaceObject.useSyncExternalStore)(subscribe, getValue, getValue);
}


;// ./node_modules/@wordpress/compose/build-module/index.js












































})();

(window.wp = window.wp || {}).compose = __webpack_exports__;
/******/ })()
;