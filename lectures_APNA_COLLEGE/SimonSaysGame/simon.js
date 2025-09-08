// two arrays for tracking and checking game and user sequence
let gameSeq = [];
let userSeq = [];
let btns = ['red', 'green', 'yellow', 'purple'];


let started = false;
let level = 0;
let h2 = document.querySelector('h2');

// document ke uper event listener lgaya hai jis jb koi bhi key press 
// ho to likha aa jaye game started
document.addEventListener("keypress", function() {
    if(started == false){
            console.log("Game is started"); 
            started = true;
            levelUp();
    }
});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIndx = Math.floor(Math.random() * 3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randBtn);
    gameFlash(randBtn);
}

function checkAns(index){
    // console.log(`curr level: ${level}`);
    let idx = index;
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
            // levelUp();
        }
        // console.log("same value");
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
    
    
}

function btnPress (){
    // console.log("btn was pressed");
    let btn = this;
    // console.log(this);
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click', btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;  
}
 
