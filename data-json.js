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
  console.log('response is type of', typeof response)

  var obj = JSON.parse(response);
  console.log('obj is typeof', typeof obj)
  console.log('there is a length of', obj.length,' flights')

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
      console.log('map it!', map);

  }

  $('#myDivFlightsGoingTo').click(function(){
    console.log('in #myDivFlightsGoingTo');

    Object.keys(obj).forEach(key => {

        const flight = obj[key];

        const summaryOutput = Object.entries(flight).forEach(([key, value]) => (`${key}: ${value}`))


          if (flight.Dest==="PIT") {
            console.log('!!!!the flight destination is', flight.Dest);
            console.log('flight Number is', flight.FlightNum);
            console.log('flight leaves at: ', flight.DepTime)

          // the jquery stuff

            var $flightDest = flight.Dest;
            var $flightNum = flight.FlightNum;

          // this code adds a zero if the clock isn't four digits

            flight.DepTime = ( flight.DepTime < 1000 ? "0" : "" ) + flight.DepTime;
            var $flightdepartureTime = flight.DepTime;

          // checks to see if the plane left.


            if (flight.DepTime > 1200) {
              var timeLeft = flight.DepTime - 1200;
              flightMsg = `.  Note: Plane has not departed and you have ${timeLeft} minutes to catch it`;
            } else {
              flightMsg = '.  Note: Plane has departed.';
            }

          // writes the output to DOM

            console.log('$flightnumber is', $flightdepartureTime)
            var $newListItem1 = $('<li>' +'At: ' + $flightdepartureTime + ' HRs on Flight Number: ' + $flightNum + flightMsg + '</li>');
            $('ul:last').after($newListItem1);
            } else {
            return
            }

      // advises if flight has already left.




      // to find the quickest flight - A WORK IN PROGRESS

            var fltspeedResult =  Math.round((flight.Distance / flight.ActualElapsedTime*60));

              console.log(fltspeedResult)

              flightSpeedArray.push(fltspeedResult);

              console.log('the flightSpeedArray', flightSpeedArray)

              function lowest(array) {
                  let sortarray = (array.sort(function(a, b){return a-b}));
                  console.log(sortarray);
                  console.log(`index of array from 0 to ${sortarray.length-1}`);
                  console.log(`desired index spot is therefore ${sortarray.length-1}`);
                  console.log(`lowest number is ${sortarray[sortarray.length-(sortarray.length)]}.`);
                }

                lowest(flightSpeedArray)

      }) // end of Object.keys

  }); // end of function

}; // end of xhr.onload = function()


// these time and date functions are just useful.  I copied them from the web.



xhr.open('GET', 'airlinedata.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
