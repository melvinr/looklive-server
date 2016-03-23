var ll = ll || {};
'use strict';

ll.serviceWorker = (function () {
    var init = function () {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js', {
                    scope: './'
                })
                .then(function (reg) {
                    console.log('registered sw (see console)');
                    console.info('registered sw', reg);
                })
                .catch(function (err) {
                    console.log('error registering sw (see console)');
                    console.error('error registering sw', err);
                });
        } else {
            console.log('ServiceWorker is not supported');
        }
    };

    return {
        init: init
    }

})();