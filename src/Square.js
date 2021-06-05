import { config } from "../config.js";

export default class Square {
  #x;
  #y;
  #ship;
  #shoot;
  #phaser;
  #img;
  #select;
  #probability;

  constructor(x, y) {
    this.#ship = this.#shoot = this.#select = false;
    this.#probability = 0;
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

  // PROBABILITY
  getProba() {
    return this.#probability;
  }

  resetProba() {
    this.#probability = 0;
  }

  increaseProba() {
    this.#probability += 1;
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
  create(xPos, yPos, scene, player, swapTurn) {
    // Render square
    this.#img = this.#phaser.add
      .sprite(xPos, yPos, config.square.name)
      .setInteractive();
    this.#img.on("pointerdown", () => {
      if (scene === "ComputerScene") {
        // If not computer turn => player turn => shoot
        if (!player.getTurn()) {
          this.shoot();
          swapTurn();
        }
      } else if (scene === "SetupScene") {
        this.setSelect(true);
      }
    });
    if (this.#ship && scene === "PlayerScene") {
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
      case "SetupScene":
        if (this.#ship) this.#img.setTint(0xff0000);
        break;
      case "ComputerScene":
        if (this.#shoot) {
          this.#ship
            ? this.#img.setTint(0xff0000)
            : this.#img.setTint(0x808080);
        }
        break;
      case "PlayerScene":
        if (this.#shoot) {
          this.#ship
            ? this.#img.setTint(0xd35400)
            : this.#img.setTint(0x808080);
        }
        break;
    }
  }
}
