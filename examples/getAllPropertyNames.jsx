// Get all property names of a selected layer (without the layer itself or property groups)

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


    var names = [];
    var looper = new PropertyTreeLooper(); // create a new instance of the PropertyTreeLooper class
    looper.onPropertyFound = function (prop) {
        names.push(prop.name);
    };
    looper.loop(firstSelectedLayer);


    alert(names);


})();
