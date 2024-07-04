
let sq = document.querySelectorAll(".square");
let resBtn = document.querySelector("#reset");
let newBtn = document.querySelectorAll("#new-game");
let winner = document.querySelector(".winner");
let win = document.querySelector("#win");
let nowinners = document.querySelector(".nowinner");
let nowin = document.querySelector("#nowin");

let x = true;
let clck = 0;

let winArr = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8], [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

sq.forEach((square) => {
    square.addEventListener("click", () => {
        clck++;
        if (x === true) {
            square.innerText = "X";
            square.style.color = "#ffcad4"; 
            x = false;
        } else {
            square.innerText = "O";
            square.style.color = "#fbba72"; 
            x = true;
        }
        square.disabled = true;
        winnerDecider();
    });
});

const winnerDecider = () => {
    for (let seq of winArr) {
        let pos1 = sq[seq[0]].innerText;
        let pos2 = sq[seq[1]].innerText;
        let pos3 = sq[seq[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                revealWinner(pos1);
                return;
            }
        }
    }
    if (clck === 9) {
        nowinner();
    }
}

const nowinner = () => {
    nowin.innerText = `OOPS, that's a Draw`;
    nowinners.classList.remove("hide");
    for (let seq of sq) {
        seq.disabled = true;
    }
}

const revealWinner = (val) => {
    win.innerText = `Yahoo, Winner is ${val}`;
    winner.classList.remove("hide");
    for (let seq of sq) {
        seq.disabled = true;
    }
};

const resetGame = () => {
    x = true;
    clck = 0;
    for (let seq of sq) {
        seq.disabled = false;
        seq.innerText = "";
        seq.style.color = ""; 
    }
    winner.classList.add("hide");
    nowinners.classList.add("hide");
};

newBtn.forEach((btn) => {
    btn.addEventListener("click", resetGame);
});

resBtn.addEventListener("click", resetGame);
