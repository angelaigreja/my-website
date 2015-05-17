module.exports = function (grunt) {


    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'app/css/*.scss',
                tasks: ['sass']
            },
            files: {
                files: ['app/**/*.js', 'app/**/*.html']
            }
        },
        connect: {
            server: {
                options: {
                    port: 3010,
                    open: true,
                    livereload: 35729,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'), //.tmp is merged to the root
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static('app')
                        ];
                    }
                }
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    '.tmp/css/main.css': 'app/css/main.scss'
                }
            }
        }
    });


    // Default task(s).
    grunt.registerTask('default', ['sass', 'connect', 'watch']);

};