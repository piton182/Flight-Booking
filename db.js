var listOfFlights = 
[
	{
		"flightNumber": "AB1322", 
		"passengers": [ 
				{
					"name":     "Dmitry Kouznetsov",
					"booking":  "ABCDEF"
				},
				{
					"name":     "Natalia Shteinikova", 
					"booking":  "ABCDEF"
				}, 
		] 
	}, 
	{ 
		"flightNumber": "CD224",
		"passengers": [ 
				{
					"name":     "Alex Emshanov",
					"booking":  "ADADADAD"
				},
				{
					"name":     "Alexandra Emshanova",
					"booking":  "ADADADAD"
				},
			 {
					"name":     "Avrora Emshanova",
					"booking":  "ADADADAD"
				},
		] 
	}, 
	{ 
		"flightNumber": "QR335", 
		"passengers": [ 
				{
					"name":     "Ivan Lapshin",
					"booking":  "QWERT"
				},
				{
					"name":     "Macaw Macaw",
					"booking":  "QWERT"
				},
				{
					"name": "Macaw1 Macaw1",
					"booking":  "QWERT"
				},
		] 
	},
	{ 
		"flightNumber": "BB554", 
		"passengers": [ 
				{
					"name":     "Parrot",
					"booking":  "TYY"
				},
				{
					"name":     "Monkey",
					"booking":  "TYY"
				},
				{
					"name": "Piton",
					"booking":  "TYY"
				},
				{
					"name": "Elephan",
					"booking":  "TYY"
				},
		] 
	}  
]


function parsingFlights(){
	for (var i=0; i<listOfFlights.length; i++){
		var fNumber = listOfFlights[i].flightNumber
		document.write("<div class='choice' onclick='f(this)'>"+fNumber+"</div>")
	}
}


// function removePassengersComponent() {
//   var el = document.getElementById('passengers');
//   el.parentNode.removeChild(el);
// }


function f(el){
	console.log(el.innerHTML)
	for (i=0; i<listOfFlights.length; i++){
	  	for(j=0; j<listOfFlights[i].passengers.length; j++){
	    	if(document.getElementById("dev")){
	      		document.getElementById("dev").parentNode.removeChild(document.getElementById("dev"))
	    	}
	  	}
	}if(!document.getElementById("dev")){
		for (i=0; i<listOfFlights.length; i++){
			if(listOfFlights[i].flightNumber === el.innerHTML){
				for(j=0; j<listOfFlights[i].passengers.length; j++){
             			document.getElementsByTagName("td")[1].innerHTML += '<span class="passengers" id="dev">'+
             				listOfFlights[i].passengers[j].name+'<span/>  <span class="bookings" id="dev">'+
             				listOfFlights[i].passengers[j].booking+'</span>'+'<br>'
				}
			}
		}
	}
}












