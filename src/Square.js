import { config } from "../config.js";

export default class Square {
  #x;
  #y;
  #ship;
  #shot;
  #phaser;

  constructor(x, y, phaser) {
    this.#ship = this.#shot = false;
    this.#x = x;
    this.#y = y;
    this.#phaser = phaser;
  }

  // Setup ship in this square
  setShip() {
    this.#ship = true;
  }

  getShip() {
    return this.#ship;
  }

  // Shot this square
  shot() {
    this.#shot = true;
  }

  getShot() {
    return this.#shot;
  }

  // Get coordinate;
  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  // Render square
  render() {
    // Render square
    var sqr = this.#phaser.add.sprite(this.#x, this.#y, config.square.name).setInteractive();

    // Handle hover on square
    sqr.on("pointerover", function () {
      sqr.setTint(0x44ff44);
    });
    sqr.on("pointerout", function () {
      sqr.clearTint();
    });
  }
}
