"use strict";
exports.__esModule = true;
exports.configsRepository = void 0;
var configFiles = [
    {
        name: 'babel',
        filename: 'babel.config.js'
    },
    {
        name: 'eslint',
        filename: '.eslintrc.js'
    },
    {
        name: 'postcss',
        filename: 'postcss.config.js'
    },
    {
        name: 'prettier',
        filename: 'prettier.config.js'
    },
    {
        name: 'stylelint',
        filename: 'stylelint.config.js'
    },
    {
        name: 'typescript',
        filename: 'tsconfig.json'
    },
    {
        name: 'js',
        filename: 'jsconfig.json'
    },
    {
        name: 'vue',
        filename: 'vue.config.js'
    },
];
var configsRepository = function (framework) {
    var fs = framework.fs;
    var paths = framework.paths;
    var repository = {};
    configFiles.forEach(function (_a) {
        var name = _a.name, filename = _a.filename;
        var projectPath = fs.path.join(paths.get('project'), filename);
        if (fs.existsSync(projectPath)) {
            repository[name] = projectPath;
        }
    });
    return repository;
};
exports.configsRepository = configsRepository;
//# sourceMappingURL=configs.js.map