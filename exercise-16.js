function graduates (students) {
  // Code disini
  var obj = {};
  var kelas = [];
  for (var i = 0; i<students.length; i++){
    kelas.push(students[i].class)
  }
  var kelasUnik = [...new Set(kelas)];
  for (var j = 0; j<kelasUnik.length; j++){
    var arrLulus = []
    for (var k = 0; k<students.length; k++){
      if (kelasUnik[j] === students[k].class){
        if (students[k].score>75){
          var lulus = {
            name: students[k].name,
            score: students[k].score
          }
          arrLulus.push(lulus);
        }
      }
    }
    obj[kelasUnik[j]] = arrLulus;
  }
  return obj;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}