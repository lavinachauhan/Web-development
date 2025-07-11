//event -> like click, scroll, diuble click etc
//event target -> kind of entity where the event is received e.g button
//event listener-> location where the action of event is written

// e.g. when a button is clicked, then here click is event
//button is event target
//the actions which has to be done after event are written in event listener
// click -> play button -> video play
// event -> event target -> event listener

//addEventListener() method is used to add event
//syntax: <event-tag>.addEventListener(<event type>, <function/action>, usecapture(optional))
//if usecapture is true then at capturing phase addEventListener will apply, by default it is applied on bubbling phase 
//removeEventLsitener() method is used to remove event



function changeText(){
    let fpara = document.getElementById('para');
    fpara.textContent = "Hello Lavina";
}

let fpara = document.getElementById('para');
fpara.addEventListener('click', changeText);

//phases of event (lifecycle of event)
//1-> capturing phase -> finding the target
//2 > attarget phase -> stand on target 
//3 -> bubbling phase -> going back from target to root


//event object
//event trigger hone pr -> event ka object eventListener ko mil jata h hum chahe to use access kr skte hi

//default action -> actual beahviour of element
//we can prevent actual behaviour of element
//e.g. <a> tag actual behaviour is it will go to some other link

let anchorElement = document.getElementById('anchor');

function preventBehaviour(event){
    event.preventDefault();
    anchorElement.textContent = "Click done";
}
anchorElement.addEventListener('click', preventBehaviour)

let paras = document.querySelectorAll('p');

function alertPara(event){
    if(event.target.nodeName === 'SPAN')
    alert("You have clicked on para: " + event.target.textContent);
}

// for(let i = 0; i < paras.length; i++)
// {
//     let para = paras[i];
//     console.log("eventListener added")
//     para.addEventListener('click', alertPara);
// }

let myDiv = document.getElementById("paragraphs");
myDiv.addEventListener('click', alertPara);

