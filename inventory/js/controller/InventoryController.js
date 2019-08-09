inventoryApp.controller('InventoryController', ['$scope', 'inventoryService', function($scope, inventoryService){
    $scope.title = "Inventory Items";
    $scope.btnLabel = "Hide Inventories";
    $scope.showFlag = true;
    $scope.inventories = [];

    // $scope.toggleShowInventory = function () {
    //     $scope.showFlag = !$scope.showFlag;
    //     $scope.btnLabel = $scope.showFlag ? 'Hide Inventories' : 'Show Inventories';
    // }

    inventoryService.getInventories().then(function(data){
        $scope.inventories = data;
        $scope.purchaseOrder = data.purchaseOrder;
    });
    
}]);