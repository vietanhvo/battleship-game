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

  getPlayer() {
    return this.#player;
  }

  getComputer() {
    return this.#computer;
  }

  create4Setup() {
    this.#player.create4Setup();
  }

  create4Play() {
    //this.#player.create4Setup();
    this.#computer.create();
  }
}
