import { config } from "./config.js";
import Game from "./src/Game.js";

import background from "url:./assets/sky.png";

var battleship;

class Background extends Phaser.Scene {
  constructor() {
    super("Background");
  }

  preload() {
    this.load.image("background", background);
  }

  create() {
    // Render background img
    this.add.image(
      config.phaser.width / 2,
      config.phaser.height / 2,
      "background"
    );
  }
}

class SetupScreen extends Phaser.Scene {
  constructor() {
    super({ key: "SetupScreen", active: true });
  }

  preload() {
    // Game
    battleship = new Game(this);
  }

  create() {
    // create game
    battleship.create();
  }

  update() {
    battleship.update4Setup();
  }
}

class PlayScreen extends Phaser.Scene {
  constructor() {
    super("PlayScreen");
  }

  preload() {}

  create() {}
}

var phaserConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: config.phaser.width,
    height: config.phaser.height,
  },
  scene: [Background, SetupScreen, PlayScreen],
};

var game = new Phaser.Game(phaserConfig);
