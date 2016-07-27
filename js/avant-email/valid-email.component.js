(function() {
"use strict";
    var module = angular.module("avEmail");
    module.component("validEmail", {
        templateUrl: "/avant-email/valid-email.component.html",
        controllerAs: "model",
        controller: function () {
            this.message = "fix hooray";
        }
    });
}());