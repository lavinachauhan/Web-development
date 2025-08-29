let btns = document.querySelectorAll("button");
for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function () {
    //     console.log("You enter the btn")
    // };

    // console.dir(btn);
    btn.addEventListener('click', sayHello);
    btn.addEventListener('click', sayWorld);
}
function sayHello() {
    alert("button is clicked")
}

function sayWorld() {
    alert("hello world")
}