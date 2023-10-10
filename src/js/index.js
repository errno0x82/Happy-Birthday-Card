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

        
var isFrozen = false; // Flag to track if content is frozen

window.addEventListener("orientationchange", function () {
    var body = document.body;

    if (window.orientation === 0) {
        // Portrait mode
        if (isFrozen) {
            body.style.display = "block"; // Resume HTML code execution
            isFrozen = false; // Reset the flag
        }
    } else {
        // Landscape mode
        body.style.display = "none"; // Halt HTML code execution
        isFrozen = true; // Set the flag to indicate content is frozen
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
