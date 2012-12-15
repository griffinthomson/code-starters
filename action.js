//the alert() functin will make a pop up box on page
//alert('Holy smokes it's fucking java script');
//checking out variables://
var todaysWeather = '2 degrees and cloudy.'

//alert (todaysWeather)

//taking a look at functions (WITHOUT arguments)...like set of instructions you want to all run together....group of things you want happening at the same time

/*...this symbol helps us comment out a bunch of stuff
function tellmeTodaysWeather(){
  var celsius = '16 degrees celsius'
	var far = '61 degrees farenheit'
	//the + sign can be a mathematical operator
	//OR it can be used to concatenate strings...i.e. bring them together
	alert( celsius + ", " + far );
}

//invoke the function
tellmeTodaysWeather();
//alert (todaysWeather)
*/

//taking a look at functions (WITH arguments)

function tellmeTodaysWeather(celsius,far){
	var celsiusText = celsius + ' degrees celsius'; 
	var farText = far + ' degrees farenheit';
	//the + sign can be a mathematical operator
	//OR it can be used to concatenate strings...i.e. bring them together
	//alert( celsiusText + ", " + farText );
	//console.log to test it out in console without having on-page alerts
	console.log( celsiusText + ", " + farText );
}

tellmeTodaysWeather(16, 61);
tellmeTodaysWeather(0, 32);
tellmeTodaysWeather(-40, -40);
