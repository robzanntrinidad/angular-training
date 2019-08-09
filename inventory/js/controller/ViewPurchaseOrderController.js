inventoryApp.controller('ViewPurchaseOrderController', ['$scope', 'purchaseOrderService', '$routeParams',
function($scope, purchaseOrderService, $routeParams) {
    $scope.title = 'Purchase Order View';
    $scope.purchaseOrder = {};
    $scope.inventories = {};
    $scope.btnHome = 'Home';

    purchaseOrderService.getPurchaseOrderById($routeParams.id).then(function(data){
        $scope.purchaseOrder = data;
        $scope.inventories = data.inventories;
    });
}])