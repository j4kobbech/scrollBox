;(function($) {
 
    $.fn.scrollBox = function (options) {
        var opts = options || {};

        // These are your default options
        var defaults = {
        	msBeforeShow: 250,
            msBeforeHide: 1000,
            msfadeIn: 250,
            msfadeOut: 250
        };

        // Here we merge your default options with the options given to the plugin
        var settings = $.extend(defaults, opts);

        return this.each ( function () {
            var $box = $(this);
            var hideTimerHandle;

            var hideScrollBox = function(){
                $box.fadeOut(settings.msfadeOut);
            }

            var showScrollBox = function(){
                $box.fadeIn(settings.msfadeIn);
            }

            var captureScrollEvent = function () {
                $(window).on('scroll', function () {
                    clearTimeout(hideTimerHandle);
                    setTimeout(showScrollBox, settings.msFadeIn+settings.msBeforeShow);
                    hideTimerHandle = setTimeout(hideScrollBox, settings.msBeforeHide);
                });
            };

            captureScrollEvent();
        });

    };
 
}(jQuery));