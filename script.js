let Game = {
  appendToParent(parent, child) {
    return parent.appendChild(child);
  },

  // create our overall game wrapper
  createWrapper() {
    let gameSquaresArr = [];
    let squaresContainer;
    const body = document.body;
    const wrapper = document.createElement(`div`);
    wrapper.className = `wrapper`;
    this.appendToParent(body, wrapper);

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
      let counter = 0;
      gameSquaresArr.forEach((square) => {
        square.addEventListener(`click`, (e) => {
          counter++;
          if (!e.currentTarget.classList.contains(`clicked`) && !e.currentTarget.classList.contains(`stop`) && counter === 1) {
            e.currentTarget.textContent = `X`;
            e.target.style.backgroundColor = `rgba(31, 20, 0, 0.589)`;
            e.target.style.color = `white`;
            e.currentTarget.classList.add(`X`);
          }
          if (!e.currentTarget.classList.contains(`clicked`) && !e.currentTarget.classList.contains(`stop`) && counter === 2) {
            e.currentTarget.textContent = `O`;
            e.target.style.backgroundColor = `rgba(31, 20, 0)`;
            e.target.style.color = `white`;
            e.currentTarget.classList.add(`O`);
            counter -= 2;
          }
          square.classList.add(`clicked`);
        });
      });
    })();


    // How our game operates

    //Create 2 arrays
    const gameOperation = (() => {
      let xArray = [];
      let oArray = [];

      //Push every ClassList to the arrays
      gameSquaresArr.forEach((square) => {
        square.addEventListener(`click`, (e) => {
          if (e.currentTarget.textContent === `X`) {
            xArray.push([...e.currentTarget.classList]);
          }
          if (e.currentTarget.textContent === `O`) {
            oArray.push([...e.currentTarget.classList]);
          }

          //convert arrays to 1d
          arr1dx = [].concat.apply([], xArray);
          arr1do = [].concat.apply([], oArray);

          // count repetition for a classList (x)

          const countsX = {};
          arr1dx.forEach(function (el) {
            countsX[el] = (countsX[el] || 0) + 1;
          });

          // count repetition for a classList (o)
          const countsO = {};
          arr1do.forEach(function (el) {
            countsO[el] = (countsO[el] || 0) + 1;
          });


          // what is repeated 3 times?
          let repeated3Times = (counterobj) => {
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
            }
          };
          if (!e.currentTarget.classList.contains(`stop`) && repeated3Times(countsO) !== undefined) {
            console.log(`O won`);
            console.log(square.classList);
            stopTheGame()
          }
          if (!e.currentTarget.classList.contains(`stop`) && repeated3Times(countsX) !== undefined) {
            console.log(`X won`);
            console.log(square.classList);
            stopTheGame()
          }
        });
      });
    })();

    // Stop The Game
    const stopTheGame = ()=>{
      gameSquaresArr.forEach(square =>{
        square.classList.add(`stop`);
      })
    }

    // create our squares container
    const createSquaresContainer = (() => {
      squaresContainer = document.createElement(`div`);
      squaresContainer.className = `squaresContainer`;
      wrapper.appendChild(squaresContainer);
    })();

    // insert our squares in their container ** only call me on `Click` **
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
      startBtn = document.createElement("Button");
      startBtn.className = `startBtn`;
      startBtn.textContent = `Start Game!`;
      this.appendToParent(document.body, startBtn);
    })();

    // when clicked Display wrapper
    const startClicked = (() => {
      startBtn.addEventListener(`click`, (e) => {
        e.preventDefault();
        this.createWrapper();
        startBtn.parentNode.removeChild(startBtn);
      });
    })();
  },
};
let test = Game.createStartButton();
