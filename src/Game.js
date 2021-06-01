import Player from "./Player.js";
import Computer from "./Computer.js";

export default class Game {
  // Player
  #player;
  #computer;

  constructor() {
    // Create Player
    this.#player = new Player();
    this.#computer = new Computer();
  }

  preload(scene) {
    this.#player.preload(scene);
    this.#computer.preload(scene);
  }

  create(scene) {
    switch (scene) {
      case "Setup":
        this.#player.create(scene);
        break;
      case "Computer":
        this.#computer.create(scene);
        break;
      case "Player":
        this.#player.create(scene);
        break;
    }
  }

  getPlayer() {
    return this.#player;
  }

  getComputer() {
    return this.#computer;
  }
}
