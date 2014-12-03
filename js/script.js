/*
	Project: p-lax
	Authors: yemi
*/


// Create a closure to maintain scope of the '$' and KO
;(function (KO) {

	
		$(function() {
			KO.Config.init();
				
			// Make it rain
			createRain();
		});



	KO.Config = {

		init : function () {
			console.debug('Kickoff is running');
		}
	};

	// Example module
	/*
	KO.Ui = {
		init : function() {
			KO.Ui.modal();
		},

		modal : function() {

		}
	};
	*/

	// number of drops created.
	var nbDrop = 200; 

	// function to generate a random number range.
	function randRange( minNum, maxNum) {
	  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
	}

	// function to generate drops
	function createRain() {
		for( i=1;i<nbDrop;i++) {
		var dropLeft = randRange(-1000,3600);
		var dropTop = randRange(-1000,2400);
		// var drop = $('#drop'+i);

		$('.rain').append('<div class="drop" id="drop' + i + '"></div>');
		$('#drop'+i).css('left',dropLeft);
		$('#drop'+i).css('top',dropTop);
		}

	}



})(window.KO = window.KO || {});

