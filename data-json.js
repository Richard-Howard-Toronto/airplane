// start server



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

      // function summaryofAllFlights goes through the flight object and shows the key value pairs for every object

        function summaryofAllFlights() {
          const summaryOutput = Object.entries(flight).forEach(([key, value]) => console.log(`${key}: ${value}`))

          var $newListItem = $('<li></li>');
          $('li:last').after($newListItem);

          var msg = flight.TailNum;
          var el = document.getElementById('demo');
          el.innerHTML = msg;

      // this js is to send the information to the browser

        }


      summaryofAllFlights();


          // console.log(flight)
          // console.log('the flight time is', flight.DepTime)
          // console.log('the flight number is', flight.FlightNum)
          // console.log('the flight destination is', flight.Dest)
          // console.log('flight is', typeof flight)

          var fltspeedResult =  Math.round((flight.Distance / flight.ActualElapsedTime*60));

          function finddest(dest) {
            if (flight.Dest===dest) {
              console.log('!the flight destination is', flight.Dest)
              flightSpeedArray.push(fltspeedResult);
              flightNumArray.push(flight.FlightNum);

            } else {
              console.log('')
            }
          }

        finddest('MCO')



      });




      let a = flightSpeedArray
      let b = flightNumArray
      let c = {};

      for (let i=0; i<=a.length; i++) {
          if (typeof c[a[i]] === 'undefined') {
              c[a[i]] = b[i];

          } else {
              if (c[a[i]] instanceof Array === false) {
                  c[a[i]] = [c[a[i]]];
              }
              c[a[i]].push(b[i]);
          }

          console.log('distance and flt number are: ',c);

          // this goes into the flagged flights and lists the pairs

          Object.entries(c).forEach(([key, value]) => console.log(`${key}: ${value}`))

      }

// end of for loop to look for a specific flight

      for (var i = 0; i < 10; i++) {
        obj[i]


      }

// to sort the array

      const result = Object.entries(obj).sort((a, b) => a - b);
      console.log('the result', result)

// iterate throug the array

      const map = new Map(Object.entries(obj));
      console.log(map); // Map { foo: "bar", baz: 42 }




  }
};






xhr.open('GET', 'airlinedata.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
