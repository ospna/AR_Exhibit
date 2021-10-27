// create a variable to hold our world object
var world;

// create a variable to hold our marker
var marker;

// create variables to hold each plane
var plane1, plane2, plane3, plane4, plane5;

let p5graphics;

function setup() {

    p5graphics = createGraphics(256,256).id('p5graphics');

  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  marker = world.getMarker('patt2');
  marker2 = world.getMarker('hiro');

  // create some geometry to add to our marker
  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left and right
  // -0.5, 0, -0.5 is the top left corner

container = new Box({
    x:0, y:0, z:0, width: 1, depth: 1, height: 1,rotationX:270.0,opacity:0
});

marker.addChild( container );

container2 = new Box({
  x:0, y:0, z:0, width: 1, depth: 1, height: 1,rotationX:270.0,opacity:0
});

marker2.addChild( container2 );

// intent behing this 'container" box was that *it* would rotate to face the camera using a single line of code,
// rather than rotating every plane contained in the box individually.
// but the coordinate system in A-Frame is weird... still haven't figured out how to make the container rotate as expected
// toward the camer, around the Y axis

  plane1 = new Plane({
    x:-2.0, y:-0.5, z:1.0,
    red:255, green:0, blue:0,
    width:0.5, height:1,
    asset:'honeysuckle'
  });
  container.addChild( plane1 );

  plane2 = new Plane({
    x:1.5, y:0.0, z:1.0,
    red:0, green:0, blue:255,
    width:0.5, height:1,
    asset:'honeysuckle'
  });
  container.addChild( plane2 );

  plane3 = new Plane({
    x:-1.0, y:-0.25, z:1.0,
    //red:0, green:0, blue:255,
    width:0.5, height:1,
    asset:'p5graphics' 
    // this plane is textured by a p5.graphics object
    // https://p5js.org/reference/#/p5.Graphics
    // find the simple code drawing random ellipsed in the draw loop below
  });
  container.addChild( plane3 );

  plane4 = new Plane({
    x:0.5, y:-0.25, z:1.0,
    red:128, green:128, blue:128,
    width:0.5, height:1,
    asset:'honeysuckle'
  });
  container2.addChild( plane4 );

  plane5 = new Plane({
    x:0, y:-0.75, z:1.0,
    red:255, green:128, blue:0,
    width:0.5, height:1,
    asset:'honeysuckle'
  });
  container2.addChild( plane5 );
}


function draw() {

    world.clearDrawingCanvas();

    // get the rotation of the AR marker relative to the camera,
    // which allows us to rotate the objects attached to that marker toward the camera
    let rot = marker.tag.object3D.rotation;
    let rot2 = marker2.tag.object3D.rotation;
    let normalRot = degrees(rot.z);
    let normalRot2 = degrees(rot2.z);// + Math.ceil(-1 * degrees(rot.y) / 360) * 360;

    textSize(8);
    fill(255);
    stroke(0);
    strokeWeight(1);
    text("Debug: " + normalRot, width/6, height/4);

    p5graphics.background(0,0,0,0);
    let r = random(155);
	
    if (r > 100) {
        p5graphics.fill(r,100+r,r);
	      p5graphics.ellipse(random(width), random(height), (r/2));
}
    try {
        plane3.tag.object3DMap.mesh.material.map.needsUpdate = true;
    } catch (e) {
        console.log(e); // for debugging purposes
    }

    //plane4.rotateY(plane4.getRotationY()+2);

   //var markerPosition = marker.getScreenPosition();

    //var markerRotation = marker.getRotationY();

    

    // container.rotateY(normalRot);
    // should be able to just rotate the containing box, but it ain't working
    // so have to rotate the individual objects (planes) instead
    
    plane1.rotateY(normalRot);
    plane2.rotateY(normalRot);
    plane3.rotateY(normalRot);
    plane4.rotateY(normalRot2);
    plane5.rotateY(normalRot2);

}