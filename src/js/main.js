

class Timer {
	constructor(time) {
		this.time = time;
	}

	setTime() {
		this.time = $("#set-time").val();
		$("#counter-display").text(this.time);
	}
	start() {		
		$("#set-time").val('');

		var count = this.time;
		var countdown = setInterval(function() {
			count--;
			$("#counter-display").text(count);
			console.log(count);
			if(count <= 0)
			clearInterval(countdown);
		}, 1000);
		this._countdown = countdown;
	}
	pause() {
		clearInterval(this._countdown);
	}
}

var time;
var timer = new Timer(time);

$("#start").click(function() {	
	timer.start();
})

$("#set-time").keyup(function() {
	timer.setTime()
})

$("#pause").click(function() {
	timer.pause()
})


