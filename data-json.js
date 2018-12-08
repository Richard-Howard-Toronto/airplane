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

// iterate through the array, just for fun...

      const map = new Map(Object.entries(obj));

  }

  $('#myDivFlightsGoingTo').click(function(){
    console.log('in #myDivFlightsGoingTo');

    Object.keys(obj).forEach(key => {
        const flight = obj[key];
        const summaryOutput = Object.entries(flight).forEach(([key, value]) => (`${key}: ${value}`))

    //I should make this dynamic so you can pick a location.

          if (flight.Dest==="PIT") {

            var $flightDest = flight.Dest;
            var $flightNum = flight.FlightNum;

          // this code adds a zero if the clock isn't four digits

            let hours = 12
            flight.DepTime = ( flight.DepTime < hours ? "0" : "" ) + flight.DepTime;
            var $flightdepartureTime = flight.DepTime;

          // see if the time is 3 digits or four, because you have to treat the hours and minutes separately, including making adjustments to the minutes for base 60.

            var sTest = flight.DepTime;
              var iCount = 0;
              for (iIndex in sTest) {
                  if (!isNaN(parseInt(sTest[iIndex]))) {
                      iCount++;
                  }
              }

          // if three digits, split the time like 934 into 9 and 34
          // if four digits, split the time like 1822 into 18 and 22

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


      /// to pass in the values to your date object.  the issue is that the JSON file had the time as a string "845" or "1634" so you have to recreate the entire date object so you can substract it from the Date now object.

            year = flight.Year;
            month = flight.Month-1;
            day = flight.DayofMonth;
            hour = flighthours;
            minute = flightminutes;
            second = 0;
            millisecond = 0;

            flightime = new Date(year, month, day, hour, minute, second, millisecond)


            // flight time CAREFUL ! flightime has only one t. bad spelling.

            var flightObjectMonth = flightime.getMonth();
            var flightObjectDay = flightime.getDay();
            var flightObjectHours = flightime.getHours();
            var flightObjectMinutes = flightime.getMinutes()

            // time now

            var dateObjectNow = new Date();

            var dateObjectNowMonth = dateObjectNow.getMonth();
            var dateObjectNowDay = dateObjectNow.getDay();
            var dateObjectNowHours = dateObjectNow.getHours();
            var dateObjectNowMinutes = dateObjectNow.getMinutes()


            var dateObjectNowString = dateObjectNow.toString();

        // here you find the difference between flight time and NOW in milliseconds, then convert to hours and minutes.

            const diff = (Date.parse(flightime) - Date.parse(dateObjectNowString))/ (1000 * 60 * 60)


            var diffHour = Math.trunc(flightObjectHours) - Math.trunc(dateObjectNowHours);
            var diffMinute = flightObjectMinutes - dateObjectNowMinutes;

            console.log('diffHour', diffHour)
            console.log('diffMinute', diffMinute)

            // but wait, if your flight was at 2:30 and the time is now 1:40, you can't say your flight leaves in one hour and minus ten minutes; you have to adjust.

            // note that you have to check to see if diffHour > 0.  If not, then the flight left and you don't need to do the adjustment.

            if (diffMinute < 0 && diffHour > 0) {
              diffHour = diffHour - 1;
              diffMinute = diffMinute + 60;
            } else {
              // do nothing and keep going
            }

            //

            if (diff > 0 && dateObjectNowDay == flightObjectDay ) {
              msg = `   You have ${diffHour} hours and ${diffMinute} minutes to catch your flight.`
            } else if (diffHour > 0 || diffHour < 24 && dateObjectNowDay == flightObjectDay  ) {
              msg = `  We are sorry, you missed your flight by ${-diffHour} hours and ${diffMinute} minutes.`
            } else {
              msg = `  OH NO!  Your flight left ${Math.trunc(-diff/24)} days ago in month ${flightObjectMonth} and currently we are in month ${dateObjectNowMonth}.`
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
                  // console.log(sortarray);

                  // console.log(`lowest number is ${sortarray[sortarray.length-(sortarray.length)]}.`);

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
