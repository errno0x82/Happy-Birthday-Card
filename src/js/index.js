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


window.addEventListener('resize', function () {
    if (window.orientation === 0 || window.orientation === 180) {
        document.querySelector('.landscape-message').style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        document.querySelector('.landscape-message').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});

window.addEventListener('load', function () {
    if (window.orientation !== undefined && (window.orientation === 90 || window.orientation === -90)) {
        document.querySelector('.landscape-message').style.display = 'block';
        document.body.style.overflow = 'hidden';
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
