/*global App, Backbone, JST, $*/

App.Views = App.Views || {};

(function () {
    'use strict';

    App.Views.Index = Backbone.View.extend({

        el: '#sidebar',
        
        template: JST['app/scripts/templates/Index.ejs'],

        events: {
            "keyup :input": "findHero"
        },
        
        initialize: function () {
            this.listenTo(this.collection, 'add', this.addHero, this);
            this.listenTo(this.collection, 'reset', this.cleanList, this);
            this.listenTo(this.collection, 'change', this.render, this);
        },

        render: function () {
            this.$el.html(this.template());
            this.collection.forEach(this.addHero, this);
            return this;
        },
        
        cleanList: function () {
            $('.searchresult').empty();
        },
        
        renderList: function () {
            this.collection.forEach(this.addHero, this);
        },
        
        findHero: function () {
            var that = this;
            this.collection.reset();
            this.collection.fetch().done(function () {
                that.collection = that.collection.byName($(':input').val());
                that.cleanList();
                that.renderList();
            });
        },
        
        addHero: function (hero) {
            var heroView = new App.Views.HeroListItem({model: hero});
            heroView.setElement('.searchresult').render();
        }

    });

})();
