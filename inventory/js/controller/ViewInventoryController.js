inventoryApp.controller('ViewInventoryController', ['$scope', 'inventoryService', '$routeParams',
function($scope, inventoryService, $routeParams) {
    $scope.title = 'Inventory View';
    $scope.inventory = {};
    $scope.id = 0;
    $scope.purchaseOrder = {};
    $scope.btnHome = 'Home';

    inventoryService.getInventoryById($routeParams.id).then(function(data){
        $scope.inventory = data;
        $scope.purchaseOrder = data.purchaseOrder;
    });
}])