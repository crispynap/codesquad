//constructor
var MyArray = function (size) {
  this.array = [];
  for (var i = 0; i < size; i++) {
    this.array[i] = 0;
  }
};

MyArray.prototype.write = function (idx, value) {
  this.array[idx] = value;
};

MyArray.prototype.read = function (idx) {
  return this.array[idx];
}

MyArray.prototype.length = function () {
  return this.array.length;
}

MyArray.prototype.addFirst = function (value) {
  this.array.length++;

  for (var i = this.length() - 1; i != 0; i--) {
    this.array[i] = this.array[i - 1];
  }

  this.array[i] = value;
}

MyArray.prototype.addLast = function (value) {
  this.array.length++;
  this.array[this.length() - 1] = value;
}

MyArray.prototype.removeFirst = function () {
  var temp = this.array[0];

  for (var i = this.length() - 1; i != 0; i--) {
    this.array[i] = this.array[i + 1];
  }
  this.array.length--;

  return temp;
}

MyArray.prototype.removeLast = function () {
  var temp = this.array[this.length() - 1];
  this.array.length--;
  return temp;
}

var arr = new MyArray(5);
arr.write(0, 5)
arr.write(1, 4)
arr.write(2, 3)
arr.write(3, 2)
arr.write(4, 1)
arr.addFirst(4)
arr;