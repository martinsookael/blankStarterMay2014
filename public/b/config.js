requirejs.config({
    "baseUrl": "b",
    "paths": {
      'jQuery': 'jquery/dist/jquery.min',
      'html5shiv': 'html5shiv/dist/html5shiv',
      'respond': 'respond/dest/respond.min',
      'bootstrap': 'bootstrap/dist/js/bootstrap.min',
      'angular': 'angular/angular.min',
      'angular-route': 'angular-route/angular-route.min'
    },
    "shim": {
        "bootstrap": ["jQuery"],
        "angular-route": ["angular"]
    }
});

// Load the main app module to start the app
requirejs(["script"]);
