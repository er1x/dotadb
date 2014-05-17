/*global App, Backbone, JST, $*/

App.Views = App.Views || {};

(function () {
    'use strict';

    App.Views.Index = Backbone.View.extend({

        el: '#sidebar',
        
        template: JST['app/scripts/templates/Index.ejs'],

        events: {
            "keyup :input": "findHero",
        },
        
        initialize: function () {
            this.collection.fetch();
            this.heroViews = [];
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        cleanHeroes: function() {
            this.heroViews.forEach(function (view) {
                view.stopListening();
            });
            $('.searchresult').empty();
            this.heroViews = [];
        },

        findHero: function () {
            var that = this;
            var list = this.collection.byName($(':input').val());
            this.cleanHeroes();
            list.forEach(function (hero) {
                that.addHero(hero, that.heroViews);
            });
        },
        
        addHero: function (hero, list) {
            var heroView = new App.Views.HeroListItem({model: hero});
            heroView.render();
            list.push(heroView);
        }

    });

})();
