// v0.1

function Counter(){
  this.counter = 0;
  return (this.counter);
}

Counter.prototype.incr = function() {
  this.counter += 0;
}

var c = new Counter();

console.log(c);