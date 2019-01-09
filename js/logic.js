$(document).ready(function() {
    $('.pgwSlider').pgwSlider();
});

var n = 0;

function toggle() {
	n = n % 2;
	if (n == 0) {
		$(".sidebar").removeClass("hide");
		$(".sidebar").addClass("display");
		n++;
	} else if (n == 1) {
		$(".sidebar").removeClass("display");
		$(".sidebar").addClass("hide");
		n++;
	}
}

function projects() {
	n = n % 2;
	if (n == 0) {
		$(".dropdown").removeClass("hide-projects");
		$(".dropdown").addClass("display-projects");
		$("#project-list").fadeIn(2500);
		n++;
	} else if (n == 1) {
		$(".dropdown").removeClass("display-projects");
		$(".dropdown").addClass("hide-projects");
		$("#project-list").fadeOut(500);
		n++;
	}
}

function proOne() {
	$(".container").removeClass("hide-project-images");
	$(".container2").addClass("hide-project-images");
	$(".container3").addClass("hide-project-images");
	$(".container4").addClass("hide-project-images");
	$(".container5").addClass("hide-project-images");
	$(".container6").addClass("hide-project-images");
	$(".container7").addClass("hide-project-images");
	$(".container8").addClass("hide-project-images");
	projects();
}

function proTwo() {
	$(".container").addClass("hide-project-images");
	$(".container2").removeClass("hide-project-images");
	$(".container3").addClass("hide-project-images");
	$(".container4").addClass("hide-project-images");
	$(".container5").addClass("hide-project-images");
	$(".container6").addClass("hide-project-images");
	$(".container7").addClass("hide-project-images");
	$(".container8").addClass("hide-project-images");
	projects();
}

function proThree() {
	$(".container").addClass("hide-project-images");
	$(".container2").addClass("hide-project-images");
	$(".container3").removeClass("hide-project-images");
	$(".container4").addClass("hide-project-images");
	$(".container5").addClass("hide-project-images");
	$(".container6").addClass("hide-project-images");
	$(".container7").addClass("hide-project-images");
	$(".container8").addClass("hide-project-images");
	projects();
}

function proFour() {
	$(".container").addClass("hide-project-images");
	$(".container2").addClass("hide-project-images");
	$(".container3").addClass("hide-project-images");
	$(".container4").removeClass("hide-project-images");
	$(".container5").addClass("hide-project-images");
	$(".container6").addClass("hide-project-images");
	$(".container7").addClass("hide-project-images");
	$(".container8").addClass("hide-project-images");
	projects();
}

function proFive() {
	$(".container").addClass("hide-project-images");
	$(".container2").addClass("hide-project-images");
	$(".container3").addClass("hide-project-images");
	$(".container4").addClass("hide-project-images");
	$(".container5").removeClass("hide-project-images");
	$(".container6").addClass("hide-project-images");
	$(".container7").addClass("hide-project-images");
	$(".container8").addClass("hide-project-images");
	projects();
}

function proSix() {
	$(".container").addClass("hide-project-images");
	$(".container2").addClass("hide-project-images");
	$(".container3").addClass("hide-project-images");
	$(".container4").addClass("hide-project-images");
	$(".container5").addClass("hide-project-images");
	$(".container6").removeClass("hide-project-images");
	$(".container7").addClass("hide-project-images");
	$(".container8").addClass("hide-project-images");
	projects();
}

function proSeven() {
	$(".container").addClass("hide-project-images");
	$(".container2").addClass("hide-project-images");
	$(".container3").addClass("hide-project-images");
	$(".container4").addClass("hide-project-images");
	$(".container5").addClass("hide-project-images");
	$(".container6").addClass("hide-project-images");
	$(".container7").removeClass("hide-project-images");
	$(".container8").addClass("hide-project-images");
	projects();
}

function proEight() {
	$(".container").addClass("hide-project-images");
	$(".container2").addClass("hide-project-images");
	$(".container3").addClass("hide-project-images");
	$(".container4").addClass("hide-project-images");
	$(".container5").addClass("hide-project-images");
	$(".container6").addClass("hide-project-images");
	$(".container7").addClass("hide-project-images");
	$(".container8").removeClass("hide-project-images");
	projects();
}