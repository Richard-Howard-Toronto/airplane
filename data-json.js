// start server

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  if(xhr.status === 200) {
  const response = xhr.response;
  console.log(response);
  console.log('response is type of', typeof response)


      const obj2 = [{
        "Year": "2008",
        "Month": "1",
        "DayofMonth": "3",
        "DayOfWeek": "4",
        "DepTime": "932",
        "CRSDepTime": "930",
        "ArrTime": "1152",
        "CRSArrTime": "1145",
        "UniqueCarrier": "WN",
        "FlightNum": "1361",
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
        "LateAircraftDelay": "No"},{
        "Year": "2018",
        "Month": "2",
        "DayofMonth": "3",
        "DayOfWeek": "4",
        "DepTime": "932",
        "CRSDepTime": "930",
        "ArrTime": "11152",
        "CRSArrTime": "1145",
        "UniqueCarrier": "WN",
        "FlightNum": "361",
        "TailNum": "N348SW",
        "ActualElapsedTime": "140",
        "CRSElapsedTime": "135",
        "AirTime": "1214",
        "ArrDelay": "7",
        "DepDelay": "2",
        "Origin": "MCO",
        "Dest": "PIET",
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
        "LateAircraftDelay": "YES"},
        {
          "Year": "2038",
          "Month": "3",
          "DayofMonth": "3",
          "DayOfWeek": "4",
          "DepTime": "628",
          "CRSDepTime": "620",
          "ArrTime": "804",
          "CRSArrTime": "750",
          "UniqueCarrier": "WN",
          "FlightNum": "2361",
          "TailNum": "N428WN",
          "ActualElapsedTime": "96",
          "CRSElapsedTime": "90",
          "AirTime": "76",
          "ArrDelay": "14",
          "DepDelay": "8",
          "Origin": "IND",
          "Dest": "BWI",
          "Distance": "515",
          "TaxiIn": "3",
          "TaxiOut": "17",
          "Cancelled": "0",
          "CancellationCode": null,
          "Diverted": "0",
          "CarrierDelay": "NA",
          "WeatherDelay": "NA",
          "NASDelay": "NA",
          "SecurityDelay": "NA",
          "LateAircraftDelay": "NA"
        }
      ];

    console.log('obj2 is ', obj2)
    console.log(typeof obj2)

    // iterating through the object of 'obj1', this works.

      // for (let item in obj1) {
      //     console.log(`For obj1 the value is ${obj1[item]} of key  ${item}`);
      //     // var eljsonPlane = document.getElementById('eljsonPlane')
      //     // eljsonPlane.innerHTML = item;
      //




      Object.keys(obj2).forEach(key => {

          console.log('the obj2[key]is', obj2[key]);

          for (let item2 in obj2[key]) {
              console.log(`Key is ${item2} and value is ${obj2[key][item2]}`);


              $('div').after('<ol id="notice">ol:id=notice</p>');
              $('ol#notice').before('output: ',  item2, ':' ,obj2[key][item2],' , ');

              if (obj2[key][item2]==2361) {
                console.log('OBJ2 FOUND! flightnum is 2361')
                $("ol").css("color", "red");
                $("ol").css("font-size", "30px");
                $("ol").text("flight found!!!");
              }

          }



      });

    var elResponse = document.getElementById('divResponse')
    elResponse.innerHTML = response;

  }
};



xhr.open('GET', 'airlinedata.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
