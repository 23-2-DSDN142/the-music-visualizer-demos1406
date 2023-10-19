// colour palette
let spacecadet = "#252A3F"
let cyanCol = "#3df0ef"
let blueCol = "#3672AC"
let blueCol2 = "#2A4F86"
let pinkCol = "#FB368A"

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
  if(counter > 7200 && counter < 9600){ // 7200 9500
    col1 = color(pinkCol)
    drawStars(150)
  }else if(counter > 13200 && counter < 16800){
    col1 = color(pinkCol)
    drawStars(150)
  }else if(words=="glowing"){
    col1 = color("#65f7f6")
  }
  else{
    col1 = color("#5fe0e5")
  }
  drawGradient(col1, col2, width / 2, height, width * 2);

  // variable maps
  let drumLine = map(drum, 0, 100, 0, 1);
  let vocalLine = map(vocal, 0, 100, 0, 1);
  let bassLine = map(bass, 0, 100, 0, 1);
  let otherLine = map(other, 0, 100, 0, 1);
  let cubeDrumLine = map(drum, 0, 100, 0.5, 0.6);


  // waveforms
  // drawWaveform(drumLine, pinkCol, height / 3) 
  // drawWaveform(vocalLine, cyanCol, height / 3)
  // drawWaveform(bassLine, blueCol, height / 3)
  // drawWaveform(otherLine, blueCol2, height / 3)


  // background city
  noStroke()
  fill("#2a4876")
  rect(0,320,75,200)
  rect(75,350,30,200)
  rect(105,330,40,200)
  rect(145,345,15,200)
  rect(155,250,35,300)
  rect(190,310,30,300)
  rect(220,330,60,200)
  rect(280,370,50,200)
  rect(330,245,50,300)
  rect(380,350,20,200)
  rect(400,310,40,200)
  rect(440,340,60,200)
  // checkers
  stroke(pinkCol)
  line(20,320,20,height)
  line(40,320,40,height)
  line(60,320,60,height)
  line(80,350,80,height)
  line(100,350,100,height)
  line(120,330,120,height)
  line(140,330,140,height)
  line(160,250,160,height)
  line(180,250,180,height)
  line(200,310,200,height)
  line(220,330,220,height)
  line(240,330,240,height)
  line(260,330,260,height)
  line(280,330,280,height)
  line(300,370,300,height)
  line(320,370,320,height)
  line(340,245,340,height)
  line(360,245,360,height)
  line(380,350,380,height)
  line(400,310,400,height)
  line(420,310,420,height)
  line(440,310,440,height)
  line(460,340,460,height)
  line(480,340,480,height)

  line(0,480,width,480)
  line(0,460,width,460)
  line(0,440,width,440)
  line(0,420,width,420)
  line(0,400,width,400)
  line(0,380,width,380)
  line(0,360,280,360)
  line(330,360,width,360)
  line(0,340,75,340)
  line(105,340,145,340)
  line(155,340,280,340)
  line(330,340,380,340)
  line(400,340,440,340)
  line(155,320,220,320)
  line(330,320,380,320)
  line(400,320,440,320)
  line(330,300,380,300)
  line(330,280,380,280)
  line(330,260,380,260)
  line(155,300,190,300)
  line(155,280,190,280)
  line(155,260,190,260)



  noStroke()
  // midground city
  fill("#272f56")
  rect(0,425,200,200)
  rect(175,390,130,200)
  rect(305,440,100,200)
  rect(405,380,200,200)

  // forground city
  fill("#25262f")
  rect(0,250,60,400)
  rect(60,365,30,200)
  rect(450,80,50,500)
  
  

  
  
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
  drawCube(width/2-25, height*1/2 * cubeDrumLine - 20)


  // Display the current words
  textSize(25);
  textAlign(CENTER, CENTER);
  textStyle(BOLD)
  // textFont("Brush Script MT")
  fill(pinkCol)
  text(words, width / 2 - 1.5, height - 30);
  fill(cyanCol)
  text(words, width / 2 + 1.5, height - 30);
  fill(255);
  text(words, width / 2, height - 30);


  // counter for timing
  // fill(255);
  // textSize(16);
  // text("Counter: " + counter, 50, 20);

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

  function drawStars(numStars) {  
    noStroke()
    fill(255); 
  
    for (let i = 0; i < numStars; i++) {
      let x = random(width);
      let y = random(height); 
      ellipse(x, y, 2, 2);
    }
  }