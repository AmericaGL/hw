window.onload = function(){


addBoxes();
listenBox();
rowOfColors();
listenBoxes();

//colorPurple();
//clickerbox();
//addBigDiv();
// addMore();

};

var newBox = document.getElementsByTagName("div");
var pickAColor= "pink";

function addBoxes(){
  for(var i=0; i<250; i++){
  	var box = document.createElement("div");
  	box.style.width="5.1%";
  	box.style.height="5.1%";
  	box.style.float ="left";
  	box.style.paddingBottom="5%";
  	box.style.border="1.3px solid black";
  	document.body.appendChild(box);
  	//appendchild equals to right Element 
	}
}

function listenBox(){

 	for (var i=10;i<250; i++){
 	newBox[i].addEventListener("click", colorMeHappy);
 	//callback is in the second parameter
 	//remember to grab the local variable
 	//your i less than total amount of boxes you want to click on
 	//your number 10 will be listening not change color!!!!!!
 }
}


function colorMeHappy(){
	this.style.backgroundColor=pickAColor;
}
//the ColorMeHappy is coming from a callback function above
 
function rowOfColors(){
	document.getElementsByTagName("div")[0].style.backgroundColor="red";
	document.getElementsByTagName("div")[1].style.backgroundColor="blue";
	document.getElementsByTagName("div")[2].style.backgroundColor="purple";
	document.getElementsByTagName("div")[3].style.backgroundColor="orange";
	document.getElementsByTagName("div")[4].style.backgroundColor="black";
	document.getElementsByTagName("div")[5].style.backgroundColor="yellow";
	document.getElementsByTagName("div")[6].style.backgroundColor="green";
	document.getElementsByTagName("div")[7].style.backgroundColor="brown";
	document.getElementsByTagName("div")[8].style.backgroundColor="black";
	document.getElementsByTagName("div")[9].style.backgroundColor="white";
	document.getElementsByTagName("div")[10].style.backgroundColor="pink";
}

function listenBoxes(){
	for (var i=0; i<10; i++){
		newBox[i].addEventListener("click",pick);
		//number 0 to 10 boxes will be listening for click!!!!!
	}
	//remember to grab the global variable

function pick(){
	pickAColor=this.style.backgroundColor;
}
}
//
//
// function colorPurple(){
// 	var colorBox = document.createElement("div");
// 	colorBox.style.width = "9.1%";
// 	colorBox.style.height= "9.1%";
// 	colorBox.style.float="left";
// 	//Make sure it positions itself separately//
// 	colorBox.style.paddingBottom="11%";
// 	colorBox.style.border="solid black";
// 	document.body.appendChild(colorBox);
// 	colorBox.style.backgroundColor = "purple";
// 	colorBox.addEventListener("click",function(){
// 		console.log(this);
// 		this.style.backgroundColor="purple";
// 	return colorBox;
// 	})
// }

// function colorRed(){
// 	var colorBoxTwo = document.createElement("div");
// 	colorBoxTwo.style.width = "9.1%";
// 	colorBoxTwo.style.height="9.1%";
// 	colorBoxTwo.style.float="left";
// 	//Make sure it positions itself separately//
// 	colorBoxTwo.style.paddingBottom="11.1%";
// 	colorBoxTwo.style.border="solid black";
// 	document.body.appendChild(colorBoxTwo);
// 	colorBoxTwo.style.backgroundColor="red";
// }

	




//Your appendChild must be at the loop for final step
//call your local variable by setting it in the loop