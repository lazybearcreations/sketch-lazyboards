import { message } from 'sketch/ui';
import { Artboard, Rectangle, fromNative } from 'sketch/dom';

import * as Layer from './lib/Layer';
import * as Settings from './lib/Settings';

export default function(contextNative) {

    const document = fromNative(contextNative.document);
    const documentDataNative = contextNative.document.documentData();

    const page = documentDataNative.currentPage();

    const selectedLayers = Layer.getSelectedLayers(contextNative);
    const selectedLayersCount = Layer.getSelectedLayerCount(contextNative);

    const artboards = page.artboards();

    Settings.setSettingForKey('offset-x', 10);
    Settings.setSettingForKey('offset-y', 10);

    if (selectedLayersCount === 0) {
        message('Please select layers to duplicate. Layers cannot be Artboards.');
    } else {

        if (artboards.length === 0) { message('No Artboards found to duplicate to. 😢'); return false; }

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

                        duplicateLayers[i].frame.x += Settings.getSettingForKey('offset-x');
                        duplicateLayers[i].frame.y += Settings.getSettingForKey('offset-y');

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
