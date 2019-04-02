function ubahHuruf(kata) {
  // you can only write your code here!
  var kataBaru = '';
  var charBaru = '';
  for (var i = 0; i < kata.length; i++) {
    if (String.fromCharCode(kata.charCodeAt(i)) === 'z'){
      charBaru = 'a';
    }
    else{
      charBaru = String.fromCharCode(kata.charCodeAt(i) + 1);
    }
    kataBaru += charBaru;
  }
  return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu