var imgNum = 0;
var img0;
var img1;
var img3;
var keyReleased = false;
var r = 51;
var g = 51;
var b = 73;
var x = 0;
var y = 0;


// function preload(){

// }
function setup() {
  createCanvas(800,600);

  
  img0 = loadImage("https://mir-cdn.behance.net/v1/rendition/project_modules/2800/b706a569016929.5b72651540c6e.png");
  img1 = loadImage("https://mir-cdn.behance.net/v1/rendition/project_modules/2800/c5d9cb69016929.5b726515405c3.png");
  img3 = loadImage("https://mir-cdn.behance.net/v1/rendition/project_modules/2800/2e39fb69016929.5b749e463584f.png");
}

function draw() {
 	background(r,g,b);
    r = r -0.04;
    g = g -0.04;
    b = b -0.04;
    

  
  if (keyReleased) {
    if (key == 'G' || key == 'g'){
    image(img1,0,0,800,600);
    noStroke();
    fill(190,245,254,x);
    if(x <= 70){x = x + 0.7;}
    else if(x > 70){x = x - 0.7;}
    ellipse(357,300,200,200);
    noStroke();
    fill(190,245,254,y);
    if(y <= 30){y = y + 0.3;}
    else if(y > 30){y = y - 0.3;}
    ellipse(357,300,500,500);
    r = r +0.04;
    g = g +0.04;
    b = b +0.04;}
    else {
    image(img0,0,0,800,600);}
  } else{
      if (r>=20 && r<30){
          
      }
    image(img0,0,0,800,600);}
    
   if(b <= 0){
     image(img3,0,0);
    }

}

function keyPressed(){
  keyReleased = !keyReleased;
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

