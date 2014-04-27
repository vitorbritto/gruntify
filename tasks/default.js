// AVAILABLE PLUGINS
// -----------------
// grunt-concurrent: https://github.com/sindresorhus/grunt-concurrent

module.exports = function(grunt) {

    'use strict';

    grunt.config('concurrent', {

        tasks: ['nodemon', 'watch'],
        options: {
            logConcurrentOutput: true
        }

    });

    grunt.loadNpmTasks('grunt-concurrent');

};
