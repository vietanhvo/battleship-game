import { config } from "../config.js";
import ship2 from "url:../assets/ship/ship2.png";
import ship3 from "url:../assets/ship/ship3.png";
import ship32 from "url:../assets/ship/ship32.png";
import ship4 from "url:../assets/ship/ship4.png";
import ship5 from "url:../assets/ship/ship5.png";

export default class Ship {
  #name;
  #length; // length of the board
  #phaser;
  #select;
  #pos; // Array[Square, Square, ...]. The coordianate of ship is belong to this Square
  #sink; // true if all pos is shooted
  #panel; // the panel for user choose to setup ships

  constructor(name, length, phaser) {
    this.#phaser = phaser;
    this.#sink = this.#select = false;
    this.#name = name;
    this.#length = length;
    this.#pos = [];
    this.#loadImg();
  }

  #loadImg() {
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
    this.#phaser.load.spritesheet(this.#name, shipImg, {
      frameWidth: config.ship.width,
      frameHeight: config.ship.height,
    });
  }

  setSelect(status) {
    this.#select = status;
  }

  getSelect() {
    return this.#select;
  }

  setPos(listOfSquare) {
    this.#pos.map((sqr) => sqr.setShip(false));
    this.#pos = listOfSquare;
    listOfSquare.map((sqr) => sqr.setShip(true));
  }

  getPos() {
    return this.#pos;
  }

  getLength() {
    return this.#length;
  }

  getPanel() {
    return this.#panel;
  }

  getName() {
    return this.#name;
  }

  // Create in phaser
  createPanel(listOfShips, x, y) {
    this.#panel = this.#phaser.add
      .sprite(x, y, this.#name)
      .setInteractive()
      .setFrame(1);
    this.#panel.on("pointerdown", () => {
      // ships are not selected must be setSelect to false
      var selectingShip;
      listOfShips.map((ship) => {
        if (ship.getSelect()) return (selectingShip = ship);
      });

      if (selectingShip && selectingShip.getName() !== this.#name) {
        selectingShip.getPanel().setFrame(1);
        selectingShip.setSelect(false);
      }

      this.setSelect(true);
      this.#panel.setFrame(2);
    });
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
}
