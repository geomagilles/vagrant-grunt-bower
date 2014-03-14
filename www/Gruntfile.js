module.exports = function(grunt) {

  //Initializing the configuration object
    grunt.initConfig({

    // Task configuration
    copy: {
      modernizr: {
        src: './bower_components/modernizr/modernizr.js',
        dest: './public/js/modernizr.js'
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: [
          './bower_components/jquery/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js'
          './app/assets/js/*.js'
        ],
        dest: './public/js/all.js',
      },
      css: {
        src : [
          './bower_components/html5-boilerplate/css/*.css',
          './app/assets/css/*.css',
        ],
        dest: './public/css/all.css',        
      } 
    },
    uglify: {
      options: {
        mangle: true  // Use if you want the names of your functions and variables unchanged
      },
      js: {
        files: {
          './public/js/all.js': './public/js/all.js',
          './public/js/modernizr.js': './public/js/modernizr.js',
        }
      },
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: './public/css/',
        src: ['*.css', '!*.min.css'],
        dest: './public/css/',
        ext: '.css'
      }
    },
    phpunit: {
        classes: {
        },
        options: {
        }
    },
    watch: {
        js: {
          files: [
            //watched files
            './app/assets/js/*.js'
            ],   
          tasks: ['concat:js','uglify:js'],     //tasks to run
          options: {
            livereload: true                    //reloads the browser
          }
        },
        tests: {
          files: ['app/controllers/*.php','app/models/*.php'],  //the task will run only when you save files in this location
          tasks: ['phpunit']
        }
      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-phpunit');

  // Task definition
  grunt.registerTask('default', ['watch']);

};