'use strict';

var template = __dirname + '/templates/jasmine-requirejs.html';

exports.process = function (grunt, task, context) {

    context.serializeRequireConfig = function (requireConfig) {
        return JSON.stringify(requireConfig);
    };
    context.requirejs = __dirname + '/vendor/require.js';

    var source = grunt.file.read(template);
    return grunt.util._.template(source, context);
};