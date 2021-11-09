window.onload = function () {

      document.querySelector(".size-button").addEventListener("click", function () {
        // size tab 
        alert("Change Size"); 
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
      });

      document.querySelector(".petal-button").addEventListener("click", function () {
        // petal orientation tab
        alert("Petal Orientation"); 
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
      });

      document.querySelector(".flower-button").addEventListener("click", function () {
        // flower orientation tab
        alert("Flower Orientation"); 
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
      });

      document.querySelector(".leaf-button").addEventListener("click", function () {
        // leaf fusion tab
        alert("Leaf Fusion"); 
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
      });

      /*
      document.querySelector(".growth-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Growth Habit"); 
        document.querySelector(".sizeButtons").style.visibility = "hidden";
        document.querySelector(".petalOrientButtons").style.visibility = "hidden";
        document.querySelector(".flowerOrientButtons").style.visibility = "hidden";
        document.querySelector(".leafFusionButtons").style.visibility = "hidden";
        document.querySelector(".colorButtons").style.visibility = "hidden";
      });
      */

      document.querySelector(".color-button").addEventListener("click", function () {
        // color tab
        alert("Honeysuckle Color"); 
        document.querySelector(".sizeButtons").style.visibility = "hidden";
        document.querySelector(".sizeButtons").style.display = "none";
        document.querySelector(".petalOrientButtons").style.visibility = "hidden";
        document.querySelector(".petalOrientButtons").style.display = "none";
        document.querySelector(".flowerOrientButtons").style.visibility = "hidden";
        document.querySelector(".flowerOrientButtons").style.display = "none";
        document.querySelector(".leafFusionButtons").style.visibility = "hidden";
        document.querySelector(".leafFusionButtons").style.display = "none";
        document.querySelector(".colorButtons").style.visibility = "visible";
        document.querySelector(".colorButtons").style.display = "flex";
      });

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

      document.querySelector(".radial-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the Radial Petal Orientation!"); 
      });

      document.querySelector(".two21-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the 2+2+1 Petal Orientation!"); 
      });
      
      document.querySelector(".four1-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the 4+1 Petal Orientation!"); 
      });

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
    }
