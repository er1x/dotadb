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

        selectHero: function (ev) {
            if (ev.target.innerHTML !== this.model.get('name')) {
                return;
            }

            App.router.navigate("detail/" + this.model.get('id'), {trigger: true});
        }

    });

})();
