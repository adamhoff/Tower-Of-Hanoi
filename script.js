//Variable for canvas to create elements
var canvas = $("#canvas");

var green = canvas.drawRect({
  name: 'greenBox',
  layer: true,
  index: 2,
  draggable: true,
  fillStyle: 'green',
  strokeStyle: 'black',
  x: 200, y:320,
  width: 225, height: 30,
  cornerRadius: 10,
  position: 1
});
var red = canvas.drawRect({
  name: 'redBox',
  layer: true,
  index: 2,
  draggable: true,
  fillStyle: 'red',
  strokeStyle: 'black',
  x: 200, y:290,
  width: 200, height: 30,
  cornerRadius: 10,
  position: 2
});
var blue = canvas.drawRect({
  name: 'blueBox',
  layer: true,
  index: 2,
  draggable: true,
  fillStyle: 'blue',
  strokeStyle: 'black',
  x: 200, y:260,
  width: 175, height: 30,
  cornerRadius: 10,
  position: 3
});
var yellow = canvas.drawRect({
  index: 2,
  name: 'yellowBox',
  type: 'rectangle',
  layer: true,
  draggable: true,
  fillStyle: 'yellow',
  strokeStyle: 'black',
  x: 200, y:230,
  width: 150, height: 30,
  cornerRadius: 10,
  position: 4
});
var rod = canvas.drawLine({
  strokeStyle: 'brown',
  index: 0,
  layer: true,
  strokeWidth: 20,
  x1: 200, y1: 320,
  x2: 200, y2: 50
});
var rod2 = canvas.drawLine({
  strokeStyle: 'brown',
  index: 0,
  layer: true,
  strokeWidth: 20,
  x1: 500, y1: 320,
  x2: 500, y2: 50
});
var rod3 = canvas.drawLine({
  strokeStyle: 'brown',
  index: 0,
  layer: true,
  strokeWidth: 20,
  x1: 800, y1: 320,
  x2: 800, y2: 50
});

var line = canvas.drawLine({
  strokeStyle: 'black',
  index: 0,
  layer: true,
  strokeWidth: 2,
  x1: 350, y1: 400,
  x2: 350, y2: 50
});
var line2 = canvas.drawLine({
  strokeStyle: 'black',
  index: 0,
  layer: true,
  strokeWidth: 2,
  x1: 650, y1: 400,
  x2: 650, y2: 50
});
