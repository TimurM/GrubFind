(function() {

  var StoresController = function($scope) {

    $scope.stores = [
      {
        name: 'Sightglass',
        address: '7th street'
      },
      {
        name: 'Sextons coffee',
        address: '10th street'
      }
    ];
  };

    StoresController.$inject = ['$scope'];

    angular.module('grubFind').controller('StoresController', StoresController);

}());
