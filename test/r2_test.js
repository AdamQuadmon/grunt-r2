'use strict';

var grunt = require('grunt');

exports.r2 = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test.css');
    var expected = grunt.file.read('test/expected/test.css');
    test.equal(actual, expected, 'should swap css rules.');

    test.done();
  }
};
