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
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(250, 625, 150, 50, "midnightblue");
    createPlatform(450, 525, 150, 50, "midnightblue");
    createPlatform(650, 425, 150, 50, "midnightblue");
    createPlatform(875, 525, 150, 50, "midnightblue");
    createPlatform(1100, 425, 150, 50, "midnightblue");
    createPlatform(875, 315, 150, 50, "midnightblue");
    createPlatform(100, 200, 700, 50, "midnightblue");
    createPlatform(175, 100, 50, 15, "midnightblue");
    createPlatform(1100, 625, 150, 50, "midnightblue");
    createBadPlatform(1100, 425, 150, 50, "red");

    // TODO 3 - Create Collectables
    createCollectable("database", 180, 1, 0.2);
    createCollectable("database", 1155, 525, 0.2);
    createCollectable("database", 125, 105, 0.2);
    createCollectable("database", 930, 425, 0.2);
    createCollectable("database", 500, 400, 0.2);

    // TODO 4 - Create Cannons
    createCannon("right", 280, 2000);
    createCannon("right", 150, 1500);
    createCannon("right", 700, 1500);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
