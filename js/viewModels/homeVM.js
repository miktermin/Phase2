define(['knockout'], function(ko) {
    return function homeVM() {
        var self = this;
        this.tabs = ko.observableArray([
                {title: 'Home'},
                {title: 'Tab1'},
                {title: 'Tab2'},
                {title: 'Tab3'},
                {title: 'Tab4'}
            ]);

        this.changeHash = function(tab) {
            window.location.hash = tab.title;
        };

        this.getHash = function() {
            var hash = window.location.hash.substring(1);
            return hash;
        }

        routie('*', function() {
                if(self.getHash()) {
                    alert("Clicked tab is " + self.getHash());
                }
            });
    }
});
