/*global App, Backbone*/

App.Routers = App.Routers || {};

(function () {
    'use strict';

    App.Routers.Router = Backbone.Router.extend({

        routes: {
            "": "index",
            "detail/:heroId": "detail"
        },

        initialize: function () {
            
            this.heroList = new App.Collections.Heroes();
            this.indexView = new App.Views.Index({collection: this.heroList});
            this.detailView = new App.Views.Hero({model: {}});
            
            Backbone.history.start();
        },

        index: function () {
            this.indexView.render();
        },

        detail: function (heroId) {
            
            this.currentHero = this.heroList.get(heroId);

            this.detailView.model = this.currentHero;
            this.detailView.render();
        }

    });

})();
