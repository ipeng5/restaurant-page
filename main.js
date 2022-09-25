/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n  const content = document.querySelector('#content');\n  const main = document.createElement('main');\n  const contact = document.createElement('div');\n  contact.classList.add('contact', 'fade-in');\n\n  main.insertAdjacentHTML(\n    'afterbegin',\n    `<p class=\"contact-title\">Contact Information</p>\n    <p class=\"contact-text\">Address:&nbsp&nbspJonathanstraat 550</p>\n    <p class=\"contact-text\">Tel:&nbsp&nbsp12-3456-7890</p>`\n  );\n  main.appendChild(contact);\n  content.appendChild(main);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n  const content = document.querySelector('#content');\n  const main = document.createElement('main');\n  const home = document.createElement('div');\n  const title = document.createElement('h1');\n  const text = document.createElement('p');\n  home.classList.add('home');\n  title.textContent = 'BRUNCH SHACK';\n  text.textContent = 'A perfect brunch bar with a cozy atmosphere';\n  home.appendChild(title);\n  home.appendChild(text);\n  main.appendChild(home);\n  content.appendChild(main);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\n\n\n(0,_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst header = document.querySelector('header');\nheader.firstElementChild.classList.add('active');\n\nconst displayContent = function (e) {\n  const target = e.target.textContent;\n  const main = document.querySelector('main');\n  [...e.target.parentElement.children].forEach(function (e) {\n    e.classList.remove('active');\n  });\n  e.target.classList.add('active');\n\n  if (target === 'Home') {\n    main.remove();\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n  if (target === 'Menu') {\n    main.remove();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n  if (target === 'Contact') {\n    main.remove();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n};\n\n[...header.children].forEach(function (btn) {\n  btn.addEventListener('click', displayContent);\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuArr = [\n  {\n    name: 'Carrot Cake',\n    description: 'A classic crowd pleaser, with homemade cream cheese frosting',\n    price: '8,00€',\n  },\n  {\n    name: 'Egg Crepes',\n    description: 'Baked egg crepes with spring herbs and avocado',\n    price: '10,00€',\n  },\n  {\n    name: 'Sandwich',\n    description: 'Loaded with herb sausage patties, eggs, tomato',\n    price: '11,00€',\n  },\n];\n\nfunction createMenu() {\n  const content = document.querySelector('#content');\n  const main = document.createElement('main');\n  const menu = document.createElement('menu');\n  menu.classList.add('menu', 'fade-in');\n\n  menuArr.forEach(function (item, i) {\n    const itemContainer = document.createElement('div');\n    const itemTitle = document.createElement('h2');\n    const itemIntro = document.createElement('p');\n    const itemPrice = document.createElement('p');\n    itemTitle.textContent = menuArr[i].name;\n    itemIntro.textContent = menuArr[i].description;\n    itemPrice.textContent = menuArr[i].price;\n    itemContainer.appendChild(itemTitle);\n    itemContainer.appendChild(itemIntro);\n    itemContainer.appendChild(itemPrice);\n    menu.appendChild(itemContainer);\n  });\n\n  main.appendChild(menu);\n  content.appendChild(main);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navBtns = ['Home', 'Menu', 'Contact'];\nfunction createNav() {\n  const content = document.querySelector('#content');\n  const header = document.createElement('header');\n\n  navBtns.forEach(function (btn, i) {\n    btn = document.createElement('button');\n    btn.classList.add('nav-button');\n    btn.textContent = navBtns[i];\n    header.appendChild(btn);\n  });\n  content.prepend(header);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);\n\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;