
//Load Web App JavaScript Dependencies/Plugins
define(["jQuery", "html5shiv", "respond", "bootstrap", "angular", "angular-route"], function($) {
  jQuery(function() {
    $ = jQuery; // Yeah, if you would just know anouther way how to do it that would be great!

    // instead of these tests write your own code
    var bootstrap_enabled = (typeof $().modal == 'function');
    cl("Bootsrap enabled = "+bootstrap_enabled);
    if(typeof angular != 'undefined') { cl("Angular loaded"); }

  });
});

// shortcut for console.log
function cl(data) {
    console.log(data);
}
