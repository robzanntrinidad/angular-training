inventoryApp.controller('PurchaseOrderController', ['$scope', 'purchaseOrderService', function($scope, purchaseOrderService){
    $scope.title = "Purchase Orders";
    // $scope.btnLabel = "Hide Purchase Orders";
    // $scope.showFlag = true;
    $scope.purchaseOrders = [];

    // $scope.toggleShowPurchaseOrders = function () {
    //     $scope.showFlag = !$scope.showFlag;
    //     $scope.btnLabel = $scope.showFlag ? 'Hide Purchase Orders' : 'Show Inventories';
    // }

    purchaseOrderService.getPurchaseOrders().then(function(data){
        $scope.purchaseOrders = data;
    });

}]);