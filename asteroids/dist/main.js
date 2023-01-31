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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\n\nclass Asteroid extends _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    static COLOR = \"gray\";\n    static RADIUS = 25;\n    static VEL = 5;\n    constructor(obj) {\n        super(obj);\n\n        console.log(obj)\n        console.log(\"An Asteroid was born!\")\n\n        this.color = Asteroid.COLOR;\n        this.radius = Asteroid.RADIUS;\n        this.vel = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.randomVec)(Asteroid.VEL); \n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);\n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n\nclass Game {\n    static DIM_X = 1000;\n    static DIM_Y = 600;\n    static NUM_ASTEROIDS = 10;\n\n    constructor() {\n        this.asteroids = []; // make an array\n        this.addAsteroids() // populate it\n\n    }\n\n    addAsteroids() {\n        let i = 0\n        while (i < Game.NUM_ASTEROIDS) {\n            let newPosition = this.randomPosition(Game.DIM_X, Game.DIM_Y) // [x, y]\n            let newbornAsteroid = new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({pos: newPosition})\n            this.asteroids.push(newbornAsteroid) //keep pushing randomly positioned asteroids\n            i++\n        }\n    }\n\n    randomPosition(maxX, maxY) { // returns a random coordinate array [x, y], when you give this function the max dimensions you want\n        let finalCoordinates = []\n        finalCoordinates.push(getRandomPositionFromRange(0, maxX))\n        finalCoordinates.push(getRandomPositionFromRange(0, maxY))\n\n        function getRandomPositionFromRange(min, max){ // returns a random num between min and max\n            return Math.floor(Math.random() * (max - min + 1) + min)\n        }\n\n        return finalCoordinates\n    }\n\n    draw(ctx) {\n        // ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y); //wipes the ctx clean\n        this.asteroids.forEach(function(asteroid) {\n            asteroid.draw(ctx)\n            console.log(asteroid)\n        })\n    }\n\n    moveObjects() {\n        \n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n \n \n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n    // reading the canvas from the html doc\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    \n    const dimensions = [1000, 600]\n\n    // drawing black canvas\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, dimensions[0], dimensions[1]);\n\n    // init new game\n    const game = new _game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    game.draw(ctx)\n    console.log(game);\n\n});\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import Asteroid from './asteroid.js'; \n\nclass MovingObject {\n    constructor(obj) { // instance variables\n        console.log(obj)\n        this.pos = obj.pos;\n        this.vel = obj.vel; \n        this.radius = obj.radius;\n        this.color = obj.color; \n    }\n\n    draw(ctx) { //draws a circle\n        ctx.beginPath()\n        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false); //x, y, radius, start angle, end angle, clockwise boolean\n        ctx.lineWidth = 20;\n        ctx.fillStyle = this.color;\n        ctx.stroke();\n        ctx.fill();\n    }\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1]; \n    }  \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovingObject);\n\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomVec\": () => (/* binding */ randomVec),\n/* harmony export */   \"scale\": () => (/* binding */ scale)\n/* harmony export */ });\n// src/util.js\n\n// Return a randomly oriented vector with the given length.\nconst randomVec = (length) => {\n    const deg = 2 * Math.PI * Math.random();\n    return scale([Math.sin(deg), Math.cos(deg)], length);\n}\n\n  // Scale the length of a vector by the given amount.\nconst scale = (vec, m) => {\n    return [vec[0] * m, vec[1] * m];\n}\n\n\n//# sourceURL=webpack://asteroids/./src/util.js?");

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