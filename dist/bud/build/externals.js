"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.externals = void 0;
var webpack_node_externals_1 = __importDefault(require("webpack-node-externals"));
var externals = function (bud) { return ({
    bud: bud,
    options: {},
    make: function () {
        if (this.bud.state.options.externals) {
            this.options.externals = this.bud.state.options.externals;
        }
        if (this.bud.state.options.target == 'node') {
            this.options.externals = [webpack_node_externals_1["default"]()];
        }
        return this.options;
    }
}); };
exports.externals = externals;
//# sourceMappingURL=externals.js.map