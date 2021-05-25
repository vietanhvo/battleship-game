import { config } from "./config.js";
import Game from "./src/Game.js";

import background from "url:./assets/sky.png";
//import square from "url:./assets/square.png";
//// ship img
//import ship5normal from "url:./assets/ship/ship5normal.png";
//import ship5hover from "url:./assets/ship/ship5hover.png";
//import ship5select from "url:./assets/ship/ship5select.png";
//import ship4normal from "url:./assets/ship/ship4normal.png";
//import ship4hover from "url:./assets/ship/ship4hover.png";
//import ship4select from "url:./assets/ship/ship4select.png";
//import ship3normal from "url:./assets/ship/ship3normal.png";
//import ship3hover from "url:./assets/ship/ship3hover.png";
//import ship3select from "url:./assets/ship/ship3select.png";
//import ship32normal from "url:./assets/ship/ship32normal.png";
//import ship32hover from "url:./assets/ship/ship32hover.png";
//import ship32select from "url:./assets/ship/ship32select.png";
//import ship2normal from "url:./assets/ship/ship2normal.png";
//import ship2hover from "url:./assets/ship/ship2hover.png";
//import ship2select from "url:./assets/ship/ship2select.png";

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
  //this.load.image(config.square.name, square);

  //// ship

  //this.load.image(config.ship5.normal, ship5normal);
  //this.load.image(config.ship5.hover, ship5hover);
  //this.load.image(config.ship5.select, ship5select);

  //this.load.image(config.ship4.normal, ship4normal);
  //this.load.image(config.ship4.hover, ship4hover);
  //this.load.image(config.ship4.select, ship4select);

  //this.load.image(config.ship3.normal, ship3normal);
  //this.load.image(config.ship3.hover, ship3hover);
  //this.load.image(config.ship3.select, ship3select);

  //this.load.image(config.ship32.normal, ship32normal);
  //this.load.image(config.ship32.hover, ship32hover);
  //this.load.image(config.ship32.select, ship32select);

  //this.load.image(config.ship2.normal, ship2normal);
  //this.load.image(config.ship2.hover, ship2hover);
  //this.load.image(config.ship2.select, ship2select);

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

  // render square img
  battleship.render();
  //this.add.image(
    //config.phaser.width - config.ship.width / 2,
    //config.ship.height,
    //config.ship5.normal
  //);
}

function update() {}
