angular.module('quoteBook').controller('mainController', function ($scope, dataService) {

  $scope.quoteArray = dataService.getQuotes();

  var author = prompt('bro...whats your name?');

$scope.addQuote = function () {

  dataservice.addQuote($scope.newQuote, author);
  $scope.newQuote = ""
  };

});
