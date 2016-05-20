var listOfFlights = {
	"AB1322":{
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
	"CD224":{ 
		flightNumber: "CD224",
		passengers: [ 
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
	"QR335":{ 
		flightNumber: "QR335", 
		passengers: [ 
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
	"BB554":{ 
		flightNumber: "BB554", 
		passengers: [ 
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
}

function removePassengersComponent() {
  var el = document.getElementById('passengers');
  el.parentNode.removeChild(el);
}

function parsingFlights(){
	_.map(_.keys(listOfFlights), function(id){
		var newDiv;
		  {
			newDiv = document.createElement('div')
		    newDiv.id = id  						//I don't know how to generate id better...
		    newDiv.innerHTML = id
			newDiv.onclick = function(){onFlightClick(this)}
			document.getElementById("flights").appendChild(newDiv)
	      }
	})
}

function constructPassengers(el){
	var newPBSpan
		{
			newPBSpan = document.createElement("span")
			newPBSpan.id = "passengers"	
			newPBSpan.innerHTML = 'Passenger Name'+" "+'Booking Number'
		}
		
	_.map(el, function(id){
	var newPasSpan
		{
			newPasSpan = document.createElement("div")
			newPasSpan.innerHTML = id.name+" "+id.booking
		}
		
		document.body.appendChild(newPBSpan)
		document.getElementById("passengers").appendChild(newPasSpan)
	})
}

function onFlightClick(el){
	console.log(el.innerHTML)
	removePassengersComponent()
	constructPassengers(listOfFlights[el.id].passengers)
	
}