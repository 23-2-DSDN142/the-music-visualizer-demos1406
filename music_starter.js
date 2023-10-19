// colour palette
let spacecadet = "#252A3Fff"
let cyanCol = "#3DF0EFff"
let blueCol = "#3672ACff"
let blueCol2 = "#2A4F86ff"
let pinkCol = "#FB368Aff"

let backgroundCol = "#26262c"


let angle = 0

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  createCanvas(500,500)
  background(color("#222639"))

  let col1
  let col2 = color("#222639")
  // gradient background
  // change background colour on the beat drop
  if(counter > 7200 && counter < 9600 && counter > 13200 && counter < 16800){ // 7200 9500
    col1 = color(pinkCol)
  }else{
    col1 = color("#5fe0e5")
  }
  drawGradient(col1, col2, width / 2, height, width * 2);

  // background city
  noStroke()
  fill("#2a4876")
  rect(0,320,75,200)
  rect(75,350,30,200)
  rect(105,330,40,200)
  rect(145,345,15,200)
  rect(160,250,30,300)
  rect(190,310,30,300)
  rect(220,330,60,200)
  rect(280,370,50,200)
  rect(330,245,50,300)
  rect(380,350,20,200)
  rect(400,310,40,200)
  rect(440,340,60,200)

  // midground city
  fill("#272f56")
  rect(0,425,200,200)
  rect(175,400,130,200)
  rect(305,440,100,200)
  rect(405,380,200,200)

  // forground city
  fill("#25262f")
  rect(0,250,60,400)
  rect(60,365,30,200)
  rect(450,80,50,500)
  
  // variable maps
  let drumLine = map(drum, 0, 100, 0, 1);
  let vocalLine = map(vocal, 0, 100, 0, 1);
  let bassLine = map(bass, 0, 100, 0, 1);
  let otherLine = map(other, 0, 100, 0, 1);
  let cubeDrumLine = map(drum, 0, 100, 0.5, 0.6);


  // waveforms
  // drawWaveform(drumLine, pinkCol, height * 2/5) 
  // drawWaveform(vocalLine, cyanCol, height * 2/5)
  // drawWaveform(bassLine, blueCol, height * 2/5)
  // drawWaveform(otherLine, blueCol2, height * 2/5)

  
  
  // vocal lines
  drawLines(cyanCol, 72, height/3, vocalLine )
  drawLines(cyanCol, 72, height/3, -vocalLine)
  // bass lines
  drawLines(spacecadet, 78, height/3, bassLine / 3)
  drawLines(spacecadet, 78, height/3, -bassLine / 3)
  // drum lines
  drawLines(pinkCol, 75, height/3, drumLine)
  drawLines(pinkCol, 75, height/3, -drumLine)
  


  // bouncing cube
  drawCube(width/2-25, height*1/2 * cubeDrumLine)


  // Display the current words
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(pinkCol)
  text(words, width / 2 - 2, height - 30);
  fill(cyanCol)
  text(words, width / 2 + 2, height - 30);
  fill(255);
  text(words, width / 2, height - 30);


  // counter for timing
  fill(255);
  textSize(16);
  text("Counter: " + counter, 50, 20);


  
  // // Move the wave to the beat using sin function
  // let yPos = height / 2 + sin(angle) * 100;

  // // Draw the waveform
  // for(let i = 0; i<50; i+=10){
  //   drawWave(yPos+i);
  //   angle += 0.1
  // }  

}

function drawGradient(c1, c2, x, y, r) {
  noFill();
  for (let d = 0; d <= r; d += 1) {
    let inter = map(d, 0, r, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    ellipse(x, y, d, d);
  }
}

function drawLines(col, x, y, map){
  // lines
  stroke(col)
  strokeWeight(4)

  // let x = 75;
  let lineHeight = 5;

  while (x <= width/2) {
    line(x, y, x, y - lineHeight * map);
    lineHeight += 5;
    x += 15;
  }

  while (x < width - 75) {
    line(x, y, x, y - lineHeight * map);
    lineHeight -= 5;
    x += 15;
  }
}

function drawWaveform(line, c, y) {
  let middleY = y;
  let spacing = 5;

  noFill();
  stroke(c);
  strokeWeight(1);

  beginShape();
  for (let i = 0; i < width; i += spacing) {
    let yOffset = (random(-1, 1) * line * height/2) / 2;
    vertex(i, middleY + yOffset);
  }
  endShape();
}

  // background(20)
  // textFont('Helvetica'); // please use CSS safe fonts
  // rectMode(CENTER)
  // textSize(24);

  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(spacecadet);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(fluorescentcyan);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(blue);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(yinmnblue);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  fill(frenchrose)
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);

  function drawCube(x, y){
    noStroke()
    // width/2-50, height*1/3


    // bottom left
    fill("#2b2443")
    beginShape()
    vertex(x, y)
    vertex(x - 70, y + 25)
    vertex(x + 25, y + 160)
    endShape(CLOSE)

    // bottom right
    fill("#32304b")
    beginShape()
    vertex(x, y)
    vertex(x + 25, y + 160)
    vertex(x + 120, y + 25)
    endShape(CLOSE)

    // top left
    fill("#183d78")
    beginShape()
    vertex(x, y)
    vertex(x - 70, y + 25)
    vertex(x + 25, y - 80)
    endShape(CLOSE)

    // top right
    fill("#29313e")
    beginShape()
    vertex(x, y)
    vertex(x + 25, y - 80)
    vertex(x + 120, y + 25)
    endShape(CLOSE)
  }