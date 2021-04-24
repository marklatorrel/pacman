// only the function CheckPageBounds is my property, everything else was taken from MITxPro Full Stack Web 
// Development with MERN course and it belongs to them.

var pos = 0;

let pageWidth = window.innerWidth;

const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

var direction = 0;

var focus = 0;

function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, null);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

setInterval(run,200);


function checkPageBounds(direction, imgWidth, pos, pageWidth) {

    
  if ((pos + imgWidth >= pageWidth)|| pos == 0){
    direction = 1;
  } else direction = 0;

  return direction;
}

module.exports = checkPageBounds;
