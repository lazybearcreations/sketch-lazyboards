import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {

    var Dom = require('sketch/dom');
    var Ui = require('sketch/ui');

    var document = sketch.getSelectedDocument();
    var page = document.selectedPage;

    var selectedLayers = document.selectedLayers;
    var selectedCount = selectedLayers.length;

    if (selectedCount === 0) {
        Ui.message('No layers are selected.');
    } else {

        page.layers.forEach(function(artboard, i) {

            var layers = [];
            selectedLayers.forEach(function(layer, i) {
                var newLayer = layer.duplicate();
                layers.push(newLayer);
            });

            var artboardLayers = artboard.layers.map(function(item) {
                return item.sketchObject;
            });

            var newArtboardLayers = artboardLayers.concat(layers);

            artboard.layers = newArtboardLayers;

        });

        selectedLayers.forEach(function(layer, i) {
            layer.remove();
        });

    }

}
