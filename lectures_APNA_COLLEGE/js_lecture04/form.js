// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     // alert("Form submitted");
//     // let inp = document.querySelector('input');
//     // console.dir(inp);
//     // console.log(inp.value);
//     // let user = document.querySelector('#user');
//     // let pass = document.querySelector('#password');
//     // console.log(user.value);
//     // console.log(pass.value);
//     // alert(`Hi ${user.value} your password is ${pass.value}`)

//     console.log(form.elements[0].value);
//     console.log(form.elements[1].value);

// });

// let user = document.querySelector('#user');
// user.addEventListener('change', function() {
//     console.log("input change changed");
//     console.log("final value = ", user.value);
// });

// user.addEventListener('input', function() {
//     console.log("input event changed");
//     console.log("final value = ", user.value);
// });

let inp = document.querySelector('#text');
let p = document.querySelector('p');
inp.addEventListener('input', function() {
    console.log(inp.value);
    p.innerText = inp.value;
});