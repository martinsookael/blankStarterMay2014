//Load Web App JavaScript Dependencies/Plugins
define([
  "jquery/dist/jquery.min",
  "html5shiv/dist/html5shiv",
  "respond/dest/respond.min",
  "bootstrap/dist/js/bootstrap.min"
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
