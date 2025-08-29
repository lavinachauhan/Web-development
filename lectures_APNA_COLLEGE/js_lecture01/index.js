let para1 = document.createElement('p'); 
para1.innerText = "Hey Iam red";
document.querySelector('body').append(para1);
para1.classList.add('red');

let head1 = document.createElement('h3');
head1.innerText = "Iam the heading";
document.querySelector('p').append(head1);
head1.classList.add('blue');

let div = document.createElement("div");
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I'm inside the div";
para2.innerText = "Me too";
div.append(h1);
div.append(para2);
div.classList.add('box');
document.querySelector('body').append(div);

let para3 = document.createElement('p');
para3.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector('body').append(para3);

let head2 = document.createElement('h1');
head2.innerHTML = "<u>DOM Practice</u>";
head2.classList.add('head2');
document.querySelector('body').append(head2);

let btn = document.querySelector('#button1');
btn.classList.add('button1');

let input = document.querySelector('input');
btn.setAttribute("id", "btn");
input.setAttribute("placeholder", "username")

let buton = document.createElement('button');
let inp = document.createElement('input');
buton.innerText = "Click me";
document.querySelector('body').append(buton);
document.querySelector('body').append(inp);












