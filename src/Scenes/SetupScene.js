import DirectionSwt from "../controller_UI/DirectionSwt.js";
import StartBtn from "../controller_UI/StartBtn.js";

export default class SetupScreen extends Phaser.Scene {
  #battleship;
  // Control UI
  #directionSwt;
  #startBtn;

  constructor(battleship) {
    super({ key: "SetupScreen", active: true });
    this.#battleship = battleship;
  }

  preload() {
    this.#battleship.preload(this);

    // Preload Control UI
    this.#directionSwt = new DirectionSwt(this);
    this.#startBtn = new StartBtn(this);
  }

  create() {
    // create game
    this.#battleship.create4Setup();

    this.#directionSwt.create();
    this.#startBtn.create();
  }

  update() {
    var player = this.#battleship.getPlayer();
    var board = player.getBoard();

    var selectingShip = player.getPanelSelecting();
    var selectingSqr = board.getSquareSelecting();
    // Handle when select square before select ship
    if (selectingSqr && !selectingShip) {
      selectingSqr.setSelect(false);
    }

    board.update4Setup();

    // Handle all thing setup board
    if (selectingShip && selectingSqr) {
      player.setupShips(
        selectingShip,
        selectingSqr,
        this.#directionSwt.getDirection()
      );
      // Check setup done or not
      player.getShips().some((ship) => ship.getPos().length === 0)
        ? this.#startBtn.setSetupDone(false)
        : this.#startBtn.setSetupDone(true);
    }
  }
}
