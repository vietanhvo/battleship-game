import Board from "./Board.js";
import Player from "./Player.js";
import DirectionSwt from "./controller_UI/DirectionSwt.js";
import StartBtn from "./controller_UI/StartBtn.js";

export default class Game {
  // Array of squares
  #board;
  // Player
  #player;

  // Control UI
  #directionSwt;
  #startBtn;

  constructor(phaser) {
    // Create the board
    this.#board = new Board(phaser);
    // Create Player
    this.#player = new Player(phaser);

    // Preload Control UI
    this.#directionSwt = new DirectionSwt(phaser);
    this.#startBtn = new StartBtn(phaser);
  }

  create() {
    this.#board.create();
    this.#player.create();

    this.#directionSwt.create();
    this.#startBtn.create();
  }

  update4Setup() {
    var selectingShip = this.#player.getPanelSelecting();
    var selectingSqr = this.#board.getSquareSelecting();
    // Handle when select square before select ship
    if (selectingSqr && !selectingShip) {
      selectingSqr.setSelect(false);
    }

    this.#board.update4Setup();

    // Handle all thing setup board
    if (selectingShip && selectingSqr) {
      this.#player.setupShips(
        selectingShip,
        selectingSqr,
        this.#directionSwt.getDirection(),
        this.#board.getBoard()
      );
      // Check setup done or not
      this.#player.getShips().some((ship) => ship.getPos().length === 0)
        ? this.#startBtn.setSetupDone(false)
        : this.#startBtn.setSetupDone(true);
    }
  }
}
