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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(250, 625, 150, 50, "Dark Blue");
    createPlatform(450, 525, 150, 50, "Dark Blue");
    createPlatform(650, 425, 150, 50, "Dark Blue");
    createPlatform(875, 525, 150, 50, "Dark Blue");
    createPlatform(1100, 425, 150, 50, "Dark Blue");
    createPlatform(875, 315, 150, 50, "Dark Blue"); 
    createPlatform(100, 200, 700, 50, "Dark Blue");
    createPlatform(175, 100, 50, 15, "Dark Blue");

    // TODO 3 - Create Collectables

    // TODO 4 - Create Cannons

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
