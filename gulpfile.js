const {series, dest, src} = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

function buildHTML(){
    return src('./app/views/_04-pages/*.pug')
    .pipe(pug())
    .pipe(htmlmin({
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
    }))
    .pipe(dest('./build/'));
}

function buildCSS(){
    return src('./app/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(dest('./build/styles/'));
}

function buildImages(){
    return src('./app/images/**/*')
    .pipe(dest('./build/images/'))
    .pipe(src('./app/*.png'))
    .pipe(dest('./build/'));
}

function buildJS(){
    return src('./app/scripts/**/*.js')
    .pipe(dest('./build/scripts/'));
}

function buildFonts(){
    return src('app/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(dest('./build/assets/fonts/'));
}

exports.default = series(buildHTML, buildCSS, buildImages, buildJS, buildFonts);