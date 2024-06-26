$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(0, 200, 150, 20);
    createPlatform(250, 350, 5, 5);
    createPlatform(400, 300, 150, 20);
    createPlatform(400, 300, 20, 600);
    createPlatform(800, 400, 550, 10);
    createPlatform(730, 350, 5, 5);
    createPlatform(800, 225, 15, 275);
    createPlatform(600, 650, 200, 10);
    createPlatform(1300, 600, 200, 10);
    createPlatform(1000, 650, 10, 100);
    createPlatform(1060, 650, 10, 100);
    createPlatform(650, 500, 710, 10);
    createPlatform(1000, 300, 10, 100);
    createPlatform(1060, 300, 10, 100);
    createPlatform(900, 100, 5, 300);
    createPlatform(310, 660, 90, 10);
    createPlatform(340, 560, 60, 10);
    createPlatform(350, 460, 50, 10);
    createPlatform(360, 360, 40, 10);
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("steve", 720, 300, 0.25);
    createCollectable("max", 250, 300);
    createCollectable("max", 1020, 350);
    createCollectable("steve", 850, 450);
    createCollectable("database", 1020, 700);
    createCollectable("max", 425, 700);
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("top", 320, 1000);
    createCannon("top", 800, 1250);
    createCannon("top", 550, 1000);
    createCannon("top", 1080, 1500);
    createCannon("top", 925, 2500);
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
