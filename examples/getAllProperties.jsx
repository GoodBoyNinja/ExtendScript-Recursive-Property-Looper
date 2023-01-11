// Get all properties of a selected layer (without the layer itself or property groups)

$.evalFile(File("../src/PropertyTreeLooper.jsx").fsName); // include the PropertyTreeLooper class

(function () {
    var comp = app.project ? app.project.activeItem : null;
    if (!(comp instanceof CompItem)) {
        alert("Please select a composition first.");
        return;
    }

    var firstSelectedLayer = comp.selectedLayers[0];
    if (!firstSelectedLayer) {
        alert("Please select a layer first.");
        return;
    }


    var properties = [];
    var looper = new PropertyTreeLooper(); // create a new instance of the PropertyTreeLooper class
    looper.onPropertyFound = function (prop) {
        properties.push(prop);
    };
    looper.loop(firstSelectedLayer);


    alert("Found " + properties.length + " properties.");


})();
