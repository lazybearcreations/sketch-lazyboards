import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {

  var Dom = require('sketch/dom');
  var Ui = require('sketch/ui');

  var Artboard = Dom.Artboard;
  var Rectangle = Dom.Rectangle;

  var document = sketch.getSelectedDocument();
  var page = document.selectedPage;

  var selectedLayers = document.selectedLayers;
  var artboards = [];

  if (selectedLayers.length === 0) {
    Ui.message('No layers are selected.');
  } else {

    selectedLayers.forEach( function(layer, i) {

      

    });

  }

}
