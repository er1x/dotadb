/*global App, Backbone*/

App.Routers = App.Routers || {};

(function () {
    'use strict';

    App.Routers.Router = Backbone.Router.extend({

        routes: {
            "": "index",
            "detail/:hero": "detail"
        },

        initialize: function () {
            
            this.heroList = new App.Collections.Heroes();
            this.indexView = new App.Views.Index({collection: this.heroList});
            
            Backbone.history.start();
        },

        index: function () {
            this.indexView.render();
        },

        detail: function (hero) {
            console.log('detail');
        }

    });

})();
