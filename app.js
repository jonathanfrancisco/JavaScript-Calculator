
var calculatorDiv = document.querySelector('.calculator-div');
var calculatorScreen = document.querySelector('.calculator-screen');
var calculatorScreenText = calculatorScreen.querySelector('h2');
var buttons = document.getElementsByTagName('button');
var text = "";

function calculate(toEval) {
	return eval(toEval);
}

calculatorDiv.addEventListener('click', function(event) {

	var buttonClicked = event.target;

	if(buttonClicked.tagName == "BUTTON") {


		var input = buttonClicked.textContent;

		
		if(input == "=") {

			if(text!="") {


				try {

					if(calculate(text) == "Infinity")  {
						text = "Cannot divide by zero";
					}

					else {
						text = calculate(text);
					}
					
				}

				catch(error) {
					console.log(error);
				}
				
			}


		}

		else if(input == "Clear") {
			text = "";
		} 

		else if(   (input == "+" || input == "-" || input == "*" || input == "/" || input == "%" || input == ".") && text.length == 0  ){
			// do nothing
			alert("WHAT");
		}

		else  {
				
				var lastChar = text.toString().charAt(text.length-1);

				if( (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/" || lastChar == "%" || lastChar == ".") && (input == "+" || input == "-" || input == "*" || input == "/" || input == "%" || input == "." || input == "(" || input == ")")) {
					
					var newString = text.slice(0,text.length-1)+input;
					text = newString;

				}

				else {
					text += input;
				}

		}

		calculatorScreenText.textContent = text;

	}

});
