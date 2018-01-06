let angle = 0;

function setup() {
createCanvas( windowWidth, windowHeight, WEBGL )

  a = Mono().play( Rndi(60,150), 1/100 )
  d = Delay()
  q = Seq({
  time: Rndi( ms(10), ms(20) ),
  durations:0.1,
  target: d
})
  //a.fx.add( d )

  drums = EDrums('x*o*x-x------xxxxxxo')
  drums.amp = 0.9
  drums.fx.add(d)
  follow = Follow( drums )
}

function draw() {
  background( follow.getValue() * 50 );
  angle += 0.07;
  rotateX(angle*0.1);
  rotateY(angle*0.1);
  rotateZ(follow.getValue()*10);
  box(100,100,follow.getValue() * 755);
  specularMaterial(255);
  pointLight(0,follow.getValue() * 255, 0, 10,0,0);
  pointLight(0,0,follow.getValue() * 255, 0,0,0);

  ambientLight(175,0,0);
}
