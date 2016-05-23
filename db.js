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

// I see it's underscore.js functions used in this file. But no underscore included here...
// This code will not work unless it's called from somewhere where underscore is included.
// Which makes this code dependent on the outer environment.
// Code should be isolated and independent from everything else.
// Only this makes the code reusable.
// (https://en.wikipedia.org/wiki/Reusability)

function parsingFlights(){
	// Variable names are very important for those who read code.
	// ...
	_.map(_.keys(listOfFlights), function(id){ // ... this is not an ID: it's a flight number! Here, in the function params ...
		// ... it's important to know what is coming, its meaning, instead of what it is going to be used for inside the function.
		// What is coming here as function param? Flight number!
		var newDiv;
		  {
			newDiv = document.createElement('div')
		    newDiv.id = id  						//I don't know how to generate id better...
		    // Here flightNumber is going to be used as an id. But it's still a flightNumber that is used for id.
		    // Flight number is a good-enough id for this... a long as flight numbers of the flights on the page are unique.
		    // What is absolutely unique (globally unique for this planet) is a combination {flightNumber, depDate}).
		    // There are no 2 or more flights with the same flight number and departing the same time.
		    // Imagine how confusing what that be in the world, if there could be so.
		    newDiv.innerHTML = id
			newDiv.onclick = function(){onFlightClick(this)}
			document.getElementById("flights").appendChild(newDiv)
	      }
	})
}

function constructPassengers(el){ // el? What is coming to this function? Well, looking at the calling code it's a list! List of passengers. And you name it 'el'?! Com'on!
	var newPBSpan // Again, variable names are very important for the reader (like me now). Do not make readers take guesses on what the hell 'PB' might stand for.
		{
			newPBSpan = document.createElement("span")
			newPBSpan.id = "passengers"	
			newPBSpan.innerHTML = 'Passenger Name'+" "+'Booking Number'
		}
		
	_.map(el, function(id){ // Not 'id'... It's a passenger here.
	var newPasSpan
		{
			newPasSpan = document.createElement("div") // newPasSpan
			newPasSpan.innerHTML = id.name+" "+id.booking // be cautious about using innerHtml (http://stackoverflow.com/questions/7476638/if-people-recommend-i-shouldnt-use-innerhtml-what-then-should-i-instead-use)
		}
		
		document.body.appendChild(newPBSpan)
		document.getElementById("passengers").appendChild(newPasSpan)
	})
}

function onFlightClick(el){ // el again... 
	console.log(el.innerHTML)
	removePassengersComponent()
	constructPassengers(listOfFlights[el.id].passengers)
	
}
