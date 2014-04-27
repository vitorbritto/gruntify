![Gruntify Logo](logo-gruntify.jpg "Gruntify")

# Gruntify

Gruntify is a project inspired by [Makefy](https://github.com/vitorbritto/makefy). It's a shortcut that I use in my projects, in order to facilitate the configuration of projects that uses Grunt.

That's a sweet way to use Grunt. You'll install **once** all dependencies in **development** environment, define your tasks, set your configuration and build it. All the tasks are well commented with specific options for each plugin.

> **TODO LIST:** you can check updates notes [here](https://github.com/vitorbritto/gruntify/issues/)

## Getting Started

So, It's quite simple to get start. Check the following steps to set up your gruntfile with Gruntify.

### Installation

First of all, make sure you have [NodeJS](http://nodejs.org/) and [Grunt CLI](http://gruntjs.com/) installed. If you want to use [Bower](http://bower.io/), make sure you have it installed too.

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

# 2. Install Dependencies
$ npm install

# 3. Set up your configuration
# 4. Profit!
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

        // Select a development side   - OPTIONS: client, server, both
        side: 'both'
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
    }
    ```

**Available tasks:**

- `grunt`: Initialize and watch for changes
- `grunt styles`: Optimize CSS
- `grunt scripts`: Optimize JS
- `grunt views`: Compile HTML
- `grunt images`: Optimize Images
- `grunt test`: Test your application
- `grunt deploy`: Deploy for production
- `grunt bundle`: Bundle Assets with AMD, CJS or UMD
- `grunt build`: Build project
- `grunt launch`: Test, Build files and deploy for production
- `grunt update`: Release a new version on github


## Troubleshooting
During install some of you may encounter some issues, most of this issues can be solved by one of the following tips.
If you went through all this and still can't solve the issue, feel free to contact us via the repository issue tracker or the links provided below.

#### Update NPM, Bower or Grunt
Sometimes you may find there is a weird error during install like npm's *Error: ENOENT*, usually updating those tools to the latest version solves the issue.

Updating NPM:
```
$ npm update -g npm
```

Updating Grunt:
```
$ npm update -g grunt-cli
```

Updating Bower:
```
$ npm update -g bower
```

#### Cleaning NPM and Bower cache
NPM and Bower has a caching system for holding packages that you already installed.
We found that often cleaning the cache solves some troubles this system creates.

NPM Clean Cache:
```
$ npm cache clean
```

Bower Clean Cache:
```
$ bower cache clean
```

## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
