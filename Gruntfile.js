
'use strict';
module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-nw-builder');
	grunt.initConfig({
	  nwjs: {
	    options: {
	        platforms: ['osx64'],
	        macIcns:'./img/doraemon.icns',
	        winIco:'./img/doraemon.ico'
	    },
	    doraemon:{
	    	buildDir: './dist/doraemon',
	    	src: ['../doraemon/**/*'] // Your node-webkit app src
	    }
	  }
	});
	grunt.registerTask('default', ['nwjs:doraemon']);
};