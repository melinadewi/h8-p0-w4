function angkaPrima(angka) {
  // you can only write your code here!
  var prima = true;
  var i = 2;
  if (angka<2){
    return false;
  }
  while (i<angka && prima === true){
    if (angka%i===0){
      prima = false;
    }
    i++;
  }
  return prima;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false