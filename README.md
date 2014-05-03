Blank Express + Gulp + Heroku + Bower + RequireJs + jQuery + Bootstrap + Angular
===================

This is a boilerplate for beginning a new Single Page Application with the components listed in the header.  


EXPRESS:  
Sets up a basic http server that serves the index.html file from public folder.  

GULP:  
Refreshes the browser every time something is edited in public folder.  

HEROKU:  
There is a Heroku specific Procfile present, that starts app.js if uploaded to Heroku.  

BOWSER  
is configured to install everything into folder "b"  

REQUIREJS  
All JS is included via RequireJS (config.js has the configuration and script.js all else)  

RESPONDJS  
brings media queries to IE 6-8  

HTML5SHIV  
brings HTML5 to IE  

JQUERY + BOOTSTRAP + ANGULAR + ANGULAR ROUTE  
These guys do what they've always done.  
As a side note - Bootstrap also does a CSS reset.  


STARTING UP  
===================  

(Assuming you have everything else until nodemon/node installed)  

window 1: // reloads the server on every filechange  
nodemon app.js  

window 2: // reloads the browser on every filechange in public folder  
gulp  
