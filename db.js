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

// function insertAfter(parent, node, referenceNode) {
//     parent.insertBefore(node, referenceNode.nextSibling);
// }


function parsingFlights(){
	var flightNumber = listOfFlights.map(function(flightsList){ 
			var newDiv;
		  {
			newDiv = document.createElement('div')
			newDiv.id = flightsList.flightNumber         //I don't know how to generate id...
			newDiv.innerHTML = flightsList.flightNumber
			newDiv.onclick = function(){onFlightClick(this)}
			document.getElementById("flights").appendChild(newDiv)
	      }
		flightsList.passengers.map(function(passList){
			var newPasSpan
			{
				newPasSpan = document.createElement("div")
				newPasSpan.innerHTML = passList.name+"  "+passList.booking
				document.getElementById("passengers").appendChild(newPasSpan)
			}
		})
	})
}

function constructPassengers(el){
	listOfFlights.map(function(flightList){
	 if(flightList.flightNumber === el){
		 	flightList.passengers.map(function(passList){
		 		var newSpan 
		 		{
		 			newSpan    = document.createElement('span')
		 			newSpan.id = "passengers"	
		 		} 
		 	var div = document.createElement('div')
		 	div.innerHTML = passList.name+"  "+passList.booking
		 	document.getElementById("flights").appendChild(div)

		 	});
	 	}
	})
}


function onFlightClick(el){
	console.log(el.innerHTML)
	removePassengersComponent()
	constructPassengers(el.innerHTML)
}








// как передавать уникальные id?