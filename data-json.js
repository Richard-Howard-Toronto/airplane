// start server

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  if(xhr.status === 200) {
  const response = xhr.response;
  console.log(response);
  console.log('response is type of', typeof response)

  // THIS WILL NOT WORK

  // const planeobj = JSON.parse(response);
  // console.log('plane output is ', planeobj);




    const jsonplane = '{"Year": "2018","Month": "99","DayofMonth": "77","DayOfWeek": "4"}';
    const obj1 = JSON.parse(jsonplane);
    console.log('obj1 is ', obj1)
    console.log(typeof obj1)

    // iterating through the object of 'obj1', this works.

      for (let item in obj1) {

          console.log(`The value is ${obj1[item]} of key  ${item}`);

          var eljsonPlane = document.getElementById('eljsonPlane')
          eljsonPlane.innerHTML = item;

      }

    var elResponse = document.getElementById('divResponse')
    elResponse.innerHTML = response;

  }
};



xhr.open('GET', 'airlinedata.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
