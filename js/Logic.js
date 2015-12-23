var Logic = (function() {
	'use strict';

	var Logic = function(num) {
		this.num = num;
		this.numRows = num/3;
		this.cellMap = [];
		this.numClicked = 0;
		this.clickedMap = [];
		this.init(num);
	};

	Logic.prototype.init = function() {
		for(var i = 0; i<this.numRows ; i++){
			var curRow = [];
			for(var j=0; j<this.numRows; j++){
				var cellRecord = new CellRecord(i,j);
				curRow.push(cellRecord);
			}
			this.cellMap.push(curRow);
		}
		this.initClickedMap();
	};

	Logic.prototype.initClickedMap = function(){
		for(var i=0;i<this.numRows;i++){
			this.clickedMap[i] = new Array(this.numRows);
		}
	};

	Logic.prototype.recordClick = function(cellRecord){
		this.incrementNumClicked();
		this.clickedMap[cellRecord.i][cellRecord.j] = cellRecord.player;
	};

	Logic.prototype.incrementNumClicked = function(){
		this.numClicked += 1;
		if(this.num <= this.numClicked){
			PubSub.trigger('gamefinished', ["Draw"]);
		} 
	};

	Logic.prototype.checkForWinner = function(cellRecord){
		var col, row, diag, rdiag;
		col = row = diag = rdiag = 0;
		for(var iter=0; iter<this.numRows; iter++){
			if (this.clickedMap[cellRecord.i][iter] === cellRecord.player) col+=1;
			if (this.clickedMap[iter][cellRecord.j] === cellRecord.player) row+=1;
			if (this.clickedMap[iter][iter] === cellRecord.player) diag+=1;
			if (this.clickedMap[iter][this.numRows- iter + 1] === cellRecord.player) rdiag+=1;
		}
		if(col >=this.numRows || row >=this.numRows|| diag >=this.numRows|| rdiag >=this.numRows) PubSub.trigger('gamefinished', [cellRecord.player]);
	};


// 	col=row=diag=rdiag=0
// winner=false
// for i=1 to n
//   if cell[x,i]=player then col++
//   if cell[i,y]=player then row++
//   if cell[i,i]=player then diag++
//   if cell[i,n-i+1]=player then rdiag++
// if row=n or col=n or diag=n or rdiag=n then winner=true

	// private int[][] winningCombinations = new int[][] {
 //            {0, 1, 2}, {3, 4, 5}, {6, 7, 8}, //horizontal wins
 //            {0, 3, 6}, {1, 4, 7}, {2, 5, 8}, //virticle wins
 //            {0, 4, 8}, {2, 4, 6}             //diagonal wins
 //        };

	return Logic;

})(Logic || {});