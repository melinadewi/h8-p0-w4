function cariModus(arr) {
  // you can only write your code here!
  var angka = [...new Set(arr)];
  var modusArr = [];
  for (var i = 0; i<angka.length; i++){
    var modus = 0;
    for (var j = 0; j<arr.length; j++){
      if (angka[i]===arr[j]){
        modus+=1;
      }
    }
    modusArr.push(modus);
  }
  if (Math.max(...modusArr) === 1 || angka.length === 1){
    return -1;
  }
  else{
    return angka[modusArr.indexOf(Math.max(...modusArr))]
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1