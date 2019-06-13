import { fromNative } from 'sketch';
import { message } from 'sketch/ui';
import { Artboard, Rectangle } from 'sketch/dom';

import * as Layer from './lib/Layer';
import * as Settings from './lib/Settings';

export default function(context) {

    Settings.setSettingForKey('offset-x', 10);
    Settings.setSettingForKey('offset-y', 10);

    const document = fromNative(context.document);

    const selectedLayers = Layer.getSelectedLayers(context);
    const selectedArtboards = Layer.getSelectedArtboards(context);

    const selectedLayerCount = Layer.getSelectedLayerCount(context);
    const selectedArtboardCount = Layer.getSelectedArtboardCount(context);

    if (selectedLayerCount <= 0) { message('No layers are selected. 😢'); }
    else if (selectedArtboardCount <= 0) { message('No Artboards selected. 😢'); }
    else {

    //     artboards.forEach(function(artboard, i) {
    //
    //         var duplicateLayers = [];
    //         layers.forEach(function(layer, i) {
    //
    //             duplicateLayers.push(layer.duplicate());
    //
    //             if (layer.parent.type !== "Artboard") {
    //
    //                 if (i > 0) {
    //                     duplicateLayers[i].frame.x -= layers[0].frame.x;
    //                     duplicateLayers[i].frame.y -= layers[0].frame.y;
    //                 } else {
    //                     duplicateLayers[i].frame.x = 0;
    //                     duplicateLayers[i].frame.y = 0;
    //                 }
    //
    //                 duplicateLayers[i].frame.x += Settings.settingForKey('offset-x');
    //                 duplicateLayers[i].frame.y += Settings.settingForKey('offset-y');
    //
    //             }
    //
    //         });
    //
    //         var artboardLayers = artboard.layers.map(function(item) {
    //             return item.sketchObject;
    //         });
    //
    //         artboard.layers = artboardLayers.concat(duplicateLayers);
    //
    //     });

    }

}
