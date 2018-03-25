function questionOne() {
  var answerOne = prompt("What is 2 + 2?")
  if (answerOne === '4') {
  	document.getElementById('questionOne').style.display = 'none';
  }
  else {
  	alert("Nope. Try again.");
  }
}

function questionTwo() {
	var answerTwo = prompt("What is 5 - 4?")
	if (answerTwo === '1') {
		document.getElementById('questionTwo').style.display = 'none';
	}
	else {
  		alert("Nope. Try again.");
  }
}

function questionThree() {
	var answerThree = prompt("What is 2 x 10?")
	if (answerThree === '20') {
		document.getElementById('questionThree').style.display = 'none';
	}
	else {
  		alert("Nope. Try again.");
  }	
}

function questionFour() {
	var answerFour = prompt("what is 10 / 5?")
	if (answerFour === '2') {
		document.getElementById('questionFour').style.display = 'none';
	}
	else {
  		alert("Nope. Try again.");
  }	
}


