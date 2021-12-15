// create a variable to hold our world object
var world;

// create variables to hold our markers
var markerPaper;

// create variables to hold each plane
var plane1;


function setup() {

    // create our world (this also creates a p5 canvas for us)
    world = new World('ARScene');

    // grab a reference to the markers that we set up on the HTML side (connect to it using its 'id')
    markerPaper = world.getMarker('patt1');

    createCanvas(600, 600);

  // create some geometry to add to our marker
  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left and right
  // -0.5, 0, -0.5 is the top left corner

  // Create containers for each marker
container1 = new Box({
  x:0, y:0, z:0, width: 1, depth: 1, height: 1,rotationX:270.0,opacity:0
});

// Containers to markers
markerPaper.addChild( container1 );

// intent behing this 'container" box was that *it* would rotate to face the camera using a single line of code,
// rather than rotating every plane contained in the box individually.
// but the coordinate system in A-Frame is weird... still haven't figured out how to make the container rotate as expected
// toward the camer, around the Y axis

  plane1 = new Plane({
    x:0, y:0, z:1.0,
    //red:0, green:0, blue:255,
    width:1, height:1,
    asset:'animation' 
    // this plane is textured by a p5.graphics object
    // https://p5js.org/reference/#/p5.Graphics
    // find the simple code drawing random ellipsed in the draw loop below
  });
  container1.addChild( plane1 );
  
function draw() {

    world.clearDrawingCanvas();

    // get the rotation of the AR marker relative to the camera,
    // which allows us to rotate the objects attached to that marker toward the camera
    let rot1 = markerPaper.tag.object3D.rotation;

    let normalRot1 = degrees(rot1.z);

    // Adjust UI depending on which target is visible
    if (markerPaper.isVisible() == true) // PAPER MARKER
    {
        plane1.rotateY(normalRot1);
    };
}

AFRAME.registerComponent('vidhandler', {
  // ...
  init: function () {
      // Set up initial state and variables.
      this.toggle = false;
      this.vid = document.querySelector("#animation")
      this.vid.pause();
  },
  tick:function(){
      
  if(this.el.object3D.visible == true){
  if(!this.toggle){
      this.toggle = true;
      this.vid.play();
      }
  }else{
  this.toggle = false;
      this.vid.pause();
      }
  }
  });
}