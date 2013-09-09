/*
 * grunt-r2
 * https://github.com/adamquadmon/grunt-r2
 *
 * Copyright (c) 2013 Luciano Amodio
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var r2 = require('R2');
  var util = require('util');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('r2', 'Grunt task for LTR to RTL CSS conversion using R2.', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      // Concat specified files.
      var src = f.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
          // Read file source.
          return grunt.file.read(filepath);
        }).join(grunt.util.normalizelf(grunt.util.linefeed));

      grunt.log.writeln('Converting "' + f.src + '".');

      // Write the destination file.
      grunt.file.write(f.dest, r2.swap(src));

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
