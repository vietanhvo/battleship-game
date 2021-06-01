import { config } from "../config.js";

export default class Square {
  #x;
  #y;
  #ship;
  #shoot;
  #phaser;
  #img;
  #select;

  constructor(x, y) {
    this.#ship = this.#shoot = this.#select = false;
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
  shoot() {
    this.#shoot = true;
  }

  getShoot() {
    return this.#shoot;
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
  create(xPos, yPos, scene, playerName, callback) {
    // Render square
    this.#img = this.#phaser.add
      .sprite(xPos, yPos, config.square.name)
      .setInteractive();
    if (scene === "Player") {
      if (this.#ship) this.#img.setTint(0xff0000);
      return;
    }
    this.#img.on("pointerdown", () => {
      if (scene === "Computer") {
        this.shoot();
        if (callback) callback();
      } else {
        this.setSelect(true);
      }
    });
    if (this.#ship && playerName === "Player") {
      this.#img.setTint(0xff0000);
    } else {
      this.#img.on("pointerover", () => {
        this.#img.setTint(0x44ff44);
      });
      this.#img.on("pointerout", () => {
        this.#img.clearTint();
      });
    }
  }

  update(scene) {
    switch (scene) {
      case "Setup":
        if (this.#ship) this.#img.setTint(0xff0000);
        break;
      case "Computer":
        if (this.#shoot) {
          this.#ship
            ? this.#img.setTint(0xff0000)
            : this.#img.setTint(0x808080);
        }
        break;
    }
  }
}
