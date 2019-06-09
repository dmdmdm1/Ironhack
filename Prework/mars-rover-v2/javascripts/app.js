// Rover Object Goes Here

var rover = {
  direction: "N",
  x: 0, 
  y: 0,
  travelLog: [ "x: 0, y: 0"],
};
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N": 
      rover.direction = "W"
      console.log("The rover is now facing West");
      break;

    case "W": 
      rover.direction = "S"
      console.log("The rover is now facing South");
      break;

    case "S": 
      rover.direction = "E"
      console.log("The rover is now facing East");
      break;

    case "E": 
      rover.direction = "N"
      console.log("The rover is now facing North");
      break;
  };
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N": 
      rover.direction = "E"
      console.log("The rover is now facing East");
      break;

    case "W": 
      rover.direction = "N"
      console.log("The rover is now facing North");
      break;

    case "S": 
      rover.direction = "W"
      console.log("The rover is now facing West");
      break;

    case "E": 
      rover.direction = "S"
      console.log("The rover is now facing South");
      break;
  };    
}

function moveForward(rover){
  console.log("moveForward was called");
  switch(rover.direction) {
    case "N": 
      rover.y = rover.y - 1;
      console.log("The rover's position is  x: " + rover.x + ", y: " + rover. y);
      var position =  "x: " + rover.x + ", y: " + rover. y;
      rover.travelLog.push(position);
      break;

    case "W": 
      rover.x = rover.x - 1;
      console.log("The rover's position is  x: " + rover.x + ", y: " + rover. y);
      var position =  "x: " + rover.x + ", y: " + rover. y;
      rover.travelLog.push(position);
      break;

    case "S": 
      rover.y = rover.y + 1;
      console.log("The rover's position is  x: " + rover.x + ", y: " + rover.y);
      var position =  "x: " + rover.x + ", y: " + rover. y;
      rover.travelLog.push(position);
      break;

    case "E": 
      rover.x = rover.x + 1;
      console.log("The rover's position is  x: " + rover.x + ", y: " + rover.y);
      var position =  "x: " + rover.x + ", y: " + rover. y;
      rover.travelLog.push(position);
      break;
  };   
}

function moveBackwards(rover){
  console.log("moveBackwards was called");
  switch(rover.direction) {
    case "N": 
      rover.y = rover.y + 1;
      console.log("The rover's position is  x: " + rover.x + ", y: " + rover. y);
      var position =  "x: " + rover.x + ", y: " + rover. y;
      rover.travelLog.push(position);
      break;

    case "W": 
      rover.x = rover.x + 1;
      console.log("The rover's position is  x: " + rover.x + ", y: " + rover. y);
      var position =  "x: " + rover.x + ", y: " + rover. y;
      rover.travelLog.push(position);
      break;

    case "S": 
      rover.y = rover.y - 1;
      console.log("The rover's position is  x: " + rover.x + ", y: " + rover.y);
      var position =  "x: " + rover.x + ", y: " + rover. y;
      rover.travelLog.push(position);
      break;

    case "E": 
      rover.x = rover.x - 1;
      console.log("The rover's position is  x: " + rover.x + ", y: " + rover.y);
      var position =  "x: " + rover.x + ", y: " + rover. y;
      rover.travelLog.push(position);
      break;
  };   
}

var input = 'rffrfflfrff';

function listOfCommands(input) {
  input = input.split("");
  input.forEach(function(letter) {
  switch(letter) {
    case "l":
    turnLeft(rover);
     break;

    case "r":
    turnRight(rover);
    break;

    case "f":
    moveForward(rover);
    break;

    case "b":
    moveBackwards(rover);
    break;
  };
  });
}

function showTravelLog(rover) {
console.log(rover.travelLog);
};