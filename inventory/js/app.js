var inventoryApp = angular.module("inventoryApp", ['ngRoute']);

inventoryApp.config(function($routeProvider) {
    $routeProvider
        .when('/inventory', {
            controller: 'InventoryController',
            templateUrl: 'js/view/inventoryHome.html'
        })
        .when('/inventory/:id', {
            controller: 'ViewInventoryController',
            templateUrl: 'js/view/viewInventory.html'
        })
        .when('/', {
            controller: 'PurchaseOrderController',
            templateUrl: 'js/view/purchaseOrderHome.html'
        })
        .when('/purchase/:id', {
            controller: 'PurchaseOrderController',
            templateUrl: 'js/view/viewPurchaseOrder.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});