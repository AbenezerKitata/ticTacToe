let Game = {
  // Helper Functions
  appendToParent(parent, child) {
    return parent.appendChild(child);
  },

  // create our overall game wrapper
  createWrapper() {
    let gameSquaresArr = [];
    // store classes via classList
    let xArray = [];
    let oArray = [];

    // score box divs
    let player1Div;
    let player2Div;

    //game round counter
    let roundCounter = Game.round.count;
    roundCounter = 1;
    let roundScore;

    // players win counts
    let p1WinCount = Game.player1.score;
    p1WinCount = 0;
    let p2WinCount = Game.player2.score;
    p2WinCount = 0;
    // X and O making counter
    let counter = 0;

    let squaresContainer;

    const body = document.body;
    const wrapper = document.createElement(`div`);
    wrapper.className = `wrapper`;
    this.appendToParent(body, wrapper);
    const insertAfter = (el, referenceNode) => {
      referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    };

    //create a reset button
    const resetBtn = document.createElement(`button`);
    resetBtn.classList.add(`resetBtn`);
    resetBtn.textContent = `Reset`;

    const resetFn = () => {
      if (p1WinCount > 0 || p2WinCount > 0) {
        roundCounter++;
        roundScore = ``;
      }
      gameSquaresArr.forEach((square) => {
        square.textContent = ``;
        square.classList.remove(`stop`, `clicked`, `X`, `O`);
        xArray.splice(0, xArray.length);
        oArray.splice(0, oArray.length);
        counter = 0;
      });
    };
    resetBtn.addEventListener(`click`, resetFn);

    // create a reset function

    // create our squares
    const createSquares = ((num) => {
      for (let i = 0; i < num; i++) {
        let squares = document.createElement(`div`);
        squares.classList.add(`square`, `${i + 1}`);
        gameSquaresArr.push(squares);

        // Add more classes like top and bottom
        let addClasses = (() => {
          gameSquaresArr.forEach((square) => {
            if (square.classList.contains(`1`)) {
              square.classList.add(`top`, `left`, `diagL`);
            }
            if (square.classList.contains(`2`)) {
              square.classList.add(`top`, `center`);
            }
            if (square.classList.contains(`3`)) {
              square.classList.add(`top`, `right`, `diagR`);
            }
            if (square.classList.contains(`4`)) {
              square.classList.add(`middle`, `left`);
            }
            if (square.classList.contains(`5`)) {
              square.classList.add(`middle`, `center`, `diagL`, `diagR`);
            }
            if (square.classList.contains(`6`)) {
              square.classList.add(`middle`, `right`);
            }
            if (square.classList.contains(`7`)) {
              square.classList.add(`bottom`, `left`, `diagR`);
            }
            if (square.classList.contains(`8`)) {
              square.classList.add(`bottom`, `center`);
            }
            if (square.classList.contains(`9`)) {
              square.classList.add(`bottom`, `right`, `diagL`);
            }
          });
        })();
      }
    })(9);

    // add 'X' or 'O' to our Squares
    const addTextToSquares = (() => {
      gameSquaresArr.forEach((square) => {
        square.addEventListener(`click`, (e) => {
            counter++;
          
          if (
            !e.currentTarget.classList.contains(`clicked`) &&
            !e.currentTarget.classList.contains(`stop`) &&
            counter === 1
          ) {
            e.currentTarget.textContent = `X`;
            e.currentTarget.classList.add(`X`);
          }
          if (
            !e.currentTarget.classList.contains(`clicked`) &&
            !e.currentTarget.classList.contains(`stop`) &&
            counter === 2
          ) {
            e.currentTarget.textContent = `O`;
            e.currentTarget.classList.add(`O`);
            counter -= 2;
          }
          square.classList.add(`clicked`);
        });
      });
      return { counter };
    })();

    // How our game operates

    //Create 2 arrays
    const gameOperation = (() => {
      //Push every ClassList to the arrays
      gameSquaresArr.forEach((square) => {
        square.addEventListener(`click`, (e) => {
          console.log(counter);
          if (
            !e.currentTarget.classList.contains(`stop`) &&
            // !e.currentTarget.classList.contains(`clicked`) &&
            e.currentTarget.textContent === `X` &&
            counter > 0
          ) {
            console.log(`pushed`);
            xArray.push([...e.currentTarget.classList]);
            // console.log([...e.currentTarget.classList]);
          }
          if (
            !e.currentTarget.classList.contains(`clicked`) &&
            !e.currentTarget.classList.contains(`stop`) &&
            e.currentTarget.textContent === `O` &&
            counter > 0
          ) {
            oArray.push([...e.currentTarget.classList]);
            // console.log([...e.currentTarget.classList]);
          }

          if (!e.currentTarget.classList.contains(`stop`)) {
            //convert arrays to 1d
            arr1dx = [].concat.apply([], xArray);
            arr1do = [].concat.apply([], oArray);

            // count repetition for classLists in our array (x)

            let countsX = {};
            arr1dx.forEach(function (el) {
              countsX[el] = (countsX[el] || 0) + 1;
            });

            // count repetition for  classLists in our array (o)
            let countsO = {};
            arr1do.forEach(function (el) {
              countsO[el] = (countsO[el] || 0) + 1;
            });

            // first count test
            // console.log(`countsx--1:>`);
            //   console.log(countsX);
            //   console.log(`countso--1:>`);
            //   console.log(countsO);
            // let newObj = Object.assign({},countsX, countsO)
            // console.log(`newObj:>`)
            // console.log(newObj);

            // what is repeated 3 times?
            let repeated3Times = (counterobj) => {
              // draw counter
              let draw = 0;
              for (const el in counterobj) {
                if (
                  el !== `square` &&
                  el !== `X` &&
                  el !== `O` &&
                  el !== `clicked` &&
                  counterobj[el] === 3
                ) {
                  return el;
                }
                if (
                  el !== `square` &&
                  el !== `X` &&
                  el !== `O` &&
                  el !== `clicked` &&
                  counterobj[el] === 2
                ) {
                  draw++;
                  // console.log(`cc: ${el}`);
                  // console.log(draw);
                }

                if (draw === 6) {
                  roundScore = `Draw`;
                }
              }
            };
            if (
              !e.currentTarget.classList.contains(`stop`) &&
              repeated3Times(countsO) !== undefined
            ) {
              p2WinCount++;
              roundScore = `${Game.player2.name} won`;
              stopTheGame();
              // console.log(`countsO--2:>`);
              // console.log(countsO);
            }
            if (
              !e.currentTarget.classList.contains(`stop`) &&
              repeated3Times(countsX) !== undefined
            ) {
              roundScore = `${Game.player1.name} won`;
              p1WinCount++;
              stopTheGame();
              // console.log(`countsx--2:>`);
              // console.log(countsX);
            }
          }
        });
      });
    })();

    // Stop The Game
    const stopTheGame = () => {
      gameSquaresArr.forEach((square) => {
        square.classList.add(`stop`);
      });
    };

    // create our squares container
    const createSquaresContainer = (() => {
      squaresContainer = document.createElement(`div`);
      squaresContainer.className = `squaresContainer`;
      wrapper.appendChild(squaresContainer);

      //// create our scores chart
      drawScoresChart = (() => {
        let scoresContainer = document.createElement(`div`);
        scoresContainer.className = `scoresContainer`;
        player1Div = document.createElement(`div`);
        player1Div.className = `playerDiv`;
        player1Div.textContent = `${Game.player1.name} `;
        //
        roundDiv = document.createElement(`div`);
        roundDiv.className = `playerDiv`;
        roundDiv.textContent = `Round ${roundCounter}: `;
        //
        player2Div = document.createElement(`div`);
        player2Div.className = `playerDiv`;
        player2Div.textContent = `${Game.player2.name} `;
        // display scores
        gameSquaresArr.forEach((square) => {
          square.addEventListener(`click`, () => {
            if (p1WinCount > 0 || p2WinCount > 0) {
              player1Div.textContent = `${Game.player1.name}: ${p1WinCount}`;
              player2Div.textContent = `${Game.player2.name}: ${p2WinCount}`;
              roundDiv.textContent = `Round ${roundCounter}: ${roundScore}`;
            }
          });
        });

        Game.appendToParent(scoresContainer, player1Div);
        Game.appendToParent(scoresContainer, player2Div);
        Game.appendToParent(scoresContainer, roundDiv);
        insertAfter(scoresContainer, squaresContainer);
        insertAfter(resetBtn, scoresContainer);
      })();
    })();

    // insert our squares in their container
    const insertSquaresToContainer = (() => {
      gameSquaresArr.forEach((square) => {
        squaresContainer.appendChild(square);
      });
    })();
  },
  createStartButton() {
    // create the Start Button
    let startBtn;
    const createButton = (() => {
      startBtn = document.createElement("button");
      startBtn.className = `startBtn`;
      startBtn.textContent = `Start Game!`;
      this.appendToParent(document.body, startBtn);
    })();

    // when clicked Display wrapper
    const startClicked = (() => {
      startBtn.addEventListener(`click`, (e) => {
        e.preventDefault();
        startBtn.parentNode.removeChild(startBtn);
        this.createInput.insertPlayer1();
      });
    })();
  },
  player1: {},
  player2: {},
  round: {},

  // Create inputs
  createInput: {
    insertPlayer1: () => {
      let container = document.createElement(`div`);
      container.className = `inputContainer`;
      let input = document.createElement(`input`);
      input.setAttribute(`placeholder`, `Player 1`);
      let btn = document.createElement(`button`);
      btn.className = `submitBtns`;
      btn.setAttribute(`type`, `submit`);
      btn.textContent = `Submit`;
      Game.appendToParent(document.body, container);
      Game.appendToParent(container, btn);
      container.insertBefore(input, btn);

      btn.addEventListener(`click`, (e) => {
        e.preventDefault();
        Game.player1.name = input.value;
        container.parentNode.removeChild(container);
        // console.log(`Player 1: ${Game.player1.name}`);
        Game.createInput.insertPlayer2();
      });
    },
    insertPlayer2() {
      let container = document.createElement(`div`);
      container.className = `inputContainer`;
      let input = document.createElement(`input`);
      input.setAttribute(`placeholder`, `Player 2`);
      let btn = document.createElement(`button`);
      btn.className = `submitBtns`;
      btn.setAttribute(`type`, `submit`);
      btn.textContent = `Submit`;
      Game.appendToParent(document.body, container);
      Game.appendToParent(container, btn);
      container.insertBefore(input, btn);
      btn.addEventListener(`click`, (e) => {
        e.preventDefault();
        if (input.value === Game.player1.name) {
          alert(`Sorry!! Cant have the same name`);
          return null;
        } else {
          Game.player2.name = input.value;
        }
        container.parentNode.removeChild(container);
        // console.log(`Player 2: ${Game.player2.name}`);
        Game.createWrapper();
      });
    },
  },
};
let test = Game.createStartButton();
