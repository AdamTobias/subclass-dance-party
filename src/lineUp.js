var lineUp = function() {
  dancers.forEach(function(dancer, index) {
    dancer.setPosition("50%", ((index/(dancers.length-1))*70 + 15).toString() + "%")
  })
}

var pairUp = function() {
  var starters;
  var centerVertical = 50;
  var centerHorizontal = 50;
  var offset = 10;
  if(dancers.length === 1){
    dancers[0].setPosition(centerVertical.toString() + "%", centerHorizontal.toString() + "%");
  }

  if(dancers.length%2){
    starters = 2; 
    dancers[0].setPosition(centerVertical.toString() + "%", centerHorizontal.toString() + "%");
    dancers[1].setPosition(centerVertical.toString() + "%", (centerHorizontal+2).toString() + "%");
    dancers[2].setPosition(centerVertical.toString() + "%", (centerHorizontal-2).toString() + "%");

  } else {
    starters = 1; 
    dancers[0].setPosition(centerVertical.toString() + "%", (centerHorizontal-1).toString() + "%");
    dancers[1].setPosition(centerVertical.toString() + "%", (centerHorizontal+1).toString() + "%");
  }
  for (var i = starters+1; i < dancers.length; i+=2) {
    if((i - starters) % 8 === 0 || (i-starters) % 8 === 1){
      //top left
      topPosition = (centerVertical + offset * Math.ceil((i-starters)/8)).toString() + "%";
      leftPosition = (centerHorizontal - offset * Math.ceil((i-starters)/8));
      dancers[i].setPosition(topPosition, (leftPosition-1).toString() + "%");
      dancers[i+1].setPosition(topPosition, (leftPosition+1).toString() + "%");
    } else if ((i - starters) % 8 === 2 || (i - starters) % 8 === 3){
      //top right
      topPosition = (centerVertical + offset * Math.ceil((i-starters)/8)).toString() + "%";
      leftPosition = (centerHorizontal + offset * Math.ceil((i-starters)/8));
      dancers[i].setPosition(topPosition, (leftPosition-1).toString() + "%");
      dancers[i+1].setPosition(topPosition, (leftPosition+1).toString() + "%");
    } else if ((i - starters) % 8 === 4 || (i - starters) % 8 === 5){
      //bottom right
      topPosition = (centerVertical - offset * Math.ceil((i-starters)/8)).toString() + "%";
      leftPosition = (centerHorizontal + offset * Math.ceil((i-starters)/8));
      dancers[i].setPosition(topPosition, (leftPosition-1).toString() + "%");
      dancers[i+1].setPosition(topPosition, (leftPosition+1).toString() + "%");
    } else if ((i - starters) % 8 === 6 || (i - starters) % 8 === 7){
      //bottom left
      topPosition = (centerVertical - offset * Math.ceil((i-starters)/8)).toString() + "%";
      leftPosition = (centerHorizontal - offset * Math.ceil((i-starters)/8));
      dancers[i].setPosition(topPosition, (leftPosition-1).toString() + "%");
      dancers[i+1].setPosition(topPosition, (leftPosition+1).toString() + "%");
    }
  }
}