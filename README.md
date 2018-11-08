# lazyboards

Sketch Plugin written in Cocoascript to enhance the functionality of Artboards within Sketch.

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

## Wrap layers in Artboards

- `Wrap` will take all the layer in your selection and wrap them in a square Artboard.
- Each Artboard will have a width and height based on the longest side of all the layers in the selection.
- Layers will be centered in the newly created Artboards.

![Wrap layers in Artboards animated gif](https://raw.githubusercontent.com/lazybearcreations/sketch-lazyboards/master/assets/Wrap-in-artboards.gif)

1. Select all the layers you wish to wrap in Artboards.
2. Select `Plugins` > `Lazyboards` > `Wrap layers in Artboards`

```
Note: If you have Artboards in your selection, they will be ignored.
```

## Duplicate to all Artboards

- `Duplicate to all` will take the selected layers and duplicate them to all Artboards on the same page.
- If the layers are already in an Artboard, the duplicates will be placed in the same position relative to the top left corner of each Artboard.
- If the layers are already in an Artboard, the layers will not be duplicated to the Artboard where they originate.
- If no Artboards are found, nothing happens.

![Wrap layers in Artboards animated gif](https://raw.githubusercontent.com/lazybearcreations/sketch-lazyboards/master/assets/Duplicate-to-all-Artboards.gif)

1. Select all the layers you wish to duplicate.
2. Select `Plugins` > `Lazyboards` > `Duplicate to all Artboards`

```
Note: If you have Artboards in your selection, they will be ignored.
```

## Duplicate to selected artboards

- `Duplicate to selected` will take the layers you have selected and duplicate them to the Artboards that are also in your selection.
- If the layers are already in an Artboard, the duplicates will be placed in the same position relative to the top left corner of each Artboard.
- If the layers are already in an Artboard, the layers will not be duplicated to the Artboard where they originate.

![Wrap layers in Artboards animated gif](https://raw.githubusercontent.com/lazybearcreations/sketch-lazyboards/master/assets/Duplicate-to-selected-Artboards.gif)

1. Select all the layers you wish to duplicate and all the Artboards that you wish to duplicate the layers to.
2. Select `Plugins` > `Lazyboards` > `Duplicate to selected Artboards`
