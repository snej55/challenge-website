function preload() {
  defaultLevel = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  levelPath = "0.json";
  stage = 0;
  level = loadJSON(levelPath);
}

function newLevel() {
  level.levels[stage].grid = grid;
  level.levels[stage].tileSize = tileSize;
  level.levels.push({"grid": defaultLevel.map((x) => x), "tileSize": tileSize, "playerSpawnPos": [100, 40], "lava": []});
  stage += 1;
  levelData = loadLevelData(level, stage);
  grid = levelData[0];
  tileSize = levelData[1];
  lava = levelData[2];
  l = lava.length
}

function nextLevel() {
  stage = (stage + 1) % level.levels.length;
  levelData = loadLevelData(level, stage);
  grid = levelData[0];
  tileSize = levelData[1];
  lava = levelData[2];
  l = lava.length
}

function setup() {
  createCanvas(400, 400);
  levelData = loadLevelData(level, stage);
  grid = levelData[0];
  tileSize = levelData[1];
  scroll = [0, 0];
  controls = { up: 0, down: 0, right: 0, left: 0 };
  tileType = "block";
  tileMode = 0;
  tileTypes = { 0: "block", 1: "spike", 2: "flag", 3: "playerSpawnPos", 4: "spring" , 5: "upspike", 6: "right_ramp", 7: "left_ramp", 8: "lava", 9: "drop", 10: "grass"};
  placing_lava = false;
  lava = levelData[2];
  l = lava.length;
  dt = 1;
  last = new Date().getTime();
  console.log(lava);
}

function drawGrid(grid, scroll = [0, 0]) {
  for (let y = 0; y < grid.length; y++) {
    row = grid[y];
    for (let x = 0; x < row.length; x++) {
      tile = grid[y][x];
      if (tile == 1) {
        noStroke();
        fill(0);
        rect(
          x * tileSize[0] - scroll[0],
          y * tileSize[1] - scroll[1],
          tileSize[0],
          tileSize[1]
        );
      }
      if (tile == 9) {
        noStroke();
        fill(200, 100, 0);
        rect(
          x * tileSize[0] - scroll[0],
          y * tileSize[1] - scroll[1],
          tileSize[0],
          tileSize[1] * 0.25
        );
      }
      if (tile == 10) {
        noStroke();
        fill(0, 255, 0);
        rect(
          x * tileSize[0] - scroll[0],
          y * tileSize[1] - scroll[1],
          tileSize[0],
          tileSize[1]
        );
      }
      if (tile == 2) {
        noStroke();
        fill(230, 0, 0);
        triangle(
          x * tileSize[0] - scroll[0],
          y * tileSize[1] + tileSize[1] - scroll[1],
          x * tileSize[0] - scroll[0] + tileSize[0] * 0.25,
          y * tileSize[1] + tileSize[1] * 0.5 - scroll[1],
          x * tileSize[0] - scroll[0] + tileSize[0] * 0.5,
          y * tileSize[1] + tileSize[1] - scroll[1]
        );
        triangle(
          x * tileSize[0] - scroll[0] + tileSize[0] * 0.5,
          y * tileSize[1] + tileSize[1] - scroll[1],
          x * tileSize[0] - scroll[0] + tileSize[0] * 0.75,
          y * tileSize[1] + tileSize[1] * 0.5 - scroll[1],
          x * tileSize[0] - scroll[0] + tileSize[0],
          y * tileSize[1] + tileSize[1] - scroll[1]
        );
      }
      if (tile == 7) {
        noStroke();
        fill(0, 0, 0);
        triangle(
          x * tileSize[0] - scroll[0],
          y * tileSize[1] + tileSize[1] - scroll[1],
          x * tileSize[0] - scroll[0] + tileSize[0],
          y * tileSize[1] + tileSize[1] - scroll[1],
          x * tileSize[0] - scroll[0],
          y * tileSize[1] - scroll[1]
        );
      }
      if (tile == 8) {
        noStroke();
        fill(0, 0, 0);
        triangle(
          x * tileSize[0] - scroll[0],
          y * tileSize[1] + tileSize[1] - scroll[1],
          x * tileSize[0] - scroll[0] + tileSize[0],
          y * tileSize[1] + tileSize[1] - scroll[1],
          x * tileSize[0] + tileSize[0] - scroll[0],
          y * tileSize[1] - scroll[1]
        );
      }
      if (tile == 6) {
        noStroke();
        fill(230, 0, 0);
        triangle(
          x * tileSize[0] - scroll[0],
          y * tileSize[1] - scroll[1],
          x * tileSize[0] - scroll[0] + tileSize[0] * 0.25,
          y * tileSize[1] + tileSize[1] * 0.5 - scroll[1],
          x * tileSize[0] - scroll[0] + tileSize[0] * 0.5,
          y * tileSize[1] - scroll[1]
        );
        triangle(
          x * tileSize[0] - scroll[0] + tileSize[0] * 0.5,
          y * tileSize[1] - scroll[1],
          x * tileSize[0] - scroll[0] + tileSize[0] * 0.75,
          y * tileSize[1] + tileSize[1] * 0.5 - scroll[1],
          x * tileSize[0] - scroll[0] + tileSize[0],
          y * tileSize[1] - scroll[1]
        );
      }
      if (tile == 3) {
        fill(0, 200, 50);
        ellipse(
          x * tileSize[0] + tileSize[0] * 0.5 - scroll[0],
          y * tileSize[1] +
            tileSize[1] * 0.5 +
            sin(millis() * 0.005) * tileSize[1] * 0.1 -
            scroll[1],
          tileSize[0] * 0.8,
          tileSize[1] * 0.8
        );
      }
      if (tile == 5) {
        fill(200, 0, 200);
        ellipse(
          x * tileSize[0] + tileSize[0] * 0.5 - scroll[0],
          y * tileSize[1] +
            tileSize[1] * 0.5 +
            sin(millis() * 0.005) * tileSize[1] * 0.1 -
            scroll[1],
          tileSize[0] * 0.8,
          tileSize[1] * 0.8
        );
      }
    }
  }
}

function loadLevelData(level, stage) {
  grid = level.levels[stage].grid;
  tileSize = level.levels[stage].tileSize;
  if (!level.levels[stage].lava) {
    level.levels[stage].lava = [];
  }
  lava = level.levels[stage].lava
  return [grid, tileSize, lava];
}

function saveLevelData(path, level) {
  level.grid = grid;
  level.tileSize = tileSize;
  return saveJSON(level, path, true);
}

function mousePressed() {
  if (mouseButton == LEFT) {
    if (tileType == "lava") {
      gridLoc = [
        floor((mouseX + scroll[0]) / tileSize[0]),
        floor((mouseY + scroll[1]) / tileSize[1]),
      ];
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
        if (!placing_lava) {
          lava.push([gridLoc[0] * tileSize[0], gridLoc[1] * tileSize[1]]);
          placing_lava = true;
        } else {
          lava[l] = [lava[l][0], lava[l][1], gridLoc[0] * tileSize[0] - lava[l][0] + tileSize[0], gridLoc[1] * tileSize[1] - lava[l][1] + tileSize[1]]
          placing_lava = false;
          l += 1
        }
      }
    }
  }
}

function click() {
  if (mouseButton == LEFT) {
    if (tileType == "block") {
      gridLoc = [
        floor((mouseX + scroll[0]) / tileSize[0]),
        floor((mouseY + scroll[1]) / tileSize[1]),
      ];
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
        grid[gridLoc[1]][gridLoc[0]] = 1;
      }
    }
    if (tileType == "spike") {
      gridLoc = [
        floor((mouseX + scroll[0]) / tileSize[0]),
        floor((mouseY + scroll[1]) / tileSize[1]),
      ];
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
        grid[gridLoc[1]][gridLoc[0]] = 2;
      }
    }
    if (tileType == "upspike") {
      gridLoc = [
        floor((mouseX + scroll[0]) / tileSize[0]),
        floor((mouseY + scroll[1]) / tileSize[1]),
      ];
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
        grid[gridLoc[1]][gridLoc[0]] = 6;
      }
    }
    if (tileType == "right_ramp") {
      gridLoc = [
        floor((mouseX + scroll[0]) / tileSize[0]),
        floor((mouseY + scroll[1]) / tileSize[1]),
      ];
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
        grid[gridLoc[1]][gridLoc[0]] = 7;
      }
    }
    if (tileType == "left_ramp") {
      gridLoc = [
        floor((mouseX + scroll[0]) / tileSize[0]),
        floor((mouseY + scroll[1]) / tileSize[1]),
      ];
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
        grid[gridLoc[1]][gridLoc[0]] = 8;
      }
    }
    if (tileType == "drop") {
      gridLoc = [
        floor((mouseX + scroll[0]) / tileSize[0]),
        floor((mouseY + scroll[1]) / tileSize[1]),
      ];
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
        grid[gridLoc[1]][gridLoc[0]] = 9;
      }
    }
    if (tileType == "flag") {
      gridLoc = [
        floor((mouseX + scroll[0]) / tileSize[0]),
        floor((mouseY + scroll[1]) / tileSize[1]),
      ];
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
        grid[gridLoc[1]][gridLoc[0]] = 3;
      }
    }
    if (tileType == "spring") {
      gridLoc = [
        floor((mouseX + scroll[0]) / tileSize[0]),
        floor((mouseY + scroll[1]) / tileSize[1]),
      ];
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
        grid[gridLoc[1]][gridLoc[0]] = 5;
      }
    }
    if (tileType == "grass")
      {
 gridLoc = [
        floor((mouseX + scroll[0]) / tileSize[0]),
        floor((mouseY + scroll[1]) / tileSize[1]),
      ];
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
        grid[gridLoc[1]][gridLoc[0]] = 10;
      }
      }
    if (tileType == "playerSpawnPos") {
      gridLoc = [
        floor((mouseX + scroll[0]) / tileSize[0]),
        floor((mouseY + scroll[1]) / tileSize[1]),
      ];
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
        level.levels[stage].playerSpawnPos = [
          gridLoc[0] * tileSize[0],
          gridLoc[1] * tileSize[1],
        ];
      }
    }
  }
}

function draw() {
  const now = new Date().getTime();
  dt = now - last;
  last = now;
  dt *= 0.06;
  tileType = tileTypes[tileMode];
  scroll[0] += (controls.right - controls.left) * dt * 3;
  scroll[1] += (controls.down - controls.up) * dt * 3;
  background(220);
  drawGrid(grid, scroll);
  fill(35, 98, 207, 150);
  rect(
    level.levels[stage].playerSpawnPos[0] - scroll[0],
    level.levels[stage].playerSpawnPos[1] - scroll[1],
    tileSize[0],
    tileSize[1]
  );
  gridLoc = [
    floor((mouseX + scroll[0]) / tileSize[0]),
    floor((mouseY + scroll[1]) / tileSize[1]),
  ];
  if (mouseIsPressed) {
    click();
  }
  if (tileType == "block") {
    if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      fill(0, 0, 0, 150);
      rect(
        gridLoc[0] * tileSize[0] - scroll[0],
        gridLoc[1] * tileSize[1] - scroll[1],
        tileSize[0],
        tileSize[1]
      );
    }
  }
  if (tileType == "drop") {
    if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      fill(200, 100, 0, 150);
      rect(
        gridLoc[0] * tileSize[0] - scroll[0],
        gridLoc[1] * tileSize[1] - scroll[1],
        tileSize[0],
        tileSize[1] * 0.25
      );
    }
  }
  if (tileType == "lava") {
    if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      fill(192, 41, 49, 150);
      rect(
        gridLoc[0] * tileSize[0] - scroll[0],
        gridLoc[1] * tileSize[1] - scroll[1],
        tileSize[0],
        tileSize[1]
      );
    }
  }
  if (tileType == "right_ramp") {
    if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      fill(0, 0, 0, 150);
      triangle(gridLoc[0] * tileSize[0] - scroll[0], gridLoc[1] * tileSize[1] - scroll[1], gridLoc[0] * tileSize[0] - scroll[0], gridLoc[1] * tileSize[1] - scroll[1] + tileSize[1], gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0], gridLoc[1] * tileSize[1] - scroll[1] + tileSize[1]);
    }
  }
  if (tileType == "left_ramp") {
    if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      fill(0, 0, 0, 150);
      triangle(gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0], gridLoc[1] * tileSize[1] - scroll[1], gridLoc[0] * tileSize[0] - scroll[0], gridLoc[1] * tileSize[1] - scroll[1] + tileSize[1], gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0], gridLoc[1] * tileSize[1] - scroll[1] + tileSize[1]);
    }
  }
  if (tileType == "playerSpawnPos") {
    if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      fill(35, 98, 207, 150);
      rect(
        gridLoc[0] * tileSize[0] - scroll[0],
        gridLoc[1] * tileSize[1] - scroll[1],
        tileSize[0],
        tileSize[1]
      );
    }
  }
  if (tileType == "grass")
    {
      if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      fill(0, 255, 0, 150);
      rect(
        gridLoc[0] * tileSize[0] - scroll[0],
        gridLoc[1] * tileSize[1] - scroll[1],
        tileSize[0],
        tileSize[1]
      );
    }
    }
  if (tileType == "spring") {
    if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      fill(100, 0, 100, 150);
      rect(
        gridLoc[0] * tileSize[0] - scroll[0],
        gridLoc[1] * tileSize[1] - scroll[1],
        tileSize[0],
        tileSize[1]
      );
    }
  }
  if (tileType == "upspike") {
    if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      fill(230, 0, 0, 150);
      triangle(
        gridLoc[0] * tileSize[0] - scroll[0],
        gridLoc[1] * tileSize[1] - scroll[1],
        gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0] * 0.25,
        gridLoc[1] * tileSize[1] + tileSize[1] * 0.5 - scroll[1],
        gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0] * 0.5,
        gridLoc[1] * tileSize[1] - scroll[1]
      );
      triangle(
        gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0] * 0.5,
        gridLoc[1] * tileSize[1] - scroll[1],
        gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0] * 0.75,
        gridLoc[1] * tileSize[1] + tileSize[1] * 0.5 - scroll[1],
        gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0],
        gridLoc[1] * tileSize[1] - scroll[1]
      );
    }
  }
  if (tileType == "spike") {
    if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      fill(230, 0, 0, 150);
      triangle(
        gridLoc[0] * tileSize[0] - scroll[0],
        gridLoc[1] * tileSize[1] + tileSize[1] - scroll[1],
        gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0] * 0.25,
        gridLoc[1] * tileSize[1] + tileSize[1] * 0.5 - scroll[1],
        gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0] * 0.5,
        gridLoc[1] * tileSize[1] + tileSize[1] - scroll[1]
      );
      triangle(
        gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0] * 0.5,
        gridLoc[1] * tileSize[1] + tileSize[1] - scroll[1],
        gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0] * 0.75,
        gridLoc[1] * tileSize[1] + tileSize[1] * 0.5 - scroll[1],
        gridLoc[0] * tileSize[0] - scroll[0] + tileSize[0],
        gridLoc[1] * tileSize[1] + tileSize[1] - scroll[1]
      );
    }
  }
  if (tileType == "flag") {
    if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      fill(0, 200, 50, 150);
      ellipse(
        gridLoc[0] * tileSize[0] + tileSize[0] * 0.5 - scroll[0],
        gridLoc[1] * tileSize[1] +
          tileSize[1] * 0.5 +
          sin(millis() * 0.005) * tileSize[1] * 0.1 - scroll[1],
        tileSize[0] * 0.8,
        tileSize[1] * 0.8
      );
    }
  }
  if (!placing_lava) {
    for (let l = 0; l < lava.length; l++) {
      la = lava[l];
      fill(192, 41, 49, 150);
      noStroke();
      rect(la[0] - scroll[0], la[1] - scroll[1], la[2], la[3]);
    }
  }
}

function keyReleased() {
  if (key == "a" || key == "A" || keyCode == LEFT_ARROW) {
    controls.left = 0;
  }
  if (key == "d" || key == "D" || keyCode == RIGHT_ARROW) {
    controls.right = 0;
  }
  if (key == "s" || key == "S" || keyCode == DOWN_ARROW) {
    controls.down = 0;
  }
  if (key == "w" || key == "W" || keyCode == UP_ARROW) {
    controls.up = 0;
  }
}

function keyPressed() {
  if (key == "a" || key == "A" || keyCode == LEFT_ARROW) {
    controls.left = 1;
  }
  if (key == "d" || key == "D" || keyCode == RIGHT_ARROW) {
    controls.right = 1;
  }
  if (key == "w" || key == "W" || keyCode == UP_ARROW) {
    controls.up = 1;
  }
  if (key == "s" || key == "S" || keyCode == DOWN_ARROW) {
    controls.down = 1;
  }
  if (key == "o" || key == "O") {
    saveLevelData(levelPath, level);
    console.log("saved");
  }
  if (key == "r" || key == "R") {
    gridLoc = [
      floor((mouseX + scroll[0]) / tileSize[0]),
      floor((mouseY + scroll[1]) / tileSize[1]),
    ];
    if (0 <= gridLoc[0] <= grid[0].length && 0 <= gridLoc[1] <= grid.length) {
      grid[gridLoc[1]][gridLoc[0]] = 0;
    }
  }
  if (key == "e" || key == "E") {
    tileMode = (tileMode + 1) % 11;
  }
  if (key == "n" || key == "N") {
    newLevel();
  }
  if (key == "q" || key == "Q") {
    nextLevel();
  }
}
