var imgNum = 0;
var img0;
var img1;
var img2;
var img3;
var r = 51;
var g = 51;
var b = 73;
var x = 0;
var y = 0;
var h = -400;
var faceDown=true;
var faceUp=true;

function setup(){
  createCanvas(800,600);
  img0 = loadImage("https://mir-cdn.behance.net/v1/rendition/project_modules/2800/5e9ad569016929.5b746d4d6681f.png");
  img1 = loadImage("https://mir-cdn.behance.net/v1/rendition/project_modules/2800/b5a12869016929.5b746d4d66e73.png");
  img2 = loadImage("https://mir-s3-cdn-cf.behance.net/project_modules/disp/0cfc4269016929.5b746d4d662b7.png");
  img3 = loadImage("https://mir-cdn.behance.net/v1/rendition/project_modules/2800/2e39fb69016929.5b749e463584f.png");

}

function draw(){
  background(r,g,b);
    r = r -0.02;
    g = g -0.02;
    b = b -0.02;
    image(img0,0,0,800,600);
    image(img2,270,h,12,580);
     if (h >= -80 && h < -40){
    image(img1,0,0,800,600);
    noStroke();
    fill(255,250,204,x);
    if(x <= 70){x = x + 0.7;}
    else if(x > 70){x = x - 0.7;}
    ellipse(610,165,200,200);
    noStroke();
    fill(255,250,204,y);
    if(y <= 30){y = y + 0.3;}
    else if(y > 30){y = y - 0.3;}
    ellipse(610,165,500,500);
    r = r +0.02;
    g = g +0.02;
    b = b +0.02;
     }
    
    if(b <= 0){
     image(img3,0,0,800,600);
    }
    
}

function keyPressed() {
  //if (key == CODED) {
    if (keyCode === DOWN_ARROW) {
      faceDown=true;
      h = h + 10;
    } else if (keyCode === UP_ARROW){
      faceUp=true;
      h = h - 10;
    }
    

    }
    
  //}