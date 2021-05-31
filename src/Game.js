import Player from "./Player.js";

export default class Game {
  // Player
  #player;

  constructor() {
    // Create Player
    this.#player = new Player();
  }

  preload(scene) {
    this.#player.preload(scene);
  }

  getPlayer() {
    return this.#player;
  }

  create4Setup() {
    this.#player.create4Setup();
  }

  create4Play() {
    this.#player.create4Setup();
  }
}
