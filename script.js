//Start Memu Disappear
const startButton = document.querySelector("#startBut");
startButton.addEventListener("click", startDisappear, startGame);
const audio = document.getElementById("clicking");


function startDisappear() {
  document.getElementById("description").style.display = "none";
  document.getElementById("startBut").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById('main-layout').style.visibility = 'visible';
  startGame();
}

//Functional Keypad
const guess1Element = document.getElementById("firstguess");
const guess2Element = document.getElementById("secondguess");
const guess3Element = document.getElementById("thirdguess");

const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");


oneButton.addEventListener("click", () => {
  updateGuess(space, "1");
  space++;
});

twoButton.addEventListener("click", () => {
  updateGuess(space, "2");
  space++;
});

threeButton.addEventListener("click", () => {
  updateGuess(space, "3");
  space++;
});

function updateGuess(index, value) {
  if (index <= 3) {
    if (index == 1) {
      guess1Element.innerText = value;
      myGuess += "" + value;
    } else if (index == 2) {
      guess2Element.innerText = value;
      myGuess += "" + value;
    } else if (index == 3) {
      guess3Element.innerText = value;
      myGuess += "" + value;
      checkGuess();
    }
  }
}

function startGame() {
  space = 1;
  computer1 = Math.floor(Math.random() * 3) + 1;
  computer2 = Math.floor(Math.random() * 3) + 1;
  computer3 = Math.floor(Math.random() * 3) + 1;
  randomnum = computer1 + "" + computer2 + "" + computer3;
  myGuess = "";
}

const consoleText = document.getElementById("console-text");
const timer = document.getElementById("clock-val");
clock = 7;


function checkGuess() {
  if (clock > 1) {
    if (myGuess == randomnum) {
      consoleText.innerHTML = "Congratulations, you have successfully opened the vault and escaped the police!"
    } else {
      if (myGuess > randomnum) {
        consoleText.innerHTML = "Too high"
        clock--;
      } else {
        consoleText.innerHTML = "Too low"
        clock--;
      }
      timer.innerHTML = clock;
      space = 0;
      myGuess = "";
      guess1Element.innerText = "";
      guess2Element.innerText = "";
      guess3Element.innerText = "";
    }
  } else if (clock > 0){
    clock--;
    timer.innerHTML = clock;
    consoleText.innerHTML = "You have been caught by the police."
  }
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);

function clear() {
  guess1Element.innerText = "";
  guess2Element.innerText = "";
  guess3Element.innerText = "";
  space = 1;
  myGuess = "";
}



  