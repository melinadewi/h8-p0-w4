function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var min = String(angka).length + 1;
  for (var i=1; i<angka/2+1; i++){
    if (angka%i === 0){
      var digit = (String(i)+String(angka/i)).length;
    }
    if (digit<min){
      min = digit;
    }
  }
  return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2