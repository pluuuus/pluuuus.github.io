var imgNum = 0;
var img0;
var img1;
var img3;
var mouseReleased = false;
var r = 51;
var g = 51;
var b = 73;
var x = 0;
var y = 0;
var myColor;
var myColor2;


// function preload(){

// }
function setup() {
	createCanvas(800,600);

  
  img0 = loadImage("https://mir-cdn.behance.net/v1/rendition/project_modules/2800/15a99569016929.5b71dc16746e2.png");
  img1 = loadImage("https://mir-cdn.behance.net/v1/rendition/project_modules/2800/e1c96469016929.5b71dc1674ccf.png");
  img3 = loadImage("https://mir-cdn.behance.net/v1/rendition/project_modules/2800/2e39fb69016929.5b749e463584f.png");
}

function draw() {
 	background(r,g,b);
    r = r -0.05;
    g = g -0.05;
    b = b -0.05;
    

  
  if (mouseReleased) {
    image(img1,0,0,800,600);
    if(x <= 70){x = x + 0.1;}
    else {x = x - 0.1;}
    fill(255,250,204,x);
    noStroke();
    ellipse(400,325,200,200);
   
    if(y <= 30){y = y + 0.1;}
    else if(y > 30){y = y - 1;}
    fill(255,250,204,y);
    noStroke();
    ellipse(400,325,500,500);
    r = r +0.05;
    g = g +0.05;
    b = b +0.05;
  } else{
    image(img0,0,0,800,600);}
    
   if(b <= 0){
     image(img3,0,0);
    }

}

function mousePressed(){
  mouseReleased = !mouseReleased; 

  return false;
}

// var img;  // Declare variable 'img'.

// function setup() {
//   createCanvas(720, 400);
//   img = loadImage("assets/moonwalk.jpg");  // Load the image
// }

// function draw() {
//   // Displays the image at its actual size at point (0,0)
//   image(img, 0, 0);
//   // Displays the image at point (0, height/2) at half size
//   image(img, 0, height/2, img.width/2, img.height/2);
// }

