var canvas = $("#canvas");
var green = canvas.draw({
  type: 'rectangle',
  layer: true,
  draggable: true,
  fillStyle: 'green',
  x: 200, y:320,
  width: 225, height: 30
});
var red = canvas.draw({
  type: 'rectangle',
  layer: true,
  draggable: true,
  fillStyle: 'red',
  x: 200, y:290,
  width: 200, height: 30
});
var blue = canvas.draw({
  type: 'rectangle',
  layer: true,
  draggable: true,
  fillStyle: 'blue',
  x: 200, y:260,
  width: 175, height: 30
});
var yellow = canvas.draw({
  type: 'rectangle',
  layer: true,
  draggable: true,
  fillStyle: 'yellow',
  x: 200, y:230,
  width: 150, height: 30
});
var rod = canvas.drawLine({
  strokeStyle: 'brown',
  index: 0,
  layer: true,
  strokeWidth: 20,
  x1: 200, y1: 320,
  x2: 200, y2: 50
});
var rod = canvas.drawLine({
  strokeStyle: 'brown',
  index: 0,
  layer: true,
  strokeWidth: 20,
  x1: 500, y1: 320,
  x2: 500, y2: 50
});
var rod = canvas.drawLine({
  strokeStyle: 'brown',
  index: 0,
  layer: true,
  strokeWidth: 20,
  x1: 800, y1: 320,
  x2: 800, y2: 50
});

var line = canvas.drawLine({
  strokeStyle: 'black',
  layer: true,
  strokeWidth: 2,
  x1: 350, y1: 400,
  x2: 350, y2: 50
});
var line = canvas.drawLine({
  strokeStyle: 'black',
  layer: true,
  strokeWidth: 2,
  x1: 650, y1: 400,
  x2: 650, y2: 50
});
