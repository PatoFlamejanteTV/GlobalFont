// ==UserScript==
// @name         Global Font
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Changes all text on the page to a specific font
// @author       PatoFlamejanteTV
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Specify your desired font here
    const customFont = "'Inconsolata', monospace" // change here

    // Apply the custom font to the entire document
    document.body.style.fontFamily = customFont;

    // Apply to any dynamically loaded content
    const observer = new MutationObserver(() => {
        document.body.style.fontFamily = customFont;
    });

    // Start observing the document for changes
    observer.observe(document.body, { childList: true, subtree: true });
})();
