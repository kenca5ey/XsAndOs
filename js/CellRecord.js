var CellRecord = (function() {
	'use strict';

	var CellRecord = function(i,j) {
		this.i = i;
		this.j = j;
		this.init();
	};

	CellRecord.prototype.init = function() {
		this.clickedYet = false;
		this.player = null;
	};



	CellRecord.prototype.updateClickedStatus = function(player) {
		if(!this.clickedYet){
			this.player = player;
			this.clickedYet = true;
			PubSub.trigger('cellstatuschange', [this]);
		}
	};

	return CellRecord;

})(CellRecord || {});