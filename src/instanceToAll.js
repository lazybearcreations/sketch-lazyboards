import { fromNative } from 'sketch';
import { message } from 'sketch/ui';
import { Settings } from 'sketch/settings';
import { Artboard, Rectangle } from 'sketch/dom';

import * as Layer from './lib/Layer';

export default ( context ) => {

    Settings.setSettingForKey('offset-x', 10);
    Settings.setSettingForKey('offset-y', 10);

    const document = fromNative(context.document);

    const selectedLayers = Layer.getSelectedLayers(context);
    const selectedLayersCount = Layer.getSelectedLayersCount();

    console.log(selectedLayers);
    return;

    if (selectedLayersCount === 0) {
        message('No layers are selected.');
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
