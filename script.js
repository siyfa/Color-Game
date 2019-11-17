var numSquares = 9;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#pickedRGB");
var messageDisplay = document.querySelector("#resultDisplay");
var resetBtn = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var veryHardBtn = document.querySelector("#veryHard");
var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

veryHard.addEventListener("click", function(){
	this.classList.add("done");
	easyBtn.classList.remove("done");
	hardBtn.classList.remove("done");
	numSquares = 9;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i] 
		squares[i].style.display = "block";
	}
});

easyBtn.addEventListener("click", function(){
	this.classList.add("done");
	hardBtn.classList.remove("done");
	veryHard.classList.remove("done")
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i] 
		}else{
			squares[i].style.display = "none";
		}
	} 
});
hardBtn.addEventListener("click", function(){
	this.classList.add("done");
	easyBtn.classList.remove("done");
	veryHard.classList.remove("done")
	numSquares = 6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i] 
			squares[i].style.display = "inline-block"
		}else{
			squares[i].style.display = "none";
		}
	} 
});
resetBtn.addEventListener("click", function(){
	reset();
});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		if (clickedColor === pickedColor) {
			changeColor(clickedColor);
			messageDisplay.textContent = "Correct!";
			resetBtn.textContent = "Play Again?"
			h1.style.backgroundColor = clickedColor;
		}else{
			messageDisplay.textContent = "Try again!";
			this.style.backgroundColor = "#232323";
		}

	});
}
function reset(){
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	resetBtn.textContent = "New Color"
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}

}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}