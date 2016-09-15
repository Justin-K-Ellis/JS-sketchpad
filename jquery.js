$(document).ready(function(){

	$("button").click(function(){
			var size = prompt("Enter an integer.　数を入力して下さい");
			//console.log(size);
		});



	for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
           	 var unit = $("<div class='unit'></div>");
           	 	unit.appendTo('#container');
       	 }
    }
	//console.log(size);
	$("div").hover(
		function(){
    		$(this).addClass("boxC");
	});

	
});