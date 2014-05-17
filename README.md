![Gruntify Logo](logo-gruntify.jpg "Gruntify")

Gruntify is a project inspired by [Makefy](https://github.com/vitorbritto/makefy). It's a shortcut to start a new project with Grunt or place it in your current project.

You'll install **only once** all dependencies in **development** environment, define your tasks, set your configuration and build it. All the tasks are well commented with specific options for each plugin.

> **TODO LIST:** you can check updates notes [here](https://github.com/vitorbritto/gruntify/issues/)

## Getting Started

So, It's quite simple to get start. Check the following steps to set up your gruntfile with Gruntify.

### Installation

First of all, make sure you have [NodeJS](http://nodejs.org/) and [Grunt CLI](http://gruntjs.com/) installed. If you want to use [Bower](http://bower.io/), make sure you have it installed too.

**New project**

```bash
# 1. Clone this repository and access the new project directory
$ git clone git://github.com/vitorbritto/gruntify.git [projectname]
$ cd [projectname]

# 2. Execute the makefile
$ make new

# 3. Set up your configuration
# 4. Profit!
```

**Existing Project (non Grunt project)**

```bash
# 1. Clone this repository (make sure to be inside your project directory)
$ git clone git://github.com/vitorbritto/gruntify.git

# 2. Execute the makefile
$ make current

# 3. Set up your configuration
# 4. Profit!
```

### How it works?

#### 1. Configuration

The `grunt.conf.js` file contain all the necessary settings for your build process. Check out a detailed diagram of the initial configuration:

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

// Modules
transforms: [
    'hsbfy',
    'es6fy',
    'coffefy',
    'debowerify',
    'decomponentify',
    'deamdify',
    'deglobalify'
],
dependencies: {
    'default': [''],
    global: ['jquery'],
    amd: [''],
    cjs: ['']
},

// Banner
banner: '\n' +
'/*\n' +
' * -------------------------------------------------------\n' +
' * ' + pkg.title + ' - v' + pkg.version + '\n' +
' *\n' +
' * Copyright (c) <%= grunt.template.today(\"yyyy\") %> ' + pkg.author.name + '\n' +
' * -------------------------------------------------------\n' +
' */\n' +
'\n'
```

#### 2. Select Tasks

Inside the `./task` folder, you'll find each task. For **views**, **styles**, **tests** and **modules** you need to select which task configuration you want to run with Grunt. Just **uncomment** the selected one and **comment** the other(s) you don't want to use.

> Notes:
> 1. For `styles` tasks, if you select **none**, `cssmin` task will be used by default.
> 2. For `views` tasks, if you select **none**, `htmlmin` task will be used by default.

See examples bellow:

**Styles**

```js
// STYLUS
compile: {
    options: {
        // use: [ require('nib') ],
        compress: true
    },
    files: {
        src:  config.src.styles + '/style.styl',
        dest: config.dist.styles + '/style.css'
    }
}

// COMPASS
compile: {
    options: {
        force: true,
        banner: config.banner,
        sassDir: config.src.styles,
        cssDir: config.dist.styles,
        javascriptsDir: config.src.scripts,
        fontsDir: config.src.fonts,
        imagesDir: config.src.images,
        outputStyle: 'compressed',
        require: []
    }
}

// LESS
compile: {
    options: {
        paths: config.src.styles
    },
    files: {
        src:  config.src.styles + '/style.less',
        dest: config.dist.styles + '/style.css'
    }
}
```

**Views**

```js
// JADE
dist: {
    options: {
        data: {
            debug: false
        }
    },
    files: {
        src: config.src.views + '**/*.jade',
        dest: config.dist.main
    }
}

// HANDLEBARS
dist: {
    options: {
        namespace: 'JST'
    },
    files: {
        src: config.src.views + '**/*.jade',
        dest: config.dist.main
    }
}
```

**Unit Tests**

```js
// MOCHA
test: {
    src: config.test.main + '/*.html',
    options: {
        run: true,
    },
}

// JASMINE
pivotal: {
    src: config.test.src + '/**/*.js',
    options: {
        specs: config.test.modules + '/*Spec.js',
        helpers: config.test.helpers + '/*Helper.js'
    }
}

// QUNIT
all: [config.test.main + '/**/*.html']
```

**Modules**

```js
// REQUIREJS
dist: {
    options: {
        baseUrl: config.modules + '/**/*.js',
        mainConfigFile: config.src.scripts + '/config.js',
        out: config.dist.scripts + '/bundle.js',
    }
},

// BROWSERIFY
vendor: {
    src: config.requires + '/**/*.js',
    dest: config.dist.scripts + '/vendor.js'
    options: {
        shim: {
            jquery: {
                path: config.requires + '/jquery/jquery.js',
                exports: '$'
            }
        }
    }
},
app: {
    files: {
        src: config.modules + '/**/*.js',
        dest: config.dist.scripts + '/app.js'
    },
    options: {
        transform: config.transforms,
        external: config.dependencies.global
    }
},
test: {
    files: {
        src: config.spec.main + '/**/*.js',
        dest: config.dist.scripts + '/test.js'
    },
    options: {
        transform: config.transforms,
        external: config.dependencies.global
    }
}

// UMD
dist: {
    src: config.modules + '/**/*.js',
    dest: config.dist.scripts + '/bundle.js',    // optional, if missing the src will be used
    template: 'path/to/template.hbs',            // optional; a template from templates subdir (e.g. 'umd')
    objectToExport: 'library',                   // optional, internal object that will be exported
    amdModuleId: 'id',                           // optional, if missing the AMD module will be anonymous
    globalAlias: 'alias',                        // optional, changes the name of the global variable
    indent: '  ',                                // optional, indent source code
    deps: {                                      // optional
        'default': config.dependencies.default,
        amd: config.dependencies.amd,
        cjs: config.dependencies.cjs,
        global: config.dependencies.global
    }
}
```

### 3. Execute tasks

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
