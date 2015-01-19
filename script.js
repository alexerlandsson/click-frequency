/*
Date:       2015-01-19
Author:     Alexander Erlandsson
GitHub:     https://github.com/alexerlandsson

Description:
This script runs a function if the click frequency is not higher than a specific speed.
It works by adding a timout to run the funtion after a specific time into an array that
later gets cleared after every click. If it not gets cleared, the clickTooSlow function
will trigger.
*/

var minClickSpeed = 1000;
var clickTimeouts = [];

function clickFunction() {
    for (var i = 0; i < clickTimeouts.length; i++) { clearTimeout(clickTimeouts[i]); }
    document.getElementById('output').innerHTML = "";
    
    clickTimeouts.push(setTimeout(clickTooSlow, minClickSpeed));
}

function clickTooSlow() { 
    //Some code here...
}
