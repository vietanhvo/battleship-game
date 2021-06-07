import { config } from "../../config.js";

import ship2 from "url:../../assets/ship/ship2.png";
import ship3 from "url:../../assets/ship/ship3.png";
import ship32 from "url:../../assets/ship/ship32.png";
import ship4 from "url:../../assets/ship/ship4.png";
import ship5 from "url:../../assets/ship/ship5.png";

import sunk from "url:../../assets/ship/sunk.png";

export default class ShipPanel {
  #name;
  #phaser;
  #panel;
  #select;
  #sunk;

  constructor(name, phaser) {
    this.#name = name;
    this.#phaser = phaser;
    this.#select = false;
    this.#sunk = false;
    this.#preloadImg();
  }

  #preloadImg() {
    var shipImg;
    switch (this.#name) {
      case "ship2":
        shipImg = ship2;
        break;
      case "ship3":
        shipImg = ship3;
        break;
      case "ship32":
        shipImg = ship32;
        break;
      case "ship4":
        shipImg = ship4;
        break;
      case "ship5":
        shipImg = ship5;
        break;
    }
    this.#phaser.load.image("sunk", sunk);

    this.#phaser.load.spritesheet(this.#name, shipImg, {
      frameWidth: config.ship.width,
      frameHeight: config.ship.height,
    });
  }

  getImg() {
    return this.#panel;
  }

  setSelect(status) {
    this.#select = status;
  }

  getSelect() {
    return this.#select;
  }

  // Create in phaser
  create(listOfShips, x, y, scene) {
    this.#panel = this.#phaser.add
      .sprite(x, y, this.#name)
      .setInteractive({ cursor: "pointer" })
      .setFrame(1);
    this.#sunk = this.#phaser.add.sprite(x, y, "sunk").setScale(0.25);
    this.#sunk.visible = false;
    if (scene === "SetupScene") {
      this.#panel.on("pointerdown", () => {
        // ships are not selected must be setSelect to false
        var selectingShip;
        listOfShips.map((ship) => {
          if (ship.getPanel().getSelect()) return (selectingShip = ship);
        });

        if (selectingShip && selectingShip.getName() !== this.#name) {
          selectingShip.getPanel().getImg().setFrame(1);
          selectingShip.getPanel().setSelect(false);
        }

        this.setSelect(true);
        this.#panel.setFrame(2);
      });
    }
    this.#panel.on("pointerout", () => {
      if (!this.#select) {
        this.#panel.setFrame(1);
      }
    });
    this.#panel.on("pointerover", () => {
      if (!this.#select) {
        this.#panel.setFrame(0);
      }
    });
  }

  update(sunk) {
    if (sunk) this.#sunk.visible = true;
  }
}
