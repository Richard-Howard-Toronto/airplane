// start server

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  if(xhr.status === 200) {
  const response = xhr.response;
  console.log(response);
  console.log('response is type of', typeof response)



    const obj1 = {
      "Year": "2008",
      "Month": "1",
      "DayofMonth": "3",
      "DayOfWeek": "4",
      "DepTime": "932",
      "CRSDepTime": "930",
      "ArrTime": "1152",
      "CRSArrTime": "1145",
      "UniqueCarrier": "WN",
      "FlightNum": "2361",
      "TailNum": "N348SW",
      "ActualElapsedTime": "140",
      "CRSElapsedTime": "135",
      "AirTime": "124",
      "ArrDelay": "7",
      "DepDelay": "2",
      "Origin": "MCO",
      "Dest": "PIT",
      "Distance": "834",
      "TaxiIn": "7",
      "TaxiOut": "9",
      "Cancelled": "0",
      "CancellationCode": null,
      "Diverted": "0",
      "CarrierDelay": "NA",
      "WeatherDelay": "NA",
      "NASDelay": "NA",
      "SecurityDelay": "NA",
      "LateAircraftDelay": "NA"};

    console.log('obj1 is ', obj1)
    console.log(typeof obj1)

    // iterating through the object of 'obj1', this works.

      for (let item in obj1) {

          console.log(`The value is ${obj1[item]} of key  ${item}`);

          // var eljsonPlane = document.getElementById('eljsonPlane')
          // eljsonPlane.innerHTML = item;

          $('div').after('<ol id="notice">ol:id=notice</p>');
          $('ol#notice').before('output:',  item,' ',obj1[item],', ');

          if (obj1[item]==2361) {
            console.log('FOUND! flightnum is 2361')
            $("ol").css("color", "red");
            $("ol").css("font-size", "30px");
            $("ol").text("flight found!!!");
          }
      }

    var elResponse = document.getElementById('divResponse')
    elResponse.innerHTML = response;

  }
};



xhr.open('GET', 'airlinedata.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
