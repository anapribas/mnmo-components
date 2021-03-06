#!/usr/bin/env node

// Generate the main html page for local development
import {
    DOM,
    createElement, 
    renderToStaticMarkup
} from 'react';
import {html} from 'js-beautify';

import {Page} from '../lib';

var options = {
    title: 'mnmo components',
    stylesheets: [
        './css/normalize.css',
        './css/typography.css'
    ],
    scripts: [
        './js/es5-shim.min.js',
        './js/es5-sham.min.js',
        './js/console-polyfill.js',
        './js/vendors.js',
        './js/app.js'
    ]
};

console.log( html(
    renderToStaticMarkup(
        createElement(Page, options, 
            DOM.div({id:'main', className:'mnmo-root'},
                DOM.p(null, 'carregando...')
            )
        )
    )
) );