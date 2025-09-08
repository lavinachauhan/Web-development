
let btn = document.querySelector("button");
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click', function() {
    console.log(inp.value);
    let li = document.createElement('li');
    let btn1 = document.createElement('button');
    btn1.innerText = 'delete';
    btn1.classList.add("delete");
    li.innerText = inp.value;
    li.appendChild(btn1);
    ul.appendChild(li);
    inp.value = "";

});

// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//     delBtn.addEventListener('click', function() {
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     });
// }

ul.addEventListener('click', function(event){
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

