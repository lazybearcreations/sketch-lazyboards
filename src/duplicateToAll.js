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

    const nativeArtboards = page.artboards();

    if (selectedLayersCount === 0) {
        message('Please select layers to duplicate. Layers cannot be Artboards.');
    } else {

        if (nativeArtboards.length === 0) { message('No Artboards found to duplicate to. 😢'); return false; }

        nativeArtboards.forEach(function(artboardNative, i) {

            selectedLayers.forEach((layer, i) => {
                if (layer.parentArtboard().objectID() == artboardNative.objectID()) { return; }
                let duplicatedLayer = fromNative(layer).duplicate();
                    duplicatedLayer.parent = artboardNative;
            });

        });

    }

}
