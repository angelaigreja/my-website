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
                files: 'css/*.scss',
                tasks: ['sass']
            },
            files: {
                files: ['**/*.js', '**/*.html']
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    open: true,
                    livereload: 35729,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'), //.tmp is merged to the root
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static('.')
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
                    '.tmp/css/main.css': 'css/main.scss'
                }
            }
        }
    });


    // Default task(s).
    grunt.registerTask('default', ['sass', 'connect', 'watch']);

};