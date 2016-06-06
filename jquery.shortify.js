(function ( $ ) { 

  $.fn.shortify = function(options) {
    // Setting up default options
    var settings = $.extend({
        // These are the defaults.
        char_limit:       "100",
        position:         "tooltip-top",
        ellipsis:  "…"
    }, options );

    return this.each(function() {
      var $this = $(this);
      var char_count = $this.text().length;

      if(char_count > settings.char_limit) {
        $this.addClass("shortified " + settings.position);
        $this.attr("data-tooltip", $this.text());
        trimmed = $this.text().substring(0, settings.char_limit).split(" ").slice(0, -1).join(" ") + settings.ellipsis;
        $this.text(trimmed);
      }
    });
  };
}( jQuery ));