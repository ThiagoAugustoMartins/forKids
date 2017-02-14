function setup() {
	createCanvas(1080,720);
}

function draw() {
var k = 20;
	//background(0,0,0);
  	//background(random(255),random(255),random(255));
	stroke(255,255,255);
	line(k*2,k*1,k*4,k*5);
	line(k*2,k*4,k*4,k*8);
	rect(0,0,20,40);
	if(mouseIsPressed){
	stroke(random(255),random(255),random(255));
	fill(random(255),random(255),random(255));
	ellipse(mouseX,mouseY,20,40);
	}
}
