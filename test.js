// Dmitry
var db = {
  	"flight1":{
  		flightNumber: "flight1",
    	passengers: [ {id: "pax1"}, {id: "pax2"}, {id: "pax3"}]
  	},
  	"flight2":{
	  	flightNumber: "flight2",
	    passengers: [ {id: "pax4"}, {id: "pax5"}, {id: "pax6"}]
  	},
  	"flight3":{
	  	flightNumber: "flight3",
	    passengers: [ {id: "pax7"}, {id: "pax8"}, {id: "pax9"}]
  	}
}

function removePassengersComponent() {
  var el = document.getElementById('passengers');
  el.parentNode.removeChild(el);
}




function constructPassengersComponent(passengers) {
	function createPassengersContainer(id) {
	  	var newDiv = document.createElement('div');
	    newDiv.id = id;
	    console.log(newDiv.id)
	    return newDiv;
  	}


	function appendPassengersItems(passengerContainer, passengers) {
	    passengers.map(function(v) {
	    	var newSpan;
	      {
	        newSpan = document.createElement('span');
	        newSpan.id = v.id;
	        newSpan.className = "pax";
	        newSpan.textContent = v.id;
	      }
	      passengerContainer.appendChild(newSpan);
	    });
	  }
	
	var newPassengersContainer = createPassengersContainer("passengers");
  	
  	appendPassengersItems(newPassengersContainer, passengers);
  
  	document.body.appendChild(newPassengersContainer);
}


function onFlightClick(flightItem) {
	removePassengersComponent();
  	constructPassengersComponent(db[flightItem.id].passengers);
  	console.log(db[flightItem.id].passengers)
}