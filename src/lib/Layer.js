import { fromNative } from 'sketch';

let selected = {
    shapes: [],
    texts: [],
    artboards: []
};

let selectionCount;
let selectedLayerCount;
let selectedShapeCount;
let selectedTextCount;
let selectedArtboardCount;

const sortSelection = (selectionNative) => {

    selectionNative.forEach(( layerNative ) => {

        let layer = fromNative(layerNative);

        if (layer.type === "Artboard") { selected.artboards.push(layer); }
        else if (layer.type === "Text") { selected.texts.push(layer); }
        else { selected.shapes.push(layer); }

    });

    selectedShapeCount = selected.shapes.length;
    selectedTextCount = selected.texts.length;
    selectedArtboardCount = selected.artboards.length;

    Object.keys(selected).forEach((key) => {
        selectionCount += selected[key].length;
        if (key != "artboards") { selectedLayerCount += selected[key].length; }
    });

    return;

}

const getSelectedLayers = (contextNative) => {
    if (!selectedShapeCount || !selectedTextCount) {
        sortSelection( contextNative.document.selectedLayers().layers() );
    }
    return [].concat(selected.shapes, selected.texts);

}

const getSelectedShapes = (contextNative) => {

    if (!selectedShapeCount) {
        sortSelection( contextNative.document.selectedLayers().layers() );
    }
    return selected.shapes;

}

const getSelectedTexts = (contextNative) => {

    if (!selectedTextCount) {
        sortSelection( contextNative.document.selectedLayers().layers() );
    }
    return selected.texts;

}

const getSelectedArtboards = (contextNative) => {

    if (!selectedArtboardCount) {
        sortSelection( contextNative.document.selectedLayers().layers() );
    }
    return selected.artboards;

}

const getSelectedLayerCount = (contextNative) => {

    if (!selectedLayerCount) {
        sortSelection( contextNative.document.selectedLayers().layers() );
    }
    return selectedLayerCount;

}

const getSelectedShapeCount = (contextNative) => {

    if (!selectedShapeCount) {
        sortSelection( contextNative.document.selectedLayers().layers() );
    }
    return selectedShapeCount;

}

const getSelectedTextCount = (contextNative) => {

    if (!selectedTextCount) {
        sortSelection( contextNative.document.selectedLayers().layers() );
    }
    return selectedTextCount;

}

const getSelectedArtboardCount = (contextNative) => {

    if (!selectedArtboardCount) {
        sortSelection( contextNative.document.selectedLayers().layers() );
    }
    return selectedArtboardCount;

}

const getLayerType = (layer) => {
    return layer.type;
}

const hasSharedStyle = (layer) => {
    return layer.sharedStyleId;
}

export {
    sortSelection,
    getSelectedLayers,
    getSelectedShapes,
    getSelectedTexts,
    getSelectedArtboards,
    getSelectedLayerCount,
    getSelectedShapeCount,
    getSelectedTextCount,
    getSelectedArtboardCount,
    getLayerType,
    hasSharedStyle
}
