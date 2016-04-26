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
		if(listOfFlights[i].flightNumber){
			document.write("<tr>",'<td class="choice" onclick="f(this)">'+listOfFlights[i].flightNumber+"</td>","</tr>")
		}
	}
}

function f(el){
	var test = el.innerHTML
	console.log(test)
	for (var i=0; i<listOfFlights.length; i++){
	  	for(var j =0; j<listOfFlights[i].passengers.length; j++){
	    	if(document.getElementById("dev")){
	      		document.getElementById("dev").parentNode.removeChild(document.getElementById("dev"))
	    	}
	  	}
	}if(!document.getElementById("dev")){
		for (var i=0; i<listOfFlights.length; i++){
			if(listOfFlights[i].flightNumber === test){
				for(var j =0; j<listOfFlights[i].passengers.length; j++){
					if(listOfFlights[i].passengers[j].name && listOfFlights[i].passengers[j].booking){
             			document.getElementsByTagName("tbody")[2].innerHTML += '<tr id="dev"><td>'+listOfFlights[i].passengers[j].name+'</td><td>'+listOfFlights[i].passengers[j].booking+'</td></tr>'	
					}
				}
			}
		}
	}
}


function parsingPassengers(){
	for (var i=0; i<listOfFlights.length; i++){
		if(listOfFlights[i].flightNumber){
				for(var j = 0; j<listOfFlights[i].passengers.length; j++){
					if(listOfFlights[i].passengers[j].name && listOfFlights[i].passengers[j].booking){
              			document.getElementsByTagName("tbody")[2].innerHTML += '<tr id="dev"><td>'+listOfFlights[i].passengers[j].name+'</td><td>'+listOfFlights[i].passengers[j].booking+'</td></tr>'
					}
				}
		}
	}
}
			







