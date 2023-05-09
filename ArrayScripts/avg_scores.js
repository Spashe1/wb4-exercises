function getAvarage(scores){
    let sum= 0;
    //let avarageScore= scores.length;
    for(let i =0; i< scores.length; i ++){
        sum += scores[i];
    }
    let avarageScore = sum / scores.length;
    return avarageScore  //(sum/average)
}

let myScores =[99, 98, 89, 88, 87, 98];
let yourScores =[98, 96, 97, 89, 87, 95];

let  myAvarage = getAvarage(myScores);
console.log("My average score is :"+ myAvarage.toFixed(2));

let  yourAvarage = getAvarage(yourScores);
console.log("Your average score is :"+ yourAvarage.toFixed(2));
 

