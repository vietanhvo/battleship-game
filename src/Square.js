import { config } from "../config.js";

export default class Square {
  #x;
  #y;
  #xPos;
  #yPos;
  #ship;
  #shot;
  #phaser;
  #img;
  #select;

  constructor(x, y, xPos, yPos, phaser) {
    this.#ship = this.#shot = this.#select = false;
    this.#x = x;
    this.#y = y;
    this.#xPos = xPos;
    this.#yPos = yPos;
    this.#phaser = phaser;
  }

  // Setup ship in this square
  setShip(status) {
    this.#ship = status;
    if (!status) {
      this.#img.clearTint();
    }
  }

  getShip() {
    return this.#ship;
  }

  // Select square
  setSelect(status) {
    this.#select = status;
  }

  getSelect() {
    return this.#select;
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

  getImg() {
    return this.#img;
  }

  // Render square
  create() {
    // Render square
    this.#img = this.#phaser.add
      .sprite(this.#xPos, this.#yPos, config.square.name)
      .setInteractive();
    this.#img.on("pointerdown", () => {
      this.setSelect(true);
    });
    this.#img.on("pointerover", () => {
      if (!this.#ship) this.#img.setTint(0x44ff44);
    });
    this.#img.on("pointerout", () => {
      if (!this.#ship) this.#img.clearTint();
    });
  }

  update4Setup() {
    if (this.#ship) this.#img.setTint(0xff0000);
  }
}
