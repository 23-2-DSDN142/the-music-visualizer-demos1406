// colour palette
let spacecadet = "#252A3Fff"
let fluorescentcyan = "#3DF0EFff"
let blue = "#3672ACff"
let yinmnblue = "#2A4F86ff"
let frenchrose = "#FB368Aff"
let backgroundCol = "#26262c"


let angle = 0
let fft


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other) {

  createCanvas(500,500)
  background(backgroundCol)


  let drumLine = map(drum, 0, 100, 0.5, 0.7);
  let vocalLine = map(vocal, 0, 100, 0, 1);
  let bassLine = map(bass, 0, 100, 0, 1);
  let otherLine = map(other, 0, 100, 0, 1);

  // drawWaveform(drumLine,frenchrose,height/2)
  // drawWaveform(vocalLine,fluorescentcyan,height/2)
  // drawWaveform(bassLine,blue,height/2)
  // drawWaveform(otherLine,spacecadet,height/2)

  drawCube(width/2-25, height*1/2 * drumLine)


  // Display the current words
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(words, width / 2, height - 30);



  
  // // Move the wave to the beat using sin function
  // let yPos = height / 2 + sin(angle) * 100;

  // // Draw the waveform
  // for(let i = 0; i<50; i+=10){
  //   drawWave(yPos+i);
  //   angle += 0.1
  // }  

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