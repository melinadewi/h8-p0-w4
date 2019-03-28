function fpb(angka1, angka2) {
  // you can only write your code here!
  var angkaTerkecil = angka1;
  if (angka1>angka2){
    angkaTerkecil = angka2;
  }
  var hasil = 1;
  for (var i = 2; i<=angkaTerkecil; i++){
    if (angka1%i === 0 && angka2%i === 0){
      hasil = i;
    }
  }
  return hasil;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1