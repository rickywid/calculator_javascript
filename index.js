/* Simple Javascript Calculator */



function calc(num){

	var result = document.getElementById('result');
	result.value += num;


	var total = eval(document.frm.result.value);

	
	var equalBtn = document.getElementById('equals');
	var clearBtn = document.getElementById('clear');

	equalBtn.addEventListener('click', function(){
		result.value = total;


	})

	clearBtn.addEventListener('click', function(){
		result.value = "";
	})
}
