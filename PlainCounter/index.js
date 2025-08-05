// javascript for the counter functionality
document.addEventListener("DOMContentLoaded", function(){
    // Initialize the content variable
    let count = 0;
    const counterDisplay = document.getElementById("counter-display");
    const counterButton = document.getElementById("counter-button");

    // add an event listener to the button
    counterButton.addEventListener("click", function(){
        // increment the count variable
        count++;

        // update the display text with the new count value
        counterDisplay.textContent = `You clicked ${count} times`;
    })

})

