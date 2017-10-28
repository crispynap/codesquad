var add = (function () {
  var prev = 0;

  return function (a, b) {
    console.log(prev + ', ' + (a + b));
    prev = a + b;
  }
})();

add(10, 20); // 0, 30
add(0, 40); // 30, 70
add(0, 40); // 30, 70
console.log(add.prev); // undefined