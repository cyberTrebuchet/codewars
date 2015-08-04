// v0.1

var vampire_test = function(a, b){
  var digits     = (a.toString() + b.toString()).split("");
  var multiplied = (a * b).toString().split("");
  console.log(digits.sort(), multiplied.sort())
  if (digits.sort() == multiplied.sort()){
    return true;
  } else {
    return false; // fix me
  }
}

console.log(vampire_test(21,6))