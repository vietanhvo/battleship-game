class Ship {
  #name;
  #length; // length of the board 
  #pos; // Array[Square, Square, ...]. The coordianate of ship is belong to this Square
  #boom; // true if all pos is shooted

  constructor(name, length, pos, x, y) {
    this.#name = name;
    this.#boom = false;
    this.#length = length;
    //this.#pos = pos;
  }

  setPosition(listOfSquare) {
    this.#pos = listOfSquare;
  }

  getLength() {
    return this.#length;
  }

  render()
}
