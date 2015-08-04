// v0.1

var vampire_test = function(a, b){
  // Get sorted array of all digits passed to function
  var digits     = (a.toString() + b.toString()).split("").sort();
  
  // Get sorted array of all digits when multiplied
  var multiplied = (a * b).toString().split("").sort();
  
  // Check each digit in each array against the other, by index
  if (digits.every(function(digit, idx){
    return digit === multiplied[idx];
  })){
    return true;
  } else {
    return false;
  }
}