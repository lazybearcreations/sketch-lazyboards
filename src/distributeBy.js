import { fromNative } from 'sketch';
import { message } from 'sketch/ui';
import { Artboard, Rectangle } from 'sketch/dom';

import * as Layer from './lib/Layer';

export default ( context ) => {

    const document = fromNative(context.document);

    const selectedLayers = Layer.getSelectedLayers(context);
    const selectedLayersCount = Layer.getSelectedLayersCount();

    var artboards = [];

    if (selectedLayersCount === 0) {
        message('No layers are selected.');
    } else {

        selectedLayers.forEach( function(layer, i) {



        });

    }

}
