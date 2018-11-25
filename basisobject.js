function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    console.log('Hi! I\'m ' + this.name + '.');
  };
  return obj;
}

var richard = createNewPerson('Richard');
richard.name;
richard.greeting()

createNewPerson()


for (let item in obj[key]) {
    console.log(`Key is ${item} and value is ${obj[key][item]}`);


    $('div').after('<ol id="notice">ol:id=notice</p>');
    $('ol#notice').before('output: ',  item, ':' ,obj[key][item],' , ');

    if (obj[key][item]==2361) {
      console.log('obj FOUND! flightnum is 2361')
      $("ol").css("color", "red");
      $("ol").css("font-size", "40px");
      $("ol").text("flight found!!!");
    }

}
