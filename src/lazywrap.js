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

    var width = Math.max.apply(Math, selectedLayers.map(function(layer) { return layer.frame.width; }));
    var height = Math.max.apply(Math, selectedLayers.map(function(layer) { return layer.frame.height; }));

    var area = Math.max(width, height);

    selectedLayers.forEach( function(layer, i) {

      var index = page.layers.findIndex(function(item) {
        return layer.id == item.id;
      });

      var x = layer.frame.x;
      var y = layer.frame.y;

      var w = area;
      var h = area;

      var diffX = Math.abs(w - layer.frame.width);
      var diffY = Math.abs(h - layer.frame.height);

      var artboard = new Artboard({
        name: layer.name,
        frame: new Rectangle(x, y, w, h),
        layers: [layer.sketchObject]
      });

      artboard.layers[0].frame.x = diffX / 2;
      artboard.layers[0].frame.y = diffY / 2;

      artboards.push(artboard.sketchObject);

    });

    var nonSelectedLayers = page.layers.map(function(item) {
      if (item.selected === false) { return item.sketchObject; }
    });

    var pageLayers = artboards.concat(nonSelectedLayers);

    page.layers = pageLayers;

  }

}
