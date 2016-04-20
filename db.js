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


function f(el) {
  for (var i=0; i<listOfFlights.length; i++){
    for(var j = 0; j<listOfFlights[i].passengers.length; j++){
      if(listOfFlights[i].flightNumber === el.innerHTML){
  			if(listOfFlights[i].passengers[j].name && listOfFlights[i].passengers[j].booking){
          document.write("<tr>","<td>")
          document.write(listOfFlights[i].passengers[j].name)
          document.write("</td>","<td>")
          document.write(listOfFlights[i].passengers[j].booking)
          document.write("</td>","</tr>")
      	}
    	}
  	}
	}
}       







