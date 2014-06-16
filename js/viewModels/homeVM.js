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

        routie({
            'Home': function() {
                alert("Clicked tab is Home");
            },
            'Tab1': function() {
                alert("Clicked tab is Tab1");
            },
            'Tab2': function() {
                alert("Clicked tab is Tab2");
            },
            'Tab3': function() {
                alert("Clicked tab is Tab3");
            },
            'Tab4': function() {
                alert("Clicked tab is Tab4");
            }
        });
    };
});
