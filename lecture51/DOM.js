//methods to access elements

// document.getElementbyId()
// document.getElementbyTagName()
// document.getElementbyClassName()
//document.querySelector("#id")
//document.querySelector(".classname")
//document.querySelector("tagName")
//document.querySelectorAll("#id", ".classname", "tagName")


//trick to access element
//steps
//1 inspect and select any element
//2 go to console and type $0
//this will give the code of the selected element

// variable format mai bhi store kr skte 
// let para = $0
// para -> press enter you will get output of the selected element code


//methods to update existing element

//inner HTML -> get/set
//outer HTML
//text content
//inner text

//Method to create element
//document.createElement('element name(ususally tag name)')

//Methods to add element
//add child (yha humne child ko create kr diya h)
//ab hume uss child ko kisi parent element ke andr add bhi krna pdega

//we can also decide the position of element to add it
//insertAdjacentElement() method is used to add element at desired position

//4 positions available 1. beforeBegin  2. afterBegin  3. beforeEnd  4. afterEnd  

//methods to remove elements
//removechild() (parent and child information hona jaruri h)

let element = document.querySelector('#myDiv');
let newElement = document.createElement('span')
newElement.textContent = "This is my span tag which is newly created"
'This is my span tag which is newly created'

myDiv.insertAdjacentElement('beforeend', newElement)

let parent = document.querySelector('#myDiv');
let child = document.querySelector('#para');
parent.removeChild(child);
