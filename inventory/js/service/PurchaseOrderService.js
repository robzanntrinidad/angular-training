inventoryApp.factory('purchaseOrderService', ['$http', function($http){
    return {
        getPurchaseOrders: function(){
            return $http.get("http://localhost:8098/api/v1/purchase").then(function(response){
                return response.data;
            })
        },
        getPurchaseOrderById: function(id){
            return $http.get("http://localhost:8098/api/v1/purchase/" + id).then(function(response){
                return response.data;
            })
        }
    }
}]);