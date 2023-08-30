let timer = 60;
let score = 0;
let hitRn;

function increaseScore() {
    document.querySelector('.scoreVal').textContent = score;
    score += 10;
}

document.querySelector(".pbtm").addEventListener("click", function (details) {
    clickedNum = Number(details.target.textContent);
    if (clickedNum === hitRn) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
    else {

    }
});


function makeBubble() {
    let clutter = '';
    for (let i = 0; i <= 107; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector('.pbtm').innerHTML = clutter;
}

function runTimer() {
    let timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('.timerVal').textContent = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector('.pbtm').innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

function getNewHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector('.hitVal').textContent = hitRn;
}

runTimer();
makeBubble();
getNewHit();
increaseScore();