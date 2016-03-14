/* Simple Javascript Calculator */


var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var zero = document.getElementById('0');

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');

var equalBtn = document.getElementById('equals');
var clearBtn = document.getElementById('clear');
var result = document.getElementById('result');
var decimal = document.getElementById('decimal')

var total;

function calc(num){
		
		result.value += num;
		
		
		equalBtn.addEventListener('click', function(){
			total = eval(result.value);
			result.value = total;
		})

		clearBtn.addEventListener('click', function(){
			result.value = "";
		})
	}

plus.addEventListener('click', function(){
	calc('+');
})

minus.addEventListener('click', function(){
	calc('-');
})

divide.addEventListener('click', function(){
	calc('/');
})

multiply.addEventListener('click', function(){
	calc('*');
})

one.addEventListener('click', function(){
	calc(1);
})

two.addEventListener('click', function(){
	calc(2);
})
three.addEventListener('click', function(){
	calc(3);
})

four.addEventListener('click', function(){
	calc(4);
})
five.addEventListener('click', function(){
	calc(5);
})

six.addEventListener('click', function(){
	calc(6);
})
seven.addEventListener('click', function(){
	calc(7);
})

eight.addEventListener('click', function(){
	calc(8);
})
nine.addEventListener('click', function(){
	calc(9);
})
zero.addEventListener('click', function(){
	calc(0);
})

decimal.addEventListener('click', function(){
	calc('.');
})