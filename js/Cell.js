var Cell = (function() {
	'use strict';

	var Cell = function(id) {
		this.id = id;
		this.eventFunc = this.triggerCellClickedPubSub.bind(this);
		this.initDom();
	};

	Cell.prototype.initDom = function() {
		this.dom = document.createElement('div');
		this.dom.classList.add('cell');
		
		this.listenForClick();
	};

	Cell.prototype.listenForClick = function(){
		
		this.dom.addEventListener('click', this.eventFunc);
	};

	Cell.prototype.stopListeningForClick = function(){
		this.dom.removeEventListener("click", this.eventFunc);
		
	};

	Cell.prototype.triggerCellClickedPubSub = function(){
		PubSub.trigger('cellclicked', [this]);
	};

	return Cell;

})(Cell || {});