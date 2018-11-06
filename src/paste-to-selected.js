import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function(context) {

    log(context);

    var Dom = require('sketch/dom');
    var Ui = require('sketch/ui');

    var document = sketch.getSelectedDocument();
    var page = document.selectedPage;

    var selectedLayers = document.selectedLayers;
    var selectedCount = selectedLayers.length;

    if (selectedCount === 0) {
        Ui.message('No layers are selected.');
    } else {

        var layers = [];
        var artboards = [];

        selectedLayers.forEach(function(layer, i) {

            if (layer.type === "Artboard") { artboards.push(layer); }
            else { layers.push(layer); }

        });

        artboards.forEach(function(artboard, i) {

            // NSApp.targetForAction(artboard);
            // NSApp.sendAction_to_from('paste:', artboard.sketchObject, layers[0])

            // NSApp.sendAction_('paste_').to_(nil).from_(doc);

            // [NSApp sendAction:'paste:' to:nil from:doc];

            // [artboard select:true]

            // var duplicateLayers = [];
            // layers.forEach(function(layer, i) {
            //
            //     var duplicateLayer = layer.duplicate();
            //
            //     if (layer.parent.type !== "Artboard") {
            //
            //         if (i > 0) {
            //             duplicateLayer.frame.x -= layers[0].frame.x;
            //             duplicateLayer.frame.y -= layers[0].frame.y;
            //         } else {
            //             duplicateLayer.frame.x = 10;
            //             duplicateLayer.frame.y = 10;
            //         }
            //
            //     }
            //
            //     duplicateLayers.push(duplicateLayer);
            //
            // });
            //
            // var artboardLayers = artboard.layers.map(function(item) {
            //     return item.sketchObject;
            // });
            //
            // var newArtboardLayers = artboardLayers.concat(duplicateLayers);
            //
            // artboard.layers = newArtboardLayers;

        });

    }

}
