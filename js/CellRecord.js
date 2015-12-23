var CellRecord = (function() {
	'use strict';

	var CellRecord = function(id) {
		this.id = id;
		this.init();
	};

	CellRecord.prototype.init = function() {
		this.clickedYet = false;
		this.player = null;
		//PubSub.trigger('recordadded', [record]);
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