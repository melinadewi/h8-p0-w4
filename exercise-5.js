function ubahHuruf(kata) {
  // you can only write your code here!
  var kataBaru = '';
  for (var i = 0; i < kata.length; i++) {
    kataBaru += String.fromCharCode(kata.charCodeAt(i) + 1);
  }
  return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu