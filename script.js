let ranNum;

function computerPlay() {
    ranNum = Math.floor(Math.random() * 3);
    return ranNum;
}

computerPlay();

if (ranNum == 0) {
    answer = 'Rock';
}
else if (ranNum == 1) {
    answer = 'Paper';
}
else if (ranNum == 2) {
    answer = 'Scissors'
}

console.log(ranNum);
console.log(answer);