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
