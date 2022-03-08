// You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself.
// const tic_tac_toe = ((player1, player2)=>{

// })()
// const tic_tac_toe = function(player1,player2){
//     const Gameboard = {
//         gameboard: [1.2,2],
//         capP1: player1.toUppercase() ,
//         capP2: ()=>{player2.toUppercase}
//     }
//     return{Gameboard}
// }

// let abi = tic_tac_toe(`anakin`, `skywaker`);
// console.log(abi.Gameboard.capP1);

// factory function
// function createCircle(radius){
//     const makeRad = radius
//     return{

//         draw() {
//             console.log(makeRad);
//         }
//     };

// }
// const circle1 = createCircle(56)
// circle1.draw()
// //another factory function
// const dog = (name)=>{
//     const nameofDog = name
//     const sound = 'woof';
//     return{
//         talk: () => console.log(`${name} + ${sound}`)
//     }
// }
// const jackie = dog('Jackie');
// jackie.talk()
// //another factory function
// const displayFamily = (name)=>{
//     const fun = ()=>{
//      return name + ` Youre Awesome`
//     }
//     const fam = ()=>{
//         console.log(fun());
//     }
//     return{fam}

// }
// const me = displayFamily(`bini`);
// me.fam()
// // --------
// const personFactory = (name, age) => {
//     const sayHello = () => console.log('hello!');
//     return { name, age, sayHello };
//   };
//   const abibi = personFactory(`abi`,25);
//   abibi.sayHello()

// // -------private variables------
// const FactoryFunction = string => {
//     const capitalizeString = () => string.toUpperCase();
//     const printString = () => console.log(`----${capitalizeString()}----`);
//     return { printString };
//   };
//   let momosa = FactoryFunction('momosa');
//   momosa.printString();
//   //--------#2------------
//   const counterCreator = () => {
//     let count = 0;
//     return () => {
//       console.log(count);
//       count++;
//     };
//   };
// let counter = counterCreator();
// counter();
// counter();
// counter();

// const Player = (name, level) => {
//     let health = level * 2;
//     const getLevel = () => level;
//     const getName  = () => name;
//     const die = () => {
//       // uh oh
//       console.log(`${name } died`);
//     };
//     const damage = x => {
//       health -= x;
//       if (health <= 0) {
//         die();
//       }
//     };
//     const attack = enemy => {
//       if (level < enemy.getLevel()) {
//         damage(1);
//         console.log(`${enemy.getName()} has damaged ${name}`);
//       }
//       if (level >= enemy.getLevel()) {
//         enemy.damage(1);
//         console.log(`${name} has damaged ${enemy.getName()}`);
//       }
//     };
//     return {attack, damage, getLevel, getName};
//   }

// const jimmie = Player('jim', 10);
// const badGuy = Player('jeff', 5);
// jimmie.attack(badGuy);

// const Person = (name) => {
//     const sayName = () => console.log(`my name is ${name}`);
//     return {sayName};
//   }
//   const Nerd = (name) => {
//     // simply create a person and pull out the sayName function with destructuring assignment syntax!
//     const {sayName} = Person(name);
//     const doSomethingNerdy = () => console.log('nerd stuff');
//     return {sayName, doSomethingNerdy};
//   }
// const Nerd = (name) => {
//     const prototype = Person(name);
//     const doSomethingNerdy = () => console.log('nerd stuff');
//     return Object.assign({}, prototype, {doSomethingNerdy});
//   }
//   const jeff = Nerd('jeff');
//   jeff.sayName();
//   jeff.doSomethingNerdy();

// You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself.
const Game = (() => {
  const gameBoardObject = {
    displayGame: (() => {
      let startBtn = document.createElement(`button`);
      document.body.appendChild(startBtn);
      startBtn.className = `startbtn`;
      startBtn.textContent = `Start Game`;
      const gameBoard = [];
      startBtn.addEventListener(`click`, (e) => {
        let checkClassList = Array.from(startBtn.classList);
        e.preventDefault();
        startBtn.parentNode.removeChild(startBtn)
        if (!checkClassList.includes(`clicked`)) {
          startBtn.classList.add(`clicked`);
          let wrapper = document.createElement(`div`);
          wrapper.className = `wrapper`;
          wrapper.style.display = `grid`;
          wrapper.style.gridTemplateColumns = `repeat(3, 1fr)`;
          wrapper.style.gridTemplateRows = `repeat(3, 1fr)`;
          document.body.appendChild(wrapper);
          let makedivs = ((num) => {
            for (let i = 0; i < num; i++) {
              gameBoard.push(document.createElement(`div`));
              gameBoard.forEach((div) => {
                div.className = `board_obj`;
                wrapper.appendChild(div);
              });
            }
            for (let i = 0; i < gameBoard.length; i++) {
              gameBoard[i].classList.add(`div${i + 1}`);
              let element = gameBoard[i];
              let addClasses = (() => {
                if (
                  element.classList[1] === `div1` ||
                  element.classList[1] === `div4` ||
                  element.classList[1] === `div7`
                ) {
                  element.classList.add(`left`);
                }
                if (
                  element.classList[1] === `div2` ||
                  element.classList[1] === `div5` ||
                  element.classList[1] === `div8`
                ) {
                  element.classList.add(`center`);
                }
                if (
                  element.classList[1] === `div3` ||
                  element.classList[1] === `div6` ||
                  element.classList[1] === `div9`
                ) {
                  element.classList.add(`right`);
                }
                if (
                  element.classList[1] === `div1` ||
                  element.classList[1] === `div2` ||
                  element.classList[1] === `div3`
                ) {
                  element.classList.add(`top`);
                }
                if (
                  element.classList[1] === `div4` ||
                  element.classList[1] === `div5` ||
                  element.classList[1] === `div6`
                ) {
                  element.classList.add(`middle`);
                }
                if (
                  element.classList[1] === `div7` ||
                  element.classList[1] === `div8` ||
                  element.classList[1] === `div9`
                ) {
                  element.classList.add(`bottom`);
                }
                if (
                  element.classList[1] === `div1` ||
                  element.classList[1] === `div5` ||
                  element.classList[1] === `div9`
                ) {
                  element.classList.add(`diag1`);
                }
                if (
                  element.classList[1] === `div3` ||
                  element.classList[1] === `div5` ||
                  element.classList[1] === `div7`
                ) {
                  element.classList.add(`diag2`);
                }
              })();
            }
          })(9);
          gameFlow = (() => {
            let counter = 0;
            let clickedCheck = gameBoard.forEach((element) => {
              element.addEventListener(`click`, (e) => {
                e.preventDefault();
                let makeArray = Array.from(e.currentTarget.classList);

                if (
                  !(makeArray.includes(`clicked`) || makeArray.includes(`stop`))
                ) {
                  e.currentTarget.textContent = `X`;
                  e.currentTarget.classList.add(`clicked`);

                  counter++;
                }
                if (
                  counter > 1 &&
                  !(makeArray.includes(`clicked`) || makeArray.includes(`stop`))
                ) {
                  e.currentTarget.textContent = `O`;
                  e.currentTarget.classList.add(`clicked`);
                  counter -= 2;
                }
              });
            });
            let declareWinner = (() => {
              let leftx = 0,
                rightx = 0,
                centerx = 0,
                diag1x = 0,
                diag2x = 0,
                topx = 0,
                middlex = 0,
                bottomx = 0;
                let lefto = 0,
                righto = 0,
                centero = 0,
                diag1o = 0,
                diag2o = 0,
                topo = 0,
                middleo = 0,
                bottomo = 0;
              gameBoard.forEach((element) => {
                let xWin = element.addEventListener(`click`, (e) => {
                  let classArray = Array.from(e.currentTarget.classList);
                  if (
                    e.currentTarget.textContent === `X` &&
                    classArray.includes(`left`)
                  ) {
                    leftx++;
                    if (leftx === 3) {
                      console.log(`x has won`);
                      gameBoard.forEach((element) => {
                        element.classList.add(`stop`);
                      });
                    }
                  }
                  if (
                    e.currentTarget.textContent === `X` &&
                    classArray.includes(`right`)
                  ) {
                    rightx++;
                    if (rightx === 3) {
                      console.log(`x has won`);
                      gameBoard.forEach((element) => {
                        element.classList.add(`stop`);
                      });
                    }
                  }
                  if (
                    e.currentTarget.textContent === `X` &&
                    classArray.includes(`top`)
                  ) {
                    topx++;
                    if (topx === 3) {
                      console.log(`x has won`);
                      gameBoard.forEach((element) => {
                        element.classList.add(`stop`);
                      });
                    }
                  }
                  if (
                    e.currentTarget.textContent === `X` &&
                    classArray.includes(`bottom`)
                  ) {
                    bottomx++;
                    if (bottomx === 3) {
                      console.log(`x has won`);
                      gameBoard.forEach((element) => {
                        element.classList.add(`stop`);
                      });
                    }
                  }
                  if (
                    e.currentTarget.textContent === `X` &&
                    classArray.includes(`diag1`)
                  ) {
                    diag1x++;
                    if (diag1x === 3) {
                      console.log(`x has won`);
                      gameBoard.forEach((element) => {
                        element.classList.add(`stop`);
                      });
                    }
                  }
                  if (
                    e.currentTarget.textContent === `X` &&
                    classArray.includes(`diag2`)
                  ) {
                    diag2x++;
                    if (diag2x === 3) {
                      console.log(`x has won`);
                      gameBoard.forEach((element) => {
                        element.classList.add(`stop`);
                      });
                    }
                  }
                  if (
                    e.currentTarget.textContent === `X` &&
                    classArray.includes(`middle`)
                  ) {
                    middlex++;
                    if (middlex === 3) {
                      console.log(`x has won`);
                      gameBoard.forEach((element) => {
                        element.classList.add(`stop`);
                      });
                    }
                  }
                  if (
                    e.currentTarget.textContent === `X` &&
                    classArray.includes(`center`)
                  ) {
                    centerx++;
                    if (centerx === 3) {
                      console.log(`x has won`);
                      gameBoard.forEach((element) => {
                        element.classList.add(`stop`);
                      });
                    }
                  }
                });
                let oWin = element.addEventListener(`click`, (e) => {
                    let classArray = Array.from(e.currentTarget.classList);
                    if (
                      e.currentTarget.textContent === `O` &&
                      classArray.includes(`left`)
                    ) {
                      lefto++;
                      if (lefto === 3) {
                        console.log(`o has won`);
                        gameBoard.forEach((element) => {
                          element.classList.add(`stop`);
                        });
                      }
                    }
                    if (
                      e.currentTarget.textContent === `O` &&
                      classArray.includes(`right`)
                    ) {
                      righto++;
                      if (righto === 3) {
                        console.log(`o has won`);
                        gameBoard.forEach((element) => {
                          element.classList.add(`stop`);
                        });
                      }
                    }
                    if (
                      e.currentTarget.textContent === `O` &&
                      classArray.includes(`top`)
                    ) {
                      topo++;
                      if (topo === 3) {
                        console.log(`o has won`);
                        gameBoard.forEach((element) => {
                          element.classList.add(`stop`);
                        });
                      }
                    }
                    if (
                      e.currentTarget.textContent === `O` &&
                      classArray.includes(`bottom`)
                    ) {
                      bottomo++;
                      if (bottomo === 3) {
                        console.log(`o has won`);
                        gameBoard.forEach((element) => {
                          element.classList.add(`stop`);
                        });
                      }
                    }
                    if (
                      e.currentTarget.textContent === `O` &&
                      classArray.includes(`diag1`)
                    ) {
                      diag1o++;
                      if (diag1o === 3) {
                        console.log(`o has won`);
                        gameBoard.forEach((element) => {
                          element.classList.add(`stop`);
                        });
                      }
                    }
                    if (
                      e.currentTarget.textContent === `O` &&
                      classArray.includes(`diag2`)
                    ) {
                      diag2o++;
                      if (diag2o === 3) {
                        console.log(`o has won`);
                        gameBoard.forEach((element) => {
                          element.classList.add(`stop`);
                        });
                      }
                    }
                    if (
                      e.currentTarget.textContent === `O` &&
                      classArray.includes(`middle`)
                    ) {
                      middleo++;
                      if (middleo === 3) {
                        console.log(`o has won`);
                        gameBoard.forEach((element) => {
                          element.classList.add(`stop`);
                        });
                      }
                    }
                    if (
                      e.currentTarget.textContent === `O` &&
                      classArray.includes(`center`)
                    ) {
                      centero++;
                      if (centero === 3) {
                        console.log(`o has won`);
                        gameBoard.forEach((element) => {
                          element.classList.add(`stop`);
                        });
                      }
                    }
                  });
              });
            })();
          })();
        }
      });
    })(),
  };
  const playerObject = { 
      displaygameform: (()=>{
          let askforNames = (name1, name2)=>{
            let getname1 = ()=>{return name1};
            let getname2 = ()=>{return name2};
            return{getname1,getname2}
          }
          let insertNames = (()=>{
                const form = document.createElement('form');
                form.style.display = `flex`;
                form.style.flexDirection = `column`;

                form.style.width = `150px`;
                document.body.appendChild(form);
                let label1 = document.createElement(`label`);
                form.appendChild(label1);
                label1.textContent = `Player1:`;
                let label2 = document.createElement(`label`);
                form.appendChild(label2);
                label2.textContent = `Player2:`;
                let input1 = document.createElement(`input`);
                input1.type = `text`
                input1.classList.add(`input1`)
                form.appendChild(input1);
                let input2 = document.createElement(`input`);
                input2.type = `text`
                input2.classList.add(`input2`)
                form.appendChild(input2)
                let callAsker = askforNames(document.getElementsByClassName(`.input1`).value,document.getElementsByClassName(`.input2`).value)
                const gobtn = document.createElement(`button`);
                form.appendChild(gobtn);
                gobtn.addEventListener(`click`,(e)=>{
                    e.preventDefault();
                    const player1div = document.createElement(`div`);
                    player1div.classList.add(`playerDiv`)
                    const player2div = document.createElement(`div`);
                    player2div.classList.add(`playerDiv`)
                    form.appendChild(player1div);
                    form.appendChild(player2div);
                    player1div.textContent = askforNames.getname1;
                    player2div.textContent = askforNames.getname2;


                    
                })
          })()
      })()
}

  return { gameBoardObject, playerObject };
})();
let startNow = Game.gameBoardObject;
let players = Game.playerObject;

//     Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

// Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with `X`s and `O`s)
// Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!

//     Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!

// Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.
// Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!
