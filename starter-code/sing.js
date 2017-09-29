console.log("sing.js loaded");
var bottles;


	bottles= prompt("how many verses you want to hear ");
	for(; bottles >= 0; bottles--){
	if (bottles > 1){
	console.log (bottles + ' bottles of beer on the wall,');
	console.log (bottles + ' bottles of beer!');
	console.log ('Take one down and pass it around,');
	console.log (bottles-1 + ' bottles of beer on the wall!');
	}

	else
	if (bottles === 1){
	console.log (bottles + ' bottle of beer on the wall,');
	console.log (bottles + ' bottle of beer!');
	console.log ('Take one down and pass it around,');

	}else if (bottles ===0){
	    console.log (bottles + ' bottle of beer on the wall,');
	console.log ( 'No more bottle of beer!');
	
	}
}
