

class Timer {
	constructor(time) {
		this.time = time;
	}

	start() {
		this.time = $("#set-time").val();
		$("#set-time").val('');
		if (validate(this.time)){
			var minutes = this.time;
			var count = minutes*60;
			var seconds = 0;
			var countdown = setInterval(function() {
				count--;
				minutes = ('0'+Math.floor(count/60)).slice(-2);
				seconds = ('0'+count%60).slice(-2);
				$("#counter-display").text(minutes+':'+seconds);
				if(count <= 0){
				clearInterval(countdown);
				sound.play();
				}
			}, 1000);
			this._countdown = countdown;
		}
		else {			
			alert('Only numbers please');
			$("#counter-display").text('0');			
		}
	}

	stop() {
		clearInterval(this._countdown);
	}

	reset() {
		clearInterval(this._countdown);
		$("#counter-display").text('00:00');
	}
}

var time;
var timer = new Timer(time);
var sound = new Audio('http://d.zaix.ru/9MPe.mp3');

// Buttons
$("#start").click(function() {	
	timer.start();
})

$("#stop").click(function() {
	timer.stop()
})

$("#reset").click(function() {
	timer.reset();
})

// Input validation
function validate (inputField) {
	var isValid = /^\d+$/.test(inputField);
	return isValid;
}