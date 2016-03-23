var ll = ll || {};
'use strict';

document.addEventListener('DOMContentLoaded', function () {
    ll.launcher.init();
});

ll.launcher = (function () {
    var init = function () {
        ll.routes.init();
        ll.fonts.init();
         ll.serviceWorker.init();
    };

    return {
        init: init
    }

})();

ll.routes = (function () {
    var routeCheck = function () {
        if (location.hash === undefined || location.hash === '') {
            location.hash = '#/';
        }
    };

    var route = function () {
        routie({
            '/': function () {
                ll.page.home();
            },
            '/appearance/:uuid': ll.page.appearance
        });
    };

    var init = function () {
        routeCheck();
        route();
    }

    return {
        init: init
    }
})();

ll.page = (function () {

    var home = function () {
        var url = '/api/feed';
        //pass the correct api url to the promise
        ll.get.data(url)
            //if this is done, respond by adding the response from the request a specific HTML element
            .then(function (response) {
                var target = document.getElementById("target");
                target.innerHTML = response;

            })
            //If there is an error, show this in the console
            .catch(function (e) {
                console.error(e);
            });
    };

    var appearance = function (uuid) {
        var url = 'api/appearance/' + uuid;

        ll.get.data(url)
            .then(function (response) {
                var target = document.getElementById("target");
                target.innerHTML = response;
                product();
            }).catch(function (e) {
                console.error(e);
            });
    };

    var product = function (data) {
        var firstProduct = document.querySelector('.product');
        var firstIndicator = document.querySelector(
            '.product-indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
        );
        var indicators = document.querySelectorAll('.product-indicator');

        firstProduct.classList.add('product-active');
        firstIndicator.classList.add('product-indicator-active');

        Array.prototype.forEach.call(indicators, function (el) {
            el.addEventListener('click', function (event) {
                var id = event.currentTarget.getAttribute('data-uuid');

                document
                    .querySelector('.product-active')
                    .classList.remove('product-active');

                document
                    .querySelector('.product-indicator-active')
                    .classList.remove('product-indicator-active');

                document
                    .querySelector('.product[data-uuid="' + id + '"]')
                    .classList.add('product-active');

                event.currentTarget.classList.add('product-indicator-active');
            });
        });
    };

    return {
        home: home,
        appearance: appearance
    }

})();

ll.get = (function () {

    function data(url) {
        // return a new Promise object
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            //open a get request, pass it the correct url, and set async to true
            request.open('GET', url, true);

            request.onload = function () {
                //ony if request is done
                if (request.status == 200) {
                    // send text that belongs to the request api
                    resolve(request.responseText);
                } else {
                    // if the request is rejected, show an error
                    reject(new Error('request failed!'));
                }
            };
            //send the request, if you do not declare this, the request will never be done
            request.send();
        });
    };

    return {
        data: data
    }

})();

ll.fonts = (function () {
    function init() {
        var observer = new FontFaceObserver('Raleway');

        observer.check().then(function () {
            document.documentElement.className += " fonts-loaded";
        });
    };

    return {
        init: init
    }
})();