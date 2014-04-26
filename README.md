![Gruntify Logo](logo-gruntify.jpg "Gruntify")

# Gruntify

Gruntify is a project inspired by [Makefy](https://github.com/vitorbritto/makefy). It's a shortcut that I use in my projects, in order to facilitate the configuration of projects that use Grunt.

That's a sweet way to use Grunt. You'll install **once** all dependencies in **development** environment, define your tasks, set your configuration and build it. All the tasks are well commented with specific options for each plugin.

> **TODO LIST:** you can check updates notes [here](https://github.com/vitorbritto/gruntify/issues/1)

## Getting Started

So, It's quite simple to get start. Check the following steps to set up your gruntfile.

### Installation

First of all, make sure you have [NodeJS](http://nodejs.org/) and [Grunt CLI](http://gruntjs.com/) installed.

**New project**

```bash
# 1. Clone this repository
$ git clone git://github.com/vitorbritto/gruntify.git

# 2. Execute the makefile
$ make

# 3. Set up your configuration
# 4. Profit!
```

**Existing Project**

```bash
# 1. Clone this repository
$ git clone git://github.com/vitorbritto/gruntify.git

# 2. Set up your configuration
# 3. Profit!
```

### How it works?

**Configuration:**

The `config.js` file contain all the necessary settings for your build process. Check out a detailed diagram of the initial configuration:

    ```
    // -------------------------------------------------------------------------------------
    // INITIAL CONFIGURATION
    // -------------------------------------------------------------------------------------

    // Setup
    init: {
        view:   'none',       // Select a Template Engine    - OPTIONS: none, jade, handlebars
        style:  'stylus',     // Select a preprocessor       - OPTIONS: none, compass, stylus, less
        module: 'none',       // Select a JavaScript module  - OPTIONS: none, umd, requirejs, browserify
        deploy: 'ftp-deploy', // Select a deploy method      - OPTIONS: none, ftp-deploy, rsync
        test:   'mocha',      // Select a unit test tool     - OPTIONS: mocha, jasmine, qunit
        side:   'both',       // Select a dev side           - OPTIONS: client, server, both
        env:    '--dev',      // Choose an envinroment       - OPTIONS: --dev, --prod
        utils:  false         // Would you like to use utils tasks (copy, clean, compress) ?
    },

    // Folders
    modules: 'app/scritps/modules',
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

    // Browser Sync - List of files you may want to sync
    syncFiles: [
        'public/styles/style.css',
        'public/scripts/app.min.js',
        'public/*.{php, html}'
    ],

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

    // Uglify
    minifyFiles: ['app/scripts/**/*.js'],

    // Lint
    lintFiles: ['Gruntfile.js', 'app/scripts/main.js']
    ```

**Available tasks:**

- `grunt`: Initialize and watch for changes
- `grunt styles`: Optimize CSS
- `grunt scripts`: Optimize JS
- `grunt views`: Compile HTML
- `grunt images`: Optimize Images
- `grunt test`: Test your application
- `grunt deploy`: Deploy for production
- `grunt bundle`: Bundle Assets
- `grunt build`: Build project
- `grunt launch`: Deploy files for production
- `grunt update`: Release a new version on github

## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
