// ==UserScript==
// @name         Enable console.log
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enable the developer console logging
// @author       Samuel Walls
// @match        *://*
// @grant        none
// @run-at       document-start
// ==/UserScript==

const get_native = function (path) {

    let iframe = document.createElement('iframe'),
        parent = document.body || document.head || document.documentElement;

    iframe.src = 'about:blank';
    parent.appendChild(iframe);

    let native = path.split('.')
        .reduce((object, property) => object[property], iframe.contentWindow);

    parent.removeChild(iframe);

    return native;
};

window.console.log = get_native('console.log');
