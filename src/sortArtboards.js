import { message } from 'sketch/ui';
import { Artboard, Rectangle, fromNative } from 'sketch/dom';

import * as Layer from './lib/Layer';
import * as Settings from './lib/Settings';

export default function(contextNative) {

    const document = fromNative(contextNative.document);
    const documentDataNative = contextNative.document.documentData();

    const page = documentDataNative.currentPage();

    let artboards = documentDataNative.currentPage().artboards();

    console.log(documentDataNative.currentPage());

    // console.log(artboards.length);
    //
    // artboards.forEach((ab, i) => {
    //     if (i < 1) {
    //         console.log(ab);
    //     }
    //     return;
    // });
    //
    // return;

    // let layers;
    //
    // if (selectedLayers.length === 0) { layers = page.layers; }
    // else { const layers = selectedLayers; }
    //
    // let artboards = layers.map((layer) => {
    //     return layer.type == "Artboard" && layer;
    // }).filter(layer => layer);
    //
    // let artboardIndexes = layers.map((layer, i) => {
    //     if (layer.type == "Artboard" && layer) { return i; }
    // });

    let sortedArtboards = artboards.sort((a,b) => {
        if ( a.name < b.name ) { return -1; }
        if ( a.name > b.name ) { return 1; }
        return 0;
    });

    // let i = 0;
    // artboardIndexes.forEach((index) => {
    //     // Replace artboards in page with sorted artboards
    // });

}
