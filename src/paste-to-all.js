import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function(context) {

    var document = context.document;
    var page = document.currentPage();
    var artboards = document.artboards();

    var paste = document.actionsController().actionForID("MSPasteAction");

    // log(paste);

    var selection = context.selection;
    // var selection = document.selectedLayers();

    if (!document.hasArtboards()) {
        document.showMessage('No Artboards found in this page :(');
    } else {

        // var layers = [];
        // var artboards = [];
        //
        // selectedLayers.forEach(function(layer, i) {
        //     if (layer.type === "Artboard") { artboards.push(layer); }
        // });
        //
        // if (artboards.length === 0) { Ui.message('No Artboards selected.'); return false; }

        artboards.forEach(function(artboard, i) {

            log(artboard.objectID());

            // selection.setLayers([artboard]);
            selection = [artboard];

            log(selection);
            // log(selection.layers()[0].objectID());

            paste.doPerformAction(document);

            log("Pasted! : " + i)

            // log(artboard);

            // if (paste.validate()) {
            //     paste.doPerformAction(nil);
            // }

            // NSApp.targetForAction(artboard);
            // NSApp.sendAction_to_from('paste:', artboard.sketchObject, document);

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

        log("Done!")

    }

}
