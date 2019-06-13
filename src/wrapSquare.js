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

        const layers = selectedLayers.map((layer) => {
            return layer.type !== "Artboard" && layer;
        }).filter(layer => layer);

        let width = Math.max.apply(Math, layers.map( (l) => { return l.frame.width; }) );
        let height = Math.max.apply(Math, layers.map( (l) => { return l.frame.height; }) );
        let area = Math.max(width, height);

        selectedLayers.forEach(function(layer, i) {

            if (layer.type !== "Artboard") {

                let x = layer.frame.x;
                let y = layer.frame.y;

                let diffX = Math.abs(area - layer.frame.width);
                let diffY = Math.abs(area - layer.frame.height);

                layer.frame.x = diffX / 2;
                layer.frame.y = diffY / 2;

                let artboard = new Artboard({
                    name: layer.name,
                    parent: page,
                    frame: new Rectangle(x, y, area, area)
                });

                return layer.parent = artboard;

            }

        });

    }

}
