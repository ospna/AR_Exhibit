// create a variable to hold our world object
var world;

// create variables to hold our markers
var markerSize, markerPetal, markerFlower, markerLeaf, markerColor, markerPaper;

// create variables to hold each plane
var plane1, plane2, plane3, plane4, plane5;

// Create p5Graphics object
let p5graphics;

// Variables for creating stem and its locations
let x1, x2, x3, x4, y1, y2, y3, y4, r, posNeg;

// Sprouts array
let sprouts;

// Parts array
let parts;

//Leaf and flower variables for parts
var leaf, flower, fusedLeaves, unfusedLeaves;

//Unused, originally intended to have honeysuckle go back and forth
let bounceAmount, bounceRate, previousRotation;


var setLeafShape;
function preload()
{
  //Set leaf and flower images
  leaf = loadImage("images/leaf.svg");
  setLeafShape = leaf;
  flower = loadImage("images/flower.svg");
}

function setup() {

    // create our world (this also creates a p5 canvas for us)
    world = new World('ARScene');

    // grab a reference to the markers that we set up on the HTML side (connect to it using its 'id')
    markerSize = world.getMarker('patt1');
    markerPetal = world.getMarker('patt2');
    markerFlower = world.getMarker('patt3');
    markerLeaf = world.getMarker('patt4');
    markerColor = world.getMarker('patt5');
    markerPaper = world.getMarker('patt6');

    //Crate graphics, set angle mode to degrees, create canvas
    p5graphics = createGraphics(600, 600).id('p5graphics');
    angleMode(degrees);
    createCanvas(600, 600);
    
    //Calls create vine function and addBYOHComponents function
    createVine();
    addBYOHComponents();

  // create some geometry to add to our marker
  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left and right
  // -0.5, 0, -0.5 is the top left corner

  // Create containers for each marker
container1 = new Box({
  x:0, y:0, z:0, width: 1, depth: 1, height: 1,rotationX:270.0,opacity:0
});

container2 = new Box({
  x:0, y:0, z:0, width: 1, depth: 1, height: 1,rotationX:270.0,opacity:0
});

container3 = new Box({
  x:0, y:0, z:0, width: 1, depth: 1, height: 1,rotationX:270.0,opacity:0
});

container4 = new Box({
  x:0, y:0, z:0, width: 1, depth: 1, height: 1,rotationX:270.0,opacity:0
});

container5 = new Box({
  x:0, y:0, z:0, width: 1, depth: 1, height: 1,rotationX:270.0,opacity:0
});

// Containers to markers
markerSize.addChild( container1 );
markerPetal.addChild( container2 );
markerFlower.addChild( container3 );
markerLeaf.addChild( container4 );
markerColor.addChild( container5 );

// intent behing this 'container" box was that *it* would rotate to face the camera using a single line of code,
// rather than rotating every plane contained in the box individually.
// but the coordinate system in A-Frame is weird... still haven't figured out how to make the container rotate as expected
// toward the camer, around the Y axis

  plane1 = new Plane({
    x:0, y:0, z:1.0,
    //red:0, green:0, blue:255,
    width:1, height:1,
    asset:'p5graphics' 
    // this plane is textured by a p5.graphics object
    // https://p5js.org/reference/#/p5.Graphics
    // find the simple code drawing random ellipsed in the draw loop below
  });
  container1.addChild( plane1 );

  plane2 = new Plane({
    x:0, y:0, z:1.0,
    //red:0, green:0, blue:255,
    width:1, height:1,
    asset:'p5graphics' 
    // this plane is textured by a p5.graphics object
    // https://p5js.org/reference/#/p5.Graphics
    // find the simple code drawing random ellipsed in the draw loop below
  });
  container2.addChild( plane2 );

  plane3 = new Plane({
    x:0, y:0, z:1.0,
    //red:0, green:0, blue:255,
    width:1, height:1,
    asset:'p5graphics' 
    // this plane is textured by a p5.graphics object
    // https://p5js.org/reference/#/p5.Graphics
    // find the simple code drawing random ellipsed in the draw loop below
  });
  container3.addChild( plane3 );

  plane4 = new Plane({
    x:0, y:0, z:1.0,
    //red:0, green:0, blue:255,
    width:1, height:1,
    asset:'p5graphics' 
    // this plane is textured by a p5.graphics object
    // https://p5js.org/reference/#/p5.Graphics
    // find the simple code drawing random ellipsed in the draw loop below
  });
  container4.addChild( plane4 );

  plane5 = new Plane({
    x:0, y:0, z:1.0,
    //red:0, green:0, blue:255,
    width:1, height:1,
    asset:'p5graphics' 
    // this plane is textured by a p5.graphics object
    // https://p5js.org/reference/#/p5.Graphics
    // find the simple code drawing random ellipsed in the draw loop below
  });
  container5.addChild( plane5 );
}

function draw() {

    world.clearDrawingCanvas();

    // get the rotation of the AR marker relative to the camera,
    // which allows us to rotate the objects attached to that marker toward the camera
    let rot1 = markerSize.tag.object3D.rotation;
    let rot2 = markerPetal.tag.object3D.rotation;
    let rot3 = markerFlower.tag.object3D.rotation;
    let rot4 = markerLeaf.tag.object3D.rotation;
    let rot5 = markerColor.tag.object3D.rotation;

    let normalRot1 = degrees(rot1.z);
    let normalRot2 = degrees(rot2.z);
    let normalRot3 = degrees(rot3.z);
    let normalRot4 = degrees(rot4.z);
    let normalRot5 = degrees(rot5.z);

    //Set options for creating the stem of the honeysuckle
    p5graphics.noFill();
    p5graphics.strokeWeight(4);
    p5graphics.stroke(0, 200, 0);
    // Create stem with coordinates
    p5graphics.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    p5graphics.fill(255);

    // Show all of the parts
    for (let p = 0; p < parts.length; p++) {
      parts[p].show();
    }

    //Transparent background
    p5graphics.background(0,0,0,0);

    // Adjust UI depending on which target is visible
    if (markerSize.isVisible() == true) // SIZE MARKER
    {
        document.querySelector(".sizeButtons").style.visibility = "visible";
        document.querySelector(".sizeButtons").style.display = "flex";
        document.querySelector(".petalOrientButtons").style.visibility = "hidden";
        document.querySelector(".petalOrientButtons").style.display = "none";
        document.querySelector(".flowerOrientButtons").style.visibility = "hidden";
        document.querySelector(".flowerOrientButtons").style.display = "none";
        document.querySelector(".leafFusionButtons").style.visibility = "hidden";
        document.querySelector(".leafFusionButtons").style.display = "none";
        document.querySelector(".colorButtons").style.visibility = "hidden";
        document.querySelector(".colorButtons").style.display = "none";
        plane1.rotateY(normalRot1);
    };

    if (markerPetal.isVisible() == true) // PETAL ORIENTATION MARKER
    {
        document.querySelector(".sizeButtons").style.visibility = "hidden";
        document.querySelector(".sizeButtons").style.display = "none";
        document.querySelector(".petalOrientButtons").style.visibility = "visible";
        document.querySelector(".petalOrientButtons").style.display = "flex";
        document.querySelector(".flowerOrientButtons").style.visibility = "hidden";
        document.querySelector(".flowerOrientButtons").style.display = "none";
        document.querySelector(".leafFusionButtons").style.visibility = "hidden";
        document.querySelector(".leafFusionButtons").style.display = "none";
        document.querySelector(".colorButtons").style.visibility = "hidden";
        document.querySelector(".colorButtons").style.display = "none";
        plane2.rotateY(normalRot2);
    };

    if (markerFlower.isVisible() == true)  // FLOWER ORIENTATION MARKER
    {
      document.querySelector(".sizeButtons").style.visibility = "hidden";
      document.querySelector(".sizeButtons").style.display = "none";
      document.querySelector(".petalOrientButtons").style.visibility = "hidden";
      document.querySelector(".petalOrientButtons").style.display = "none";
      document.querySelector(".flowerOrientButtons").style.visibility = "visible";
      document.querySelector(".flowerOrientButtons").style.display = "flex";
      document.querySelector(".leafFusionButtons").style.visibility = "hidden";
      document.querySelector(".leafFusionButtons").style.display = "none";
      document.querySelector(".colorButtons").style.visibility = "hidden";
      document.querySelector(".colorButtons").style.display = "none";
      plane3.rotateY(normalRot3);
    };
  
    if (markerLeaf.isVisible() == true)  // LEAF FUSION MARKER
    {
      document.querySelector(".sizeButtons").style.visibility = "hidden";
      document.querySelector(".sizeButtons").style.display = "none";
      document.querySelector(".petalOrientButtons").style.visibility = "hidden";
      document.querySelector(".petalOrientButtons").style.display = "none";
      document.querySelector(".flowerOrientButtons").style.visibility = "hidden";
      document.querySelector(".flowerOrientButtons").style.display = "none";
      document.querySelector(".leafFusionButtons").style.visibility = "visible";
      document.querySelector(".leafFusionButtons").style.display = "flex";
      document.querySelector(".colorButtons").style.visibility = "hidden";
      document.querySelector(".colorButtons").style.display = "none";
      plane4.rotateY(normalRot4);
  };

    if (markerColor.isVisible() == true)  // COLOR MARKER
    { 
      document.querySelector(".sizeButtons").style.visibility = "hidden";
      document.querySelector(".sizeButtons").style.display = "none";
      document.querySelector(".petalOrientButtons").style.visibility = "hidden";
      document.querySelector(".petalOrientButtons").style.display = "none";
      document.querySelector(".flowerOrientButtons").style.visibility = "hidden";
      document.querySelector(".flowerOrientButtons").style.display = "none";
      document.querySelector(".leafFusionButtons").style.visibility = "hidden";
      document.querySelector(".leafFusionButtons").style.display = "none";
      document.querySelector(".colorButtons").style.visibility = "visible";
      document.querySelector(".colorButtons").style.display = "grid";
      plane5.rotateY(normalRot5);
    };

    // HOME PAGE (When there is no marker visible)
    if(markerSize.isVisible() == false && markerPetal.isVisible() == false && markerFlower.isVisible() == false && markerLeaf.isVisible() == false && markerColor.isVisible() == false)
    {
      document.querySelector(".navButtons").style.visibility = "hidden";
      document.querySelector(".navButtons").style.display = "none";
      document.querySelector(".sizeButtons").style.visibility = "hidden";
      document.querySelector(".sizeButtons").style.display = "none";
      document.querySelector(".petalOrientButtons").style.visibility = "hidden";
      document.querySelector(".petalOrientButtons").style.display = "none";
      document.querySelector(".flowerOrientButtons").style.visibility = "hidden";
      document.querySelector(".flowerOrientButtons").style.display = "none";
      document.querySelector(".leafFusionButtons").style.visibility = "hidden";
      document.querySelector(".leafFusionButtons").style.display = "none";
      document.querySelector(".colorButtons").style.visibility = "hidden";
      document.querySelector(".colorButtons").style.display = "none";
    };
}


function addBYOHComponents() // Function that creates all of the parts for the honeysuckle
// Creates 2 leaves and 1 flower for each location along the stem
{
  parts = [];

  let rotationRange = 10;
  
  for (let s = 0; s < sprouts.length; s++) 
    {
      p = new Part(
        //"leaf",
        //leaf,
        setLeafShape,
        sprouts[s][0],
        sprouts[s][1],
        60,
        60,
        // setLeafSize,
        // setLeafSize,
        -rotationRange + random(2 * rotationRange),
        false,
        true
      );
      parts.push(p);

      p = new Part(
        //"leaf",
        //leaf,
        setLeafShape,
        sprouts[s][0],
        sprouts[s][1],
        60,
        60,
        // setLeafSize,
        // setLeafSize,
        -rotationRange + random(2 * rotationRange),
        true,
        true
      );
      parts.push(p);
    }
    
  //draw flowers separately and after leaves to appear in front
  for (let s = 0; s < sprouts.length; s++) {
    p = new Part(
      //"flower",
      flower,
      //setFlowerShape,
      sprouts[s][0],
      sprouts[s][1],
      60,
      60,
      // setFlowerSize,
      // setFlowerSize,
      -rotationRange + random(2 * rotationRange),
      true,
      false
      //setFlowerDown
    );
    parts.push(p);
  }
}

function createVine() // Create vine with all the locations, place locations in sprouts array
{
  sprouts = [];

  x1 = width / 2; // starts in middle near bottom of sketch
  // bezier control points at a random distance from middle to the left or right
  let posNeg = random([-1,1]);
  x2 = width / 2 + random(width / 4) * posNeg; 
  x3 = width / 2 + random(width / 4) * -posNeg;
  x4 = width / 2; // ends in middle a third away from top of sketch
  y1 = height - 20;
  y4 = height - 2 * (height / 3);
  y2 = (y4 - y1) / 3 + y1;
  y3 = y4 - (y4 - y1) / 3;
  let steps = 4; // number of sprout points between bottom-most and top-most point
  
  for (let i = 0; i <= steps; i++) {
    let t = i / steps;
    let x = bezierPoint(x1, x2, x3, x4, t);
    let y = bezierPoint(y1, y2, y3, y4, t);
    sprouts.push([x, y]);
  }
}

class Part {
  constructor(
    //name,
    img,
    posX,
    posY,
    width,
    height,
    rotation,
    isRight,
    isDown,
    color
  ) {
    //this.name = name;
    this.img = img;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.rotation = rotation;
    this.isRight = isRight;
    this.isDown = isDown;
    this.color = color;

    bounceAmount = 1 + random(2, 4);
    print("bounceAmount: " + bounceAmount);

    bounceRate = random(-0.025, 0.025);
    print("bounceRate: " + bounceRate);

    if (isRight == false) {
      bounceRate = -bounceRate;
    }

    // if (isRight == true) {
    //   bounceRate = .02;
    // } else {
    //   bounceRate = -.02;
    // }
    previousRotation = this.rotation;
  }

  // Show all of the parts
  show() 
  {
    // Same as p5 code created by Ault, but now it has the p5graphics prefix to make it appear correctly
    // Otherwise it does not work
    p5graphics.push();
    p5graphics.translate(this.posX, this.posY);

    if (this.isRight == false) {
      p5graphics.scale(-1, 1);
    }

    if (this.isDown == false) {
      p5graphics.scale(1, -1);
    }

    // if (this.name == "flower") { //Make flower bounce
    //   this.bounce();
    // }

    p5graphics.image(this.img, 0, 0, this.width, this.height);
    p5graphics.pop();
  }

  // Bounce
  bounce() {
    let b = previousRotation + bounceRate;
    rotate(b);
    previousRotation = b;
    if (abs(previousRotation) >= bounceAmount) {
      bounceRate = -bounceRate;
    }
  }
}