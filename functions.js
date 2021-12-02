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

window.onload = function () 
{
      // ---------------------------- Size Buttons --------------------------------------------- //
      
      document.querySelector(".small-scale-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You will be building a Small Honeysuckle!"); 
      });

      document.querySelector(".medium-scale-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You will be building a Medium Honeysuckle!");
      });

      document.querySelector(".large-scale-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You will be building a Large Honeysuckle!");
      });

      // ---------------------------- Petal Orientation Buttons --------------------------------------------- //

      document.querySelector(".radial-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the Radial Petal Orientation!"); 

        setFlowerType = loadImage("images/AR Media/Radial/radial_pendulus_large-01.svg");
      });

      document.querySelector(".two21-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the 2+2+1 Petal Orientation!"); 

        setFlowerType = loadImage("images/AR Media/221/221_pendulus_large-01.svg");
      });
      
      document.querySelector(".four1-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the 4+1 Petal Orientation!"); 
        setFlowerType = loadImage("images/AR Media/41/41_pendulus_large-01.svg");
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
      });




      // ---------------------------- Leaf Fusion Buttons --------------------------------------------------- //


      document.querySelector(".fused-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Your honeysuckle will have Fused leaves!"); 
      });

      document.querySelector(".unfused-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Your honeysuckle will have Unfused leaves!"); 
      });




      // ------------------------------- Color Buttons ---------------------------------------------------- //


      document.querySelector(".yellow-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Your honeysuckle will be yellow!"); 
      });

      document.querySelector(".white-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Your honeysuckle will be white!"); 
      });

      document.querySelector(".red-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Your honeysuckle will be red!"); 
      });

      document.querySelector(".pink-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Your honeysuckle will be pink!"); 
      });

      document.querySelector(".orange-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Your honeysuckle will be orange!"); 
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
