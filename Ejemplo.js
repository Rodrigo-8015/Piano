// choices = ["red", "green", "blue", "yellow"];
// onSystemOutput -> choice, position, length, done
// onUserInput -> valid, received, actual, position, length
function cymon(choices, onSystemOuptut, onUserInput, onGameOver) {
   // Arguments validation before proceeding
   // ======================================
   if (Array.isArray(choices) == false || choices.length < 2) {
      return;
   }

   if (
      typeof onSystemOuptut != "function" ||
      typeof onUserInput != "function" ||
      typeof onGameOver != "function"
   ) {
      return;
   }
   // ======================================

   // number of milliseconds to wait while sending output
   // of each blip in entire series
   const OUTPUT_DELAY = 700;
   // number of milliseconds to wait for input from user
   // between each blip before timing out to lose the game
   const INPUT_TIMEOUT = 5000;

   var mode = "off"; // off || out || in
   var series = [];
   var seriesIndex = 0;
   var userInputTimer;

   function gameOver(reason) {
      mode = "off";
      series = undefined;
      stopUserInputTimer();
      onGameOver(reason);
   }

   function startInputMode(delay) {
      setTimeout(function startingInputMode() {
         //don't proceed if user turned-off the game in-between
         if (mode == "off") {
            return;
         }
         mode = "in";
         seriesIndex = 0;
         resetUserInputTimer();
      }, delay);
   }

   function startOutputMode(delay) {
      // Added delay to prevent last user inputs and first system
      // output overlapping each other
      setTimeout(function startingOutputMode() {
         //don't proceed if user turned-off the game in-between
         if (mode == "off") {
            return;
         }
         mode = "out";
         seriesIndex = 0;
         stopUserInputTimer();
         sendBlips();
      }, delay);
   }

   function resetUserInputTimer(after) {
      if (mode != "off") {
         stopUserInputTimer();
         userInputTimer = setTimeout(gameOver, INPUT_TIMEOUT, "TIMED_OUT");
      }
   }

   function stopUserInputTimer() {
      clearTimeout(userInputTimer);
   }

   function getRandomChoice() {
      let randomIndex = Math.random() * choices.length;
      randomIndex = Math.floor(randomIndex);

      return choices[randomIndex];
   }

   function sendSystemOutput(choice, position, seriesLength, done) {
      if (mode != "off") {
         onSystemOuptut(choice, position, seriesLength, done);
      }
   }

   function sendBlips() {
      var done = false;
      var delay = seriesIndex * OUTPUT_DELAY;
      var choice = series[seriesIndex];
      var position = seriesIndex + 1;
      var seriesLength = series.length + 1;

      if (mode != "out") {
         return;
      }

      // When you run out of choices in series array,
      // push one additional choice at the end of the array before
      // terminating the loop
      if (typeof choice == "undefined") {
         choice = getRandomChoice();
         series.push(choice);
         done = true;
      }

      // callback
      setTimeout(sendSystemOutput, delay, choice, position, seriesLength, done);

      if (done) {
         startInputMode(OUTPUT_DELAY * seriesLength);
      } else {
         seriesIndex += 1;
         return sendBlips();
      }
   }

   function validateBlip(choice) {
      var valid = false;
      var received = choice;
      var actual = series[seriesIndex];
      var position = seriesIndex + 1;
      var seriesLength = series.length;

      if (mode != "in") {
         return;
      }

      if (received === actual) {
         seriesIndex += 1;
         valid = true;
         if (seriesIndex >= series.length) {
            // entire series is valid.
            // switch to output mode to send new series
            startOutputMode(OUTPUT_DELAY * 2);
         } else {
            // valid but remaining series to be validated
            resetUserInputTimer();
         }
      }

      onUserInput(valid, received, actual, position, seriesLength);

      if (valid == false) {
         gameOver("LOST");
      }

      return valid;
   }

   return {
      getMode: function () {
         return mode;
      },
      start: function startGame() {
         mode = "out";
         series = [];
         sendBlips();
      },
      stop: function stopGame() {
         gameOver("STOPPED");
      },
      sendUserInput: function sendInput(choice) {
         return choices.includes(choice) && validateBlip(choice);
      }
   };
}

(function app(w, d) {
   var game;
   var choices = ["red", "green", "blue", "yellow"];
   var startStopButton = d.querySelector("#startStopBtn");
   var controlButtons = d.querySelectorAll("button[data-color]");
   var gamePad = d.querySelector(".cymon");
   var audioContext = new (window.AudioContext || window.webkitAudioContext)();
   var sounds = {
      red: [100, 200, 100],
      green: [300, 400, 100],
      blue: [200, 600, 100],
      yellow: [400, 800, 100],
      lost: [500, 50, 1000]
   };

   var keyCodes = {
      N: 78,
      E: 69,
      S: 83,
      W: 87,
      Zero: 48
   };

   function beep(vol, freq, duration) {
      v = audioContext.createOscillator();
      u = audioContext.createGain();
      v.connect(u);
      v.frequency.value = freq;
      v.type = "square";
      u.connect(audioContext.destination);
      u.gain.value = vol * 0.01;
      v.start(audioContext.currentTime);
      v.stop(audioContext.currentTime + duration * 0.001);
   }

   function resetControlButtons() {
      controlButtons.forEach(function turnOffButton(e) {
         e.classList.remove("cymon__btn--on");
      });
   }

   function glowAndPlay(choice) {
      var choiceBtn = document.querySelector(`button[data-color="${choice}"]`);
      var sound = sounds[choice];

      resetControlButtons();
      choiceBtn.classList.add("cymon__btn--on");
      beep(...sound);
      setTimeout(function () {
         resetControlButtons();
      }, 300);
   }

   function showOutput(choice, position, length, done) {
      glowAndPlay(choice);
      if (done) {
         gamePad.classList.add("cymon--mode-input");
      }
   }

   function sendInput(e) {
      console.log(game.getMode());
      if (game.getMode() == "in") {
         var choice = this.getAttribute("data-color");
         glowAndPlay(choice);
         game.sendUserInput(choice);
      }
   }

   function processInputResponse(valid, received, actual, position, length) {
      if (position == length) {
         gamePad.classList.remove("cymon--mode-input");
      }
   }

   function endGame(reason) {
      gamePad.classList.remove("cymon--active");
      gamePad.classList.remove("cymon--mode-input");
      startStopButton.innerHTML = "Start";

      if (["TIMED_OUT", "LOST"].includes(reason)) {
         startStopButton.innerHTML = "Game Over";
         resetControlButtons();
         beep(...sounds.lost);
         gamePad.classList.add("cymon--game-over");
         setTimeout(function () {
            startStopButton.innerHTML = "Start";
            gamePad.classList.remove("cymon--game-over");
         }, 2000);
      }
   }

   function startOrStopGame() {
      if (gamePad.classList.contains("cymon--game-over")) {
         return;
      }

      if (game.getMode() == "off") {
         game.start();
         gamePad.classList.add("cymon--active");
         this.innerHTML = "Stop";
      } else {
         game.stop();
         gamePad.classList.remove("cymon--active");
         this.innerHTML = "Start";
      }
   }

   game = cymon(choices, showOutput, processInputResponse, endGame);

   startStopButton.addEventListener("click", startOrStopGame);
   controlButtons.forEach(function (e) {
      e.addEventListener("click", sendInput);
   });

   window.addEventListener("keydown", function handleKeyboardShortcuts(e) {
      switch (e.keyCode) {
         case keyCodes.N:
            controlButtons[0].click();
            break;
         case keyCodes.E:
            controlButtons[1].click();
            break;
         case keyCodes.S:
            controlButtons[2].click();
            break;
         case keyCodes.W:
            controlButtons[3].click();
            break;
         case keyCodes.Zero:
            startStopButton.click();
            break;
      }
   });
})(window, document);