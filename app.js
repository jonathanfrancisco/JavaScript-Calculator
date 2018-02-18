
var calculatorDiv = document.querySelector('.calculator-div');
var calculatorScreen = document.querySelector('.calculator-screen');
var calculatorScreenText = calculatorScreen.querySelector('h2');
var buttons = document.getElementsByTagName('button');
var text = "";

function calculate(toEval) {
	return eval(toEval);
}

calculatorDiv.addEventListener('click', function(event) {

	var reg = RegExp('[.x+*/()%-]');
	var buttonClicked = event.target;

	if(buttonClicked.tagName == "BUTTON") {

		var input = buttonClicked.textContent;

		if(input == "=" && text !== "") 
			if(calculate(text) === Infinity)
				text = "Cannot Divide by Zero.";
			else
				text = calculate(text); 
		else if(input == "Clear") 
			text = "";
		else if(reg.test(text) && text.length == 0  )
			alert("WHAT");
		else  {
			var lastChar = text.toString().charAt(text.length-1);
			if (reg.test(lastChar) && reg.test(input)) {
				var newString = text.slice(0,text.length-1)+input;
				text = newString;
			}
			else 
				text += input;
		}

		calculatorScreenText.textContent = text;

	}

});
