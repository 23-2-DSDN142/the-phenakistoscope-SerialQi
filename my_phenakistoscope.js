const SLICE_COUNT = 10;//分割数量

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW); //CW or CCW 正转/倒转
  pScope.set_slice_count(SLICE_COUNT);


}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(stars);
  layer1.mode( SWIRL(7) ); //动画的数量（笑脸）
  //layer1.set_boundary( 200, 1000 );

 //var layer2 = new PLayer(squares);
  //layer2.mode( RING );
  //layer2.set_boundary( 150, 750);
}

function stars(x, y, animation, pScope){ // pentacle
  
  scale(animation.frame*2);
  //draw star 
  noStroke();
  fill(255, 241, 87);//yellow
  rect(-10, -5, 20, 20);//center of the star 
  triangle(0, -35, -10, -5, 10, -5); //triangle 1
  triangle(-35, 5, -10, -5, -10, 15); //triangle 2
  triangle(35, 5, 10, -5, 10, 15); //triangle 3
  triangle(0, 45, 10, 15, -10, 15); //triangle 4


  }


function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(174, 203, 252)//blue
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}
