/*global App, Backbone*/

App.Collections = App.Collections || {};

(function () {
    'use strict';

    App.Collections.Heroes = Backbone.Collection.extend({

        model: App.Models.HeroListItem,
        
        url: '/data/heroes.json',

        byName: function(name) {
            if (name === '')
                return [];
            return this.filter(function (hero) {
                var n = hero.get("name").toLowerCase();
                name = name.toLowerCase();
                return n.indexOf(name) > -1; 
            });
        }

    });

})();
