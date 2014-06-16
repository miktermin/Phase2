require(['jquery', 'knockout', 'homeVM', 'routie'], function($, ko, homeVM, routie) {
    $(document).ready(function() {
        ko.applyBindings(new homeVM());
    });
});