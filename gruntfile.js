module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      results: 'results/**'
    },
    jshint: {
      options: {
        expr: true,
        unused: true,
        multistr: true,
        globals: {
          console: true,
          document: true
        }
      },
      bench: 'bench/**/*.js',
      src: 'src/**/*.js',
      gruntfile: 'gruntfile.js'
    },
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      chrome: {
        browsers: ['Chrome']
      },
      firefox: {
        browsers: ['Firefox']
      },
      // Watch configuration
      watch: {
        browsers: ['Chrome'],
        singleRun: false,
        background: true
      },
      // Single-run configuration for CI
      ci: {
        browsers: ['PhantomJS'],
        reporters: ['junit']
      }
    },
    watch: {
      jshint: {
        files: ['gruntfile.js'],
        tasks: ['jshint']
      },
      bench: {
        files: [ 'bench/**/*.js' ],
        tasks: [ 'jshint:bench', 'karma:watch:run' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', [ 'bench' ]);

  grunt.registerTask('bench:prepare', [ 'jshint', 'clean:results' ]);
  grunt.registerTask('bench:chrome', [ 'bench:prepare', 'karma:chrome' ]);
  grunt.registerTask('bench:firefox', [ 'bench:prepare', 'karma:firefox' ]);
  grunt.registerTask('bench:safari', [ 'bench:prepare', 'karma:safari' ]);
  grunt.registerTask('bench:ios', [ 'bench:prepare', 'karma:ios' ]);
  grunt.registerTask('bench:ci', [ 'bench:prepare', 'karma:ci' ]);
  grunt.registerTask('bench', [ 'bench:prepare', 'karma:chrome', 'karma:firefox' ]);
  grunt.registerTask('dev', [ 'karma:watch:start', 'watch' ]);
};
