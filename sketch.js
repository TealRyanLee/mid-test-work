function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}
function draw() {
  noFill()
  // stroke(255)
  rectMode(CENTER)
  background(0);
  for(let i=0;i<(width/50);i=i+1){
    for(let h=0;h<(height/50);h=h+1){
      stroke(255,0,0)
      ellipse(25+(i*50),25+(h*50),mouseX/50)
      stroke(0,255,0)
      rect(25+(i*50),25+(h*50),mouseX/50)
      stroke(0,0,255)
      ellipse(50+(i*50),50+(h*50),mouseX/25)
      stroke('#3d405b')
      rect(50+(i*50),50+(h*50),mouseX/25)
      stroke('#1982c4')
      ellipse(50+(i*50),0+(h*50),mouseX/25)
      stroke('#e85d04')
      ellipse(25+(i*50),25+(h*50),mouseX/25)
    }
  }
}