"use strict";
exports.__esModule = true;
exports.svg = void 0;
var loaders_1 = require("./util/loaders");
var patterns_1 = require("./util/patterns");
var svg = function (bud) { return ({
    bud: bud,
    make: function () {
        this.bud.hooks.call('pre_svg');
        this.output = {
            test: this.bud.hooks.filter('loaders_svg_test', patterns_1.patterns.svg),
            use: this.bud.hooks.filter('loaders_svg_use', [loaders_1.loaders.svgr, loaders_1.loaders.url])
        };
        this.bud.hooks.call('post_svg');
        return this.bud.hooks.filter('loaders_svg_final', this.output);
    }
}); };
exports.svg = svg;
//# sourceMappingURL=svg.js.map