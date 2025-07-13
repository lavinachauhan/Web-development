//code 01

const t1 = performance.now();

//code 01 jismai paragraph ko direct document body mai add kr rhe h
for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is Para" + i;
    document.body.appendChild(para);
}

const t2 = performance.now();

//standard way to check how much time my code is taking to run
//performance.now() method is used
console.log("Total time taken by code 1: " + (t2 - t1));

//code 02 -> jismai paragraph ko pehle ek div mai ad kr rhe h uske 
//baad end mai div ko document mai add kr rhe h

const t3 = performance.now();
let myDiv = document.createElement('p');
for(let i = 1; i <= 100; i++)
{
    let para = document.createElement('p');
    para.textContent = "This is Para" + i;
    myDiv.appendChild(para);
}

document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("Total time taken by code 2: " + (t4 - t3));

//reflow -> process of calculating dimension / position of element -> this take more time to calculate(computational intensive task) 
//repaint -> process of displaying content pixel by pixel -> it is faster than reflow


//here code 2 is faster than code 1, but why??
//because code1 has more number of reflow and repaint
//whwnever we show something on UI we have to add it in document
//UI pr show krne ka mtlb hai reflow bhi krna pdega or reapint bhi
//code 1 mai 100 time document mai add hua h, that means 100 time hi
//reflow hoga aur 100 times hi repaint that's why code 1 jyada time le rha h
//aur code 2 mai sirf ek baar document mai add kiya h isiliye wo kmm time le rha h


//it is good practice to use document fragment
//document fragment -> kind of light weight document object
//copy of document, computationally which uses less resources
//agr addition of element krte h document fragment mai, to ye na to 
//reflow krta h aur na hi repaint krta h

let fragment = document.createDocumentFragment('p');
for(let i = 1; i <= 100; i++)
{
    let para = document.createElement('p');
    para.textContent = "This is Para" + i + 100;
    //no reflow no repaint for below line
    fragment.appendChild(para);
}
 //below line take 1 reflow 1 repaint
document.body.appendChild(fragment);




