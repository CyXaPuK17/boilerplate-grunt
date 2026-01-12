const sass = require('sass');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['build/']
    },

    sass: {
      dev: {
        options: {
          implementation: sass,
          sourceMap: true
        },
        files: {
          'build/css/style.css': 'assets/scss/main.scss'
        }
      },
      prod: {
        options: {
          implementation: sass,
          sourceMap: false
        },
        files: {
          'build/css/style.css': 'assets/scss/main.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 11'],
        map: true
      },
      dev: {
        options: {
          map: true
        },
        src: 'build/css/style.css',
        dest: 'build/css/style.css'
      },
      prod: {
        options: {
          map: false
        },
        src: 'build/css/style.css',
        dest: 'build/css/style.css'
      }
    },

    cssmin: {
      prod: {
        files: {
          'build/css/style.css': 'build/css/style.css'
        }
      }
    },

    concat: {
      dist: {
        src: ['assets/js/**/*.js'],
        dest: 'build/js/scripts.js'
      }
    },
  
    uglify: {
      prod: {
        files: {
          'build/js/scripts.js': 'build/js/scripts.js'
        }
      }
    },

    htmlmin: {
      prod: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'build/index.html': 'index.html'
        }
      },
      dev: {
        files: {
          'build/index.html': 'index.html'
        }
      }
    },

    copy: {
      fonts: {
        expand: true,
        cwd: 'assets/fonts/',
        src: '**',
        dest: 'build/assets/fonts/'
      },
      images: {
        expand: true,
        cwd: 'assets/img/',
        src: '**',
        dest: 'build/assets/img/'
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'build/css/*.css',
            'build/js/*.js',
            'build/index.html',
            'build/assets/img/**/*'
          ]
        },
        options: {
          watchTask: true,
          server: './build'
        }
      }
    },

    watch: {
      css: {
        files: ['assets/scss/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer:dev']
      },
      js: {
        files: ['assets/js/**/*.js'],
        tasks: ['concat']
      },
      html: {
        files: ['index.html'],
        tasks: ['htmlmin:dev']
      },
      img: {
        files: ['assets/img/**/*'],
        tasks: ['copy:images']
      }
    }
  });

  grunt.registerTask(
    'dev',
    [
      'clean',
      'htmlmin:dev',
      'sass:dev',
      'autoprefixer:dev',
      'concat',
      'copy:fonts',
      'copy:images',
      'browserSync',
      'watch'
    ]
  );

  grunt.registerTask(
    'prod',
    [
      'clean',
      'htmlmin:prod',
      'sass:prod',
      'autoprefixer:prod',
      'cssmin',
      'concat',
      'uglify',
      'copy:fonts',
      'copy:images'
    ]
  );

  grunt.registerTask('default', ['dev']);
};
