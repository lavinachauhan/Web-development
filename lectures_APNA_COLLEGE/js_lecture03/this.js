let btn = document.querySelector('button')
// let p = document.querySelector('p');
// let h = document.querySelector('h1');

// function changeColor(){
//     console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// e , event, evt these are default arguments in callback fucntion
// btn.addEventListener('click', function(event){
//     console.log(event)
//     console.log("button clicked");
// });

// btn.addEventListener('dblclick', function(event){
//     console.log(event)
//     console.log("button clicked");
// });
// p.addEventListener('click', changeColor);
// h.addEventListener('click', changeColor);

let input = document.querySelector('input');

input.addEventListener('keydown', function(event){
    // console.log(`key = ${event.key}`);
    // console.log(`code = ${event.code}`);
    // console.log("key was pressed")
    let code = event.code;
    console.log("code = ",code);
    if(code == 'ArrowUp'){
        console.log("Character moves forward");
    }
    else if(code == 'ArrowDown'){
        console.log("Character moves backward");
    }
    else if(code == 'ArrowLeft'){
        console.log("Character moves left");
    }
    else if(code == 'ArrowRight'){
        console.log("Character moves right");
    }
})

// input.addEventListener('keyup', function(event){
//     console.log(event);
//     console.log("key was released");
// })
