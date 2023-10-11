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

document.addEventListener("DOMContentLoaded", function () {
  var volumeMessage = document.createElement("divvbvvv");
  volumeMessage.innerText = "Consider increasing your volume for a better experience!";
  volumeMessage.style.position = "fixed";
  volumeMessage.style.bottom = "20px";
  volumeMessage.style.left = "20px";
  volumeMessage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  volumeMessage.style.color = "#fff";
  volumeMessage.style.padding = "10px";
  volumeMessage.style.borderRadius = "5px";
  volumeMessage.style.zIndex = "9999";
  document.body.appendChild(volumeMessage);

  // Close the message after a few seconds (e.g., 5 seconds)
  setTimeout(function () {
    volumeMessage.style.display = "none";
  }, 5000);
});

if (process.env.OPEN_DATE) {
  const status = isBDay();
  if (status === "IS_EARLY") setPage(soon);
  if (status === "IS_LATE") setPage(late);
  if (status === "ON_TIME") animate();
} else {
  animate();
}
