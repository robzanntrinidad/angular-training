inventoryApp.directive('purchaseInfo', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        template: "<h3>{{data.receiptNumber}}</h3>" +
                  "<p>Date Created: {{data.dateCreated | date: longDate }}</p>" +
                  "<h4> Inventories: </h4>" +
                  "<table class='table table-striped'>" + 
                  "<thead> <tr> <th>Name</th> <th>Price</th> <th>Order Date</th> </tr> </thead>" +
                  "<tbody>" + 
                  "<tr ng-repeat='sample in data.inventories'>" +
                        "<td> <a href='#!/inventory/{{sample.id}}'> {{sample.name}} </a> </td>" +
                        "<td>{{sample.price | currency:'PHP '}}</td> <td>{{sample.dateCreated | date: longDate }}</td> </tr> </tbody>" +
                 "</table>"
    }
});