var pkg = require('./package');

module.exports = {

    // -------------------------------------------------------------------------------------
    // INITIAL CONFIGURATION
    // -------------------------------------------------------------------------------------

    // Setup
    init: {
        // Select a Template Engine    - OPTIONS: none, jade, handlebars
        view: 'none',

        // Select a preprocessor       - OPTIONS: none, compass, stylus, less
        style: 'stylus',

        // Select a JavaScript module  - OPTIONS: none, umd, requirejs, browserify
        module: 'none',

        // Select a deploy method      - OPTIONS: none, ftp-deploy, rsync
        deploy: 'none',

        // Select a unit test tool     - OPTIONS: none, mocha, jasmine, qunit
        test: 'none',

        // Would you like to use Karma?
        karma: true,

        // Select a development side   - OPTIONS: client, server, both
        side: 'client'
    },

    // Folders
    modules: 'app/scritps/modules',
    requires: 'app/scripts/requires',
    test: {
        main:    'spec',
        helpers: 'spec/helpers',
        modules: 'spec/modules'
    },
    dist: {
        main:    'public',
        styles:  'public/styles',
        scripts: 'public/scripts',
        images:  'public/images',
        fonts:   'public/fonts'
    },
    src: {
        main:    'app',
        views:   'app/views',
        styles:  'app/styles',
        scripts: 'app/scripts',
        images:  'app/images',
        fonts:   'app/fonts'
    },

    // -------------------------------------------------------------------------------------
    // TASKS CONFIGURATION
    // -------------------------------------------------------------------------------------

    // Browser Sync
    syncFiles: [
        'public/styles/style.css',
        'public/scripts/app.min.js',
        'public/*.{php, html}'
    ],

    // Uglify
    minifyFiles: ['app/scripts/**/*.js'],

    // Lint
    lintFiles: ['Gruntfile.js', 'app/scripts/main.js'],

    // Deploy
    deploy: {
        host: 'ftp.domain.com',
        port: 21,
        src:  'public/',
        dest: 'public/www',
        ignore: [
            '.git*',
            '*.scss',
            'node_modules'
        ]
    },

    // Browserify
    // List of transforms: https://github.com/substack/node-browserify/wiki/list-of-transforms
    transforms: [
        'hbsfy',
        'es6ify',
        'coffeeify',
        'debowerify',
        'decomponentify',
        'deamdify',
        'deglobalify'
    ],

    // UMD
    dependencies: {
        'default': [''],
        global: ['jquery'],
        amd: [''],
        cjs: ['']
    },

    // Banner
    banner: [
        '/**',
        ' * -------------------------------------------------------',
        ' * <%= pkg.title %> - <%= pkg.description %>',
        ' * @version v<%= pkg.version %>',
        ' * @link    <%= pkg.homepage %>',
        ' * @license <%= pkg.license %>',
        ' * -------------------------------------------------------',
        ' */',
        ''
    ].join('\n')
};
