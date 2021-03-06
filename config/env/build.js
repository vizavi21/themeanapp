"use strict";

module.exports = {
    // Include the same assets from all.js, but for the vendor libraries (3rd party),
    // include the minimized versions. These will not be minified during the build
    // but instead concat together to form 1 vendor js file.
    assets: {
        lib: {
            css: [

            ],
            js: [
                // jquery
                "public/lib/jquery/dist/jquery.min.js",
                // angular
                "public/lib/angular/angular.min.js",
                "public/lib/angular-resource/angular-resource.min.js",
                "public/lib/angular-cookies/angular-cookies.min.js",
                "public/lib/angular-ui-router/release/angular-ui-router.min.js",
                // angular local storage
                "public/lib/angular-local-storage/dist/angular-local-storage.min.js",
                // lodash
                "public/lib/lodash/lodash.min.js"
            ]
        },
        css: [
            "public/lib/normalize.css/normalize.css",
            "public/dist/modules/**/*.css"
        ],
        js: [
            "public/config.js",
            "public/application.js",
            "public/modules/*/*.js",
            "public/modules/**/*.js"
        ]
    }
};
