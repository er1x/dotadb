/*global App, Backbone*/

App.Collections = App.Collections || {};

(function () {
    'use strict';

    App.Collections.Heroes = Backbone.Collection.extend({

        model: App.Models.HeroListItem,
        
        url: '/data/heroes.json',
        
        byName: function(name) {
            var filtered;
            filtered = this.filter(function (hero) {
                return hero.get("name").indexOf(name) > -1; 
            });
            return new App.Collections.Heroes(filtered);
        }

    });

})();
