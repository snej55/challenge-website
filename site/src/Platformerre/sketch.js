/*
***** Platformerre made by Jens Kromdijk *****

How to play:
Set googley eyes to true, pick player color, and select a mode.
Use arrow keys or WASD to move.

Normal Mode = More levels.
Speedrun Mode = Only original levels, but with a speedrun timer.
Frustrating mode = The best mode.

Dark mode is fun.
Music can be set to the original track (made with Bosca Ceoil), or the edit (made with LMMS).

WR (speedrun): 1:23.29

**********************************************
*/

// try setting this to false if you're lagging
let GRASS = true;

// recommended
let VSYNC_ENABLED = true;

// *not* recommended
let IMPOSSIBLE = false;

p5.disableFriendlyErrors = true;
let levelPath = "1.json";
let images = {};
let audio = {};
function preload() {
  stage = 0;
  level = loadJSON(levelPath);
  images = {dirt_0: loadImage('images/dirt_0.png'), dirt_1: loadImage('images/dirt_1.png'), ramp_0: loadImage('images/ramp_0.png'),
           ramp_1: loadImage('images/ramp_1.png'), dirt_ramp_0: loadImage('images/dirt_ramp_0.png'), dirt_ramp_1: loadImage('images/dirt_ramp_1.png'), spike_0: loadImage('images/spike_0.png'), spike_1: loadImage('images/spike_1.png'), plaid: loadImage('images/plaid.png')}
  audio = {portal: loadSound('audio/portal.wav'),
          laugh: loadSound('audio/laugh.wav'),
          ow: loadSound('audio/ow.wav'),
          scream: loadSound('audio/scream.wav'),
          splash: loadSound('audio/splash.wav'),
          devil: loadSound('audio/devil.wav'),
          bg: loadSound('audio/beach.wav'),
          bg1: loadSound('audio/beach.ogg')}
  level0 = loadJSON("0.json");
}

function saveAudio() {
  keys = Object.keys(audio);
  for (let k = 0; k < keys.length; k++) {
    ke = keys[k];
    save(audio[ke], ke + '.wav');
  }
}

function saveImages() {
  keys = Object.keys(images);
  for (let k = 0; k < keys.length; k++) {
    ke = keys[k];
    save(images[ke], ke + '.png');
  }
}

function setup() {
  frameRate(60);
  player_color = [32, 140, 178];
  player_alpha = 255;
  menu = true;
  normal_mode = createButton("NORMAL MODE");
  //normal_mode.position(130, 150);
  speedrun_mode = createButton("SPEEDRUN MODE");
  //speedrun_mode.position(120, 250);
  impossible_mode = createButton("FRUSTRATING MODE");
  goggle_eyes = createButton("Googley Eyes: False");
  dark = createButton("Dark Mode: False");
  dark_mode = false;
  music = createButton("Music: Original");
  bg_music = 0;
  dont = createButton("don't press this!")
  color_picking = createButton("Pick player color");
  color_picker = createColorPicker([32, 140, 178])
  alfa = createSlider(0, 255, 255);
  color_picker.hide(); alfa.hide();
  picking = false;
  //impossible_mode.position(115, 350);
  eyes = false;
  mode = 'normal';
  change = false;
  dont.hide();
  smoke = [];
  //console.log(images.dirt_0.get(0, 4))
  //window.open("", "", "width=100, height=100");
  createCanvas(400, 480);
  let lava = [];
  levelData = loadLevelData(level, stage);
  grid = levelData[0];
  tileSize = levelData[1];
  springs = levelData[2];
  lava = levelData[3];
  splat = createGraphics(grid[0].length * tileSize[0] - tileSize[0], grid.length * tileSize[1] - tileSize[1]);
  
  for (let y = 0; y < int(splat.height / 64) + 1; y++) {
    for (let x = 0; x < int(splat.width / 64) + 1; x++) {
      splat.image(images.plaid, x * 64, y * 64, 64, 64);
    }
  }
  splat.background(37, 51, 72, 200);
  splat.background(44, 73, 65, 50);
  //splat.filter(BLUR, 1);
  splat.filter(POSTERIZE, 20);
  splat.filter(DILATE);
  splat.background(0, 0, 0, 100);
  bg = createGraphics(max(splat.width, width) + tileSize[0], max(splat.height, height) + tileSize[1]);
  for (let y = 0; y < int(bg.height / tileSize[1]) + 1; y++) {
    for (let x = 0; x < int(bg.width / tileSize[0]) + 1; x++) {
      bg.image(images.dirt_1, x * tileSize[0], y * tileSize[1], tileSize[0], tileSize[1]);
    }
  }
  neighbourOffsets = [
    [0, 0],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
  ];
  tile_map = loadGridHash(grid);

  scroll = [0, 0]; // camera
  render_scroll = [0, 0];

  particles = [];

  // player constants
  gravity = 0.35;
  jumpHeight = 5.6;
  friction = 0.62;
  speed = 2;
  
  if (IMPOSSIBLE) {
    friction = 0.92;
    speed = 0.5;
  }

  // player death
  deathTime = 80;
  ad = deathTime;
  deaths = 0;

  // player controls
  falling = 99;
  jumping = 99;
  vel = [0, 0];
  controls = { up: false, down: false, right: false, left: false };

  playerSpawnPos = level.levels[stage].playerSpawnPos;
  player = new HitBox([playerSpawnPos[0], playerSpawnPos[1]], [10, 12]);

  // for wobble effect
  dampening = 0.8;
  wibble = 0;
  wobble = 0;
  target_wobble = 0;

  // delta time
  dt = 1;
  last = new Date().getTime();
  
  t = 0;

  transition = 255;
  target_transition = 0;
  splats = []; 
  fini = false;
  fire = [];
  stages = 0;
  checkID();
  createCanvas(1, 1);
  
  screen_shake = 0.0;
  
  leaves = [];
}

function nextLevel() {
  change = false;
  smoke = [];
  if (stages + 1 >= level.levels.length) {
    fini = true;
    console.log('[' + checkID() + '] ' + 'You finished in ' + t + '!');
  }
  controls = { up: false, down: false, right: false, left: false };
  stages += 1;
  stage = (stage + 1) % level.levels.length;
  levelData = loadLevelData(level, stage);
  grid = levelData[0];
  tileSize = levelData[1];
  springs = levelData[2];
  lava = levelData[3];
  playerSpawnPos = level.levels[stage].playerSpawnPos;
  player = new HitBox([playerSpawnPos[0], playerSpawnPos[1]], [10, 14]);
  vel = [0, 0];
  deaths = 0;
  scroll = [0, 0];
  tile_map = loadGridHash(grid);
  particles = [];
  particles = [];
  splats = [];
  jumping = 99;
  falling = 99;
  ad = 121;
  splat = createGraphics(grid[0].length * tileSize[0] - tileSize[0], grid.length * tileSize[1] - tileSize[1]);
  for (let y = 0; y < int(splat.height / 64) + 1; y++) {
    for (let x = 0; x < int(splat.width / 64) + 1; x++) {
      splat.image(images.plaid, x * 64, y * 64, 64, 64);
    }
  }
  splat.background(37, 51, 72, 200);
  splat.background(44, 73, 65, 50);
  //splat.filter(BLUR, 1);
  splat.filter(POSTERIZE, 20);
  splat.filter(DILATE);
  splat.background(0, 0, 0, 100);
}

function startbgmusic()
{
  if (bg_music == 1)
    {
      audio.bg1.loop();
    } else {
      audio.bg.loop();
    }
}

class Water {
  constructor(x, y, dimensions, density) {
    this.pos = [x, y];
    this.dimensions = dimensions;
    this.density = density;
    this.springs = [];
    for (let s = 1; s < density; s++) {
      this.springs.push([x + s * ceil(dimensions[0] / density), y, 0]);
    }
    
    this.dampening = 0.96;
    this.tension = 0.05;
  }
  
  render(dt, scroll) {
    fill(192, 41, 49, 150);
    //stroke(255, 255, 255, 100);
    //strokeJoin(ROUND);
    //strokeWeight(2)
    beginShape();
    for (let s = 0; s < this.springs.length; s++) {
      var spring = this.springs[s];
      var force = (this.pos[1] - spring[1]) * this.tension;
      spring[2] += sin(millis() * 0.002 + spring[0] * 0.1) * 0.04 * dt;
      spring[2] += sin(millis() * 0.005 + spring[0] * 0.05) * 0.02 * dt;
      spring[2] += sin(millis() * 0.01 + spring[0] * 0.2) * 0.01 * dt;
      spring[2] += noise(0.005 * frameCount + spring[0] * 0.1) * 0.1 * dt;
      spring[2] += force * dt;
      spring[1] += spring[2] * dt;
      spring[2] += (spring[2] * this.dampening - spring[2]) * dt;
      var other = this.springs[max(s - 1, 0)];
      other[2] += (spring[2] - other[2]) * 0.4;
      other = this.springs[min(s + 1, this.springs.length - 1)]
      other[2] += (spring[2] - other[2]) * 0.4;
      other = this.springs[max(s - 2, 0)];
      other[2] += (spring[2] - other[2]) * 0.2 * dt;
      other = this.springs[min(s + 2, this.springs.length - 1)]
      other[2] += (spring[2] - other[2]) * 0.2 * dt;
      vertex(spring[0] - scroll[0], spring[1] - scroll[1]);
    }
    vertex(this.pos[0] + this.dimensions[0] - scroll[0], this.pos[1] - scroll[1]);
    vertex(this.pos[0] + this.dimensions[0] - scroll[0], this.pos[1] + this.dimensions[1] - scroll[1]);
    vertex(this.pos[0] - scroll[0], this.pos[1] + this.dimensions[1] - scroll[1]);
    vertex(this.pos[0] - scroll[0], this.pos[1] - scroll[1]);
    endShape();
  }
}

class MovingPlatform {
  constructor(pos, dimensions, dx, dy) {
    this.pos = pos;
    this.dimensions = dimensions;
    this.dx = dx;
    this.dy = dy;
  }
  
  render(scroll) {
    fill(0, 100, 100);
    noStroke();
    rect(this.pos[0] - scroll[0], this.pos[1] - scroll[1], this.dimensions[0], this.dimensions[1]);
  }
}

function handlevsync()
{
  if (VSYNC_ENABLED)
    {
      frameRate(getTargetFrameRate());
    }
}

function collide(tile_map, pos) {
  loc =
    str(floor(pos[0] / tileSize[0])) + ";" + str(floor(pos[1] / tileSize[1]));
  if (loc in tile_map) {
    tile = tile_map[loc];
    if (tile[2] == 1) {
      return 1;
    }
  }
}

function loadLevelData(level, stage) {
  grid = level.levels[stage].grid;
  tileSize = level.levels[stage].tileSize;
  springs = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      tile = grid[y][x];
      if (tile == 5) {
        springs.push(new Spring([x * tileSize[0], y * tileSize[1]], tileSize));
        grid[y][x] = 5;
      }
    }
  }
  if (!level.levels[stage].lava) {
    level.levels[stage].lava = [];
  }
  lava = loadLava(level.levels[stage].lava);
  return [grid, tileSize, springs, lava];
}

function loadLava(lava) {
  var la = []
  for (let l = 0; l < lava.length; l++) {
    la[l] = new Water(lava[l][0], lava[l][1], [lava[l][2], lava[l][3]], lava[l][2] * 0.625);
  }
  return la;
}

// hit box class for collisions & stuff
class HitBox {
  constructor(pos, dimensions) {
    this.pos = pos;
    this.dimensions = dimensions;
  }
  collideBox(hitBox) {
    return (
      this.pos[0] < hitBox.pos[0] + hitBox.dimensions[0] &&
      this.pos[0] + this.dimensions[0] > hitBox.pos[0] &&
      this.pos[1] + this.dimensions[1] > hitBox.pos[1] &&
      this.pos[1] < hitBox.pos[1] + hitBox.dimensions[1]
    );
  }

  center() {
    return [
      this.pos[0] + this.dimensions[0] * 0.5,
      this.pos[1] + this.dimensions[1] * 0.5
    ];
  }

  render(colour, scroll, wobble = 0, eyes = false, lineStroke = null) {
    if (lineStroke) {
      stroke(lineStroke);
    } else {
      noStroke();
    }
    let wobble_dimensionx =
      (this.dimensions[0] * this.dimensions[1]) / (this.dimensions[1] - wobble);
    strokeWeight(1);
    stroke(red(colour), green(colour), blue(colour), 255);
    fill(colour);
    rect(
      this.pos[0] - scroll[0] - (wobble_dimensionx - this.dimensions[0]) * 0.5,
      this.pos[1] - scroll[1] + wobble,
      wobble_dimensionx,
      this.dimensions[1] - wobble,
      1
    );
    noStroke()
    if (eyes) {
      var spread = 2;
      fill(255);
      noStroke()
      circle(this.pos[0] - scroll[0] - (wobble_dimensionx - this.dimensions[0]) * 0.5 - spread + wobble_dimensionx, 
            this.pos[1] - scroll[1] + wobble + spread, 5);
      circle(this.pos[0] - scroll[0] - (wobble_dimensionx - this.dimensions[0]) * 0.5 + spread, 
            this.pos[1] - scroll[1] + wobble + spread, 5);
      fill(0);
      circle(this.pos[0] - scroll[0] - (wobble_dimensionx - this.dimensions[0]) * 0.5 - spread + wobble_dimensionx, 
            this.pos[1] - scroll[1] + wobble + spread, 2);
      circle(this.pos[0] - scroll[0] - (wobble_dimensionx - this.dimensions[0]) * 0.5 + spread, 
            this.pos[1] - scroll[1] + wobble + spread, 2);
    }
    noStroke();
  }
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function checkID() {
  let id = getItem('id');
  if (id == null) {
    id = '';
  }
  if (id.length < 3) {
    id = generateString(6);
  }
  storeItem('id', id);
  let c = id;
  return id;
}

class Spring {
  constructor(pos, dimensions) {
    this.pos = pos;
    this.dimensions = dimensions;
    this.offset = 0;
    this.vel = 10;
    this.targetOffset = 0;
    this.tension = 0.1;
    this.dampening = 0.9;
  }

  collideBox(hitBox) {
    return (
      this.pos[0] < hitBox.pos[0] + hitBox.dimensions[0] &&
      this.pos[0] + this.dimensions[0] > hitBox.pos[0] &&
      this.pos[1] + this.dimensions[1] > hitBox.pos[1] &&
      this.pos[1] < hitBox.pos[1] + hitBox.dimensions[1]
    );
  }

  center() {
    return [
      this.pos[0] + this.dimensions[0] * 0.5,
      this.pos[1] + this.dimensions[1] * 0.5,
    ];
  }

  render(colour, scroll, dt) {
    //console.log(this.offset)
    let force = (this.targetOffset - this.offset) * this.tension;
    this.vel += force * dt;
    this.offset += this.vel * dt;
    this.vel += (this.vel * this.dampening - this.vel) * dt;
    stroke(29, 27, 36);
    strokeWeight(2);
    line(
      this.pos[0] + this.dimensions[0] * 0.5 - scroll[0],
      this.pos[1] + this.dimensions[1] - scroll[1],
      this.pos[0] + this.dimensions[0] * 0.5 - scroll[0],
      this.pos[1] + 1 + this.offset - scroll[1]
    );
    noStroke();
    fill(colour[0], colour[1], colour[2]);
    rect(
      this.pos[0] - scroll[0],
      this.pos[1] +
        this.offset -
        scroll[1],
      this.dimensions[0],
      this.dimensions[1] * 0.2,
      (this.dimensions[1] * 5) / 16
    );
  }
}

// faster than arrays
function loadGridHash(grid) {
  let tile_map = {};
  for (let y = 0; y < grid.length; y++) {
    row = grid[y];
    for (let x = 0; x < row.length; x++) {
      tile = grid[y][x];
      if (tile) {
        // only if tile exists
        tile_map[str(x) + ";" + str(y)] = [x, y, tile]; // generate index for tiles
      }
    }
  }
  return tile_map;
}

function drawGrass(le, density, pos = [0, 0], scroll = [0,0])
{
  for (let i = 0; i < density; ++i)
    {
      x_offset = max(0, min(tileSize[0], i * tileSize[0] / density + noise(i + pos[0] + pos[1]) * 3));
      angle_offset = noise(x_offset + pos[0] + pos[1] + frameCount * 0.04) * 2;
      distance = (pos[0] + x_offset - player.pos[0]) ** 2 + (pos[1] - player.pos[1]) ** 2;
      temp_target = 0;
      hd = player.pos[0] - pos[0] - x_offset;
      if (distance < 800)
        {
          temp_target = -90 * ((800 - distance) / 800) * hd / abs(hd) - 30
          temp_target /= max(1.0, abs(vel[0] / 3));
          temp_target *= (angle_offset - angle_offset * 0.5) * 1.4
        }
      angle = radians(min(360, max(270 + degrees(angle_offset - angle_offset / 2) + temp_target, 180)))
      stroke(16, 161, 84, 200 + noise(x_offset + pos[0] + pos[1]) * 30);
      length = le + (noise(x_offset * 89745 + pos[0] + pos[1])) * 4;
      strokeWeight(2);
      line(pos[0] + x_offset - scroll[0], pos[1] - scroll[1], pos[0] + x_offset - scroll[0] + cos(angle) * length, pos[1] - scroll[1] + sin(angle) * length);
    }
  stroke(0, 0, 0, 0);
  noStroke();
}

// render grid
function drawGrid(grid, scroll = [0, 0]) {
  for (
    let y = floor(scroll[1] / tileSize[1]);
    y < floor((scroll[1] + height) / tileSize[1]) + 1;
    y++
  ) {
    if (y < grid.length && grid[y]) {
      for (
        let x = floor(scroll[0] / tileSize[0]);
        x < floor((scroll[0] + width) / tileSize[0] + 1);
        x++
      ) {
        if (x < grid[y].length) {
          // do a basic check to see if the tile is on the screen
          // not very effective for larger worlds however, but the world here is very small.
          if (
            -tileSize[1] * 2 <
              y * tileSize[1] - scroll[1] <
              height + tileSize[1] * 2 &&
            -tileSize[0] * 2 <
              x * tileSize[0] - scroll[0] <
              width + tileSize[0] * 2
          ) {
            tile = grid[y][x];
            if (tile == 1) {
              if (grid[max(0, y - 1)][x] != 1 && grid[max(0, y - 1)][x] != 7 && grid[max(0, y - 1)][x] != 8) {
                image(images.dirt_0,  x * tileSize[0] - scroll[0],
                y * tileSize[1] - scroll[1],
                tileSize[0],
                tileSize[1])
                
              } else if (grid[max(0, y - 1)][x] == 7) {
                image(images.dirt_ramp_0,  x * tileSize[0] - scroll[0],
                y * tileSize[1] - scroll[1],
                tileSize[0],
                tileSize[1])
              } else if (grid[max(0, y - 1)][x] == 8) {
                image(images.dirt_ramp_1,  x * tileSize[0] - scroll[0],
                y * tileSize[1] - scroll[1],
                tileSize[0],
                tileSize[1])
              } else {
              image(images.dirt_1,  x * tileSize[0] - scroll[0],
                y * tileSize[1] - scroll[1],
                tileSize[0],
                tileSize[1])}
            }
            if (tile == 7) {
              image(images.ramp_0, x * tileSize[0] - scroll[0],
                y * tileSize[1] - scroll[1],
                tileSize[0],
                tileSize[1])
            }
            if (tile == 8) {
              image(images.ramp_1, x * tileSize[0] - scroll[0],
                y * tileSize[1] - scroll[1],
                tileSize[0],
                tileSize[1])
            }
            if (tile == 9) {
              noStroke();
              fill(136, 90, 68);
              rect(
                x * tileSize[0] - scroll[0],
                y * tileSize[1] - scroll[1],
                tileSize[0],
                1
              );
              fill(94, 55, 53);
              rect(
                x * tileSize[0] - scroll[0],
                y * tileSize[1] - scroll[1] + 1,
                tileSize[0],
                tileSize[1] * 0.25 - 1
              );
            }
            if (tile == 6) {
              image(images.spike_1, x * tileSize[0] - scroll[0],
                y * tileSize[1] - scroll[1],
                tileSize[0],
                tileSize[1])
            }
            if (tile == 2) {
              image(images.spike_0, x * tileSize[0] - scroll[0],
                y * tileSize[1] - scroll[1],
                tileSize[0],
                tileSize[1])
            }
            if (tile == 3) {
              fill(102, 166, 80);
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
            if (tile == 10 && GRASS) {
              drawGrass(8, 4, [x * tileSize[0], y * tileSize[1] + tileSize[1]], scroll);
            }
          }
        }
      }
    }
  }
}

// find 3*3 grid of tiles around position
function getTilesAroundPos(tile_map, pos) {
  loc = [floor(pos[0] / tileSize[0]), floor(pos[1] / tileSize[1])];
  tiles = [];
  for (let o = 0; o < neighbourOffsets.length; o++) {
    offset = neighbourOffsets[o];
    cloc = [loc[0] + offset[0], loc[1] + offset[1]];
    aloc = str(cloc[0]) + ";" + str(cloc[1]);
    if (aloc in tile_map) {
      tiles.push(aloc);
    }
  }
  return tiles;
}

function splatter(graphics, pos) {
  /*colour = null;
  colour = [200, 0, 50, random() * 20 + 50]
  for (let p = 0; p < 10; p++) {
    graphics.stroke(colour);
    graphics.strokeWeight(5);
    angle = random() * TWO_PI
    len = (random() * 10 + 2) * 3
    graphics.line(pos[0], pos[1], pos[0] + cos(angle) * len, pos[1] + sin(angle) * len);
  }
  graphics.fill(colour);
  graphics.circle(pos[0], pos[1], 40);*/
  for (let p = 0; p < 100; p++) {
    angle = random() * TWO_PI
    len = (random() * 10 + 2)
    splats.push([pos[0], pos[1], random(1, 5), angle, len, random() * 10]);
  }
}

function die() {
  screen_shake = 16;
  ad = 0;
  for (p = 0; p < random(20, 40); p++) {
    particles.push([
      [player.center()[0], player.center()[1]],
      [random(-5, 5), random() * -5],
      random() * 5,
      [192, 41, 49],
    ]);
  }
  for (let s=0;s<int(random(20, 45));s++) {
              r = random(0, 200);
              b = min(255, r * 2);
              smoke.push([[player.pos[0], player.pos[1]], atan2(vel[1], vel[0]) + PI + (random() * PI - PI * 0.5) * 0.25, random(2, 5), random(1, 4), 0, random() * PI * 2, random(8, 12), [192, 41, 49]]);
          }
  splatter(splat, player.center());
  player.pos[0] = playerSpawnPos[0];
  player.pos[1] = playerSpawnPos[1];
  jumping = 99;
  falling = 99;
  vel = [0, 0];
  if (IMPOSSIBLE) {
  audio.devil.play();} else {
    audio.ow.play();
  }
}

function draw() {
  if (!menu) {
      // delta time
    const now = new Date().getTime();
    dt = now - last;
    last = now;
    dt *= 0.06;
    dt = min(3, dt);
    ad += 1 * dt;
    if (ad > deathTime) {
      // camera
      playerCenter = player.center();
      scroll[0] += int(playerCenter[0] - scroll[0] - width * 0.5) * 0.1 * dt;
      scroll[1] += int(playerCenter[1] - scroll[1] - height / 1.84) * 0.1 * dt;

      // player physics
      jumping += 1 * dt;
      falling += 1 * dt;
      vel[0] *= friction;
      player.pos[0] += vel[0] * dt;
      // using a hashmap for lookups is faster, and we only have to iterate over close tiles.
      tiles = getTilesAroundPos(tile_map, player.center());
      for (let t = 0; t < tiles.length; t++) {
        tile = tiles[t];
        x = tile_map[tile][0];
        y = tile_map[tile][1];
        type = tile_map[tile][2];
        if (type == 7) {
          tileRect = new HitBox([x * tileSize[0], y * tileSize[1]], tileSize);
          if (player.collideBox(tileRect)) {
            ramp = y * tileSize[1] + max(0, min(tileSize[0], player.pos[0] - tileRect.pos[0])) - 1
            //console.log((player.center()[0] % tileSize[0]));
            if (player.pos[1] + player.dimensions[1] > ramp) {
              if (!IMPOSSIBLE) {
                vel[0] *= 0.8;
              }
            }
          }
        } else if (type == 8) {
          tileRect = new HitBox([x * tileSize[0], y * tileSize[1]], tileSize);
          if (player.collideBox(tileRect)) {
            ramp = y * tileSize[1] + tileSize[1] - max(0, min(tileSize[0], player.pos[0] + player.dimensions[0] - tileRect.pos[0])) - 1
            //console.log((player.center()[0] % tileSize[0]));
            if (player.pos[1] + player.dimensions[1] > ramp) {
              if (!IMPOSSIBLE) {
                vel[0] *= 0.8;
              }
            }
          }
        } else if (type == 1) {
          tileRect = new HitBox([x * tileSize[0], y * tileSize[1]], tileSize);
          if (player.collideBox(tileRect)) {
            if (vel[0] > 0) {
              player.pos[0] = tileRect.pos[0] - player.dimensions[0];
            } else {
              player.pos[0] = tileRect.pos[0] + tileRect.dimensions[0];
            }
            vel[0] = 0;
          }
        } else if (type == 2) {
          tileRect = new HitBox(
            [x * tileSize[0] + 1, y * tileSize[1] + tileSize[1] * 0.75],
            [tileSize[0] - 2, tileSize[1] * 0.25]
          );
          if (player.collideBox(tileRect)) {
            die()
          }} else if (type == 3) {
            tileRect = new HitBox([x * tileSize[0], y * tileSize[1]], tileSize);
            if (player.collideBox(tileRect)) {
              
              target_transition = 255;
              if (!change){
              for (p = 0; p < 3; p++) {
                particles.push([
                  [tileRect.center()[0], tileRect.center()[1]],
                  [random(-1, 1), random() * -2 - 1],
                  random() * 5,
                  [102, 166, 80],
                ]);
                change = true;
              }
                audio.portal.setVolume(0.5)
  audio.portal.play()
  audio.portal.setVolume(1.0);
              change = true;}
            }
          } else if (type == 6) {
          tileRect = new HitBox(
            [x * tileSize[0] + 1, y * tileSize[1]],
            [tileSize[0] - 2, tileSize[1] * 0.25]
          );
          if (player.collideBox(tileRect)) {
            die()
          }
        }
      }
      vel[1] += gravity * dt;
      player.pos[1] += vel[1] * dt;
      tiles = getTilesAroundPos(tile_map, player.center());
      for (let t = 0; t < tiles.length; t++) {
        tile = tiles[t];
        x = tile_map[tile][0];
        y = tile_map[tile][1];
        type = tile_map[tile][2];
        if (type == 7) {
          tileRect = new HitBox([x * tileSize[0], y * tileSize[1]], tileSize);
          if (player.collideBox(tileRect)) {
            ramp = y * tileSize[1] + max(0, min(tileSize[0], player.pos[0] - tileRect.pos[0]))
            //console.log((player.center()[0] % tileSize[0]));
            if (player.pos[1] + player.dimensions[1] > ramp) {
              player.pos[1] = ramp - player.dimensions[1];
              if (vel[1] > 0) {
                falling = 0;
              } else {
                jumping = 16;
              }
              vel[1] = 0;
            }
          }
        } else if (type == 8) {
          tileRect = new HitBox([x * tileSize[0], y * tileSize[1]], tileSize);
          if (player.collideBox(tileRect)) {
            ramp = y * tileSize[1] + tileSize[1] - max(0, min(tileSize[0], player.pos[0] + player.dimensions[0] - tileRect.pos[0]))
            //console.log((player.center()[0] % tileSize[0]));
            if (player.pos[1] + player.dimensions[1] > ramp) {
              player.pos[1] = ramp - player.dimensions[1];
              if (vel[1] > 0) {
                falling = 0;
              } else {
                jumping = 16;
              }
              vel[1] = 0;
            }
          }
        } else if (type == 1) {
          tileRect = new HitBox([x * tileSize[0], y * tileSize[1]], tileSize);
          if (player.collideBox(tileRect)) {
            if (vel[1] > 0) {
              player.pos[1] = tileRect.pos[1] - player.dimensions[1];
              if (falling >= 5) {
                wibble = 2;
                target_wobble = 0;
              }
              falling = 0;
            } else {
              player.pos[1] = tileRect.pos[1] + tileRect.dimensions[1];
              jumping = 16;
            }
            vel[1] = 0;
          }
        } else if (type == 9) {
          tileRect = new HitBox([x * tileSize[0], y * tileSize[1]], tileSize);
          if (player.collideBox(tileRect) && vel[1] >= 0 && !controls.down && player.pos[1] + player.dimensions[1] <= tileRect.pos[1] + tileSize[1] * 0.5) {
            player.pos[1] = tileRect.pos[1] - player.dimensions[1];
            if (falling >= 5) {
              wibble = 2;
              target_wobble = 0;
            }
            falling = 0;
            vel[1] = 0;
          }
        } else if (type == 2) {
          tileRect = new HitBox(
            [x * tileSize[0] + 1, y * tileSize[1] + tileSize[1] * 0.75],
            [tileSize[0] - 2, tileSize[1] * 0.25]
          );
          if (player.collideBox(tileRect)) {
            die()
          }} else if (type == 3) {
          tileRect = new HitBox([x * tileSize[0], y * tileSize[1]], tileSize);
          if (player.collideBox(tileRect)) {
            if (!change) {
              audio.portal.setVolume(0.5)
  audio.portal.play()
  audio.portal.setVolume(1.0);
              for (p = 0; p < 3; p++) {
              particles.push([
                [tileRect.center()[0], tileRect.center()[1]],
                [random(-1, 1) * 5, random() * -6 - 3],
                random() * 5,
                [102, 166, 80],
              ]);
              change = true;
              
            }
              
            }
            target_transition = 255;
          }
        } else if (type == 6) {
          tileRect = new HitBox(
            [x * tileSize[0] + 1, y * tileSize[1]],
            [tileSize[0] - 2, tileSize[1] * 0.25]
          );  
          if (player.collideBox(tileRect)) {
            die()
          }
        }
      }
      for (let l = 0; l < lava.length; l++) {
        la = lava[l];
        lavaRect = new HitBox(la.pos, la.dimensions);
        if (player.collideBox(lavaRect)) {
          ad = 0;
          for (p = 0; p < 30; p++) {
            particles.push([
              [random(player.pos[0], player.pos[0] + player.dimensions[0]), random(player.pos[1], player.pos[1] + player.dimensions[1])],
              [random(-3, 3), random() * -5 - 5],
              random() * 3,
              [192, 41, 49],
            ]);
          }
          for (p = 0; p < 80; p++) {
            fire.push([
              [random(player.pos[0], player.pos[0] + player.dimensions[0]), random(player.pos[1], player.pos[1] + player.dimensions[1])],
              [random(-0.1, 0.1), random() * -3],
              random() * 5,
              random(),
            ]);
          }
          screen_shake = max(screen_shake, 16);
          for (let s=0;s<int(random(20, 45));s++) {
              r = random(0, 200);
              b = min(255, r * 2);
              smoke.push([[player.pos[0], player.pos[1]], atan2(vel[1], vel[0]) + PI + (random() * PI - PI * 0.5) * 0.25, random(2, 5), random(1, 4), 0, random() * PI * 2, random(8, 12), [123, 123, 150]]);
          }
          if (IMPOSSIBLE) {
            audio.scream.play()
          } else {
            audio.splash.play()
          }
          fill(255, 255, 255, 200);
          noStroke();
          circle(player.pos[0], player.pos[1], 30);
          jumping = 99;
          falling = 99;
          vel = [0, 0];
          //water_spring = la.springs[max(0, min(la.springs.length - 1, abs(ceil((player.center()[0] - la.pos[0]) / ceil(la.dimensions[0] / la.density)))))]
          for (let s = 0; s < la.springs.length; s++) {
            spring = la.springs[s];
            //console.log(spring)
            //console.log(player.pos);
            if (abs(player.center()[0] - spring[0]) < 20) {
              spring[2] += min(5, 50 / max(1, abs(player.center()[0] - spring[0])))
            }
          }
          player.pos[0] = playerSpawnPos[0];
          player.pos[1] = playerSpawnPos[1];
        }
      }
      // player control
      if (controls.up && falling < 5) {
        vel[1] = -jumpHeight;
        falling = 5;
      }
      if (controls.down) {
        vel[1] += 0.5 * dt;
        vel[0] *= 1.2;
      }
      if (controls.left) {
        if (!IMPOSSIBLE) {
          vel[0] = min(-speed * 0.5 * friction, vel[0] - speed);
        } else {
          vel[0] -= speed
        }
      }
      if (controls.right) {
        if (!IMPOSSIBLE) {
          vel[0] = max(speed * 0.5 * friction, vel[0] + speed);
        } else{
          vel[0] += speed;
        }
      }
      if (jumping > 15) {
        controls.up = false;
      }
    }
    screen_shake = max(0, screen_shake - 1 * dt);
    screen_shake_offset = [random() * screen_shake - screen_shake * 0.5, random() * screen_shake - screen_shake * 0.5]
    render_scroll = [max(0, min(splat.width - width + tileSize[0], int(scroll[0]))) + screen_shake_offset[0], max(0, min(splat.height - height +     tileSize[1], int(scroll[1]))) + screen_shake_offset[1]];
    image(bg, -render_scroll[0], -render_scroll[1], bg.width, bg.height);
    /*fill(220);
    rect(
      -render_scroll[0] + tileSize[0] * 0.5,
      -render_scroll[1] + tileSize[1] * 0.5,
      grid[0].length * tileSize[0] - tileSize[0],
      grid.length * tileSize[1] - tileSize[1]
    );*/
    //splat.filter(BLUR, 1);
    //splat.filter(POSTERIZE, 2);
    image(splat, -render_scroll[0] * 0.9 + tileSize[0] * 0.5,
      -render_scroll[1] * 0.9 + tileSize[1] * 0.5,
      grid[0].length * tileSize[0] - tileSize[0],
      grid.length * tileSize[1] - tileSize[1]);
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      // move particle
      particle[0][0] += particle[1][0] * dt;
      if (collide(tile_map, particle[0])) {
        // check if particle collides
        particle[0][0] -= particle[1][0]; // move particle back
        particle[1][0] *= -0.5; // change velocity
        particle[1][1] *= 0.9; // add friction for more realistic bouncing
      }
      particle[0][1] += particle[1][1] * dt; // same for y axis
      if (collide(tile_map, particle[0])) {
        particle[0][1] -= particle[1][1];
        particle[1][1] *= -0.5;
        particle[1][0] *= 0.9;
      }
      // adjust velocity
      particle[1][1] += 0.2 * dt;
      fill(
        particle[3][0],
        particle[3][1],
        particle[3][2],
        (255 * particle[2]) / 5
      );
      // cool trail effect
      direction = atan2(particle[1][1], particle[1][0]);
      sped = abs(particle[1][1]) + abs(particle[1][0]);
      stroke(
        particle[3][0],
        particle[3][1],
        particle[3][2],
        (255 * particle[2]) / 5
      );
      strokeWeight(particle[2]);
      line(
        particle[0][0] - render_scroll[0],
        particle[0][1] - render_scroll[1],
        particle[0][0] - cos(direction) * sped - render_scroll[0],
        particle[0][1] - sin(direction) * sped - render_scroll[1]
      );
      noStroke();
      // draw particle
      circle(
        particle[0][0] - render_scroll[0],
        particle[0][1] - render_scroll[1],
        particle[2]
      );
      // make particle smaller until it disapears. We don't want 5000+ particles.
      particle[2] -= 0.01;
      if (particle[2] <= 0) {
        particles.splice(i, 1); // remove particles
      }
    }
    if (random() < 0.1)
      {
        leaves.push([[random(0, splat.width), 0], [0, 0], random(5, 10), random()]);
      }
    for (let l = 0; l < leaves.length; ++l)
      {
        // [pos, vel, size, seed]
        leaf = leaves[l];
        leaf[1][0] = sin(frameCount * 0.035 + leaf[3] * 2348) * 0.3 * dt;
        leaf[1][1] = min(0.2, leaf[1][1] + 0.005 * dt);
        leaf[0][0] += leaf[1][0] * dt;
        leaf[0][1] += leaf[1][1] * dt;
        noStroke();
        fill(150, 149, 125, leaf[2] / 10 * 50);
        size = leaf[2];
        circle(leaf[0][0] - render_scroll[0] * 0.95, leaf[0][1] - render_scroll[1] * 0.95, size * 0.25 + 3);
        leaf[2] -= 0.01 * dt;
        if (leaf[2] <= 0)
          {
            leaves.splice(l, 1);
          }
      }
    /*fill(220);
    rect(
      -render_scroll[0] + tileSize[0] * 0.5,
      -render_scroll[1] + tileSize[1] * 0.5,
      grid[0].length * tileSize[0] - tileSize[0],
      grid.length * tileSize[1] - tileSize[1]
    );*/
    for (let sp = 0; sp < splats.length; sp++) {
      particle = splats[sp];
      particle[0] += cos(particle[3]) * particle[4] * dt;
      particle[1] += sin(particle[3]) * particle[4] * dt;
      particle[2] -= 0.2 * dt;
      particle[5] -= 0.1 * dt;
      particle[4] += (particle[4] * 0.9 - particle[4]) * dt;
      fill(255, 0, 20, 50);
      if (particle[1] < (tileSize[1] * 0.5) + (grid.length * tileSize[1]) - tileSize[1] && tileSize[1] * 0.5 < particle[1] &&
         particle[0] < (tileSize[0] * 0.5) + (grid[0].length * tileSize[0]) - tileSize[0] &&
         particle[0] > tileSize[0] * 0.5) {
        circle(particle[0] - render_scroll[0], particle[1] - render_scroll[1], particle[5] * 2);
      }
      //console.log(particle);
      if (particle[5] <= 0) {
        splats.splice(sp, 1);
      }
      else if (particle[2] <= 0) {
        splat.fill(192, 41, 49, random() * 90);
        splat.noStroke();
        //splat.background(255, 0, 0);
        splat.circle(particle[0], particle[1], particle[5] * 2);
        splats.splice(sp, 1);
      }
    }
    for (let f = 0; f < fire.length; f++) {
      particle = fire[f];
      particle[0][0] += particle[1][0] * dt;
      particle[0][1] += particle[1][1] * dt;
      particle[2] -= 0.2 * dt;
      fill(lerpColor(color(192, 41, 49, particle[2] / 5 * 255), color(220, 152, 36, particle[2] / 5 * 255), particle[3]))
      circle(particle[0][0] - render_scroll[0], particle[0][1] - render_scroll[1], particle[2] * 2);
      if (particle[2] <= 0) {
        fire.splice(f, 1);
      }
    }
    wibble += (target_wobble - wobble) * 0.1 * dt;
    wobble += wibble * dt;
    wibble += (wibble * dampening - wibble) * dt;
    if (falling >= 5) {
      wobble *= 0.56;
      wibble *= 0.56;
    }
    if (ad > deathTime) {
      player.render(player_color, (scroll = render_scroll), (wobble = wobble), (eyes = eyes));
    }
    for (let s = 0; s < springs.length; s++) {
      spring = springs[s];
      if (
        -tileSize[0] < spring.pos[0] - render_scroll[0] < width + tileSize[0] &&
        -tileSize[1] < spring.pos[1] - render_scroll[1] < height + tileSize[1]
      ) {
        spring.render([161, 61, 119], render_scroll, dt);
        springRect = new HitBox([spring.pos[0], spring.pos[1]], [spring.dimensions[0], spring.dimensions[1]]);
        if (player.collideBox(springRect)) {
          vel[1] = -8;
          spring.vel = -5;
          falling = 5;
        }
      }
    }
    for (let l = 0; l < lava.length; l++) {
      lava[l].render(dt, render_scroll);
    }
    drawGrid(grid, render_scroll);
    for (let sm = 0; sm < smoke.length; sm++) {
          // smoke = [[[x, y], angle, speed, size, rot, target_rot, max_size, col], ...]
          s = smoke[sm];
          s[0][0] += cos(s[1]) * s[2] * dt
          s[0][1] += sin(s[1]) * s[2] * dt
          s[2] -= 0.1 * dt;
          s[2] = max(0, s[2])
          s[3] += 0.1 * dt;
          s[4] += (s[5] - s[4]) / 40 * dt;
      s[4] += noise(s[5] - s[4] ) * 0.1;
          s[3] = min(s[6], s[3]);
          noStroke();
          fill(s[7][0], s[7][1], s[7][2], floor((1 - (s[3] / s[6])) * 200))
          // Programming war crimes
         quad(s[0][0] + cos(s[4]) * s[3] * 2 - render_scroll[0] + noise(frameCount * 0.05 + 8421946) * 4, s[0][1] + sin(s[4]) * s[3] * 2 - render_scroll[1] + noise(frameCount * 0.05 + 527) * 4,
                               s[0][0] + cos(PI * 0.5 + s[4]) * s[3] * 2 - render_scroll[0] + noise(frameCount * 0.05 + 3458) * 4, s[0][1] + sin(s[4] + PI * 0.5) * s[3] * 2 - render_scroll[1] + noise(frameCount * 0.05 + 847) * 4,
                               s[0][0] + cos(PI + s[4]) * s[3] * 2 - render_scroll[0] + noise(frameCount * 0.05 + 473) * 4, s[0][1] + sin(PI + s[4]) * s[3] * 2 - render_scroll[1] + noise(frameCount * 0.05 + 622) * 4,
                               s[0][0] + cos(-PI * 0.5 + s[4]) * s[3] * 2 - render_scroll[0] + noise(frameCount * 0.05 + 355) * 4, s[0][1] + sin(-PI * 0.5 + s[4]) * s[3] * 2 - render_scroll[1] + noise(frameCount * 0.05 + 9876) * 4);
          if (s[3] >= s[6]) {
              smoke.splice(sm, 1);
          }
      }
    if (dark_mode) {
      fill(0, 0, 0, 245);
      noStroke();
      rect(0, 0, width, height);
      if (ad > deathTime) {
        player.render(player_color, (scroll = render_scroll), (wobble = wobble), (eyes = eyes));
      }
    }
    //filter(BLUR, 1);
    if (abs(target_transition - transition) > 2) {
      fill(0, 0, 0, int(transition));
      rect(0, 0, width, height);
      transition += (target_transition - transition) * 0.05 * dt;
      /*if (target_transition > transition) {
        transition += 1 * dt;
      } else if (target_transition < transition) {
        transition -= 1 * dt;
      }*/
      if (!(abs(target_transition - transition) > 2)) {
        if (target_transition == 255) {
          target_transition = 0;
          nextLevel();
        }
      }
    }
    fill(239, 203, 132);
    if (!fini) {
      getTime();
    }
    if (mode == 'speedrun') {
      text(t, 2, 10);  
    }
  } else {
    player_color = color_picker.color();
    player_color.setAlpha(max(1, alfa.value()))
    normal_mode.mousePressed(() => {
      menu = false;
      normal_mode.hide()
      speedrun_mode.hide()
      goggle_eyes.hide();
      stage = -1;
      stages = -1;
      music.hide()
      noCursor();
      dark.hide();
      nextLevel();
      t_offset = millis();
      impossible_mode.hide();
      dont.hide();
      createCanvas(400, 480);
      startbgmusic()
      color_picker.hide()
      color_picking.hide();
      alfa.hide();
    });
    goggle_eyes.mousePressed(() => {
      if (eyes) {
        goggle_eyes.html("Googley Eyes: False")
        eyes = false;
      } else {
        goggle_eyes.html("Googley Eyes: True");
        eyes = true;
      }
    });
    dark.mousePressed(() => {
      if (dark_mode) {
        dark.html("Dark Mode: False")
        dark_mode = false;
      } else {
        dark.html("Dark Mode: True");
        dark_mode = true;
      }
    });
    music.mousePressed(() => {
      if (bg_music) {
        bg_music = 0;
        music.html("Music: Original")
      } else {
        music.html("Music: Edit");
        bg_music = 1;
      }
    })
    color_picking.mousePressed(() => {
      if (picking) {
        color_picker.hide();
        alfa.hide();
        picking = false;
      } else {
        color_picker.show();
        alfa.show();
        picking = true;
      }
    })
    impossible_mode.mousePressed(() => {
      IMPOSSIBLE = true;
      friction = 0.92;
      speed = 0.5;
      menu = false;
      normal_mode.hide()
      speedrun_mode.hide()
      color_picker.hide()
      goggle_eyes.hide();
      stage = -1;
      stages = -1;
      noCursor();
      nextLevel();
      t_offset = millis();
      impossible_mode.hide();
      dont.hide();
      dark.hide();
      createCanvas(400, 480);
      color_picking.hide();
      music.hide()
      alfa.hide();
      startbgmusic()
    });
    speedrun_mode.mousePressed(() => {
      menu = false;
      noCursor();
      speedrun_mode.hide()
      normal_mode.hide()
      startbgmusic()
      music.hide()
      mode = 'speedrun'
      level = level0;
      stages = -1;
      stage = -1;
      nextLevel();
      goggle_eyes.hide();
      impossible_mode.hide();
      t_offset = millis();
      color_picker.hide()
      dont.hide();
      createCanvas(400, 480);
      color_picking.hide();
      dark.hide();
      alfa.hide();
    });
    dont.mousePressed(() => {
      windows = []
      alert("You shouldn't have pressed the button...")
      alert("You will now be redirected to some popups...")
      for (let i = 0; i < 500; i++) {
        windows.push(window.open("", "", "width=100, height=100"))
        if (windows[i]) {
          windows[i].moveTo(random() * 1000, random() * 1000);
        }
      
       }
      for (let i = 0; i < 100; i++) {
        alert("HI THERE!!!")
      }
    })
  }
}

function getTime() {
  t = nf(floor((millis() - t_offset) / 1000 / 60 / 60), 2) + ":" + nf(floor((millis() - t_offset) / 1000 / 60) % 60, 2) + ":" + nf(floor((millis() - t_offset) / 1000) % 60, 2) + "." + nf(floor((millis() - t_offset) / 10) % 100, 2)
  return t;
}

// keyboard input
function keyReleased() {
  if (key == "a" || key == "A" || keyCode == LEFT_ARROW) {
    controls.left = false;
  }
  if (key == "d" || key == "D" || keyCode == RIGHT_ARROW) {
    controls.right = false;
  }
  if (key == "s" || key == "S" || keyCode == DOWN_ARROW) {
    controls.down = false;
  }
}

function keyPressed() {
  if (key == "a" || key == "A" || keyCode == LEFT_ARROW) {
    controls.left = true;
  }
  if (key == "d" || key == "D" || keyCode == RIGHT_ARROW) {
    controls.right = true;
  }
  if (key == "w" || key == "W" || keyCode == UP_ARROW || key == " ") {
    if (ad > deathTime) {
      controls.up = true;
      jumping = 0;
    }
  }
  if (key == "s" || key == "S" || keyCode == DOWN_ARROW) {
    controls.down = true;
  }
}
