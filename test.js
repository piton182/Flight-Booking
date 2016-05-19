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


//---------------------------------------------------------------------------------------------------------------------------------   2
function constructPassengersComponent(passengers) {
  console.log("constructPassengersComponent:", passengers)
//---------------------------------------------------------------------------------------------------------------------------------   3
  function createPassengersContainer(id) {
    console.log("createPassengersContainer:",id)
	  	var newDiv = document.createElement('div');
	    newDiv.id = id;
      console.log("newDiv.id:",id)
	    return newDiv;
  	}


	function appendPassengersItems(passengerContainer, passengers) {
	    passengers.map(function(v) {
        console.log("v:",v)
	    	var newSpan;
	      {
	        newSpan = document.createElement('span');
	        newSpan.id = v.id;
          console.log("newSpan.id:", v.id)
	        newSpan.className = "pax";
	        newSpan.textContent = v.id;
          console.log("newSpan.textContent:", v.id)
	      }
	      passengerContainer.appendChild(newSpan);
	    });
	  }
//---------------------------------------------------------------------------------------------------------------------------------   3	
	var newPassengersContainer = createPassengersContainer("passengers");
  
  	
  	appendPassengersItems(newPassengersContainer, passengers);
    console.log("appendPassengersItems(newPassengersContainer, passengers)", newPassengersContainer, passengers)
  
  	document.body.appendChild(newPassengersContainer);
}

//---------------------------------------------------------------------------------------------------------------------------------   1
function onFlightClick(flightItem) {
  console.log("flightItem:",flightItem)         
	removePassengersComponent();
  	constructPassengersComponent(db[flightItem.id].passengers);
}