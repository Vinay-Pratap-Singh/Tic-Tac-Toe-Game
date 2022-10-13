// to check the turn of the user
let userOneTurn = true;
// to check that the match is being draw or not
let clickedItems = 0;

const item = document.querySelectorAll(".item");
const message = document.querySelector(".message");

// answer array to store the cliked value by the user for player one and player two
const answerArray = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

const game = (index, element) => {
  // updating the asnwer array
  if (answerArray[index] === undefined) {
    if (userOneTurn) {
      answerArray[index] = "X";
    } else {
      answerArray[index] = "O";
    }
  }

  // checking that the element is already clicked or not
  if (element.innerText == "") {
    // increasing the cliked item to check that all the items is being seleted or not
    clickedItems++;
    // user one turn
    // value of user one is "X"
    if (userOneTurn) {
      element.innerText = "X";
      userOneTurn = false;
      message.innerText = "Turn : Player 2";
    }
    // user two turn
    // value of user to is "O"
    else {
      element.innerText = "O";
      userOneTurn = true;
      message.innerText = "Turn : Player 1";
    }
  }

  checkAnswer();
};

// [undefined, undefined, 'X', undefined, undefined, undefined, undefined, undefined, undefined]

// checking that which user has won or match is draw or not
const checkAnswer = () => {
  // checking that the player one is winner
  if (
    (answerArray[0] == "X" && answerArray[1] == "X" && answerArray[2] == "X") ||
    (answerArray[3] == "X" && answerArray[4] == "X" && answerArray[5] == "X") ||
    (answerArray[6] == "X" && answerArray[7] == "X" && answerArray[8] == "X") ||
    (answerArray[0] == "X" && answerArray[3] == "X" && answerArray[6] == "X") ||
    (answerArray[1] == "X" && answerArray[4] == "X" && answerArray[7] == "X") ||
    (answerArray[2] == "X" && answerArray[5] == "X" && answerArray[8] == "X") ||
    (answerArray[0] == "X" && answerArray[4] == "X" && answerArray[8] == "X") ||
    (answerArray[2] == "X" && answerArray[4] == "X" && answerArray[6] == "X")
  ) {
    message.innerText = "Player 1 Won the Game";
    // preventing misclick after the user has won the game
    item.forEach((element) => {
      element.removeAttribute("onclick");
    });

    congrats();

    setTimeout(() => {
      restart();
    }, 3000);
  }
  // checking that the player two is winner
  else if (
    (answerArray[0] == "O" && answerArray[1] == "O" && answerArray[2] == "O") ||
    (answerArray[3] == "O" && answerArray[4] == "O" && answerArray[5] == "O") ||
    (answerArray[6] == "O" && answerArray[7] == "O" && answerArray[8] == "O") ||
    (answerArray[0] == "O" && answerArray[3] == "O" && answerArray[6] == "O") ||
    (answerArray[1] == "O" && answerArray[4] == "O" && answerArray[7] == "O") ||
    (answerArray[2] == "O" && answerArray[5] == "O" && answerArray[8] == "O") ||
    (answerArray[0] == "O" && answerArray[4] == "O" && answerArray[8] == "O") ||
    (answerArray[2] == "O" && answerArray[4] == "O" && answerArray[6] == "O")
  ) {
    message.innerText = "Player 2 Won the Game";
    // preventing misclick after the user has won the game
    item.forEach((element) => {
      element.removeAttribute("onclick");
    });

    congrats();

    setTimeout(() => {
      restart();
    }, 3000);
  }
  // the match is draw, no one wins the game
  else if (clickedItems === 9) {
    message.innerText = "Match is Draw";
    // preventing misclick after the game is being draw
    item.forEach((element) => {
      element.removeAttribute("onclick");
    });

    setTimeout(() => {
      restart();
    }, 3000);
  }
};

// funtion to restart the game
const restart = () => {
  location.reload();
};

// confetti animation when any of the user won the game
const congrats = () => {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};
