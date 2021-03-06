function highestScore (students) {
  // Code disini
  var obj = {};
  var kelas = [];
  for (var i = 0; i<students.length; i++){
    kelas.push(students[i].class)
  }
  var kelasUnik = [...new Set(kelas)];
  for (var j = 0; j<kelasUnik.length; j++){
    var nama = '';
    var nilai = 0;
    for (var k = 0; k<students.length; k++){
      if (kelasUnik[j] === students[k].class){
        if (students[k].score>nilai){
          nilai = students[k].score;
          nama = students[k].name;
        }
      }
    }
    obj[kelasUnik[j]]= {name: nama, score: nilai};
  }
  return obj;
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}