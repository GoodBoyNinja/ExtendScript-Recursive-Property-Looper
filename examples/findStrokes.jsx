// Scann all selected layers for Stroke property groups

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


    var strokePropertyGroups = [];
    var Looper = new PropertyTreeLooper(); // create a new instance of the PropertyTreeLooper class
    Looper.onGroupFound = function (prop) {
        if (prop.matchName === "ADBE Vector Graphic - Stroke") {
         strokePropertyGroups.push(prop);
        }
    };

    for (var i = 0; i < selectedLayers.length; i++) {
        Looper.loop(selectedLayers[i]);
    }

    if (strokePropertyGroups.length === 0) {
        alert("No Stroke property groups found.");
        return;
    } else {
        alert("Number of Stroke property groups found: " + strokePropertyGroups.length);
    }

    // Now do something with the strokePropertyGroups array....

})();
