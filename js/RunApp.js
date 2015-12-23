(function() {
  'use strict';
  var gameWrap = document.getElementById('game');
  var logic = new Logic(9);
  var board = new Board(9);
  gameWrap.appendChild(board.getWrap());
  var players = ["player1","player2"];
  var currentPlayer = "player1";

  var _onCellClicked = function(cell) {
    logic.cellMap[cell.id].updateClickedStatus(currentPlayer);
    cell.stopListeningForClick();
    changePlayer();
  };

  var _onCellStatusChange = function(cellRecord) {
    board.updateCellIndicator(cellRecord);
    logic.incrementNumClicked();
  };

  

  var _onClickedSave = function(eventText) {
    console.log('Saved');
  };

  var _onGameFinished = function(text) {
    console.log("Game over..... " + text);
  };

  PubSub.on('cellclicked', _onCellClicked);
  PubSub.on('cellstatuschange', _onCellStatusChange);

  
  PubSub.on('gamefinished', _onGameFinished);



  function changePlayer(){
    if(currentPlayer===players[0]){
      currentPlayer = players[1];
    }else{
      currentPlayer = players[0];
    }
  }

})();