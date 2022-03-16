const GameModule = (() => {
  // *************Helper Functions**********//

  //Append to parent
  const appendToParent = (parent, child) => {
    return parent.appendChild(child);
  };

  // Remove Child
  const removeChild = (child) => {
    return child.parentNode.removeChild(child);
  };

  // Add class and text
  const addClassAndText = (element, classes, text) => {
    let cls = (element.className = classes);
    let txt = (element.textContent = text);
    return cls, txt;
  };
  // create Element
  const createElement = (name) => {
    return document.createElement(name);
  };
  // log text
  const log = (text) => {
    return console.log(text);
  };

  // insert after
  const insertAfter = (el, referenceNode) => {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  };

  // *************END**********//

  //Global Objects
  const squaresArray = [];
  let counter = 0;
  let wrapper;
  let winMessage;

  const addStartBtn = () => {
    let startBtn = createElement("button");
    addClassAndText(startBtn, `startBtn`, `Start The Game!`);
    appendToParent(document.body, startBtn);
    startBtn.addEventListener(`click`, (e) => {
      removeChild(startBtn);
      createWrapper();
    });
  };
  // add our input form
  // const addPlayerNames = () => {
  //   // create their container
  //   let container = createElement(`div`);
  //   //create inputs
  //   let player1 = Players.player1.name;
  //   let player2 = Players.player2.name;
  //   // create submit button
  //   let btn = createElement(`button`);
  //   // Add class and text content
  //   addClassAndText(container, `inputContainer`, ``);
  //   addClassAndText(btn, `submitBtns`, `Submit`);
  //   // set attributes
  //   player1.setAttribute(`placeholder`, `Player 1`);
  //   player2.setAttribute(`placeholder`, `Player 2`);
  //   btn.setAttribute(`type`, `submit`);

  //   // append our elements
  //   appendToParent(document.body, container);
  //   appendToParent(container, player1);
  //   insertAfter(player2, player1);
  //   insertAfter(btn, player2);
  //   // empty variables
  //   btn.addEventListener(`click`, (e) => {
  //     e.preventDefault();
  //     removeChild(container);
  //     // create wrapper
  //     // gameManager()
  //   });
  // };
  // create wrapper
  createWrapper = () => {
    wrapper = createElement(`div`);
    appendToParent(document.body, wrapper);
    wrapper.className = `wrapper`;


    winMessage = createElement(`p`);
    addClassAndText(winMessage, `winMessage`, ``);
    appendToParent(wrapper, winMessage);
    // Create Squares
    const createSquares = ((num) => {
      for (let i = 0; i < num; i++) {
        const square = createElement("div");
        square.classList.add(`square`, `${i + 1}`);
        squaresArray.push(square);
      }
    })(9);
    

    //append squares
    const appendSquares = (() => {
      const container = createElement(`div`);
      addClassAndText(container, `container`, ``);
      squaresArray.forEach((square) => {
        appendToParent(container, square);
      });
      appendToParent(wrapper, container);
    })();


    // Create Names and scores displays

    gameManager()
  };

  // Game Manager
  gameManager = () => {
    let scores = {
      row1: { X: 0, O: 0 },
      row2: { X: 0, O: 0 },
      row3: { X: 0, O: 0 },
      col1: { X: 0, O: 0 },
      col2: { X: 0, O: 0 },
      col3: { X: 0, O: 0 },
      diagL: { X: 0, O: 0 },
      diagR: { X: 0, O: 0 },
    };
    squaresArray.forEach((square) => {
      square.addEventListener(`click`, (e) => {
        console.log(Players);
        e.preventDefault();
        // if operation
        const ifOperations = () => {
          if (e.currentTarget.classList.contains(1)) {
            if (e.currentTarget.textContent === `X`) {
              scores.row1.X++;
              scores.col1.X++;
              scores.diagL.X++;
            }
            if (e.currentTarget.textContent === `O`) {
              scores.row1.O++;
              scores.col1.O++;
              scores.diagL.O++;
            }
          }
          if (e.currentTarget.classList.contains(2)) {
            if (e.currentTarget.textContent === `X`) {
              scores.row1.X++;
              scores.col2.X++;
            }
            if (e.currentTarget.textContent === `O`) {
              scores.row1.O++;
              scores.col2.O++;
            }
          }
          if (e.currentTarget.classList.contains(3)) {
            if (e.currentTarget.textContent === `X`) {
              scores.row1.X++;
              scores.col3.X++;
              scores.diagR.X++;
            }
            if (e.currentTarget.textContent === `O`) {
              scores.row1.O++;
              scores.col3.O++;
              scores.diagR.O++;
            }
          }
          if (e.currentTarget.classList.contains(4)) {
            if (e.currentTarget.textContent === `X`) {
              scores.row2.X++;
              scores.col1.X++;
            }
            if (e.currentTarget.textContent === `O`) {
              scores.row2.O++;
              scores.col1.O++;
            }
          }
          if (e.currentTarget.classList.contains(5)) {
            if (e.currentTarget.textContent === `X`) {
              scores.row2.X++;
              scores.col2.X++;
              scores.diagR.X++;
              scores.diagL.X++;
            }
            if (e.currentTarget.textContent === `O`) {
              scores.row2.O++;
              scores.col2.O++;
              scores.diagR.O++;
              scores.diagL.O++;
            }
          }
          if (e.currentTarget.classList.contains(6)) {
            if (e.currentTarget.textContent === `X`) {
              scores.row2.X++;
              scores.col3.X++;
            }
            if (e.currentTarget.textContent === `O`) {
              scores.row2.O++;
              scores.col3.O++;
            }
          }
          if (e.currentTarget.classList.contains(7)) {
            if (e.currentTarget.textContent === `X`) {
              scores.row3.X++;
              scores.col1.X++;
              scores.diagR.X++;
            }
            if (e.currentTarget.textContent === `O`) {
              scores.row3.O++;
              scores.col1.O++;
              scores.diagR.O++;
            }
          }
          if (e.currentTarget.classList.contains(8)) {
            if (e.currentTarget.textContent === `X`) {
              scores.row3.X++;
              scores.col2.X++;
            }
            if (e.currentTarget.textContent === `O`) {
              scores.row3.O++;
              scores.col2.O++;
            }
          }
          if (e.currentTarget.classList.contains(9)) {
            if (e.currentTarget.textContent === `X`) {
              scores.row3.X++;
              scores.col3.X++;
              scores.diagL.X++;
            }
            if (e.currentTarget.textContent === `O`) {
              scores.row3.O++;
              scores.col3.O++;
              scores.diagL.O++;
            }
          }
        };
        // Switch statement for X and O
        switch (counter) {
          case 0:
            if (e.currentTarget.textContent === ``) {
              e.currentTarget.classList.add(`X`);
              e.currentTarget.textContent = `X`;
              ifOperations();              
              counter++;
            }
            break;
          case 1:
            if (e.currentTarget.textContent === ``) {
              e.currentTarget.classList.add(`O`);
              e.currentTarget.textContent = `O`;
              ifOperations();
              counter--;
            }
          default:
            break;
        }

        for (const key in scores) {
          if (Object.hasOwnProperty.call(scores, key)) {
            const element = scores[key];
            (() => {
              // console.log(scores);
              if (element.X == 3) {
                square.classList.add(`stop`);
                winMessage.textContent = `X won`;
                //
                console.log(Players);
                counter -= 1000000;
              }
              if (element.O == 3) {
                square.classList.add(`stop`);
                winMessage.textContent = `O won`;
                counter -= 1000000;
              }
            })();
          }
        }
      });
    });

    // create reset buttons
    // Reset game
    const resetgame = createElement(`button`);
    addClassAndText(resetgame, `resetBtn`, `Reset Game`);
    appendToParent(wrapper, resetgame);
    resetgame.addEventListener(`click`, (e) => {
      squaresArray.forEach((square) => {
        square.textContent = ``;
        square.classList.remove(`X`,`O`);
        winMessage.textContent = ``
        counter = 0;
        
      });
      for (const key in scores) {
        if (Object.hasOwnProperty.call(scores, key)) {
          const element = scores[key];
          element.X = 0;
          element.O = 0;
        }
      }
    })
  }
  const Players = {
    player1: { name: createElement(`input`)},
    player2: { name: createElement(`input`)},
  };

  return { addStartBtn };
})();
GameModule.addStartBtn();
