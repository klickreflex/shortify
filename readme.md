# Shortify

Shortify is a very basic jQuery plugin that truncates a DOM element and shows its full text within a tooltip if its length exceeds the character limit.

Tooltip styling is taken from Chris Bracco, check his article [A Simple CSS Tooltip](https://chrisbracco.com/a-simple-css-tooltip/).

## Setup & Usage
Make sure jQuery, `jquery.shortify.js` and `tooltips.css` are loaded and call the plugin on any selector you want to shortify:

    $(".long-field").shortify({
      // Options 
      char_limit: 90,
      position:  "tooltip-bottom",
      ellipsis: '...'
    });

## Options
- `char_limit`: When should truncation start, defaults to 100
- `position`: where to place the tooltip: tooltip-top (default), tooltip-right, tooltip-bottom, tooltip-left
- `ellipsis`: symbol or text to put after the truncated text, defaults to `…`

