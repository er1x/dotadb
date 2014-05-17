/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
    'use strict';

    App.Views.HeroListItem = Backbone.View.extend({

        template: JST['app/scripts/templates/HeroListItem.ejs'],

        el: '.searchresult',

        events: {
            'click .herobox': 'selectHero'
        },

        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
            return this;
        },

        selectHero: function () {
            console.log(this.model);
        }

    });

})();
