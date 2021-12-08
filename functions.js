// Script has to be before the a-scene. It runs oddly or breaks the scene completely
    // Should multiple objects be allowed at a time here? The BYOH system will have 1 trait at a time. How many traits will be choosable?

    /*
    function setup () { // *** getItem(X); needs to be in the setup() function for p5js. This is a requirement.

      setLeafShape = getItem('setLeafShape'); // On the first run through, getItem will run. If getItem hasn't been saved before, it will start as null.
      setLeafSize = getItem('setLeafSize');
      setFlowerShape = getItem('setFlowerShape');
      setFlowerSize = getItem('setFlowerSize');
      setFlowerDown = getItem('setFlowerDown');
      
      // for(i = 0; i++; i < leafShape.length - 1) {
      //   if (setLeafShape === leafShape[i]) {
      //     setLeafShape = leafShape[i];
      //   }
      // }
    }
    */

    //let leaf;
    //let flower;
    //var setLeafType;
    //var setFlowerType;

    //let leaf;
    //let flower;

    //var setLeafShape;
    //let fusedLeaves, unfusedLeaves;

    function preload()
    {
      unfusedLeaves = loadImage("images/AR Media/unfused_leaves-01.svg");
      fusedLeaves = loadImage("images/AR Media/fused_leaves-01.svg");
    }

    window.onload = function () 
    {
          // ---------------------------- Size Buttons --------------------------------------------- //
          
          document.querySelector(".small-scale-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("You will be building a Small Honeysuckle!"); 

            flower = loadImage("images/AR Media/Radial/radial_pendulus_small-01.svg");

          });

          document.querySelector(".medium-scale-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("You will be building a Medium Honeysuckle!");

            flower = loadImage("images/AR Media/Radial/radial_pendulus_medium-01.svg");
          });

          document.querySelector(".large-scale-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("You will be building a Large Honeysuckle!");

            flower = loadImage("images/AR Media/Radial/radial_pendulus_large-01.svg");
          });


          // ---------------------------- Petal Orientation Buttons --------------------------------------------- //


          document.querySelector(".radial-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("You chose the Radial Petal Orientation!"); 

            flower = loadImage("images/AR Media/Radial/radial_pendulus_large-01.svg");
          });

          document.querySelector(".two21-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("You chose the 2+2+1 Petal Orientation!"); 

            flower = loadImage("images/AR Media/221/221_pendulus_large-01.svg");
          });
          
          document.querySelector(".four1-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("You chose the 4+1 Petal Orientation!"); 

            flower = loadImage("images/AR Media/41/41_pendulus_large-01.svg");
          });


          // ---------------------------- Flower Orientation Buttons -------------------------------------------- //


          document.querySelector(".pendulus-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will have a Pendulus Flower Orientation!"); 
          });

          document.querySelector(".upright-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will have an Upright Flower Orientation!"); 

            flower = loadImage("images/AR Media/Radial/radial_upright_large-01.svg");
          });


          // ---------------------------- Leaf Fusion Buttons --------------------------------------------------- //


          document.querySelector(".fused-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will have Fused leaves!"); 

            
            for (let s = 0; s < sprouts.length; s++) 
            {
              p = new Part(
                //"leaf",
                //leaf,
                fusedLeaves,
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
                fusedLeaves,
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

           // p.setLeafShape = fusedLeaves;
            //setLeafShape = fusedLeaves;
          });

          document.querySelector(".unfused-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will have Unfused leaves!"); 

            
            for (let s = 0; s < sprouts.length; s++) 
            {
              p = new Part(
                //"leaf",
                //leaf,
                unfusedLeaves,
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
                unfusedLeaves,
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
            //p.setLeafShape = unfusedLeaves;
            //setLeafShape = unfusedLeaves;
          });


          // ------------------------------- Color Buttons ---------------------------------------------------- //


          document.querySelector(".white-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will be white!"); 
          });

          document.querySelector(".yellow-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will be yellow!"); 
          });

          document.querySelector(".orange-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will be orange!"); 
          });

          document.querySelector(".pink-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will be pink!"); 
          });

          document.querySelector(".red-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will be red!"); 
          });

          document.querySelector(".purple-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will be purple!"); 
          });

          document.querySelector(".blue-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will be blue!"); 
          });

          document.querySelector(".green-button").addEventListener("click", function () {
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Your honeysuckle will be green!"); 
          });


      /* CODE FOR ATTRIBUTING SETTING */

      /* this refers to the red-box-button class and adds an event to the class that makes 
      document.querySelector('.red-button').addEventListener("click", function () {
        alert("Box will become Red"); // alert("string") is great for debugging and also holds up the code from running further
        document.querySelector('#box').setAttribute('color', '#DB4F40'); // Selects the object "red-box" by it's ID and changes the attribute 'visible' to the value 'false'.
        colorVal = 'red'; // After changing the value of the box, it's variable needs to be updated too.
        storeItem('colorVal', colorVal); // This stores the value as a 'Key' and then the 'data'. Using getItem will read the key and equal a value
      });

      // // this refers to the blue-box-button. It is not currently set up to do anything.
      // document.querySelector('.blue-button').addEventListener("click", function () {
      //   alert("Box will become Blue");
      //   document.querySelector('#box').setAttribute('color','#2A37AD');
      //   colorVal = 'blue';
      //   storeItem('colorVal', colorVal);
      // });

      // document.querySelector(".big-button").addEventListener("click", function () {
      //   alert("Box will be big");
      //   document.querySelector('#box').setAttribute('depth', '1');
      //   document.querySelector('#box').setAttribute('height', '1');
      //   document.querySelector('#box').setAttribute('width', '1');
      //   sizeVal = 'big';
      //   storeItem('sizeVal', sizeVal);
      // });

      // document.querySelector('.small-button').addEventListener("click", function () {
      //   alert("Box will be small");
      //   document.querySelector('#box').setAttribute('depth', '0.5');
      //   document.querySelector('#box').setAttribute('height', '0.5');
      //   document.querySelector('#box').setAttribute('width', '0.5');
      //   sizeVal = 'small';
      //   storeItem('sizeVal', sizeVal);
      // })

    // AFRAME.registerComponent('color', { //Only works outside of window.onload. did not work inside of window.onload
    //   init: function () {
    //     this.el.sceneEl.addEventListener('markerFound', () => {
    //   window.location = '/test-ar-target-color.html';
    //   })
    // }
    // });

    // AFRAME.registerComponent('size', { //Only works outside of window.onload. did not work inside of window.onload
    //   init: function () {
    //     this.el.sceneEl.addEventListener('markerFound', () => {
    //   window.location = '/test-ar-target-size.html';
    //   })
    // }
    // });
    */
    }
