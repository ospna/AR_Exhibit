window.onload = function () {

      document.querySelector(".size-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
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
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
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
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
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
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
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
      })
      ;

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

      document.querySelector(".color-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
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
        alert("Small Honeysuckle!"); 
      })

      document.querySelector(".medium-scale-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Medium Honeysuckle!");
      })

      document.querySelector(".large-scale-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Large Honeysuckle!");
      })

      document.querySelector(".radial-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the Radial petal orientation"); 
      })

      document.querySelector(".two21-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the 2+2+1 petal orientation"); 
      })
      
      document.querySelector(".four1-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the 4+1 petal orientation"); 
      })
  }

  /*
  window.onload = function () {
    document.querySelector(".size-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("Change Size"); 
    })
    document.querySelector(".petal-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("Petal Orientation"); 
    })
    document.querySelector(".flower-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("Flower Orientation"); 
    })
    document.querySelector(".leaf-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("Leaf Fusion"); 
    })
    document.querySelector(".growth-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("Growth Habit"); 
    })
    document.querySelector(".color-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("Honeysuckle Color"); 
    })
    document.querySelector(".small-scale-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("Small Honeysuckle!"); 
    })
    document.querySelector(".medium-scale-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("Medium Honeysuckle!");
    })
    document.querySelector(".large-scale-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("Large Honeysuckle!");
    })
    document.querySelector(".radial-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("You chose the Radial petal orientation"); 
    })
    document.querySelector(".two21-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("You chose the 2+2+1 petal orientation"); 
    })
    document.querySelector(".four1-button").addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("You chose the 4+1 petal orientation"); 
    })
}
*/