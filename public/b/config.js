requirejs.config({
    "baseUrl": "b",
    "shim": {
        "bootstrap": ["jquery.min"]
    }
});

// Load the main app module to start the app
requirejs(["script"]);
