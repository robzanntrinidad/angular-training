inventoryApp.factory('inventoryService', ['$http', function($http){
    return {
        getInventories: function(){
            return $http.get("http://localhost:8098/api/v1/inventory").then(function(response){
                return response.data;
            });
        },
        getInventoryById: function(id){
            return $http.get("http://localhost:8098/api/v1/inventory/" + id).then(function(response){
                return response.data;
            })
        },
        getReceiptName: function(id) {
            return $http.get("http://localhost:8098/api/v1/purchase/inventory/" + id).then(function(response){
                return response.data;
            })
        }
    }
}]);