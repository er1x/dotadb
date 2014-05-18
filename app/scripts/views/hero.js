/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
    'use strict';

    App.Views.Hero = Backbone.View.extend({

        template: JST['app/scripts/templates/hero.ejs'],

        el: '#content',

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
