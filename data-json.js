// start server

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  if(xhr.status === 200) {
  const response = xhr.response;
  console.log(response);
  console.log('response is type of', typeof response)

  var elResponse = document.getElementById('divResponse')
  elResponse.innerHTML = response;
  
  }
};



xhr.open('GET', 'airlinedata.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
