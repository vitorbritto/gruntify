// AVAILABLE PLUGINS
// -----------------
// grunt-contrib-jshint: https://github.com/gruntjs/grunt-contrib-jshint
// grunt-contrib-uglify: https://github.com/gruntjs/grunt-contrib-uglify

module.exports = function(grunt) {

    'use strict';

    var config = require('../grunt.conf');

    grunt.config('uglify', {
        path: {
            src: config.minifyFiles,
            dest: config.dist.scripts + '/app.min.js'
        },
        options: {
            mangle: false,
            banner: config.banner
        },
        dist: {
            files: {
                '<%= path.dest%>': '<%= path.src%>'
            }
        }
    });

    grunt.config('jshint', {
        options: {
            jshintrc: '.jshintrc'
        },
        all: config.lintFiles
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

};
