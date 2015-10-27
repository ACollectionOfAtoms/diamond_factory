app.factory('bands', ['$http', function($http) {
  return $http.get('http://acollectionofatoms.me/df/data/bands.json')
  .success(function(data) {
       return data;
       })
  .error(function(err) {
    return err;
  });
}]);
