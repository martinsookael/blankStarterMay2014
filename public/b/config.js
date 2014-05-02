requirejs.config({
    "baseUrl": "b",
    "shim": {
        "bootstrap": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["script"]);
