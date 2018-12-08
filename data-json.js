// don't forget to start server



// this is code I copied to create the footer clock

function updateClock() {
    var currentTime = new Date ();
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  if(xhr.status === 200) {
  const response = xhr.response;

  var obj = JSON.parse(response);

  var flightSpeedArray = [ ]
  var flightNumArray = [ ]

  Object.keys(obj).forEach(key => {

  const flight = obj[key];

  $('#myDiv').click(function(){
      const summaryOutput = Object.entries(flight).forEach(([key, value]) => console.log(`${key}: ${value}`))
            // this returns the flight numbers
      var $tailfin = flight.TailNum;
      var $destination = flight.Dest;
      var $newListItem = $('<li>' + $tailfin + '</li>');
      $('ol:last').after($newListItem);
      })
  });

// to sort the array

      const result = Object.entries(obj).sort((a, b) => a - b);
      // console.log('the result', result)

// iterate through the array

      const map = new Map(Object.entries(obj));


  }

  $('#myDivFlightsGoingTo').click(function(){
    console.log('in #myDivFlightsGoingTo');

    Object.keys(obj).forEach(key => {
        const flight = obj[key];
        const summaryOutput = Object.entries(flight).forEach(([key, value]) => (`${key}: ${value}`))

          if (flight.Dest==="PIT") {

            var $flightDest = flight.Dest;
            var $flightNum = flight.FlightNum;

          // this code adds a zero if the clock isn't four digits
            let hours = 12
            flight.DepTime = ( flight.DepTime < hours ? "0" : "" ) + flight.DepTime;
            var $flightdepartureTime = flight.DepTime;

            var sTest = flight.DepTime;
              var iCount = 0;
              for (iIndex in sTest) {
                  if (!isNaN(parseInt(sTest[iIndex]))) {
                      iCount++;
                  }
              }

              console.log(iCount);

            if (iCount==3) {
              var numDigits = 3;
              var re = new RegExp("\\d{3," + numDigits + "}", "g");
              var result = flight.DepTime.toString().match(re);
              var str = flight.DepTime
              var result2 = str.match(/.{1}/g);
              var flighthours = result2[0]
              var flightminutes = result2.slice(Math.max(result2.length - 2, 0)).join('')

            } else {
              var numDigits = 2;
              var re = new RegExp("\\d{1," + numDigits + "}", "g");
              var result = flight.DepTime.toString().match(re);
              console.log('result with four #s',result)
              var flighthours = result[0]
              var flightminutes = result[1]
              console.log('flighthours',flighthours)
              console.log('flightminutes',flightminutes)
            }


/// to pass in the values

            year = flight.Year;
            month = flight.Month-1;
            day = flight.DayofMonth;
            hour = flighthours;
            minute = flightminutes;
            second = 0;
            millisecond = 0;

            flightime = new Date(year, month, day, hour, minute, second, millisecond)

            var dateObjectNow = new Date();
            var dateObjectNowString = dateObjectNow.toString();

            const diff = Math.round((Date.parse(flightime) - Date.parse(dateObjectNowString))/ (1000 * 60 * 60))

            console.log('diff',diff)

            if (diff > 0 ) {
              msg = `   You have ${diff} hours to catch your flight.`
            } else if (diff > 0 || diff < 24) {
              msg = `  We are sorry, you missed your flight by ${-diff} hours.`
            } else {
              msg = `  We are sorry, your flight left ${diff} days ago.`
            }

          // writes the output to DOM

            var $newListItem1 = $('<li>' +' At: ' + $flightdepartureTime + ' HRs.  On Flight Number: ' + $flightNum + '.' + msg +'</li>');
            $('ul:last').after($newListItem1);
            } else {
            return
            }


      // to find the quickest flight - A WORK IN PROGRESS

            var fltspeedResult =  Math.round((flight.Distance / flight.ActualElapsedTime*60));

              flightSpeedArray.push(fltspeedResult);

              function lowest(array) {
                  let sortarray = (array.sort(function(a, b){return a-b}));
                  console.log(sortarray);

                  console.log(`lowest number is ${sortarray[sortarray.length-(sortarray.length)]}.`);

                  var sortedArray = sortarray[sortarray.length-(sortarray.length)]

                  $('#findShortestFlight').click(function(){
                      var $newListItem2 = $('<li>'+ 'Flight time in minutes is: ' + sortedArray + ' on flight ' + $flightNum + '</li>');
                      $('ol').after($newListItem2);
                  })
                }

                lowest(flightSpeedArray)




      }) // end of Object.keys

  }); // end of function

}; // end of xhr.onload = function()


// these time and date functions are just useful.  I copied them from the web.



xhr.open('GET', 'airlinedata.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
