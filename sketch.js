
function setup() 
{
  createCanvas(400,400);
  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);
  
  btn_green = createButton("GREEN");
  btn_green.position(100,50);
  btn_green.mousePressed(green_bg);
}

function draw() 
{
  background(30); 
}
function green_bg()
{
  r = 0;
  g = 255;
  b = 0;
}