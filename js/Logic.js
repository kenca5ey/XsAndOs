var Logic = (function() {
	'use strict';

	var Logic = function(num) {
		this.num = num;
		this.cellMap = [];
		this.init(num);
		this.numClicked = 0;
	};

	Logic.prototype.init = function() {
		for(var i = 0; i<this.num ; i++){
			var cellRecord = new CellRecord(i);
			this.cellMap.push(cellRecord);
		}
	};

	Logic.prototype.incrementNumClicked = function(){
		this.numClicked += 1;
		if(this.num <= this.numClicked){
			PubSub.trigger('gamefinished', ["All squares filled"]);
		} 
	};

	return Logic;

})(Logic || {});