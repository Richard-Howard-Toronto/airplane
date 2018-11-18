// start server

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  if(xhr.status === 200) {
  const response = xhr.response;
  console.log(response);
  console.log('response is type of', typeof response)

    let jsonfile = '{ "name":"John", "age":30, "city":"New York"}'
    var obj = JSON.parse(jsonfile);
    console.log(obj)

    var json = '{"result":true, "count":42}';
    obj = JSON.parse(json);
    console.log(obj.count);

    const jsonplane = '{"Year": "2008","Month": "1","DayofMonth": "3","DayOfWeek": "4"}';
    obj1 = JSON.parse(jsonplane);
    console.log(obj1)

    var eljsonPlane = document.getElementById('eljsonPlane')
    eljsonPlane.innerHTML = obj1;

    var elResponse = document.getElementById('divResponse')
    elResponse.innerHTML = response;

  }
};



xhr.open('GET', 'airlinedata.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
