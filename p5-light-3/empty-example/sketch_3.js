var img0;
var img1;
//var img2;
var r = 50;
var g = 50;
var b = 73;
var e = 0;
var f = 0;
var ye;
var ah;
var x = 192;
var y = 395;
var angle = 0.0;

function setup(){
  createCanvas(800,600);
  img0 = loadImage("https://mir-cdn.behance.net/v1/rendition/project_modules/2800/3c884369016929.5b73be6f932f7.png");
  img1 = loadImage("https://mir-cdn.behance.net/v1/rendition/project_modules/2800/c5a31769016929.5b73be6f9375f.png");
}





function draw(){
    background(r,g,b);
    r = r -0.03;
    g = g -0.03;
    b = b -0.03;
    image(img0,0,0,800,600); 
    fill(128);
    rect(142,393,58,8);

    
    
  if (atan2(ye, ah)<-1.4 && atan2(ye, ah)>-1.7){
  image(img1,0,0,800,600);
  noStroke();
    fill(255,235,136,e);
    if(e <= 70){e = e + 1.5;}
    else if(e > 70){e = e - 1.5;}
    ellipse(660,136,100,100);
    noStroke();
    fill(255,235,136,f);
    if(f <= 30){f = f + 1.5;}
    else if(f > 30){f = f - 1.5;}
    ellipse(660,136,500,500);
    r = r +0.03;
    g = g +0.03;
    b = b +0.03;
  }
    displayc1();
    noStroke();
    fill(178,169,105);
    ellipse(0, 0,26,26);
}


function updatec1(mx, my) {
    angle = atan2(ye, ah);
    ye = my-y;
    ah = mx-x;
}


function displayc1() {
//    push();
    translate(x, y);
    rotate(angle);
    fill(188, 75, 57);
    rect(0, 0, 78, 8);
//    pop();
}

function mouseDragged(){
  updatec1(mouseX, mouseY);

}