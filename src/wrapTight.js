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

    if (selectedLayers.length === 0) {
        message('No layers are selected.');
    } else {

        selectedLayers.forEach(function(layer, i) {
            if (layer.type !== "Artboard") {

                let artboard = new Artboard({
                    name: layer.name,
                    parent: page,
                    frame: layer.frame
                });

                layer.frame.x = 0;
                layer.frame.y = 0;

                return layer.parent = artboard;

            }
        });

    }

}
