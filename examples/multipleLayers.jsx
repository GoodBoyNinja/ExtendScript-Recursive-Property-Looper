// Scann all properties of selected layers and count them

$.evalFile(File("../src/PropertyTreeLooper.jsx").fsName); // include the PropertyTreeLooper class

(function () {
    var comp = app.project ? app.project.activeItem : null;
    if (!(comp instanceof CompItem)) {
        alert("Please select a composition first.");
        return;
    }

    var selectedLayers = comp.selectedLayers;
    if (!selectedLayers || selectedLayers.length === 0) {
        alert("Please select some layers first.");
        return;
    }


    var numPropertiesAcrossSelectedLayers = 0;
    var Looper = new PropertyTreeLooper(); // create a new instance of the PropertyTreeLooper class
    Looper.onPropertyFound = function (prop) {
        numPropertiesAcrossSelectedLayers++;
    };

    for (var i = 0; i < selectedLayers.length; i++) {
        Looper.loop(selectedLayers[i]);
    }


    alert("Number of properties across selected layers: " + numPropertiesAcrossSelectedLayers);


})();
