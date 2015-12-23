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

    this.resultBox = document.createElement('div');
    this.resultBox.classList.add('result-box');
    this.getWrap().appendChild(this.resultBox);
  };

  Board.prototype.getWrap = function() {
    return this._wrap;
  };

  Board.prototype.setWrap = function(dom) {
    this._wrap = dom;
  };

  Board.prototype.genCells = function(num) {
    var frag, cell, curRow;
    frag = document.createDocumentFragment();
    for (var i = 0; i < num / 3; i++) {
      curRow = [];
      for (var j = 0; j < num / 3; j++) {
        cell = new Cell(i,j);
        curRow.push(cell);
        frag.appendChild(cell.dom);
      }
      this.pool.push(curRow);
    }
    this.getWrap().appendChild(frag);
  };

  Board.prototype.updateCellIndicator = function(record) {
    this.pool[record.i][record.j].dom.classList.add(record.player);
  };

  Board.prototype.endGame = function(text) {
    this.resultBox.innerHTML = text;
  };

  return Board;

})(Board || {});