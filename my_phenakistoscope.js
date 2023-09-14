const SLICE_COUNT = 9;//分割数量

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  //pScope.output_mode(STATIC_FRAME);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW); //CW or CCW 正转/倒转
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("elephantRun" , "png", 4);
  pScope.load_image_sequence("Ball" , "png", 7);
  pScope.load_image("circus" , "png",);
}

function setup_layers(pScope){

  new PLayer(null,255,255,255); //background deep blue

  let insideBackground = new PLayer(insideBlue)
  insideBackground.mode(RING)
  insideBackground.set_boundary(0,700)

  let BackgroundDetail = new PLayer(stars);
  BackgroundDetail .mode( SWIRL(7) ); //stars number
  BackgroundDetail .set_boundary( 200, 1000 ); //location

 let BackgroundColour = new PLayer(outside)
 BackgroundColour.mode(RING)
 BackgroundColour.set_boundary(900,1000)


 let elephantRunSequence = new PLayer(elephantRun);
 elephantRunSequence.mode(RING);
 elephantRunSequence.set_boundary(0,1000)

 //let BallSequence = new PLayer(Ball);
 //BallSequence .mode(RING);
 //BallSequence .set_boundary(0,1000)

  let CenterImage= new PLayer(circus)
   CenterImage.mode(RING)
   CenterImage.set_boundary(0,30)

  let elephant = new PLayer(stars);
  BackgroundDetail .mode( SWIRL(7) ); //stars number
  elephant.set_boundary( 200, 1000 ); //location

}
function circus(x,y,animation,pScope){
  scale(1)
  pScope.draw_image("circus",0,0)
}

function stars(x, y, animation, pScope){ // pentacle
  rotate(360*animation.frame)
  scale(2*animation.wave(5));
  //draw star 
  noStroke();
  
  fill(232,210,72);//yellow
  rect(-10, -5, 20, 20);//center of the star 
  triangle(0, -35, -10, -5, 10, -5); //triangle 1
  triangle(-35, 5, -10, -5, -10, 15); //triangle 2
  triangle(35, 5, 10, -5, 10, 15); //triangle 3
  triangle(0, 45, 10, 15, -10, 15); //triangle 4

  }

  function outside(x,y,animation,pScope){
    pScope.fill_background(43,57,84)
  }

  function insideBlue(x,y,animation,pScope){
    pScope.fill_background(43,57,84)
  }

function elephantRun(x,y,animation,pScope){
translate(x,y,-650)
scale(0.5)
pScope.draw_image_from_sequence("elephantRun",700,1000,animation.frame)
}

//function Ball(x,y,animation,pScope){
//translate(x,y,-650)
//scale(0.3)
//pScope.draw_image_from_sequence("Ball",600,1300,animation.frame)
//}
  