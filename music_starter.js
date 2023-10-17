// colour palette
let spacecadet = "#252A3Fff"
let fluorescentcyan = "#3DF0EFff"
let blue = "#3672ACff"
let yinmnblue = "#2A4F86ff"
let frenchrose = "#FB368Aff"
let backgroundCol = "#26262c"


let angle = 0

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other) {

  createCanvas(500,500)
  background(backgroundCol)

  let jaggedness = map(drum, 0, 100, 0, 1);

  drawDrumWaveform(jaggedness);


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

function drawDrumWaveform(jaggedness) {
  let middleY = height / 2;
  let spacing = 10;

  noFill();
  stroke(frenchrose);
  strokeWeight(1);

  beginShape();
  for (let i = 0; i < width; i += spacing) {
    let yOffset = (random(-1, 1) * jaggedness * height/2) / 2;
    vertex(i, middleY + yOffset);
  }
  endShape();
}

function drawWaveform(y, col) {
  noFill();
  stroke(col);
  strokeWeight(2);

  beginShape();
  for (let i = 0; i < width; i += 10) {
    let angle = map(i, 0, width, 0, TWO_PI);
    let yOffset = sin(angle * 2) * 10; // Adjust this multiplier for wave complexity

    // Create jagged lines by adding random spikes based on volume
    let spikeFactor = map(y, 0, height, 0, 5); // Adjust this range for spike intensity
    let randomSpike = random(-spikeFactor, spikeFactor);

    // Fix the line at a constant y-position and only vary the peaks
    let fixedY = y;

    // Draw the line with the jagged peaks
    line(i, fixedY, i, fixedY + yOffset + randomSpike);
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