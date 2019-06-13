import { message } from 'sketch/ui';
import { Artboard, Rectangle, fromNative } from 'sketch/dom';

import * as Layer from './lib/Layer';
import * as Settings from './lib/Settings';

export default function(contextNative) {

    const selectedLayers = Layer.getSelectedLayers(contextNative);
    const selectedLayerCount = Layer.getSelectedLayerCount(contextNative);

    if (selectedLayerCount == 0) { message('No layers selected. 😢'); return; }

    const selectedArtboards = Layer.getSelectedArtboards(contextNative);
    const selectedArtboardCount = Layer.getSelectedArtboardCount(contextNative);

    if (selectedArtboardCount == 0) { message('No artboards selected. 😢'); return; }

    // console.log(selectedArtboardCount);

    selectedArtboards.forEach((artboardNative, i) => {

        selectedLayers.forEach((layerNative, i) => {

            if (layerNative.parentArtboard()) {
                if (layerNative.parentArtboard().objectID() == artboardNative.objectID()) { return; }
            }

            // console.log(layerNative);

            let duplicatedLayer = fromNative(layerNative).duplicate();
                duplicatedLayer.parent = artboardNative;

            return;
        });

    });

}
