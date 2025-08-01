// ==UserScript==
// @name         Dark Z
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  This turns z.ai (chat.z.ai) website into darrk theme
// @author       Space-00
// @match        https://chat.z.ai/*
// @icon         https://chat.z.ai/static/logoDark.svg
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const enableDarkMode = () => {

        if (!document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.add('dark');
            console.log('Dark mode forced by Tampermonkey script.');
        }
    };

    enableDarkMode();

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                enableDarkMode();
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true
    });
})();
