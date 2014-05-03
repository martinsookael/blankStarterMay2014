//Load Web App JavaScript Dependencies/Plugins
define([
  "jQuery",
  "html5shiv",
  "respond",
  "bootstrap",
  "angular"
], function($)
{
  jQuery(function()
  {
      $ = jQuery; // Yeah, if you would just know anouther way how to do it that would be great!

      //do stuff
      console.log('required plugins loaded...');
      var bootstrap_enabled = (typeof $().modal == 'function');
      cl("bootsrap enabled = "+bootstrap_enabled);

  });
});

// shortcut for console.log
function cl(data) {
    console.log(data);
}
