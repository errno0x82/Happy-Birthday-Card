//jshint esversion:8

import { isBDay } from "./ext/openDate.js";
import setPage from "./ext/setPage.js";
import { late, soon } from "./pages.js";
import { animate } from "./animation.js";

/******************************************************* SETUP ************************************************************/

if (/Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent)) {
    // This code will run only on Android smartphones
} else {
    document.getElementsByTagName('html')[0].innerHTML = '<h1>Hey babe, this site works on Android smartphones only!</h1>';
}


let isFrozen = false;

function freezeWebsite() {
    if (!isFrozen) {
        // Freeze the website
        document.body.style.pointerEvents = 'none';
        isFrozen = true;
    }
}

function unfreezeWebsite() {
    if (isFrozen) {
        // Unfreeze the website
        document.body.style.pointerEvents = 'auto';
        isFrozen = false;
    }
}

window.addEventListener('resize', function () {
    if (window.orientation === 0 || window.orientation === 180) {
        // Portrait orientation
        unfreezeWebsite();
    } else {
        // Landscape orientation
        freezeWebsite();
    }
});

// Check the orientation on page load
window.addEventListener('load', function () {
    if (window.orientation !== undefined && (window.orientation === 90 || window.orientation === -90)) {
        // Landscape orientation on page load
        freezeWebsite();
    }
});

if (process.env.OPEN_DATE) {
  const status = isBDay();
  if (status === "IS_EARLY") setPage(soon);
  if (status === "IS_LATE") setPage(late);
  if (status === "ON_TIME") animate();
} else {
  animate();
}
