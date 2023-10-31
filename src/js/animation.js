//jshint esversion:6

function closePageWithCountdown(seconds) {
  const countdownElement = document.createElement("countdowntime");
  countdownElement.style.position = "fixed";
  countdownElement.style.top = "0";
  countdownElement.style.left = "0";
  countdownElement.style.backgroundColor = "red";
  countdownElement.style.color = "white";
  countdownElement.style.padding = "5px";

  document.body.appendChild(countdownElement);

  function updateCountdown() {
    countdownElement.textContent = `Page will automatically close in ${seconds} seconds`;

    if (seconds === 0) {
      document.body.removeChild(countdownElement);
      document.getElementsByTagName('html')[0].remove();
      document.write('Resource Exhausted !\n<br>You may reload the page or close the tab.');

      function showLoveText() {
        var loveText = document.createElement("div");
        loveText.innerHTML = "I love you Sriparna";
        loveText.style.position = "absolute";
        loveText.style.color = "red";
        loveText.style.fontWeight = "bold";
        loveText.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + "px";
        var maxWidth = window.innerWidth - 200; // Adjust the width of the text
        loveText.style.left = Math.floor(Math.random() * maxWidth) + "px";
        document.body.appendChild(loveText);
        
        setTimeout(function () {
          loveText.style.display = "none";
        }, 2000); // Adjust the duration as needed (e.g., 2 seconds)
      }
           
      var centeredText = document.createElement("div");
      centeredText.innerHTML = "This site was created on the occasion of 21st birthday of Mrs. Sriparna Roy (my crush) on 28/09/2024.<br>If you do not know her, then you are at the wrong place amigo !<br>Hasta La Vista 👋<br>Previous wishes: <a href=\"http://sriparnaa.000webhostapp.com/\">2022</a>";
      centeredText.style.position = "fixed";
      centeredText.style.bottom = "0";
      centeredText.style.left = "0";
      centeredText.style.right = "0";
      centeredText.style.textAlign = "center";
      // centeredText.style.backgroundColor = "rgba(255, 255, 255, 0.8";
      centeredText.style.padding = "10px";
      centeredText.style.zIndex = "999"; // Ensures it appears on top of other content
      
      // Append the element to the body
      document.body.appendChild(centeredText);

      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      
      var colors = ['red', 'blue', 'green']; // List of rainbow colors
      var colorIndex = 0; // Initialize color index

      function flash() {
            centeredText.style.color = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
      }

      var clr = setInterval(flash, 500);

      // Call the showLoveText function at an interval (e.g., every 5 seconds)
      setInterval(showLoveText, 2000); // Adjust the timing as needed

      document.addEventListener("click", function(event) {
       const kissSign = document.createElement("div");
       kissSign.textContent = "♥️";
       kissSign.style.position = "absolute";
       kissSign.style.fontSize = "24px";
       kissSign.style.color = "red";
       kissSign.style.transform = "scale(1)";
       kissSign.style.transition = "transform 0.5s, opacity 1s";
       kissSign.style.left = (event.clientX - 12) + "px";
       kissSign.style.top = (event.clientY - 12) + "px";    
       document.body.appendChild(kissSign);
        
       // Enlarge the kiss sign
       requestAnimationFrame(function() {
         kissSign.style.transform = "scale(2)";
       });

       // Delay and then fade and remove the kiss sign
       setTimeout(function() {
        kissSign.style.opacity = "0";
        setTimeout(function() {
            document.body.removeChild(kissSign);
        }, 1000);
       }, 500);
      
      });
      
      // Create a button element
      const playButton = document.createElement("button");
      playButton.textContent = "Play Video";
      document.body.appendChild(playButton);

      // Create a video element
      const video = document.createElement("video");
      video.width = 640;
      video.height = 360;
      video.controls = true;
      document.body.appendChild(video);

      // Hide the video element initially
      video.style.display = "none";

      // Add a click event listener to the button
      playButton.addEventListener("click", function () {
       playButton.style.display = "none";
       video.style.display = "block";
       video.src = "../resources/img/Sriparna.mp4";
       video.play();

       video.addEventListener("ended", function () {
        playButton.style.display = "block";
        video.style.display = "none";
        video.src = "";
       });         
      });
      
    } else {
      seconds--;
      setTimeout(updateCountdown, 1000);
    }
  }

  updateCountdown();
}

const button = document.querySelector(".btn"),
  darkroom = document.querySelector(".darkroom"),
  giftroom = document.querySelector(".giftroom"),
  hallway = document.querySelector(".hallway"),
  room = document.querySelector(".empty-room"),
  flash = document.querySelector(".flash");
  // hpp = document.querySelector(".hpp");

// These are the text elements that hold messages to be displayed in the respective screes

const blackText = document.querySelectorAll(".bb-text"), // msgs in the dark room scene
  giftText = document.querySelectorAll(".gift-text"), // msgs in the gift scene
  hallText = document.querySelectorAll(".hall-text"), // msgs in the hallway scene
  roomText = document.querySelectorAll(".room-text"), // msgs in empty room scene
  CTAtext = document.querySelector(".btn-ref");

//Elements in the card page

const frames = document.querySelectorAll(".frame"),
  msgWindow = document.querySelector(".scroll"), // this one has the message frame in [0] and card fram in [1]
  msg = document.querySelector(".text"); // the Message para

//Sfx files

const light = document.querySelector(".switch-aud"),
  blast = document.querySelector(".blast-aud"),
  door = document.querySelector(".door-aud"),
  haunt = document.querySelector(".haunt-aud"),
  music = document.querySelector(".hbd-aud");

//  readMsg() displays the paras in each scene successively. It takes an array of the para elements as input.

const readMsg = (text) => {
  for (let i = 0; i < text.length; i++) {
    // this loop goes through all the text msg paras
    setTimeout(() => {
      // A timeout of 5s ia applied to all text elements so that appear successively one after the other
      text[i].classList.add("read"); // this adds a fadeIn-fadeOut animation to elements
      if (i === text.length - 1) {
        // this ensures that the button appears only after the last text is displayed.
        button.style.display = "inline-block";
        CTAtext.style.display = "block";
      }
    }, 5000 * i);
  }
};

// transition() is animation for change from one scene to another. It takes the current scene div element as input.

const transition = (currentScene) => {
  currentScene.classList.add("fade-in");
  currentScene.style.opacity = "0";
  button.style.display = "none";
  CTAtext.style.display = "none";
};

//Animation Code

/*
    In the beginning, the black page appears signifying a dark room and after displaying the msg paras
    one by one, a button(bulb) appears and the user is asked to click the button to swith on the lights.
*/

export const animate = function () {

  CTAtext.innerHTML = "Turn on the lights ☝️<br><br><br>";
  CTAtext.style.marginTop = "-5px";
  readMsg(blackText);

  button.addEventListener("click", function () {
    if (button.classList.contains("switch")) {
      /* 
              When the switch is pressed, the black div will wipe out and the backgroung scene with no 
              elements will appear, signifying that the lights are turned on and the room is empty. Then 
              the msg will be displayed after which, the user will be asked to move out and the button with
              door icon will appear. 
          */

      light.play();
      transition(darkroom);
      CTAtext.innerHTML = "Open the door ☝️";
      setTimeout(function () {
        button.classList.add("door-out");
        button.classList.remove("switch");
        darkroom.style.display = "none";
        readMsg(roomText);
      }, 4000);
    } else if (button.classList.contains("door-out")) {
      /* 
              when the door is pressed, scene changes to cemetry. Again, the msg will be displayed, after 
              which, the user will be asked to come inside and the button with door will appear again.
          */

      door.play();
      transition(room);
      
      setTimeout(function () {
        haunt.play();
        haunt.loop = true;
        button.classList.add("door-in");
        button.classList.remove("door-out");
        room.style.display = "none";
        readMsg(hallText);
      }, 4000);
    } else if (button.classList.contains("door-in")) {
      /* 
              when the door is pressed, scene changes to the gift room. Again, the msg will be displayed, after 
              which, the user will be asked to open the gift and the button with gift will appear.
          */
      haunt.pause()
      door.play();
      
      transition(hallway);
      
      CTAtext.innerHTML = "Open the box ☝️";
      setTimeout(function () {
        button.classList.add("gift");
        button.classList.remove("door-in");
        hallway.style.display = "none";
        readMsg(giftText);
      }, 4000);
    } else if (button.classList.contains("gift")) {
      /* 
              when the gift is pressed, the gift scene vanishes and the white div fades slowly giving a sense 
              of explosion. After that, the message frame appears and moves up until the message completes. Then,
              the message frame fades away and the card appears.
          */

      haunt.pause();
      blast.play();
      giftroom.style.display = "none";      
      transition(flash);
      // transition(pgift);
      music.loop = true;
      music.play();

      if (!process.env.SCROLL_MSG) {
        frames[0].style.display = "flex";
        setTimeout(() => {
          frames[0].classList.add("appear");
          frames[0].style.opacity = "1";
        }, 1500);   
        return;
      }

      //This value is stored in the --readTime css variable of root element and is calculated dynamically at build time.
      const readTime =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--readTime"
          )
        ) + 5;
                
      frames[1].style.display = "flex";
      
      setTimeout(() => {
       closePageWithCountdown(1);
      }, readTime * 1000); // to be changed 
      
      setTimeout(() => {
        frames[1].classList.add("appear");
        frames[1].style.opacity = "1";
        msg.classList.add("move-up");
      }, 1500);

      setTimeout(() => {
        msg.style.transform = "translateY(-100%)";
        flash.style.display = "none";
      }, 5000);

      setTimeout(() => {
        msgWindow.classList.add("fade-in");
        msgWindow.style.opacity = "0";
      }, readTime * 1000);

      setTimeout(() => {
        frames[1].style.display = "none";
        frames[0].style.display = "flex";
        frames[0].classList.add("appear");
        frames[0].style.opacity = "1";
      }, (readTime + 3) * 1000);
    }
  });   
};
