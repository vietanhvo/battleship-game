import { config } from "../config.js";

export default class Square {
  #x;
  #y;
  #ship;
  #shot;
  #phaser;
  #img;
  #select;

  constructor(x, y) {
    this.#ship = this.#shot = this.#select = false;
    this.#x = x;
    this.#y = y;
  }

  // Each sence must call this function first to load img and setup #phaser
  preload(phaser) {
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

  getImg() {
    return this.#img;
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  // Render square
  create4Setup(xPos, yPos) {
    // Render square
    this.#img = this.#phaser.add
      .sprite(xPos, yPos, config.square.name)
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
    if (this.#ship) this.#img.setTint(0xff0000);
  }

  update4Setup() {
    if (this.#ship) this.#img.setTint(0xff0000);
  }
}
