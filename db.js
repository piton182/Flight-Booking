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
	} 
]


function parsingFlights(){
	for (var i=0; i<listOfFlights.length; i++){
		if(listOfFlights[i].flightNumber){
			document.write("<tr>",'<td class="choice" onclick="f(this)">')
			document.write(listOfFlights[i].flightNumber)
			document.write("</td>","</tr>")
		}
	}
}

function f(el){
	var test = el.innerHTML
	console.log(test)
		for (var i=0; i<listOfFlights.length; i++){
			if(listOfFlights[i].flightNumber === test){
				for(var j = 0; j<listOfFlights[i].passengers.length; j++){
					if(listOfFlights[i].passengers[j].name && listOfFlights[i].passengers[j].booking){
		
						if(document.getElementById("dev") !== null){
							var elem = document.getElementById("dev")
							elem.parentNode.removeChild(elem)		   
					
							console.log("----------------------------")
							console.log(listOfFlights[i].flightNumber === test)
							console.log("----------------------------")
					
							var newTr = document.createElement('tr')
							newTr.id = 'dev'
							document.getElementsByTagName("tbody")[2].appendChild(newTr)
				   		var newTd = document.createElement('td')
							document.getElementById('dev').appendChild(newTd)
							newTd.innerHTML = listOfFlights[i].passengers[j].name
				   		var newTd1 = document.createElement('td')
							document.getElementById('dev').appendChild(newTd1)
							newTd1.innerHTML = listOfFlights[i].passengers[j].booking
						}
					}
				}
			}
		}
	}
	


function parsingPassengers(){
	for (var i=0; i<listOfFlights.length; i++){
		if(listOfFlights[i].flightNumber === "AB1322"){
				for(var j = 0; j<listOfFlights[i].passengers.length; j++){
					if(listOfFlights[i].passengers[j].name && listOfFlights[i].passengers[j].booking){
							document.write("<tr id='dev'>","<td>")
							document.write(listOfFlights[i].passengers[j].name)
							document.write("</td>","<td>")
							document.write(listOfFlights[i].passengers[j].booking)
							document.write("</td>","</tr>")
						}
				}
			}
	}
}
			







