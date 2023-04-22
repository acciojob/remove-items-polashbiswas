//your JS code here. If required.
var colorselect = document.getElementById("colorSelect");
// console.log(colorselect[1].innerHTML);
let btn = document.querySelector("input[type='button']");
btn.addEventListener("click", function(){
	let selectItem = colorselect.options[colorselect.selectedIndex];
	colorselect.removeChild(selectItem);
});