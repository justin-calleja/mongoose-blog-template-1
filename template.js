'use strict';

var colors = ['white', 'black', 'grey', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow', 'rainbow'];

// Basic template description.
exports.description = 'Setup for blog post on basic Mongoose usage';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

exports.template = function(grunt, init, done) {

  init.process({}, [], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    var dependencies = {
      'mongoose': '^3.8.20'
    };

    var devDependencies = {
      'chai': '^1.10.0',
      'mocha': '^2.0.1',
      'mockgoose': '^1.10.7'
    };

    init.writePackageJSON('package.json', {
      node_version: '>= 0.10.0',
      dependencies: dependencies,
      devDependencies: devDependencies
    });

    grunt.log.subhead('*** What to do next ***'['blue'].bold);
    grunt.log.writeln('1. Run `npm install` to install dependencies');

    done();
  });

};
