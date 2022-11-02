# Advanced SVG Export X.

Figma plugin to export SVG in XDS format.

[Install to Figma](https://www.figma.com/community/plugin/1168912766396607908/Advanced-SVG-Export-X)

This fork adds a new option for SVG generation that process the SVG so it meets the needs for the XDS. This processes are:

* Remove `width` and `height` from the root `svg` tag
* Remove `fill="none"` from the root `svg` tag
* Explicitly set the `fill` of the shapes o `none` if they don't have any
* Remove the colors that make the icon's background (white)
* Replace the color of the icon with `customColor` to use with CSS

Forked from [Advanced SVG Export](https://github.com/okotoki/advanced-svg-export)

