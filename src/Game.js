import Board from "./Board.js";
import Player from "./Player.js";

export default class Game {
  // Array of squares
  #board;
  // Player
  #player;

  constructor() {
    // Create the board
    this.#board = new Board();
    // Create Player
    this.#player = new Player();

  }

  preload(scene) {
    this.#board.preload(scene);
    this.#player.preload(scene);
  }

  getBoard() {
    return this.#board;
  }

  getPlayer() {
    return this.#player;
  }

  create() {
    this.#board.create();
    this.#player.create();
  }
}
