function addToExpression(value) {
			document.getElementById('result').value += value;
		}
		
		function clearExpression() {
			document.getElementById('result').value = '';
		}
		
		function evaluateExpression() {
			var expression = document.getElementById('result').value;
			var result = eval(expression);
			document.getElementById('result').value = result;
		}