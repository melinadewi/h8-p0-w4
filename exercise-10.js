function changeMe(arr) {
  // you can only write your code here!
  for (var i=0; i<arr.length; i++){
    var arrObj = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: 2019-arr[i][3]>0 ? 2019-arr[i][3] : 'Invalid Birth Year'
    }
    console.log(i+1+'. '+arrObj.firstName+' '+arrObj.lastName+':');
    console.log(arrObj);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""