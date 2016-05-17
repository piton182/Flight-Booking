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

function removePassengersComponent() {
  var el = document.getElementById('passengers');
  el.parentNode.removeChild(el);
}


function parsingFlights(){
	var flightNumber = listOfFlights.map(function(flightsList){
		return document.write("<div class='choice' onclick='onFlightClick(this)'>"+flightsList.flightNumber+"</div>")
	})
}

function onFlightClick(el){
	console.log(el.innerHTML)
	var test = listOfFlights.map(function(passList, i){
	return document.getElementsByTagName("td")[1].innerHTML += '<span class="passengers" id="passengers">'+
     				passList.passengers[i].name+'<span/>  <span class="bookings" id="passengers">'+
     				passList.passengers[i].booking+'</span>'+'<br>'
	
	});
}












