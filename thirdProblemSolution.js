function LetterToNumber(a) {
  var box = ["", "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
  return box.indexOf(a);
}

function NumberToLetter(n) {
  var box = ["", "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
  return box[n];
}
function isShipSunk(co, T) {
  var crossCount  = 0;
  co.forEach(function (v) {
    if((T.indexOf(v) === -1) === false){
      crossCount = crossCount + 1;
    }
  })
  return crossCount === co.length;
}
function isShipHit(co, T) {
  var crossCount  = 0;
  co.forEach(function (v) {
    if((T.indexOf(v) === -1) === false){
      crossCount = crossCount + 1;
    }
  });
  var Empty = crossCount === 0;
  var Sink = crossCount === co.length;
  console.log(crossCount , co.length)
  console.log(Empty, Sink, !Empty && !Sink)
  return !Empty && !Sink;
}
function generateAllCoordinatesOfShip(ship) {
  var x1 = ship.split(" ")[0];
  var x2 = ship.split(" ")[1];
  var XLength = x2[0] - x1[0] + 1;
  var YLength = LetterToNumber(x2[1]) - LetterToNumber(x1[1]) + 1;

  var AllCord = [];

  for (var i = 0; i < XLength; i++) {
    for (var j = 0; j < YLength; j++) {
      AllCord.push(parseInt(x1[0]) + i + "" + NumberToLetter(parseInt(LetterToNumber(x1[1])) + j));
    }
  }
  return AllCord;

}

function solution(N, S, T) {

  var TotalSunk = 0;
  var TotalHit = 0;

  S.split(",").map(function (ship) {
    var allShipCo = generateAllCoordinatesOfShip(ship);

    var isSunk = isShipSunk(allShipCo, T);
    if(isSunk){
      TotalSunk = TotalSunk + 1;
    }
    var isHit = isShipHit(allShipCo, T);
    if(isHit){
      TotalHit = TotalHit + 1;
    }
  });

  return "" + TotalSunk + "," + TotalHit;
}