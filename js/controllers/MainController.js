app.controller('MainController', ['$scope', 'bands', function ($scope, bands) {
  bands.success(function(data) {
    $scope.slides = data;
  });
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
}]);