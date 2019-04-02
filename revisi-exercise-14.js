function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var arrObj = [];
  for(var i=0; i<arrPenumpang.length; i++){
    var jarak = rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]);
    if (jarak<0){
      jarak += rute.length;
    }
    var cost = jarak * 2000;
    var obj = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: cost
    }
    arrObj.push(obj);
  }
  return arrObj;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]