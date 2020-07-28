/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 174);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports) {

module.exports = require("mini-css-extract-plugin");

/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.devServer = void 0;
/**
 * Dev server
 */
var devServer = function (bud) { return ({
    bud: bud,
    options: {
        devServer: bud.state.options.dev,
    },
    make: function () {
        return this.options;
    },
}); };
exports.devServer = devServer;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.entry = void 0;
/**
 * Entrypoints
 */
var entry = function (bud) { return ({
    bud: bud,
    options: {
        entry: __assign({}, bud.state.options.entry),
    },
    make: function () {
        return this.options;
    },
}); };
exports.entry = entry;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.externals = void 0;
var webpack_node_externals_1 = __importDefault(__webpack_require__(105));
var externals = function (bud) { return ({
    bud: bud,
    options: {},
    make: function () {
        if (this.bud.state.options.externals) {
            this.options.externals = this.bud.state.options.externals;
        }
        if (this.bud.state.options.node) {
            this.options.externals = [webpack_node_externals_1["default"]()];
        }
        return this.options;
    },
}); };
exports.externals = externals;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.general = void 0;
/**
 * General webpack options
 *
 * @this {bud}
 */
var general = function (bud) { return ({
    bud: bud,
    options: {
        context: bud.state.paths.project,
        devtool: bud.state.features.sourceMap
            ? bud.state.options.devtool
            : false,
        mode: bud.mode,
        target: bud.state.options.target,
        watch: bud.state.features.watch,
    },
    make: function () {
        if (this.options.target == 'web') {
            this.options.node = {
                module: 'empty',
                dgram: 'empty',
                dns: 'mock',
                fs: 'empty',
                http2: 'empty',
                net: 'empty',
                tls: 'empty',
                child_process: 'empty',
            };
        }
        return this.options;
    },
}); };
exports.general = general;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.build = void 0;
var entry_1 = __webpack_require__(103);
var devServer_1 = __webpack_require__(102);
var externals_1 = __webpack_require__(104);
var general_1 = __webpack_require__(106);
var index_1 = __webpack_require__(108);
var optimization_1 = __webpack_require__(138);
var output_1 = __webpack_require__(140);
var webpackResolve_1 = __webpack_require__(141);
var plugins_1 = __webpack_require__(142);
var build = function (bud) { return ({
    bud: bud,
    config: {},
    builders: [
        ['entry', entry_1.entry],
        ['output', output_1.output],
        ['rules', index_1.rules],
        ['devServer', devServer_1.devServer],
        ['plugins', plugins_1.plugins],
        ['resolve', webpackResolve_1.webpackResolve],
        ['externals', externals_1.externals],
        ['general', general_1.general],
    ],
    mergeConfig: function (configValues) {
        this.config = __assign(__assign({}, this.config), configValues);
    },
    makeConfig: function () {
        var _this = this;
        this.bud.featureEnabled('optimize')
            && this.builders.push(['optimization', optimization_1.optimization]);
        this.doHook('pre', this.bud.state.options);
        this.builders.map(function (_a) {
            var name = _a[0], builder = _a[1];
            var builderInstance = builder(_this.bud);
            _this.preBuilderHook(name, _this);
            _this.builderOut = builderInstance.make();
            _this.postBuilderHook(name, _this.builderOut);
            _this.mergeConfig(_this.builderOut);
            delete _this.builderOut;
        });
        this.doHook('post', this.config);
        return this.config;
    },
    doHook: function (name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.bud.hooks.call(name + "_webpack", this, params);
    },
    preBuilderHook: function (name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.bud.hooks.call("pre_" + name, params);
    },
    postBuilderHook: function (name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.bud.hooks.call("post_" + name, params);
    },
}); };
exports.build = build;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.rules = void 0;
var eslint_1 = __webpack_require__(109);
var babel_1 = __webpack_require__(125);
var typescript_1 = __webpack_require__(126);
var css_1 = __webpack_require__(127);
var module_1 = __webpack_require__(130);
var scss_1 = __webpack_require__(131);
var module_2 = __webpack_require__(134);
var font_1 = __webpack_require__(135);
var image_1 = __webpack_require__(136);
var svg_1 = __webpack_require__(137);
/**
 * Webpack loaders
 * @type {function} rules
 */
var rules = function (bud) { return ({
    bud: bud,
    options: {},
    /**
     * Make webpack rules
     */
    make: function () {
        this.options = {
            module: {
                rules: [],
            },
        };
        /*     this.bud.state.options.target == 'node' &&
              this.options.module.rules.push({test: patterns.js, loader: loaders.shebang})
         */
        this.bud.featureEnabled('typescript') &&
            this.options.module.rules.push(typescript_1.typescript(this.bud).make());
        this.bud.featureEnabled('eslint')
            && !this.bud.featureEnabled('typescript')
            && this.options.module.rules.push(eslint_1.eslint(this.bud).make());
        this.bud.featureEnabled('babel') &&
            this.options.module.rules.push(babel_1.babel(this.bud).make());
        this.bud.featureEnabled('css') &&
            this.options.module.rules.push(css_1.css(this.bud).make());
        this.bud.featureEnabled('cssModules') &&
            this.options.module.rules.push(module_1.module(this.bud).make());
        this.bud.featureEnabled('scss') &&
            this.options.module.rules.push(scss_1.scss(this.bud).make());
        this.bud.featureEnabled('scssModules') &&
            this.options.module.rules.push(module_2.module(this.bud).make());
        this.bud.featureEnabled('font') &&
            this.options.module.rules.push(font_1.font(this.bud).make());
        this.bud.featureEnabled('image') &&
            this.options.module.rules.push(image_1.image(this.bud).make());
        this.bud.featureEnabled('svg') &&
            this.options.module.rules.push(svg_1.svg(this.bud).make());
        return this.options;
    },
}); };
exports.rules = rules;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.eslint = void 0;
var loaders_1 = __webpack_require__(110);
var patterns_1 = __webpack_require__(124);
var eslint = function (bud) { return ({
    bud: bud,
    rule: {},
    make: function () {
        this.pre();
        this.rule = {
            enforce: 'pre',
            test: patterns_1.patterns.js,
            exclude: patterns_1.patterns.vendor,
            use: [
                {
                    loader: loaders_1.loaders.eslint,
                    options: {
                        configFile: bud.state.configs.eslint,
                        formatter: 'codeframe',
                        failOnError: true,
                    },
                },
            ],
        };
        this.post();
        return this.rule;
    },
    pre: function () {
        this.bud.hooks.call('pre_eslint', this);
    },
    post: function () {
        this.bud.hooks.call('post_eslint', this.rule);
    },
}); };
exports.eslint = eslint;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.loaders = void 0;
var mini_css_extract_plugin_1 = __importDefault(__webpack_require__(91));
/**
 * Style loaders
 *
 * @type {object} loaders
 */
var loaders = {
    babel: /*require.resolve*/(111),
    css: /*require.resolve*/(112),
    file: /*require.resolve*/(113),
    eslint: /*require.resolve*/(114),
    miniCss: function (hot) { return ({
        loader: mini_css_extract_plugin_1["default"].loader,
    }); },
    node: /*require.resolve*/(115),
    postCss: /*require.resolve*/(116),
    resolveUrl: /*require.resolve*/(117),
    scss: /*require.resolve*/(118),
    style: /*require.resolve*/(119),
    svgr: /*require.resolve*/(120),
    url: /*require.resolve*/(121),
    ts: /*require.resolve*/(122),
    shebang: /*require.resolve*/(123),
};
exports.loaders = loaders;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("babel-loader");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("css-loader");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("file-loader");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("eslint-loader");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("node-loader");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("postcss-loader");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("resolve-url-loader");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("sass-loader");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("style-loader");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("@svgr/webpack");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("url-loader");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("ts-loader");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("shebang-loader");

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.patterns = void 0;
/**
 * loader test regex patterns
 *
 * @typedef {object} pattern
 * @prop {RegExp} sass
 * @prop {RegExp} sassModule
 * @prop {RegExp} css
 * @prop {cssModule} cssModule
 */
var patterns = {
    js: /\.(js|jsx)$/,
    ts: /\.(ts|tsx)$/,
    scss: /\.scss$/,
    scssModule: /\.module\.(scss|sass)$/,
    css: /\.css$/,
    cssModule: /\.module\.css$/,
    svg: /\.svg$/,
    font: /\.(ttf|otf|eot|woff2?|png|jpe?g|gif|ico)$/,
    vendor: /node_modules/,
    image: /\.(png|svg|jpg|gif)$/,
};
exports.patterns = patterns;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.babel = void 0;
var loaders_1 = __webpack_require__(110);
/**
 * Babel
 *
 * @type {function} babel
 * @return {object}
 */
var babel = function (bud) { return ({
    bud: bud,
    rule: {},
    /**
     * Make babel rules
     */
    make: function () {
        this.pre();
        this.rule = {
            include: /\.jsx?|\.tsx?/,
            use: [
                {
                    loader: loaders_1.loaders.babel,
                    options: __assign(__assign({}, this.bud.state.options.babel), { rootMode: 'upward' }),
                },
            ],
        };
        this.rule.test = /\.(js|jsx)$/;
        this.post();
        return this.rule;
    },
    /**
     * Hook: pre_babel
     */
    pre: function () {
        this.bud.hooks.call('pre_babel', this);
    },
    /**
     * Hook: post_babel
     */
    post: function () {
        this.bud.hooks.call('post_babel', this.rule);
    },
}); };
exports.babel = babel;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.typescript = void 0;
var loaders_1 = __webpack_require__(110);
var patterns_1 = __webpack_require__(124);
var typescript = function (bud) { return ({
    bud: bud,
    rule: {},
    make: function () {
        this.pre();
        this.rule = {
            test: /\.tsx?$/,
            exclude: patterns_1.patterns.vendor,
            use: [
                {
                    loader: loaders_1.loaders.ts,
                    options: {
                        configFile: bud.state.configs.typescript,
                    },
                },
            ],
        };
        this.post();
        return this.rule;
    },
    /**
     * Hook: pre_typescript
     */
    pre: function () {
        this.bud.hooks.call('pre_typescript', this);
    },
    /**
     * Hook: post_typescript
     */
    post: function () {
        this.bud.hooks.call('post_typescript', this.rule);
    },
}); };
exports.typescript = typescript;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.css = void 0;
var loaders_1 = __webpack_require__(110);
var patterns_1 = __webpack_require__(124);
var postCss_1 = __webpack_require__(128);
var resolveUrl_1 = __webpack_require__(129);
/**
 * Css
 * @return {object}
 */
var css = function (bud) { return ({
    bud: bud,
    test: patterns_1.patterns.css,
    sourceMap: bud.featureEnabled('map'),
    make: function () {
        this.use = [
            loaders_1.loaders.miniCss(this.bud.featureEnabled('hot')),
            loaders_1.loaders.css,
            resolveUrl_1.resolveUrl(this.bud).make(),
        ];
        if (this.bud.featureEnabled('postCss')) {
            this.use.push(__assign({}, postCss_1.postCss(this.bud).make()));
        }
        this.bud.hooks.call('pre_css', this);
        this.output = {
            test: this.test,
            use: this.use,
        };
        this.bud.hooks.call('post_css', {
            output: this.output,
        });
        return this.output;
    },
}); };
exports.css = css;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.postCss = void 0;
var loaders_1 = __webpack_require__(110);
/**
 * PostCSS
 * @typedef {function} postCss
 * @return {object}
 */
var postCss = function (bud) { return ({
    bud: bud,
    config: {
        loader: loaders_1.loaders.postCss,
        options: __assign({ ident: 'postcss', parser: 'postcss-scss' }, bud.state.options.postCss),
    },
    output: {},
    make: function () {
        this.bud.hooks.call('pre_postcss', this);
        this.output = this.bud.state.features.postCss ? this.config : {};
        this.bud.hooks.call('post_postcss', this.output);
        return this.output;
    },
}); };
exports.postCss = postCss;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.resolveUrl = void 0;
var loaders_1 = __webpack_require__(110);
var resolveUrl = function (bud) { return ({
    bud: bud,
    loader: loaders_1.loaders.resolveUrl,
    options: {
        engine: 'postcss',
        sourceMap: bud.state.features.map,
        debug: true,
    },
    make: function () {
        this.bud.hooks.call('pre_resolveurl', this);
        this.output = {
            loader: this.loader,
            options: this.options,
        };
        this.bud.hooks.call('post_resolveurl', this.output);
        return this.output;
    },
}); };
exports.resolveUrl = resolveUrl;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.module = void 0;
var loaders_1 = __webpack_require__(110);
var patterns_1 = __webpack_require__(124);
var postCss_1 = __webpack_require__(128);
var resolveUrl_1 = __webpack_require__(129);
/**
 * CSS modules
 *
 * @return {object}
 */
var module = function (bud) { return ({
    bud: bud,
    rule: {
        test: patterns_1.patterns.cssModule,
        use: [
            loaders_1.loaders.miniCss(bud.featureEnabled('hot')),
            {
                loader: loaders_1.loaders.css,
                options: {
                    modules: true,
                    onlyLocals: false,
                },
            },
            resolveUrl_1.resolveUrl(bud).make(),
        ],
    },
    /**
     * Make CSS Modules object
     */
    make: function () {
        this.pre();
        if (this.bud.featureEnabled('postCss')) {
            this.use.push(postCss_1.postCss(this.bud).make());
        }
        this.post();
        return this.rule;
    },
    /**
     * hook: pre_css_module
     */
    pre: function () {
        this.bud.hooks.call('pre_css_module', this);
    },
    /**
     * hook: post_css_module
     */
    post: function () {
        this.bud.hooks.call('pre_css_module', this.output);
    },
}); };
exports.module = module;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.scss = void 0;
var loaders_1 = __webpack_require__(110);
var patterns_1 = __webpack_require__(124);
var postCss_1 = __webpack_require__(128);
var resolveUrl_1 = __webpack_require__(129);
var implementation_1 = __webpack_require__(132);
/**
 * scss
 */
var scss = function (bud) { return ({
    bud: bud,
    output: {},
    test: patterns_1.patterns.scss,
    resolveUrl: resolveUrl_1.resolveUrl(bud).make(),
    postCss: postCss_1.postCss(bud).make(),
    scss: {
        loader: loaders_1.loaders.scss,
        options: {
            sourceMap: true,
            implementation: implementation_1.implementation(),
        },
    },
    /**
     * Make SCSS loaders object.
     */
    make: function () {
        this.pre();
        this.output = {
            test: this.test,
            use: Object.values([
                loaders_1.loaders.miniCss(this.bud.featureEnabled('hot')),
                loaders_1.loaders.css,
                this.resolveUrl,
                this.postCss,
                this.scss,
            ]),
        };
        this.post();
        return this.output;
    },
    /**
     * hook: pre_scss
     */
    pre: function () {
        this.bud.hooks.call('pre_scss', this);
    },
    /**
     * hook: post_scss
     */
    post: function () {
        this.bud.hooks.call('post_scss', this.output);
    },
}); };
exports.scss = scss;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.implementation = void 0;
/**
 * resolve whether to use dart-sass or node-sass
 */
var implementation = function () {
    try {
        return /*require.resolve*/(!(function webpackMissingModule() { var e = new Error("Cannot find module 'sass'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
            ? __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'sass'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
            : __webpack_require__(133);
    }
    catch (_a) {
        return __webpack_require__(133);
    }
};
exports.implementation = implementation;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = require("node-sass");

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.module = void 0;
var loaders_1 = __webpack_require__(110);
var patterns_1 = __webpack_require__(124);
var postCss_1 = __webpack_require__(128);
var resolveUrl_1 = __webpack_require__(129);
var implementation_1 = __webpack_require__(132);
/**
 * SCSS modules
 * @typedef {function} cssModule
 * @return {object}
 */
var module = function (bud) { return ({
    bud: bud,
    output: {},
    test: patterns_1.patterns.scssModule,
    css: {
        loader: loaders_1.loaders.css,
        options: {
            modules: true,
            onlyLocals: false,
        },
    },
    resolveUrl: resolveUrl_1.resolveUrl(bud).make(),
    postCss: postCss_1.postCss(bud).make(),
    scss: {
        loader: loaders_1.loaders.scss,
        options: {
            sourceMap: true,
            implementation: implementation_1.implementation(),
        },
    },
    /**
     * Make SCSS loaders object.
     */
    make: function () {
        this.pre();
        this.output = {
            test: this.test,
            use: Object.values([
                loaders_1.loaders.miniCss(this.bud.featureEnabled('hot')),
                ,
                this.css,
                this.resolveUrl,
                this.postCss,
                this.scss,
            ]),
        };
        this.post();
        return this.output;
    },
    /**
     * hook: pre_scss_module
     */
    pre: function () {
        this.bud.hooks.call('pre_scss_module', this);
    },
    /**
     * hook: post_scss_module
     */
    post: function () {
        this.bud.hooks.call('post_scss_module', this.output);
    },
}); };
exports.module = module;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.font = void 0;
var loaders_1 = __webpack_require__(110);
var patterns_1 = __webpack_require__(124);
/**
 * Font module rules
 *
 * @typedef {function} font
 * @return {object}
 */
var font = function (builder) { return ({
    builder: builder,
    make: function () {
        return {
            test: patterns_1.patterns.font,
            use: [
                {
                    loader: loaders_1.loaders.url,
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            ],
        };
    },
}); };
exports.font = font;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.image = void 0;
var loaders_1 = __webpack_require__(110);
var patterns_1 = __webpack_require__(124);
/**
 * Image module rules
 *
 * @type     {Function} image
 * @property {imageLoaderOptions} options
 * @return {object}
 */
var image = function (bud) { return ({
    bud: bud,
    options: {
        test: patterns_1.patterns.image,
        use: [
            {
                loader: loaders_1.loaders.file,
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
    make: function () {
        this.doHook('pre');
        this.doHook('post');
        return this.options;
    },
    doHook: function (name) {
        this.bud.hooks.call(name + "_webpack_rules_image", this.options, this.bud);
    },
}); };
exports.image = image;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.svg = void 0;
var loaders_1 = __webpack_require__(110);
var patterns_1 = __webpack_require__(124);
/**
 * SVG module rules
 * @return {object}
 */
var svg = function (bud) { return ({
    bud: bud,
    output: {},
    test: patterns_1.patterns.svg,
    loaders: [loaders_1.loaders.svgr, loaders_1.loaders.url],
    /**
     * Make svg rules
     */
    make: function () {
        this.pre();
        this.output = {
            test: this.test,
            use: this.loaders,
        };
        this.post();
        return this.output;
    },
    /**
     * Hook: pre_svg
     */
    pre: function () {
        this.bud.hooks.call('pre_svg', this);
    },
    /**
     * Hook: post_svg
     */
    post: function () {
        this.bud.hooks.call('post_svg', this.output);
    },
}); };
exports.svg = svg;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.optimization = void 0;
var uglifyjs_webpack_plugin_1 = __importDefault(__webpack_require__(139));
/**
 * Webpack optimization
 * @type {function} optimization
 */
var optimization = function (bud) { return ({
    bud: bud,
    supports: {
        minify: bud.state.features.minify,
        runtimeChunk: bud.state.features.inlineManifest,
        vendor: bud.state.features.vendor,
    },
    options: {
        optimization: {
            minimize: bud.state.features.minify,
            removeAvailableModules: false,
            removeEmptyChunks: false,
            moduleIds: 'hashed',
        },
    },
    splitChunksOptions: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: bud.state.options.vendor.name,
                chunks: 'all',
                priority: -20,
            },
        },
    },
    runtimeChunkOptions: {
        name: function (entrypoint) { return "runtime/" + entrypoint.name; },
    },
    uglifyOptions: bud.state.options.uglify,
    make: function () {
        this.whenSupported('runtimeChunk', this.setRuntimeChunk);
        this.whenSupported('vendor', this.setSplitChunks);
        this.whenSupported('minify', this.setMinimizer);
        return this.options;
    },
    whenSupported: function (feature, callback) {
        this.currentCallback = callback;
        this.supports[feature] && this.currentCallback();
    },
    setRuntimeChunk: function () {
        this.doHook('pre_runtimechunk');
        this.options.optimization.runtimeChunk = this.runtimeChunkOptions;
        this.doHook('post_runtimechunk');
    },
    setSplitChunks: function () {
        this.doHook('pre_splitchunks');
        this.options.optimization.splitChunks = this.splitChunksOptions;
        this.doHook('post_splitchunks');
    },
    setMinimizer: function () {
        this.doHook('pre_minimizer', this);
        if (!this.bud.featureEnabled('terser')) {
            this.options.optimization.minimizer = [this.uglify()];
        }
        this.doHook('post_minimizer', this);
    },
    uglify: function () {
        this.doHook('pre_uglify', this);
        var uglify = new uglifyjs_webpack_plugin_1["default"](this.uglifyOptions);
        this.doHook('post_uglify', this);
        return uglify;
    },
    doHook: function (name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.bud.hooks.call("webpack_optimization_" + name, this, params);
    },
}); };
exports.optimization = optimization;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = require("uglifyjs-webpack-plugin");

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.output = void 0;
var output = function (bud) { return ({
    bud: bud,
    options: {
        output: {
            path: bud.state.paths.dist,
            publicPath: bud.state.paths.public,
            filename: bud.state.features.hash
                ? '[name].[hash:8].js'
                : '[name].js',
        },
    },
    make: function () {
        return this.options;
    },
}); };
exports.output = output;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.webpackResolve = void 0;
var path_1 = __webpack_require__(9);
/**
 * Webpack resolvers.
 *
 * @param {object}
 */
var webpackResolve = function (bud) { return ({
    bud: bud,
    options: {
        resolve: {
            extensions: ['.js', '.json'],
            modules: [
                bud.project('node_modules'),
                bud.state.paths.src,
            ],
        },
    },
    make: function () {
        /**
         * Resolve modules from framework
         */
        if (this.bud.state.paths.project !== this.bud.state.paths.framework) {
            this.options.resolve.modules.push(path_1.join(this.bud.state.paths.framework, 'node_modules'));
        }
        /**
         * JSX support
         */
        if (this.bud.state.features.jsx) {
            this.options.resolve.extensions.push('.jsx');
        }
        /**
         * TS support
         */
        if (this.bud.state.features.typescript) {
            this.options.resolve.extensions.push('.ts');
            this.options.resolve.extensions.push('.tsx');
        }
        /**
         * Alias resolution
         */
        if (this.bud.state.options.alias) {
            this.options.resolve.alias = this.bud.state.options.alias;
        }
        return this.options;
    },
}); };
exports.webpackResolve = webpackResolve;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.plugins = void 0;
/**
 * Webpack plugins.
 */
var plugins = function (bud) { return ({
    bud: bud,
    pluginQueue: bud.state.plugins.adapters,
    make: function () {
        var _this = this;
        this.doHook('pre');
        this.plugins = this.pluginQueue
            .map(function (plugin) {
            return _this.bud.plugin.controller
                .initController(plugin)
                .buildPlugin();
        })
            .filter(function (plugin) { return plugin !== undefined; });
        this.doHook('post');
        return {
            plugins: this.plugins,
        };
    },
    doHook: function (name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.bud.hooks.call(name + "_plugins", this, params);
    },
}); };
exports.plugins = plugins;


/***/ }),
/* 143 */,
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(145);

const {
  useEffect
} = React;

const {
  useApp,
  useInput
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);

const notifier = __webpack_require__(148);

const useStdOutDimensions = __webpack_require__(149);

const {
  useWebpack
} = __webpack_require__(150);

const {
  useFocusState
} = __webpack_require__(154);

const {
  App
} = __webpack_require__(156);

const {
  Assets
} = __webpack_require__(162);

const {
  BrowserSync
} = __webpack_require__(163);

const {
  Errors
} = __webpack_require__(165);

const {
  Warnings
} = __webpack_require__(167);

const {
  DevServer
} = __webpack_require__(173);
/**
 * Successful build
 *
 * @prop {object} build
 * @return {boolean}
 */


const successfulBuild = build => {
  var _build$errors, _build$assets;

  return !(build === null || build === void 0 ? void 0 : (_build$errors = build.errors) === null || _build$errors === void 0 ? void 0 : _build$errors.length) > 0 && (build === null || build === void 0 ? void 0 : build.percentage) == 1 && (build === null || build === void 0 ? void 0 : (_build$assets = build.assets) === null || _build$assets === void 0 ? void 0 : _build$assets.length) > 0;
};
/**
 * Budpack build status display
 *
 * @prop {object} compiler webpack compiler
 * @prop {object} config   webpack compiler config
 */


const Runner = ({
  compiler,
  bud
}) => {
  var _bud$state2, _bud$state2$features, _bud$state3, _bud$state3$features;

  const [width, height] = useStdOutDimensions();
  const [state, actions] = useFocusState();
  const {
    exit
  } = useApp();
  useInput(input => {
    if (input == 'q') {
      exit();
      process.exit();
    }
  });
  useEffect(() => {
    var _bud$state, _bud$state$features;

    !((_bud$state = bud.state) === null || _bud$state === void 0 ? void 0 : (_bud$state$features = _bud$state.features) === null || _bud$state$features === void 0 ? void 0 : _bud$state$features.watch) && (build === null || build === void 0 ? void 0 : build.assets) && (build === null || build === void 0 ? void 0 : build.percentage) && exit();
  });
  const build = useWebpack({
    compiler,
    bud
  });
  useEffect(() => {
    successfulBuild(build) && notifier.notify({
      title: 'Build complete',
      message: `${build.assets.length} assets built.`
    });
  }, [build === null || build === void 0 ? void 0 : build.percentage]);
  const showBrowserSync = !((_bud$state2 = bud.state) === null || _bud$state2 === void 0 ? void 0 : (_bud$state2$features = _bud$state2.features) === null || _bud$state2$features === void 0 ? void 0 : _bud$state2$features.debug) && ((_bud$state3 = bud.state) === null || _bud$state3 === void 0 ? void 0 : (_bud$state3$features = _bud$state3.features) === null || _bud$state3$features === void 0 ? void 0 : _bud$state3$features.browserSync);
  return /*#__PURE__*/React.createElement(App, {
    width: width,
    height: height,
    build: build,
    state: state,
    bud: bud
  }, /*#__PURE__*/React.createElement(Assets, {
    width: width,
    actions: actions,
    build: build
  }), /*#__PURE__*/React.createElement(Errors, {
    actions: actions,
    build: build
  }), /*#__PURE__*/React.createElement(Warnings, {
    actions: actions,
    build: build
  }), showBrowserSync && /*#__PURE__*/React.createElement(BrowserSync, {
    actions: actions
  }), /*#__PURE__*/React.createElement(DevServer, {
    actions: actions,
    build: build
  }));
};

Runner.propTypes = {
  compiler: PropTypes.object,
  bud: PropTypes.object
};
module.exports = {
  Runner
};

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("ink");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("node-notifier");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("ink-use-stdout-dimensions");

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

const {
  useState,
  useEffect,
  useMemo
} = __webpack_require__(145);

const {
  ProgressPlugin
} = __webpack_require__(83);

const browserSync = __webpack_require__(151);

const webpackDevMiddleware = __webpack_require__(152);

const webpackHotMiddleware = __webpack_require__(153);

const makeMiddleware = (compiler, bud) => [webpackDevMiddleware(compiler, {
  headers: bud.state.options.dev.headers,
  publicPath: bud.state.paths.public || '/',
  stats: {
    version: true,
    hash: true,
    time: true,
    assets: true,
    errors: true,
    warnings: true
  }
}), webpackHotMiddleware(compiler, {
  log: msg => {
    console.log(msg);
  }
})];

const hotSyncServer = (bud, compiler, callback) => {
  return browserSync.init({
    proxy: {
      target: 'bud-sandbox.valet',
      ws: true
    },
    logLevel: 'silent',
    reloadOnRestart: true,
    injectFileTypes: ['js', 'css'],
    open: true,
    middleware: makeMiddleware(compiler, bud),
    injectChanges: true,
    watchOptions: {
      ignoreInitial: true
    },
    files: [bud.src('**/*.js'), bud.src('**/*.js'), bud.src('*.css'), bud.src('**/*.css')]
  }, callback);
};
/**
 * useProgress: Webpack ProgressPlugin
 * @return {object}
 */


const useProgress = () => {
  const [progressPlugin, setProgressPlugin] = useState();
  const [percentage, setPercentage] = useState(0);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    !progressPlugin && setProgressPlugin(new ProgressPlugin({
      activeModules: true,
      modules: true,

      handler(percentage, message) {
        setPercentage(percentage);
        setMessage(message);
      }

    }));
  }, []);
  return {
    progressPlugin,
    percentage,
    message
  };
};
/**
 * Hook: useWebpack
 * @prop {compiler} compiler webpack.compiler
 * @prop {string}   options  project options
 */


const useWebpack = ({
  compiler,
  bud
}) => {
  const {
    progressPlugin,
    percentage,
    message
  } = useProgress();
  const [progressPluginApplied, setProgressPluginApplied] = useState(null);
  useEffect(() => {
    if (progressPlugin) {
      progressPlugin.apply(compiler);
      setProgressPluginApplied(true);
    }
  }, [progressPlugin, compiler]);
  const [buildStats, setBuildStats] = useState({});
  const [buildErrors, setBuildErrors] = useState([]);
  const [webpackRunning, setWebpackRunning] = useState(null);
  const [devServer, setDevServer] = useState(null);
  useEffect(() => {
    const webpackCallback = (err, stats) => {
      setBuildErrors(err);
      setBuildStats(stats === null || stats === void 0 ? void 0 : stats.toJson({
        version: true,
        hash: true,
        time: true,
        assets: true,
        errors: true,
        warnings: true
      }));
    };

    if (progressPluginApplied) {
      if (!webpackRunning) {
        setWebpackRunning(true);
        bud.featureEnabled('watch') ? compiler.watch({}, webpackCallback) : compiler.run(webpackCallback);
      }
    }
  }, [progressPluginApplied, bud, compiler]);
  const [assets, setAssets] = useState([]);
  const [warnings, setWarnings] = useState([]);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    (buildStats === null || buildStats === void 0 ? void 0 : buildStats.assets) && setAssets(buildStats.assets);
    (buildStats === null || buildStats === void 0 ? void 0 : buildStats.warnings) && setWarnings(buildStats.warnings);
    (buildStats === null || buildStats === void 0 ? void 0 : buildStats.errors) && setErrors(buildStats === null || buildStats === void 0 ? void 0 : buildStats.errors);
  }, [buildStats, buildErrors]);
  useMemo(() => {
    if (webpackRunning && bud.featureEnabled('hot') && !devServer && (buildStats || buildErrors)) {
      hotSyncServer(bud, compiler, (err, bs) => {
        setDevServer(bs.name);
      });
    }
  }, [webpackRunning, devServer]);
  return {
    assets,
    devServer,
    errors,
    hash: buildStats === null || buildStats === void 0 ? void 0 : buildStats.hash,
    time: buildStats === null || buildStats === void 0 ? void 0 : buildStats.time,
    warnings,
    percentage,
    message
  };
};

module.exports = {
  useWebpack
};

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("browser-sync");

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const React = __webpack_require__(145);

const globalState = __webpack_require__(155);

const useFocusState = globalState(React, {
  assets: true,
  debug: false,
  devServer: false,
  errors: false,
  warnings: false
}, {
  setFocus: (store, value) => {
    store.setState(_objectSpread(_objectSpread({}, store.state), value));
  }
});
module.exports = {
  useFocusState
};

/***/ }),
/* 155 */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Forked from {@link https://github.com/andregardi/use-global-hook}
 */
function setState(store, newState, afterUpdateCallback) {
  store.state = _objectSpread(_objectSpread({}, store.state), newState);
  store.listeners.forEach(listener => {
    listener.run(store.state);
  });
  afterUpdateCallback && afterUpdateCallback();
}

function useCustom(store, React, mapState, mapActions) {
  const [, originalHook] = React.useState(Object.create(null));
  const state = mapState ? mapState(store.state) : store.state;
  const actions = React.useMemo(() => mapActions ? mapActions(store.actions) : store.actions, [mapActions, store.actions]);
  React.useEffect(() => {
    const newListener = {
      oldState: {}
    };
    newListener.run = mapState ? newState => {
      const mappedState = mapState(newState);

      if (mappedState !== newListener.oldState) {
        newListener.oldState = mappedState;
        originalHook(mappedState);
      }
    } : originalHook;
    store.listeners.push(newListener);
    newListener.run(store.state);
    return () => {
      store.listeners = store.listeners.filter(listener => listener !== newListener);
    };
  }, []); // eslint-disable-line

  return [state, actions];
}

function associateActions(store, actions) {
  const associatedActions = {};
  Object.keys(actions).forEach(key => {
    if (typeof actions[key] === 'function') {
      associatedActions[key] = actions[key].bind(null, store);
    }

    if (typeof actions[key] === 'object') {
      associatedActions[key] = associateActions(store, actions[key]);
    }
  });
  return associatedActions;
}

const useStore = (React, initialState, actions, initializer) => {
  const store = {
    state: initialState,
    listeners: []
  };
  store.setState = setState.bind(null, store);
  store.actions = associateActions(store, actions);
  if (initializer) initializer(store);
  return useCustom.bind(null, store, React);
};

module.exports = useStore;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(145);

const {
  useEffect,
  useState
} = React;

const {
  Box,
  Spacer
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);

const {
  Nav
} = __webpack_require__(157);

const {
  BuildInfo
} = __webpack_require__(158);
/**
 * App
 *
 * @prop {React.Component[]} children
 * @prop {object} state
 * @prop {object} build
 * @prop {object} options
 * @prop {number} width
 * @prop {number} height
 * @return {PropTypes.Component}
 */


const App = ({
  children,
  state,
  build,
  bud,
  width,
  height
}) => {
  const [focused, setFocused] = useState({});
  useEffect(() => {
    setFocused(state);
  }, [state]);
  return /*#__PURE__*/React.createElement(Box, {
    width: width,
    maxWidth: width,
    minHeight: height,
    textWrap: "truncate",
    paddingRight: 1,
    paddingBottom: 1,
    paddingTop: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Nav, {
    build: build,
    focused: focused || {},
    bud: bud
  }), children, /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(BuildInfo, {
    build: build,
    width: width
  }));
};

App.propTypes = {
  children: PropTypes.array,
  state: PropTypes.object,
  build: PropTypes.object,
  bud: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number
};
module.exports = {
  App
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(145);

const {
  Box,
  Spacer,
  Text
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);
/**
 * List item indicator
 * @prop {boolean} active
 */


const Bullet = ({
  active
}) => /*#__PURE__*/React.createElement(Text, null, active ? '◉' : ' ');

Bullet.propTypes = {
  active: PropTypes.bool
};
/**
 * Nav
 *
 * @prop {object} build
 * @prop {boolean} focused
 * @prop {object} bud
 */

const Nav = ({
  build,
  focused,
  bud
}) => {
  var _build$errors, _build$errors2, _build$warnings, _build$warnings2;

  return /*#__PURE__*/React.createElement(Box, {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    color: '#545DD7'
  }, "@roots/bud")), /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    color: (focused === null || focused === void 0 ? void 0 : focused.assets) ? 'white' : '#6C758F'
  }, /*#__PURE__*/React.createElement(Bullet, {
    active: focused === null || focused === void 0 ? void 0 : focused.assets
  }), " Assets")), /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    color: (build === null || build === void 0 ? void 0 : (_build$errors = build.errors) === null || _build$errors === void 0 ? void 0 : _build$errors.length) > 0 ? '#dc3545' : (focused === null || focused === void 0 ? void 0 : focused.errors) ? 'white' : '#6C758F'
  }, /*#__PURE__*/React.createElement(Bullet, {
    active: (focused === null || focused === void 0 ? void 0 : focused.errors) || false
  }), " Errors", (build === null || build === void 0 ? void 0 : (_build$errors2 = build.errors) === null || _build$errors2 === void 0 ? void 0 : _build$errors2.length) > 0 && build.errors[0] ? ` [${build === null || build === void 0 ? void 0 : build.errors.length}]` : `  `)), /*#__PURE__*/React.createElement(Text, null, build.errors[0]), /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    color: (build === null || build === void 0 ? void 0 : (_build$warnings = build.warnings) === null || _build$warnings === void 0 ? void 0 : _build$warnings.length) > 0 ? '#fd7e14' : (focused === null || focused === void 0 ? void 0 : focused.warnings) ? 'white' : '#6C758F'
  }, /*#__PURE__*/React.createElement(Bullet, {
    active: (focused === null || focused === void 0 ? void 0 : focused.warnings) || false
  }), " Warnings", (build === null || build === void 0 ? void 0 : (_build$warnings2 = build.warnings) === null || _build$warnings2 === void 0 ? void 0 : _build$warnings2.length) > 0 ? ` [${build === null || build === void 0 ? void 0 : build.warnings.length}]` : `  `)), bud.featureEnabled('hot') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    color: (focused === null || focused === void 0 ? void 0 : focused.devServer) ? 'white' : '#6C758F'
  }, /*#__PURE__*/React.createElement(Bullet, {
    active: focused === null || focused === void 0 ? void 0 : focused.devServer
  }), " Dev server"))), bud.featureEnabled('browserSync') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    color: (focused === null || focused === void 0 ? void 0 : focused.browserSync) ? 'white' : '#6C758F'
  }, /*#__PURE__*/React.createElement(Bullet, {
    active: focused === null || focused === void 0 ? void 0 : focused.browserSync
  }), " BrowserSync"))), bud.featureEnabled('debug') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    color: (focused === null || focused === void 0 ? void 0 : focused.debug) ? '#ffc107' : '#ffe598'
  }, /*#__PURE__*/React.createElement(Bullet, {
    active: (focused === null || focused === void 0 ? void 0 : focused.debug) || false
  }), " Debug"))));
};

Nav.propTypes = {
  build: PropTypes.object,
  focused: PropTypes.object,
  bud: PropTypes.object
};
module.exports = {
  Nav
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

/** Modules */
const React = __webpack_require__(145);

const {
  Box,
  Text
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);
/** Application components */


const {
  Loading
} = __webpack_require__(159);
/**
 * Build Info
 */


const BuildInfo = ({
  build,
  width
}) => /*#__PURE__*/React.createElement(Box, {
  flexDirection: "column",
  paddingTop: 1
}, (build === null || build === void 0 ? void 0 : build.percentage) == 1 && (build === null || build === void 0 ? void 0 : build.hash) && /*#__PURE__*/React.createElement(Text, {
  color: "#6C758F",
  marginTop: 1
}, "Build ", build === null || build === void 0 ? void 0 : build.hash, ". Finished in ", (build === null || build === void 0 ? void 0 : build.time) / 1000, "s."), /*#__PURE__*/React.createElement(Loading, {
  build: build,
  width: width
}));

BuildInfo.propTypes = {
  build: PropTypes.object,
  bud: PropTypes.object,
  width: PropTypes.number
};
module.exports = {
  BuildInfo
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(145);

const {
  Box,
  Text
} = __webpack_require__(146);

const {
  Bar
} = __webpack_require__(160);

const PropTypes = __webpack_require__(147);
/**
 * Loading (Progress Plugin)
 */


const Loading = ({
  build,
  width
}) => {
  var _build$percentage;

  return (build === null || build === void 0 ? void 0 : build.percentage) > 0 && (build === null || build === void 0 ? void 0 : build.percentage) < 1 ? /*#__PURE__*/React.createElement(Box, {
    maxWidth: width,
    textWrap: "truncate",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Text, {
    bgcolor: '#171c56'
  }, /*#__PURE__*/React.createElement(Text, {
    width: 6
  }, Math.round((build === null || build === void 0 ? void 0 : build.percentage) * 100), "%", (build === null || build === void 0 ? void 0 : build.percentage) < 1 ? '  ' : ' ')), /*#__PURE__*/React.createElement(Text, {
    color: '#545DD7'
  }, /*#__PURE__*/React.createElement(Bar, {
    character: "\u2588",
    percent: (_build$percentage = build === null || build === void 0 ? void 0 : build.percentage) !== null && _build$percentage !== void 0 ? _build$percentage : 0.01
  }))) : [];
};

Loading.propTypes = {
  build: PropTypes.object,
  width: PropTypes.number
};
module.exports = {
  Loading
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(145);

const {
  Text
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);

const blacklist = __webpack_require__(161);

const BLACKLIST_PROPS = ['percent', 'left', 'right', 'columns', 'character', 'rightPad'];

class Bar extends React.Component {
  getString() {
    const {
      percent,
      columns,
      left,
      right,
      character,
      rightPad
    } = this.props;
    const screen = columns || process.stdout.columns || 80;
    const space = screen - right - left;
    const max = Math.min(Math.floor(space * percent), space);
    const chars = character.repeat(max);

    if (!rightPad) {
      return chars;
    }

    return chars + ' '.repeat(space - max);
  }

  render() {
    const props = blacklist(this.props, BLACKLIST_PROPS);
    return /*#__PURE__*/React.createElement(Text, props, this.getString());
  }

}

Bar.defaultProps = {
  columns: 0,
  percent: 1,
  left: 0,
  right: 0,
  character: '█',
  rightPad: false
};
Bar.propTypes = {
  columns: PropTypes.number,
  percent: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  character: PropTypes.string,
  rightPad: PropTypes.bool
};
module.exports = {
  Bar
};

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = require("blacklist");

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(145);

const {
  useEffect
} = React;

const {
  Box,
  Spacer,
  Text,
  useFocus
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);
/**
 * Indicator
 *
 * @prop {boolean} emitted
 * @return {PropTypes.ReactComponentLike}
 */


const Indicator = ({
  emitted
}) => /*#__PURE__*/React.createElement(Text, {
  color: emitted ? '#545DD7' : '#6C758F'
}, "\u29BF ");

Indicator.propTypes = {
  emitted: PropTypes.bool
};
/**
 * Asset
 *
 * @prop {object} asset
 * @return {PropTypes.ReactComponentLike}
 */

const Asset = ({
  asset
}) => {
  const display = asset.name.split('.').pop() == 'css' || asset.name.split('.').pop() == 'js';
  return !display ? [] : /*#__PURE__*/React.createElement(Box, {
    flexDirection: "row",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Indicator, {
    emitted: asset.emitted
  }), /*#__PURE__*/React.createElement(Text, {
    color: asset.emitted ? 'white' : 'gray'
  }, asset.name)), /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, {
    dimColor: "white"
  }, asset.size / 1000, "kb")));
};

Asset.propTypes = {
  asset: PropTypes.object
};
/**
 * Assets
 *
 * @prop {object} build
 * @prop {object} actions
 * @prop {number} width
 * @return {PropTypes.ReactComponentLike}
 */

const Assets = ({
  build,
  actions
}) => {
  var _build$assets, _build$assets2;

  const {
    isFocused
  } = useFocus({
    autoFocus: true
  });
  useEffect(() => {
    actions.setFocus({
      assets: isFocused
    });
  }, [isFocused]);
  return /*#__PURE__*/React.createElement(Box, {
    display: isFocused ? 'flex' : 'none',
    flexDirection: "column"
  }, build === null || build === void 0 ? void 0 : (_build$assets = build.assets) === null || _build$assets === void 0 ? void 0 : _build$assets.map((asset, id) => /*#__PURE__*/React.createElement(Asset, {
    key: id,
    asset: asset
  })), (build === null || build === void 0 ? void 0 : (_build$assets2 = build.assets) === null || _build$assets2 === void 0 ? void 0 : _build$assets2.length) == 0 && /*#__PURE__*/React.createElement(Text, null, "Loading"));
};

Assets.propTypes = {
  build: PropTypes.object,
  actions: PropTypes.object,
  width: PropTypes.number
};
module.exports = {
  Assets
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(145);

const {
  useEffect,
  useState
} = React;

const {
  Box,
  Text,
  useFocus
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);

const patchConsole = __webpack_require__(164);
/**
 * BrowserSync info
 *
 * @prop {object} actions
 * @return {PropTypes.ReactComponentLike}
 */


const BrowserSync = ({
  actions
}) => {
  const {
    isFocused
  } = useFocus({
    autoFocus: false
  });
  useEffect(() => {
    actions === null || actions === void 0 ? void 0 : actions.setFocus({
      browserSync: isFocused
    });
  }, [isFocused]);
  /**
   * Capture BrowserSync console out using `patch-console`. This
   * pkg allows for inserting the console.out into a specific place
   * in the component. Left alone the stdout/stderr and the React CLI
   * will conflict.
   *
   * Additionally, compare the last rendered text with the new render.
   * If they are identical it's likely the BrowserSync watching message.
   * Discard it if they are a match so we don't just repeat that message
   * ad nauseum.
   */

  const [lastConsole, setLastConsole] = useState(null);
  const [consoleOut, setConsoleOut] = useState('');
  patchConsole((stream, data) => {
    setLastConsole(data);
    const frameOut = lastConsole !== data ? consoleOut + data : consoleOut;
    setConsoleOut(frameOut);
  });
  return /*#__PURE__*/React.createElement(Box, {
    display: isFocused ? 'flex' : 'none',
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, consoleOut));
};

BrowserSync.propTypes = {
  actions: PropTypes.object
};
module.exports = {
  BrowserSync
};

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = require("patch-console");

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(145);

const {
  useEffect,
  useState
} = React;

const {
  Box,
  Text,
  useFocus
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);

const {
  Error
} = __webpack_require__(166);
/**
 * Error
 */


const Errors = ({
  build,
  actions
}) => {
  var _build$errors, _build$errors2, _build$warnings;

  const {
    isFocused
  } = useFocus({
    autoFocus: true
  });
  useEffect(() => {
    actions === null || actions === void 0 ? void 0 : actions.setFocus({
      errors: isFocused
    });
  }, [isFocused]);
  const [display, setDisplay] = useState(null);
  useEffect(() => {
    setDisplay(isFocused);
  }, [isFocused, build === null || build === void 0 ? void 0 : build.errors]);
  return /*#__PURE__*/React.createElement(Box, {
    display: display ? 'flex' : 'none',
    flexDirection: "column"
  }, (build === null || build === void 0 ? void 0 : (_build$errors = build.errors) === null || _build$errors === void 0 ? void 0 : _build$errors.length) > 0 && (build === null || build === void 0 ? void 0 : build.errors[0]) !== [] && (build === null || build === void 0 ? void 0 : (_build$errors2 = build.errors) === null || _build$errors2 === void 0 ? void 0 : _build$errors2.map((err, i) => /*#__PURE__*/React.createElement(Error, {
    message: err,
    key: i
  }))), (build === null || build === void 0 ? void 0 : (_build$warnings = build.warnings) === null || _build$warnings === void 0 ? void 0 : _build$warnings.length) == 0 && /*#__PURE__*/React.createElement(Text, null, "Nothing to see here."));
};

Errors.propTypes = {
  build: PropTypes.object,
  actions: PropTypes.object
};
module.exports = {
  Errors
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

const notifier = __webpack_require__(148);

const React = __webpack_require__(145);

const {
  useEffect
} = React;

const {
  Box,
  Text
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);
/**
 * Error
 *
 * @prop {string} message
 * @return {PropTypes.ReactComponentLike}
 */


const Error = ({
  message
}) => {
  useEffect(() => {
    message && notifier.notify({
      title: 'Build error',
      message
    });
  }, [message]);
  return /*#__PURE__*/React.createElement(Box, {
    paddingLeft: 1,
    paddingRight: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, {
    wrap: "wrap"
  }, message || ''));
};

Error.propTypes = {
  message: PropTypes.string
};
module.exports = {
  Error
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(168);

const {
  useEffect,
  useState
} = __webpack_require__(145);

const {
  Box,
  Text,
  useFocus
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);

const {
  Warning
} = __webpack_require__(172);
/**
 * Warnings
 *
 * @prop {object} build
 * @prop {object} actions
 * @return {PropTypes.ReactComponentLike}
 */


const Warnings = ({
  build,
  actions
}) => {
  var _build$warnings, _build$warnings2, _build$warnings3;

  const {
    isFocused
  } = useFocus({
    autoFocus: false
  });
  useEffect(() => {
    actions === null || actions === void 0 ? void 0 : actions.setFocus({
      warnings: isFocused
    });
  }, [isFocused]);
  const [display, setDisplay] = useState(null);
  useEffect(() => {
    setDisplay(isFocused);
  }, [isFocused, build === null || build === void 0 ? void 0 : build.warnings]);
  return /*#__PURE__*/React.createElement(Box, {
    display: display ? 'flex' : 'none',
    flexDirection: "column"
  }, (build === null || build === void 0 ? void 0 : (_build$warnings = build.warnings) === null || _build$warnings === void 0 ? void 0 : _build$warnings.length) > 0 && (build === null || build === void 0 ? void 0 : (_build$warnings2 = build.warnings) === null || _build$warnings2 === void 0 ? void 0 : _build$warnings2.map((warning, i) => /*#__PURE__*/React.createElement(Warning, {
    message: warning,
    key: i
  }))), (build === null || build === void 0 ? void 0 : (_build$warnings3 = build.warnings) === null || _build$warnings3 === void 0 ? void 0 : _build$warnings3.length) == 0 && /*#__PURE__*/React.createElement(Text, null, "Nothing to see here."));
};

Warnings.propTypes = {
  build: PropTypes.object,
  actions: PropTypes.object
};
module.exports = {
  Warnings
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(169);
}


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(170);
var checkPropTypes = __webpack_require__(171);

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = require("prop-types/checkPropTypes");

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

const notifier = __webpack_require__(148);

const React = __webpack_require__(145);

const {
  useEffect
} = React;

const {
  Box,
  Text
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);
/**
 * Warning (single)
 *
 * @prop {string} message
 * @return {PropTypes.ReactComponentLike}
 */


const Warning = ({
  message
}) => {
  useEffect(() => {
    message && notifier.notify({
      title: 'Warning',
      message
    });
  }, [message]);
  return !message ? [] : /*#__PURE__*/React.createElement(Box, {
    paddingLeft: 1,
    paddingRight: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, {
    wrap: "wrap"
  }, message));
};

Warning.propTypes = {
  message: PropTypes.string
};
module.exports = {
  Warning
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

const React = __webpack_require__(145);

const {
  useEffect,
  useState
} = React;

const {
  Box,
  Text,
  useFocus
} = __webpack_require__(146);

const PropTypes = __webpack_require__(147);

const patchConsole = __webpack_require__(164);
/**
 * DevServer info
 *
 * @prop {object} actions
 * @return {PropTypes.ReactComponentLike}
 */


const DevServer = ({
  build,
  actions
}) => {
  const {
    isFocused
  } = useFocus({
    autoFocus: false
  });
  useEffect(() => {
    actions === null || actions === void 0 ? void 0 : actions.setFocus({
      devServer: isFocused
    });
  }, [isFocused]);
  /**
   * Capture DevServer console out using `patch-console`. This
   * pkg allows for inserting the console.out into a specific place
   * in the component. Left alone the stdout/stderr and the React CLI
   * will conflict.
   *
   * Additionally, compare the last rendered text with the new render.
   * If they are identical it's likely the DevServer watching message.
   * Discard it if they are a match so we don't just repeat that message
   * ad nauseum.
   */

  const [lastConsole, setLastConsole] = useState(null);
  const [consoleOut, setConsoleOut] = useState('');
  patchConsole((stream, data) => {
    setLastConsole(data);
    const frameOut = lastConsole !== data ? consoleOut + data : consoleOut;
    setConsoleOut(frameOut);
  });
  return /*#__PURE__*/React.createElement(Box, {
    display: isFocused ? 'flex' : 'none',
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Text, null, build === null || build === void 0 ? void 0 : build.devServer));
};

DevServer.propTypes = {
  build: PropTypes.object,
  actions: PropTypes.object
};
module.exports = {
  DevServer
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.compiler = void 0;
var build_1 = __webpack_require__(107);
var renderCompilerDashboard_1 = __webpack_require__(175);
var renderSafeMode_1 = __webpack_require__(176);
/**
 * Compiler
 */
var compiler = function (bud) {
    /**
     * Use bud's default dashboard when enabled
     */
    var dashboardEnabled = bud.state.features.dashboard;
    /**
     * Dump config to stdout close process before build when enabled
     */
    var dumpEnabled = bud.state.features.dump;
    /**
     * Pre-configuration hook
     */
    bud.hooks.call('pre_config', bud);
    /**
     * webpack configuration
     */
    var compiledConfig = build_1.build(bud).makeConfig();
    /**
     * Post-configuration hook (finalizes webpack configuration)
     */
    bud.hooks.call('post_config', compiledConfig);
    /**
     * Dump if dumpEnabled conditional check is true
     */
    dumpEnabled && bud.util.dump(compiledConfig);
    /**
     * Run compiler.
     */
    dashboardEnabled
        ? renderCompilerDashboard_1.renderCompilerDashboard(bud, compiledConfig) // enabled: bud compiler
        : renderSafeMode_1.compileSafeMode(bud, compiledConfig); // disabled: more standard stats output
};
exports.compiler = compiler;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.renderCompilerDashboard = void 0;
var webpack_1 = __importDefault(__webpack_require__(83));
var react_1 = __importDefault(__webpack_require__(145));
var ink_1 = __webpack_require__(146);
var Runner_1 = __webpack_require__(144);
var injectHot = function (webpackConfig) {
    var client = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&overlay=true';
    Object.keys(webpackConfig.entry).forEach(function (entry) {
        webpackConfig.entry[entry] = [client].concat(webpackConfig.entry[entry]);
    });
    return webpackConfig;
};
/**
 * Webpack compilation dashboard renderer.
 */
var renderCompilerDashboard = function (bud, webpackConfig) {
    var compiler = bud.featureEnabled('hot')
        ? webpack_1["default"](injectHot(webpackConfig))
        : webpack_1["default"](webpackConfig);
    var runnerProps = {
        bud: bud,
        compiler: compiler,
    };
    var application = react_1["default"].createElement(Runner_1.Runner, runnerProps);
    /** 🚀 */
    ink_1.render(application);
};
exports.renderCompilerDashboard = renderCompilerDashboard;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.compileSafeMode = void 0;
var webpack_1 = __importDefault(__webpack_require__(83));
var chalk_1 = __importDefault(__webpack_require__(177));
/**
 * Display stats.
 *
 * Normal-ish webpack stdout.
 *
 * @param  {object} stats - webpack stats object
 * @return {void}
 */
var displayStats = function (stats) {
    console.log(chalk_1["default"].bgWhite.black('\n Build results \n'));
    var statsOptions = {
        all: false,
        assets: true,
        errors: true,
        warnings: true,
        colors: {
            green: '\u001b[38;5;63m',
        },
    };
    console.log(stats.toString(statsOptions));
    console.log('\n');
};
/**
 * Safe mode
 */
var compileSafeMode = function (config, webpackConfig) {
    var webpackCallback = function (err, stats) {
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
            return;
        }
        displayStats(stats);
        if (config.inProduction || config.mode === 'none') {
            process.exit(0);
        }
    };
    if (!config.inProduction) {
        webpack_1["default"](webpackConfig).watch({}, webpackCallback);
    }
    else {
        webpack_1["default"](webpackConfig).run(webpackCallback);
    }
};
exports.compileSafeMode = compileSafeMode;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ })
/******/ ]);