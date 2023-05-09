let students = [
    {name: "Sam", scores: [100, 96, 99, 92]},
    {name: "Bart", scores: [92, 89, 96, 100, 94]},
    {name: "Lili", scores: [86, 72, 92]},
    {name: "Tod", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Mike", scores: [89, 100]},
    {name: "Josh", scores: [100, 99, 100, 87]}
];
for(let i = 0; i<students.length; i++){
    let totalScore = 0;
    for(let j =0; j <students[i].scores.length; j++){
        totalScore += students[i].scores[j];
    }
    let avarageScore = totalScore/students[i].scores.length;
    console.log(`${students[i].name}  has an average score of ${avarageScore.toFixed(2)}`);
}