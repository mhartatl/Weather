/**
 * Created by maurahart on 4/30/16.
 */
//http://api.openweathermap.org/data/2.5/weather?q=

/*
 - Sign up for openweathermap.org and generate an API key.
 - User either $.ajax or $.get to pull weather current data .
 for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
 - Print the temperature in console.
 - Bonus 1: add a form prompting user for the city and state.
 - Bonus 2: convert answer from kelvin to fahrenheit.
 */
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = responseMethod;
var apiKey = '7c6f76d2359f1c8af271308c26e73e0a';


function responseMethod() {
    // Check if our state is "DONE"
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // If our request was successful we get a return code/status of 200
        if (httpRequest.status === 200) {
            // This is where we update our UI accordingly. Our data is available to us through the
            // responseText parameter
            document.getElementById('Status').innerHTML = httpRequest.status;
            document.getElementById('StatusText').innerHTML = httpRequest.statusText;
            console.log(httpRequest.responseText);
        } else {
            // This is the scenario that there was an error with our request
            console.log('There was a problem with the request.');
        }
    }
}
'use strict';

$('#getDataButton').click (function(event){
    event.preventDefault();
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=London.uk?id=524901&APPID=7c6f76d2359f1c8af271308c26e73e0a";
    var apiKey = "7c6f76d2359f1c8af271308c26e73e0a";

    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=London.uk?id=524901&APPID=7c6f76d2359f1c8af271308c26e73e0a",
        data:{format: "json"},
        success: function(response){
            console.log(response);
        },
        error: function(response){
            console.log('error');
        }
    })
});


// Open method accepts 3 parameter:
// 1. Request type: these are all the HTTP verbs we covered above
// 2. The URL
// 3. Optional boolean third parameter, that dictates wether this is an asynchronous call (default is true)
httpRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=London.uk?id=524901&APPID=7c6f76d2359f1c8af271308c26e73e0a');

// The send method takes an optional parameter. If our API request allows additional parameters or JSON objects
// to be passed through (primarily through POST requests), we pass them in the send method.
httpRequest.send();