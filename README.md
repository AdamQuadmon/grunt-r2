[![NPM version](https://badge.fury.io/js/grunt-r2.png)](http://badge.fury.io/js/grunt-r2)

# grunt-r2

> Grunt task for LTR to RTL CSS conversion using [R2](https://github.com/ded/R2).

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-r2 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-r2');
```

## The "r2" task

### Overview
In your project's Gruntfile, add a section named `r2` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  r2: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Usage Examples

R2 simply swap CSS definition, there is no really RTL or LTR recognition.

```js
grunt.initConfig({
  r2: {
    dist: {
      options: {
      },
      files: {
        'dest/test-rtl.css': ['src/test-ltr.css'],
        'dest/test-ltr.css': ['src/test-rtl.css']
      }
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
    * 2013-12-20   v0.1.1 Update R2 version to 1.4.x
