var pos = 0;
const pacArray = [
  ["./images/pacman1.png", "./images/pacman2.png"],
  ["./images/pacman3.png", "./images/pacman4.png"],
];
var direction = 0;
const pacMen = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}
// Factory to make a PacMan
function makePac() {
  // returns an object with values scaled {x: 33, y: 21}
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  let focus = "right";
  let mouth = "open";
  // Add image to div id = game
  let game = document.getElementById("game");
  let newimg = document.createElement("img");
  newimg.style.position = "absolute";
  newimg.src = "./images/pacman1.png";
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  game.appendChild(newimg);
  // new style of creating an object
  return {
    position,
    velocity,
    newimg,
    focus,
    mouth,
  };
}

function update() {
  //loop over pacmen array and move each one and move image in DOM

  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
   
  });
  setTimeout(update, 20);
}

eatAnimation();

function eatAnimation() {
  //This is a function that makes the pacman open and close its mouth 
  pacMen.forEach((item) => {
    if (item.mouth === "open" && item.focus === "right") {
      item.newimg.src = "./images/pacman2.png";
      item.mouth = "close";
    } else if (item.mouth === "close" && item.focus === "right") {
      item.newimg.src = "./images/pacman1.png";
      item.mouth = "open";
    } else if (item.mouth === "close" && item.focus === "left") {
      item.newimg.src = "./images/pacman3.png";
      item.mouth = "open";
    } else if (item.mouth === "open" && item.focus === "left") {
      item.newimg.src = "./images/pacman4.png";
      item.mouth = "close";
    } 
  });
  setTimeout(eatAnimation, 160);
}

function checkCollisions(item) {

  if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||item.position.x + item.velocity.x < 0) {
    item.velocity.x = -item.velocity.x;
console.log(item.focus);
    checkFocus(item);
    }

  if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight || item.position.y + item.velocity.y < 0) {
    item.velocity.y = -item.velocity.y;
  }
}

function checkFocus(item){
  // This is a function that checks which way the pacman is looking
  if (item.focus === "left") {
    item.newimg.src = "./images/pacman1.png";
    item.focus = "right";
  } else  {
    item.newimg.src = "./images/pacman3.png";
    item.focus = "left";
  } 
}


function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
