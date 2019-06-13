import { fromNative } from 'sketch';

let selected = {
    groups: [],
    shapes: [],
    texts: [],
    artboards: []
};

let selectionCount;
let selectedLayerCount;
let selectedShapeCount;
let selectedTextCount;
let selectedArtboardCount;
let selectedGroupCount;

const sortSelection = (selectionNative) => {

    selectionNative.forEach(( layerNative ) => {

        let layer = fromNative(layerNative);

        if (layer.type === "Artboard") { selected.artboards.push(layerNative); }
        else if (layer.type === "Text") { selected.texts.push(layerNative); }
        else if (layer.type === "Group") { selected.groups.push(layerNative); }
        else if (layer.type === "Shape") { selected.shapes.push(layerNative); }

    });

    selectedShapeCount = selected.shapes.length;
    selectedTextCount = selected.texts.length;
    selectedArtboardCount = selected.artboards.length;
    selectedGroupCount = selected.groups.length;

    selectionCount = 0;
    selectedLayerCount = 0;

    Object.keys(selected).forEach((key) => {

        selectionCount += selected[key].length;
        if (key != "artboards") { selectedLayerCount += selected[key].length; }

    });

    return;

}

const getSelectedLayers = (contextNative) => {
    if (!selectedShapeCount && !selectedTextCount && !selectedGroupCount) {
        sortSelection( contextNative.selection );
    }
    return [].concat(selected.shapes, selected.texts, selected.groups);

}

const getSelectedShapes = (contextNative) => {

    if (!selectedShapeCount) {
        sortSelection( contextNative.selection );
    }
    return selected.shapes;

}

const getSelectedTexts = (contextNative) => {

    if (!selectedTextCount) {
        sortSelection( contextNative.selection );
    }
    return selected.texts;

}

const getSelectedArtboards = (contextNative) => {

    if (!selectedArtboardCount) {
        sortSelection( contextNative.selection );
    }
    return selected.artboards;

}

const getSelectedGroups = (contextNative) => {

    if (!selectedGroupCount) {
        sortSelection( contextNative.selection );
    }
    return selected.groups;

}

const getSelectedLayerCount = (contextNative) => {

    if (!selectedLayerCount) {
        sortSelection( contextNative.selection );
    }
    return selectedLayerCount;

}

const getSelectedShapeCount = (contextNative) => {

    if (!selectedShapeCount) {
        sortSelection( contextNative.selection );
    }
    return selectedShapeCount;

}

const getSelectedTextCount = (contextNative) => {

    if (!selectedTextCount) {
        sortSelection( contextNative.selection );
    }
    return selectedTextCount;

}

const getSelectedArtboardCount = (contextNative) => {

    if (!selectedArtboardCount) {
        sortSelection( contextNative.selection );
    }
    return selectedArtboardCount;

}

const getSelectedGroupCount = (contextNative) => {

    if (!selectedGroupCount) {
        sortSelection( contextNative.selection );
    }
    return selectedGroupCount;

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
    getSelectedGroups,
    getSelectedLayerCount,
    getSelectedShapeCount,
    getSelectedTextCount,
    getSelectedArtboardCount,
    getSelectedGroupCount,
    getLayerType,
    hasSharedStyle
}
