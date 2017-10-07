

function coordinate(x, y) {

  var _x = x || 0;
  var _y = y || 0;

  function add_x(x1) {
    return _x += x1;
  }

  function add_y(y1) {
    return _y += y1;
  }

  function pos() {
    return { x: _x,
             y: _y };
  }


  return {
    "add_x": add_x,
    "add_y": add_y,
    "pos": pos
  };
}


var sample = coordinate(4);

sample.add_x(1);
sample.add_x(3);
sample.add_y(-1);

// console.log(sample);
// console.log(sample._x);
// console.log(sample._y);

console.log(sample.pos());

