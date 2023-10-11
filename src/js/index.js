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
  var volumeMessage = document.createElement("div");
  volumeMessage.innerText = "Consider increasing your volume for a better experience !";
  volumeMessage.style.position = "fixed";
  volumeMessage.style.top = "20px";
  volumeMessage.style.right = "-100%";
  volumeMessage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  volumeMessage.style.color = "#fff";
  volumeMessage.style.padding = "15px";
  volumeMessage.style.fontSize = "24px";  // Adjust the text size here
  volumeMessage.style.borderRadius = "5px";
  volumeMessage.style.zIndex = "9999";
  volumeMessage.style.transition = "right 1s ease-in-out";

  document.body.appendChild(volumeMessage);

  // Apply the transition effect after a slight delay
  setTimeout(function () {
    volumeMessage.style.right = "20px";
  }, 1000); // Adjust the delay (in milliseconds) as needed
});

if (process.env.OPEN_DATE) {
  const status = isBDay();
  if (status === "IS_EARLY") setPage(soon);
  if (status === "IS_LATE") setPage(late);
  if (status === "ON_TIME") animate();
} else {
  animate();
}
