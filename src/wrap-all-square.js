import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function(context) {

    var Dom = require('sketch/dom');
    var Ui = require('sketch/ui');

    var Artboard = Dom.Artboard;
    var Rectangle = Dom.Rectangle;

    var document = sketch.getSelectedDocument();
    var page = document.selectedPage;

    var selectedLayers = document.selectedLayers;
    var artboards = [];

    if (selectedLayers.length === 0) {
        Ui.message('No layers are selected.');
    } else {

        var layers = [];
        var pageLayers = [];
        var artboards = [];

        page.layers.forEach(function(layer, i) {
            pageLayers.push(layer);
        });

        selectedLayers.forEach(function(layer, i) {
            if (layer.type !== "Artboard") { layers.push(layer); }
        });

        var width = Math.max.apply(Math, layers.map(function(layer) { return layer.frame.width; }));
        var height = Math.max.apply(Math, layers.map(function(layer) { return layer.frame.height; }));
        var area = Math.max(width, height);

        layers.forEach( function(layer, i) {

            var x = layer.frame.x;
            var y = layer.frame.y;

            var diffX = Math.abs(width - layer.frame.width);
            var diffY = Math.abs(height - layer.frame.height);

            layer.frame.x = diffX / 2;
            layer.frame.y = diffY / 2;

            var artboard = new Artboard({
                name: layer.name,
                parent: page,
                frame: new Rectangle(x - (diffX / 2), y - (diffY / 2), area, area),
                layers: [layer]
            });

        });

    }

}
