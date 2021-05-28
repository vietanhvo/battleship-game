import { config } from "./config.js";
import Game from "./src/Game.js";

import background from "url:./assets/sky.png";

var phaserConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: config.phaser.width,
    height: config.phaser.height,
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(phaserConfig);
var battleship;

function preload() {
  // Load img
  // background and board
  this.load.image("background", background);
  // Game
  battleship = new Game(this);
}

function create() {
  // Render background img
  this.add.image(
    config.phaser.width / 2,
    config.phaser.height / 2,
    "background"
  );

  // create game
  battleship.create();
}

function update() {
  battleship.update4Setup();
}
