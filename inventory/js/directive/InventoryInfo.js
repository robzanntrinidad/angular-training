inventoryApp.directive('inventoryInfo', function(){
   return{
       restrict: 'E',
       scope: {
           data: '='
       },
       template: "<h2>{{data.name}}</h2>" +
                 "<p>Price: &emsp; &emsp; &emsp; &emsp; &emsp; {{data.price | currency:'PHP '}}</p>" +
                 "<p>Date Created: &emsp; &emsp; {{data.dateCreated | date: longDate }}</p>" + 
                 "<p>Receipt Number: &emsp; <a href='#!/purchase/{{data.purchaseOrder.id}}'>{{data.purchaseOrder.receiptNumber}}</a></p>"
   } 
});