import { config } from "./config.js";
import Game from "./src/Game.js";

import Background from "./src/Scenes/Background.js";
import SetupScene from "./src/Scenes/SetupScene.js";
import PlayScene from "./src/Scenes/PlayScene.js";

var battleship = new Game();

var Setup = new SetupScene(battleship);
var Play = new PlayScene(battleship);

var phaserConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: config.phaser.width,
    height: config.phaser.height,
  },
  scene: [Background, Setup, Play],
};

var game = new Phaser.Game(phaserConfig);
