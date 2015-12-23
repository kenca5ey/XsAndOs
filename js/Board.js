var Board = (function() {

  var Board = function(num) {
    this._wrap = null;
    this.pool = [];
    this.init(num);
  };

  Board.prototype.init = function(num) {
    this.setWrap(document.createElement('div'));
    this.getWrap().classList.add('board-wrap');
    this.genCells(num);
  };

  Board.prototype.getWrap = function() {
    return this._wrap;
  };

  Board.prototype.setWrap = function(dom) {
    this._wrap = dom;
  };

  Board.prototype.genCells = function(num) {
    var i = 0, frag, cell;
    frag = document.createDocumentFragment();

    for (; i < num; i++) {
      cell = new Cell(i);
      this.pool.push(cell);
      frag.appendChild(cell.dom);
    }
    this.getWrap().appendChild(frag);
  };

  Board.prototype.updateCellIndicator = function(record) {
    this.pool[record.id].dom.classList.add(record.player);
  };

  return Board;

})(Board || {});