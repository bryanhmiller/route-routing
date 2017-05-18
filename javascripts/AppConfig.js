app.config(function($routeProvider) {
  $routeProvider
    .when("/route/one", {
      templateUrl: "partials/route-one.html",
      controller: "routeOneCtrl"
    })
    .when("/route/two", {
      templateUrl: "partials/route-two.html",
      controller: "routeTwoCtrl"
    })
    .otherwise("/route/one");
});
