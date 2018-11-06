import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {

    var Dom = require('sketch/dom');
    var Ui = require('sketch/ui');

    var Settings = require('sketch/settings');

    Settings.setSettingForKey('offset-x', 10);
    Settings.setSettingForKey('offset-y', 10);

    var document = sketch.getSelectedDocument();
    var page = document.selectedPage;

    var selectedLayers = document.selectedLayers;
    var selectedCount = selectedLayers.length;

    if (selectedCount === 0) {
        Ui.message('No layers are selected.');
    } else {

        var layers = [];
        var artboards = [];

        page.layers.forEach(function(layer, i) {
            if (layer.type === "Artboard") { artboards.push(layer); }
        });

        selectedLayers.forEach(function(layer, i) {
            if (layer.type !== "Artboard") { layers.push(layer); }
        });

        if (layers.length === 0) { Ui.message('Please select layers to duplicate. Layers cannot be Artboards.'); return false; }
        if (artboards.length === 0) { Ui.message('No Artboards found to duplicate to.'); return false; }

        artboards.forEach(function(artboard, i) {

            if (artboard.id !== layers[0].parent.id) {
                var duplicateLayers = [];
                layers.forEach(function(layer, i) {

                    duplicateLayers.push(layer.duplicate());

                    if (layer.parent.type !== "Artboard") {

                        if (i > 0) {
                            duplicateLayers[i].frame.x -= layers[0].frame.x;
                            duplicateLayers[i].frame.y -= layers[0].frame.y;
                        } else {
                            duplicateLayers[i].frame.x = 0;
                            duplicateLayers[i].frame.y = 0;
                        }

                        duplicateLayers[i].frame.x += Settings.settingForKey('offset-x');
                        duplicateLayers[i].frame.y += Settings.settingForKey('offset-y');

                    }

                });

                var artboardLayers = artboard.layers.map(function(item) {
                    return item.sketchObject;
                });

                artboard.layers = artboardLayers.concat(duplicateLayers);
            }

        });

    }

}
