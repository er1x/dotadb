/*global App, $*/


window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        App.router = new App.Routers.Router();
    }
};

$(document).ready(function () {
    'use strict';
    App.init();
});
