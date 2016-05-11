// Dmitry
function removePassengersComponent() {
  var el = document.getElementById('passengers');
  el.parentNode.removeChild(el);
}




function constructPassengersComponent(passengers) {
	function createPassengersContainer(id) {
		console.log(function createPassengersContainer(id))
		console.log("---------------------------------")
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








function onFlightClick() {
	removePassengersComponent();
  var flight = {
  	flightNumber: "asdfsf",
    passengers: [ {id: "pax1"}, {id: "pax2"}, {id: "pax3"}]
  },
  {
  	flightNumber: "asdfsf",
    passengers: [ {id: "pax4"}, {id: "pax5"}, {id: "pax6"}]
  }
  constructPassengersComponent(flight.passengers);
}